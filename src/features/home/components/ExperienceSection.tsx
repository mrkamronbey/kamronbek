import { Container } from "@/shared/components";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  type: string;
  desc: string;
  skills: string[];
  current?: boolean;
}

const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Freelance",
    role: "Frontend Developer",
    period: "2023 — Hozir",
    type: "Remote · Full-time",
    desc: "Turli mijozlar uchun React va Next.js asosida web ilovalar ishlab chiqish. UI/UX implementatsiya, performance optimallashtirish va API integratsiya.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind"],
    current: true,
  },
  {
    company: "IT Kompaniya",
    role: "Junior Frontend Developer",
    period: "2022 — 2023",
    type: "Toshkent · Full-time",
    desc: "Korporativ web ilovalar yaratish, mavjud loyihalarga yangi feature'lar qo'shish va komanada ishlash tajribasi.",
    skills: ["React", "JavaScript", "SCSS", "Git"],
  },
  {
    company: "O'z-o'zini o'qitish",
    role: "Frontend texnologiyalarini o'rganish",
    period: "2021 — 2022",
    type: "Self-paced",
    desc: "HTML, CSS, JavaScript asoslaridan boshlab React ekotizimini o'rganish. 10+ kichik loyiha va pet-project yaratish.",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="bg-canvas py-[100px]">
      <Container className="px-12 max-md:px-6">
        <p className="font-mono text-xs text-accent tracking-[2px] uppercase mb-3">
          {`// tajriba`}
        </p>
        <h2 className="text-[clamp(28px,4vw,44px)] font-bold tracking-[-1px] leading-[1.1] mb-16">
          Ish tarixi
        </h2>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line max-md:hidden" />

          <div className="space-y-10">
            {EXPERIENCE.map((item, i) => (
              <div key={i} className="relative grid grid-cols-[1fr_2fr] max-md:grid-cols-1 gap-8 max-md:gap-3">

                {/* Left: date + dot */}
                <div className="flex items-start gap-4 max-md:gap-3">
                  {/* Dot */}
                  <div className="relative flex-shrink-0 max-md:hidden">
                    <div
                      className={`w-4 h-4 rounded-full border-2 mt-0.5 ${
                        item.current
                          ? "bg-accent border-accent shadow-[0_0_8px_rgba(91,141,239,0.5)]"
                          : "bg-canvas border-line"
                      }`}
                    />
                  </div>
                  <div className="max-md:pt-0">
                    <p
                      className={`font-mono text-[13px] font-semibold ${
                        item.current ? "text-accent" : "text-muted"
                      }`}
                    >
                      {item.period}
                    </p>
                    {item.current && (
                      <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-success bg-success/[0.08] border border-success/20 px-2 py-0.5 rounded-full mt-1">
                        <span className="w-1 h-1 rounded-full bg-success animate-blink" />
                        Hozir
                      </span>
                    )}
                  </div>
                </div>

                {/* Right: content card */}
                <div className="bg-elevated border border-line rounded-lg p-6 hover:border-accent/20 transition-all hover:shadow-[var(--shadow-card)]">
                  <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                    <div>
                      <h3 className="text-[17px] font-bold text-content tracking-[-0.3px]">
                        {item.role}
                      </h3>
                      <p className="text-sm text-accent font-medium mt-0.5">{item.company}</p>
                    </div>
                    <span className="font-mono text-[11px] text-muted bg-canvas border border-line px-2.5 py-1 rounded-md whitespace-nowrap">
                      {item.type}
                    </span>
                  </div>

                  <p className="text-sm text-muted leading-[1.7] mb-4">{item.desc}</p>

                  <div className="flex flex-wrap gap-1.5">
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
