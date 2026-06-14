import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ProjectsModule } from "@/features/projects";
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
    path: "/projects",
    title: t("projects_title"),
    description: t("projects_desc"),
  });
}

export default function ProjectsPage() {
  return <ProjectsModule />;
}
