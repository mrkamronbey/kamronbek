import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Layout as PortfolioLayout } from "@/layout";
import { SITE_URL, SITE_NAME, localeAlternates, ogLocale } from "@/shared/seo";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  const title = t("home_title");
  const description = t("home_desc");

  return {
    title: { default: title, template: `%s · ${SITE_NAME}` },
    description,
    alternates: localeAlternates(locale, ""),
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      url: `${SITE_URL}/${locale}`,
      title,
      description,
      locale: ogLocale(locale),
      images: ["/og.png"],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
  };
}

const SAME_AS = [
  "https://github.com/mrkamronbek",
  "https://www.linkedin.com/in/komronbek-sunnatov-042922371/",
  "https://t.me/sunnatoff_dev",
  "https://www.instagram.com/sunnatoff.dev/",
];

function siteGraph(locale: string) {
  const personId = `${SITE_URL}/#person`;
  const websiteId = `${SITE_URL}/#website`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: "Komronbek Sunnatov",
        alternateName: ["Kamronbek Sunnatov", "Sunnatov Komronbek", "Komronbek Sunnatov dasturchi"],
        url: SITE_URL,
        image: `${SITE_URL}/myphoto.png`,
        jobTitle: "Frontend Engineer",
        description:
          "Frontend Engineer with 3+ years of experience building real web and mobile products for logistics, sales and mobile-first apps using React, Next.js, TypeScript and React Native.",
        email: "komronbek.sunnatov@mail.ru",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Tashkent",
          addressCountry: "UZ",
        },
        knowsAbout: [
          "React", "Next.js", "TypeScript", "React Native", "Redux Toolkit",
          "Zustand", "React Query", "REST API", "Server-Side Rendering",
          "Frontend development", "Web development", "Mobile app development",
          "UI/UX implementation",
        ],
        knowsLanguage: ["uz", "en", "ru"],
        worksFor: { "@type": "Organization", name: "Windermer Pro LLC" },
        alumniOf: { "@type": "EducationalOrganization", name: "Najot Ta'lim" },
        sameAs: SAME_AS,
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: SITE_URL,
        name: SITE_NAME,
        description: "Portfolio of Komronbek Sunnatov, Frontend Engineer.",
        inLanguage: locale,
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": `${SITE_URL}/${locale}#profilepage`,
        url: `${SITE_URL}/${locale}`,
        name: "Komronbek Sunnatov — Frontend Engineer",
        inLanguage: locale,
        isPartOf: { "@id": websiteId },
        about: { "@id": personId },
        mainEntity: { "@id": personId },
      },
    ],
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "uz" | "en" | "ru")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteGraph(locale)) }}
      />
      <PortfolioLayout>{children}</PortfolioLayout>
    </NextIntlClientProvider>
  );
}
