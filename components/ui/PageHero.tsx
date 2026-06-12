import { ButtonLink } from "@/components/ui/ButtonLink";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  accent?: string;
  lead: string;
  primary?: {
    href: string;
    label: string;
  };
  secondary?: {
    href: string;
    label: string;
  };
  imageLabel?: string;
  imageUrl?: string;
};

export function PageHero({
  eyebrow,
  title,
  accent,
  lead,
  primary,
  secondary,
  imageLabel,
  imageUrl
}: PageHeroProps) {
  const accentIndex = accent ? title.indexOf(accent) : -1;
  const titleNode =
    accent && accentIndex !== -1 ? (
      <>
        {title.slice(0, accentIndex)}
        <span className="text-red">{accent}</span>
        {title.slice(accentIndex + accent.length)}
      </>
    ) : (
      title
    );

  return (
    <section className="relative overflow-hidden bg-cream px-5 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-20">
      <div className="absolute inset-x-0 top-0 h-px bg-ink/10" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="animate-fade-up">
          <p className="mb-5 text-sm font-semibold uppercase text-gold">
            {eyebrow}
          </p>
          <h1 className="max-w-4xl font-serif text-5xl font-medium leading-[1.04] text-blue text-balance sm:text-6xl lg:text-7xl">
            {titleNode}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/70 sm:text-xl">
            {lead}
          </p>
          {(primary || secondary) && (
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              {primary && (
                <ButtonLink href={primary.href} withArrow>
                  {primary.label}
                </ButtonLink>
              )}
              {secondary && (
                <ButtonLink href={secondary.href} variant="secondary" withArrow>
                  {secondary.label}
                </ButtonLink>
              )}
            </div>
          )}
        </div>

        <div className="relative min-h-[360px] animate-fade-up lg:min-h-[520px]">
          <div className="absolute left-8 top-8 h-48 w-48 rounded-full border border-blue/25" />
          <div className="absolute bottom-0 right-4 h-40 w-40 rounded-full border border-gold/35" />
          <div className="absolute right-0 top-0 h-20 w-20 rounded-full bg-red/10" />
          <div className="absolute bottom-16 left-0 h-20 w-28 rounded-lg bg-gold/20" />
          {imageUrl && (
            <div
              aria-label={imageLabel}
              className="absolute inset-x-8 top-16 h-[320px] rounded-lg bg-cover bg-center shadow-soft sm:inset-x-16 lg:h-[420px]"
              role="img"
              style={{ backgroundImage: `url(${imageUrl})` }}
            />
          )}
          <div className="absolute bottom-8 right-10 h-28 w-44 rounded-lg border border-ink/10 bg-white/90 p-5 shadow-soft backdrop-blur">
            <div className="mb-4 h-2 w-16 rounded-full bg-blue" />
            <div className="mb-2 h-2 w-24 rounded-full bg-ink/15" />
            <div className="h-2 w-14 rounded-full bg-gold" />
          </div>
        </div>
      </div>
    </section>
  );
}
