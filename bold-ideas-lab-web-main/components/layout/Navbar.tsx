"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { LanguageToggle } from "@/components/layout/LanguageToggle";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { navItems } from "@/lib/i18n";

export function Navbar() {
  const pathname = usePathname();
  const { dictionary } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/95 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link className="group flex items-center gap-2.5" href="/">
          <span className="relative h-10 w-10 shrink-0">
            <Image
              alt={dictionary.meta.siteName}
              className="object-contain"
              fill
              priority
              sizes="40px"
              src="/brand/logo-full.png"
            />
          </span>
          <span className="hidden font-serif text-xl font-medium text-ink sm:inline">
            {dictionary.meta.siteName}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                className={`rounded-md px-3 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-white text-blue shadow-[0_8px_30px_rgba(26,26,26,0.06)]"
                    : "text-ink/70 hover:bg-white/70 hover:text-ink"
                }`}
                href={item.href}
                key={item.href}
              >
                {dictionary.nav[item.key]}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageToggle />
          <ButtonLink href="/contact" variant="secondary" withArrow>
            {dictionary.actions.contact}
          </ButtonLink>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle compact />
          <button
            aria-label={open ? dictionary.nav.close : dictionary.nav.menu}
            className="grid h-11 w-11 place-items-center rounded-md border border-ink/10 bg-white/80 text-ink"
            onClick={() => setOpen((current) => !current)}
            type="button"
          >
            {open ? <X aria-hidden size={20} /> : <Menu aria-hidden size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-ink/10 bg-cream px-5 py-5 lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <Link
                className="rounded-md bg-white/70 px-4 py-3 text-base font-medium text-ink"
                href={item.href}
                key={item.href}
                onClick={() => setOpen(false)}
              >
                {dictionary.nav[item.key]}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
