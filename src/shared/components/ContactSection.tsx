import { ArrowUpRight } from "lucide-react";
import { Container } from "./Container";
import { ContactForm } from "./ContactForm";

/* Brand ikonkalar — lucide-react da mavjud emas */
function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8-1.7 8.02c-.12.57-.46.71-.93.44l-2.58-1.9-1.24 1.19c-.14.14-.25.25-.51.25l.18-2.62 4.72-4.26c.2-.18-.04-.28-.32-.1L7.37 14.8l-2.53-.79c-.55-.17-.56-.55.11-.81l9.89-3.81c.46-.17.86.11.71.81z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const CONTACTS = [
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: "komronbek-sunnatov",
    href: "https://www.linkedin.com/in/komronbek-sunnatov-042922371/",
    color: "text-[#0a66c2] bg-[#0a66c2]/10",
  },
  {
    icon: GitHubIcon,
    label: "GitHub",
    value: "mrkamronbek",
    href: "https://github.com/mrkamronbek",
    color: "text-content bg-content/10",
  },
  {
    icon: TelegramIcon,
    label: "Telegram",
    value: "@sunnatoff_dev",
    href: "https://t.me/sunnatoff_dev",
    color: "text-[#2aabee] bg-[#2aabee]/10",
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    value: "sunnatoff.dev",
    href: "https://www.instagram.com/sunnatoff.dev/",
    color: "text-[#e1306c] bg-[#e1306c]/10",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="relative bg-canvas py-[100px] overflow-hidden">
      <div className="glow-blue absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] opacity-25 -z-0" />

      <Container className="relative z-10 px-12 max-md:px-6">
        <p className="font-mono text-xs text-accent tracking-[2px] uppercase mb-6 text-center">
          {`// bog'lanish`}
        </p>

        <h2 className="whitespace-nowrap max-md:whitespace-normal text-[clamp(24px,3.8vw,52px)] font-bold tracking-[-2px] leading-[1.1] text-center mb-16">
          <span className="text-accent2">Sizning g&apos;oyangiz</span>
          <span className="font-mono text-muted mx-4 text-[0.7em] font-normal">+</span>
          <span className="text-accent">mening kodim</span>
        </h2>

        <div className="grid grid-cols-[1fr_1.3fr] max-lg:grid-cols-1 gap-16 text-left items-start">

          {/* Left — links + badge */}
          <div>
            <p className="text-[16px] text-muted leading-[1.8] mb-8">
              Yangi loyiha, freelance hamkorlik yoki shunchaki salomlashmoqchimisiz?
              Har qanday savol bilan murojaat qiling.
            </p>

            {/* Social cards */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {CONTACTS.map((c) => {
                const Icon = c.icon;
                return (
                  <a
                    key={c.label}
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 p-3.5 bg-surface border border-line rounded-lg no-underline transition-all hover:border-accent/30 hover:bg-accent/[0.03] group"
                  >
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105 ${c.color}`}>
                      <Icon />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] text-muted font-mono">{c.label}</p>
                      <p className="text-[13px] font-semibold text-content truncate">{c.value}</p>
                    </div>
                    <ArrowUpRight size={13} className="ml-auto text-muted opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  </a>
                );
              })}
            </div>

            <div className="inline-flex items-center gap-2 text-[13px] text-success bg-success/[0.08] border border-success/20 px-3.5 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-success animate-blink" />
              Yangi loyihalarga ochiqman
            </div>
          </div>

          {/* Right — Contact Form */}
          <div className="bg-elevated border border-line rounded-xl p-8 max-md:p-5">
            <h3 className="text-[17px] font-bold mb-1">Xabar yuboring</h3>
            <p className="text-sm text-muted mb-6">Odatda 24 soat ichida javob beraman.</p>
            <ContactForm />
          </div>
          </div>
      </Container>
    </section>
  );
}
