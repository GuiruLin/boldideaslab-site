import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Footer } from "@/components/redesign/Footer";
import { Header } from "@/components/redesign/Header";
import { Reveal } from "@/components/redesign/motion";
import { Arch, Decagon, Dot, Pill } from "@/components/redesign/shapes";
import en from "@/messages/en.json";

const t = en.redesign.about;
const forces = en.redesign.forces;
const founders = en.about.founders;

export const metadata: Metadata = {
  title: t.title,
  description: t.stance[0],
  alternates: { canonical: "/about" }
};

const forceMarkers = [
  <Decagon className="h-10 w-10 transition-transform duration-500 group-hover:rotate-[18deg]" key="thinking" />,
  <Arch className="h-6 w-12 transition-transform duration-300 group-hover:-translate-y-1" key="making" />,
  <Pill className="h-5 w-12 origin-left transition-transform duration-300 group-hover:scale-x-110" key="explaining" />
];

const founderPeople = [
  { data: founders.lynn, photo: "/media/about/founders/lynn/profile.webp" },
  { data: founders.jacky, photo: "/media/about/founders/jacky/profile.webp" }
] as const;

export default function Page() {
  return (
    <>
      <Header />
      <main>
        {/* 立场长文：第三种声音的完整展开 */}
        <section className="bg-cream px-5 pb-24 pt-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="mx-auto max-w-4xl">
            <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-[1.1] text-blue">
              {t.title}
            </h1>
            <div className="mt-12 space-y-8">
              {t.stance.slice(0, 3).map((paragraph) => (
                <p
                  className="max-w-[34ch] font-display text-[clamp(1.3rem,2.6vw,1.85rem)] font-medium leading-[1.6] text-ink/85"
                  key={paragraph.slice(0, 24)}
                >
                  {paragraph}
                </p>
              ))}
              <p className="font-display text-[clamp(1.3rem,2.6vw,1.85rem)] font-medium text-gold">
                {t.stance[3]}
              </p>
            </div>
          </div>
        </section>

        {/* 教育不可压扁：金色面板（每页一个重点面板） */}
        <section className="bg-cream px-5 pb-24 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-6xl">
            <div className="relative overflow-hidden rounded-[28px] bg-gold px-7 py-14 sm:px-14 sm:py-16">
              <span
                aria-hidden
                className="absolute right-12 top-12 hidden h-8 w-16 bg-white sm:block"
                style={{ borderRadius: "999px 999px 0 0" }}
              />
              <Dot className="absolute bottom-12 right-12 hidden h-3 w-3 sm:block" />
              <h2 className="relative max-w-[28ch] font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold leading-snug text-white">
                {t.flatten.title}
              </h2>
              <p className="relative mt-6 max-w-[58ch] leading-8 text-white/95">{t.flatten.body}</p>
            </div>
          </Reveal>
        </section>

        {/* 三力 */}
        <section className="bg-white px-5 py-24 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-6xl">
            <h2 className="max-w-3xl font-display text-[clamp(1.875rem,3.5vw,2.75rem)] font-semibold leading-tight text-blue">
              {t.forcesTitle}
            </h2>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {forces.items.map((item, index) => (
                <article
                  className="group rounded-[18px] border border-ink/10 bg-cream/60 p-8 transition duration-200 hover:-translate-y-1 hover:border-blue/30 hover:shadow-[0_10px_30px_rgba(26,26,26,0.07)]"
                  key={item.name}
                >
                  <div className="mb-6 flex h-11 items-end">{forceMarkers[index]}</div>
                  <h3 className="font-display text-xl font-semibold text-blue">{item.name}</h3>
                  <p className="mt-2.5 leading-7 text-ink/70">{item.text}</p>
                </article>
              ))}
            </div>
            <p className="mt-8 text-sm text-ink/45">{forces.footnote}</p>
          </Reveal>
        </section>

        {/* 创始人 */}
        <section className="bg-cream px-5 py-24 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-6xl">
            <h2 className="font-display text-[clamp(1.875rem,3.5vw,2.75rem)] font-semibold leading-tight text-blue">
              {t.foundersTitle}
            </h2>
            <p className="mt-4 text-lg text-ink/65">{t.foundersLead}</p>
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {founderPeople.map(({ data, photo }) => (
                <article
                  className="rounded-[18px] border border-ink/10 bg-white p-8 sm:p-10"
                  key={data.name}
                >
                  <div className="flex items-center gap-5">
                    <span
                      className="relative block h-20 w-20 shrink-0 overflow-hidden bg-cream"
                      style={{ borderRadius: "999px 999px 10px 10px" }}
                    >
                      <Image alt={data.name} className="object-cover" fill sizes="80px" src={photo} />
                    </span>
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-blue">{data.name}</h3>
                      <p className="mt-1 text-sm text-ink/55">{data.role}</p>
                    </div>
                  </div>
                  <div className="mt-7 space-y-4">
                    {data.story.map((paragraph) => (
                      <p className="leading-8 text-ink/75" key={paragraph.slice(0, 24)}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <ul className="mt-7 space-y-3 border-t border-ink/10 pt-7">
                    {data.points.map((point) => (
                      <li className="flex gap-3 text-sm leading-6 text-ink/65" key={point.slice(0, 24)}>
                        <span className="mt-2.5 block h-1.5 w-4 shrink-0 rounded-full bg-blue" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </Reveal>
        </section>

        {/* 引文（owner 决议：降为引文保留） */}
        <section className="bg-cream px-5 pb-6 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-6xl text-center">
            <p className="font-display text-xl font-medium italic text-ink/45">{t.quote}</p>
          </Reveal>
        </section>

        {/* 写给学校与研究者 */}
        <section className="bg-cream px-5 py-24 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-4xl">
            <div className="rounded-[18px] border border-ink/10 bg-white p-8 sm:p-12">
              <h2 className="font-display text-2xl font-semibold text-blue sm:text-3xl">
                {t.schools.title}
              </h2>
              <p className="mt-5 max-w-[60ch] leading-8 text-ink/75">{t.schools.body}</p>
              <Link
                className="mt-7 inline-block text-blue underline decoration-blue/30 underline-offset-[6px] transition hover:decoration-blue"
                href="/contact"
              >
                {t.schools.cta}
              </Link>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
