"use client";

import Link from "next/link";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { navItems } from "@/lib/i18n";

export function Footer() {
  const { dictionary } = useLanguage();

  return (
    <footer className="border-t border-ink/10 bg-cream px-5 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 rounded-lg border border-ink/10 bg-white p-6 shadow-soft md:grid-cols-[1fr_auto] md:items-center lg:p-8">
          <div>
            <p className="text-sm font-semibold uppercase text-gold">
              {dictionary.meta.siteName}
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium text-ink">
              {dictionary.footer.ctaTitle}
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-ink/70">
              {dictionary.footer.ctaText}
            </p>
          </div>
          <ButtonLink href="/contact" withArrow>
            {dictionary.actions.contact}
          </ButtonLink>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-start">
          <div>
            <Link className="font-serif text-2xl font-medium text-ink" href="/">
              {dictionary.meta.siteName}
            </Link>
            <p className="mt-3 max-w-md text-sm leading-6 text-ink/65">
              {dictionary.footer.tagline}
            </p>
          </div>
          <nav className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-3">
            {navItems.map((item) => (
              <Link
                className="text-ink/70 transition hover:text-blue"
                href={item.href}
                key={item.href}
              >
                {dictionary.nav[item.key]}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 border-t border-ink/10 pt-6 text-sm text-ink/55">
          {dictionary.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
