import Link from "next/link";
import { Container } from "@/shared/components";
import { ProjectCard } from "@/shared/components";
import { projects } from "@/features/projects/data/projects";

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-surface py-[100px]">
      <Container className="px-12 max-md:px-6">
        <p className="font-mono text-xs text-accent tracking-[2px] uppercase mb-3">{`// loyihalar`}</p>

        <div className="flex justify-between items-end flex-wrap gap-4 mb-16">
          <div>
            <h2 className="text-[clamp(28px,4vw,44px)] font-bold tracking-[-1px] leading-[1.1] mb-4">
              Tanlangan ishlar
            </h2>
            <p className="text-base text-muted leading-[1.7] max-w-[500px]">
              Real loyihalar va amaliy tajriba
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center bg-transparent text-content font-medium text-sm px-5 py-2.5 rounded-lg no-underline border border-line transition-all hover:border-content/20 hover:bg-elevated"
          >
            Barchasi →
          </Link>
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-5">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
