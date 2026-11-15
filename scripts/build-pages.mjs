import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { rm, rename } from "node:fs/promises";

const root = fileURLToPath(new URL("../", import.meta.url));
process.chdir(root);
const env = { ...process.env, PAGES_STATIC_EXPORT: "1" };
const uploadDirectory = path.resolve(root, "out");
if (path.dirname(uploadDirectory) !== path.resolve(root) || path.basename(uploadDirectory) !== "out") {
  throw new Error("Refusing to clean a directory outside the generated out folder.");
}
await rm(uploadDirectory, { recursive: true, force: true });

for (const args of [
  ["--import", "tsx", "scripts/generate-sitemap.ts"],
  ["node_modules/next/dist/bin/next", "build"],
]) {
  const result = spawnSync(process.execPath, args, { cwd: root, env, stdio: "inherit" });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status ?? 1);
}

// With output: export, Next 15 uses distDir as the final export destination.
// Keep the upload folder conventional and independent of Next's build internals.
await rename(path.join(root, ".next-pages"), uploadDirectory);
const prepared = spawnSync(process.execPath, ["scripts/prepare-pages.mjs"], { cwd: root, env, stdio: "inherit" });
if (prepared.error) throw prepared.error;
if (prepared.status !== 0) process.exit(prepared.status ?? 1);

console.log(`Cloudflare Pages upload directory: ${path.join(root, "out")}`);
