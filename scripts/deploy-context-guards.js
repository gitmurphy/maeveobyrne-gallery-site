/**
 * Keep non-production deploys out of search results.
 *
 * netlify.toml deploy contexts only cover build settings and environment -
 * [[headers]] inside a [context.*] block is silently ignored, so the guard is
 * written into the publish directory after the build instead, where Netlify
 * picks up _headers and robots.txt.
 *
 * Netlify sets CONTEXT to "production", "branch-deploy" or "deploy-preview".
 * Locally it is unset, and nothing is written.
 */
const fs = require("fs")
const path = require("path")

const context = process.env.CONTEXT
const publicDir = path.join(__dirname, "..", "public")

if (!context || context === "production") {
  console.log(
    `[deploy-guard] context "${context || "local"}" - production, no noindex written`
  )
  process.exit(0)
}

if (!fs.existsSync(publicDir)) {
  console.error(`[deploy-guard] no publish directory at ${publicDir}`)
  process.exit(1)
}

fs.writeFileSync(
  path.join(publicDir, "_headers"),
  "/*\n  X-Robots-Tag: noindex, nofollow\n"
)
fs.writeFileSync(
  path.join(publicDir, "robots.txt"),
  "User-agent: *\nDisallow: /\n"
)

console.log(
  `[deploy-guard] context "${context}" - wrote _headers and robots.txt (noindex)`
)
