"use client";

import Link from "next/link";
import {
  Monitor, Palette, Zap, Plug, Smartphone, SearchCode,
  ArrowUpRight,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "@/shared/components";

const SERVICES = [
  { key: "s1", icon: Monitor,    accent: "#5b8def", bgAccent: "rgba(91,141,239,0.12)", tags: ["React", "Next.js", "TypeScript"] },
  { key: "s2", icon: Palette,    accent: "#a78bfa", bgAccent: "rgba(167,139,250,0.12)", tags: ["Tailwind CSS", "Figma", "SCSS"] },
  { key: "s3", icon: Zap,        accent: "#f59e0b", bgAccent: "rgba(245,158,11,0.12)", tags: ["Lighthouse", "Webpack", "Vite"] },
  { key: "s4", icon: Plug,       accent: "#34d399", bgAccent: "rgba(52,211,153,0.12)", tags: ["REST API", "GraphQL", "Redux"] },
  { key: "s5", icon: Smartphone, accent: "#f472b6", bgAccent: "rgba(244,114,182,0.12)", tags: ["Responsive", "CSS Grid", "Flexbox"] },
  { key: "s6", icon: SearchCode, accent: "#fb923c", bgAccent: "rgba(251,146,60,0.12)", tags: ["Code Review", "Architecture", "Mentoring"] },
];

export function ServicesSection() {
  const t = useTranslations("services");

  return (
    <section id="services" className="bg-surface py-[100px]">
      <Container className="px-12 max-md:px-6">
        <p className="font-mono text-xs text-accent tracking-[2px] uppercase mb-3">
          {t("tag")}
        </p>
        <div className="flex justify-between items-end flex-wrap gap-4 mb-16">
          <div>
            <h2 className="text-[clamp(28px,4vw,44px)] font-bold tracking-[-1px] leading-[1.1] mb-4">
              {t("title")}
            </h2>
            <p className="text-base text-muted leading-[1.7] max-w-[480px]">
              {t("subtitle")}
            </p>
          </div>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-accent text-white font-semibold text-sm px-5 py-2.5 rounded-lg no-underline transition-all hover:bg-[#4a7de0] hover:-translate-y-px"
          >
            {t("cta")}
          </Link>
        </div>

        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.key}
                className="group relative bg-elevated border border-line rounded-lg p-6 transition-all duration-300 overflow-hidden cursor-default"
                style={{
                  ["--svc-accent" as string]: s.accent,
                  ["--svc-bg" as string]: s.bgAccent,
                }}
              >
                {/* Hover glow background */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 0% 0%, ${s.bgAccent} 0%, transparent 65%)` }}
                />

                {/* Bottom border on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={{ background: `linear-gradient(90deg, ${s.accent}, transparent)` }}
                />

                {/* Number */}
                <span className="absolute top-5 right-5 font-mono text-[11px] text-muted/30 font-bold select-none">
                  0{i + 1}
                </span>

                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-[-6deg]"
                  style={{ background: s.bgAccent, color: s.accent }}
                >
                  <Icon size={20} />
                </div>

                {/* Title + arrow */}
                <div className="flex items-start justify-between gap-2 mb-2.5">
                  <h3
                    className="text-[16px] font-bold tracking-[-0.3px] transition-colors duration-300"
                    style={{ color: "var(--color-content)" }}
                  >
                    <span className="group-hover:[color:var(--svc-accent)] transition-colors duration-300">
                      {t(`${s.key}_title`)}
                    </span>
                  </h3>
                  <ArrowUpRight
                    size={15}
                    className="flex-shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    style={{ color: s.accent }}
                  />
                </div>

                <p className="text-sm text-muted leading-[1.7] mb-5">{t(`${s.key}_desc`)}</p>

                {/* Tags */}
                <div className="flex gap-1.5 flex-wrap">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] px-2 py-0.5 rounded border bg-canvas text-muted border-line transition-colors duration-300 group-hover:border-[color:var(--svc-accent)]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
