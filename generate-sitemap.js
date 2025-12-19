const fs = require("fs");
const path = require("path");

const siteUrl = "https://risiga.com";

const pages = [
  "",
  "/about",
  "/services",
  "/contact"
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `
  <url>
    <loc>${siteUrl}${page}</loc>
  </url>
`
  )
  .join("")}
</urlset>`;

fs.writeFileSync(
  path.join(process.cwd(), "public", "sitemap.xml"),
  sitemap
);

console.log("✅ Sitemap generated");
