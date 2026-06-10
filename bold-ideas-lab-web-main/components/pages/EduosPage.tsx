"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CheckList } from "@/components/ui/CheckList";
import { FinalCta } from "@/components/ui/FinalCta";
import { Section } from "@/components/ui/Section";

const layerAccentClasses = [
  "border-blue/20 bg-blue/5",
  "border-gold/30 bg-gold/10",
  "border-red/20 bg-red/5",
  "border-blue/15 bg-white",
  "border-gold/25 bg-white"
] as const;

const nodeAccentClasses = [
  "border-blue/25 bg-blue/5 text-blue",
  "border-gold/35 bg-gold/10 text-ink",
  "border-red/25 bg-red/5 text-ink"
] as const;

const futureAccentClasses = [
  "border-t-blue",
  "border-t-gold",
  "border-t-red"
] as const;

export function EduosPage() {
  const { dictionary } = useLanguage();
  const eduos = dictionary.eduos;
  const accent = eduos.hero.accent;
  const accentIndex = accent ? eduos.hero.title.indexOf(accent) : -1;
  const titleNode =
    accent && accentIndex !== -1 ? (
      <>
        {eduos.hero.title.slice(0, accentIndex)}
        <span className="text-red">{accent}</span>
        {eduos.hero.title.slice(accentIndex + accent.length)}
      </>
    ) : (
      eduos.hero.title
    );

  return (
    <>
      <section className="relative overflow-hidden bg-cream px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="absolute -right-24 top-12 h-72 w-72 rounded-full border border-blue/10" />
        <div className="absolute -left-20 bottom-10 h-52 w-52 rounded-full border border-gold/15" />
        <div className="absolute right-[14%] top-24 h-2.5 w-2.5 rounded-full bg-red" />
        <div className="absolute bottom-24 left-[8%] h-1.5 w-1.5 rounded-full bg-gold" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="animate-fade-up">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              {eduos.hero.eyebrow}
            </p>
            <h1 className="max-w-4xl font-serif text-5xl font-medium leading-[1.08] text-blue text-balance sm:text-6xl lg:text-7xl">
              {titleNode}
            </h1>
            <p className="mt-4 font-serif text-xl italic text-blue/40 sm:text-2xl">
              {eduos.hero.subtitle}
            </p>
            <p className="mt-8 max-w-2xl border-l-2 border-gold pl-5 text-base leading-8 text-ink/70 sm:text-lg">
              {eduos.hero.lead}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#why" withArrow>
                {eduos.hero.primary}
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary" withArrow>
                {eduos.hero.secondary}
              </ButtonLink>
            </div>
          </div>

          <div className="relative mx-auto grid min-h-[420px] w-full max-w-[520px] place-items-center animate-fade-up">
            <div className="absolute h-[340px] w-[340px] rounded-full border border-blue/15" />
            <div className="absolute h-[430px] w-[430px] rounded-full border border-gold/20" />
            <div className="absolute right-10 top-4 h-3 w-3 rounded-full bg-red" />
            <div className="absolute bottom-10 left-6 h-2 w-2 rounded-full bg-gold" />
            <div className="absolute left-10 top-16 h-16 w-24 rounded-lg bg-gold/15" />
            <div className="absolute bottom-12 right-8 h-20 w-20 rounded-full bg-blue/10" />

            <div className="relative z-10 w-full max-w-[380px] rounded-lg border border-blue/15 bg-white/90 p-6 shadow-soft backdrop-blur">
              <div className="mb-6 flex items-center justify-between gap-4">
                <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                  {eduos.hero.badge}
                </span>
                <span className="h-2 w-2 rounded-full bg-red" />
              </div>
              <div className="space-y-px overflow-hidden rounded-lg border border-ink/10">
                {eduos.layers.items.slice(0, 4).map((item, index) => (
                  <div
                    className="grid grid-cols-[72px_1fr] bg-cream"
                    key={item.title}
                  >
                    <div className="border-r border-ink/10 bg-white px-3 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-blue/45">
                      {item.kicker}
                    </div>
                    <div className="px-4 py-4">
                      <div
                        className={`mb-2 h-1.5 rounded-full ${
                          index === 0
                            ? "w-24 bg-blue"
                            : index === 1
                              ? "w-16 bg-gold"
                              : index === 2
                                ? "w-20 bg-red"
                                : "w-28 bg-blue/30"
                        }`}
                      />
                      <p className="font-serif text-lg font-medium text-ink">
                        {item.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section tone="white">
        <div className="grid gap-6 rounded-lg border border-blue/15 bg-cream p-6 shadow-[0_18px_50px_rgba(26,26,26,0.04)] sm:p-8 lg:grid-cols-[0.75fr_1fr] lg:items-center">
          <p className="font-serif text-3xl font-medium leading-tight text-blue">
            {eduos.notice.title}
          </p>
          <p className="text-base leading-8 text-ink/70">
            {eduos.notice.body}
          </p>
        </div>
      </Section>

      <div className="scroll-mt-24" id="why">
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div className="animate-fade-up">
            <p className="mb-4 text-sm font-semibold uppercase text-gold">
              {eduos.why.eyebrow}
            </p>
            <h2 className="font-serif text-3xl font-medium leading-tight text-blue text-balance sm:text-4xl lg:text-5xl">
              {eduos.why.title}
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-ink/70">
              {eduos.why.body}
            </p>
          </div>
          <div className="rounded-lg border border-ink/10 bg-white p-6 shadow-soft sm:p-8">
            <CheckList items={eduos.why.points} />
          </div>
        </div>
      </Section>
      </div>

      <Section
        eyebrow={eduos.layers.eyebrow}
        lead={eduos.layers.lead}
        title={eduos.layers.title}
        tone="white"
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {eduos.layers.items.map((item, index) => (
            <article
              className={`rounded-lg border p-6 shadow-[0_18px_50px_rgba(26,26,26,0.05)] transition duration-200 hover:-translate-y-1 ${layerAccentClasses[index]}`}
              key={item.title}
            >
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                {item.kicker}
              </p>
              <h3 className="font-serif text-2xl font-medium leading-tight text-blue">
                {item.title}
              </h3>
              <p className="mt-5 text-sm leading-7 text-ink/65">{item.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow={eduos.flow.eyebrow}
        title={eduos.flow.title}
      >
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="max-w-xl text-lg leading-8 text-ink/70">
              {eduos.flow.caption}
            </p>
            <div className="mt-8 space-y-px overflow-hidden rounded-lg border border-blue/10 bg-blue/10">
              {eduos.flow.steps.map((step, index) => (
                <div
                  className="grid grid-cols-[64px_1fr] bg-white transition-colors duration-200 hover:bg-cream"
                  key={step}
                >
                  <div className="flex items-center justify-center border-r border-blue/10 font-serif text-2xl text-blue/25">
                    0{index + 1}
                  </div>
                  <p className="p-5 text-sm font-medium leading-7 text-ink/70">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-ink/10 bg-white p-5 shadow-soft sm:p-8">
            <div className="grid gap-4 md:grid-cols-3">
              {eduos.flow.nodes.map((node, index) => (
                <article
                  className={`rounded-lg border p-5 ${nodeAccentClasses[index]}`}
                  key={node.label}
                >
                  <p className="font-serif text-2xl font-medium">
                    {node.label}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-ink/65">
                    {node.text}
                  </p>
                </article>
              ))}
            </div>

            <div className="mx-auto my-7 h-px max-w-3xl bg-gradient-to-r from-transparent via-blue/25 to-transparent" />

            <div className="relative mx-auto max-w-xl rounded-lg bg-blue p-7 text-center text-white">
              <div className="absolute -right-3 -top-3 h-6 w-6 rounded-full bg-gold" />
              <p className="font-serif text-3xl font-medium">
                {eduos.flow.centerTitle}
              </p>
              <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-white/70">
                {eduos.flow.centerText}
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section
        eyebrow={eduos.future.eyebrow}
        lead={eduos.future.body}
        title={eduos.future.title}
        tone="white"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {eduos.future.items.map((item, index) => (
            <article
              className={`rounded-lg border border-ink/10 border-t-4 bg-cream p-6 shadow-[0_18px_50px_rgba(26,26,26,0.04)] ${futureAccentClasses[index]}`}
              key={item.title}
            >
              <h3 className="font-serif text-2xl font-medium leading-tight text-blue">
                {item.title}
              </h3>
              <p className="mt-5 text-sm leading-7 text-ink/65">{item.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <FinalCta
        body={eduos.cta.body}
        eyebrow={eduos.cta.eyebrow}
        primary={{ href: "/programmes", label: eduos.cta.primary }}
        secondary={{ href: "/contact", label: eduos.cta.secondary }}
        title={eduos.cta.title}
      />
    </>
  );
}
