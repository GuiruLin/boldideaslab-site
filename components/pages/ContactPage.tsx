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

// 纸飞机机身的轮廓：右侧收成机头尖角（外层蓝描边、内层白纸，双层同形裁切）
const planeClip =
  "polygon(0 0, calc(100% - 88px) 0, 100% 50%, calc(100% - 88px) 100%, 0 100%)";

export function ContactPage() {
  const { dictionary } = useLanguage();
  const contact = dictionary.contact;
  const formUrl = contact.enquiry.formUrl.trim();

  return (
    <>
      {/* ── Hero：纸飞机机身作文字框（与作品页火车同一手法） ─────────────────── */}
      <section className="bg-cream px-5 pb-20 pt-20 sm:px-6 lg:px-8 lg:pb-24 lg:pt-28">
        <Reveal className="mx-auto max-w-6xl">
          {/* 外层：蓝色描边（同形裁切） */}
          <div className="bg-blue" style={{ clipPath: planeClip }}>
            {/* 内层：白纸机身，文字写在里面 */}
            <div
              className="relative m-[3px] bg-white p-8 pr-24 sm:p-12 sm:pr-36"
              style={{ clipPath: planeClip }}
            >
              {/* 机头里的金色折面 */}
              <span
                aria-hidden
                className="absolute right-5 top-1/2 hidden h-10 w-14 -translate-y-1/2 bg-gold sm:block"
                style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
              />
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
          </div>

          {/* 航迹：从一颗红点飞来 */}
          <div aria-hidden className="mt-5 flex items-center gap-3 pl-1">
            <span className="h-2.5 w-2.5 rounded-full bg-red" />
            <span className="h-0 w-44 border-t-[3px] border-dashed border-blue/35 sm:w-72" />
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
