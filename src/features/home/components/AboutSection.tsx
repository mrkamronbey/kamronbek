import Image from "next/image";
import { Code2, Palette, Wrench, Server } from "lucide-react";
import { Container } from "@/shared/components";

const SKILLS = [
  {
    icon: Code2,
    cat: "Frontend",
    list: ["React", "Next.js", "TypeScript", "Vue.js"],
    color: "text-accent bg-accent/10",
  },
  {
    icon: Palette,
    cat: "Styling",
    list: ["Tailwind CSS", "SCSS", "Styled Components"],
    color: "text-accent2 bg-accent2/10",
  },
  {
    icon: Wrench,
    cat: "Tools",
    list: ["Git", "Vite", "Webpack", "Storybook"],
    color: "text-[#f59e0b] bg-[#f59e0b]/10",
  },
  {
    icon: Server,
    cat: "DevOps",
    list: ["Docker", "CI/CD", "Vercel", "Netlify"],
    color: "text-success bg-success/10",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="bg-canvas py-[100px]">
      <Container className="px-12 max-md:px-6">
        <p className="font-mono text-xs text-accent tracking-[2px] uppercase mb-3">{`// haqimda`}</p>
        <h2 className="text-[clamp(28px,4vw,44px)] font-bold tracking-[-1px] leading-[1.1]">
          Frontend hunarmand
        </h2>

        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-20 max-md:gap-10 items-center mt-16">

          {/* ── Left: About text ── */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <Image
                src="/myphoto_bg.png"
                alt="Kamronbek Sunnatov"
                width={56}
                height={56}
                className="w-14 h-14 rounded-full object-cover object-top border-2 border-accent flex-shrink-0"
              />
              <div>
                <p className="font-bold text-lg text-content">Kamronbek Sunnatov</p>
                <p className="text-[13px] text-muted font-mono">Frontend Engineer</p>
              </div>
            </div>

            <p className="text-base text-muted leading-[1.8] mb-5">
              Men <strong className="text-content font-semibold">Kamronbek Sunnatov</strong>{" "}
              — veb-ilovalar yaratishni sevaman. React ekotizimasida ishlashda kuchli
              tajribaga egaman va foydalanuvchiga qulay, tezkor interfeyslar yaratishga
              ixtisoslashganman.
            </p>
            <p className="text-base text-muted leading-[1.8] mb-5">
              Har bir loyihada{" "}
              <strong className="text-content font-semibold">kod sifatiga</strong>,{" "}
              <strong className="text-content font-semibold">performance</strong> va{" "}
              <strong className="text-content font-semibold">accessibility</strong>{" "}
              ga alohida e&apos;tibor beraman. Team work va texnik muammolarni ijodiy
              yechishni yaxshi ko&apos;raman.
            </p>
            <p className="text-base text-muted leading-[1.8]">
              Bo&apos;sh vaqtimda texnik blog yozaman, open-source loyihalarda qatnashaman
              va yangi texnologiyalarni o&apos;rganaman.
            </p>

            <div className="inline-flex items-center gap-1.5 text-[13px] text-success bg-success/[0.08] border border-success/20 px-3.5 py-1.5 rounded-full mt-6">
              <span className="w-1.5 h-1.5 rounded-full bg-success animate-blink" />
              Yangi imkoniyatlarga ochiqman
            </div>
          </div>

          {/* ── Right: Skill cards ── */}
          <div className="grid grid-cols-2 gap-4">
            {SKILLS.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.cat}
                  className="group bg-surface border border-line rounded-lg p-5 transition-all duration-200 hover:border-accent/30 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]"
                >
                  {/* Icon + category */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-9 h-9 rounded-md flex items-center justify-center flex-shrink-0 ${s.color}`}>
                      <Icon size={17} />
                    </div>
                    <p className="font-mono text-[11px] font-semibold uppercase tracking-[1.5px] text-muted">
                      {s.cat}
                    </p>
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {s.list.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[11px] px-2 py-0.5 rounded bg-elevated border border-line text-content/80"
                      >
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
