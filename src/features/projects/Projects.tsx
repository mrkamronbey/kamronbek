import { ContactSection } from "@/shared/components";
import { ProjectsHero } from "./components/ProjectsHero";
import { ProjectsGrid } from "./components/ProjectsGrid";

export function ProjectsModule() {
  return (
    <>
      <ProjectsHero />
      <ProjectsGrid />
      <ContactSection />
    </>
  );
}
