import type { ReactNode } from "react";

type SectionProps = {
  eyebrow?: string;
  title?: string;
  lead?: string;
  children?: ReactNode;
  className?: string;
  innerClassName?: string;
  tone?: "cream" | "white" | "ink";
};

const toneClasses = {
  cream: "bg-cream",
  white: "bg-white",
  ink: "bg-ink text-white"
};

export function Section({
  eyebrow,
  title,
  lead,
  children,
  className = "",
  innerClassName = "",
  tone = "cream"
}: SectionProps) {
  const headingColor = tone === "ink" ? "text-white" : "text-blue";
  const leadColor = tone === "ink" ? "text-white/70" : "text-ink/70";

  return (
    <section className={`${toneClasses[tone]} px-5 py-20 sm:px-6 lg:px-8 ${className}`}>
      <div className={`mx-auto max-w-7xl ${innerClassName}`}>
        {(eyebrow || title || lead) && (
          <div className="mb-10 max-w-3xl animate-fade-up">
            {eyebrow && (
              <p className="mb-4 text-sm font-semibold uppercase text-gold">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className={`font-serif text-3xl font-medium leading-tight text-balance sm:text-4xl lg:text-5xl ${headingColor}`}>
                {title}
              </h2>
            )}
            {lead && (
              <p className={`mt-5 text-base leading-8 sm:text-lg ${leadColor}`}>
                {lead}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
