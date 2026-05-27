import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Phone, CalendarCheck, MapPin, ShieldCheck, Clock, Award, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CategoryCard } from "@/components/site/CategoryCard";
import { PackageCard } from "@/components/site/PackageCard";
import { ReviewCard } from "@/components/site/ReviewCard";
import { BookingForm } from "@/components/site/BookingForm";
import { Faq } from "@/components/site/Faq";
import { BRAND, waLink, waBookingMessage } from "@/lib/brand";
import { CATEGORIES, BEST_SELLERS, REVIEWS, GALLERY, HOMEPAGE_FAQS, cityBySlug, categoryBySlug } from "@/lib/data";

export const Route = createFileRoute("/city/$slug")({
  loader: ({ params }) => {
    const info = cityBySlug(params.slug);
    if (!info) throw notFound();
    return { info };
  },
  head: ({ loaderData }) => {
    const i = loaderData?.info;
    if (!i) return {};
    const title = `Event Decoration in ${i.name} | Birthday, Anniversary, Baby Shower Decorators | Decorza Events`;
    const desc = `Best event decorators in ${i.name}. Birthday, anniversary, baby shower, proposal, haldi & engagement decoration starting at \u20B9${i.startingPrice.toLocaleString()}. Same-day setup across ${i.areas.slice(0, 5).join(", ")}. WhatsApp ${BRAND.whatsappDisplay}.`;
    return {
      meta: [
        { title }, { name: "description", content: desc },
        { name: "keywords", content: `event decoration ${i.name}, birthday decoration ${i.name}, anniversary decoration ${i.name}, balloon decoration ${i.name}, baby shower decorators ${i.name}, proposal decoration ${i.name}` },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
      links: [{ rel: "canonical", href: `/city/${i.slug}` }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: `Decorza Events ${i.name}`,
          description: desc,
          telephone: "+91 86378 70742",
          areaServed: { "@type": "City", name: i.name },
          priceRange: "\u20B9\u20B9",
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "1200" },
        }),
      }],
    };
  },
  component: CityPage,
});

function CityPage() {
  const { info } = Route.useLoaderData();
  const city = info.name;
  const wa = waLink(waBookingMessage({ city }));
  const cityReviews = REVIEWS.filter(([, c]) => c === city).slice(0, 6);
  const displayReviews = cityReviews.length ? cityReviews : REVIEWS.slice(0, 6);
  const popularInCity = info.popular
    .map((slug: string) => categoryBySlug(slug))
    .filter((c: ReturnType<typeof categoryBySlug>): c is NonNullable<ReturnType<typeof categoryBySlug>> => !!c);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={GALLERY[0]} alt={`Event decoration in ${city}`} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.2_0.08_305)]/95 to-[oklch(0.32_0.13_5)]/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs backdrop-blur">
            <MapPin className="h-3 w-3 text-gold" /> Serving {city} & nearby
          </div>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl">
            Event Decoration in <span className="text-gradient-gold">{city}</span>
          </h1>
          <p className="mt-4 max-w-2xl text-white/85">{info.intro}</p>
          <p className="mt-2 font-display text-xl text-gold">Starting \u20B9{info.startingPrice.toLocaleString()} \u00B7 Same-day setup</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-whatsapp hover:opacity-90 text-white">
              <a href={wa} target="_blank" rel="noopener"><Phone className="mr-2 h-4 w-4" />WhatsApp {city} Team</a>
            </Button>
            <Button asChild size="lg" className="bg-gold text-[oklch(0.18_0.05_305)] hover:opacity-90">
              <Link to="/book"><CalendarCheck className="mr-2 h-4 w-4" />Book Online</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y bg-secondary/60">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-6 text-xs sm:grid-cols-4 sm:px-6 lg:px-8 lg:text-sm">
          {[
            { i: ShieldCheck, t: "100% Setup Guarantee" },
            { i: Clock, t: `Same Day Decoration in ${city}` },
            { i: Award, t: "1,200+ Setups Locally" },
            { i: Star, t: "4.9\u2605 Rated" },
          ].map(({ i: I, t }) => (
            <div key={t} className="flex items-center gap-2 text-primary">
              <I className="h-4 w-4 shrink-0 text-gold" />
              <span className="font-semibold">{t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* LOCAL INTRO */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="prose prose-sm max-w-none text-muted-foreground">
          <h2 className="font-display text-2xl text-foreground">Premium Event Decorators in {city}</h2>
          <p>
            Looking for trusted event decorators in {city}? Decorza Events specialises in premium birthday decorations, anniversary surprises, romantic bedroom setups, proposal decorations, car-boot surprises, baby showers, welcome-baby decor, rice ceremony, engagement, haldi, mehendi, bachelorette, corporate events and housewarming decorations across {city}.
          </p>
          <p>
            We deliver same-day decoration setups at homes, banquet halls, hotels, farmhouses, restaurants and offices in {city}. Every setup is handled by our trained, in-house decor team using premium balloons, fresh florals, fairy lights, neon signs and designer backdrops.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-card p-6">
            <h3 className="font-display text-xl flex items-center gap-2"><MapPin className="h-5 w-5 text-gold" />Areas We Cover in {city}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {info.areas.map((a: string) => (
                <span key={a} className="rounded-full border bg-background px-3 py-1 text-xs font-medium">{a}</span>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">Don\u2019t see your area? WhatsApp us \u2014 we cover all of {city} and nearby.</p>
          </div>
          <div className="rounded-2xl border bg-card p-6">
            <h3 className="font-display text-xl flex items-center gap-2"><Sparkles className="h-5 w-5 text-gold" />Popular Venues in {city}</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {info.venues.map((v: string) => (
                <li key={v} className="flex gap-2"><span className="text-gold">\u2022</span>{v}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* POPULAR IN CITY */}
      <section className="bg-secondary/30 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow={`Trending in ${city}`} title={`Most-Booked Decorations in ${city}`} />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {popularInCity.map((c: NonNullable<ReturnType<typeof categoryBySlug>>) => <CategoryCard key={c.slug} c={c} />)}
          </div>
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Best Sellers" title={`Best-Selling Packages in ${city}`} />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {BEST_SELLERS.map((p) => <PackageCard key={p.id} pkg={p} />)}
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-secondary/30 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Portfolio" title={`Recent Setups in ${city}`} subtitle="A glimpse from real celebrations we delivered." />
          <div className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
            {GALLERY.slice(0, 12).map((g, i) => (
              <img key={i} src={g} alt={`${city} decoration ${i + 1}`} loading="lazy" className="aspect-square w-full rounded-xl object-cover transition hover:scale-[1.03]" />
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Reviews" title={`Loved by customers in ${city}`} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {displayReviews.map(([name, c, service, text, rating], i) => (
            <ReviewCard key={i} name={name} city={c} service={service} text={text} rating={rating as number} />
          ))}
        </div>
      </section>

      {/* FAQ + BOOK */}
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionHeader eyebrow="FAQs" title={`${city} FAQs`} center={false} />
          <div className="mt-6"><Faq items={HOMEPAGE_FAQS} /></div>
        </div>
        <div className="rounded-2xl border bg-card p-6">
          <h3 className="font-display text-2xl">Book in {city}</h3>
          <p className="mt-1 text-sm text-muted-foreground">Tell us about your event \u2014 we\u2019ll confirm via WhatsApp.</p>
          <div className="mt-5"><BookingForm /></div>
        </div>
      </section>
    </>
  );
}
