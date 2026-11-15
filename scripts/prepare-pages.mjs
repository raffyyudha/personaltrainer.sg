import { readdir, readFile, stat, unlink, writeFile, mkdir, access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const output = path.join(root, "out");
const limit = 20_000;
const maxAssetBytes = 25 * 1024 * 1024;

async function walk(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const filename = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(filename));
    else files.push(filename);
  }
  return files;
}

// This is safe only with SiteLink's document navigation and the inline hydration
// payload kept in every HTML file. Never remove these from a normal Next build.
let removedPayloads = 0;
for (const filename of await walk(output)) {
  if (!filename.endsWith(".txt")) continue;
  try {
    await access(filename.slice(0, -4) + ".html");
  } catch {
    continue; // Keep robots.txt and any other ordinary text assets.
  }
  await unlink(filename);
  removedPayloads++;
}

// Pages serves extensionless HTML URLs itself. Preserve the legacy privacy URL
// with an HTTP redirect rather than relying on Next's client-side redirect.
await writeFile(path.join(output, "_redirects"), "/privacy /privacy-policy 301\n");

const sitemap = await readFile(path.join(output, "sitemap.xml"), "utf8");
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => new URL(match[1]));
for (const url of urls) {
  const relative = url.pathname === "/" ? "index.html" : `${url.pathname.slice(1)}.html`;
  try { await access(path.join(output, relative)); }
  catch { throw new Error(`Missing exported sitemap URL: ${url.pathname}`); }
}

const files = await walk(output);
let totalBytes = 0;
for (const filename of files) {
  const { size } = await stat(filename);
  if (size > maxAssetBytes) throw new Error(`Asset exceeds Pages' 25 MiB limit: ${filename}`);
  totalBytes += size;
}
const report = {
  pseoPages: urls.filter(url => url.pathname.startsWith("/singapore/")).length,
  sitemapUrls: urls.length,
  removedPayloads,
  uploadFiles: files.length,
  freePlanLimit: limit,
  remainingFileSlots: limit - files.length,
  totalBytes,
};
await mkdir(path.join(root, "artifacts", "cloudflare-pages"), { recursive: true });
await writeFile(path.join(root, "artifacts", "cloudflare-pages", "build-report.json"), JSON.stringify(report, null, 2) + "\n");
console.log(JSON.stringify(report, null, 2));
if (files.length > limit) {
  throw new Error(`Export has ${files.length} files; Pages Free allows ${limit}. Do not upload this build.`);
}
console.log("All sitemap URLs exist and the export fits Cloudflare Pages Free.");
