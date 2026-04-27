import Link from "next/link";
import { Container, BlogCard } from "@/shared/components";
import { blogPosts } from "@/features/blog/data/blog";

export function BlogSection() {
  return (
    <section id="blog" className="bg-canvas py-[100px]">
      <Container className="px-12 max-md:px-6">
        <p className="font-mono text-xs text-accent tracking-[2px] uppercase mb-3">{`// blog`}</p>

        <div className="flex justify-between items-end flex-wrap gap-4 mb-16">
          <div>
            <h2 className="text-[clamp(28px,4vw,44px)] font-bold tracking-[-1px] leading-[1.1] mb-4">
              So&apos;nggi maqolalar
            </h2>
            <p className="text-base text-muted leading-[1.7] max-w-[500px]">
              Texnologiya va frontend haqida yozaman
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center bg-transparent text-content font-medium text-sm px-5 py-2.5 rounded-lg no-underline border border-line transition-all hover:border-content/20 hover:bg-surface"
          >
            Barcha maqolalar →
          </Link>
        </div>

        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5">
          {blogPosts.slice(0, 3).map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </Container>
    </section>
  );
}
