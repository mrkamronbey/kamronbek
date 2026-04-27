import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/shared/components";


export default function NotFound() {
  return (
    <div className="min-h-screen bg-canvas relative overflow-hidden flex items-center">
      <div className="hero-bg-grid absolute inset-0 z-0" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full z-0 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(91,141,239,0.1) 0%, transparent 70%)" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full z-0 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(167,139,250,0.07) 0%, transparent 70%)" }}
      />
      <div
        className="absolute inset-0 flex items-center justify-center z-[1] pointer-events-none select-none"
        aria-hidden
      >
        <span
          className="font-bold leading-none absolute"
          style={{
            fontSize: "clamp(220px, 36vw, 480px)",
            letterSpacing: "-0.06em",
            WebkitTextStroke: "1.5px rgba(91,141,239,0.2)",
            color: "transparent",
          }}
        >
          404
        </span>
        <span
          className="font-bold leading-none"
          style={{
            fontSize: "clamp(220px, 36vw, 480px)",
            letterSpacing: "-0.06em",
            color: "rgba(91,141,239,0.04)",
          }}
        >
          404
        </span>
      </div>

      <Container className="relative z-10 px-12 max-md:px-6 flex flex-col items-center text-center">

        <div className="inline-flex items-center gap-2 font-mono text-[12px] text-accent bg-accent/[0.08] border border-accent/20 px-3.5 py-1.5 rounded-full mb-6">
          <span className="w-1.5 h-1.5 bg-accent/70 rounded-full" />
          Sahifa topilmadi
        </div>

        <h1 className="text-[clamp(24px,3.5vw,42px)] font-bold tracking-[-1.5px] mb-4">
          Bu sahifa mavjud emas
        </h1>

        <p className="text-base text-muted leading-[1.7] max-w-[400px] mb-10">
          Siz qidirayotgan sahifa o&apos;chirilgan, ko&apos;chirilgan yoki
          hech qachon mavjud bo&apos;lmagan.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-accent text-white font-semibold text-[14px] px-7 py-3.5 rounded-lg no-underline transition-all hover:bg-[#4a7de0] hover:-translate-y-px mb-10"
        >
          <ArrowLeft size={16} />
          Bosh sahifaga qaytish
        </Link>

      </Container>
    </div>
  );
}
