# Cloudflare Pages Free

This project has 19,866 pSEO URLs. The Free plan allows 20,000 uploaded files,
including HTML, JavaScript, fonts and images. A normal Next.js static export also
emits a React Server Component `.txt` payload for every page, exceeding that limit.

`npm run build:pages` exports every URL and uses ordinary document links through
`SiteLink` instead of Next.js client navigation. The post-build step removes only
`.txt` files that have a corresponding HTML file. Each HTML file retains its
inline React hydration data, metadata, canonical URL and structured data. Robots,
sitemap, interactive components and the existing page design are retained.

There is no Worker, Function, database, R2 bucket or runtime rendering requirement.
Requests are served as static assets. Editing content requires another build.

## Build and verify

```sh
npm ci
npm run build:pages
```

Upload **`out`**, never `.next` or `.next-pages`. The build checks that every
sitemap URL has an exported HTML file, every asset is at most 25 MiB, and the
total file count is at most 20,000. It writes the actual count and remaining
capacity to `artifacts/cloudflare-pages/build-report.json`. If any limit is
exceeded, the command fails; do not upload a partial or failed build.

Keep internal links using `@/components/SiteLink`. Importing `next/link` directly
or adding `router.push()` in the static deployment would require the deleted
payload files. Normal development still uses Next.js navigation.

## Pages dashboard (Git integration)

- Framework preset: **None**
- Build command: **`npm run build:pages`**
- Build output directory: **`out`**
- Root directory: the repository root
- Node version: **22** (`NODE_VERSION=22` in build settings)

Use the production branch you normally publish from. The full export can take
several minutes. If the hosted build exceeds Pages' build time limit, build
locally and use Direct Upload with Wrangler instead.

## Preview and Direct Upload

```sh
npx wrangler@4 pages dev out
npx wrangler@4 login
npx wrangler@4 pages deploy out --project-name personaltrainer-sg
```

For an existing Pages project, replace `personaltrainer-sg` in the command and
`wrangler.jsonc` with its actual name. Use Git integration or Wrangler for this
many files; the dashboard's drag-and-drop uploader has a lower file limit.
Wrangler login/deploy are separate from the local build and require your account.

Cloudflare automatically serves `/rates.html` as `/rates` (and the equivalent for
other routes). The generated `_redirects` preserves `/privacy` as an HTTP 301 to
`/privacy-policy`. A real `404.html` is exported for unknown routes.

## Capacity

The verified export contains **19,981 files**, including all **19,866 pSEO pages**.
That leaves **19 file slots** in the Free plan. This count can change with later
code or content updates; check the report after each build.

The existing pSEO URLs are retained, but this solution is close to the Free plan's
file ceiling. Adding pages, images or generated chunks can use the remaining
slots. The build report is the source of truth. If the project later outgrows
20,000 files, choose a runtime architecture or a larger hosting plan rather than
silently dropping SEO URLs.

References:

- https://developers.cloudflare.com/pages/platform/limits/
- https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/
- https://nextjs.org/docs/app/guides/static-exports
