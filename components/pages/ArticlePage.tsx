"use client";

import Link from "next/link";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { Btn } from "@/components/redesign/Btn";
import { Reveal } from "@/components/redesign/motion";
import type { InsightsArticle } from "@/lib/insightsArticles";

// 原生文章版式：英文界面读英文翻译，中文界面读中文原文
export function ArticlePage({ article }: { article: InsightsArticle }) {
  const { locale, dictionary } = useLanguage();
  const insights = dictionary.insights;
  const content = locale === "zh" ? article.zh : article.en;

  return (
    <>
      {/* ── 文首 ───────────────────────────────────────────────────────────── */}
      <section className="bg-cream px-5 pb-10 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <Reveal className="mx-auto max-w-3xl">
          <Link
            className="text-sm text-ink/50 underline-offset-4 transition hover:text-blue hover:underline"
            href="/insights"
          >
            ← {insights.article.back}
          </Link>
          <p className="mb-4 mt-10 t-eyebrow text-gold">{content.category}</p>
          <h1 className="font-display text-4xl font-medium leading-[1.12] text-blue text-balance sm:text-5xl">
            {content.title}
          </h1>
          <div className="mt-8 flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gold font-display text-sm text-blue">
              {article.initial}
            </span>
            <span className="text-sm text-ink/60">{article.author}</span>
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-red" />
            {insights.article.translatedNote && (
              <span className="text-sm italic text-ink/45">
                {insights.article.translatedNote}
              </span>
            )}
          </div>
        </Reveal>
      </section>

      {/* ── 正文 ───────────────────────────────────────────────────────────── */}
      <section className="bg-cream px-5 pb-24 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl">
          <div className="rounded-[24px] bg-white px-6 py-10 shadow-[0_24px_60px_rgba(26,26,26,0.05)] sm:px-12 sm:py-14">
            <div className="space-y-6">
              {content.body.map((block, index) => {
                if (block.type === "h2") {
                  return (
                    <h2
                      className="pt-6 font-display text-2xl font-medium leading-snug text-blue"
                      key={`${block.type}-${index}`}
                    >
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === "quote") {
                  return (
                    <blockquote
                      className="border-l-2 border-gold pl-5 italic leading-8 text-ink/60"
                      key={`${block.type}-${index}`}
                    >
                      {block.text}
                    </blockquote>
                  );
                }
                return (
                  <p
                    className="leading-8 text-ink/75"
                    key={`${block.type}-${index}`}
                  >
                    {block.text}
                  </p>
                );
              })}
            </div>

            {content.footnotes.length > 0 && (
              <div className="mt-12 space-y-2 border-t border-ink/10 pt-6">
                {content.footnotes.map((note) =>
                  note.href ? (
                    <p className="text-sm text-ink/50" key={note.label}>
                      {note.label}
                      {" · "}
                      <a
                        className="text-blue underline decoration-blue/30 underline-offset-4 transition hover:decoration-blue"
                        href={note.href}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {insights.article.sourceLink}
                      </a>
                    </p>
                  ) : (
                    <p className="text-sm text-ink/50" key={note.label}>
                      {note.label}
                    </p>
                  )
                )}
              </div>
            )}
          </div>
        </Reveal>
      </section>

      {/* ── 文末 ───────────────────────────────────────────────────────────── */}
      <section className="bg-white px-5 py-20 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="t-h2 text-blue text-balance">{insights.cta.title}</h2>
          <p className="mt-5 leading-8 text-ink/70">{insights.cta.body}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Btn href="/insights" variant="secondary">
              {insights.article.back}
            </Btn>
            <Btn href="/contact">{dictionary.actions.contact}</Btn>
          </div>
        </Reveal>
      </section>
    </>
  );
}
