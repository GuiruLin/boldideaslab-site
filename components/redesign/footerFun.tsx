"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import en from "@/messages/en.json";

const footer = en.redesign.footer;

// 想法积木：每个学生作品名装进一个品牌形状，高矮不一立在展架线上（不是药丸）
const blockStyles = [
  { cls: "bg-blue text-cream", radius: "999px 999px 10px 10px", h: "h-28", tilt: 0 },
  { cls: "border border-ink/15 bg-white text-ink", radius: "10px", h: "h-20", tilt: 0 },
  { cls: "bg-gold text-white", radius: "10px 10px 28px 10px", h: "h-24", tilt: -2 },
  { cls: "border border-ink/15 bg-white text-ink", radius: "0 999px 10px 10px", h: "h-24", tilt: 0 },
  { cls: "border-2 border-blue bg-white text-blue", radius: "999px 999px 10px 10px", h: "h-28", tilt: 0 }
] as const;

export function IdeasStrip() {
  return (
    <div>
      <h2 className="font-display text-xl font-semibold text-blue sm:text-2xl">
        {footer.ideasTitle}
      </h2>
      <div className="no-scrollbar -mx-1 mt-8 flex cursor-grab items-end gap-4 overflow-x-auto border-b-2 border-ink/15 px-1 active:cursor-grabbing">
        {footer.ideas.map((idea, index) => {
          const variant = blockStyles[index % blockStyles.length];
          const classes = `${variant.cls} ${variant.h} inline-flex shrink-0 items-end px-6 pb-4 font-display text-base font-medium transition-transform duration-200 hover:-translate-y-2 hover:rotate-1 motion-reduce:transition-none`;
          const style = {
            borderRadius: variant.radius,
            transform: variant.tilt ? `rotate(${variant.tilt}deg)` : undefined,
            transformOrigin: "bottom left"
          };
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
          className="inline-flex shrink-0 items-end pb-4 pl-2 pr-1 text-sm text-blue underline decoration-blue/30 underline-offset-[6px] transition hover:decoration-blue"
          href={footer.more.href}
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
