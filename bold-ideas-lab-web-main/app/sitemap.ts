import type { MetadataRoute } from "next";

const siteUrl = "https://www.boldideaslab.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    "",
    "/about",
    "/programmes",
    "/work",
    "/eduos",
    "/insights",
    "/contact"
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8
  }));
}
