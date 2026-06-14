import Image from "next/image";
import { useTranslations } from "next-intl";
import { Container } from "@/shared/components";

const SKILLS = [
  { cat: "Frontend",  list: "React, Next.js, TypeScript, Vue.js" },
  { cat: "Styling",   list: "Tailwind CSS, SCSS, Styled Components" },
  { cat: "Tools",     list: "Git, Vite, Webpack, Storybook" },
  { cat: "Backend",   list: "Node.js, Express, REST API, GraphQL" },
  { cat: "Database",  list: "PostgreSQL, MongoDB, Firebase" },
  { cat: "DevOps",    list: "Docker, CI/CD, Vercel, Netlify" },
];

export function AboutSection() {
  const t = useTranslations("about");

  return (
    <section id="about" className="bg-canvas py-[100px] pt-32">
      <Container className="px-12 max-md:px-6">
        <p className="font-mono text-xs text-accent tracking-[2px] uppercase mb-3">{t("tag")}</p>
        <h1 className="text-[clamp(28px,4vw,44px)] font-bold tracking-[-1px] leading-[1.1]">
          {t("title")}
        </h1>

        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-20 max-md:gap-10 items-center mt-16">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <Image
                src="/myphoto.png"
                alt="Komronbek Sunnatov"
                width={56}
                height={56}
                className="w-14 h-14 rounded-full object-cover object-top border-2 border-accent flex-shrink-0"
              />
              <div>
                <p className="font-bold text-lg text-content">Komronbek Sunnatov</p>
                <p className="text-[13px] text-muted font-mono">Frontend Engineer</p>
              </div>
            </div>

            <p className="text-base text-muted leading-[1.85] mb-5">{t("bio1")}</p>
            <p className="text-base text-muted leading-[1.85] mb-5">{t("bio2")}</p>
            <p className="text-base text-muted leading-[1.85]">{t("bio3")}</p>

            <div className="inline-flex items-center gap-1.5 text-[13px] text-success bg-success/[0.08] border border-success/20 px-3.5 py-1.5 rounded-full mt-6">
              <span className="w-1.5 h-1.5 rounded-full bg-success animate-blink" />
              {t("available")}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {SKILLS.map((s) => (
              <div
                key={s.cat}
                className="bg-surface border border-line rounded-md p-4 transition-[border-color,transform] duration-200 hover:border-accent/30 hover:-translate-y-0.5"
              >
                <p className="font-mono text-[11px] text-accent2 uppercase tracking-[1.5px] mb-2">{s.cat}</p>
                <p className="text-sm text-content leading-[1.7] font-medium">{s.list}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
