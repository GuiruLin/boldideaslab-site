import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "quiet"
  | "gold"
  | "ghostOnDark";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  withArrow?: boolean;
  className?: string;
};

const baseClasses =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-blue text-cream shadow-soft hover:-translate-y-0.5 hover:bg-[#002680]",
  secondary:
    "border border-ink/15 bg-white/90 text-ink shadow-[0_4px_20px_rgba(26,26,26,0.06)] hover:-translate-y-0.5 hover:border-blue/30 hover:text-blue",
  quiet:
    "bg-transparent px-0 py-2 text-blue underline decoration-blue/25 underline-offset-[6px] shadow-none hover:decoration-blue min-h-0 rounded-none hover:-translate-y-0",
  gold:
    "border border-gold/30 bg-gold text-blue shadow-[0_10px_36px_rgba(201,168,76,0.35)] hover:-translate-y-0.5 hover:bg-[#b89440]",
  ghostOnDark:
    "border border-cream/40 bg-transparent text-cream shadow-none hover:-translate-y-0.5 hover:border-cream/65 hover:bg-cream/10"
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  withArrow = false,
  className = ""
}: ButtonLinkProps) {
  const classes = `${baseClasses} ${variants[variant]} ${className}`.trim();

  const content = (
    <>
      {children}
      {withArrow ? (
        <ArrowRight aria-hidden className="h-4 w-4 shrink-0 opacity-90" />
      ) : null}
    </>
  );

  if (
    href.startsWith("mailto:") ||
    href.startsWith("http") ||
    href.startsWith("#")
  ) {
    return (
      <a className={classes} href={href}>
        {content}
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {content}
    </Link>
  );
}
