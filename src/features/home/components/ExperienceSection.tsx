"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { MapPin, CheckCircle2 } from "lucide-react";
import { Container } from "@/shared/components";
import { EXPERIENCE } from "../data/experience";
import type { Locale } from "@/i18n/routing";

export function ExperienceSection() {
  const t = useTranslations("experience");
  const { locale } = useParams() as { locale: Locale };
  const items = EXPERIENCE[locale] ?? EXPERIENCE.uz;

  return (
    <section id="experience" className="bg-surface py-[100px]">
      <Container className="px-12 max-md:px-6">
        <p className="font-mono text-xs text-accent tracking-[2px] uppercase mb-3">
          {t("tag")}
        </p>
        <h2 className="text-[clamp(28px,4vw,44px)] font-bold tracking-[-1px] leading-[1.1] mb-16">
          {t("title")}
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-6 bottom-6 w-px bg-gradient-to-b from-accent via-line to-transparent max-md:hidden" />

          <div className="space-y-6">
            {items.map((item, i) => (
              <div key={i} className="flex gap-8 max-md:flex-col max-md:gap-0 group">

                {/* Timeline dot */}
                <div className="flex flex-col items-center flex-shrink-0 max-md:hidden pt-3">
                  <div
                    className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                      item.current
                        ? "bg-accent border-accent shadow-[0_0_10px_rgba(91,141,239,0.6)]"
                        : "bg-canvas border-line group-hover:border-accent/60"
                    }`}
                  />
                </div>

                {/* Card */}
                <div
                  className={`flex-1 rounded-xl border p-6 transition-all duration-300 hover:shadow-[var(--shadow-card)] hover:-translate-y-0.5 ${
                    item.current
                      ? "bg-elevated border-accent/30 shadow-[0_0_0_1px_rgba(91,141,239,0.1)]"
                      : "bg-elevated border-line hover:border-accent/20"
                  }`}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-[17px] font-bold text-content tracking-[-0.3px]">
                          {item.role}
                        </h3>
                        {item.current && (
                          <span className="inline-flex items-center gap-1 font-mono text-[10px] text-success bg-success/[0.1] border border-success/20 px-2 py-0.5 rounded-full">
                            <span className="w-1 h-1 rounded-full bg-success animate-blink" />
                            {locale === "ru" ? "Сейчас" : locale === "en" ? "Current" : "Hozir"}
                          </span>
                        )}
                      </div>
                      <p className="text-accent font-semibold text-[14px]">{item.company}</p>
                    </div>
                    <div className="text-right max-sm:text-left">
                      <p className="font-mono text-[12px] text-muted font-medium">{item.period}</p>
                      <div className="flex items-center gap-1 justify-end max-sm:justify-start mt-0.5">
                        <MapPin size={11} className="text-muted" />
                        <p className="font-mono text-[11px] text-muted">{item.location}</p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted leading-[1.75] mb-4">{item.desc}</p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-4">
                    {item.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <CheckCircle2
                          size={14}
                          className={`flex-shrink-0 mt-0.5 ${item.current ? "text-accent" : "text-success/70"}`}
                        />
                        <span className="text-[13px] text-muted leading-[1.6]">{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-line">
                    {item.skills.map((s) => (
                      <span
                        key={s}
                        className="font-mono text-[11px] px-2 py-0.5 rounded border bg-canvas text-muted border-line"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
