import en from "@/messages/en.json";
import zh from "@/messages/zh.json";

export const dictionaries = {
  en,
  zh
} as const;

export type Locale = keyof typeof dictionaries;
export type Dictionary = (typeof dictionaries)["en"];
export type NavKey = keyof Dictionary["nav"];

export const defaultLocale: Locale = "en";

export const navItems = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/programmes", key: "programmes" },
  { href: "/work", key: "work" },
  { href: "/eduos", key: "eduos" },
  { href: "/insights", key: "insights" },
  { href: "/contact", key: "contact" }
] as const satisfies ReadonlyArray<{ href: string; key: NavKey }>;

export function isLocale(value: string | null): value is Locale {
  return value === "en" || value === "zh";
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
