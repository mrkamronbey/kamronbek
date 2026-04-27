"use client";

import { ContactSection, Divider } from "@/shared/components";
import { HeroSection }       from "./components/HeroSection";
import { AboutSection }      from "./components/AboutSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { ServicesSection }   from "./components/ServicesSection";
import { ProjectsSection }   from "./components/ProjectsSection";
import { BlogSection }       from "./components/BlogSection";

export function HomeModule() {
  return (
    <>
      <HeroSection />
      <Divider />
      <AboutSection />
      <Divider />
      <ExperienceSection />
      <Divider />
      <ServicesSection />
      <Divider />
      <ProjectsSection />
      <Divider />
      <BlogSection />
      <Divider />
      <ContactSection />
    </>
  );
}
