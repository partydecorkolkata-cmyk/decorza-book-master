import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/site/SectionHeader";
import { PackageCard } from "@/components/site/PackageCard";
import { BRAND } from "@/lib/brand";
import { CATEGORIES, PACKAGES, BUDGET_BUCKETS } from "@/lib/data";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "All Decoration Packages | Decorza Events" },
      { name: "description", content: "Browse all premium event decoration packages from Decorza Events — birthday, anniversary, proposal, baby shower, haldi, mehendi, engagement and more. Filter by city, budget and occasion." },
    ],
    links: [{ rel: "canonical", href: "/packages" }],
  }),
  component: PackagesPage,
});

const VIBES = [
  { key: "premium", label: "Premium", match: (n: string) => /(premium|luxury)/i.test(n) },
  { key: "romantic", label: "Romantic", match: (n: string) => /(romantic|anniversary|proposal|bedroom)/i.test(n) },
  { key: "kids", label: "Kids Theme", match: (n: string) => /(kid|theme birthday)/i.test(n) },
  { key: "traditional", label: "Traditional", match: (n: string) => /(haldi|mehendi|rice|engagement|housewarm)/i.test(n) },
] as const;

function PackagesPage() {
  const [category, setCategory] = useState<string>("all");
  const [budget, setBudget] = useState<string>("all");
  const [city, setCity] = useState<string>("all");
  const [vibe, setVibe] = useState<string>("all");

  const filtered = useMemo(() => {
    return PACKAGES.filter((p) => {
      if (category !== "all" && p.categorySlug !== category) return false;
      if (budget !== "all") {
        const b = BUDGET_BUCKETS.find((x) => x.slug === budget);
        if (b) {
          if (b.min && p.offer < b.min) return false;
          if (b.max && p.offer > b.max) return false;
        }
      }
      if (vibe !== "all") {
        const v = VIBES.find((x) => x.key === vibe);
        if (v && !v.match(p.name)) return false;
      }
      return true;
    });
  }, [category, budget, vibe]);

  const clearAll = () => { setCategory("all"); setBudget("all"); setCity("all"); setVibe("all"); };
  const hasFilter = category !== "all" || budget !== "all" || city !== "all" || vibe !== "all";

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="All Packages"
        title="Decoration Packages"
        subtitle="Filter by occasion, city, budget and vibe — every package is bookable on WhatsApp instantly."
      />

      <div className="mt-8 rounded-2xl border bg-card p-4 shadow-sm">
        <div className="flex items-center gap-2 text-sm font-semibold text-primary">
          <Filter className="h-4 w-4" /> Filters
          {hasFilter && (
            <button onClick={clearAll} className="ml-auto inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-primary">
              <X className="h-3 w-3" /> Clear all
            </button>
          )}
        </div>

        <FilterRow label="Occasion">
          <Chip active={category === "all"} onClick={() => setCategory("all")}>All</Chip>
          {CATEGORIES.map((c) => (
            <Chip key={c.slug} active={category === c.slug} onClick={() => setCategory(c.slug)}>{c.name}</Chip>
          ))}
        </FilterRow>

        <FilterRow label="Budget">
          <Chip active={budget === "all"} onClick={() => setBudget("all")}>Any</Chip>
          {BUDGET_BUCKETS.map((b) => (
            <Chip key={b.slug} active={budget === b.slug} onClick={() => setBudget(b.slug)}>{b.label}</Chip>
          ))}
        </FilterRow>

        <FilterRow label="City">
          <Chip active={city === "all"} onClick={() => setCity("all")}>All cities</Chip>
          {BRAND.cities.map((c) => (
            <Chip key={c} active={city === c} onClick={() => setCity(c)}>{c}</Chip>
          ))}
        </FilterRow>

        <FilterRow label="Vibe">
          <Chip active={vibe === "all"} onClick={() => setVibe("all")}>All</Chip>
          {VIBES.map((v) => (
            <Chip key={v.key} active={vibe === v.key} onClick={() => setVibe(v.key)}>{v.label}</Chip>
          ))}
        </FilterRow>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold text-primary">{filtered.length}</span> packages
          {city !== "all" && <> · in <Badge variant="outline" className="ml-1">{city}</Badge></>}
        </p>
        <Link to="/book" className="text-sm font-semibold text-primary hover:underline">Need help choosing? Talk to us →</Link>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((p) => <PackageCard key={p.id} pkg={p} />)}
      </div>

      {filtered.length === 0 && (
        <div className="mt-10 rounded-2xl border bg-secondary/30 p-10 text-center">
          <p className="font-display text-xl">No packages match these filters.</p>
          <Button onClick={clearAll} variant="outline" className="mt-4">Clear filters</Button>
        </div>
      )}
    </section>
  );
}

function FilterRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mt-4 flex flex-wrap items-center gap-2 border-t pt-3 first-of-type:border-t-0 first-of-type:pt-1">
      <p className="mr-1 w-full text-xs font-semibold uppercase tracking-wider text-muted-foreground sm:w-20">{label}</p>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={
        "rounded-full border px-3 py-1.5 text-xs font-medium transition " +
        (active
          ? "border-primary bg-primary text-primary-foreground shadow-sm"
          : "border-border bg-background hover:border-primary hover:text-primary")
      }
    >
      {children}
    </button>
  );
}
