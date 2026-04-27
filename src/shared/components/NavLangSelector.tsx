"use client";

import { useState, useRef, useEffect, useTransition } from "react";
import { Globe, ChevronDown, Check } from "lucide-react";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useParams } from "next/navigation";
import type { Locale } from "@/i18n/routing";

const LANG_META: Record<Locale, { label: string; flag: string }> = {
  uz: { label: "O'zbek", flag: "🇺🇿" },
  en: { label: "English", flag: "🇬🇧" },
  ru: { label: "Русский", flag: "🇷🇺" },
};

const LOCALES: Locale[] = ["uz", "en", "ru"];

export function NavLangSelector() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [open, setOpen] = useState(false);
  const [, startTransition] = useTransition();
  const ref = useRef<HTMLDivElement>(null);

  const locale = (params.locale as Locale) ?? "uz";

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const changeLocale = (next: Locale) => {
    setOpen(false);
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 font-mono text-[13px] text-muted hover:text-content px-3 py-2 rounded-md border border-transparent hover:border-line transition-all"
      >
        <Globe size={13} />
        <span>{locale.toUpperCase()}</span>
        <ChevronDown
          size={11}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute top-full right-0 mt-2 bg-elevated border border-line rounded-lg overflow-hidden shadow-[var(--shadow-card)] min-w-[148px] z-50">
          {LOCALES.map((loc) => {
            const meta = LANG_META[loc];
            const active = locale === loc;
            return (
              <button
                key={loc}
                onClick={() => changeLocale(loc)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-left text-[13px] transition-colors ${
                  active
                    ? "text-accent bg-accent/[0.08]"
                    : "text-muted hover:text-content hover:bg-surface"
                }`}
              >
                <span className="text-base leading-none">{meta.flag}</span>
                <span className="flex-1 font-medium">{meta.label}</span>
                {active && <Check size={12} className="text-accent" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
