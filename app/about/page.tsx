import type { Metadata } from "next";
import Image from "next/image";

import { Footer } from "@/components/redesign/Footer";
import { Header } from "@/components/redesign/Header";
import { Reveal } from "@/components/redesign/motion";
import { Dot, Pill } from "@/components/redesign/shapes";
import en from "@/messages/en.json";

const t = en.redesign.about;
const founders = en.about.founders;

export const metadata: Metadata = {
  title: t.title,
  description: t.story[0],
  alternates: { canonical: "/about" }
};

const founderPeople = [
  { data: founders.lynn, photo: "/media/about/founders/lynn/profile.webp" },
  { data: founders.jacky, photo: "/media/about/founders/jacky/profile.webp" }
] as const;

export default function Page() {
  return (
    <>
      <Header />
      <main>
        {/* 品牌故事：起源 + 第三种声音合一，主角是青少年的大胆想法 */}
        <section className="bg-cream px-5 pb-24 pt-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="mx-auto max-w-4xl">
            <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-[1.1] text-blue">
              {t.title}
            </h1>
            <div className="mt-12 space-y-8">
              {t.story.slice(0, 3).map((paragraph) => (
                <p
                  className="max-w-[40ch] font-display text-[clamp(1.3rem,2.6vw,1.85rem)] font-medium leading-[1.6] text-ink/85"
                  key={paragraph.slice(0, 24)}
                >
                  {paragraph}
                </p>
              ))}
              <p className="font-display text-[clamp(1.3rem,2.6vw,1.85rem)] font-medium leading-[1.6] text-gold">
                {t.story[3]}
              </p>
            </div>
            <p className="mt-12 max-w-[44ch] border-l-2 border-gold/50 pl-5 leading-8 text-ink/65">
              {t.nameLine}
            </p>
          </div>
        </section>

        {/* 教育不可压扁：金色面板 */}
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

        {/* 两位创始人：about 的核心 */}
        <section className="bg-white px-5 py-24 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-6xl">
            <h2 className="font-display text-[clamp(1.875rem,3.5vw,2.75rem)] font-semibold leading-tight text-blue">
              {t.foundersTitle}
            </h2>
            <p className="mt-4 max-w-[48ch] text-lg leading-8 text-ink/70">
              {t.foundersLead} {t.foundersBridge}
            </p>
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {founderPeople.map(({ data, photo }) => (
                <article
                  className="rounded-[18px] border border-ink/10 bg-cream/50 p-8 sm:p-10"
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

        {/* 引文 + 写给学校与研究者 */}
        <section className="bg-cream px-5 pb-6 pt-24 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-6xl text-center">
            <p className="font-display text-xl font-medium italic text-ink/45">{t.quote}</p>
          </Reveal>
        </section>
        <section className="bg-cream px-5 pb-24 pt-12 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-4xl">
            <div className="relative overflow-hidden rounded-[18px] border border-ink/10 bg-white p-8 sm:p-12">
              <Pill className="absolute right-8 top-8 hidden h-5 w-12 sm:block" />
              <h2 className="font-display text-2xl font-semibold text-blue sm:text-3xl">
                {t.schools.title}
              </h2>
              <p className="mt-5 max-w-[60ch] leading-8 text-ink/75">{t.schools.body}</p>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
