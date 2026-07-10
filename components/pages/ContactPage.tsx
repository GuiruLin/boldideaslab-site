"use client";

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

/** 联系页专属造型：一只纸飞机（蓝色机身 · 金色折面），从红点起飞，沿虚线航迹飞来 */
function PaperPlane({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={className}
      fill="none"
      viewBox="0 0 220 170"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 起点：唯一红点 */}
      <circle cx="14" cy="152" fill="#CC2936" r="6" />
      {/* 虚线航迹 */}
      <path
        d="M22 150 C70 155 40 105 88 100"
        stroke="#002FA7"
        strokeDasharray="7 8"
        strokeLinecap="round"
        strokeWidth="3"
        opacity="0.45"
      />
      {/* 纸飞机：上翼（蓝） */}
      <path d="M204 22 L96 66 L138 84 Z" fill="#002FA7" />
      {/* 纸飞机：下折面（金） */}
      <path d="M204 22 L138 84 L146 112 Z" fill="#C9A84C" />
      {/* 纸飞机：内侧阴影（深一号的蓝） */}
      <path d="M204 22 L138 84 L128 76 Z" fill="#00227A" />
    </svg>
  );
}

export function ContactPage() {
  const { dictionary } = useLanguage();
  const contact = dictionary.contact;
  const formUrl = contact.enquiry.formUrl.trim();

  return (
    <>
      {/* ── Hero：纸飞机造型开场 ───────────────────────────────────────────── */}
      <section className="bg-cream px-5 pb-20 pt-20 sm:px-6 lg:px-8 lg:pb-24 lg:pt-28">
        <Reveal className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-5 t-eyebrow text-gold">{contact.hero.eyebrow}</p>
            <h1 className="max-w-3xl t-display text-blue text-balance">
              {withAccent(contact.hero.title, contact.hero.accent)}
            </h1>
            <p className="mt-5 max-w-xl t-lead text-ink/70">
              {contact.hero.subtitle}
            </p>
            <p className="mt-6 max-w-2xl border-l-2 border-gold pl-5 leading-8 text-ink/65">
              {contact.hero.lead}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Btn href="#enquiry">{contact.hero.primary}</Btn>
              <Btn href="/programmes" variant="secondary">
                {contact.hero.secondary}
              </Btn>
            </div>
          </div>

          {/* 纸飞机：想法从一颗红点起飞 */}
          <div className="relative mx-auto hidden w-full max-w-sm lg:block">
            <PaperPlane className="h-auto w-full -rotate-3" />
          </div>
        </Reveal>
      </section>

      {/* ── 咨询入口：表单 + 邮箱 ──────────────────────────────────────────── */}
      <section className="scroll-mt-24 bg-white px-5 py-24 sm:px-6 lg:px-8" id="enquiry">
        <Reveal className="mx-auto max-w-6xl">
          <p className="mb-4 t-eyebrow text-gold">{contact.enquiry.eyebrow}</p>
          <h2 className="t-h2 text-blue">{contact.enquiry.title}</h2>
          <p className="mt-5 max-w-2xl leading-8 text-ink/70">
            {contact.enquiry.lead}
          </p>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            {/* 表单卡 */}
            <div className="flex flex-col rounded-[24px] border border-ink/10 bg-cream/60 p-8 sm:p-10">
              <p className="t-eyebrow text-gold">{contact.enquiry.formLabel}</p>
              <p className="mt-2 text-sm text-ink/55">{contact.enquiry.formStatus}</p>
              <div className="mt-6">
                <Btn href={formUrl}>{contact.enquiry.button}</Btn>
              </div>
              <p className="mt-10 t-eyebrow text-gold">
                {contact.enquiry.audiencesIntro}
              </p>
              <ul className="mt-4 flex flex-wrap gap-3">
                {contact.enquiry.audiences.map((line) => (
                  <li
                    className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm leading-6 text-ink/75"
                    key={line}
                  >
                    {line}
                  </li>
                ))}
              </ul>
            </div>

            {/* 邮箱 + 建议补充信息 */}
            <div className="flex flex-col gap-6">
              <div className="rounded-[24px] border border-ink/10 bg-cream/60 p-8">
                <p className="t-eyebrow text-gold">{contact.enquiry.emailLead}</p>
                <a
                  className="mt-3 inline-block font-display text-xl font-medium text-blue underline decoration-blue/25 underline-offset-[5px] transition hover:decoration-blue sm:text-2xl"
                  href="mailto:hello@boldideaslab.com"
                >
                  hello@boldideaslab.com
                </a>
              </div>
              <div className="flex-1 rounded-[24px] border border-ink/10 bg-cream/60 p-8">
                <p className="t-eyebrow text-gold">{contact.enquiry.tipsTitle}</p>
                <ul className="mt-4 space-y-3">
                  {contact.enquiry.tips.map((tip) => (
                    <li className="flex items-start gap-3 leading-7 text-ink/70" key={tip}>
                      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── 写信前速览 ─────────────────────────────────────────────────────── */}
      <section className="bg-cream px-5 py-24 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-6xl">
          <p className="mb-4 t-eyebrow text-gold">{contact.guidance.eyebrow}</p>
          <h2 className="t-h2 text-blue">{contact.guidance.title}</h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {contact.guidance.items.map((item) => (
              <li
                className="rounded-[18px] border border-ink/10 bg-white p-6 leading-7 text-ink/70"
                key={item}
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* ── 结尾 ───────────────────────────────────────────────────────────── */}
      <section className="bg-white px-5 py-24 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="t-h2 text-blue text-balance">{contact.cta.title}</h2>
          <p className="mt-5 leading-8 text-ink/70">{contact.cta.body}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Btn href={formUrl}>{contact.cta.secondary}</Btn>
            <Btn href="/programmes" variant="secondary">
              {contact.cta.primary}
            </Btn>
          </div>
        </Reveal>
      </section>
    </>
  );
}
