import { Container } from "@/shared/components";
import { blogPosts } from "../data/blog";

export function BlogSection() {
  return (
    <section id="blog" className="bg-canvas py-[100px]">
      <Container className="px-12 max-md:px-6">
        <p className="font-mono text-xs text-accent tracking-[2px] uppercase mb-3">// blog</p>

        <div className="flex justify-between items-end flex-wrap gap-4">
          <div>
            <h2 className="text-[clamp(28px,4vw,44px)] font-bold tracking-[-1px] leading-[1.1] mb-4">
              So&apos;nggi maqolalar
            </h2>
            <p className="text-base text-muted leading-[1.7] max-w-[500px]">Texnologiya va frontend haqida yozaman</p>
          </div>
          <a
            href="#"
            className="inline-flex items-center bg-transparent text-content font-medium text-sm px-5 py-2.5 rounded-lg no-underline border border-line transition-all hover:border-content/20 hover:bg-surface"
          >
            Barcha maqolalar →
          </a>
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6 mt-16">
          {blogPosts.map((post) => (
            <div
              key={post.title}
              className="bg-surface border border-line rounded-lg overflow-hidden transition-all duration-[250ms] cursor-pointer hover:border-accent/20 hover:-translate-y-[3px]"
            >
              <div className="blog-thumb-bg h-40 flex flex-col items-center justify-center">
                <div className="text-[32px] mb-2">{post.emoji}</div>
                <div className="text-[11px] font-mono text-muted">{post.tags.join(" · ")}</div>
              </div>
              <div className="p-6">
                <p className="font-mono text-xs text-muted mb-2.5">{post.date}</p>
                <h3 className="text-[17px] font-bold leading-[1.4] mb-2.5 tracking-[-0.3px]">{post.title}</h3>
                <p className="text-sm text-muted leading-[1.6]">{post.excerpt}</p>
              </div>
              <div className="px-6 pb-5 flex gap-2">
                {post.tags.map((t) => (
                  <span key={t} className="font-mono text-[11px] px-2.5 py-1 rounded border bg-accent/10 text-accent border-accent/20">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
