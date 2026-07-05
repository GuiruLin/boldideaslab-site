"use client";

import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { Btn } from "@/components/redesign/Btn";
import { Reveal } from "@/components/redesign/motion";
import { Decagon } from "@/components/redesign/shapes";

const recognitionImagePaths = [
  "/media/work/recognition/spring-gala/yulun-selected-work.webp",
  "/media/work/recognition/spring-gala/niuniu-selected-work.webp"
] as const;

const workshopPhotoPaths = [
  "/media/work/photos/workshop/workshop-ai-tool-coaching.webp",
  "/media/work/photos/workshop/workshop-students-thinking.webp",
  "/media/work/photos/workshop/workshop-google-ai-studio.webp"
] as const;

const onlineCoursePhotoPaths = [
  "/media/work/photos/online-course/online-course-ai-composition-sharing.webp",
  "/media/work/photos/online-course/online-course-group-discussion-ai-image.webp"
] as const;

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

function renderStatNumber(value: string) {
  if (!value.endsWith("+")) return value;
  return (
    <span className="inline-flex items-start">
      <span>{value.slice(0, -1)}</span>
      <span className="mt-1 text-[0.62em]">+</span>
    </span>
  );
}

export function WorkPage() {
  const { dictionary } = useLanguage();
  const work = dictionary.work;
  const [photoIndexes, setPhotoIndexes] = useState<[number, number]>([0, 0]);
  const [feedbackPage, setFeedbackPage] = useState(0);

  const updatePhotoIndex = (groupIndex: number, direction: "prev" | "next") => {
    const itemsCount = work.photos.groups[groupIndex]?.items.length ?? 0;
    if (itemsCount <= 1) return;
    setPhotoIndexes((current) => {
      const next = [...current] as [number, number];
      const delta = direction === "next" ? 1 : -1;
      next[groupIndex] = (next[groupIndex] + delta + itemsCount) % itemsCount;
      return next;
    });
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setPhotoIndexes((current) => {
        const next = [...current] as [number, number];
        work.photos.groups.forEach((group, groupIndex) => {
          const itemsCount = group.items.length;
          if (itemsCount > 1) {
            next[groupIndex] = (next[groupIndex] + 1) % itemsCount;
          }
        });
        return next;
      });
    }, 4500);
    return () => window.clearInterval(timer);
  }, [work.photos.groups]);

  return (
    <>
      {/* ── Hero：干净大字 + 金色数字，作品当主角 ─────────────────────────── */}
      <section className="relative overflow-hidden bg-cream px-5 pb-16 pt-20 sm:px-6 lg:px-8 lg:pt-28">
        <Decagon className="pointer-events-none absolute -right-16 top-10 hidden h-64 w-64 opacity-[0.06] lg:block" />
        <Reveal className="relative mx-auto max-w-6xl">
          <p className="mb-5 t-eyebrow text-gold">{work.hero.eyebrow}</p>
          <h1 className="max-w-4xl t-display text-blue text-balance">
            {withAccent(work.hero.title, work.hero.accent)}
          </h1>
          <p className="mt-6 max-w-2xl leading-8 text-ink/70">{work.hero.lead}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Btn href="#projects">{work.projects.linkLabel}</Btn>
            <Btn href="/programmes" variant="secondary">
              {dictionary.actions.programmes}
            </Btn>
          </div>
          <div className="mt-14 flex flex-wrap items-baseline gap-x-12 gap-y-8">
            {work.hero.stats.map((stat, index) => (
              <p className="flex items-baseline gap-3" key={stat.label}>
                <span
                  className={`font-display text-5xl font-semibold leading-none ${
                    index === 1 ? "text-red" : "text-gold"
                  }`}
                >
                  {renderStatNumber(stat.number)}
                </span>
                <span className="max-w-[18ch] text-sm leading-6 text-ink/60">{stat.label}</span>
              </p>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── 精选作品：5 件，学生 + WHY + 试玩链接 ──────────────────────────── */}
      <section className="bg-white px-5 py-24 sm:px-6 lg:px-8" id="projects">
        <Reveal className="mx-auto max-w-6xl">
          <p className="mb-5 t-eyebrow text-gold">{work.projects.eyebrow}</p>
          <h2 className="t-h2 text-blue">{work.projects.title}</h2>
          <p className="mt-3 max-w-2xl leading-8 text-ink/60">{work.projects.subtitle}</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {work.projects.items.map((project) => (
              <a
                className="group flex flex-col overflow-hidden rounded-[18px] border border-ink/10 bg-cream/60 transition duration-200 hover:-translate-y-1 hover:border-blue/30 hover:shadow-[0_10px_30px_rgba(26,26,26,0.07)]"
                href={project.url}
                key={project.name}
                rel="noopener"
                target="_blank"
              >
                {project.image && (
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-ink/10">
                    <Image
                      alt={project.name}
                      className="object-cover transition duration-300 group-hover:scale-[1.03]"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      src={project.image}
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <p className="t-eyebrow text-gold">{project.tag}</p>
                  <h3 className="mt-2 t-h3 text-blue">{project.name}</h3>
                  <p className="mt-1 text-sm text-ink/55">{project.student}</p>
                  <p className="mt-4 flex-1 font-serif italic leading-7 text-ink/70">
                    “{project.quote}”
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm text-blue underline decoration-blue/30 underline-offset-4 transition group-hover:decoration-blue">
                    {work.projects.linkLabel}
                    <ExternalLink aria-hidden size={14} />
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Study Compass：独立国际展示块（Coolest Projects） */}
          <a
            className="group relative mt-4 block overflow-hidden border border-gold/40 bg-gold/[0.07] p-8 transition duration-200 hover:-translate-y-1 hover:border-gold/60 sm:flex sm:items-center sm:justify-between sm:gap-10 sm:p-10"
            href={work.showcase.url}
            rel="noopener"
            style={{ borderRadius: "28px 28px 28px 6px" }}
            target="_blank"
          >
            <Decagon className="pointer-events-none absolute -right-6 -top-8 h-32 w-32 opacity-[0.1]" />
            <div className="relative">
              <p className="t-eyebrow text-red">{work.showcase.badge}</p>
              <h3 className="mt-2 t-h3 text-blue">
                {work.showcase.name}
                <span className="ml-2 text-base font-normal text-ink/45">· {work.showcase.student}</span>
              </h3>
              <p className="mt-3 max-w-xl leading-7 text-ink/70">{work.showcase.text}</p>
            </div>
            <span className="relative mt-5 inline-flex shrink-0 items-center gap-2 text-sm font-medium text-blue underline decoration-blue/30 underline-offset-4 transition group-hover:decoration-blue sm:mt-0">
              {work.showcase.cta}
              <ExternalLink aria-hidden size={14} />
            </span>
          </a>
        </Reveal>
      </section>

      {/* ── Recognition · 春晚入选 ────────────────────────────────────────── */}
      <section className="bg-cream px-5 py-24 sm:px-6 lg:px-8">
        <Reveal className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-red/5 px-4 py-2 t-eyebrow text-red">
              <span className="h-1.5 w-1.5 rounded-full bg-red" />
              {work.recognition.badge}
            </span>
            <h2 className="max-w-2xl t-h2 text-blue text-balance">{work.recognition.title}</h2>
            <p className="mt-6 max-w-2xl leading-8 text-ink/70">{work.recognition.description}</p>
            <div className="mt-8">
              <p className="t-eyebrow text-blue/55">{work.recognition.platformName}</p>
              <p className="mt-2 text-sm leading-6 text-ink/60">{work.recognition.platformText}</p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {work.recognition.films.map((film, index) => (
              <article
                className="overflow-hidden rounded-[18px] border border-ink/10 bg-white shadow-[0_10px_30px_rgba(26,26,26,0.05)]"
                key={film.title}
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    alt={film.title}
                    className="object-cover"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    src={recognitionImagePaths[index]}
                  />
                </div>
                <div className="p-6">
                  <p className="t-eyebrow text-red">{work.recognition.workBadge ?? work.recognition.badge}</p>
                  <h3 className="mt-3 t-h3 text-blue">{film.title}</h3>
                  <p className="mt-2 text-sm text-ink/55">{film.author}</p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── 完整画廊入口 ─────────────────────────────────────────────────── */}
      <section className="bg-white px-5 py-24 sm:px-6 lg:px-8">
        <Reveal className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-5 t-eyebrow text-gold">{work.gallery.eyebrow}</p>
            <h2 className="t-h2 text-blue text-balance">{work.gallery.title}</h2>
            <p className="mt-6 max-w-2xl leading-8 text-ink/70">{work.gallery.description}</p>
            <Btn className="mt-8" href={work.gallery.url}>
              {work.gallery.cta}
            </Btn>
          </div>
          <div
            className="relative overflow-hidden border border-blue/12 bg-cream p-10 text-center"
            style={{ borderRadius: "28px 28px 28px 6px" }}
          >
            <Decagon className="pointer-events-none absolute -right-8 -top-10 h-40 w-40 opacity-[0.1]" />
            <p className="relative mx-auto max-w-md whitespace-pre-line font-serif text-4xl font-medium italic leading-tight text-blue/75">
              {work.gallery.previewTitle}
            </p>
            <p className="relative mt-10 t-eyebrow text-blue/45">{work.gallery.previewSub}</p>
          </div>
        </Reveal>
      </section>

      {/* ── 家长与学生反馈：翻页书（克莱因蓝封面 + 米白书页） ─────────────────── */}
      <section className="bg-cream px-5 py-24 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl">
          <p className="mb-5 t-eyebrow text-gold">{work.feedback.eyebrow}</p>
          <h2 className="t-h2 text-blue">{work.feedback.title}</h2>
          <p className="mt-3 leading-8 text-ink/60">{work.feedback.subtitle}</p>

          {(() => {
            const total = work.feedback.items.length;
            const item = work.feedback.items[feedbackPage];
            const go = (delta: number) =>
              setFeedbackPage((p) => (p + delta + total) % total);
            return (
              <div className="relative mt-10">
                {/* 书页堆叠错层 */}
                <div className="absolute inset-x-4 -bottom-2 h-full rounded-[22px] bg-blue/15" />
                <div className="absolute inset-x-2 -bottom-1 h-full rounded-[22px] bg-blue/25" />
                {/* 书本封面 */}
                <div className="relative rounded-[22px] bg-blue p-2.5 shadow-[0_30px_70px_rgba(0,47,167,0.22)]">
                  {/* 书页 */}
                  <div className="relative min-h-[300px] overflow-hidden rounded-[16px] bg-cream px-7 py-12 sm:px-16 sm:py-16">
                    <span
                      aria-hidden
                      className="absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-ink/[0.09] to-transparent"
                    />
                    <span aria-hidden className="font-display text-6xl leading-none text-gold/40">
                      &ldquo;
                    </span>
                    <blockquote className="-mt-4 font-serif text-xl italic leading-relaxed text-blue/90 sm:text-[1.6rem]">
                      {item.quote}
                    </blockquote>
                    <p className="mt-6 text-sm font-medium text-ink/60">
                      {item.author}
                      <span className="font-normal text-ink/40"> · {item.context}</span>
                    </p>
                    <p
                      aria-hidden
                      className="absolute bottom-5 right-7 font-display text-sm text-ink/30"
                    >
                      {feedbackPage + 1} / {total}
                    </p>
                  </div>
                </div>
                {/* 翻页 */}
                <div className="mt-6 flex items-center justify-center gap-5">
                  <button
                    aria-label="Previous"
                    className="grid h-11 w-11 place-items-center rounded-full border border-blue/20 text-blue transition hover:bg-blue hover:text-cream"
                    onClick={() => go(-1)}
                    type="button"
                  >
                    <ChevronLeft aria-hidden size={18} />
                  </button>
                  <div className="flex items-center gap-2">
                    {work.feedback.items.map((entry, i) => (
                      <button
                        aria-label={`Page ${i + 1}`}
                        className={`h-2 rounded-full transition-all ${
                          i === feedbackPage ? "w-6 bg-blue" : "w-2 bg-blue/25 hover:bg-blue/40"
                        }`}
                        key={entry.quote}
                        onClick={() => setFeedbackPage(i)}
                        type="button"
                      />
                    ))}
                  </div>
                  <button
                    aria-label="Next"
                    className="grid h-11 w-11 place-items-center rounded-full border border-blue/20 text-blue transition hover:bg-blue hover:text-cream"
                    onClick={() => go(1)}
                    type="button"
                  >
                    <ChevronRight aria-hidden size={18} />
                  </button>
                </div>
              </div>
            );
          })()}
        </Reveal>
      </section>

      {/* ── 现场照片 ─────────────────────────────────────────────────────── */}
      <section className="bg-white px-5 py-24 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-6xl">
          <p className="mb-5 t-eyebrow text-gold">{work.photos.eyebrow}</p>
          <h2 className="t-h2 text-blue">{work.photos.title}</h2>
          <p className="mt-3 max-w-2xl leading-8 text-ink/60">{work.photos.subtitle}</p>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {work.photos.groups.map((group, groupIndex) => (
              <div
                className="rounded-[18px] border border-ink/10 bg-cream/60 p-5 sm:p-6"
                key={group.title}
              >
                <h3 className="mb-4 t-h3 text-blue">{group.title}</h3>
                {(() => {
                  const currentIndex = photoIndexes[groupIndex] ?? 0;
                  const currentLabel = group.items[currentIndex];
                  const imagePath =
                    groupIndex === 0
                      ? workshopPhotoPaths[currentIndex]
                      : onlineCoursePhotoPaths[currentIndex];
                  return (
                    <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-blue/8">
                      <Image
                        alt={currentLabel}
                        className="object-cover"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        src={imagePath}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
                      <p className="absolute bottom-14 left-4 right-4 text-sm font-semibold leading-6 text-white/95">
                        {currentLabel}
                      </p>
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-full bg-ink/35 px-3 py-1.5 backdrop-blur-sm">
                        <div className="flex items-center gap-1.5">
                          {group.items.map((item, dotIndex) => (
                            <button
                              aria-label={`Go to photo ${dotIndex + 1}`}
                              className={`h-1.5 w-1.5 rounded-full transition ${
                                dotIndex === currentIndex ? "bg-white" : "bg-white/45 hover:bg-white/75"
                              }`}
                              key={item}
                              onClick={() =>
                                setPhotoIndexes((current) => {
                                  const next = [...current] as [number, number];
                                  next[groupIndex] = dotIndex;
                                  return next;
                                })
                              }
                              type="button"
                            />
                          ))}
                        </div>
                        <div className="flex items-center gap-1">
                          <button
                            aria-label="Previous photo"
                            className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                            onClick={() => updatePhotoIndex(groupIndex, "prev")}
                            type="button"
                          >
                            <ChevronLeft aria-hidden size={14} />
                          </button>
                          <button
                            aria-label="Next photo"
                            className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                            onClick={() => updatePhotoIndex(groupIndex, "next")}
                            type="button"
                          >
                            <ChevronRight aria-hidden size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── 结尾：米白底，无黑块 ───────────────────────────────────────────── */}
      <section className="bg-cream px-5 py-24 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="mb-5 t-eyebrow text-gold">{work.cta.eyebrow}</p>
          <h2 className="t-h2 text-blue text-balance">{work.cta.title}</h2>
          <p className="mt-5 leading-8 text-ink/70">{work.cta.body}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Btn href="/programmes">{work.cta.primary}</Btn>
            <Btn href={work.gallery.url} variant="secondary">
              {work.cta.secondary}
            </Btn>
          </div>
        </Reveal>
      </section>
    </>
  );
}
