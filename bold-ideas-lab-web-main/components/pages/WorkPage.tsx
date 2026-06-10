"use client";

import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { ButtonLink } from "@/components/ui/ButtonLink";

const projectImagePaths = [
  "/media/work/projects/color-theory/cover.webp",
  "/media/work/projects/pumpkin-dread/cover.webp",
  "/media/work/projects/magic-story-box/cover.webp",
  "/media/work/projects/everyday-magic/cover.webp"
] as const;

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

function highlightedTitle(title: string, accent: string) {
  const accentIndex = title.indexOf(accent);

  if (accentIndex === -1) {
    return title;
  }

  const before = title.slice(0, accentIndex);
  const after = title.slice(accentIndex + accent.length);

  return (
    <>
      {before}
      <span className="text-red">{accent}</span>
      {after}
    </>
  );
}

function renderStatNumber(value: string) {
  if (!value.endsWith("+")) return value;
  const base = value.slice(0, -1);
  return (
    <span className="inline-flex items-start">
      <span>{base}</span>
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
      <section className="relative overflow-hidden bg-cream px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="absolute -right-24 top-10 h-80 w-80 rounded-full border border-blue/10" />
        <div className="absolute -left-20 bottom-10 h-48 w-48 rounded-full border border-gold/15" />
        <div className="absolute right-[14%] top-20 h-2.5 w-2.5 rounded-full bg-red" />
        <div className="absolute bottom-20 left-[7%] h-1.5 w-1.5 rounded-full bg-gold" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="animate-fade-up">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              {work.hero.eyebrow}
            </p>
            <h1 className="max-w-3xl font-serif text-5xl font-medium leading-[1.08] text-blue text-balance sm:text-6xl lg:text-7xl">
              {highlightedTitle(work.hero.title, work.hero.accent)}
            </h1>
            <p className="mt-4 font-serif text-xl italic text-blue/40">
              {work.hero.subtitle}
            </p>
            <p className="mt-8 max-w-2xl border-l-2 border-gold pl-5 text-base leading-8 text-ink/70 sm:text-lg">
              {work.hero.lead}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/programmes" withArrow>
                {dictionary.actions.programmes}
              </ButtonLink>
              <ButtonLink href="#projects" variant="secondary">
                {work.projects.linkLabel}
              </ButtonLink>
            </div>
          </div>

          <div className="space-y-4 animate-fade-up">
            {work.hero.stats.map((stat, index) => (
              <div
                className="group flex items-center gap-5 rounded-lg border border-blue/10 bg-white p-5 shadow-[0_18px_50px_rgba(26,26,26,0.05)] transition duration-200 hover:translate-x-1 hover:border-blue/25"
                key={stat.label}
              >
                <p
                  className={`grid w-[4.5rem] shrink-0 place-items-center text-center font-serif text-4xl font-medium leading-[0.9] tracking-tight sm:text-[2.6rem] ${
                    index === 1 ? "text-red" : "text-blue"
                  }`}
                >
                  {renderStatNumber(stat.number)}
                </p>
                <div>
                  <h2 className="font-serif text-xl font-medium leading-snug text-blue">
                    {stat.label}
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-ink/55">
                    {stat.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-24"
        id="projects"
      >
        <div className="absolute right-16 top-0 h-44 w-44 rounded-full border border-blue/10" />
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              {work.projects.eyebrow}
            </p>
            <h2 className="font-serif text-3xl font-medium leading-tight text-blue text-balance sm:text-5xl">
              {work.projects.title}
            </h2>
            <p className="mt-3 font-serif text-lg italic text-blue/40">
              {work.projects.subtitle}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {work.projects.items.map((project, index) => (
              <article
                className="group overflow-hidden rounded-lg border border-blue/10 bg-cream shadow-[0_18px_50px_rgba(26,26,26,0.05)] transition duration-200 hover:-translate-y-1 hover:border-blue/25"
                key={project.title}
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    alt={project.title}
                    className="object-cover"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    src={projectImagePaths[index]}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/20 to-transparent" />
                  <p className="absolute bottom-10 left-6 right-6 z-10 font-serif text-3xl font-medium leading-tight tracking-wide text-white sm:text-4xl">
                    {project.visualTitle}
                  </p>
                  {work.projects.screenshotLabel.trim() !== "" && (
                    <p className="absolute bottom-4 left-4 z-10 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70">
                      {work.projects.screenshotLabel}
                    </p>
                  )}
                </div>
                <div className="bg-white p-6 sm:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                    {project.tag}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl font-medium leading-tight text-blue">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-ink/70">
                    {project.description}
                  </p>
                  <div className="mt-6 flex flex-col gap-4 border-t border-blue/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <span className="w-fit rounded-full bg-blue/5 px-3 py-1 text-xs font-medium text-blue">
                      {project.tool}
                    </span>
                    <a
                      className="inline-flex items-center gap-2 text-sm font-medium text-blue underline decoration-blue/20 underline-offset-4 transition hover:decoration-blue"
                      href={project.url}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {work.projects.linkLabel}
                      <ExternalLink aria-hidden size={15} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cream px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full border border-blue/10" />
        <div className="absolute right-12 top-16 h-2.5 w-2.5 rounded-full bg-red" />
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-red/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-red">
              <span className="h-1.5 w-1.5 rounded-full bg-red" />
              {work.recognition.badge}
            </span>
            <h2 className="max-w-2xl font-serif text-3xl font-medium leading-tight text-blue text-balance sm:text-5xl">
              {work.recognition.title}
            </h2>
            <p className="mt-3 font-serif text-lg italic text-blue/40">
              {work.recognition.subtitle}
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-ink/70">
              {work.recognition.description}
            </p>
            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue/55">
                {work.recognition.platformName}
              </p>
              <p className="mt-2 text-sm leading-6 text-ink/60">
                {work.recognition.platformText}
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {work.recognition.films.map((film, index) => (
              <article
                className="overflow-hidden rounded-lg border border-blue/10 bg-white shadow-[0_18px_50px_rgba(26,26,26,0.05)] transition duration-200 hover:-translate-y-1 hover:border-blue/25"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
                  {work.recognition.screenshotLabel.trim() !== "" && (
                    <p className="absolute bottom-4 left-4 z-10 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70">
                      {work.recognition.screenshotLabel}
                    </p>
                  )}
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-red">
                    {work.recognition.workBadge ?? work.recognition.badge}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl font-medium text-blue">
                    {film.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink/55">{film.author}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full border border-blue/10" />
        <div className="absolute -right-16 bottom-0 h-56 w-56 rounded-full border border-gold/20" />
        <div className="absolute right-[14%] top-16 h-2.5 w-2.5 rounded-full bg-red" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              {work.gallery.eyebrow}
            </p>
            <h2 className="font-serif text-3xl font-medium leading-tight text-blue text-balance sm:text-5xl">
              {work.gallery.title}
            </h2>
            <p className="mt-3 font-serif text-lg italic text-blue/40">
              {work.gallery.subtitle}
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-ink/70">
              {work.gallery.description}
            </p>
            <ButtonLink className="mt-8" href={work.gallery.url} variant="secondary">
              <span className="inline-flex items-center gap-2">
                {work.gallery.cta}
                <ExternalLink aria-hidden size={15} />
              </span>
            </ButtonLink>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-blue/10 bg-cream p-8 text-center shadow-[0_14px_40px_rgba(26,26,26,0.05)]">
            <div className="absolute -right-14 -top-14 h-44 w-44 rounded-full border border-blue/12" />
            <div className="absolute left-8 top-8 h-2 w-2 rounded-full bg-gold" />
            <p className="mx-auto mt-8 max-w-md whitespace-pre-line font-serif text-4xl font-medium italic leading-tight text-blue/75">
              {work.gallery.previewTitle}
            </p>
            <p className="mt-10 text-xs font-semibold uppercase tracking-[0.18em] text-blue/45">
              {work.gallery.previewSub}
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f3f0e8] px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="absolute right-16 top-0 h-48 w-48 rounded-full border border-blue/10" />
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              {work.feedback.eyebrow}
            </p>
            <h2 className="font-serif text-3xl font-medium leading-tight text-blue text-balance sm:text-5xl">
              {work.feedback.title}
            </h2>
            <p className="mt-3 font-serif text-lg italic text-blue/40">
              {work.feedback.subtitle}
            </p>
          </div>

          <div className="-mx-1 flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-2">
            {work.feedback.items.map((item, index) => (
              <article
                className="flex min-w-[82%] snap-start flex-col overflow-hidden rounded-2xl border border-blue/10 bg-white shadow-[0_12px_40px_rgba(26,26,26,0.06)] transition duration-300 hover:-translate-y-0.5 hover:border-gold/25 hover:shadow-[0_20px_50px_rgba(26,26,26,0.08)] sm:min-w-[45%] lg:min-w-[31%]"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-blue shadow-sm">
                    {item.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <blockquote className="flex-1 border-l-2 border-gold/35 pl-4 text-[15px] leading-relaxed text-ink/80">
                    {item.quote}
                  </blockquote>
                  <div className="mt-5 border-t border-ink/8 pt-4">
                    <p className="text-sm font-medium text-ink">
                      {item.author}
                      <span className="font-normal text-ink/45">
                        {" "}
                        · {item.context}
                      </span>
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cream px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="absolute -right-16 top-10 h-56 w-56 rounded-full border border-blue/10" />
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              {work.photos.eyebrow}
            </p>
            <h2 className="font-serif text-3xl font-medium leading-tight text-blue text-balance sm:text-5xl">
              {work.photos.title}
            </h2>
            <p className="mt-3 font-serif text-lg italic text-blue/40">
              {work.photos.subtitle}
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {work.photos.groups.map((group, groupIndex) => (
              <div
                className="rounded-2xl border border-blue/10 bg-white p-5 shadow-[0_14px_40px_rgba(26,26,26,0.05)] sm:p-6"
                key={group.title}
              >
                <div className="mb-4 flex items-center gap-3">
                  <h3 className="font-serif text-2xl font-medium text-blue">
                    {group.title}
                  </h3>
                </div>

                {(() => {
                  const currentIndex = photoIndexes[groupIndex] ?? 0;
                  const currentLabel = group.items[currentIndex];
                  const imagePath =
                    groupIndex === 0
                      ? workshopPhotoPaths[currentIndex]
                      : onlineCoursePhotoPaths[currentIndex];
                  return (
                    <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-blue/8 shadow-[0_14px_40px_rgba(26,26,26,0.06)]">
                      <Image
                        alt={currentLabel}
                        className="object-cover"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        src={imagePath}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
                      <p className="absolute bottom-14 left-4 right-4 text-sm font-semibold leading-6 tracking-[0.02em] text-white/95">
                        {currentLabel}
                      </p>
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-full bg-ink/35 px-3 py-1.5 backdrop-blur-sm">
                        <div className="flex items-center gap-1.5">
                          {group.items.map((item, dotIndex) => (
                            <button
                              aria-label={`Go to photo ${dotIndex + 1}`}
                              className={`h-1.5 w-1.5 rounded-full transition ${
                                dotIndex === currentIndex
                                  ? "bg-white"
                                  : "bg-white/45 hover:bg-white/75"
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
        </div>
      </section>

      <section className="relative overflow-hidden bg-blue px-5 py-20 text-center text-cream sm:px-6 lg:px-8 lg:py-24">
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full border border-cream/10" />
        <div className="absolute -right-16 bottom-0 h-56 w-56 rounded-full border border-gold/20" />
        <div className="absolute right-[17%] top-20 h-2.5 w-2.5 rounded-full bg-red" />
        <div className="absolute bottom-20 left-[16%] h-1.5 w-1.5 rounded-full bg-gold" />

        <div className="relative z-10 mx-auto max-w-4xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            {work.cta.eyebrow}
          </p>
          <h2 className="font-serif text-4xl font-medium leading-tight text-cream text-balance sm:text-6xl">
            {work.cta.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-cream/68">
            {work.cta.body}
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/programmes" variant="gold" withArrow>
              {work.cta.primary}
            </ButtonLink>
            <ButtonLink className="gap-2" href={work.gallery.url} variant="ghostOnDark">
              {work.cta.secondary}
              <ExternalLink aria-hidden className="h-4 w-4 shrink-0 opacity-90" />
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
