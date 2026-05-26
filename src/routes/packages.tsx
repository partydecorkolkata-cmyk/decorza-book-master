import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader } from "@/components/site/SectionHeader";
import { PackageCard } from "@/components/site/PackageCard";
import { CATEGORIES, PACKAGES } from "@/lib/data";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "All Decoration Packages | Decorza Events" },
      { name: "description", content: "Browse all premium event decoration packages from Decorza Events — birthday, anniversary, proposal, baby shower, haldi, mehendi, engagement and more." },
    ],
    links: [{ rel: "canonical", href: "/packages" }],
  }),
  component: PackagesPage,
});

function PackagesPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeader eyebrow="All Packages" title="Decoration Packages" subtitle="Pick a category to see curated essential, premium and luxury packages." />
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {CATEGORIES.map((c) => (
          <Link
            key={c.slug}
            to="/service/$slug"
            params={{ slug: c.slug }}
            className="rounded-full border bg-card px-4 py-2 text-sm hover:border-primary hover:text-primary"
          >
            {c.name}
          </Link>
        ))}
      </div>
      <div className="mt-12 space-y-16">
        {CATEGORIES.map((c) => {
          const pkgs = PACKAGES.filter((p) => p.categorySlug === c.slug);
          return (
            <div key={c.slug}>
              <div className="mb-6 flex flex-wrap items-end justify-between gap-2">
                <div>
                  <h3 className="font-display text-2xl">{c.name}</h3>
                  <p className="text-sm text-muted-foreground">{c.short}</p>
                </div>
                <Link to="/service/$slug" params={{ slug: c.slug }} className="text-sm font-semibold text-primary hover:underline">
                  View all & gallery →
                </Link>
              </div>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {pkgs.map((p) => <PackageCard key={p.id} pkg={p} />)}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
