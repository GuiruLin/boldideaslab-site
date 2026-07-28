import Link from "next/link";
import type { ReactNode } from "react";

type BtnProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

const base =
  "inline-flex min-h-11 items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue";

const variants = {
  primary: "bg-blue text-cream hover:shadow-[inset_0_0_0_99em_rgba(26,26,26,0.08)]",
  secondary: "border border-ink/15 bg-transparent text-ink hover:border-blue/40 hover:text-blue"
};

export function Btn({ href, children, variant = "primary", className = "" }: BtnProps) {
  const classes = `${base} ${variants[variant]} ${className}`.trim();

  if (href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a className={classes} href={href} rel="noopener" target="_blank">
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {children}
    </Link>
  );
}
