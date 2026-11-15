/** @type {import('next').NextConfig} */
const pagesExport = process.env.PAGES_STATIC_EXPORT === "1";
const nextConfig = {
  ...(pagesExport ? {
    output: "export",
    distDir: ".next-pages",
    experimental: { cpus: 2 },
  } : {}),
  env: {
    NEXT_PUBLIC_STATIC_EXPORT: pagesExport ? "1" : "0",
  },
  allowedDevOrigins: ["*.preview.same-app.com"],
  images: {
    unoptimized: true,
    domains: [
      "source.unsplash.com",
      "images.unsplash.com",
      "ext.same-assets.com",
      "ugc.same-assets.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ext.same-assets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ugc.same-assets.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
