import Link from "next/link";

import { Btn } from "@/components/redesign/Btn";
import { Footer } from "@/components/redesign/Footer";
import { Header } from "@/components/redesign/Header";
import { Hero } from "@/components/redesign/Hero";
import { CountUp, Reveal } from "@/components/redesign/motion";
import { Arch, Decagon, Dot, Pill, Quad } from "@/components/redesign/shapes";
import en from "@/messages/en.json";

const t = en.redesign;

// 含义驱动的微交互：思维在转、作品在升、表达在伸
const forceMarkers = [
  <Decagon className="h-10 w-10 transition-transform duration-500 group-hover:rotate-[18deg]" key="thinking" />,
  <Arch className="h-6 w-12 transition-transform duration-300 group-hover:-translate-y-1" key="making" />,
  <Pill className="h-5 w-12 origin-left transition-transform duration-300 group-hover:scale-x-110" key="explaining" />
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        {/* 立场陈述：金底白字，童趣体，蓝色收尾 */}
        <section className="bg-cream px-5 py-24 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-6xl">
            <div className="relative overflow-hidden rounded-[28px] bg-gold px-7 py-14 sm:px-14 sm:py-[4.5rem]">
              <span
                aria-hidden
                className="absolute right-12 top-14 hidden h-8 w-16 bg-white sm:block"
                style={{ borderRadius: "999px 999px 0 0" }}
              />
              <Pill className="absolute bottom-12 right-20 hidden h-6 w-16 sm:block" />
              <Dot className="absolute bottom-[4.2rem] right-10 hidden h-3 w-3 sm:block" />
              <p className="relative mb-7 t-eyebrow text-white/75">
                {t.stance.eyebrow}
              </p>
              <div className="relative max-w-[34ch] space-y-7 t-lead text-white">
                <p>{t.stance.p1}</p>
                <p>{t.stance.p2}</p>
                <p className="text-blue">{t.stance.end}</p>
              </div>
              <Link
                className="relative mt-9 inline-block text-sm text-white underline decoration-white/40 underline-offset-[6px] transition hover:decoration-white"
                href="/about"
              >
                {t.stance.link}
              </Link>
            </div>
          </Reveal>
        </section>

        {/* 三力：我们教什么 */}
        <section className="bg-white px-5 py-24 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-6xl">
            <h2 className="t-h2 text-blue">
              {t.forces.title}
            </h2>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {t.forces.items.map((item, index) => (
                <article
                  className="group rounded-[18px] border border-ink/10 bg-cream/60 p-8 transition duration-200 hover:-translate-y-1 hover:border-blue/30 hover:shadow-[0_10px_30px_rgba(26,26,26,0.07)]"
                  key={item.name}
                >
                  <div className="mb-6 flex h-11 items-end">{forceMarkers[index]}</div>
                  <h3 className="t-h3 text-blue">{item.name}</h3>
                  <p className="mt-2.5 leading-7 text-ink/70">{item.text}</p>
                </article>
              ))}
            </div>
            <p className="mt-8 text-sm text-ink/45">{t.forces.footnote}</p>
          </Reveal>
        </section>

        {/* 学生作品画廊：4 件精选 + 金色大数字一行 + 完整画廊入口 */}
        <section className="bg-cream px-5 py-24 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-6xl">
            <h2 className="t-h2 text-blue">
              {t.gallery.title}
            </h2>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {t.gallery.cards.map((card) => (
                <a
                  className="group block rounded-[18px] border border-ink/10 bg-white p-8 transition duration-200 hover:-translate-y-1 hover:border-blue/30 hover:shadow-[0_10px_30px_rgba(26,26,26,0.07)]"
                  href={card.url}
                  key={card.name}
                  rel="noopener"
                  target="_blank"
                >
                  <h3 className="t-h3 text-blue">{card.name}</h3>
                  <p className="mt-1.5 text-sm text-ink/55">{card.student}</p>
                  <p className="mt-5 font-serif italic leading-7 text-ink/70">
                    “{card.quote}”
                  </p>
                </a>
              ))}
            </div>

            <a
              className="group relative mt-4 block overflow-hidden rounded-[18px] border border-ink/10 bg-white p-8 transition duration-200 hover:-translate-y-1 hover:border-blue/30 hover:shadow-[0_10px_30px_rgba(26,26,26,0.07)] sm:p-10"
              href={t.gallery.featured.url}
              rel="noopener"
              target="_blank"
            >
              <Quad className="absolute -right-px -top-px h-12 w-12 opacity-90 transition-transform duration-200 group-hover:rotate-6" />
              <h3 className="t-h3 text-blue">{t.gallery.featured.name}</h3>
              <p className="mt-1.5 text-sm text-ink/55">{t.gallery.featured.student}</p>
              <p className="mt-3 max-w-2xl leading-7 text-ink/70">{t.gallery.featured.text}</p>
              <span className="mt-5 inline-block text-sm text-blue underline decoration-blue/30 underline-offset-[6px] transition group-hover:decoration-blue">
                {t.gallery.featured.cta}
              </span>
            </a>

            <div className="mt-14 flex flex-wrap items-baseline gap-x-12 gap-y-8">
              {t.gallery.numbers.map((item) => (
                <p className="flex items-baseline gap-3" key={item.label}>
                  <span className="t-num text-gold">
                    <CountUp
                      suffix={item.value.replace(/^\d+/, "")}
                      value={Number.parseInt(item.value, 10)}
                    />
                  </span>
                  <span className="text-sm leading-6 text-ink/65">{item.label}</span>
                </p>
              ))}
            </div>

            <Btn className="mt-12" href={t.gallery.ctaUrl}>
              {t.gallery.cta}
            </Btn>
          </Reveal>
        </section>

        {/* 结尾 */}
        <section className="bg-white px-5 py-24 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="t-lead text-ink text-balance">
              {t.endcta.text}
            </p>
            <Btn className="mt-8" href="/contact">
              {t.endcta.button}
            </Btn>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
