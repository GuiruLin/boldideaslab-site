import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  accent?: "blue" | "gold" | "red" | "none";
};

const accentClasses = {
  blue: "border-t-blue",
  gold: "border-t-gold",
  red: "border-t-red",
  none: "border-t-ink/10"
};

export function Card({ children, className = "", accent = "none" }: CardProps) {
  return (
    <div
      className={`rounded-lg border border-ink/10 border-t-4 bg-white p-6 shadow-[0_18px_50px_rgba(26,26,26,0.05)] ${accentClasses[accent]} ${className}`}
    >
      {children}
    </div>
  );
}
