import { ContactSection } from "@/shared/components";
import { BlogHero } from "./components/BlogHero";
import { BlogGrid } from "./components/BlogGrid";

export function BlogModule() {
  return (
    <>
      <BlogHero />
      <BlogGrid />
      <ContactSection />
    </>
  );
}
