import Link from "next/link";

import { Squiggle } from "@/components/redesign/footerFun";
import en from "@/messages/en.json";

const nav = en.redesign.nav;
const footer = en.redesign.footer;

// 每个导航项配一枚品牌形状标记（红点全 footer 只有一枚）
const items = [
  { href: "/about", label: nav.about, marker: "arch" },
  { href: "/programmes", label: nav.programmes, marker: "pill" },
  { href: "/work", label: nav.work, marker: "block" },
  { href: "/eduos", label: nav.eduos, marker: "quad" },
  { href: "/insights", label: nav.insights, marker: "arch2" },
  { href: "/contact", label: nav.contact, marker: "dot" }
] as const;

function Marker({ kind }: { kind: (typeof items)[number]["marker"] }) {
  const base = "block shrink-0 transition-transform duration-200 group-hover:rotate-6";
  switch (kind) {
    case "arch":
      return <span aria-hidden className={`${base} h-2 w-4 bg-gold`} style={{ borderRadius: "999px 999px 0 0" }} />;
    case "pill":
      return <span aria-hidden className={`${base} h-2 w-4 rounded-full bg-blue`} />;
    case "block":
      return <span aria-hidden className={`${base} h-2.5 w-2.5 rounded-[3px] bg-gold`} />;
    case "quad":
      return <span aria-hidden className={`${base} h-2.5 w-2.5 bg-blue`} style={{ borderRadius: "0 100% 0 3px" }} />;
    case "arch2":
      return <span aria-hidden className={`${base} h-2 w-4 bg-blue`} style={{ borderRadius: "999px 999px 0 0" }} />;
    case "dot":
      return <span aria-hidden className={`${base} h-2 w-2 rounded-full bg-red`} />;
  }
}

export function Footer() {
  return (
    <footer className="bg-cream px-5 pb-14 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Squiggle />

        <div className="mt-12 grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-start">
          <div>
            <p className="font-display text-2xl font-medium text-ink">Bold Ideas Lab</p>
            <p className="mt-3 max-w-md text-sm leading-6 text-ink/65">{footer.tagline}</p>
          </div>
          <nav className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
            {items.map((item) => (
              <Link
                className="group flex items-center gap-2.5 text-ink/70 transition hover:text-blue"
                href={item.href}
                key={item.href}
              >
                <Marker kind={item.marker} />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-ink/10 pt-6 text-sm text-ink/55 sm:flex-row sm:items-end sm:justify-between">
          <span>{footer.copyright}</span>
          <span
            className="max-w-xl font-playful text-[0.95rem] leading-6 text-ink/60"
            style={{ transform: "rotate(-0.6deg)" }}
          >
            {footer.colophon}
          </span>
        </div>
      </div>
    </footer>
  );
}
