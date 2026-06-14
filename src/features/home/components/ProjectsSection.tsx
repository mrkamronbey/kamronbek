"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Container, ProjectCard } from "@/shared/components";
import { getProjects } from "@/features/projects/data/projects";
import type { Locale } from "@/i18n/routing";

export function ProjectsSection() {
  const t = useTranslations("projects");
  const locale = useLocale() as Locale;
  const projects = getProjects(locale);

  return (
    <section id="projects" className="bg-surface py-[100px]">
      <Container className="px-12 max-md:px-6">
        <p className="font-mono text-xs text-accent tracking-[2px] uppercase mb-3">{t("tag")}</p>

        <div className="flex justify-between items-end flex-wrap gap-4 mb-16">
          <div>
            <h2 className="text-[clamp(28px,4vw,44px)] font-bold tracking-[-1px] leading-[1.1] mb-4">
              {t("title")}
            </h2>
            <p className="text-base text-muted leading-[1.7] max-w-[500px]">
              {t("subtitle")}
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center bg-transparent text-content font-medium text-sm px-5 py-2.5 rounded-lg no-underline border border-line transition-all hover:border-content/20 hover:bg-elevated"
          >
            {t("all")}
          </Link>
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-5">
          {projects.slice(0, 3).map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
