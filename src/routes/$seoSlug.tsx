import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Phone, CalendarCheck, MapPin, Star, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/site/SectionHeader";
import { PackageCard } from "@/components/site/PackageCard";
import { ReviewCard } from "@/components/site/ReviewCard";
import { Faq } from "@/components/site/Faq";
import { BookingForm } from "@/components/site/BookingForm";
import { BRAND, waLink, waBookingMessage } from "@/lib/brand";
import { CATEGORIES, CITY_DATA, PACKAGES, REVIEWS } from "@/lib/data";

// Build the set of valid combined slugs: e.g. "birthday-decoration-kolkata"
const COMBINED = (() => {
  const map = new Map<string, { categorySlug: string; citySlug: string }>();
  for (const c of CATEGORIES) {
    for (const citySlug of Object.keys(CITY_DATA)) {
      map.set(`${c.slug}-${citySlug}`, { categorySlug: c.slug, citySlug });
    }
  }
  return map;
})();

function resolve(slug: string) {
  return COMBINED.get(slug.toLowerCase());
}

export const Route = createFileRoute("/$seoSlug")({
  loader: ({ params }) => {
    const hit = resolve(params.seoSlug);
    if (!hit) throw notFound();
    const category = CATEGORIES.find((c) => c.slug === hit.categorySlug)!;
    const city = CITY_DATA[hit.citySlug]!;
    return { category, city };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return {};
    const { category, city } = loaderData;
    const title = `${category.name} in ${city.name} | Starting ₹${city.startingPrice.toLocaleString()} | Decorza Events`;
    const desc = `Book premium ${category.name.toLowerCase()} in ${city.name} from Decorza Events. Same-day setup across ${city.areas.slice(0, 4).join(", ")} & nearby. WhatsApp ${BRAND.whatsappDisplay}.`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { name: "keywords", content: `${category.name.toLowerCase()} ${city.name}, ${category.slug.replace(/-/g, " ")} in ${city.name}, decorators ${city.name}, ${category.name.toLowerCase()} near me` },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:image", content: category.hero },
        { property: "og:url", content: `/${params.seoSlug}` },
      ],
      links: [{ rel: "canonical", href: `/${params.seoSlug}` }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: `Decorza Events — ${category.name} in ${city.name}`,
          description: desc,
          telephone: "+91 86378 70742",
          areaServed: { "@type": "City", name: city.name },
          priceRange: "₹₹",
          image: category.hero,
          aggregateRating: { "@type": "AggregateRating", ratingValue: category.rating, reviewCount: category.reviews },
        }),
      }],
    };
  },
  component: SeoCityCategoryPage,
});

function SeoCityCategoryPage() {
  const { category, city } = Route.useLoaderData();
  const wa = waLink(waBookingMessage({ packageName: category.name, city: city.name }));
  const pkgs = PACKAGES.filter((p) => p.categorySlug === category.slug);
  const cityReviews = REVIEWS.filter(([, c]) => c === city.name).slice(0, 6);
  const fallback = REVIEWS.filter(([, , s]) => s === category.name).slice(0, 6);
  const reviews = (cityReviews.length ? cityReviews : fallback.length ? fallback : REVIEWS.slice(0, 6));

  const faqs = [
    { q: `How much does ${category.name.toLowerCase()} cost in ${city.name}?`, a: `Our ${category.name.toLowerCase()} in ${city.name} starts at ₹${city.startingPrice.toLocaleString()} and scales up to premium luxury setups. Pick a package below or WhatsApp us for a custom quote.` },
    { q: `Do you offer same-day ${category.name.toLowerCase()} in ${city.name}?`, a: `Yes. Subject to slot availability, we deliver same-day ${category.name.toLowerCase()} setups across ${city.areas.slice(0, 4).join(", ")} and nearby.` },
    { q: `Where do you set up in ${city.name}?`, a: `We set up at homes, apartments, banquet halls, hotels, farmhouses and offices across ${city.name} — including ${city.venues.slice(0, 3).join(", ")}.` },
    ...category.faqs.slice(0, 2),
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={category.hero} alt={`${category.name} in ${city.name}`} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.2_0.08_305)]/95 to-[oklch(0.32_0.13_5)]/45" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs backdrop-blur">
            <MapPin className="h-3 w-3 text-gold" /> {city.name} · Same-day setup
          </div>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl">
            {category.name} in <span className="text-gradient-gold">{city.name}</span>
          </h1>
          <p className="mt-4 max-w-2xl text-white/85">
            Looking for the best {category.name.toLowerCase()} in {city.name}? Decorza Events delivers premium, photo-ready setups across {city.areas.slice(0, 5).join(", ")} and nearby — handled end-to-end by our trained in-house decor team.
          </p>
          <p className="mt-3 inline-flex items-center gap-2 font-display text-xl text-gold">
            <Star className="h-5 w-5 fill-gold" /> {category.rating.toFixed(1)} · {category.reviews.toLocaleString()}+ reviews · Starting ₹{city.startingPrice.toLocaleString()}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-whatsapp hover:opacity-90 text-white">
              <a href={wa} target="_blank" rel="noopener"><Phone className="mr-2 h-4 w-4" /> Book on WhatsApp</a>
            </Button>
            <Button asChild size="lg" className="bg-gold text-[oklch(0.18_0.05_305)] hover:opacity-90">
              <Link to="/book"><CalendarCheck className="mr-2 h-4 w-4" /> Book Online</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* LOCAL INTRO */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="prose prose-sm max-w-none text-muted-foreground">
            <h2 className="font-display text-2xl text-foreground">Premium {category.name} in {city.name} by Decorza Events</h2>
            <p>{category.description} Across {city.name}, we deliver setups that look exactly like the photos — using imported balloons, fresh florals, LED neon name boards, fairy lights and designer backdrops. Every booking includes on-time setup and post-event cleanup.</p>
            <h3 className="font-display text-lg text-foreground">What's included</h3>
            <ul>
              {pkgs[1]?.includes.map((i) => (<li key={i}><Check className="inline h-4 w-4 text-gold mr-1" />{i}</li>))}
            </ul>
            <h3 className="font-display text-lg text-foreground">{category.name} areas we cover in {city.name}</h3>
            <div className="flex flex-wrap gap-2 not-prose">
              {city.areas.map((a) => (
                <Badge key={a} variant="outline" className="border-primary/20">{a}</Badge>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border bg-card p-6">
            <h3 className="font-display text-xl">Get an instant quote</h3>
            <p className="mt-1 text-sm text-muted-foreground">For {category.name.toLowerCase()} in {city.name}.</p>
            <div className="mt-4"><BookingForm defaultPackageId={pkgs[1]?.id} /></div>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="bg-secondary/40 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow={`${city.name} Packages`} title={`${category.name} Packages in ${city.name}`} />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pkgs.map((p) => <PackageCard key={p.id} pkg={p} />)}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Reviews" title={`What ${city.name} customers say`} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map(([name, c, service, text, rating], i) => (
            <ReviewCard key={i} name={name} city={c} service={service} text={text} rating={rating as number} />
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary/30 py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="FAQs" title={`${category.name} in ${city.name} — FAQs`} />
          <div className="mt-6"><Faq items={faqs} /></div>
        </div>
      </section>
    </>
  );
}
