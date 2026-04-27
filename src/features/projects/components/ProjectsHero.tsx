import { Container } from "@/shared/components";

export function ProjectsHero() {
  return (
    <section className="relative overflow-hidden bg-canvas pt-32 pb-20">
      {/* Background grid */}
      <div className="hero-bg-grid absolute inset-0 z-0" />
      {/* Glow */}
      <div className="glow-blue absolute -top-[150px] -left-[100px] w-[600px] h-[600px] z-0" />
      <div className="glow-purple absolute top-[50px] -right-[100px] w-[400px] h-[400px] z-0" />

      <Container className="relative z-10 px-12 max-md:px-6">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-accent mb-6 border border-accent/30 px-3.5 py-1.5 rounded-full bg-accent/[0.06]">
          <span className="w-1.5 h-1.5 bg-accent rounded-full animate-blink" />
          6 ta loyiha
        </div>

        <h1 className="text-[clamp(36px,5vw,64px)] font-bold leading-[1.08] tracking-[-2px] mb-5 max-w-[700px]">
          Tanlangan{" "}
          <span className="text-accent">ishlarim</span>
        </h1>

        <p className="text-lg text-muted leading-[1.7] max-w-[520px]">
          Real loyihalar, amaliy tajriba va texnik yechimlar — har biri
          muayyan muammoni hal qilish uchun yaratilgan.
        </p>

        {/* Stats */}
        <div className="flex gap-10 max-md:gap-6 mt-12">
          {[
            { num: "6+",  label: "Yakunlangan loyiha" },
            { num: "3+",  label: "Yil tajriba" },
            { num: "10+", label: "Texnologiyalar" },
          ].map(({ num, label }) => (
            <div key={label}>
              <div className="font-mono text-[26px] font-bold text-content tracking-[-1px]">{num}</div>
              <div className="text-[13px] text-muted mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
