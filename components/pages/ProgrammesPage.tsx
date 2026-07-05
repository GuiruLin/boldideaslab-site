"use client";

import type { ReactNode } from "react";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { Btn } from "@/components/redesign/Btn";
import { Reveal } from "@/components/redesign/motion";
import { Decagon } from "@/components/redesign/shapes";

// 标题里的强调词染成马蒂斯红（与主页 hero 同一手法）
function withAccent(title: string, accent?: string): ReactNode {
  if (!accent) return title;
  const at = title.indexOf(accent);
  if (at === -1) return title;
  return (
    <>
      {title.slice(0, at)}
      <span className="text-red">{accent}</span>
      {title.slice(at + accent.length)}
    </>
  );
}

const cardBase =
  "rounded-[18px] border border-ink/10 bg-cream/60 p-6 transition duration-200 hover:-translate-y-1 hover:border-blue/30 hover:shadow-[0_10px_30px_rgba(26,26,26,0.07)] sm:flex sm:items-baseline sm:gap-8 sm:p-8";

export function ProgrammesPage() {
  const { dictionary } = useLanguage();
  const programmes = dictionary.programmes;

  return (
    <>
      {/* ── Hero：主页那种干净大字开头，米白底，无装饰面板 ──────────────────── */}
      <section className="bg-cream px-5 pb-16 pt-20 sm:px-6 lg:px-8 lg:pb-24 lg:pt-28">
        <Reveal className="mx-auto max-w-6xl">
          <p className="mb-5 t-eyebrow text-gold">{programmes.hero.eyebrow}</p>
          <h1 className="max-w-4xl t-display text-blue text-balance">
            {withAccent(programmes.hero.title, programmes.hero.accent)}
          </h1>
          <p className="mt-7 max-w-2xl t-lead text-ink/70">{programmes.hero.lead}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Btn href="/contact">{programmes.cta.button}</Btn>
            <Btn href="/work" variant="secondary">
              {dictionary.actions.work}
            </Btn>
          </div>
          {programmes.hero.note && (
            <p className="mt-7 max-w-2xl text-sm leading-7 text-ink/55">
              {programmes.hero.note}
            </p>
          )}
        </Reveal>
      </section>

      {/* ── 我们做过的项目：横条卡，金色小标签 ──────────────────────────────── */}
      <section className="bg-white px-5 py-24 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-6xl">
          <h2 className="t-h2 text-blue">{programmes.trackRecord.title}</h2>
          <div className="mt-10 space-y-4">
            {programmes.trackRecord.cards.map((card) => {
              const content = (
                <>
                  <p className="t-eyebrow text-gold sm:w-48 sm:shrink-0">{card.label}</p>
                  <div className="mt-3 sm:mt-0">
                    <h3 className="t-h3 text-blue">{card.title}</h3>
                    <p className="mt-2 leading-7 text-ink/70">
                      {card.text.map((seg) =>
                        seg.red ? (
                          <span className="text-red" key={seg.t}>
                            {seg.t}
                          </span>
                        ) : (
                          <span key={seg.t}>{seg.t}</span>
                        )
                      )}
                    </p>
                  </div>
                </>
              );

              return card.url ? (
                <a
                  className={`block ${cardBase}`}
                  href={card.url}
                  key={card.title}
                  rel="noopener"
                  target="_blank"
                >
                  {content}
                </a>
              ) : (
                <article className={cardBase} key={card.title}>
                  {content}
                </article>
              );
            })}
          </div>
        </Reveal>
      </section>

      {/* ── 和学校一起做：Plymouth 案例（几何面板样板） ─────────────────────── */}
      <section className="bg-cream px-5 py-24 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-6xl">
          <p className="mb-5 t-eyebrow text-gold">{programmes.schools.eyebrow}</p>
          <h2 className="t-h2 text-blue">{programmes.schools.title}</h2>

          <div className="relative mt-10 max-w-3xl">
            {/* 大号十边形描边：艺术锚点，淡淡地压在右上角外沿 */}
            <Decagon className="pointer-events-none absolute -right-8 -top-12 -z-0 h-32 w-32 opacity-[0.12] sm:h-44 sm:w-44" />

            {/* 文字面板：一角切平，做出编辑式的不对称 */}
            <div
              className="relative bg-white p-8 shadow-[0_24px_60px_rgba(26,26,26,0.06)] sm:p-12"
              style={{ borderRadius: "28px 28px 28px 6px" }}
            >
              {/* 左侧金色小拱：句读级的品牌标记 */}
              <span
                aria-hidden
                className="absolute -left-2.5 top-11 h-12 w-2.5 bg-gold"
                style={{ borderRadius: "999px 0 0 999px" }}
              />
              <div className="space-y-5 leading-8 text-ink/75">
                {programmes.schools.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-8 max-w-3xl leading-7 text-ink/60">
            <span className="mr-3 t-eyebrow text-gold">{programmes.schools.formatLabel}</span>
            {programmes.schools.formats.join(" · ")}
          </p>
          <Btn className="mt-9" href="/contact">
            {programmes.schools.cta}
          </Btn>
        </Reveal>
      </section>

      {/* ── 方法 · 四个阶段 ─────────────────────────────────────────────────── */}
      <section className="bg-white px-5 py-24 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-6xl">
          <p className="mb-5 t-eyebrow text-gold">{programmes.arc.eyebrow}</p>
          <h2 className="t-h2 text-blue">{programmes.arc.title}</h2>
          <p className="mt-5 max-w-2xl leading-8 text-ink/70">{programmes.arc.lead}</p>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {programmes.arc.phases.map((phase) => (
              <article
                className="rounded-[18px] border border-ink/10 bg-cream/60 p-8 transition duration-200 hover:-translate-y-1 hover:border-blue/30 hover:shadow-[0_10px_30px_rgba(26,26,26,0.07)]"
                key={phase.num}
              >
                <div className="mb-4 flex items-baseline gap-4">
                  <span className="select-none font-display text-3xl font-semibold leading-none text-gold/40">
                    {phase.num}
                  </span>
                  <h3 className="t-h3 text-blue">{phase.title}</h3>
                </div>
                <p className="mb-4 border-l-2 border-gold pl-3 text-sm font-medium leading-7 text-blue/70">
                  {phase.lead}
                </p>
                <p className="mb-5 leading-7 text-ink/65">{phase.text}</p>
                <ul className="space-y-2">
                  {phase.items.map((item) => (
                    <li className="flex items-start gap-3 text-sm text-ink/60" key={item}>
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── 线上课程 · 两期 ─────────────────────────────────────────────────── */}
      <section className="bg-cream px-5 py-24 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-6xl">
          <h2 className="t-h2 text-blue">{programmes.online.title}</h2>
          <div className="mt-10 space-y-4">
            {programmes.online.cohorts.map((cohort) => (
              <article
                className="rounded-[18px] border border-ink/10 bg-white p-6 sm:flex sm:items-baseline sm:gap-8 sm:p-8"
                key={cohort.tag}
              >
                <p className="t-eyebrow text-gold sm:w-64 sm:shrink-0">{cohort.tag}</p>
                <div className="mt-3 sm:mt-0">
                  <p className="leading-7 text-ink/70">{cohort.text}</p>
                  {cohort.url && (
                    <a
                      className="mt-2 inline-block text-sm text-blue underline decoration-blue/30 underline-offset-4 transition hover:decoration-blue"
                      href={cohort.url}
                      rel="noopener"
                      target="_blank"
                    >
                      {cohort.linkLabel}
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── 适合谁 ─────────────────────────────────────────────────────────── */}
      <section className="bg-white px-5 py-24 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-6xl">
          <p className="mb-5 t-eyebrow text-gold">{programmes.fit.eyebrow}</p>
          <h2 className="t-h2 text-blue">{programmes.fit.title}</h2>
          <p className="mt-5 max-w-2xl leading-8 text-ink/70">{programmes.fit.lead}</p>
          <ul className="mt-8 max-w-3xl space-y-3">
            {programmes.fit.items.map((item) => (
              <li className="flex items-start gap-3 leading-7 text-ink/70" key={item}>
                <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl border-l-2 border-gold/50 pl-4 text-sm leading-7 text-ink/55">
            {programmes.fit.context}
          </p>
        </Reveal>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────────── */}
      <section className="bg-cream px-5 py-24 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-6xl">
          <p className="mb-5 t-eyebrow text-gold">{programmes.faq.eyebrow}</p>
          <h2 className="t-h2 text-blue">{programmes.faq.title}</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {programmes.faq.items.map((item) => (
              <div
                className="rounded-[18px] border border-ink/10 bg-white p-6 sm:p-8"
                key={item.q}
              >
                <h3 className="t-h3 text-blue">{item.q}</h3>
                <p className="mt-4 leading-7 text-ink/70">{item.a}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── 结尾：米白底居中，无黑块 ───────────────────────────────────────── */}
      <section className="bg-white px-5 py-24 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="t-h2 text-blue text-balance">{programmes.cta.title}</h2>
          <p className="mt-5 leading-8 text-ink/70">{programmes.cta.body}</p>
          <Btn className="mt-8" href="/contact">
            {programmes.cta.button}
          </Btn>
        </Reveal>
      </section>
    </>
  );
}
