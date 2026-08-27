import { MetadataRoute } from "next";
import { getPseoSlugsChunk, getPseoTotalCount } from "@/data/pseo/matrix";

export async function generateSitemaps() {
  const total = getPseoTotalCount();
  const chunkSize = 1000;
  const numSitemaps = Math.ceil(total / chunkSize);

  const sitemaps = [];
  for (let id = 0; id < numSitemaps; id++) {
    sitemaps.push({ id });
  }
  return sitemaps;
}

export default async function sitemap({ id }: { id: number }): Promise<MetadataRoute.Sitemap> {
  const slugs = getPseoSlugsChunk(id, 1000);
  const baseUrl = "https://personaltrainer.sg";

  const entries: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${baseUrl}/singapore/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8
  }));

  // Include root directory in first sitemap chunk
  if (id === 0) {
    entries.unshift(
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 1.0
      },
      {
        url: `${baseUrl}/singapore`,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 0.9
      },
      {
        url: `${baseUrl}/services`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.9
      },
      {
        url: `${baseUrl}/about`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7
      },
      {
        url: `${baseUrl}/rates`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8
      },
      {
        url: `${baseUrl}/results`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8
      },
      {
        url: `${baseUrl}/contact`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7
      }
    );
  }

  return entries;
}
