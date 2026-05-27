import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { CalendarDays, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogBySlug, BLOG_POSTS } from "@/lib/data";
import { BRAND, waLink, waBookingMessage } from "@/lib/brand";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = blogBySlug(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.post;
    if (!p) return {};
    return {
      meta: [
        { title: `${p.title} | Decorza Events Blog` },
        { name: "description", content: p.excerpt },
        { property: "og:title", content: p.title },
        { property: "og:description", content: p.excerpt },
        { property: "og:image", content: p.cover },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `/blog/${p.slug}` }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: p.title,
          image: [p.cover],
          datePublished: p.date,
          author: { "@type": "Organization", name: "Decorza Events" },
          publisher: { "@type": "Organization", name: "Decorza Events" },
        }),
      }],
    };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const wa = waLink(waBookingMessage({}));
  const related = BLOG_POSTS.filter((b) => b.slug !== post.slug).slice(0, 2);

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6 text-xs text-muted-foreground">
        <Link to="/blog" className="hover:text-primary">Blog</Link>
        <span className="mx-2">/</span>
        <span>{post.category}</span>
      </div>
      <h1 className="font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">{post.title}</h1>
      <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
        <span className="inline-flex items-center gap-1"><CalendarDays className="h-4 w-4" />{new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span>
        <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4" />{post.readTime}</span>
      </div>
      <img src={post.cover} alt={post.title} className="mt-8 aspect-[16/9] w-full rounded-2xl object-cover shadow-luxury" />

      <div className="prose prose-lg mt-10 max-w-none">
        {post.content.map((b: { heading?: string; body: string }, i: number) => (
          <div key={i} className="mb-6">
            {b.heading && <h2 className="mt-8 font-display text-2xl text-primary">{b.heading}</h2>}
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">{b.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border bg-gradient-to-br from-primary/5 to-gold/10 p-6 text-center">
        <h3 className="font-display text-2xl">Ready to book your decoration?</h3>
        <p className="mt-2 text-sm text-muted-foreground">Same-day setup across {BRAND.cities.join(", ")}.</p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <Button asChild className="bg-whatsapp hover:opacity-90 text-white">
            <a href={wa} target="_blank" rel="noopener"><Phone className="mr-2 h-4 w-4" /> WhatsApp Us</a>
          </Button>
          <Button asChild variant="outline"><Link to="/packages">Browse Packages</Link></Button>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-14">
          <h3 className="font-display text-xl">Continue reading</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {related.map((p) => (
              <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="group overflow-hidden rounded-xl border bg-card transition hover:-translate-y-0.5 hover:shadow-md">
                <img src={p.cover} alt={p.title} loading="lazy" className="aspect-[16/10] w-full object-cover" />
                <div className="p-4">
                  <p className="text-xs font-semibold text-primary">{p.category}</p>
                  <p className="mt-1 font-display text-lg leading-tight group-hover:text-primary">{p.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
