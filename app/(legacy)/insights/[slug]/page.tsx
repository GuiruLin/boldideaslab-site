import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArticlePage } from "@/components/pages/ArticlePage";
import { getInsightsArticle, insightsArticles } from "@/lib/insightsArticles";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return insightsArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsightsArticle(slug);
  if (!article) return {};

  return {
    title: article.en.title,
    description: article.en.body.find((block) => block.type === "p")?.text.slice(0, 160)
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const article = getInsightsArticle(slug);
  if (!article) notFound();

  return <ArticlePage article={article} />;
}
