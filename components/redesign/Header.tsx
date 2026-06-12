"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import en from "@/messages/en.json";

const nav = en.redesign.nav;

// Menu 瀑布：问句药丸逐个下落，穿插品牌形状（Streamtime 菜单转译）
const items = [
  { href: "/about", label: nav.about, style: "bg-white text-ink border border-ink/10" },
  { href: "/programmes", label: nav.programmes, style: "bg-gold text-white" },
  { href: "/work", label: nav.work, style: "bg-white text-ink border border-ink/10" },
  { href: "/eduos", label: nav.eduos, style: "bg-white text-ink border border-ink/10" },
  { href: "/insights", label: nav.insights, style: "bg-white text-ink border border-ink/10" },
  { href: "/contact", label: nav.contact, style: "bg-blue text-cream" }
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2.5">
          <Link
            aria-label="Bold Ideas Lab"
            className="grid h-12 w-12 place-items-center rounded-full border border-ink/10 bg-white transition duration-200 hover:-translate-y-0.5"
            href="/"
          >
            <span className="relative h-7 w-7">
              <Image alt="" className="object-contain" fill priority sizes="28px" src="/brand/logo-full.png" />
            </span>
          </Link>
          <button
            aria-expanded={open}
            className="inline-flex min-h-12 items-center rounded-full bg-blue px-6 text-sm font-medium text-cream transition duration-200 hover:-translate-y-0.5"
            onClick={() => setOpen((current) => !current)}
            type="button"
          >
            {open ? nav.close : nav.menu}
          </button>
        </div>

        <Link
          className="inline-flex min-h-12 items-center rounded-full border border-ink/10 bg-white px-6 text-sm font-medium text-ink transition duration-200 hover:-translate-y-0.5 hover:border-blue/40 hover:text-blue"
          href="/contact"
        >
          {nav.contact}
        </Link>
      </div>

      {open && (
        <button
          aria-label={nav.close}
          className="fixed inset-0 z-40 cursor-default bg-transparent"
          onClick={() => setOpen(false)}
          tabIndex={-1}
          type="button"
        />
      )}

      <nav
        aria-hidden={!open}
        className="absolute left-4 top-[4.75rem] z-50 flex flex-col items-start gap-2 sm:left-6 lg:left-8"
      >
        {items.map((item, index) => (
          <Link
            className={`${item.style} inline-flex items-center rounded-full px-6 py-3 font-display text-base font-medium transition-all duration-300 ease-out hover:translate-x-1 motion-reduce:transition-none sm:text-lg ${
              open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-3 opacity-0"
            }`}
            href={item.href}
            key={item.href}
            onClick={() => setOpen(false)}
            style={{ transitionDelay: open ? `${index * 55}ms` : "0ms" }}
            tabIndex={open ? 0 : -1}
          >
            {item.label}
          </Link>
        ))}
        <span
          aria-hidden
          className={`ml-8 mt-1 flex items-end gap-3 transition-all duration-300 ${
            open ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
          }`}
          style={{ transitionDelay: open ? `${items.length * 55 + 60}ms` : "0ms" }}
        >
          <span className="block h-4 w-8 bg-gold" style={{ borderRadius: "999px 999px 0 0" }} />
          <span className="block h-2.5 w-2.5 rounded-full bg-red" />
        </span>
      </nav>
    </header>
  );
}
