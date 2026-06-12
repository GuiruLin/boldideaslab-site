"use client";

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
  { href: "/insights", label: nav.insights },
  { href: "/contact", label: nav.contact, accent: true }
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link className="flex items-center gap-2.5" href="/">
          <span className="relative h-9 w-9 shrink-0">
            <Image alt="Bold Ideas Lab" className="object-contain" fill priority sizes="36px" src="/brand/logo-full.png" />
          </span>
          <span className="hidden font-display text-lg font-medium text-ink sm:inline">
            Bold Ideas Lab
          </span>
        </Link>

        {/* 桌面：可见问句导航；hover 时小金拱从字底升起（教育站逻辑：全貌可见，不藏盲盒） */}
        <nav className="hidden items-center gap-1 lg:flex">
          {items.map((item) => (
            <Link
              className={`group relative px-3.5 py-2 text-sm transition-colors duration-150 ${
                "accent" in item ? "font-medium text-blue" : "text-ink/75 hover:text-blue"
              }`}
              href={item.href}
              key={item.href}
            >
              {item.label}
              <span
                aria-hidden
                className="absolute -bottom-px left-1/2 h-[9px] w-[18px] -translate-x-1/2 origin-bottom scale-y-0 bg-gold transition-transform duration-200 ease-out group-hover:scale-y-100 motion-reduce:transition-none"
                style={{ borderRadius: "18px 18px 0 0" }}
              />
            </Link>
          ))}
        </nav>

        {/* 移动：Menu 药丸 + 问句瀑布 */}
        <button
          aria-expanded={open}
          className="inline-flex min-h-11 items-center rounded-full bg-blue px-5 text-sm font-medium text-cream transition duration-200 hover:-translate-y-0.5 lg:hidden"
          onClick={() => setOpen((current) => !current)}
          type="button"
        >
          {open ? nav.close : nav.menu}
        </button>
      </div>

      {open && (
        <button
          aria-label={nav.close}
          className="fixed inset-0 z-40 cursor-default bg-transparent lg:hidden"
          onClick={() => setOpen(false)}
          tabIndex={-1}
          type="button"
        />
      )}

      <nav
        aria-hidden={!open}
        className="absolute right-4 top-[4.25rem] z-50 flex flex-col items-end gap-2 lg:hidden"
      >
        {items.map((item, index) => (
          <Link
            className={`inline-flex items-center rounded-full px-5 py-2.5 font-display text-base font-medium transition-all duration-300 ease-out motion-reduce:transition-none ${
              "accent" in item
                ? "bg-blue text-cream"
                : "border border-ink/10 bg-white text-ink"
            } ${open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-3 opacity-0"}`}
            href={item.href}
            key={item.href}
            onClick={() => setOpen(false)}
            style={{ transitionDelay: open ? `${index * 50}ms` : "0ms" }}
            tabIndex={open ? 0 : -1}
          >
            {item.label}
          </Link>
        ))}
        <span
          aria-hidden
          className={`mr-6 mt-1 flex items-end gap-2.5 transition-all duration-300 ${
            open ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
          }`}
          style={{ transitionDelay: open ? `${items.length * 50 + 50}ms` : "0ms" }}
        >
          <span className="block h-3.5 w-7 bg-gold" style={{ borderRadius: "999px 999px 0 0" }} />
          <span className="block h-2 w-2 rounded-full bg-red" />
        </span>
      </nav>
    </header>
  );
}
