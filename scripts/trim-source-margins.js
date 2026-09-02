/**
 * Trim the baked-in white margin from each gallery painting.
 *
 * Every scan carries its own white border and they are all different — Gates at
 * Monkey Puzzle has 68px left and right against 12px top and bottom, First
 * Lemon Spray has 62px top and bottom against 32px sides. The gallery mat is a
 * uniform 16px sitting outside that, so without trimming the white reads as
 * uneven on every tile and different between tiles.
 *
 * gatsby-plugin-sharp accepts transformOptions.trim in the schema but its
 * gatsbyImageData path ignores it — trim only ever applied to the legacy
 * fluid/fixed resolvers — so it has to happen to the source instead.
 *
 * Safe to re-run, and converges rather than being strictly idempotent: a second
 * pass shaved a further edge off 3 of 118 images because re-encoding to JPEG
 * moves pixels either side of the threshold. It reaches a fixed point by the
 * third pass.
 *
 * Pre-watermark masters are backed up outside the repo, and this whole step is
 * superseded by the Phase 3 pipeline that rebuilds from those masters.
 *
 *   node scripts/trim-source-margins.js [--dry]
 */
const fs = require("fs")
const path = require("path")
const sharp = require("sharp")

const THRESHOLD = 14
const dry = process.argv.includes("--dry")

// every collection that gets matted on the site
const COLLECTIONS = ["gallery", "laf-gallery", "lyls-gallery"]
const named = process.argv.slice(2).filter(a => !a.startsWith("--"))
const collections = named.length ? named : COLLECTIONS

async function trim(dir, file) {
  const full = path.join(dir, file)
  const before = await sharp(full).metadata()

  let buffer
  try {
    buffer = await sharp(full).trim({ threshold: THRESHOLD }).toBuffer()
  } catch (err) {
    // sharp < 0.32 takes a bare number
    buffer = await sharp(full).trim(THRESHOLD).toBuffer()
  }

  const after = await sharp(buffer).metadata()
  const changed = after.width !== before.width || after.height !== before.height

  if (changed && !dry) {
    fs.writeFileSync(full, buffer)
  }

  return { file, before, after, changed }
}

;(async () => {
  let trimmed = 0
  let untouched = 0
  let total = 0

  for (const name of collections) {
    const dir = path.join(__dirname, "..", "src", "images", name)
    if (!fs.existsSync(dir)) {
      console.log(`  (no such collection: ${name})`)
      continue
    }
    const files = fs.readdirSync(dir).filter(f => /\.(jpe?g|png)$/i.test(f))
    total += files.length
    console.log(`\n${name} (${files.length} files)`)

    for (const file of files) {
      const r = await trim(dir, file)
      if (r.changed) {
        trimmed++
        console.log(
          `  ${r.file.padEnd(46)} ${r.before.width}x${r.before.height} -> ${r.after.width}x${r.after.height}`
        )
      } else {
        untouched++
      }
    }
  }

  console.log(
    `\n${dry ? "[dry run] would trim" : "trimmed"}: ${trimmed}   already clean: ${untouched}   total: ${total}`
  )
})()
