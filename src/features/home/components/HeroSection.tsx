"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Mail, Code2, Paintbrush, BarChart3, Download } from "lucide-react";
import { Container, SocialIcon } from "@/shared/components";
import { SOCIALS, mailHref } from "@/shared/site";

export function HeroSection() {
  const t = useTranslations("hero");

  const SKILL_CARDS = [
    { icon: Code2,      color: "text-accent   bg-accent/10",  label: t("skill1_label"), sub: t("skill1_sub") },
    { icon: Paintbrush, color: "text-accent2  bg-accent2/10", label: t("skill2_label"), sub: t("skill2_sub") },
    { icon: BarChart3,  color: "text-success  bg-success/10", label: t("skill3_label"), sub: t("skill3_sub") },
  ];

  const STATS = [
    { num: "3+",  label: t("stat_exp") },
    { num: "25+", label: t("stat_projects") },
    { num: "10+", label: t("stat_tech") },
  ];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-canvas">
      <div className="hero-bg-grid absolute inset-0 z-0" />
      <div className="glow-blue   absolute top-[-10%] left-[10%]  w-[700px] h-[700px] opacity-25 z-0" />
      <div className="glow-purple absolute top-[20%]  right-[5%]  w-[400px] h-[400px] opacity-20 z-0" />

      {/* ── Yaltiroq halqa — faqat desktop ── */}
      <div className="max-md:hidden absolute inset-0 flex items-center justify-center z-[5] pointer-events-none">
        {/* Tashqi katta halqa */}
        <div
          className="absolute w-[620px] h-[620px] rounded-full"
          style={{
            border: "1px solid rgba(91,141,239,0.18)",
            boxShadow: "0 0 60px 8px rgba(91,141,239,0.08), inset 0 0 60px 8px rgba(91,141,239,0.04)",
          }}
        />
        {/* Ichki kichik halqa */}
        <div
          className="absolute w-[480px] h-[480px] rounded-full"
          style={{
            border: "1px solid rgba(167,139,250,0.12)",
            boxShadow: "0 0 40px 4px rgba(167,139,250,0.06)",
          }}
        />
        {/* Markaziy glow spot */}
        <div
          className="absolute w-[340px] h-[340px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(91,141,239,0.07) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Absolute photo — faqat desktop */}
      <div className="max-md:hidden absolute inset-0 flex items-end justify-center z-10 pointer-events-none">
        <Image
          src="/myphoto.png"
          alt="Komronbek Sunnatov"
          width={700}
          height={900}
          priority
          className="h-[92vh] w-auto max-w-none object-contain object-bottom select-none"
        />
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-40 z-[15] pointer-events-none"
        style={{
          background: "linear-gradient(to top, var(--color-canvas) 0%, transparent 100%)",
        }}
      />

      <Container className="relative z-20 min-h-screen grid grid-cols-[1fr_1fr] max-md:grid-cols-1 px-12 max-md:px-6">

        {/* LEFT */}
        <div className="flex flex-col justify-center py-28 max-md:pt-24 max-md:pb-16">

          <p className="font-mono text-[13px] text-muted mb-1 tracking-widest uppercase">{t("greeting")}</p>

          <h1 className="text-[clamp(34px,4.5vw,62px)] font-bold tracking-[-2px] leading-[1.06] mb-5">
            Komronbek<br />
            <span className="text-accent">Sunnatov</span>
          </h1>

          <div className="inline-flex items-center gap-2 font-mono text-[12px] text-accent bg-accent/[0.08] border border-accent/20 px-3.5 py-1.5 rounded-full mb-5 self-start">
            <span className="w-1.5 h-1.5 bg-success rounded-full animate-blink" />
            {t("available")}
          </div>

          <p className="text-[15px] text-muted leading-[1.8] mb-7 max-w-[320px]">
            {t("desc")}
          </p>

          <div className="flex gap-2 mb-8">
            <a
              href={mailHref}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:-translate-y-0.5 hover:shadow-lg bg-accent text-white hover:bg-[#4a7de0]"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
            {SOCIALS.map((s) => (
              <a
                key={s.platform}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:-translate-y-0.5 hover:shadow-lg bg-elevated text-muted hover:text-content border border-line"
              >
                <SocialIcon platform={s.platform} size={16} />
              </a>
            ))}
          </div>

          {/* Mobile buttons */}
          <div className="md:hidden flex flex-col gap-3 w-full max-w-[320px] mb-8">
            <Link
              href="#projects"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-accent text-white font-semibold text-[14px] px-5 py-3 rounded-lg no-underline hover:bg-[#4a7de0] transition-all"
            >
              {t("btn_projects")}
            </Link>
            <Link
              href="/#contact"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-surface text-content font-medium text-[14px] px-5 py-3 rounded-lg no-underline border border-accent/40 hover:border-accent transition-all"
            >
              {t("btn_contact")}
            </Link>
          </div>
          <a
            href="/cv.pdf"
            download
            className="md:hidden inline-flex items-center justify-center gap-2 font-mono text-[13px] text-muted border border-line px-5 py-2.5 rounded-lg no-underline transition-all hover:text-content hover:border-accent/40"
          >
            <Download size={14} />
            {t("cv")}
          </a>

          {/* Mobile stats */}
          <div className="md:hidden flex gap-8 mb-10">
            {STATS.map(({ num, label }) => (
              <div key={label}>
                <div className="font-mono text-[24px] font-bold text-content tracking-[-1px]">{num}</div>
                <div className="text-[12px] text-muted mt-0.5">{label}</div>
              </div>
            ))}
          </div>

          {/* Mobile photo — matndan pastda, centerda */}
          <div className="md:hidden flex justify-center">
            <div className="relative">
              <div
                className="w-[280px] h-[340px] rounded-2xl overflow-hidden border border-line"
                style={{ boxShadow: "0 0 40px 8px rgba(91,141,239,0.15)" }}
              >
                <Image
                  src="/myphoto_bg.png"
                  alt="Komronbek Sunnatov"
                  width={250}
                  height={300}
                  priority
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div
                className="absolute inset-[-14px] rounded-[28px] pointer-events-none"
                style={{ border: "1px solid rgba(91,141,239,0.18)" }}
              />
            </div>
          </div>

        </div>

        <div className="flex flex-col justify-center items-end py-28 gap-3 max-md:hidden">

          {/* Skill cards — kengaytirilgan, matn bir qatorda */}
          {SKILL_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.label}
                className="flex items-center gap-4 bg-elevated/70 backdrop-blur-xl border border-line rounded-xl px-6 py-4 w-[320px] shadow-[var(--shadow-card)] hover:-translate-x-1 hover:-translate-y-0.5 transition-transform cursor-default"
              >
                <div className={`w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 ${card.color}`}>
                  <Icon size={20} />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-[14px] text-content">{card.label}</p>
                  <p className="font-mono text-[11px] text-muted mt-0.5 whitespace-nowrap">{card.sub}</p>
                </div>
              </div>
            );
          })}

          {/* Available badge */}
          <div className="w-[320px] flex items-center gap-2 bg-success/[0.08] border border-success/20 text-success text-[12px] font-mono px-4 py-2.5 rounded-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-success animate-blink flex-shrink-0" />
            {t("open")}
          </div>

          {/* Buttons */}
          <div className="flex gap-3 w-[320px]">
            <Link
              href="#projects"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-accent text-white font-semibold text-[14px] px-5 py-3 rounded-lg no-underline hover:bg-[#4a7de0] transition-all hover:-translate-y-px"
            >
              {t("btn_projects")}
            </Link>
            <Link
              href="/#contact"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-surface text-content font-medium text-[14px] px-5 py-3 rounded-lg no-underline border border-accent/40 hover:border-accent hover:bg-accent/[0.08] transition-all"
            >
              {t("btn_contact")}
            </Link>
          </div>

          {/* CV download */}
          <a
            href="/cv.pdf"
            download
            className="w-[320px] inline-flex items-center justify-center gap-2 font-mono text-[13px] text-muted border border-line px-5 py-2.5 rounded-lg no-underline transition-all hover:text-content hover:border-accent/40 hover:bg-accent/[0.04]"
          >
            <Download size={14} />
            {t("cv")}
          </a>
        </div>
      </Container>

    </section>
  );
}
