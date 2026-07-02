"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CheckList } from "@/components/ui/CheckList";
import { FinalCta } from "@/components/ui/FinalCta";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";

const trackCardClasses =
  "rounded-lg border border-blue/10 bg-cream/60 p-6 transition duration-200 hover:translate-x-1 hover:border-blue/25 sm:flex sm:items-baseline sm:gap-8 sm:p-7";

export function ProgrammesPage() {
  const { dictionary } = useLanguage();
  const programmes = dictionary.programmes;

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <PageHero
        eyebrow={programmes.hero.eyebrow}
        accent={programmes.hero.accent}
        title={programmes.hero.title}
        lead={programmes.hero.lead}
        note={programmes.hero.note}
        primary={{ href: "/contact", label: programmes.cta.button }}
        secondary={{ href: "/work", label: dictionary.actions.work }}
      />

      {/* ── Track record (我们做过的项目) ──────────────────────────────────── */}
      <Section title={programmes.trackRecord.title} tone="white">
        <div className="space-y-3">
          {programmes.trackRecord.cards.map((card) => {
            const content = (
              <>
                <p className="text-xs font-semibold uppercase tracking-widest text-gold sm:w-48 sm:shrink-0">
                  {card.label}
                </p>
                <div className="mt-2 sm:mt-0">
                  <h3 className="font-serif text-xl font-medium leading-snug text-blue">
                    {card.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-7 text-ink/60">
                    {card.text.map((seg) =>
                      seg.red ? (
                        <span className="text-red" key={seg.t}>
                          {seg.t}
                        </span>
                      ) : (
                        <span key={seg.t}>{seg.t}</span>
                      )
                    )}
                  </p>
                </div>
              </>
            );

            return card.url ? (
              <a
                className={`block ${trackCardClasses}`}
                href={card.url}
                key={card.title}
                rel="noopener"
                target="_blank"
              >
                {content}
              </a>
            ) : (
              <article className={trackCardClasses} key={card.title}>
                {content}
              </article>
            );
          })}
        </div>
      </Section>

      {/* ── Working with schools (和学校一起做) ────────────────────────────── */}
      <Section
        eyebrow={programmes.schools.eyebrow}
        title={programmes.schools.title}
        tone="cream"
      >
        <div className="max-w-3xl space-y-5 text-base leading-8 text-ink/75">
          {programmes.schools.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-sm leading-7 text-ink/60">
          <span className="mr-3 text-xs font-semibold uppercase tracking-widest text-gold">
            {programmes.schools.formatLabel}
          </span>
          {programmes.schools.formats.join(" · ")}
        </p>
        <ButtonLink className="mt-8" href="/contact" withArrow>
          {programmes.schools.cta}
        </ButtonLink>
      </Section>

      {/* ── Method: the four-stage arc ───────────────────────────────────── */}
      <Section
        eyebrow={programmes.arc.eyebrow}
        title={programmes.arc.title}
        lead={programmes.arc.lead}
        tone="white"
      >
        <div className="space-y-px">
          {programmes.arc.phases.map((phase, index) => (
            <div
              key={phase.num}
              className="group grid grid-cols-[56px_1fr] sm:grid-cols-[72px_1fr]"
            >
              <div className="flex flex-col items-center pt-8 pr-2">
                <span className="select-none font-serif text-3xl font-medium leading-none text-ink/10 sm:text-4xl">
                  {phase.num}
                </span>
                {index < programmes.arc.phases.length - 1 && (
                  <div className="mt-3 min-h-8 w-px flex-1 bg-ink/10" />
                )}
              </div>

              <div className="mb-px border border-ink/8 bg-cream/40 p-6 transition-colors duration-150 group-hover:border-blue/20 sm:p-8">
                <div className="mb-4 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                    {phase.tag}
                  </p>
                  <h3 className="font-serif text-2xl font-medium leading-snug text-blue sm:text-3xl">
                    {phase.title}
                  </h3>
                </div>

                <p className="mb-4 border-l-2 border-gold pl-3 text-sm font-medium leading-7 text-blue/70">
                  {phase.lead}
                </p>

                <p className="mb-5 text-sm leading-7 text-ink/60">{phase.text}</p>

                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-ink/40">
                  {phase.itemsLabel}
                </p>
                <ul className="space-y-2">
                  {phase.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-ink/60"
                    >
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>

                {phase.note && (
                  <p className="mt-5 border-l-2 border-red/30 bg-red/5 py-2 pl-3 pr-4 text-sm italic leading-7 text-ink/55">
                    {phase.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Online courses (线上课程 · 两期) ────────────────────────────────── */}
      <Section title={programmes.online.title} tone="cream">
        <div className="space-y-3">
          {programmes.online.cohorts.map((cohort) => (
            <article
              className="rounded-lg border border-blue/10 bg-white p-6 sm:flex sm:items-baseline sm:gap-8 sm:p-7"
              key={cohort.tag}
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-gold sm:w-64 sm:shrink-0">
                {cohort.tag}
              </p>
              <div className="mt-2 sm:mt-0">
                <p className="text-sm leading-7 text-ink/70">{cohort.text}</p>
                {cohort.url && (
                  <a
                    className="mt-2 inline-block text-sm text-blue underline decoration-blue/30 underline-offset-4 transition hover:decoration-blue"
                    href={cohort.url}
                    rel="noopener"
                    target="_blank"
                  >
                    {cohort.linkLabel}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* ── Who It's For ─────────────────────────────────────────────────── */}
      <Section
        eyebrow={programmes.fit.eyebrow}
        title={programmes.fit.title}
        lead={programmes.fit.lead}
        tone="white"
      >
        <div className="max-w-3xl">
          <CheckList items={programmes.fit.items} />
          <p className="mt-6 border-l-2 border-gold/50 pl-4 text-sm leading-7 text-ink/55">
            {programmes.fit.context}
          </p>
        </div>
      </Section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <Section
        eyebrow={programmes.faq.eyebrow}
        title={programmes.faq.title}
        lead={programmes.faq.lead}
        tone="cream"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {programmes.faq.items.map((item) => (
            <div
              key={item.q}
              className="rounded-xl border border-blue/10 bg-white p-6 shadow-[0_10px_30px_rgba(26,26,26,0.04)]"
            >
              <h3 className="font-serif text-xl font-medium leading-snug text-blue">
                {item.q}
              </h3>
              <p className="mt-4 text-sm leading-7 text-ink/70">{item.a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <FinalCta
        eyebrow={programmes.cta.eyebrow}
        body={programmes.cta.body}
        primary={{ href: "/contact", label: programmes.cta.button }}
        secondary={{ href: "/work", label: dictionary.actions.work }}
        title={programmes.cta.title}
      />
    </>
  );
}
