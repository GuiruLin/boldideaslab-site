"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import en from "@/messages/en.json";

const footer = en.redesign.footer;

// 想法带：真实学生作品名做成贴纸药丸，可横向拖动，hover 摆正浮起
const pillStyles = [
  "border border-ink/10 bg-white text-ink",
  "bg-blue text-cream",
  "border border-ink/10 bg-white text-ink",
  "bg-gold text-white",
  "border border-ink/10 bg-white text-ink"
] as const;

const tilts = [-2.5, 1.8, -1.6, 2.4, -2.0] as const;

export function IdeasStrip() {
  return (
    <div>
      <h2 className="font-display text-xl font-semibold text-blue sm:text-2xl">
        {footer.ideasTitle}
      </h2>
      <div className="no-scrollbar -mx-1 mt-6 flex cursor-grab gap-3 overflow-x-auto px-1 pb-4 active:cursor-grabbing">
        {footer.ideas.map((idea, index) => {
          const classes = `${pillStyles[index % pillStyles.length]} inline-flex shrink-0 items-center rounded-full px-6 py-3 font-display text-base font-medium transition-transform duration-200 hover:-translate-y-1 hover:rotate-0 motion-reduce:transition-none`;
          const style = { transform: `rotate(${tilts[index % tilts.length]}deg)` };
          return idea.href.startsWith("http") ? (
            <a className={classes} href={idea.href} key={idea.label} rel="noopener" style={style} target="_blank">
              {idea.label}
            </a>
          ) : (
            <Link className={classes} href={idea.href} key={idea.label} style={style}>
              {idea.label}
            </Link>
          );
        })}
        <Link
          className="inline-flex shrink-0 items-center rounded-full border border-blue/30 px-6 py-3 font-display text-base font-medium text-blue transition-transform duration-200 hover:-translate-y-1 motion-reduce:transition-none"
          href={footer.more.href}
          style={{ transform: "rotate(1.6deg)" }}
        >
          {footer.more.label}
        </Link>
      </div>
    </div>
  );
}

/** 手写波浪分割线：进入视口时像笔画一样画出来 */
export function Squiggle() {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("squiggle-show");
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <svg
      aria-hidden
      className="squiggle h-5 w-full"
      fill="none"
      preserveAspectRatio="none"
      ref={ref}
      viewBox="0 0 1200 24"
    >
      <path
        d="M2 14 C 38 4, 72 22, 110 13 S 180 3 222 14 S 300 24 348 12 S 430 2 478 15 S 560 23 612 11 S 700 4 752 14 S 840 22 894 12 S 980 3 1034 15 S 1140 21 1198 10"
        stroke="#C9A84C"
        strokeLinecap="round"
        strokeWidth="3.5"
      />
    </svg>
  );
}
