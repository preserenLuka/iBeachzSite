// generate-sitemap.ts
import fs from "fs";
import path from "path";
import { menuItemsData } from "./src/util/menuItemsData.js"; // note .js for Node ESM

// --- Config ---
const BASE_URL = "https://rlmastery.com"; // Replace with your actual domain
const SITEMAP_FILE = path.join(process.cwd(), "public", "sitemap.xml");

// --- Type definitions ---
interface SubItem {
  label: string;
  value: string;
}

interface MenuItem {
  title: string;
  key: string;
  items: SubItem[];
}

// --- Build paths ---
const paths: string[] = ["/"]; // Always include homepage

menuItemsData.forEach((menu: MenuItem) => {
  menu.items.forEach((sub: SubItem) => {
    paths.push(`/${sub.value}`);
  });
});

// --- Generate sitemap XML ---
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map(
    (url) => `  <url>
    <loc>${BASE_URL}${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>${url === "/" ? 1.0 : 0.8}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

// --- Write sitemap ---
fs.writeFileSync(SITEMAP_FILE, sitemap, "utf-8");
console.log("✅ Sitemap generated at:", SITEMAP_FILE);
