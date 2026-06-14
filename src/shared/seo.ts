import type { Metadata } from "next";
import { routing } from "@/i18n/routing";
import { SITE_URL, SITE_NAME } from "@/shared/site";

export { SITE_URL, SITE_NAME };

const OG_LOCALE: Record<string, string> = { uz: "uz_UZ", en: "en_US", ru: "ru_RU" };

export function ogLocale(locale: string) {
  return OG_LOCALE[locale] ?? "uz_UZ";
}

/** Build canonical + hreflang alternates for a path (without locale prefix, e.g. "" or "/projects"). */
export function localeAlternates(locale: string, path = "") {
  const languages: Record<string, string> = {};
  for (const l of routing.locales) languages[l] = `/${l}${path}`;
  languages["x-default"] = `/${routing.defaultLocale}${path}`;
  return { canonical: `/${locale}${path}`, languages };
}

/** Per-page localized metadata (title gets the layout `%s · Sunnatoff.dev` template). */
export function buildMetadata(opts: {
  locale: string;
  path: string;
  title: string;
  description: string;
  ogType?: "website" | "article";
  images?: string[];
}): Metadata {
  const { locale, path, title, description, ogType = "website", images = ["/og.png"] } = opts;
  const fullTitle = `${title} · ${SITE_NAME}`;
  return {
    title,
    description,
    alternates: localeAlternates(locale, path),
    openGraph: {
      type: ogType,
      siteName: SITE_NAME,
      url: `${SITE_URL}/${locale}${path}`,
      title: fullTitle,
      description,
      locale: OG_LOCALE[locale] ?? "uz_UZ",
      images,
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images },
  };
}
