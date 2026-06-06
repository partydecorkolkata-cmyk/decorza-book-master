import { CATEGORIES, PACKAGES } from "./src/lib/data";
import fs from "fs";

function esc(s: string) { return s.replace(/`/g, "\\`").replace(/\$\{/g, "\\${"); }

for (const c of CATEGORIES) {
  const pkgs = PACKAGES.filter(p => p.categorySlug === c.slug);
  const file = `import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Phone, CalendarCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/site/SectionHeader";
import { ReviewCard } from "@/components/site/ReviewCard";
import { Faq } from "@/components/site/Faq";
import { StaticPackageCard } from "@/components/site/StaticPackageCard";
import { BRAND, waLink, waBookingMessage } from "@/lib/brand";
import { categoryBySlug, REVIEWS } from "@/lib/data";

export const Route = createFileRoute("/service/${c.slug}")({
  loader: () => {
    const c = categoryBySlug("${c.slug}");
    if (!c) throw notFound();
    return { category: c };
  },
  head: () => ({
    meta: [
      { title: \`${esc(c.name)} in India | From \u20B9${c.startsAt.toLocaleString()} | Decorza Events\` },
      { name: "description", content: \`${esc(c.description)} Book on WhatsApp.\` },
      { property: "og:title", content: \`${esc(c.name)} | Decorza Events\` },
      { property: "og:image", content: "${c.hero}" },
    ],
    links: [{ rel: "canonical", href: "/service/${c.slug}" }],
  }),
  component: ServicePage,
});

function ServicePage() {
  const { category: c } = Route.useLoaderData();
  const wa = waLink(waBookingMessage({ packageName: "${esc(c.name)}" }));
  const reviews = REVIEWS.filter(([, , s]) => s === "${esc(c.name)}").slice(0, 6);
  const displayReviews = reviews.length ? reviews : REVIEWS.slice(0, 6);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="${c.hero}" alt="${esc(c.name)}" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.2_0.08_305)]/90 to-[oklch(0.32_0.13_5)]/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
          <Badge className="bg-white/10 backdrop-blur border border-white/20 text-white">
            <Star className="mr-1 h-3 w-3 fill-gold text-gold" /> ${c.rating.toFixed(1)} \u00B7 ${c.reviews.toLocaleString()} reviews
          </Badge>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl">${esc(c.name)}</h1>
          <p className="mt-4 max-w-2xl text-white/85">${esc(c.description)}</p>
          <p className="mt-4 font-display text-2xl text-gold">Starting from \u20B9${c.startsAt.toLocaleString()}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-whatsapp hover:opacity-90 text-white">
              <a href={wa} target="_blank" rel="noopener"><Phone className="mr-2 h-4 w-4" />Book on WhatsApp</a>
            </Button>
            <Button asChild size="lg" className="bg-gold text-[oklch(0.18_0.05_305)] hover:opacity-90">
              <Link to="/book"><CalendarCheck className="mr-2 h-4 w-4" />Book Online</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Packages" title="${esc(c.name)} Packages" subtitle="Pick from Essential, Premium and Luxury \u2014 or customise on WhatsApp." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
${pkgs.map(p => `          <StaticPackageCard
            id="${p.id}"
            name="${esc(p.name)}"
            description="${esc(p.description)}"
            image="${p.image}"
            includes={${JSON.stringify(p.includes.slice(0,3))}}
            rating={${p.rating}}
            reviews={${p.reviews}}
            offer={<>\u20B9${p.offer.toLocaleString()}</>}
            original={<>\u20B9${p.original.toLocaleString()}</>}
            discountPct={${Math.round(((p.original - p.offer) / p.original) * 100)}}
            bestSeller={${!!p.bestSeller}}
          />`).join("\n")}
        </div>
      </section>

      <section className="bg-secondary/40 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Gallery" title="${esc(c.name)} Gallery" subtitle="Real setups by our decor team." />
          <div className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-3">
${c.gallery.map((g,i) => `            <img src="${g}" alt="${esc(c.name)} ${i+1}" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />`).join("\n")}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Reviews" title="Customer Reviews" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {displayReviews.map(([name, city, service, text, rating], i) => (
            <ReviewCard key={i} name={name} city={city} service={service} text={text} rating={rating as number} />
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="FAQs" title="${esc(c.name)} FAQs" />
          <div className="mt-8"><Faq items={c.faqs} /></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Available In" title="${esc(c.name)} in Your City" />
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {BRAND.cities.map((city) => (
            <Link
              key={city}
              to="/city/$slug"
              params={{ slug: city.toLowerCase() }}
              className="rounded-xl border bg-card p-3 text-center text-sm hover:border-primary hover:text-primary"
            >
              ${esc(c.name.split(" ")[0])} in {city}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
`;
  const fname = `src/routes/service.${c.slug}.tsx`;
  fs.writeFileSync(fname, file);
  console.log("wrote", fname);
}
