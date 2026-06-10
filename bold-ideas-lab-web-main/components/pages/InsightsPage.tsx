"use client";

import Image from "next/image";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { ButtonLink } from "@/components/ui/ButtonLink";

const typeDotStyles = ["bg-blue", "bg-gold", "bg-red"] as const;

const articleInitialStyles = [
  "bg-gold text-blue",
  "bg-gold text-blue",
  "bg-blue text-cream"
] as const;

const conversationVisualStyles = [
  "bg-blue text-cream",
  "bg-gold text-blue"
] as const;

export function InsightsPage() {
  const { dictionary } = useLanguage();
  const insights = dictionary.insights;

  return (
    <>
      <section className="relative overflow-hidden bg-cream px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="absolute -right-24 top-12 h-72 w-72 rounded-full border border-blue/10" />
        <div className="absolute -left-20 bottom-10 h-48 w-48 rounded-full border border-gold/15" />
        <div className="absolute right-[14%] top-20 h-2.5 w-2.5 rounded-full bg-red" />
        <div className="absolute bottom-24 left-[8%] h-1.5 w-1.5 rounded-full bg-gold" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="animate-fade-up">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              {insights.hero.eyebrow}
            </p>
            <h1 className="max-w-3xl font-serif text-5xl font-medium leading-[1.08] text-blue text-balance sm:text-6xl lg:text-7xl">
              {insights.hero.title}
            </h1>
            <p className="mt-4 font-serif text-xl italic text-blue/40">
              {insights.hero.subtitle}
            </p>
            <p className="mt-8 max-w-2xl border-l-2 border-gold pl-5 text-base leading-8 text-ink/70 sm:text-lg">
              {insights.hero.lead}
            </p>

            <div className="mt-9 space-y-3">
              {insights.hero.types.map((type, index) => (
                <article
                  className="flex gap-4 rounded-lg border border-blue/10 bg-white p-5 shadow-[0_18px_50px_rgba(26,26,26,0.04)] transition duration-200 hover:translate-x-1 hover:border-blue/25"
                  key={type.label}
                >
                  <span
                    className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${typeDotStyles[index]}`}
                  />
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="font-serif text-xl font-medium leading-tight text-blue">
                        {type.label}
                      </h2>
                      {"status" in type && type.status && (
                        <span className="rounded-full bg-red/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-red">
                          {type.status}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm leading-6 text-ink/55">
                      {type.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="relative mx-auto grid h-[380px] w-full max-w-[440px] place-items-center animate-fade-up">
            <div className="absolute h-[310px] w-[310px] rounded-full border border-blue/15" />
            <div className="absolute h-[365px] w-[365px] rounded-full border border-gold/20" />
            <div className="absolute right-7 top-6 h-2.5 w-2.5 rounded-full bg-red" />
            <div className="absolute bottom-8 left-8 h-1.5 w-1.5 rounded-full bg-gold" />
            <div className="absolute bottom-6 right-4 h-20 w-20 rounded-full bg-gold" />
            <div className="relative z-10 flex h-72 w-72 flex-col items-center justify-center rounded-full bg-blue px-9 text-center text-cream shadow-soft">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-gold/80">
                {insights.hero.beliefLabel}
              </p>
              <p className="font-serif text-3xl font-medium leading-snug">
                {insights.hero.beliefTitle}
              </p>
              <p className="mt-5 font-serif text-sm italic leading-6 text-cream/45">
                {insights.hero.beliefSubtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-24"
        id="articles"
      >
        <div className="absolute right-16 top-0 h-48 w-48 rounded-full border border-blue/10" />
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              {insights.articles.eyebrow}
            </p>
            <h2 className="font-serif text-3xl font-medium leading-tight text-blue text-balance sm:text-5xl">
              {insights.articles.title}
            </h2>
            <p className="mt-3 font-serif text-lg italic text-blue/40">
              {insights.articles.subtitle}
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {insights.articles.items.map((article, index) => {
              const pending = "pending" in article && article.pending;
              const articleHref =
                "href" in article &&
                typeof article.href === "string" &&
                article.href.length > 0
                  ? article.href
                  : null;

              return (
                <article
                  className={`flex min-h-[360px] flex-col overflow-hidden rounded-lg border bg-cream shadow-[0_18px_50px_rgba(26,26,26,0.05)] transition duration-200 hover:-translate-y-1 ${
                    pending
                      ? "border-ink/10 opacity-75"
                      : "border-blue/10 hover:border-blue/25"
                  }`}
                  key={article.title}
                >
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <p
                      className={`mb-5 w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] ${
                        pending
                          ? "bg-ink/5 text-ink/40"
                          : "bg-blue/5 text-blue"
                      }`}
                    >
                      {article.category}
                    </p>
                    <h3
                      className={`font-serif text-2xl font-medium leading-tight ${
                        pending ? "text-ink/35" : "text-blue"
                      }`}
                    >
                      {article.title}
                    </h3>
                    <p
                      className={`mt-5 text-sm leading-7 ${
                        pending ? "text-ink/35 italic" : "text-ink/70"
                      }`}
                    >
                      {article.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-4 border-t border-blue/10 bg-white px-6 py-5 sm:px-7">
                    <div className="flex items-center gap-3">
                      <span
                        className={`grid h-8 w-8 place-items-center rounded-full font-serif text-sm ${articleInitialStyles[index]}`}
                      >
                        {article.initial}
                      </span>
                      <span
                        className={`text-sm ${pending ? "text-ink/35" : "text-ink/60"}`}
                      >
                        {article.author}
                      </span>
                    </div>
                    {articleHref ? (
                      <a
                        className={`shrink-0 text-sm font-medium underline-offset-4 hover:underline ${
                          pending ? "text-ink/35" : "text-blue"
                        }`}
                        href={articleHref}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {article.status}
                      </a>
                    ) : (
                      <span
                        className={`shrink-0 text-sm font-medium ${
                          pending ? "text-ink/35" : "text-blue"
                        }`}
                      >
                        {article.status}
                      </span>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cream px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="absolute -left-24 top-10 h-64 w-64 rounded-full border border-blue/10" />
        <div className="absolute right-16 top-16 h-2.5 w-2.5 rounded-full bg-gold" />
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              {insights.conversations.eyebrow}
            </p>
            <h2 className="font-serif text-3xl font-medium leading-tight text-blue text-balance sm:text-5xl">
              {insights.conversations.title}
            </h2>
            <p className="mt-3 font-serif text-lg italic text-blue/40">
              {insights.conversations.subtitle}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {insights.conversations.items.map((item, index) => {
              const pending = "pending" in item && item.pending;
              const conversationHref =
                "href" in item &&
                typeof item.href === "string" &&
                item.href.length > 0
                  ? item.href
                  : null;
              const coverImage =
                "coverImage" in item &&
                typeof item.coverImage === "string" &&
                item.coverImage.length > 0
                  ? item.coverImage
                  : null;

              return (
                <article
                  className={`overflow-hidden rounded-lg border border-blue/10 bg-white shadow-[0_18px_50px_rgba(26,26,26,0.05)] transition duration-200 hover:-translate-y-1 hover:border-blue/25 ${
                    pending ? "opacity-75" : ""
                  }`}
                  key={item.title}
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    {coverImage ? (
                      <Image
                        alt={item.title}
                        className="object-cover"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        src={coverImage}
                      />
                    ) : (
                      <div
                        className={`grid h-full w-full place-items-center ${conversationVisualStyles[index]}`}
                      >
                        <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full border border-white/15" />
                        <div className="grid h-14 w-14 place-items-center rounded-full border border-white/30 bg-white/10">
                          <span className="ml-1 h-0 w-0 border-b-[10px] border-l-[16px] border-t-[10px] border-b-transparent border-l-white/85 border-t-transparent" />
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
                    <p className="absolute bottom-4 left-4 text-[10px] font-semibold uppercase tracking-[0.18em] opacity-45">
                      {insights.conversations.coverLabel}
                    </p>
                  </div>
                  <div className="bg-white p-6 sm:p-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-red">
                      {item.category}
                    </p>
                    <h3
                      className={`mt-3 font-serif text-2xl font-medium leading-tight ${
                        pending ? "text-ink/35" : "text-blue"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`mt-4 text-sm leading-7 ${
                        pending ? "text-ink/35 italic" : "text-ink/65"
                      }`}
                    >
                      {item.description}
                    </p>
                    {conversationHref ? (
                      <a
                        className="mt-6 inline-flex w-fit rounded-full bg-cream px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-blue underline-offset-4 hover:underline"
                        href={conversationHref}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {item.status}
                      </a>
                    ) : (
                      <p className="mt-6 w-fit rounded-full bg-cream px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-ink/45">
                        {item.status}
                      </p>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-lg border border-blue/10 bg-cream p-8 sm:p-10 lg:grid-cols-[0.75fr_1fr] lg:items-center lg:p-12">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              {insights.studentVoices.eyebrow}
            </p>
            <h2 className="font-serif text-3xl font-medium leading-tight text-blue text-balance sm:text-5xl">
              {insights.studentVoices.title}
            </h2>
          </div>
          <div className="border-l-2 border-gold pl-5">
            <p className="text-base leading-8 text-ink/70 sm:text-lg">
              {insights.studentVoices.body}
            </p>
            <p className="mt-5 w-fit rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-blue">
              {insights.studentVoices.status}
            </p>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden bg-blue px-5 py-20 text-cream sm:px-6 lg:px-8 lg:py-24"
        id="follow"
      >
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full border border-cream/10" />
        <div className="absolute -right-16 bottom-0 h-56 w-56 rounded-full border border-gold/20" />
        <div className="absolute right-[14%] top-16 h-2.5 w-2.5 rounded-full bg-red" />
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative z-10">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-gold/80">
              {insights.follow.eyebrow}
            </p>
            <h2 className="font-serif text-3xl font-medium leading-tight text-cream text-balance sm:text-5xl">
              {insights.follow.title}
            </h2>
            <p className="mt-3 font-serif text-lg italic text-cream/40">
              {insights.follow.subtitle}
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-cream/65">
              {insights.follow.description}
            </p>
          </div>

          <div className="relative z-10 space-y-4">
            {insights.follow.channels.map((channel, index) => {
              const pending = "pending" in channel && channel.pending;
              const href =
                "href" in channel &&
                typeof channel.href === "string" &&
                channel.href.length > 0
                  ? channel.href
                  : null;
              const avatarKey =
                "avatar" in channel && typeof channel.avatar === "string"
                  ? channel.avatar
                  : null;
              const avatarSrc =
                avatarKey === "lynn" || avatarKey === "jacky"
                  ? `/media/about/founders/${avatarKey}/profile.webp`
                  : null;

              return (
                <div
                  className={`flex items-center gap-5 rounded-lg border border-cream/15 bg-cream/[0.05] p-5 transition duration-200 ${
                    pending
                      ? "opacity-60"
                      : "hover:translate-x-1 hover:border-cream/30 hover:bg-cream/[0.08]"
                  }`}
                  key={`${channel.label}-${index}`}
                >
                  {avatarSrc ? (
                    <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-cream/30 bg-cream/10">
                      <Image
                        alt={channel.label}
                        className="object-cover"
                        fill
                        sizes="48px"
                        src={avatarSrc}
                      />
                    </span>
                  ) : (
                    <span
                      aria-hidden
                      className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-dashed border-cream/35 bg-cream/[0.04] text-[10px] font-semibold uppercase tracking-widest text-cream/40"
                    >
                      —
                    </span>
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="font-serif text-xl font-medium leading-tight text-cream">
                      {channel.label}
                    </p>
                    <p className="mt-1 text-sm text-cream/45">{channel.description}</p>
                  </div>
                  <div className="ml-auto shrink-0 text-right">
                    {pending ? (
                      <span className="text-xs font-semibold tracking-[0.08em] text-gold/65">
                        {channel.status}
                      </span>
                    ) : href && channel.status ? (
                      <a
                        className="text-xs font-semibold tracking-[0.08em] text-gold/80 underline-offset-4 hover:underline"
                        href={href}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {channel.status}
                      </a>
                    ) : channel.status ? (
                      <span className="text-xs font-semibold tracking-[0.08em] text-cream/45">
                        {channel.status}
                      </span>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cream px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="absolute -right-20 bottom-0 h-56 w-56 rounded-full border border-blue/10" />
        <div className="relative z-10 mx-auto max-w-7xl rounded-lg border border-blue/10 bg-white p-8 shadow-[0_18px_50px_rgba(26,26,26,0.05)] sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="max-w-3xl font-serif text-3xl font-medium leading-tight text-blue text-balance sm:text-5xl">
                {insights.cta.title}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-ink/65">
                {insights.cta.body}
              </p>
            </div>
            <ButtonLink href="/contact" variant="secondary" withArrow>
              {dictionary.actions.contact}
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
