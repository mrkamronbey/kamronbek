import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { SITE_URL } from "@/shared/seo";
import { projectSlugs } from "@/features/projects/data/projects";
import { blogPosts } from "@/features/blog/data/blog";

type Freq = "weekly" | "monthly";

function entry(path: string, priority: number, changeFrequency: Freq): MetadataRoute.Sitemap[number] {
  const languages: Record<string, string> = {};
  for (const l of routing.locales) languages[l] = `${SITE_URL}/${l}${path}`;
  return {
    url: `${SITE_URL}/${routing.defaultLocale}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
    alternates: { languages },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: Array<[string, number, Freq]> = [
    ["", 1.0, "weekly"],
    ["/projects", 0.9, "weekly"],
    ["/about", 0.8, "monthly"],
    ["/blog", 0.7, "weekly"],
  ];
  const projects = projectSlugs.map((s) => [`/projects/${s}`, 0.6, "monthly"] as [string, number, Freq]);
  const posts = blogPosts.map((p) => [`/blog/${p.slug}`, 0.5, "monthly"] as [string, number, Freq]);

  return [...staticPages, ...projects, ...posts].map(([path, priority, freq]) =>
    entry(path, priority, freq)
  );
}
