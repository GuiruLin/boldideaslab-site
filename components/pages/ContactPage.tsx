"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { FinalCta } from "@/components/ui/FinalCta";
import { Section } from "@/components/ui/Section";

export function ContactPage() {
  const { dictionary } = useLanguage();
  const contact = dictionary.contact;
  const formUrl = contact.enquiry.formUrl.trim();
  const accent = contact.hero.accent;
  const accentIndex = accent ? contact.hero.title.indexOf(accent) : -1;
  const titleNode =
    accent && accentIndex !== -1 ? (
      <>
        {contact.hero.title.slice(0, accentIndex)}
        <span className="text-red">{accent}</span>
        {contact.hero.title.slice(accentIndex + accent.length)}
      </>
    ) : (
      contact.hero.title
    );

  return (
    <>
      <section className="relative overflow-hidden bg-cream px-5 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-20">
        <div className="absolute inset-x-0 top-0 h-px bg-ink/10" />
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="animate-fade-up">
            <p className="mb-5 text-sm font-semibold uppercase tracking-wide text-gold">
              {contact.hero.eyebrow}
            </p>
            <h1 className="font-serif text-5xl font-medium leading-[1.04] text-blue text-balance sm:text-6xl lg:text-7xl">
              {titleNode}
            </h1>
            <p className="mt-5 font-serif text-xl italic text-blue/45 sm:text-2xl">
              {contact.hero.subtitle}
            </p>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/70 sm:text-xl">
              {contact.hero.lead}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#enquiry" withArrow>
                {contact.hero.primary}
              </ButtonLink>
              <ButtonLink href="/programmes" variant="secondary" withArrow>
                {contact.hero.secondary}
              </ButtonLink>
            </div>
          </div>

          <div className="relative hidden min-h-[320px] animate-fade-up lg:block">
            <div className="absolute left-4 top-6 h-44 w-44 rounded-full border border-blue/20" />
            <div className="absolute right-8 top-0 h-24 w-24 rounded-full bg-red/10" />
            <div className="absolute bottom-6 right-0 h-48 w-48 rounded-full border border-gold/35" />
            <div className="absolute bottom-2 left-10 h-20 w-32 rounded-lg bg-gold/15" />
          </div>
        </div>
      </section>

      <div className="scroll-mt-24" id="enquiry">
      <Section tone="white" innerClassName="max-w-3xl mx-auto">
        <div className="flex flex-col gap-10">
          <div className="animate-fade-up text-center">
            <p className="mb-4 text-sm font-semibold uppercase text-gold">
              {contact.enquiry.eyebrow}
            </p>
            <h2 className="font-serif text-3xl font-medium leading-tight text-blue text-balance sm:text-4xl lg:text-5xl">
              {contact.enquiry.title}
            </h2>
          </div>

          <div className="rounded-2xl border border-blue/12 bg-cream px-7 py-8 text-center shadow-[0_18px_50px_rgba(26,26,26,0.05)] sm:px-10">
            <p className="mx-auto max-w-xl text-lg leading-8 text-ink/70">{contact.enquiry.lead}</p>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              {contact.enquiry.formLabel}
            </p>
            <p className="mt-2 text-sm text-ink/55">{contact.enquiry.formStatus}</p>
            {formUrl ? (
              <a
                className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-blue px-6 py-3 text-sm font-medium text-cream shadow-soft transition duration-200 hover:-translate-y-0.5 hover:bg-[#002680] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
                href={formUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                {contact.enquiry.button}
              </a>
            ) : (
              <p className="mt-6 text-sm text-ink/45">
                {contact.enquiry.formStatus}
              </p>
            )}

            <p className="mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              {contact.enquiry.audiencesIntro}
            </p>
            <ul className="mt-4 flex flex-wrap justify-center gap-3">
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

          <div className="rounded-xl border border-ink/10 bg-white p-6 shadow-soft text-center sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              {contact.enquiry.emailLead}
            </p>
            <a
              className="mt-4 inline-block text-lg font-medium text-blue underline decoration-blue/25 underline-offset-[5px] hover:decoration-blue"
              href="mailto:hello@boldideaslab.com"
            >
              hello@boldideaslab.com
            </a>
          </div>
        </div>
      </Section>
      </div>

      <FinalCta
        body={contact.cta.body}
        eyebrow={contact.cta.eyebrow}
        primary={{ href: "/programmes", label: contact.cta.primary }}
        secondary={{ href: formUrl || "#enquiry", label: contact.cta.secondary }}
        title={contact.cta.title}
      />
    </>
  );
}
