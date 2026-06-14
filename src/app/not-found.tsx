import Link from "next/link";
import { ArrowLeft } from "lucide-react";

/**
 * Root (locale-less) not-found fallback. Localized 404s are handled by
 * src/app/[locale]/not-found.tsx; this only shows for paths outside any locale.
 */
export default function NotFound() {
  return (
    <div className="min-h-screen bg-canvas relative overflow-hidden flex items-center justify-center text-center">
      <div className="hero-bg-grid absolute inset-0 z-0" />
      <div className="relative z-10 px-6 flex flex-col items-center">
        <span
          className="font-bold leading-none mb-6"
          style={{
            fontSize: "clamp(120px, 22vw, 240px)",
            letterSpacing: "-0.06em",
            color: "rgba(91,141,239,0.08)",
            WebkitTextStroke: "1.5px rgba(91,141,239,0.2)",
          }}
        >
          404
        </span>
        <h1 className="text-[clamp(20px,3vw,32px)] font-bold tracking-[-1px] mb-3">
          Page not found
        </h1>
        <p className="text-base text-muted leading-[1.7] max-w-[380px] mb-8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-accent text-white font-semibold text-[14px] px-7 py-3.5 rounded-lg no-underline transition-all hover:bg-[#4a7de0] hover:-translate-y-px"
        >
          <ArrowLeft size={16} />
          Back to home
        </Link>
      </div>
    </div>
  );
}
