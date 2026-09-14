import fs from "fs";
import path from "path";
import { generatePseoMatrix } from "../src/data/pseo/matrix";

const baseUrl = "https://personaltrainer.sg";

const mainPages = [
  { url: baseUrl, priority: "1.0", changefreq: "daily" },
  { url: `${baseUrl}/singapore`, priority: "0.9", changefreq: "daily" },
  { url: `${baseUrl}/services`, priority: "0.9", changefreq: "weekly" },
  { url: `${baseUrl}/about`, priority: "0.7", changefreq: "monthly" },
  { url: `${baseUrl}/rates`, priority: "0.8", changefreq: "monthly" },
  { url: `${baseUrl}/results`, priority: "0.8", changefreq: "weekly" },
  { url: `${baseUrl}/contact`, priority: "0.7", changefreq: "monthly" },
  { url: `${baseUrl}/personal-trainer-cost-singapore`, priority: "0.8", changefreq: "weekly" },
  { url: `${baseUrl}/strength-training-medical-weight-loss-singapore`, priority: "0.8", changefreq: "weekly" },
  { url: `${baseUrl}/privacy`, priority: "0.3", changefreq: "yearly" },
  { url: `${baseUrl}/terms`, priority: "0.3", changefreq: "yearly" },
];

console.log("Generating PSEO Matrix URLs...");
const pseoPages = generatePseoMatrix();
console.log(`Found ${pseoPages.length} PSEO pages.`);

const dateStr = new Date().toISOString().split("T")[0];

let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

for (const page of mainPages) {
  xml += `  <url>\n`;
  xml += `    <loc>${page.url}</loc>\n`;
  xml += `    <lastmod>${dateStr}</lastmod>\n`;
  xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
  xml += `    <priority>${page.priority}</priority>\n`;
  xml += `  </url>\n`;
}

for (const page of pseoPages) {
  xml += `  <url>\n`;
  xml += `    <loc>${baseUrl}/singapore/${page.slug}</loc>\n`;
  xml += `    <lastmod>${dateStr}</lastmod>\n`;
  xml += `    <changefreq>weekly</changefreq>\n`;
  xml += `    <priority>0.8</priority>\n`;
  xml += `  </url>\n`;
}

xml += `</urlset>\n`;

const outputPath = path.join(process.cwd(), "public", "sitemap.xml");
fs.writeFileSync(outputPath, xml, "utf-8");
console.log(`Physical sitemap.xml generated successfully at ${outputPath} (${(xml.length / (1024 * 1024)).toFixed(2)} MB, total ${mainPages.length + pseoPages.length} URLs).`);
