"use client";

import Link from "next/link";
import { useState } from "react";

import { LogoMark } from "@/components/redesign/LogoMark";
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

// 移动端抽屉多一个 Home：手机上「点 Logo 回首页」的习惯更弱
const mobileItems = [{ href: "/", label: nav.home }, ...items] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link className="flex items-center gap-2.5" href="/">
          <LogoMark className="h-9 w-auto shrink-0" />
          <span className="hidden font-display text-lg font-medium text-ink sm:inline">
            Bold Ideas Lab
          </span>
        </Link>

        {/* 桌面：问句积木导航——形状块紧贴成排，像搭好的积木天际线 */}
        <nav className="hidden items-end lg:flex">
          {(
            [
              { style: "bg-gold/20 text-ink hover:bg-gold/30", radius: "999px 999px 0 0", pt: "pt-3.5" },
              { style: "bg-blue/10 text-blue hover:bg-blue/15", radius: "10px 10px 0 0", pt: "pt-2.5" },
              { style: "border border-b-0 border-ink/15 bg-white text-ink hover:text-blue", radius: "999px 999px 0 0", pt: "pt-3.5" },
              { style: "bg-gold text-ink hover:bg-gold/90", radius: "10px 10px 0 0", pt: "pt-2.5" },
              { style: "bg-blue/10 text-blue hover:bg-blue/15", radius: "0 999px 0 0", pt: "pt-3" },
              { style: "bg-blue text-cream", radius: "999px 999px 0 0", pt: "pt-3.5" }
            ] as const
          ).map((variant, index) => {
            const item = items[index];
            return (
              <Link
                className={`${variant.style} ${variant.pt} inline-flex items-end px-4 pb-2.5 text-sm font-medium transition-all duration-200 hover:-translate-y-1 motion-reduce:transition-none`}
                href={item.href}
                key={item.href}
                style={{ borderRadius: variant.radius }}
              >
                {item.label}
              </Link>
            );
          })}
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
        {mobileItems.map((item, index) => {
          // 积木语言：与 footer 想法展架同一套形状（拱窗/块/翻角/单边拱）
          const radii = [
            "999px 999px 10px 10px",
            "10px",
            "10px 10px 28px 10px",
            "0 999px 10px 10px",
            "10px",
            "999px 999px 10px 10px",
            "999px 999px 10px 10px"
          ];
          return (
            <Link
              className={`inline-flex items-center px-6 py-3 font-display text-base font-medium transition-all duration-300 ease-out motion-reduce:transition-none ${
                "accent" in item
                  ? "bg-blue text-cream"
                  : index === 1
                    ? "bg-gold text-white"
                    : "border border-ink/15 bg-white text-ink"
              } ${open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-3 opacity-0"}`}
              href={item.href}
              key={item.href}
              onClick={() => setOpen(false)}
              style={{ borderRadius: radii[index], transitionDelay: open ? `${index * 50}ms` : "0ms" }}
              tabIndex={open ? 0 : -1}
            >
              {item.label}
            </Link>
          );
        })}
        <span
          aria-hidden
          className={`mr-6 mt-1 flex items-end gap-2.5 transition-all duration-300 ${
            open ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
          }`}
          style={{ transitionDelay: open ? `${mobileItems.length * 50 + 50}ms` : "0ms" }}
        >
          <span className="block h-3.5 w-7 bg-gold" style={{ borderRadius: "999px 999px 0 0" }} />
          <span className="block h-2 w-2 rounded-full bg-red" />
        </span>
      </nav>
    </header>
  );
}
