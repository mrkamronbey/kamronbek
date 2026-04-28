"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Code2, Palette, Wrench, Server } from "lucide-react";
import { Container } from "@/shared/components";

const SKILLS = [
  { icon: Code2,    cat: "Frontend",  list: ["React", "Next.js", "TypeScript", "Vue.js"],            color: "text-accent  bg-accent/10"  },
  { icon: Palette,  cat: "Styling",   list: ["Tailwind CSS", "SCSS", "Styled Components"],           color: "text-accent2 bg-accent2/10" },
  { icon: Wrench,   cat: "Tools",     list: ["Git", "Vite", "Webpack", "Storybook"],                 color: "text-[#f59e0b] bg-[#f59e0b]/10" },
  { icon: Server,   cat: "DevOps",    list: ["Docker", "CI/CD", "Vercel", "Netlify"],                color: "text-success bg-success/10" },
];

export function AboutSection() {
  const t = useTranslations("about");

  return (
    <section id="about" className="bg-canvas py-[100px]">
      <Container className="px-12 max-md:px-6">
        <p className="font-mono text-xs text-accent tracking-[2px] uppercase mb-3">
          {t("tag")}
        </p>
        <h2 className="text-[clamp(28px,4vw,44px)] font-bold tracking-[-1px] leading-[1.1]">
          {t("title")}
        </h2>

        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-20 max-md:gap-10 items-start mt-16">

          {/* Left: Bio */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <Image
                src="/myphoto.png"
                alt="Kamronbek Sunnatov"
                width={56}
                height={56}
                className="w-14 h-14 rounded-full object-cover object-top border-2 border-accent flex-shrink-0"
              />
              <div>
                <p className="font-bold text-lg text-content">Kamronbek Sunnatov</p>
                <p className="text-[13px] text-muted font-mono">
                  Frontend Engineer | React & React Native
                </p>
              </div>
            </div>

            <p className="text-base text-muted leading-[1.85] mb-4">{t("bio1")}</p>
            <p className="text-base text-muted leading-[1.85] mb-4">{t("bio2")}</p>
            <p className="text-base text-muted leading-[1.85] mb-4">{t("bio3")}</p>
            <p className="text-base text-muted leading-[1.85]">{t("bio4")}</p>

            <div className="inline-flex items-center gap-1.5 text-[13px] text-success bg-success/[0.08] border border-success/20 px-3.5 py-1.5 rounded-full mt-6">
              <span className="w-1.5 h-1.5 rounded-full bg-success animate-blink" />
              {t("available")}
            </div>
          </div>

          {/* Right: Skills */}
          <div className="grid grid-cols-2 gap-4">
            {SKILLS.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.cat}
                  className="group bg-surface border border-line rounded-lg p-5 transition-all duration-200 hover:border-accent/30 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-9 h-9 rounded-md flex items-center justify-center flex-shrink-0 ${s.color}`}>
                      <Icon size={17} />
                    </div>
                    <p className="font-mono text-[11px] font-semibold uppercase tracking-[1.5px] text-muted">
                      {s.cat}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {s.list.map((tech) => (
                      <span key={tech} className="font-mono text-[11px] px-2 py-0.5 rounded bg-elevated border border-line text-content/80">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </Container>
    </section>
  );
}
