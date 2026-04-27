import { Container } from "@/shared/components";
import { projects } from "../data/projects";
import { ProjectCard } from "@/shared/components";

export function ProjectsGrid() {
  return (
    <section className="bg-surface py-[80px]">
      <Container className="px-12 max-md:px-6">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-5">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
