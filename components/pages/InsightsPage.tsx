"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { Btn } from "@/components/redesign/Btn";
import { Reveal } from "@/components/redesign/motion";

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

const typeDotStyles = ["bg-blue", "bg-gold", "bg-red"] as const;
const articleInitialStyles = [
  "bg-gold text-blue",
  "bg-gold text-blue",
  "bg-blue text-cream"
] as const;

// 信纸配色：白色纸面 · 莫兰迪黄边框与横线（与学生反馈翻页书同族的一次性用色）
const PAPER_BG = "#FFFFFF";
const MORANDI = "#C9B27C";

/** 信纸右侧的油画颜料：不对称的泼洒 + 往下淌的颜料 + 飞溅的墨滴 */
function PaintBlot({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={className}
      fill="none"
      viewBox="0 0 260 250"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 金色泼洒：左低右高的不对称大块 */}
      <path
        d="M28 132 C6 106 22 74 64 88 C68 54 120 44 142 72 C158 40 212 48 214 84 C250 94 252 132 216 140 C234 164 202 186 176 168 C168 192 126 194 116 168 C84 188 42 172 28 132 Z"
        fill="#C9A84C"
        opacity="0.85"
      />
      {/* 金色往下淌的一道，末端积成滴 */}
      <path
        d="M148 170 C150 190 144 204 148 220 C149 232 162 232 162 220 C162 204 156 190 160 172 Z"
        fill="#C9A84C"
        opacity="0.85"
      />
      <circle cx="156" cy="243" fill="#C9A84C" r="3.5" />
      {/* 蓝色一坨压在上面：偏右上，不对称 */}
      <path
        d="M104 100 C94 68 136 50 160 70 C174 48 210 60 202 90 C230 100 224 136 194 136 C200 162 162 174 144 152 C114 164 94 134 104 100 Z"
        fill="#002FA7"
        opacity="0.92"
      />
      {/* 蓝色单独溅开的一小块 */}
      <path
        d="M58 152 C50 138 68 128 78 138 C90 144 78 162 66 160 C60 158 56 156 58 152 Z"
        fill="#002FA7"
      />
      {/* 红色小溅斑 + 卫星小滴 */}
      <path
        d="M92 52 C84 36 108 28 116 42 C128 42 126 60 112 60 C110 70 92 66 92 52 Z"
        fill="#CC2936"
      />
      <circle cx="130" cy="30" fill="#CC2936" r="2.5" />
      <circle cx="76" cy="38" fill="#CC2936" r="2" />
      {/* 四散的墨滴：大小不一 */}
      <circle cx="238" cy="152" fill="#C9A84C" r="5.5" />
      <circle cx="222" cy="184" fill="#C9A84C" r="3" />
      <circle cx="44" cy="66" fill="#002FA7" r="4" />
      <circle cx="128" cy="212" fill="#002FA7" r="3" />
      <circle cx="36" cy="184" fill="#002FA7" r="2.5" />
      <circle cx="248" cy="64" fill="#C9A84C" r="2.5" />
      <circle cx="182" cy="26" fill="#002FA7" r="2" />
      <circle cx="206" cy="206" fill="#002FA7" r="2" />
    </svg>
  );
}

/** 敢想观察专属造型：一支蓝色钢笔（米白笔夹与环带） */
function Pen({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={className}
      fill="none"
      viewBox="0 0 60 250"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 笔帽顶 */}
      <rect fill="#F5F2EA" height="10" rx="5" width="20" x="20" y="4" />
      {/* 笔身 */}
      <rect fill="#002FA7" height="140" rx="12" width="28" x="16" y="12" />
      {/* 笔夹 */}
      <rect fill="#F5F2EA" height="58" rx="3" width="6" x="44" y="22" />
      {/* 环带 */}
      <rect fill="#F5F2EA" height="10" width="28" x="16" y="152" />
      {/* 握位 */}
      <path d="M16 162 h28 l-6 36 h-16 z" fill="#002FA7" />
      {/* 笔尖 */}
      <path d="M24 198 L36 198 L34 222 L30 240 L26 222 Z" fill="#00227A" />
      <line stroke="#F5F2EA" strokeWidth="2" x1="30" x2="30" y1="204" y2="228" />
      <circle cx="30" cy="212" fill="#F5F2EA" r="2.5" />
    </svg>
  );
}

export function InsightsPage() {
  const { dictionary } = useLanguage();
  const insights = dictionary.insights;

  return (
    <>
      {/* ── Hero：信纸作文字框（开场文字全部写在信里，笔靠在右侧） ───────────── */}
      <section className="bg-cream px-5 pb-20 pt-20 sm:px-6 lg:px-8 lg:pb-24 lg:pt-28">
        <Reveal className="mx-auto max-w-6xl">
          <div className="relative">
            {/* 底层纸：叠纸的厚度感 */}
            <span
              aria-hidden
              className="absolute inset-x-8 -bottom-2.5 top-3 rotate-[0.8deg] rounded-[10px]"
              style={{ backgroundColor: "#C9B27C55" }}
            />
            {/* 信纸本体：米黄纸面 · 莫兰迪黄边框 */}
            <div
              className="relative rounded-[10px] border-[3px] p-8 shadow-[0_24px_60px_rgba(26,26,26,0.08)] sm:p-12 sm:pr-36"
              style={{ backgroundColor: PAPER_BG, borderColor: MORANDI }}
            >
              {/* 信头 */}
              <div
                className="flex items-center justify-between border-b-2 pb-3"
                style={{ borderColor: MORANDI }}
              >
                <p className="t-eyebrow" style={{ color: "#9D8752" }}>
                  {insights.hero.eyebrow}
                </p>
                <span
                  aria-hidden
                  className="h-3.5 w-7"
                  style={{ background: MORANDI, borderRadius: "999px 999px 0 0" }}
                />
              </div>

              {/* 标题 */}
              <h1 className="mt-7 max-w-3xl t-display text-blue text-balance">
                {withAccent(insights.hero.title, insights.hero.accent)}
              </h1>

              {/* 信纸横线上的正文 */}
              <div
                className="mt-5 max-w-2xl"
                style={{
                  backgroundImage: `repeating-linear-gradient(transparent, transparent calc(2.6rem - 1px), ${MORANDI}99 calc(2.6rem - 1px), ${MORANDI}99 2.6rem)`
                }}
              >
                <p className="t-lead text-ink/75 [line-height:2.6rem]">
                  {insights.hero.subtitle}
                </p>
                <p className="text-ink/65 [line-height:2.6rem]">
                  {insights.hero.lead}
                </p>
                {/* 留白的空行：一封还在写的信 */}
                <div aria-hidden className="h-[2.6rem]" />
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Btn href="#articles">{insights.articles.eyebrow}</Btn>
                <Btn href="/work" variant="secondary">
                  {dictionary.actions.work}
                </Btn>
              </div>

              {/* 署名 + 红点作封蜡 */}
              <div className="mt-6 flex items-center justify-end gap-2.5 sm:mt-2">
                <p className="font-display text-sm italic text-blue">
                  Bold Ideas Lab
                </p>
                <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-red" />
              </div>

              {/* 右侧空白处的油画颜料（避开文字区） */}
              <PaintBlot className="pointer-events-none absolute right-32 top-12 hidden h-56 w-auto rotate-3 lg:block" />
            </div>
            {/* 右侧的蓝色钢笔 */}
            <Pen className="absolute -right-3 top-1/2 hidden h-64 w-auto -translate-y-1/2 rotate-[24deg] drop-shadow-[0_10px_18px_rgba(26,26,26,0.18)] sm:block lg:h-72" />
          </div>
        </Reveal>
      </section>

      {/* ── 四类内容速览 ───────────────────────────────────────────────────── */}
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
                  {article.href.startsWith("/") ? (
                    <Link
                      className="shrink-0 text-sm font-medium text-blue underline-offset-4 hover:underline"
                      href={article.href}
                    >
                      {article.status}
                    </Link>
                  ) : (
                    <a
                      className="shrink-0 text-sm font-medium text-blue underline-offset-4 hover:underline"
                      href={article.href}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {article.status}
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── 来自敢想实验室：品牌自己的声音 ─────────────────────────────────── */}
      <section className="bg-cream px-5 py-24 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-6xl">
          <p className="mb-4 t-eyebrow text-gold">{insights.lab.eyebrow}</p>
          <h2 className="t-h2 text-blue">{insights.lab.title}</h2>
          <p className="mt-3 t-lead text-ink/60">{insights.lab.subtitle}</p>

          <div className="mt-12 space-y-6">
            {insights.lab.items.map((item) => (
              <article
                className="grid overflow-hidden rounded-[18px] border border-ink/10 bg-white shadow-[0_10px_30px_rgba(26,26,26,0.05)] transition duration-200 hover:-translate-y-1 hover:border-blue/25 lg:grid-cols-[1.15fr_0.85fr]"
                key={item.title}
              >
                <div className="flex flex-col justify-center p-7 sm:p-10">
                  <p className="t-eyebrow text-gold">{item.category}</p>
                  <h3 className="mt-3 t-h3 text-blue">{item.title}</h3>
                  <p className="mt-4 leading-7 text-ink/65">{item.description}</p>
                  <Btn className="mt-7 w-fit" href={item.href} variant="secondary">
                    {item.status}
                  </Btn>
                </div>
                {/* AI 关掉的开关：这堂课从这里开始 */}
                <div
                  aria-hidden
                  className="relative hidden items-center justify-center bg-blue lg:flex"
                >
                  <div className="flex flex-col items-center gap-5">
                    <span className="font-display text-3xl font-semibold tracking-[0.3em] text-white/90">
                      AI
                    </span>
                    <span className="relative block h-14 w-28 rounded-full border-2 border-white/30 bg-white/10">
                      <span className="absolute left-1.5 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-gold" />
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/40">
                      off
                    </span>
                  </div>
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
