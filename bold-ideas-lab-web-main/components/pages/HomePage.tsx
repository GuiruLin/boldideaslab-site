"use client";

import Image from "next/image";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { ButtonLink } from "@/components/ui/ButtonLink";

const founderPhotos = [
  "/media/about/founders/lynn/profile.webp",
  "/media/about/founders/jacky/profile.webp"
] as const;

const pillarStyles = [
  "border-blue bg-blue/5 text-blue",
  "border-[#9B8EA8] bg-[#9B8EA8]/10 text-[#5A4A6A]",
  "border-[#C4956A] bg-[#C4956A]/10 text-[#7A5530]",
  "border-red bg-red/5 text-red",
  "border-[#7FA48A] bg-[#7FA48A]/10 text-[#3D6B50]",
  "border-gold bg-gold/10 text-[#7A5F1A]"
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

export function HomePage() {
  const { dictionary } = useLanguage();
  const home = dictionary.home;

  return (
    <>
      <section className="relative overflow-hidden bg-cream px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="absolute right-[8%] top-16 h-2.5 w-2.5 rounded-full bg-red" />
        <div className="absolute bottom-24 left-[6%] h-1.5 w-1.5 rounded-full bg-gold" />
        <div className="absolute -right-24 top-40 h-72 w-72 rounded-full border border-blue/10" />
        <div className="absolute -left-28 bottom-4 h-56 w-56 rounded-full border border-gold/15" />

        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="relative z-10 animate-fade-up">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              {home.hero.eyebrow}
            </p>
            <h1 className="max-w-4xl font-serif text-5xl font-medium leading-[1.12] text-blue text-balance sm:text-6xl lg:text-7xl">
              {highlightedTitle(home.hero.title, home.hero.titleAccent)}
            </h1>
            <div className="mt-8 max-w-xl border-l-2 border-gold pl-5">
              <p className="text-base leading-8 text-ink/70 sm:text-lg">
                {home.hero.lead}
              </p>
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/programmes" withArrow>
                {home.hero.primary}
              </ButtonLink>
              <ButtonLink href="/about" variant="secondary">
                {home.hero.secondary}
              </ButtonLink>
            </div>
          </div>

          <div className="relative mx-auto h-[430px] w-full max-w-[520px] animate-fade-up sm:h-[520px]">
            <div className="absolute left-1/2 top-1/2 h-[310px] w-[310px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue/15 sm:h-[380px] sm:w-[380px]" />
            <div className="absolute left-1/2 top-1/2 h-[370px] w-[370px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/20 sm:h-[460px] sm:w-[460px]" />
            <div className="absolute right-8 top-4 h-3 w-3 rounded-full bg-red" />
            <div className="absolute bottom-12 left-8 h-2 w-2 rounded-full bg-gold" />
            <div className="absolute bottom-0 right-5 h-28 w-28 rounded-full bg-gold sm:h-32 sm:w-32" />
            <div className="absolute left-1/2 top-1/2 grid h-[275px] w-[275px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-blue p-9 text-center text-white shadow-soft sm:h-[330px] sm:w-[330px] sm:p-12">
              <p className="whitespace-pre-line font-serif text-2xl font-medium italic leading-relaxed text-cream sm:text-3xl">
                {home.hero.beliefText}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="absolute right-24 top-0 h-40 w-40 rounded-full border border-blue/10" />
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              {home.intro.eyebrow}
            </p>
            <h2 className="font-serif text-3xl font-medium leading-tight text-blue text-balance sm:text-5xl">
              {home.intro.title}
            </h2>
            <p className="mt-3 font-serif text-lg italic text-blue/40">
              {home.intro.subtitle}
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <div className="space-y-6">
                {home.intro.paragraphs.map((paragraph) => (
                  <p
                    className="text-base leading-8 text-ink/75 sm:text-lg"
                    key={paragraph}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              <ButtonLink className="mt-8" href="/about" variant="secondary" withArrow>
                {dictionary.actions.about}
              </ButtonLink>

              <div className="mt-10 border-t border-blue/10 pt-8">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-ink/40">
                  {home.intro.pillLabel}
                </p>
                <div className="flex flex-wrap gap-2">
                  {home.intro.pills.map((pill, index) => (
                    <span
                      className={`rounded-full border px-4 py-2 text-sm font-medium ${pillarStyles[index]}`}
                      key={pill}
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/40">
                {home.intro.foundersLabel}
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {home.intro.founders.map((founder, index) => (
                  <div
                    className="flex gap-4 rounded-2xl border border-blue/10 bg-cream/40 p-5 shadow-[0_12px_40px_rgba(26,26,26,0.05)]"
                    key={founder.name}
                  >
                    <div className="relative h-[4.5rem] w-[4.5rem] shrink-0 overflow-hidden rounded-full border-2 border-gold/30 bg-white">
                      <Image
                        alt={founder.name}
                        className="object-cover"
                        fill
                        sizes="(max-width: 640px) 25vw, 120px"
                        src={founderPhotos[index] ?? founderPhotos[0]}
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-serif text-lg font-medium leading-snug text-blue">
                        {founder.name}
                      </p>
                      <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold">
                        {founder.role}
                      </p>
                      {founder.blurb ? (
                        <p className="mt-3 text-sm leading-6 text-ink/60">
                          {founder.blurb}
                        </p>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cream px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              {home.proof.eyebrow}
            </p>
            <h2 className="font-serif text-3xl font-medium leading-tight text-blue text-balance sm:text-5xl">
              {home.proof.title}
            </h2>
            <p className="mt-3 font-serif text-lg italic text-blue/40">
              {home.proof.subtitle}
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-lg border border-blue/10 bg-blue/10 md:grid-cols-2 lg:grid-cols-4">
            {home.proof.records.map((record) => (
              <article className="relative bg-white p-7" key={record.number}>
                <div className="absolute left-0 top-0 h-full w-1 bg-gold" />
                <p className="font-serif text-5xl font-medium leading-none text-blue/10">
                  {record.number}
                </p>
                <h3 className="mt-6 font-serif text-xl font-medium leading-snug text-blue">
                  {record.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-ink/65">
                  {record.text}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-col justify-between gap-5 rounded-2xl border border-blue/12 bg-white px-6 py-6 shadow-[0_12px_40px_rgba(26,26,26,0.05)] sm:flex-row sm:items-center">
            <div className="max-w-2xl">
              <h3 className="font-serif text-2xl font-medium text-blue">
                {home.proof.galleryTitle}
              </h3>
              <p className="mt-2 text-sm leading-7 text-ink/60">
                {home.proof.galleryText}
              </p>
            </div>
            <ButtonLink href="/work" variant="secondary" withArrow>
              {home.proof.galleryCta}
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="absolute -left-20 top-0 h-48 w-48 rounded-full border border-blue/10" />
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              {home.programme.eyebrow}
            </p>
            <h2 className="font-serif text-3xl font-medium leading-tight text-blue text-balance sm:text-5xl">
              {home.programme.title}
            </h2>
            <p className="mt-3 font-serif text-lg italic text-blue/40">
              {home.programme.subtitle}
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
            <div className="relative flex flex-col overflow-hidden rounded-2xl bg-blue p-8 text-white shadow-soft sm:p-10">
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-white/10" />
              <div className="absolute bottom-8 left-8 h-20 w-20 rounded-full bg-gold/10" />
              <p className="relative mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                {home.programme.tag}
              </p>
              <h3 className="relative font-serif text-3xl font-medium leading-snug text-cream sm:text-4xl">
                {home.programme.cardTitle}
              </h3>
              <div className="relative mt-8 flex-1 space-y-3">
                {home.programme.details.map((detail) => (
                  <div
                    className="flex items-start gap-3 text-sm leading-6 text-cream/75"
                    key={detail}
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {detail}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center lg:pl-4">
              <h3 className="max-w-xl font-serif text-3xl font-medium leading-tight text-blue text-balance">
                {home.programme.narrativeTitle}
              </h3>
              <p className="mt-6 max-w-2xl text-base leading-8 text-ink/70 sm:text-lg">
                {home.programme.body}
              </p>
              <ButtonLink className="mt-8 w-fit" href="/programmes" withArrow>
                {dictionary.actions.programmes}
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              {home.voice.eyebrow}
            </p>
            <h2 className="font-serif text-3xl font-medium leading-tight text-blue text-balance sm:text-5xl">
              {home.voice.title}
            </h2>
            <p className="mt-3 font-serif text-lg italic text-blue/40">
              {home.voice.subtitle}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {home.voice.items.map((item) => (
              <article
                className="flex flex-col overflow-hidden rounded-2xl border border-blue/10 bg-white shadow-[0_12px_40px_rgba(26,26,26,0.06)] transition duration-300 hover:-translate-y-0.5 hover:border-gold/25 hover:shadow-[0_20px_50px_rgba(26,26,26,0.08)]"
                key={item.quote}
              >
                <div className="h-1.5 bg-gradient-to-r from-gold/70 via-blue/25 to-transparent" />
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <blockquote className="flex-1 border-l-2 border-gold/40 pl-4 text-[15px] leading-relaxed text-ink/80">
                    {item.quote}
                  </blockquote>
                  <div className="mt-5 border-t border-ink/8 pt-4">
                    <p className="text-sm font-medium text-ink">{item.source}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-blue px-5 py-20 text-center text-white sm:px-6 lg:px-8 lg:py-24">
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full border border-white/10" />
        <div className="absolute -bottom-20 -right-12 h-48 w-48 rounded-full border border-gold/20" />
        <div className="absolute right-[18%] top-16 h-2 w-2 rounded-full bg-red" />
        <div className="absolute bottom-16 left-[15%] h-1.5 w-1.5 rounded-full bg-gold" />

        <div className="relative z-10 mx-auto max-w-4xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            {home.finalCta.eyebrow}
          </p>
          <h2 className="font-serif text-4xl font-medium leading-tight text-cream sm:text-6xl">
            {home.finalCta.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-cream/65">
            {home.finalCta.body}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href="/programmes" variant="gold" withArrow>
              {dictionary.actions.programmes}
            </ButtonLink>
            <ButtonLink href="/contact" variant="ghostOnDark" withArrow>
              {dictionary.actions.apply}
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
