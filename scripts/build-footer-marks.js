/**
 * Turn the supplied membership logos into clean white marks on transparency.
 *
 * The two files fight each other: VAI_member.jpg is white lettering on a solid
 * grey panel, artlinks-logo.jpg is a dark green flower on white. A single CSS
 * filter can only knock out one of those, which is why the footer showed a box
 * behind one of them.
 *
 * So instead of guessing at polarity, each mark is separated from whatever its
 * own background happens to be: sample the corners, measure every pixel's
 * distance from that colour, and use the distance as alpha. The result is the
 * artwork alone, recoloured white, which is what the dark footer wants.
 *
 *   node scripts/build-footer-marks.js
 */
const fs = require("fs")
const path = require("path")
const sharp = require("sharp")

// `transparent: true` marks a source that already arrives as clean white
// artwork on real alpha, so it only needs its padding trimmed. The knockout
// below is for the opaque scans, which have a background to separate from.
const SOURCES = [
  {
    in: "src/components/Foot/images/VAI-Grey-Logo-Square-Transparent-2025.png",
    out: "vai-member.png",
    transparent: true,
  },
  { in: "src/components/Foot/images/artlinks-logo.jpg", out: "artlinks.png" },
]

const OUT_DIR = path.join(__dirname, "..", "src", "images", "footer-marks")

// distance below `lo` is background, above `hi` is solid ink, between is a
// smooth edge so the marks do not come out jagged
const LO = 0.1
const HI = 0.3

const smoothstep = (lo, hi, x) => {
  const t = Math.min(1, Math.max(0, (x - lo) / (hi - lo)))
  return t * t * (3 - 2 * t)
}

async function build(source) {
  const src = path.join(__dirname, "..", source.in)
  fs.mkdirSync(OUT_DIR, { recursive: true })

  if (source.transparent) {
    const dest = path.join(OUT_DIR, source.out)
    const before = await sharp(src).metadata()
    await sharp(src).trim().png().toFile(dest)
    const after = await sharp(dest).metadata()
    console.log(
      `  ${source.out.padEnd(16)} already transparent          ` +
        `${before.width}x${before.height} -> ${after.width}x${after.height}`
    )
    return
  }

  const { data, info } = await sharp(src)
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true })

  const { width, height, channels } = info
  const at = (x, y) => {
    const i = (y * width + x) * channels
    return [data[i], data[i + 1], data[i + 2]]
  }

  // background = mean of the four corners
  const corners = [
    at(0, 0),
    at(width - 1, 0),
    at(0, height - 1),
    at(width - 1, height - 1),
  ]
  const bg = [0, 1, 2].map(
    c => corners.reduce((s, p) => s + p[c], 0) / corners.length
  )

  const maxDistance = Math.sqrt(255 * 255 * 3)
  const rgba = Buffer.alloc(width * height * 4)
  let inked = 0

  for (let i = 0, p = 0; p < width * height; p++, i += channels) {
    const dr = data[i] - bg[0]
    const dg = data[i + 1] - bg[1]
    const db = data[i + 2] - bg[2]
    const distance = Math.sqrt(dr * dr + dg * dg + db * db) / maxDistance
    const alpha = Math.round(smoothstep(LO, HI, distance) * 255)

    const o = p * 4
    rgba[o] = 255
    rgba[o + 1] = 255
    rgba[o + 2] = 255
    rgba[o + 3] = alpha
    if (alpha > 8) inked++
  }

  const dest = path.join(OUT_DIR, source.out)

  await sharp(rgba, { raw: { width, height, channels: 4 } })
    .png()
    .trim()
    .toFile(dest)

  const after = await sharp(dest).metadata()
  console.log(
    `  ${source.out.padEnd(16)} bg rgb(${bg.map(Math.round).join(",")})  ` +
      `${width}x${height} -> ${after.width}x${after.height}  ` +
      `ink ${((inked / (width * height)) * 100).toFixed(1)}%`
  )
}

;(async () => {
  for (const source of SOURCES) await build(source)
  console.log(`\nwritten to src/images/footer-marks/`)
})()
