import * as fs from "fs";
import { menuItemsData } from "./src/util/menuItemsData";
const baseUrl = "https://www.rlmastery.com";
function flattenItems(items) {
    const urls = [];
    items.forEach((item) => {
        if (item.items) {
            urls.push(...flattenItems(item.items));
        }
        else if (item.value) {
            urls.push(item.value);
        }
    });
    return urls;
}
const pages = flattenItems(menuItemsData);
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
    .map((page) => `
  <url>
    <loc>${baseUrl}/${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`)
    .join("")}
</urlset>`;
fs.writeFileSync("public/sitemap.xml", sitemapContent);
console.log("Sitemap generated!");
