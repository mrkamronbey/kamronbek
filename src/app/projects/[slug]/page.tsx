import NextImage from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ShoppingCart, Layers, BarChart2, BookOpen,
  ShieldCheck, Layout, ArrowLeft, ExternalLink,
  CheckCircle2, type LucideIcon,
} from "lucide-react";

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}
import { Container } from "@/shared/components";
import { getProjectBySlug, projects } from "@/features/projects/data/projects";

const ICON_MAP: Record<string, LucideIcon> = {
  ShoppingCart, Layers, BarChart2, BookOpen, ShieldCheck, Layout,
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return { title: `${project.title} — Sunnatoff.dev` };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const Icon = ICON_MAP[project.iconKey] ?? Layout;

  return (
    <div className="min-h-screen bg-canvas">
      {/* Header */}
      <div
        className="py-20 pt-32 relative overflow-hidden"
        style={{ background: project.bgAccent }}
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: `radial-gradient(ellipse at 30% 50%, ${project.accent}40 0%, transparent 70%)` }}
        />
        <Container className="relative px-12 max-md:px-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-content transition-colors mb-8 no-underline"
          >
            <ArrowLeft size={15} /> Barcha loyihalar
          </Link>

          <div className="flex items-start gap-6 max-md:flex-col">
            <div
              className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: `${project.accent}22`, color: project.accent }}
            >
              <Icon size={30} />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span
                  className="font-mono text-[12px] px-2.5 py-1 rounded-md"
                  style={{ color: project.accent, background: `${project.accent}18` }}
                >
                  {project.year}
                </span>
              </div>
              <h1 className="text-[clamp(28px,4vw,48px)] font-bold tracking-[-1.5px] leading-[1.1] mb-3">
                {project.title}
              </h1>
              <p className="text-base text-muted leading-[1.7] max-w-[600px]">{project.desc}</p>
            </div>
          </div>
        </Container>
      </div>

      {/* Preview image */}
      <Container className="px-12 max-md:px-6 -mt-6">
        <div
          className="w-full h-[300px] max-md:h-[200px] rounded-2xl overflow-hidden border border-line relative flex items-center justify-center"
          style={{ background: project.bgAccent }}
        >
          {project.image ? (
            <NextImage src={`/projects/${project.image}`} alt={project.title} fill className="object-cover" />
          ) : (
            <>
              <div
                className="absolute inset-0"
                style={{ background: `radial-gradient(ellipse at 50% 50%, ${project.accent}25 0%, transparent 70%)` }}
              />
              {/* Decorative grid */}
              <div className="absolute inset-0 hero-bg-grid opacity-40" />
              {/* Floating tags */}
              <div className="relative flex flex-wrap gap-3 items-center justify-center px-8">
                {project.tags.map((t, i) => (
                  <span
                    key={t}
                    className="font-mono text-[13px] px-3 py-1.5 rounded-lg border backdrop-blur-sm"
                    style={{
                      color: project.accent,
                      borderColor: `${project.accent}30`,
                      background: `${project.accent}12`,
                      transform: `rotate(${(i % 3 - 1) * 2}deg)`,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              {/* Large icon */}
              <div
                className="absolute bottom-6 right-8 w-16 h-16 rounded-2xl flex items-center justify-center opacity-30"
                style={{ background: project.accent, color: "#fff" }}
              >
                <Icon size={32} />
              </div>
            </>
          )}
        </div>
      </Container>

      {/* Content */}
      <Container className="px-12 max-md:px-6 py-16">
        <div className="grid grid-cols-[1fr_300px] max-lg:grid-cols-1 gap-12">

          {/* Left: Details */}
          <div>
            <h2 className="text-xl font-bold mb-4">Loyiha haqida</h2>
            <p className="text-base text-muted leading-[1.8] mb-10">{project.longDesc}</p>

            <h2 className="text-xl font-bold mb-4">Asosiy xususiyatlar</h2>
            <ul className="space-y-3 mb-10">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-success flex-shrink-0 mt-0.5" />
                  <span className="text-base text-muted">{f}</span>
                </li>
              ))}
            </ul>

            {/* Tags */}
            <h2 className="text-xl font-bold mb-4">Texnologiyalar</h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[13px] px-3 py-1.5 rounded-lg border border-line bg-elevated text-content"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Links */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs text-muted tracking-[2px] uppercase mb-4">Havolalar</h3>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-4 bg-elevated border border-line rounded-lg no-underline text-content transition-all hover:border-accent/30 hover:bg-accent/[0.05]"
              >
                <GitHubIcon />
                <span className="font-medium text-sm">GitHub</span>
                <ExternalLink size={13} className="ml-auto text-muted" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-4 bg-accent text-white rounded-lg no-underline transition-all hover:bg-[#4a7de0]"
              >
                <ExternalLink size={18} />
                <span className="font-medium text-sm">Live demo</span>
              </a>
            )}
          </div>

        </div>
      </Container>
    </div>
  );
}
