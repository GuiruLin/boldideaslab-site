"use client";

import Image from "next/image";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { Btn } from "@/components/redesign/Btn";
import { Reveal } from "@/components/redesign/motion";

const typeDotStyles = ["bg-blue", "bg-gold", "bg-red"] as const;
const articleInitialStyles = [
  "bg-gold text-blue",
  "bg-gold text-blue",
  "bg-blue text-cream"
] as const;

/** 敢想观察专属造型：一盏灯泡（金色玻璃 · 蓝色灯丝与灯座 · 唯一红点作火花） */
function Lightbulb({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={className}
      fill="none"
      viewBox="0 0 200 260"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 光芒 */}
      <g stroke="#C9A84C" strokeLinecap="round" strokeWidth="5">
        <line x1="40" x2="53" y1="34" y2="47" />
        <line x1="160" x2="147" y1="34" y2="47" />
        <line x1="16" x2="34" y1="90" y2="90" />
        <line x1="184" x2="166" y1="90" y2="90" />
      </g>
      {/* 玻璃泡 */}
      <circle cx="100" cy="92" fill="#C9A84C" r="62" />
      {/* 灯丝 */}
      <path
        d="M78 122 C78 94 84 80 100 80 C116 80 122 94 122 122"
        stroke="#002FA7"
        strokeLinecap="round"
        strokeWidth="6"
      />
      <path
        d="M91 80 C91 67 109 67 109 80"
        stroke="#002FA7"
        strokeLinecap="round"
        strokeWidth="6"
      />
      {/* 灯颈与灯座 */}
      <path d="M79 122 L121 122 L115 150 L85 150 Z" fill="#002FA7" />
      <rect fill="#002FA7" height="12" rx="4" width="36" x="82" y="153" />
      <rect fill="#002FA7" height="12" rx="4" width="32" x="84" y="169" />
      <path d="M88 185 h24 l-5 15 h-14 z" fill="#002FA7" />
      {/* 唯一红点：灵光一现 */}
      <circle cx="100" cy="14" fill="#CC2936" r="8" />
    </svg>
  );
}

export function InsightsPage() {
  const { dictionary } = useLanguage();
  const insights = dictionary.insights;

  return (
    <>
      {/* ── Hero：灯泡造型开场 ─────────────────────────────────────────────── */}
      <section className="bg-cream px-5 pb-20 pt-20 sm:px-6 lg:px-8 lg:pb-24 lg:pt-28">
        <Reveal className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-5 t-eyebrow text-gold">{insights.hero.eyebrow}</p>
            <h1 className="max-w-3xl t-display text-blue text-balance">
              {insights.hero.title}
            </h1>
            <p className="mt-5 max-w-xl t-lead text-ink/70">
              {insights.hero.subtitle}
            </p>
            <p className="mt-6 max-w-2xl border-l-2 border-gold pl-5 leading-8 text-ink/65">
              {insights.hero.lead}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Btn href="#articles">{insights.articles.eyebrow}</Btn>
              <Btn href="/work" variant="secondary">
                {dictionary.actions.work}
              </Btn>
            </div>
          </div>

          {/* 灯泡 + 三条内容线索 */}
          <div className="relative">
            <div className="relative mx-auto flex max-w-sm flex-col items-center rounded-[28px] bg-white px-8 py-12 shadow-[0_24px_60px_rgba(26,26,26,0.06)]">
              <Lightbulb className="h-56 w-auto" />
              <p className="mt-6 text-center font-display text-xl font-medium leading-snug text-blue text-balance">
                {insights.hero.beliefTitle}
              </p>
              <p className="mt-2 text-center text-sm italic text-ink/45">
                {insights.hero.beliefSubtitle}
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── 三类内容速览 ───────────────────────────────────────────────────── */}
      <section className="bg-cream px-5 pb-24 sm:px-6 lg:px-8">
        <Reveal className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-3">
          {insights.hero.types.map((type, index) => (
            <article
              className="rounded-[18px] border border-ink/10 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-blue/25 hover:shadow-[0_10px_30px_rgba(26,26,26,0.06)]"
              key={type.label}
            >
              <div className="mb-3 flex items-center gap-2">
                <span
                  className={`h-2.5 w-2.5 shrink-0 rounded-full ${typeDotStyles[index]}`}
                />
                <h2 className="t-h3 text-blue">{type.label}</h2>
                {"status" in type && type.status && (
                  <span className="ml-auto rounded-full bg-gold/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-gold">
                    {type.status}
                  </span>
                )}
              </div>
              <p className="text-sm leading-6 text-ink/60">{type.description}</p>
            </article>
          ))}
        </Reveal>
      </section>

      {/* ── 创始人文章 ─────────────────────────────────────────────────────── */}
      <section className="bg-white px-5 py-24 sm:px-6 lg:px-8" id="articles">
        <Reveal className="mx-auto max-w-6xl">
          <p className="mb-4 t-eyebrow text-gold">{insights.articles.eyebrow}</p>
          <h2 className="t-h2 text-blue">{insights.articles.title}</h2>
          <p className="mt-3 t-lead text-ink/60">{insights.articles.subtitle}</p>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {insights.articles.items.map((article, index) => (
              <article
                className="flex min-h-[360px] flex-col overflow-hidden rounded-[18px] border border-ink/10 bg-cream/60 transition duration-200 hover:-translate-y-1 hover:border-blue/25 hover:shadow-[0_10px_30px_rgba(26,26,26,0.07)]"
                key={article.title}
              >
                <div className="flex flex-1 flex-col p-7">
                  <p className="mb-5 w-fit rounded-full bg-blue/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-blue">
                    {article.category}
                  </p>
                  <h3 className="t-h3 text-blue">{article.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-ink/70">
                    {article.description}
                  </p>
                </div>
                <div className="flex items-center justify-between gap-4 border-t border-ink/10 bg-white px-7 py-5">
                  <div className="flex items-center gap-3">
                    <span
                      className={`grid h-8 w-8 place-items-center rounded-full font-display text-sm ${articleInitialStyles[index]}`}
                    >
                      {article.initial}
                    </span>
                    <span className="text-sm text-ink/60">{article.author}</span>
                  </div>
                  <a
                    className="shrink-0 text-sm font-medium text-blue underline-offset-4 hover:underline"
                    href={article.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {article.status}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── 深度对话 ───────────────────────────────────────────────────────── */}
      <section className="bg-cream px-5 py-24 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-6xl">
          <p className="mb-4 t-eyebrow text-gold">
            {insights.conversations.eyebrow}
          </p>
          <h2 className="t-h2 text-blue">{insights.conversations.title}</h2>
          <p className="mt-3 t-lead text-ink/60">
            {insights.conversations.subtitle}
          </p>

          <div className="mt-12 space-y-6">
            {insights.conversations.items.map((item) => (
              <article
                className="grid overflow-hidden rounded-[18px] border border-ink/10 bg-white shadow-[0_10px_30px_rgba(26,26,26,0.05)] transition duration-200 hover:-translate-y-1 hover:border-blue/25 lg:grid-cols-[1.1fr_1fr]"
                key={item.title}
              >
                <div className="relative aspect-[16/9] overflow-hidden lg:aspect-auto">
                  <Image
                    alt={item.title}
                    className="object-cover"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    src={item.coverImage}
                  />
                </div>
                <div className="flex flex-col justify-center p-7 sm:p-10">
                  <p className="t-eyebrow text-red">{item.category}</p>
                  <h3 className="mt-3 t-h3 text-blue">{item.title}</h3>
                  <p className="mt-4 leading-7 text-ink/65">{item.description}</p>
                  <Btn
                    className="mt-7 w-fit"
                    href={item.href}
                    variant="secondary"
                  >
                    {item.status}
                  </Btn>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── 学生声音（保留为未来入口） ─────────────────────────────────────── */}
      <section className="bg-white px-5 py-24 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-6xl">
          <div className="grid gap-10 rounded-[24px] border border-ink/10 bg-cream/60 p-8 sm:p-12 lg:grid-cols-[0.8fr_1fr] lg:items-center">
            <div>
              <p className="mb-4 t-eyebrow text-gold">
                {insights.studentVoices.eyebrow}
              </p>
              <h2 className="t-h2 text-blue text-balance">
                {insights.studentVoices.title}
              </h2>
            </div>
            <div className="border-l-2 border-gold pl-5">
              <p className="leading-8 text-ink/70">
                {insights.studentVoices.body}
              </p>
              <p className="mt-5 w-fit rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-gold">
                {insights.studentVoices.status}
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── 关注我们 ───────────────────────────────────────────────────────── */}
      <section className="bg-blue px-5 py-24 text-cream sm:px-6 lg:px-8">
        <Reveal className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 t-eyebrow text-gold">{insights.follow.eyebrow}</p>
            <h2 className="t-h2 text-cream text-balance">
              {insights.follow.title}
            </h2>
            <p className="mt-3 t-lead text-cream/50">
              {insights.follow.subtitle}
            </p>
            <p className="mt-6 max-w-md leading-8 text-cream/65">
              {insights.follow.description}
            </p>
          </div>

          <div className="space-y-4">
            {insights.follow.channels.map((channel, index) => {
              const href =
                "href" in channel &&
                typeof channel.href === "string" &&
                channel.href.length > 0
                  ? channel.href
                  : null;
              const avatarSrc =
                channel.avatar === "lynn" || channel.avatar === "jacky"
                  ? `/media/about/founders/${channel.avatar}/profile.webp`
                  : null;

              return (
                <div
                  className="flex items-center gap-5 rounded-[16px] border border-cream/15 bg-cream/[0.05] p-5 transition duration-200 hover:translate-x-1 hover:border-cream/30 hover:bg-cream/[0.08]"
                  key={`${channel.label}-${index}`}
                >
                  {avatarSrc && (
                    <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-cream/30 bg-cream/10">
                      <Image
                        alt={channel.label}
                        className="object-cover"
                        fill
                        sizes="48px"
                        src={avatarSrc}
                      />
                    </span>
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="font-display text-lg font-medium leading-tight text-cream">
                      {channel.label}
                    </p>
                    <p className="mt-1 text-sm text-cream/45">
                      {channel.description}
                    </p>
                  </div>
                  {href && channel.status ? (
                    <a
                      className="ml-auto shrink-0 text-xs font-semibold tracking-[0.08em] text-gold/80 underline-offset-4 hover:underline"
                      href={href}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {channel.status}
                    </a>
                  ) : null}
                </div>
              );
            })}
          </div>
        </Reveal>
      </section>

      {/* ── 结尾 ───────────────────────────────────────────────────────────── */}
      <section className="bg-cream px-5 py-24 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="t-h2 text-blue text-balance">{insights.cta.title}</h2>
          <p className="mt-5 leading-8 text-ink/70">{insights.cta.body}</p>
          <Btn className="mt-8" href="/contact">
            {dictionary.actions.contact}
          </Btn>
        </Reveal>
      </section>
    </>
  );
}
