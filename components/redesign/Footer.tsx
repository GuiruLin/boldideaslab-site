import Link from "next/link";

import en from "@/messages/en.json";

const nav = en.redesign.nav;
const footer = en.redesign.footer;

const items = [
  { href: "/about", label: nav.about },
  { href: "/programmes", label: nav.programmes },
  { href: "/work", label: nav.work },
  { href: "/eduos", label: nav.eduos },
  { href: "/insights", label: nav.insights },
  { href: "/contact", label: nav.contact }
] as const;

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-cream px-5 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-start">
          <div>
            <p className="font-display text-2xl font-medium text-ink">Bold Ideas Lab</p>
            <p className="mt-3 max-w-md text-sm leading-6 text-ink/65">{footer.tagline}</p>
          </div>
          <nav className="grid grid-cols-2 gap-3 text-sm">
            {items.map((item) => (
              <Link
                className="text-ink/70 transition hover:text-blue"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-ink/10 pt-6 text-sm text-ink/55 sm:flex-row sm:items-center sm:justify-between">
          <span>{footer.copyright}</span>
          <span className="max-w-xl">{footer.colophon}</span>
        </div>
      </div>
    </footer>
  );
}
