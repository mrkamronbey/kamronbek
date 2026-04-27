import { Container } from "@/shared/components";

const CONTACTS = [
  { icon: "✉",  label: "Email",    value: "komronbek.sunnatov@mail.ru",       href: "mailto:komronbek.sunnatov@mail.ru" },
  { icon: "in", label: "LinkedIn", value: "kamronbek-sunnatov",               href: "https://www.linkedin.com/in/kamronbek-sunnatov-042922371" },
  { icon: "⌥",  label: "GitHub",   value: "github.com/sunnatoff",             href: "https://github.com/sunnatoff" },
  { icon: "✈",  label: "Telegram", value: "@sunnatoff",                       href: "https://t.me/sunnatoff" },
];

export function ContactSection() {
  return (
    <section id="contact" className="bg-surface py-[100px]">
      <Container className="px-12 max-md:px-6 text-center">
        <div className="max-w-[600px] mx-auto">
          <p className="font-mono text-xs text-accent tracking-[2px] uppercase mb-3">// bog&apos;lanish</p>
          <h2 className="text-[clamp(28px,4vw,44px)] font-bold tracking-[-1px] leading-[1.1] mb-4">
            Gaplashaylik
          </h2>
          <p className="text-base text-muted leading-[1.7] max-w-[500px] mx-auto">
            Yangi loyiha, freelance ish yoki shunchaki salom aytmoqchimisiz? Doim ochiqman!
          </p>

          <div className="mt-12 bg-elevated border border-line rounded-xl p-12 max-md:p-6">
            <div className="flex flex-col gap-3">
              {CONTACTS.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 bg-surface border border-line rounded-md no-underline text-content text-[15px] font-medium text-left transition-all hover:border-accent/30 hover:bg-accent/[0.05]"
                >
                  <div className="w-9 h-9 bg-accent/[0.12] rounded-lg flex items-center justify-center text-base font-mono flex-shrink-0">
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-xs text-muted font-mono">{c.label}</p>
                    <p className="text-sm font-semibold text-content">{c.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
