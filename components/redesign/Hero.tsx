"use client";

import { useEffect, useRef } from "react";

import en from "@/messages/en.json";

const hero = en.redesign.hero;

// 词级三色：BOLD 红 / IDEAS 蓝 / LAB 金（owner 决议 2026-06-11）
const WORDS: ReadonlyArray<{ text: string; color: string }> = [
  { text: "BOLD", color: "text-red" },
  { text: "IDEAS", color: "text-blue" },
  { text: "LAB", color: "text-gold" }
];

// 落位后的微姿态（确定值，保证 SSR/CSR 一致）
const ROT = [-2.6, 2.1, -1.4, 2.9, -2.0, 1.6, -2.8, 2.3, -1.2, 2.6, -2.2, 1.9];
const TY = [0.03, -0.01, 0.04, 0, 0.02, -0.02, 0.03, 0.01, -0.01, 0.04, 0, 0.02];

// 几何垫层：整排垫在字母正下方（owner 决议 2026-06-11）
const BAND = [
  { key: "arch", left: "9%", className: "h-[3.5vw] w-[7vw] bg-gold", radius: "999px 999px 0 0" },
  { key: "quad", left: "26%", className: "h-[4.6vw] w-[4.6vw] bg-blue", radius: "0 100% 0 10px" },
  { key: "block", left: "43%", className: "h-[3.8vw] w-[3.8vw] bg-gold", radius: "0.6vw" },
  { key: "pill", left: "77%", className: "h-[2.7vw] w-[7vw] bg-blue", radius: "999px" },
  { key: "dot", left: "93%", className: "h-[1.3vw] w-[1.3vw] bg-red", radius: "999px", bottom: "0.5vw" }
] as const;

export function Hero() {
  const wordRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = wordRef.current;
    if (!host) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const els = host.querySelectorAll<HTMLElement>("[data-final]");
    els.forEach((el) => {
      const dx = (Math.random() * 140 - 70).toFixed(0);
      const dy = (Math.random() * 80 - 50).toFixed(0);
      const rot = (Math.random() * 28 - 14).toFixed(1);
      el.style.transition = "none";
      el.style.transform = `translate(${dx}px, ${dy}px) rotate(${rot}deg)`;
      el.style.opacity = "0";
    });

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        els.forEach((el) => {
          const delay = el.dataset.delay ?? "0ms";
          el.style.transition = `transform 0.8s cubic-bezier(0.2,0,0,1) ${delay}, opacity 0.8s ease ${delay}`;
          el.style.transform = el.dataset.final ?? "none";
          el.style.opacity = "1";
        });
      });
    });
  }, []);

  const wordOffsets = WORDS.map((_, idx) =>
    WORDS.slice(0, idx).reduce((sum, w) => sum + w.text.length, 0)
  );

  return (
    <section className="flex min-h-[calc(100vh-5rem)] flex-col justify-between overflow-hidden bg-cream">
      <div className="mx-auto max-w-4xl px-6 pt-[20vh] text-center">
        <h1 className="font-display text-[clamp(1.9rem,3.8vw,3rem)] font-semibold leading-snug text-blue text-balance">
          {hero.slogan}
        </h1>
      </div>

      <div
        aria-label="Bold Ideas Lab"
        className="relative select-none whitespace-nowrap pb-[2.6vw] text-center font-display font-semibold leading-[0.92]"
        ref={wordRef}
        role="heading"
        aria-level={2}
        style={{ fontSize: "clamp(2rem, 9.8vw, 11.5rem)" }}
      >
        <span aria-hidden className="pointer-events-none absolute inset-0 z-0">
          {BAND.map((shape, bandIndex) => (
            <span
              className={`absolute ${shape.className}`}
              data-delay={`${480 + bandIndex * 70}ms`}
              data-final="none"
              key={shape.key}
              style={{
                left: shape.left,
                bottom: "bottom" in shape ? shape.bottom : 0,
                borderRadius: shape.radius
              }}
            />
          ))}
        </span>

        <span aria-hidden className="relative z-10">
          {WORDS.map((word, wordIdx) => (
            <span key={word.text}>
              {wordIdx > 0 && <span className="inline-block w-[0.22em]" />}
              {word.text.split("").map((char, charIdx) => {
                const i = wordOffsets[wordIdx] + charIdx;
                const final = `rotate(${ROT[i]}deg) translateY(${TY[i]}em)`;
                return (
                  <span
                    className={`inline-block ${word.color}`}
                    data-delay={`${i * 40}ms`}
                    data-final={final}
                    key={`${word.text}-${charIdx}`}
                    style={{ transform: final }}
                  >
                    {char}
                  </span>
                );
              })}
            </span>
          ))}
        </span>
      </div>
    </section>
  );
}
