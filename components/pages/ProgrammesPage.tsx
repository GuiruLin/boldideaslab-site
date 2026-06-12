"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CheckList } from "@/components/ui/CheckList";
import { FinalCta } from "@/components/ui/FinalCta";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";

const validPromoCodes = new Set(["workshop", "returning", "london", "manchester"]);

// Static index-based colour maps (avoids Tailwind purging dynamic class strings)
const layerBarColors = [
  "bg-blue/25",
  "bg-red",
  "bg-blue",
  "bg-gold",
] as const;

const layerBadgeStyles = [
  "bg-gold/10 text-gold",
  "bg-red text-white",
  "bg-gold/10 text-gold",
  "bg-blue/5 text-blue",
] as const;

function parseCurrencyPrice(value: string) {
  const cleaned = value.replace(/[^0-9.]/g, "");
  const num = Number.parseFloat(cleaned);
  return Number.isFinite(num) ? num : null;
}

function formatCurrencySavings(referencePrice: string, amount: number) {
  const prefix = referencePrice.match(/^[^\d]+/)?.[0] ?? "";
  return `${prefix}${amount}`;
}

export function ProgrammesPage() {
  const { dictionary } = useLanguage();
  const searchParams = useSearchParams();
  const programmes = dictionary.programmes;
  const promoCode = searchParams.get("promo")?.toLowerCase() ?? "";
  const hasPromo = validPromoCodes.has(promoCode);

  // Ensure direct entry like `/programmes#pricing` reliably scrolls after mount.
  useEffect(() => {
    if (window.location.hash !== "#pricing") return;
    const el = document.getElementById("pricing");
    el?.scrollIntoView();
  }, []);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <PageHero
        eyebrow={programmes.hero.eyebrow}
        imageLabel={programmes.course.title}
        imageUrl="/media/programmes/hero/5-week-sprint-camp.webp"
        accent={programmes.hero.accent}
        title={programmes.hero.title}
        lead={programmes.hero.lead}
        primary={{ href: "/contact", label: dictionary.actions.apply }}
        secondary={{ href: "/work", label: dictionary.actions.work }}
      />

      {/* ── Pathway (system map) ─────────────────────────────────────────── */}
      <Section
        eyebrow={programmes.pathway.eyebrow}
        title={programmes.pathway.title}
        lead={programmes.pathway.lead}
        tone="cream"
      >
        <div className="space-y-px">
          {programmes.pathway.layers.map((layer, index) => (
            <div
              key={layer.title}
              className="flex items-stretch transition-transform duration-200 hover:translate-x-1.5"
            >
              <div className={`w-1 shrink-0 ${layerBarColors[index]}`} />
              <div
                className={`flex flex-1 items-center justify-between gap-4 border border-l-0 bg-white px-5 py-4 transition-colors duration-150 ${
                  layer.featured
                    ? "border-red/20 hover:border-red/35"
                    : "border-ink/8 hover:border-ink/20"
                }`}
              >
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-gold/70">
                    {layer.tier}
                  </p>
                  <p className="font-serif text-base font-medium text-ink">
                    {layer.title}
                  </p>
                  <p className="mt-0.5 text-sm text-ink/50">{layer.desc}</p>
                </div>
                <span
                  className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium tracking-wide ${layerBadgeStyles[index]}`}
                >
                  {layer.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Featured Course ───────────────────────────────────────────────── */}
      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                {programmes.course.eyebrow}
              </p>
              <span className="rounded-full bg-red px-3 py-0.5 text-xs font-semibold tracking-wide text-white">
                {programmes.course.badge}
              </span>
              <span className="rounded-full bg-blue/10 px-3 py-0.5 text-xs font-semibold tracking-wide text-blue">
                {programmes.course.languageBadge}
              </span>
            </div>
            <h2 className="font-serif text-3xl font-medium leading-snug text-blue sm:text-4xl lg:text-5xl">
              {programmes.course.title}
            </h2>
            {programmes.course.leadEn.length > 0 && (
              <p className="mt-3 font-serif text-lg italic text-blue/40">
                {programmes.course.leadEn}
              </p>
            )}
          </div>
          <div className="space-y-3 bg-cream px-6 py-5">
            {programmes.course.meta.map((row) => (
              <div key={row.label} className="flex items-start gap-3 text-sm">
                <span className="mt-[5px] h-1 w-1 shrink-0 rounded-full bg-gold" />
                <span className="min-w-[72px] shrink-0 text-ink/45">
                  {row.label}
                </span>
                <span className="text-ink/80">{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Coolest Projects value ───────────────────────────────────────── */}
      <Section tone="cream">
        <div className="grid gap-8 rounded-2xl border border-blue/12 bg-white p-7 shadow-[0_14px_40px_rgba(26,26,26,0.05)] sm:p-9 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              {programmes.coolest.eyebrow}
            </p>
            <h2 className="max-w-3xl font-serif text-3xl font-medium leading-tight text-blue text-balance sm:text-4xl">
              {programmes.coolest.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-ink/70">
              {programmes.coolest.body}
            </p>
            <a
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-blue underline decoration-blue/25 underline-offset-4 hover:decoration-blue"
              href={programmes.coolest.url}
              rel="noreferrer"
              target="_blank"
            >
              {programmes.coolest.linkLabel}
            </a>
          </div>
          <div className="rounded-xl border border-gold/25 bg-cream px-6 py-6">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-ink/45">
              {programmes.coolest.highlightsLabel}
            </p>
            <ul className="space-y-3">
              {programmes.coolest.highlights.map((item) => (
                <li className="flex items-start gap-3 text-sm leading-7 text-ink/75" key={item}>
                  <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-red" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ── Learning Arc ─────────────────────────────────────────────────── */}
      <Section
        eyebrow={programmes.arc.eyebrow}
        title={programmes.arc.title}
        lead={programmes.arc.lead}
        tone="cream"
      >
        <div className="space-y-px">
          {programmes.arc.phases.map((phase, index) => (
            <div
              key={phase.num}
              className="group grid grid-cols-[56px_1fr] sm:grid-cols-[72px_1fr]"
            >
              {/* Number column + connecting line */}
              <div className="flex flex-col items-center pt-8 pr-2">
                <span className="select-none font-serif text-3xl font-medium leading-none text-ink/10 sm:text-4xl">
                  {phase.num}
                </span>
                {index < programmes.arc.phases.length - 1 && (
                  <div className="mt-3 min-h-8 w-px flex-1 bg-ink/10" />
                )}
              </div>

              {/* Content box */}
              <div className="mb-px border border-ink/8 bg-white p-6 transition-colors duration-150 group-hover:border-blue/20 sm:p-8">
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

      {/* ── Pricing ──────────────────────────────────────────────────────── */}
      <div id="pricing" className="scroll-mt-24">
        <Section
          eyebrow={programmes.pricing.eyebrow}
          title={programmes.pricing.title}
          lead={programmes.pricing.lead}
          tone="white"
        >
        {hasPromo ? (
          <div className="mb-6 rounded-lg border border-blue/20 bg-cream px-5 py-4 shadow-[0_14px_40px_rgba(26,26,26,0.04)] sm:px-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
              <span className="inline-flex w-fit rounded-full bg-blue px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white">
                {programmes.pricing.promoBadge}
              </span>
              <div className="max-w-4xl">
                <p className="text-base font-semibold leading-7 text-blue sm:text-lg">
                  {programmes.pricing.promoMessage}
                </p>
                <p className="mt-1.5 text-sm font-medium leading-6 text-ink/65">
                  {programmes.pricing.cohortNote}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="mb-8 rounded-lg border border-blue/15 bg-cream px-5 py-4 text-sm font-medium leading-7 text-blue">
            {programmes.pricing.cohortNote}
          </div>
        )}

        {/* Vision Academy Endorsement */}
        {programmes.endorsement && (
          <div className="mb-8 flex flex-col items-center gap-5 rounded-lg border border-gold/20 bg-gold/5 p-5 sm:flex-row sm:p-6">
            <a
              href="https://www.visionacademy.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="relative block h-10 w-28 shrink-0 sm:h-12 sm:w-36"
              aria-label={programmes.endorsement.logoAlt}
            >
              <Image
                alt={programmes.endorsement.logoAlt}
                className="object-contain mix-blend-multiply opacity-90"
                fill
                sizes="160px"
                src="/media/partners/vision-academy.webp"
              />
            </a>
            <div className="flex-1 border-l-2 border-gold/40 pl-5">
              <p className="font-serif text-base italic leading-7 text-ink/80">
                {programmes.endorsement.quote}
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-gold">
                {programmes.endorsement.attribution}
              </p>
            </div>
          </div>
        )}

        <div className="grid items-stretch gap-5 lg:grid-cols-3">
          {programmes.pricing.plans.map((plan) => {
            const highlighted = plan.id === "showcase";
            const originalNumeric = parseCurrencyPrice(plan.originalPrice);
            const promoNumeric = parseCurrencyPrice(plan.promoPrice);
            const savingsAmount =
              hasPromo &&
              originalNumeric != null &&
              promoNumeric != null &&
              originalNumeric > promoNumeric
                ? Math.round(originalNumeric - promoNumeric)
                : null;

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col overflow-hidden rounded-lg border bg-white shadow-[0_18px_50px_rgba(26,26,26,0.05)] transition duration-200 hover:-translate-y-1 ${
                  highlighted
                    ? "border-blue p-5 pt-10 shadow-soft ring-1 ring-blue/10 lg:-mt-5 lg:min-h-[600px]"
                    : "border-ink/10 p-5"
                }`}
              >
                {highlighted && (
                  <div className="absolute inset-x-0 top-0 h-1.5 bg-blue" />
                )}
                {highlighted && (
                  <div className="absolute right-5 top-4 rounded-full bg-blue px-3 py-1 text-xs font-semibold tracking-wide text-white">
                    {programmes.pricing.mostPopular}
                  </div>
                )}

                {/* Header */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                    {plan.duration}
                  </p>
                  <h3 className="mt-2.5 font-serif text-2xl font-medium text-blue">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-ink/60">
                    {plan.subtitle}
                  </p>
                </div>

                {/* Price */}
                <div
                  className={`mt-5 rounded-lg border p-4 ${
                    highlighted
                      ? "border-blue/25 bg-blue/[0.03]"
                      : "border-ink/10 bg-cream/70"
                  }`}
                >
                  {hasPromo ? (
                    <>
                      <div className="flex items-end justify-between gap-4 border-b border-ink/10 pb-4">
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink/40">
                            {programmes.pricing.originalLabel}
                          </p>
                          <p
                            className={`mt-1 font-serif font-medium leading-none text-ink/45 line-through ${
                              highlighted ? "text-2xl" : "text-xl"
                            }`}
                          >
                            {plan.originalPrice}
                          </p>
                        </div>

                        {highlighted && savingsAmount != null && (
                          <span className="shrink-0 rounded-full bg-red px-3 py-1 text-xs font-semibold text-white">
                            {programmes.pricing.saveLabel}{" "}
                            {formatCurrencySavings(
                              plan.originalPrice,
                              savingsAmount
                            )}
                          </span>
                        )}
                      </div>

                      <div className="pt-4">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-blue">
                          {programmes.pricing.promoLabel}
                        </p>
                        <p
                          className={`mt-2 font-serif font-medium leading-none ${
                            highlighted
                              ? "text-6xl text-blue"
                              : "text-4xl text-ink"
                          }`}
                        >
                          {plan.promoPrice}
                        </p>
                      </div>
                    </>
                  ) : (
                    <p className="font-serif text-5xl font-medium text-ink">
                      {plan.originalPrice}
                    </p>
                  )}
                </div>

                {/* For whom */}
                <p className="mt-4 text-sm leading-6 text-ink/60">{plan.forWhom}</p>

                {/* Features */}
                <div className="mt-4 grow">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink/40">
                    {programmes.pricing.includedLabel}
                  </p>
                  <CheckList items={[...plan.features]} />
                </div>

                {/* Showcase indicator */}
                <div
                  className={`mt-5 rounded-lg border p-3.5 text-sm font-medium leading-6 ${
                    plan.showcase
                      ? "border-blue/20 bg-blue/5 text-blue"
                      : "border-ink/8 bg-cream text-ink/45"
                  }`}
                >
                  {plan.showcase
                    ? programmes.pricing.showcaseIncluded
                    : programmes.pricing.showcaseNotIncluded}
                </div>

                <ButtonLink className="mt-5" href="/contact" withArrow>
                  {highlighted
                    ? programmes.pricing.showcaseCta
                    : dictionary.actions.apply}
                </ButtonLink>
              </div>
            );
          })}
        </div>
        </Section>
      </div>

      {/* ── Outcomes ─────────────────────────────────────────────────────── */}
      <section className="bg-cream px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gold">
              {programmes.outcomes.eyebrow}
            </p>
            <h2 className="font-serif text-3xl font-medium leading-tight text-balance text-blue sm:text-4xl lg:text-5xl">
              {programmes.outcomes.title}
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {programmes.outcomes.items.map((outcome, index) => (
              <div
                key={outcome.title}
                className={`rounded-lg border p-6 ${
                  index === 3
                    ? "border-gold/30 bg-gold/10"
                    : "border-blue/10 bg-white"
                }`}
              >
                <p className="mb-4 font-serif text-3xl font-medium leading-none text-blue/15">
                  0{index + 1}
                </p>
                <h3 className="mb-3 font-serif text-lg font-medium leading-snug text-blue">
                  {outcome.title}
                </h3>
                <p className="text-sm leading-7 text-ink/65">{outcome.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ─────────────────────────────────────────────────────── */}
      <Section
        eyebrow={programmes.timeline.eyebrow}
        title={programmes.timeline.title}
        lead={programmes.timeline.lead}
        tone="cream"
      >
        <div className="rounded-2xl border border-blue/15 bg-white p-5 shadow-[0_18px_50px_rgba(26,26,26,0.05)] sm:p-7">
          {/* Mobile: vertical spine so nodes read as one path */}
          <ol className="relative ml-2 space-y-0 border-l-2 border-blue/20 pl-8 lg:hidden">
            {programmes.timeline.items.map((item) => (
              <li
                className="relative pb-8 last:pb-0"
                key={`${item.date}-${item.label}-m`}
              >
                <span
                  aria-hidden
                  className="absolute -left-[25px] top-1.5 z-[1] h-3.5 w-3.5 rounded-full border-[3px] border-white bg-red shadow-[0_0_0_1px_rgba(0,47,167,0.2)]"
                />
                <div className="rounded-xl border border-blue/12 bg-cream/45 p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-serif text-xl font-medium text-blue">{item.date}</p>
                    <span
                      className={`rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] ${
                        item.kind === "phase"
                          ? "bg-blue/10 text-blue"
                          : "bg-gold/20 text-[#7A5F1A]"
                      }`}
                    >
                      {item.kind === "phase"
                        ? programmes.timeline.phaseLabel
                        : programmes.timeline.pointLabel}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-ink/70">{item.label}</p>
                </div>
              </li>
            ))}
          </ol>

          {/* Desktop: single horizontal baseline through node centres */}
          <div className="relative hidden lg:block">
            <div
              aria-hidden
              className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-[22px] z-0 h-0.5 bg-gradient-to-r from-blue/15 via-blue/30 to-blue/15"
            />
            <ol className="relative grid grid-cols-4 gap-5 xl:gap-6">
              {programmes.timeline.items.map((item, index) => (
                <li
                  className="relative animate-fade-up"
                  key={`${item.date}-${item.label}-d`}
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="flex flex-col items-center">
                    <div
                      aria-hidden
                      className="relative z-[1] mb-6 flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-white bg-red shadow-[0_0_0_1px_rgba(0,47,167,0.2)] ring-4 ring-blue/[0.07]"
                    />
                    <article className="w-full rounded-xl border border-blue/12 bg-cream/45 p-5">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="font-serif text-xl font-medium leading-tight text-blue">
                          {item.date}
                        </p>
                        <span
                          className={`rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] ${
                            item.kind === "phase"
                              ? "bg-blue/10 text-blue"
                              : "bg-gold/20 text-[#7A5F1A]"
                          }`}
                        >
                          {item.kind === "phase"
                            ? programmes.timeline.phaseLabel
                            : programmes.timeline.pointLabel}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-7 text-ink/70">{item.label}</p>
                    </article>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      {/* ── Who It's For ─────────────────────────────────────────────────── */}
      <Section
        eyebrow={programmes.fit.eyebrow}
        title={programmes.fit.title}
        lead={programmes.fit.lead}
        tone="cream"
      >
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <CheckList items={programmes.fit.items} />
            <p className="mt-6 border-l-2 border-gold/50 pl-4 text-sm leading-7 text-ink/55">
              {programmes.fit.context}
            </p>
          </div>

          {/* Pathway quick-reference panel */}
          <div className="rounded-lg border border-ink/8 bg-white p-7">
            <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-gold">
              {programmes.pricing.eyebrow}
            </p>
            <div className="space-y-5">
              {programmes.pricing.plans.map((plan, index) => (
                <div
                  key={plan.id}
                  className={`flex items-start justify-between gap-4 ${
                    index < programmes.pricing.plans.length - 1
                      ? "border-b border-ink/8 pb-5"
                      : ""
                  }`}
                >
                  <div>
                    <p
                      className={`text-sm font-semibold ${
                        plan.id === "showcase" ? "text-blue" : "text-ink"
                      }`}
                    >
                      {plan.name}
                    </p>
                    <p className="mt-0.5 text-xs leading-5 text-ink/50">
                      {plan.forWhom}
                    </p>
                  </div>
                  <p className="shrink-0 font-serif text-xl font-medium text-ink">
                    {plan.originalPrice}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 border-t border-ink/8 pt-5">
              <ButtonLink className="w-full" href="/contact" withArrow>
                {dictionary.actions.apply}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <Section
        eyebrow={programmes.faq.eyebrow}
        title={programmes.faq.title}
        lead={programmes.faq.lead}
        tone="white"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {programmes.faq.items.map((item) => (
            <div
              key={item.q}
              className="rounded-xl border border-blue/10 bg-cream/60 p-6 shadow-[0_10px_30px_rgba(26,26,26,0.04)]"
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
        primary={{ href: "/contact", label: dictionary.actions.apply }}
        secondary={{ href: "/work", label: dictionary.actions.work }}
        title={programmes.cta.title}
      />
    </>
  );
}
