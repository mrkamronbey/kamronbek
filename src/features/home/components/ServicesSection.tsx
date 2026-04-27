import Link from "next/link";
import {
  Monitor, Palette, Zap, Plug, Smartphone, SearchCode,
  ArrowUpRight,
} from "lucide-react";
import { Container } from "@/shared/components";

const SERVICES = [
  {
    icon: Monitor,
    accent: "#5b8def",
    bgAccent: "rgba(91,141,239,0.12)",
    title: "Web ilovalar yaratish",
    desc: "React va Next.js asosida tezkor, zamonaviy va SEO-optimallashtirilgan web ilovalar.",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    icon: Palette,
    accent: "#a78bfa",
    bgAccent: "rgba(167,139,250,0.12)",
    title: "UI/UX Implementation",
    desc: "Figma dizaynlarini piksel-perfekt kodga aylantirish. Responsive va accessible interfeyslar.",
    tags: ["Tailwind CSS", "Figma", "SCSS"],
  },
  {
    icon: Zap,
    accent: "#f59e0b",
    bgAccent: "rgba(245,158,11,0.12)",
    title: "Performance optimallashtirish",
    desc: "Mavjud loyihalarni tezlashtirish: bundle size, lazy loading, Core Web Vitals yaxshilash.",
    tags: ["Lighthouse", "Webpack", "Vite"],
  },
  {
    icon: Plug,
    accent: "#34d399",
    bgAccent: "rgba(52,211,153,0.12)",
    title: "API integratsiya",
    desc: "REST API va GraphQL bilan ishlash, backend bilan to'liq integratsiya va state management.",
    tags: ["REST API", "GraphQL", "Redux"],
  },
  {
    icon: Smartphone,
    accent: "#f472b6",
    bgAccent: "rgba(244,114,182,0.12)",
    title: "Mobile-first dizayn",
    desc: "Barcha qurilmalarda mukammal ko'rinadigan responsive interfeyslar yaratish.",
    tags: ["Responsive", "CSS Grid", "Flexbox"],
  },
  {
    icon: SearchCode,
    accent: "#fb923c",
    bgAccent: "rgba(251,146,60,0.12)",
    title: "Kod audit va konsultatsiya",
    desc: "Loyiha kodini tekshirish, best practices joriy etish va arxitektura bo'yicha maslahat.",
    tags: ["Code Review", "Architecture", "Mentoring"],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-surface py-[100px]">
      <Container className="px-12 max-md:px-6">
        <p className="font-mono text-xs text-accent tracking-[2px] uppercase mb-3">
          {`// xizmatlar`}
        </p>
        <div className="flex justify-between items-end flex-wrap gap-4 mb-16">
          <div>
            <h2 className="text-[clamp(28px,4vw,44px)] font-bold tracking-[-1px] leading-[1.1] mb-4">
              Nima qila olaman?
            </h2>
            <p className="text-base text-muted leading-[1.7] max-w-[480px]">
              Frontend muhandisi sifatida taklif etadigan asosiy xizmatlarim
            </p>
          </div>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-accent text-white font-semibold text-sm px-5 py-2.5 rounded-lg no-underline transition-all hover:bg-[#4a7de0] hover:-translate-y-px"
          >
            Buyurtma berish →
          </Link>
        </div>

        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
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
                      {s.title}
                    </span>
                  </h3>
                  <ArrowUpRight
                    size={15}
                    className="flex-shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    style={{ color: s.accent }}
                  />
                </div>

                <p className="text-sm text-muted leading-[1.7] mb-5">{s.desc}</p>

                {/* Tags */}
                <div className="flex gap-1.5 flex-wrap">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11px] px-2 py-0.5 rounded border bg-canvas text-muted border-line transition-colors duration-300 group-hover:border-[color:var(--svc-accent)]/20"
                    >
                      {t}
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
