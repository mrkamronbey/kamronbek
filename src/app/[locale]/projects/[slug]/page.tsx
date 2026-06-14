import type { Metadata } from "next";
import NextImage from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { ArrowLeft, ExternalLink, CheckCircle2, Lock, Layout } from "lucide-react";
import { Container } from "@/shared/components";
import {
  getProjectBySlug, projectSlugs, projectIcons,
} from "@/features/projects/data/projects";
import { buildMetadata, SITE_URL, SITE_NAME } from "@/shared/seo";
import type { Locale } from "@/i18n/routing";

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug, locale);
  if (!project) return {};
  return buildMetadata({
    locale,
    path: `/projects/${slug}`,
    title: project.title,
    description: project.desc,
    images: project.image ? [`/projects/${project.image}`] : undefined,
  });
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ locale: Locale; slug: string }> }) {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug, locale);
  if (!project) notFound();

  const t = await getTranslations("projectDetail");
  const tm = await getTranslations({ locale, namespace: "meta" });
  const Icon = projectIcons[project.iconKey] ?? Layout;

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: SITE_NAME, item: `${SITE_URL}/${locale}` },
      { "@type": "ListItem", position: 2, name: tm("projects_title"), item: `${SITE_URL}/${locale}/projects` },
      { "@type": "ListItem", position: 3, name: project.title, item: `${SITE_URL}/${locale}/projects/${slug}` },
    ],
  };

  return (
    <div className="min-h-screen bg-canvas">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
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
            <ArrowLeft size={15} /> {t("back")}
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
          className="w-full aspect-[16/9] rounded-2xl overflow-hidden border border-line relative flex items-center justify-center"
          style={{ background: project.bgAccent }}
        >
          {project.image ? (
            <NextImage
              src={`/projects/${project.image}`}
              alt={project.title}
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover"
            />
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
                {project.tags.map((tag, i) => (
                  <span
                    key={tag}
                    className="font-mono text-[13px] px-3 py-1.5 rounded-lg border backdrop-blur-sm"
                    style={{
                      color: project.accent,
                      borderColor: `${project.accent}30`,
                      background: `${project.accent}12`,
                      transform: `rotate(${(i % 3 - 1) * 2}deg)`,
                    }}
                  >
                    {tag}
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
            <h2 className="text-xl font-bold mb-4">{t("about")}</h2>
            <p className="text-base text-muted leading-[1.8] mb-10">{project.longDesc}</p>

            <h2 className="text-xl font-bold mb-4">{t("features")}</h2>
            <ul className="space-y-3 mb-10">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-success flex-shrink-0 mt-0.5" />
                  <span className="text-base text-muted">{f}</span>
                </li>
              ))}
            </ul>

            {/* Tags */}
            <h2 className="text-xl font-bold mb-4">{t("tech")}</h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[13px] px-3 py-1.5 rounded-lg border border-line bg-elevated text-content"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Links */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs text-muted tracking-[2px] uppercase mb-4">{t("links")}</h3>
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
                <span className="font-medium text-sm">{t("live")}</span>
              </a>
            )}
            {project.internal && !project.githubUrl && !project.liveUrl && (
              <div className="flex items-start gap-3 p-4 bg-elevated border border-line rounded-lg text-muted">
                <Lock size={16} className="flex-shrink-0 mt-0.5" />
                <span className="text-[13px] leading-[1.6]">{t("internal")}</span>
              </div>
            )}
          </div>

        </div>
      </Container>
    </div>
  );
}
