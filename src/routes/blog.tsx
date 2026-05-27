import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader } from "@/components/site/SectionHeader";
import { BLOG_POSTS } from "@/lib/data";
import { CalendarDays, Clock } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Event Decoration Blog & Ideas | Decorza Events" },
      { name: "description", content: "Birthday, anniversary, baby shower and proposal decoration ideas, planning tips and trends from the Decorza Events decor team." },
      { property: "og:title", content: "Decoration Ideas & Guides | Decorza Events" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeader eyebrow="Blog" title="Decoration Ideas & Planning Guides" subtitle="Trends, planning checklists and decor inspiration from our in-house team." />
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {BLOG_POSTS.map((p) => (
          <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="group overflow-hidden rounded-2xl border bg-card transition hover:-translate-y-1 hover:shadow-luxury">
            <img src={p.cover} alt={p.title} loading="lazy" className="aspect-[16/10] w-full object-cover transition group-hover:scale-105" />
            <div className="p-5">
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="rounded-full bg-secondary px-2 py-0.5 font-semibold text-primary">{p.category}</span>
                <span className="inline-flex items-center gap-1"><CalendarDays className="h-3 w-3" />{new Date(p.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
                <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" />{p.readTime}</span>
              </div>
              <h3 className="mt-3 font-display text-xl leading-tight group-hover:text-primary">{p.title}</h3>
              <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{p.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
