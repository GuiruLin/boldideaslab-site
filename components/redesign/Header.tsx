"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import en from "@/messages/en.json";

const nav = en.redesign.nav;

const items = [
  { href: "/about", label: nav.about },
  { href: "/programmes", label: nav.programmes },
  { href: "/work", label: nav.work },
  { href: "/eduos", label: nav.eduos },
  { href: "/insights", label: nav.insights }
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 py-3 sm:px-6 lg:px-8">
        <Link className="flex items-center gap-2.5" href="/">
          <span className="relative h-9 w-9 shrink-0">
            <Image
              alt="Bold Ideas Lab"
              className="object-contain"
              fill
              priority
              sizes="36px"
              src="/brand/logo-full.png"
            />
          </span>
          <span className="hidden font-display text-lg font-medium text-ink sm:inline">
            Bold Ideas Lab
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {items.map((item) => (
            <Link
              className="rounded-full px-3.5 py-2 text-sm text-ink/75 transition hover:bg-white hover:text-blue"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
          <Link
            className="ml-3 inline-flex min-h-10 items-center rounded-full bg-blue px-5 py-2 text-sm font-medium text-cream transition duration-200 hover:-translate-y-0.5"
            href="/contact"
          >
            {nav.contact}
          </Link>
        </nav>

        <button
          aria-label={open ? nav.close : nav.menu}
          className="grid h-11 w-11 place-items-center rounded-full border border-ink/10 bg-white/80 text-ink lg:hidden"
          onClick={() => setOpen((current) => !current)}
          type="button"
        >
          {open ? <X aria-hidden size={20} /> : <Menu aria-hidden size={20} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-ink/10 bg-cream px-5 py-4 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-1.5">
            {[...items, { href: "/contact", label: nav.contact }].map((item) => (
              <Link
                className="rounded-[10px] bg-white/70 px-4 py-3 text-base text-ink"
                href={item.href}
                key={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
