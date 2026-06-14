import { EXPERIENCE } from "@/features/home/data/experience";
import { getProjects } from "@/features/projects/data/projects";
import { SITE_URL } from "@/shared/seo";
import { PERSON, SOCIALS } from "@/shared/site";

export const dynamic = "force-static";

/**
 * /llms.txt — a curated, LLM-friendly summary of who Komronbek Sunnatov is.
 * Helps AI assistants and answer engines describe and surface the person accurately.
 * Spec: https://llmstxt.org
 */
export function GET() {
  const experience = EXPERIENCE.en;
  const projects = getProjects("en");

  const lines = [
    "# Komronbek Sunnatov — Frontend Engineer",
    "",
    "> Komronbek Sunnatov (also spelled Kamronbek Sunnatov) is a Frontend Engineer based in Tashkent, Uzbekistan, with 3+ years of experience building real web and mobile products using React, Next.js, TypeScript and React Native — focused on logistics, sales systems and mobile-first applications.",
    "",
    "## Profile",
    "- Name: Komronbek Sunnatov (alternate spellings: Kamronbek Sunnatov, Sunnatov Komronbek)",
    "- Title: Frontend Engineer (React, Next.js, TypeScript, React Native)",
    "- Location: Tashkent, Uzbekistan",
    `- Website: ${SITE_URL}`,
    `- Email: ${PERSON.email}`,
    ...(PERSON.phones.length ? [`- Phone: ${PERSON.phones.join(", ")}`] : []),
    "- Languages: Uzbek (native), Russian, English",
    "- Status: Open to full-time roles, freelance and contract work",
    "",
    "## Skills",
    "JavaScript, TypeScript, React, Next.js, React Native, Redux Toolkit, Zustand, React Query, Ant Design, MUI, REST API, SSR, Zod, Chart.js, Axios, Git, responsive design, UI/UX implementation.",
    "",
    "## Experience",
    ...experience.map(
      (e) => `- **${e.role}** at ${e.company} (${e.period}, ${e.location}): ${e.desc}`
    ),
    "",
    "## Projects",
    ...projects.map((p) => `- **${p.title}** (${p.tags.join(", ")}): ${p.desc}`),
    "",
    "## Links",
    `- Website: ${SITE_URL}`,
    ...SOCIALS.map((s) => `- ${s.label}: ${s.href}`),
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
