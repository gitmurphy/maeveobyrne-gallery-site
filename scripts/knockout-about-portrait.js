/**
 * Knock the pale blue backing out of the About-page collage.
 *
 * maeve_layered_profile.png is two photos sitting on a flat rgb(227,254,255)
 * panel. On the page that panel reads as two light blue squares in the gaps
 * around the photos, which only looked intentional while the site background
 * happened to be a similar colour. Making it transparent lets whatever is
 * behind it show through, so the collage keeps working if the background
 * changes.
 *
 * The fill is removed by flood-filling inward from the border rather than by
 * matching the colour everywhere: a colour match would also punch holes in any
 * pale-blue pixel inside the photographs themselves (sky, the Kusama room's
 * lights). Flooding from the edge can only ever reach the surrounding panel.
 *
 * Edge pixels get partial alpha from how far they sit between the fill colour
 * and the photo, so the cut keeps its antialiasing instead of going jagged.
 *
 *   node scripts/knockout-about-portrait.js
 */
const path = require("path")
const sharp = require("sharp")

const SRC = path.join(
  __dirname,
  "..",
  "src",
  "components",
  "AboutSection",
  "images",
  "maeve_layered_profile.png"
)

// the flat backing colour, sampled from the corners
const FILL = [227, 254, 255]

// within TOL of the fill is panel; beyond FEATHER is photo; between the two
// the pixel is on an antialiased edge and gets proportional alpha
const TOL = 10
const FEATHER = 46

const distance = (data, i) =>
  Math.sqrt(
    (data[i] - FILL[0]) ** 2 +
      (data[i + 1] - FILL[1]) ** 2 +
      (data[i + 2] - FILL[2]) ** 2
  )

async function main() {
  const { data, info } = await sharp(SRC)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true })

  const W = info.width
  const H = info.height

  // Flood inward from every border pixel. The stack holds pixel indices; a
  // pixel is enqueued only while it still looks like the panel, so the fill
  // stops at the photo edges.
  const outside = new Uint8Array(W * H)
  const stack = []
  for (let x = 0; x < W; x++) {
    stack.push(x, (H - 1) * W + x)
  }
  for (let y = 0; y < H; y++) {
    stack.push(y * W, y * W + W - 1)
  }

  while (stack.length) {
    const p = stack.pop()
    if (outside[p]) continue
    if (distance(data, p * 4) > FEATHER) continue

    outside[p] = 1
    const x = p % W
    const y = (p - x) / W
    if (x > 0) stack.push(p - 1)
    if (x < W - 1) stack.push(p + 1)
    if (y > 0) stack.push(p - W)
    if (y < H - 1) stack.push(p + W)
  }

  let cleared = 0
  let feathered = 0

  for (let p = 0; p < W * H; p++) {
    if (!outside[p]) continue
    const i = p * 4
    const d = distance(data, i)

    if (d <= TOL) {
      data[i + 3] = 0
      cleared++
    } else {
      // partway onto a photo edge: fade in over the feather range
      data[i + 3] = Math.round(
        Math.min(1, (d - TOL) / (FEATHER - TOL)) * 255
      )
      feathered++
    }
  }

  await sharp(data, { raw: { width: W, height: H, channels: 4 } })
    .png()
    .toFile(SRC)

  const pct = ((cleared / (W * H)) * 100).toFixed(1)
  console.log(
    `  maeve_layered_profile.png  ${W}x${H}  ` +
      `cleared ${cleared} px (${pct}%), ${feathered} edge px feathered`
  )
}

main()
