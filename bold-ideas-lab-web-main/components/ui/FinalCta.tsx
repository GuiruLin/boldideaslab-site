import { ButtonLink } from "@/components/ui/ButtonLink";

type FinalCtaProps = {
  eyebrow?: string;
  title: string;
  body: string;
  primary: {
    href: string;
    label: string;
  };
  secondary?: {
    href: string;
    label: string;
  };
};

export function FinalCta({
  eyebrow,
  title,
  body,
  primary,
  secondary
}: FinalCtaProps) {
  return (
    <section className="bg-cream px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-lg bg-ink p-8 text-white shadow-soft sm:p-10 lg:p-12">
        {eyebrow && (
          <p className="mb-4 text-sm font-semibold uppercase text-gold">
            {eyebrow}
          </p>
        )}
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h2 className="max-w-3xl font-serif text-3xl font-medium leading-tight text-balance sm:text-5xl">
              {title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">
              {body}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <ButtonLink href={primary.href} variant="gold" withArrow>
              {primary.label}
            </ButtonLink>
            {secondary && (
              <ButtonLink href={secondary.href} variant="ghostOnDark" withArrow>
                {secondary.label}
              </ButtonLink>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
