import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "./Container";
import { ContactForm } from "./ContactForm";
import { SocialIcon } from "./SocialIcon";
import { SOCIALS, PERSON, mailHref, telHref } from "@/shared/site";

export function ContactSection() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="relative bg-canvas py-[100px] overflow-hidden">
      <div className="glow-blue absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] opacity-25 -z-0" />

      <Container className="relative z-10 px-12 max-md:px-6">
        <p className="font-mono text-xs text-accent tracking-[2px] uppercase mb-6 text-center">
          {t("tag")}
        </p>

        <h2 className="whitespace-nowrap max-md:whitespace-normal text-[clamp(24px,3.8vw,52px)] font-bold tracking-[-2px] leading-[1.1] text-center mb-16">
          <span className="text-accent2">{t("idea")}</span>
          <span className="font-mono text-muted mx-4 text-[0.7em] font-normal">+</span>
          <span className="text-accent">{t("code")}</span>
        </h2>

        <div className="grid grid-cols-[1fr_1.3fr] max-lg:grid-cols-1 gap-16 text-left items-start">

          {/* Left — direct contact + socials + badge */}
          <div>
            <p className="text-[16px] text-muted leading-[1.8] mb-6">
              {t("lead")}
            </p>

            {/* Direct contact: email + phone */}
            <div className="space-y-3 mb-3">
              <a
                href={mailHref}
                className="flex items-center gap-3 p-3.5 bg-surface border border-line rounded-lg no-underline transition-all hover:border-accent/30 hover:bg-accent/[0.03] group"
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 bg-accent/10 text-accent transition-transform group-hover:scale-105">
                  <Mail size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-muted font-mono">Email</p>
                  <p className="text-[13px] font-semibold text-content truncate">{PERSON.email}</p>
                </div>
                <ArrowUpRight size={13} className="ml-auto text-muted opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </a>

              {PERSON.phones.map((phone) => (
                <a
                  key={phone}
                  href={telHref(phone)}
                  className="flex items-center gap-3 p-3.5 bg-surface border border-line rounded-lg no-underline transition-all hover:border-accent/30 hover:bg-accent/[0.03] group"
                >
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 bg-success/10 text-success transition-transform group-hover:scale-105">
                    <Phone size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] text-muted font-mono">Phone</p>
                    <p className="text-[13px] font-semibold text-content truncate">{phone}</p>
                  </div>
                  <ArrowUpRight size={13} className="ml-auto text-muted opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                </a>
              ))}
            </div>

            {/* Social cards */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {SOCIALS.map((s) => (
                <a
                  key={s.platform}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3.5 bg-surface border border-line rounded-lg no-underline transition-all hover:border-accent/30 hover:bg-accent/[0.03] group"
                >
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105 ${s.color}`}>
                    <SocialIcon platform={s.platform} size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] text-muted font-mono">{s.label}</p>
                    <p className="text-[13px] font-semibold text-content truncate">{s.value}</p>
                  </div>
                  <ArrowUpRight size={13} className="ml-auto text-muted opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                </a>
              ))}
            </div>

            <div className="inline-flex items-center gap-2 text-[13px] text-success bg-success/[0.08] border border-success/20 px-3.5 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-success animate-blink" />
              {t("open")}
            </div>
          </div>

          {/* Right — Contact Form */}
          <div className="bg-elevated border border-line rounded-xl p-8 max-md:p-5">
            <h3 className="text-[17px] font-bold mb-1">{t("form_title")}</h3>
            <p className="text-sm text-muted mb-6">{t("form_sub")}</p>
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
