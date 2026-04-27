"use client";

import { useState, useEffect, useCallback } from "react";
import { locales, defaultLocale, type Locale } from "@/lib/i18n";

/* Module-level subscriber list so all useLocale instances stay in sync */
type Listener = (locale: Locale) => void;
const listeners = new Set<Listener>();
let currentLocale: Locale = defaultLocale;

function broadcast(locale: Locale) {
  currentLocale = locale;
  listeners.forEach((fn) => fn(locale));
}

export function useLocale() {
  const [locale, setLocale] = useState<Locale>(currentLocale);

  useEffect(() => {
    listeners.add(setLocale);
    return () => { listeners.delete(setLocale); };
  }, []);

  const changeLocale = useCallback((next: Locale) => {
    broadcast(next);
    /* Also update i18next for components that use useTranslation */
    import("@/lib/i18n/config").then(({ default: i18n }) => {
      i18n.changeLanguage(next);
    });
  }, []);

  return { locale, locales, changeLocale };
}
