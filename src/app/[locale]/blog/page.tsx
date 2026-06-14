import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { BlogModule } from "@/features/blog";
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
    path: "/blog",
    title: t("blog_title"),
    description: t("blog_desc"),
  });
}

export default function BlogPage() {
  return <BlogModule />;
}
