"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";

export function LanguageToggle({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale, dictionary } = useLanguage();
  const wrapperClasses = compact
    ? "h-10 rounded-full p-0.5"
    : "h-11 rounded-full p-1";
  const chipClasses = compact
    ? "px-2.5 text-xs"
    : "px-3.5 text-sm";
  const languageOptions = [
    { key: "zh", label: dictionary.language.chinese },
    { key: "en", label: dictionary.language.english }
  ] as const;

  return (
    <div
      aria-label={dictionary.language.label}
      className={`inline-flex items-center border border-ink/10 bg-white/90 shadow-[0_6px_22px_rgba(26,26,26,0.06)] ${wrapperClasses}`}
      role="group"
    >
      {languageOptions.map((item) => {
        const active = locale === item.key;

        return (
          <button
            aria-pressed={active}
            className={`inline-flex h-full items-center rounded-full font-medium transition ${chipClasses} ${
              active
                ? "bg-blue text-cream"
                : "text-ink/65 hover:text-blue"
            }`}
            key={item.key}
            onClick={() => setLocale(item.key)}
            type="button"
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
