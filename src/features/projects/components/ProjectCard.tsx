import {
  ShoppingCart, Layers, BarChart2, BookOpen,
  ShieldCheck, Layout, ArrowUpRight, type LucideIcon,
} from "lucide-react";
import type { Project } from "../data/projects";

const ICON_MAP: Record<string, LucideIcon> = {
  ShoppingCart, Layers, BarChart2, BookOpen, ShieldCheck, Layout,
};

interface Props {
  project: Project;
  index: number;
}

export function ProjectCard({ project: p, index }: Props) {
  const Icon = ICON_MAP[p.iconKey] ?? Layout;

  return (
    <div
      className="group relative bg-elevated border border-line rounded-lg p-6 transition-all duration-300 overflow-hidden cursor-default"
      style={{
        ["--prj-accent" as string]: p.accent,
        ["--prj-bg" as string]: p.bgAccent,
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: `radial-gradient(circle at 0% 0%, ${p.bgAccent} 0%, transparent 65%)` }}
      />

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
        style={{ background: `linear-gradient(90deg, ${p.accent}, transparent)` }}
      />

      {/* Year */}
      <span className="absolute top-5 right-5 font-mono text-[11px] text-muted/40 font-bold select-none">
        {p.year}
      </span>

      {/* Icon */}
      <div
        className="w-11 h-11 rounded-lg flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-[-6deg]"
        style={{ background: p.bgAccent, color: p.accent }}
      >
        <Icon size={20} />
      </div>

      {/* Title + arrow */}
      <div className="flex items-start justify-between gap-2 mb-2.5">
        <h3 className="text-[16px] font-bold tracking-[-0.3px]">
          <span className="text-content group-hover:[color:var(--prj-accent)] transition-colors duration-300">
            {p.title}
          </span>
        </h3>
        <ArrowUpRight
          size={15}
          className="flex-shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          style={{ color: p.accent }}
        />
      </div>

      <p className="text-sm text-muted leading-[1.7] mb-5">{p.desc}</p>

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
  );
}
