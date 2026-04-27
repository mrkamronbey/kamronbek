import Link from "next/link";
import { Code2, Braces, Palette, Zap, Clock, ArrowRight, type LucideIcon } from "lucide-react";
import type { BlogPost } from "@/features/blog/data/blog";

/* Category → icon, accent, bg */
const CATEGORY_META: Record<string, { icon: LucideIcon; accent: string; bg: string }> = {
  React:       { icon: Code2,   accent: "#61dafb", bg: "rgba(97,218,251,0.10)" },
  TypeScript:  { icon: Braces,  accent: "#5b8def", bg: "rgba(91,141,239,0.10)" },
  CSS:         { icon: Palette, accent: "#a78bfa", bg: "rgba(167,139,250,0.10)" },
  Performance: { icon: Zap,     accent: "#34d399", bg: "rgba(52,211,153,0.10)" },
};

function getMeta(category: string) {
  return CATEGORY_META[category] ?? { icon: Code2, accent: "#5b8def", bg: "rgba(91,141,239,0.10)" };
}

interface Props {
  post: BlogPost;
  featured?: boolean;
}

export function BlogCard({ post, featured = false }: Props) {
  const { icon: Icon, accent, bg } = getMeta(post.category);

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group relative flex flex-col bg-elevated border border-line rounded-lg overflow-hidden transition-all duration-300 no-underline hover:-translate-y-1 hover:border-[color:var(--blog-accent)]/30 ${
        featured ? "md:col-span-2" : ""
      }`}
      style={{ ["--blog-accent" as string]: accent }}
    >
      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] z-10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
        style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }}
      />

      {/* ── Thumbnail ── */}
      <div
        className={`relative flex items-center justify-center overflow-hidden ${featured ? "h-52" : "h-44"}`}
        style={{ background: bg }}
      >
        {/* Glow */}
        <div
          className="absolute inset-0"
          style={{ background: `radial-gradient(circle at 50% 60%, ${accent}20 0%, transparent 70%)` }}
        />

        {/* Icon */}
        <div
          className="relative w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-[-6deg]"
          style={{ background: `${accent}22`, color: accent }}
        >
          <Icon size={28} />
        </div>

        {/* Category badge */}
        <div className="absolute top-3 left-4">
          <span
            className="font-mono text-[11px] px-2.5 py-1 rounded-md border font-medium"
            style={{ color: accent, background: `${accent}18`, borderColor: `${accent}30` }}
          >
            {post.category}
          </span>
        </div>

        {/* Read time */}
        <div className="absolute top-3 right-4 flex items-center gap-1 bg-elevated/80 backdrop-blur-sm border border-line px-2.5 py-1 rounded-md">
          <Clock size={10} className="text-muted" />
          <span className="font-mono text-[11px] text-muted">{post.readTime}</span>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="flex flex-col flex-1 p-5">
        {/* Hover glow bg */}
        <div
          className="absolute inset-0 top-44 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{ background: `radial-gradient(circle at 0% 0%, ${bg} 0%, transparent 70%)` }}
        />

        <p className="font-mono text-[11px] text-muted mb-2.5">{post.date}</p>

        <div className="flex items-start justify-between gap-2 mb-2.5">
          <h3 className={`font-bold leading-[1.35] tracking-[-0.3px] flex-1 ${featured ? "text-[18px]" : "text-[15px]"}`}>
            <span
              className="text-content transition-colors duration-300"
              style={{ ["--tw-text-opacity" as string]: "1" }}
            >
              <span className="group-hover:[color:var(--blog-accent)]">{post.title}</span>
            </span>
          </h3>
          <ArrowRight
            size={15}
            className="flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300"
            style={{ color: accent }}
          />
        </div>

        <p className="text-sm text-muted leading-[1.7] flex-1 mb-4">{post.excerpt}</p>

        {/* Tags */}
        <div className="flex gap-1.5 flex-wrap pt-4 border-t border-line">
          {post.tags.map((t) => (
            <span
              key={t}
              className="font-mono text-[11px] px-2 py-0.5 rounded border bg-canvas text-muted border-line"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
