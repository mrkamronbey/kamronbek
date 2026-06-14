import { getLocale } from "next-intl/server";
import { Container, ProjectCard } from "@/shared/components";
import { getProjects } from "../data/projects";
import type { Locale } from "@/i18n/routing";

export async function ProjectsGrid() {
  const locale = (await getLocale()) as Locale;
  const projects = getProjects(locale);

  return (
    <section className="bg-surface py-[80px]">
      <Container className="px-12 max-md:px-6">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-5">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
