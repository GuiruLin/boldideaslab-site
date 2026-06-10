"use client";

import Image from "next/image";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Section } from "@/components/ui/Section";

const philosophyTopStyles = [
  "bg-blue text-cream",
  "bg-[#9B8EA8] text-cream",
  "bg-[#C4956A] text-cream",
  "bg-red text-cream",
  "bg-[#7FA48A] text-cream",
  "bg-gold text-blue"
] as const;

const philosophyTagStyles = [
  "bg-blue/5 text-blue",
  "bg-[#9B8EA8]/10 text-[#5A4A6A]",
  "bg-[#C4956A]/10 text-[#7A5530]",
  "bg-red/5 text-red",
  "bg-[#7FA48A]/10 text-[#3D6B50]",
  "bg-gold/15 text-[#765F1D]"
] as const;

function AbstractImageBlock({
  label,
  note
}: {
  label: string;
  note: string;
}) {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <div className="absolute -right-4 top-4 h-full w-full border border-blue/15" />
      <div className="absolute -right-3 -top-3 h-3 w-3 rounded-full bg-red" />
      <div className="absolute -bottom-6 left-5 h-2 w-2 rounded-full bg-blue" />
      <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-gold shadow-soft">
        <Image
          alt={label}
          className="object-cover"
          fill
          sizes="(max-width: 1024px) 100vw, 520px"
          src="/media/about/hero-carousel/workshop-student-pitch-cover.webp"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" />
        <div className="absolute -left-20 top-12 h-56 w-56 rounded-full border border-blue/15" />
        <div className="absolute bottom-10 right-8 h-32 w-32 rounded-full border border-cream/35" />
        <div className="absolute left-10 top-10 h-24 w-24 rounded-full bg-cream/20" />
        <div className="absolute inset-x-8 bottom-8 rounded-lg bg-cream/85 p-5 backdrop-blur">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue/45">
            {label}
          </p>
          <p className="mt-4 font-serif text-xl font-medium leading-relaxed text-blue">
            {note}
          </p>
        </div>
      </div>
    </div>
  );
}

export function AboutPage() {
  const { dictionary } = useLanguage();
  const about = dictionary.about;

  return (
    <>
      <section className="relative overflow-hidden bg-cream px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="absolute -right-24 top-14 h-72 w-72 rounded-full border border-blue/10" />
        <div className="absolute -left-20 bottom-10 h-52 w-52 rounded-full border border-gold/15" />
        <div className="absolute right-[13%] top-20 h-2.5 w-2.5 rounded-full bg-red" />
        <div className="absolute bottom-24 left-[8%] h-1.5 w-1.5 rounded-full bg-gold" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <AbstractImageBlock
            label={about.hero.imageLabel}
            note={about.hero.note}
          />

          <div className="animate-fade-up">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              {about.hero.eyebrow}
            </p>
            <h1 className="max-w-3xl font-serif text-5xl font-medium leading-[1.08] text-blue text-balance sm:text-6xl lg:text-7xl">
              {about.hero.title}
            </h1>
            <p className="mt-3 font-serif text-xl italic text-blue/40">
              {about.hero.subtitle}
            </p>
            <div className="mt-8 max-w-2xl border-l-2 border-gold pl-5">
              <p className="text-base leading-8 text-ink/70 sm:text-lg">
                {about.hero.lead}
              </p>
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/programmes" withArrow>
                {dictionary.actions.programmes}
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                {dictionary.actions.contact}
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="absolute right-16 top-0 h-36 w-36 rounded-full border border-blue/10" />
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.78fr_1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              {about.story.eyebrow}
            </p>
            <h2 className="max-w-xl font-serif text-3xl font-medium leading-tight text-blue text-balance sm:text-5xl">
              {about.story.title}
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-6 text-ink/45">
              {about.story.timelineHint}
            </p>
          </div>

          <div className="relative pt-2">
            {about.story.paragraphs.map((paragraph, index) => (
              <div
                className={`relative border-l border-gold/20 pl-6 sm:pl-8 ${
                  index === 0 ? "" : "mt-8 sm:mt-10"
                }`}
                key={paragraph}
              >
                <span
                  aria-hidden
                  className="absolute -left-[5px] top-2 flex h-2.5 w-2.5 items-center justify-center rounded-full border-2 border-gold bg-cream sm:top-2.5"
                />
                <p
                  className={`text-base leading-relaxed text-ink/80 sm:text-lg ${
                    index === 2
                      ? "font-serif text-lg italic text-blue sm:text-xl"
                      : ""
                  }`}
                >
                  {paragraph}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section
        className="relative overflow-hidden"
        eyebrow={about.philosophy.eyebrow}
        lead={about.philosophy.lead}
        title={about.philosophy.title}
        tone="cream"
      >
        <p className="mb-10 font-serif text-lg italic text-blue/40">
          {about.philosophy.subtitle}
        </p>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {about.philosophy.items.map((item, index) => (
            <article
              className="overflow-hidden rounded-lg border border-blue/10 bg-white shadow-[0_18px_50px_rgba(26,26,26,0.05)] transition duration-200 hover:-translate-y-1 hover:border-blue/25"
              key={item.title}
            >
              <div className={`p-5 ${philosophyTopStyles[index]}`}>
                <p className="font-serif text-4xl font-medium leading-none opacity-30">
                  {item.number}
                </p>
                <h3 className="mt-6 font-serif text-2xl font-medium leading-tight">
                  {item.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2 p-5">
                {item.tags.map((tag) => (
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${philosophyTagStyles[index]}`}
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="absolute -left-24 top-12 h-56 w-56 rounded-full border border-gold/15" />
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.92fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              {about.approach.eyebrow}
            </p>
            <h2 className="max-w-3xl font-serif text-3xl font-medium leading-tight text-blue text-balance sm:text-5xl">
              {about.approach.title}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-ink/70 sm:text-lg">
              {about.approach.body}
            </p>
          </div>

          <div className="space-y-px overflow-hidden rounded-lg border border-blue/10 bg-blue/10">
            {about.approach.items.map((item, index) => (
              <div
                className="grid grid-cols-[68px_1fr] bg-cream transition-colors duration-200 hover:bg-white"
                key={item}
              >
                <div className="flex items-center justify-center border-r border-blue/10 bg-white font-serif text-3xl text-blue/20">
                  0{index + 1}
                </div>
                <p className="p-6 text-base font-medium leading-7 text-ink/75">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cream px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="absolute right-12 top-16 h-2 w-2 rounded-full bg-red" />
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              {about.founders.eyebrow}
            </p>
            <h2 className="font-serif text-3xl font-medium leading-tight text-blue text-balance sm:text-5xl">
              {about.founders.title}
            </h2>
            <p className="mt-3 font-serif text-lg italic text-blue/40">
              {about.founders.subtitle}
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {(
              [
                {
                  photo: "/media/about/founders/lynn/profile.webp",
                  data: about.founders.lynn
                },
                {
                  photo: "/media/about/founders/jacky/profile.webp",
                  data: about.founders.jacky
                }
              ] as const
            ).map(({ photo, data }) => (
              <article
                className="flex flex-col rounded-2xl border border-blue/10 bg-white p-6 shadow-[0_12px_40px_rgba(26,26,26,0.06)] sm:p-8"
                key={data.name}
              >
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                  <div className="mx-auto shrink-0 sm:mx-0">
                    <div className="relative h-36 w-36 sm:h-40 sm:w-40">
                      <Image
                        alt={data.name}
                        className="rounded-full object-cover ring-2 ring-gold/45 ring-offset-4 ring-offset-white"
                        fill
                        sizes="(max-width: 640px) 144px, 160px"
                        src={photo}
                      />
                    </div>
                    <div className="mt-4 text-center sm:mt-5 sm:text-left">
                      <p className="font-serif text-lg font-medium text-blue">
                        {data.name}
                      </p>
                      <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold">
                        {data.role}
                      </p>
                    </div>
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="space-y-4 border-l-2 border-gold/45 pl-4 sm:pl-5">
                      {data.story.map((paragraph) => (
                        <p
                          className="text-base leading-8 text-ink/75"
                          key={paragraph}
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    <div className="mt-6 space-y-3">
                      {data.points.map((point) => (
                        <div
                          className="flex items-start gap-3 text-sm leading-7 text-ink/65"
                          key={point}
                        >
                          <span className="mt-[11px] h-px w-5 shrink-0 bg-gold/70" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-lg border border-blue/10 bg-cream p-8 sm:p-10 lg:grid-cols-[0.82fr_1fr] lg:items-center lg:p-12">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              {about.whyNow.eyebrow}
            </p>
            <h2 className="font-serif text-3xl font-medium leading-tight text-blue text-balance sm:text-5xl">
              {about.whyNow.title}
            </h2>
          </div>
          <p className="border-l-2 border-gold pl-5 text-base leading-8 text-ink/70 sm:text-lg">
            {about.whyNow.body}
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cream px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="absolute -right-20 bottom-0 h-56 w-56 rounded-full border border-blue/10" />
        <div className="relative z-10 mx-auto max-w-7xl rounded-lg border border-blue/10 bg-white p-8 shadow-[0_18px_50px_rgba(26,26,26,0.05)] sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="max-w-3xl font-serif text-3xl font-medium leading-tight text-blue text-balance sm:text-5xl">
                {about.cta.title}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-ink/65">
                {about.cta.body}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <ButtonLink href="/programmes" withArrow>
                {dictionary.actions.programmes}
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary" withArrow>
                {dictionary.actions.contact}
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
