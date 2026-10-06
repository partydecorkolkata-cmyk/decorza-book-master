import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Phone, CalendarCheck, MapPin, ShieldCheck, Clock, Star, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CategoryCard } from "@/components/site/CategoryCard";
import { PackageCard } from "@/components/site/PackageCard";
import { ReviewCard } from "@/components/site/ReviewCard";
import { BookingForm } from "@/components/site/BookingForm";
import { Faq } from "@/components/site/Faq";
import { BRAND, waLink, waBookingMessage } from "@/lib/brand";
import { BEST_SELLERS, REVIEWS, GALLERY, areaBySlug, areaSlug, categoryBySlug } from "@/lib/data";
import { absoluteUrl, localBusinessForArea, breadcrumbSchema } from "@/lib/seo";

export const Route = createFileRoute("/decoration/$city/$area")({
  loader: ({ params }) => {
    const hit = areaBySlug(params.city, params.area);
    if (!hit) throw notFound();
    return hit;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { city, area } = loaderData;
    const path = `/decoration/${city.slug}/${areaSlug(area)}`;
    const title = `Event Decoration in ${area}, ${city.name} | From ₹${city.startingPrice.toLocaleString()} | Decorza Events`;
    const desc = `Birthday, anniversary, baby shower & proposal decorators in ${area}, ${city.name}. Same-day home setup from ₹${city.startingPrice.toLocaleString()}. Book on WhatsApp ${BRAND.whatsappDisplay}.`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: absoluteUrl(path) },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: absoluteUrl(path) }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(localBusinessForArea({ cityName: city.name, area, path, description: desc })) },
        { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: `Decoration in ${city.name}`, path: `/city/${city.slug}` },
          { name: area, path },
        ])) },
      ],
    };
  },
  component: AreaPage,
});

function AreaPage() {
  const { city, area } = Route.useLoaderData();
  const place = `${area}, ${city.name}`;
  const wa = waLink(waBookingMessage({ city: place }));
  const reviews = (REVIEWS.filter(([, c]) => c === city.name).length ? REVIEWS.filter(([, c]) => c === city.name) : REVIEWS).slice(0, 3);
  const popular = city.popular.map((s) => categoryBySlug(s)).filter((c): c is NonNullable<ReturnType<typeof categoryBySlug>> => !!c);
  const nearby = city.areas.filter((a) => a !== area);
  const faqs = [
    { q: `Do you provide same-day decoration in ${area}?`, a: `Yes. Subject to slot availability, our team sets up same-day decorations at homes, apartments, hotels and banquet halls in ${area} and nearby ${city.name} localities.` },
    { q: `How much does decoration cost in ${area}?`, a: `Decorations in ${area} start at ₹${city.startingPrice.toLocaleString()}. Final pricing depends on the theme, size and add-ons — WhatsApp us for an instant quote.` },
    { q: `Is there any extra travel charge for ${area}?`, a: `${area} is part of our regular ${city.name} service area, so standard packages apply. We confirm any venue-specific charges before booking.` },
    { q: `How do I book a decorator in ${area}?`, a: `Tap "Book on WhatsApp", share your date, time and address in ${area}, and pay a small advance to confirm your slot.` },
  ];

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={GALLERY[1] ?? GALLERY[0]} alt={`Balloon and floral event decoration setup in ${place} by Decorza Events`} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.2_0.08_305)]/95 to-[oklch(0.32_0.13_5)]/45" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
          <nav className="text-xs text-white/70">
            <Link to="/" className="hover:text-gold">Home</Link> /{" "}
            <Link to="/city/$slug" params={{ slug: city.slug }} className="hover:text-gold">{city.name}</Link> / {area}
          </nav>
          <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs backdrop-blur">
            <MapPin className="h-3 w-3 text-gold" /> {place} · Same-day setup
          </div>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl">
            Event Decoration in <span className="text-gradient-gold">{area}</span>
          </h1>
          <p className="mt-4 max-w-2xl text-white/85">
            Birthday, anniversary, baby shower, proposal and room surprise decorations delivered to your doorstep in {place}. Premium balloons, florals and neon — set up by our in-house team.
          </p>
          <p className="mt-3 inline-flex items-center gap-2 font-display text-xl text-gold">
            <Star className="h-5 w-5 fill-gold" /> 4.9 rated · Starting ₹{city.startingPrice.toLocaleString()}
          </p>
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

      <section className="border-y bg-secondary/60">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-6 text-xs sm:grid-cols-4 sm:px-6 lg:px-8 lg:text-sm">
          {[
            { i: ShieldCheck, t: "100% Setup Guarantee" },
            { i: Clock, t: `Same Day in ${area}` },
            { i: Check, t: "Free Cleanup" },
            { i: Star, t: "4.9★ Rated" },
          ].map(({ i: I, t }) => (
            <div key={t} className="flex items-center gap-2 text-primary">
              <I className="h-4 w-4 shrink-0 text-gold" /><span className="font-semibold">{t}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:px-8">
        <div className="text-muted-foreground">
          <h2 className="font-display text-2xl text-foreground">Trusted Decorators in {area}</h2>
          <p className="mt-3">
            Planning a celebration in {area}? Decorza Events handles everything — from birthday balloon arches and anniversary room surprises to baby shower backdrops and proposal setups — at homes, societies, restaurants and banquet halls across {area} and the rest of {city.name}.
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {["Photo-matched setups — what you see is what you get", "On-time arrival with setup in 60–120 minutes", "Transparent pricing, no hidden charges", "Easy WhatsApp booking with small advance"].map((t) => (
              <li key={t} className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-gold" />{t}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border bg-card p-6">
          <h3 className="font-display text-xl">Get a quote for {area}</h3>
          <p className="mt-1 text-sm text-muted-foreground">We reply on WhatsApp within minutes.</p>
          <div className="mt-4"><BookingForm /></div>
        </div>
      </section>

      <section className="bg-secondary/30 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow={`Popular in ${area}`} title={`Most-Booked Decorations near ${area}`} />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {popular.map((c) => <CategoryCard key={c.slug} c={c} />)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Best Sellers" title={`Best-Selling Packages in ${area}`} />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {BEST_SELLERS.slice(0, 8).map((p) => <PackageCard key={p.id} pkg={p} />)}
        </div>
      </section>

      <section className="bg-secondary/30 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Reviews" title={`Loved by customers in ${city.name}`} />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map(([name, c, service, text, rating], i) => (
              <ReviewCard key={i} name={name} city={c} service={service} text={text} rating={rating as number} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionHeader eyebrow="FAQs" title={`Decoration in ${area} — FAQs`} center={false} />
          <div className="mt-6"><Faq items={faqs} /></div>
        </div>
        <div>
          <h2 className="font-display text-2xl">Nearby areas we serve in {city.name}</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {nearby.map((a) => (
              <Link key={a} to="/decoration/$city/$area" params={{ city: city.slug, area: areaSlug(a) }} className="rounded-full border bg-background px-3 py-1 text-xs font-medium hover:border-gold">
                Decoration in {a}
              </Link>
            ))}
          </div>
          <Link to="/city/$slug" params={{ slug: city.slug }} className="mt-4 inline-block text-sm font-semibold text-primary hover:text-gold">
            See all decoration in {city.name} →
          </Link>
        </div>
      </section>
    </>
  );
}
