import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Tag } from "lucide-react";
import { Code2, Braces, Palette, Zap, type LucideIcon } from "lucide-react";
import { Container } from "@/shared/components";
import { getPostBySlug, blogPosts } from "@/features/blog/data/blog";

const CATEGORY_META: Record<string, { icon: LucideIcon; accent: string; bg: string }> = {
  React:       { icon: Code2,   accent: "#61dafb", bg: "rgba(97,218,251,0.10)" },
  TypeScript:  { icon: Braces,  accent: "#5b8def", bg: "rgba(91,141,239,0.10)" },
  CSS:         { icon: Palette, accent: "#a78bfa", bg: "rgba(167,139,250,0.10)" },
  Performance: { icon: Zap,     accent: "#34d399", bg: "rgba(52,211,153,0.10)" },
};

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return { title: `${post.title} — Sunnatoff.dev` };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const meta = CATEGORY_META[post.category] ?? CATEGORY_META.React;
  const Icon = meta.icon;

  return (
    <div className="min-h-screen bg-canvas">
      {/* Header */}
      <div className="py-20 pt-32 relative overflow-hidden" style={{ background: meta.bg }}>
        <div
          className="absolute inset-0 opacity-40"
          style={{ background: `radial-gradient(ellipse at 40% 60%, ${meta.accent}30 0%, transparent 70%)` }}
        />
        <Container className="relative px-12 max-md:px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-content transition-colors mb-8 no-underline"
          >
            <ArrowLeft size={15} /> Barcha maqolalar
          </Link>

          <div className="flex items-center gap-3 mb-5">
            <span
              className="inline-flex items-center gap-1.5 font-mono text-[12px] px-2.5 py-1 rounded-md"
              style={{ color: meta.accent, background: `${meta.accent}18` }}
            >
              <Icon size={11} />
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 font-mono text-[12px] text-muted">
              <Clock size={11} />
              {post.readTime}
            </span>
            <span className="font-mono text-[12px] text-muted">{post.date}</span>
          </div>

          <h1 className="text-[clamp(26px,4vw,48px)] font-bold tracking-[-1.5px] leading-[1.12] mb-4 max-w-[700px]">
            {post.title}
          </h1>
          <p className="text-base text-muted leading-[1.7] max-w-[580px]">{post.excerpt}</p>
        </Container>
      </div>

      {/* Visual banner */}
      <Container className="px-12 max-md:px-6 -mt-6">
        <div
          className="w-full h-[260px] max-md:h-[180px] rounded-2xl overflow-hidden border border-line relative flex items-center justify-center"
          style={{ background: meta.bg }}
        >
          <div
            className="absolute inset-0"
            style={{ background: `radial-gradient(ellipse at 50% 50%, ${meta.accent}25 0%, transparent 70%)` }}
          />
          <div className="absolute inset-0 hero-bg-grid opacity-30" />
          {/* Large icon */}
          <div
            className="relative w-24 h-24 rounded-3xl flex items-center justify-center"
            style={{ background: `${meta.accent}18`, color: meta.accent }}
          >
            <Icon size={44} />
          </div>
          {/* Floating tags */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
            {post.tags.map((t) => (
              <span
                key={t}
                className="font-mono text-[12px] px-3 py-1 rounded-lg backdrop-blur-sm border"
                style={{ color: meta.accent, borderColor: `${meta.accent}30`, background: `${meta.accent}12` }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </Container>

      {/* Article body */}
      <Container className="px-12 max-md:px-6 py-16">
        <div className="grid grid-cols-[1fr_240px] max-lg:grid-cols-1 gap-16">

          {/* Article */}
          <article className="max-w-[680px]">
            {post.content.map((block, i) => (
              <div key={i} className="mb-8">
                {block.heading && (
                  <h2 className="text-[20px] font-bold tracking-[-0.5px] mb-3 text-content">
                    {block.heading}
                  </h2>
                )}
                <p className="text-base text-muted leading-[1.85]">{block.body}</p>
              </div>
            ))}
          </article>

          {/* Sidebar */}
          <aside className="space-y-6 max-lg:border-t max-lg:border-line max-lg:pt-8">
            <div>
              <h3 className="font-mono text-xs text-muted tracking-[2px] uppercase mb-3">
                <Tag size={11} className="inline mr-1.5" />Teglar
              </h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[12px] px-3 py-1.5 rounded-lg border border-line bg-elevated text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-mono text-xs text-muted tracking-[2px] uppercase mb-3">
                Boshqa maqolalar
              </h3>
              <div className="space-y-2">
                {blogPosts
                  .filter((p) => p.slug !== post.slug)
                  .slice(0, 3)
                  .map((p) => (
                    <Link
                      key={p.slug}
                      href={`/blog/${p.slug}`}
                      className="block p-3 rounded-lg border border-line bg-elevated hover:border-accent/30 transition-all no-underline"
                    >
                      <p className="text-[13px] font-medium text-content leading-tight">{p.title}</p>
                      <p className="font-mono text-[11px] text-muted mt-1">{p.readTime}</p>
                    </Link>
                  ))}
              </div>
            </div>
          </aside>

        </div>
      </Container>
    </div>
  );
}
