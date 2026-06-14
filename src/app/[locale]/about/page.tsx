import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { AboutSection } from "@/features/about";
import { buildMetadata } from "@/shared/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return buildMetadata({
    locale,
    path: "/about",
    title: t("about_title"),
    description: t("about_desc"),
  });
}

export default function AboutPage() {
  return <AboutSection />;
}
