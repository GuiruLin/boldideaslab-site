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

const feedbackImagePaths = [
  "/media/work/feedback/online-course-parent-feedback-01.webp",
  "/media/work/feedback/online-course-student-feedback-01.webp",
  "/media/work/feedback/online-course-parent-feedback-02.webp",
  "/media/work/feedback/online-course-student-feedback-02.webp",
  "/media/work/feedback/workshop-feedback-01.webp",
  "/media/work/feedback/beijing-ai-community-parent-feedback.webp"
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
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {work.projects.items.map((project) => (
              <a
                className="group flex flex-col rounded-[18px] border border-ink/10 bg-cream/60 p-7 transition duration-200 hover:-translate-y-1 hover:border-blue/30 hover:shadow-[0_10px_30px_rgba(26,26,26,0.07)] sm:p-8"
                href={project.url}
                key={project.name}
                rel="noopener"
                target="_blank"
              >
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
              </a>
            ))}
          </div>
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

      {/* ── 家长与学生反馈 ───────────────────────────────────────────────── */}
      <section className="bg-cream px-5 py-24 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-6xl">
          <p className="mb-5 t-eyebrow text-gold">{work.feedback.eyebrow}</p>
          <h2 className="t-h2 text-blue">{work.feedback.title}</h2>
          <p className="mt-3 max-w-2xl leading-8 text-ink/60">{work.feedback.subtitle}</p>
          <div className="-mx-1 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-2">
            {work.feedback.items.map((item, index) => (
              <article
                className="flex min-w-[82%] snap-start flex-col overflow-hidden rounded-[18px] border border-ink/10 bg-white shadow-[0_10px_30px_rgba(26,26,26,0.05)] sm:min-w-[45%] lg:min-w-[31%]"
                key={item.quote}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-cream">
                  <Image
                    alt={`${item.author} · ${item.context}`}
                    className="object-cover"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    src={feedbackImagePaths[index]}
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-blue shadow-sm">
                    {item.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <blockquote className="flex-1 border-l-2 border-gold/35 pl-4 text-[15px] leading-relaxed text-ink/80">
                    {item.quote}
                  </blockquote>
                  <div className="mt-5 border-t border-ink/8 pt-4">
                    <p className="text-sm font-medium text-ink">
                      {item.author}
                      <span className="font-normal text-ink/45"> · {item.context}</span>
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
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
