"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { BlogCard } from "@/shared/components";
import { blogPosts, CATEGORIES } from "../data/blog";

export function BlogGrid() {
  const t = useTranslations("blogPage");
  const [active, setActive] = useState("all");

  const filtered = active === "all"
    ? blogPosts
    : blogPosts.filter((p) => p.category === active);

  return (
    <section className="bg-surface py-[80px]">
      <div className="px-12 max-md:px-6 max-w-7xl mx-auto">

        {/* Category tabs */}
        <div className="flex gap-2 flex-wrap mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-mono text-[13px] px-4 py-2 rounded-lg border transition-all ${
                active === cat
                  ? "bg-accent text-white border-accent"
                  : "text-muted border-line hover:text-content hover:border-accent/30 bg-transparent"
              }`}
            >
              {cat === "all" ? t("all_category") : cat}
            </button>
          ))}
          <span className="ml-auto font-mono text-[13px] text-muted self-center">
            {t("count", { count: filtered.length })}
          </span>
        </div>

        {/* Blog grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-muted font-mono text-sm">
            {t("empty")}
          </div>
        ) : (
          <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5">
            {filtered.map((post, i) => (
              <BlogCard
                key={post.slug}
                post={post}
                featured={i === 0 && active === "all"}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
