import Image from "next/image";
import Link from "next/link";
import {
  ShoppingCart, Layers, BarChart2, BookOpen,
  ShieldCheck, Layout, ArrowUpRight, type LucideIcon,
} from "lucide-react";
import type { Project } from "@/features/projects/data/projects";

const ICON_MAP: Record<string, LucideIcon> = {
  ShoppingCart, Layers, BarChart2, BookOpen, ShieldCheck, Layout,
};

interface Props {
  project: Project;
  index?: number;
}

export function ProjectCard({ project: p }: Props) {
  const Icon = ICON_MAP[p.iconKey] ?? Layout;

  return (
    <Link
      href={`/projects/${p.slug}`}
      className="group relative flex flex-col bg-elevated border border-line rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 no-underline"
      style={{
        ["--prj-accent" as string]: p.accent,
        ["--prj-bg" as string]: p.bgAccent,
      }}
    >
      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] z-10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
        style={{ background: `linear-gradient(90deg, ${p.accent}, transparent)` }}
      />

      {/* ── Thumbnail ── */}
      <div
        className="relative h-44 overflow-hidden flex-shrink-0"
        style={{ background: p.bgAccent }}
      >
        {p.image ? (
          <Image
            src={`/projects/${p.image}`}
            alt={p.title}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          /* Placeholder — icon + gradient */
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="absolute inset-0 opacity-40"
              style={{
                background: `radial-gradient(circle at 50% 50%, ${p.accent}33 0%, transparent 70%)`,
              }}
            />
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-[-6deg]"
              style={{ background: `${p.accent}22`, color: p.accent }}
            >
              <Icon size={32} />
            </div>
          </div>
        )}

        {/* Year badge */}
        <span
          className="absolute top-3 right-3 font-mono text-[11px] font-bold px-2 py-0.5 rounded-md"
          style={{ background: `${p.accent}22`, color: p.accent }}
        >
          {p.year}
        </span>
      </div>

      {/* ── Content ── */}
      <div className="flex flex-col flex-1 p-5">
        {/* Hover glow */}
        <div
          className="absolute inset-0 top-44 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{ background: `radial-gradient(circle at 0% 0%, ${p.bgAccent} 0%, transparent 70%)` }}
        />

        {/* Icon + title + arrow */}
        <div className="flex items-start gap-3 mb-2.5">
          <div
            className="w-9 h-9 rounded-md flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-105"
            style={{ background: p.bgAccent, color: p.accent }}
          >
            <Icon size={17} />
          </div>
          <div className="flex-1 flex items-start justify-between gap-1 min-w-0 pt-1">
            <h3 className="text-[15px] font-bold tracking-[-0.3px] leading-tight">
              <span className="text-content group-hover:[color:var(--prj-accent)] transition-colors duration-300">
                {p.title}
              </span>
            </h3>
            <ArrowUpRight
              size={14}
              className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              style={{ color: p.accent }}
            />
          </div>
        </div>

        <p className="text-sm text-muted leading-[1.7] mb-4 flex-1">{p.desc}</p>

        {/* Tags */}
        <div className="flex gap-1.5 flex-wrap">
          {p.tags.map((t) => (
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
