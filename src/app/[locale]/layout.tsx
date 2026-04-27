import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Layout as PortfolioLayout } from "@/layout";
import { I18nProvider } from "@/shared/components";

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
    <NextIntlClientProvider messages={messages}>
      <I18nProvider>
        <PortfolioLayout>{children}</PortfolioLayout>
      </I18nProvider>
    </NextIntlClientProvider>
  );
}
