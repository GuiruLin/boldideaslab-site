"use client";

import type { ReactNode } from "react";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { Btn } from "@/components/redesign/Btn";
import { Reveal } from "@/components/redesign/motion";
import { Arch, Decagon, Dot } from "@/components/redesign/shapes";

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

const layerAccent = [
  "bg-blue",
  "bg-gold",
  "bg-red",
  "bg-blue/40",
  "bg-gold/60"
] as const;

export function EduosPage() {
  const { dictionary } = useLanguage();
  const eduos = dictionary.eduos;
  const [nowItem, ...futureItems] = eduos.future.items;

  return (
    <>
      {/* ── Hero：干净大字开头 ─────────────────────────────────────────────── */}
      <section className="bg-cream px-5 pb-8 pt-20 sm:px-6 lg:px-8 lg:pt-28">
        <Reveal className="mx-auto max-w-6xl">
          <p className="mb-5 t-eyebrow text-gold">{eduos.hero.eyebrow}</p>
          <h1 className="max-w-4xl t-display text-blue text-balance">
            {withAccent(eduos.hero.title, eduos.hero.accent)}
          </h1>
          <p className="mt-5 max-w-2xl leading-8 text-ink/55">{eduos.hero.subtitle}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Btn href="#why">{eduos.hero.primary}</Btn>
            <Btn href="/contact" variant="secondary">
              {eduos.hero.secondary}
            </Btn>
          </div>
        </Reveal>
      </section>

      {/* ── 开场陈述：金色面板 ─────────────────────────────────────────────── */}
      <section className="bg-cream px-5 pb-24 pt-8 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-6xl">
          <div
            className="relative overflow-hidden bg-blue px-7 py-14 sm:px-14 sm:py-[4.5rem]"
            style={{ borderRadius: "6px 28px 28px 28px" }}
          >
            <Arch className="absolute right-12 top-12 hidden h-10 w-20 sm:block" />
            <Dot className="absolute bottom-12 right-14 hidden h-3 w-3 sm:block" />
            <p className="relative mb-6 t-eyebrow text-cream/70">{eduos.hero.badge}</p>
            <p className="relative max-w-[48ch] t-lead text-white">{eduos.hero.lead}</p>
          </div>
        </Reveal>
      </section>

      {/* ── 为什么需要连续性 ──────────────────────────────────────────────── */}
      <section className="scroll-mt-24 bg-white px-5 py-24 sm:px-6 lg:px-8" id="why">
        <Reveal className="mx-auto max-w-6xl">
          <p className="mb-5 t-eyebrow text-gold">{eduos.why.eyebrow}</p>
          <h2 className="max-w-3xl t-h2 text-blue text-balance">{eduos.why.title}</h2>
          <p className="mt-5 max-w-2xl leading-8 text-ink/70">{eduos.why.body}</p>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {eduos.why.points.map((point) => (
              <li
                className="flex items-start gap-3 rounded-[18px] border border-ink/10 bg-cream/60 p-6 leading-7 text-ink/70"
                key={point}
              >
                <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                {point}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* ── 系统层次 ──────────────────────────────────────────────────────── */}
      <section className="bg-cream px-5 py-24 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-6xl">
          <p className="mb-5 t-eyebrow text-gold">{eduos.layers.eyebrow}</p>
          <h2 className="max-w-3xl t-h2 text-blue text-balance">{eduos.layers.title}</h2>
          <p className="mt-5 max-w-2xl leading-8 text-ink/70">{eduos.layers.lead}</p>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {eduos.layers.items.map((item, index) => (
              <article
                className="rounded-[18px] border border-ink/10 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-blue/30 hover:shadow-[0_10px_30px_rgba(26,26,26,0.07)]"
                key={item.title}
              >
                <span className={`mb-6 block h-1.5 w-10 rounded-full ${layerAccent[index]}`} />
                <p className="t-eyebrow text-gold">{item.kicker}</p>
                <h3 className="mt-2 t-h3 text-blue">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/65">{item.text}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── 关系与证据流 ─────────────────────────────────────────────────── */}
      <section className="bg-white px-5 py-24 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-6xl">
          <p className="mb-5 t-eyebrow text-gold">{eduos.flow.eyebrow}</p>
          <h2 className="max-w-3xl t-h2 text-blue text-balance">{eduos.flow.title}</h2>
          <p className="mt-5 max-w-2xl leading-8 text-ink/70">{eduos.flow.caption}</p>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {eduos.flow.nodes.map((node) => (
              <article
                className="rounded-[18px] border border-ink/10 bg-cream/60 p-6"
                key={node.label}
              >
                <p className="t-h3 text-blue">{node.label}</p>
                <p className="mt-3 text-sm leading-7 text-ink/65">{node.text}</p>
              </article>
            ))}
          </div>

          {/* 中心：项目证据（描边款，避免一页两块大蓝） */}
          <div
            className="relative mt-4 overflow-hidden border-2 border-blue/25 bg-cream/50 px-7 py-12 sm:px-14"
            style={{ borderRadius: "28px 28px 28px 6px" }}
          >
            <Decagon className="pointer-events-none absolute -right-8 -top-10 h-40 w-40 opacity-[0.1]" />
            <p className="relative t-h3 text-blue">{eduos.flow.centerTitle}</p>
            <p className="relative mt-3 max-w-xl leading-7 text-ink/70">{eduos.flow.centerText}</p>
            <ol className="relative mt-8 flex flex-wrap gap-x-3 gap-y-2 text-sm text-ink/70">
              {eduos.flow.steps.map((step, index) => (
                <li className="flex items-center gap-3" key={step}>
                  {index > 0 && <span aria-hidden className="text-gold">→</span>}
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </section>

      {/* ── 现在 vs 未来 ─────────────────────────────────────────────────── */}
      <section className="bg-cream px-5 py-24 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-6xl">
          <p className="mb-5 t-eyebrow text-gold">{eduos.future.eyebrow}</p>
          <h2 className="max-w-3xl t-h2 text-blue text-balance">{eduos.future.title}</h2>
          <p className="mt-5 max-w-2xl leading-8 text-ink/70">{eduos.future.body}</p>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {/* 现在能做：金色高亮，表示当下已经真实 */}
            <article
              className="relative overflow-hidden border border-gold/40 bg-gold/10 p-8"
              style={{ borderRadius: "28px 28px 28px 6px" }}
            >
              <p className="t-eyebrow text-gold">{eduos.future.presentLabel}</p>
              <h3 className="mt-3 t-h3 text-blue">{nowItem.title}</h3>
              <p className="mt-3 leading-7 text-ink/70">{nowItem.text}</p>
            </article>

            {/* 未来在建 */}
            <div className="space-y-4">
              {futureItems.map((item) => (
                <article
                  className="rounded-[18px] border border-ink/10 bg-white p-6"
                  key={item.title}
                >
                  <h3 className="t-h3 text-blue">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-ink/65">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── 结尾：米白底，无黑块 ───────────────────────────────────────────── */}
      <section className="bg-white px-5 py-24 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="mb-5 t-eyebrow text-gold">{eduos.cta.eyebrow}</p>
          <h2 className="t-h2 text-blue text-balance">{eduos.cta.title}</h2>
          <p className="mt-5 leading-8 text-ink/70">{eduos.cta.body}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Btn href="/programmes">{eduos.cta.primary}</Btn>
            <Btn href="/contact" variant="secondary">
              {eduos.cta.secondary}
            </Btn>
          </div>
        </Reveal>
      </section>
    </>
  );
}
