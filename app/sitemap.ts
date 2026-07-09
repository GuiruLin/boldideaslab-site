import type { MetadataRoute } from "next";

import { insightsArticles } from "@/lib/insightsArticles";

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
    ...insightsArticles.map((article) => `/insights/${article.slug}`),
    "/contact"
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8
  }));
}
