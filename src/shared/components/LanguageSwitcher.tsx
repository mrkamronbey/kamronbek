"use client";

import { useLocale } from "@/shared/hooks";

export function LanguageSwitcher() {
  const { locale, locales, changeLocale } = useLocale();

  return (
    <div className="flex gap-2">
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => changeLocale(loc)}
          className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
            locale === loc
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {loc.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
