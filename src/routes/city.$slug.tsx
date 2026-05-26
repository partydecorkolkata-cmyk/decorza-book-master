import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Phone, CalendarCheck, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CategoryCard } from "@/components/site/CategoryCard";
import { PackageCard } from "@/components/site/PackageCard";
import { ReviewCard } from "@/components/site/ReviewCard";
import { BookingForm } from "@/components/site/BookingForm";
import { Faq } from "@/components/site/Faq";
import { BRAND, waLink, waBookingMessage } from "@/lib/brand";
import { CATEGORIES, BEST_SELLERS, REVIEWS, GALLERY, HOMEPAGE_FAQS } from "@/lib/data";

export const Route = createFileRoute("/city/$slug")({
  loader: ({ params }) => {
    const city = BRAND.cities.find((c) => c.toLowerCase() === params.slug.toLowerCase());
    if (!city) throw notFound();
    return { city };
  },
  head: ({ loaderData }) => {
    const city = loaderData?.city;
    if (!city) return {};
    return {
      meta: [
        { title: `Event Decoration in ${city} | Birthday, Anniversary, Proposal Decor | Decorza Events` },
        { name: "description", content: `Book premium event decoration in ${city} — birthday, anniversary, baby shower, proposal, haldi, mehendi & engagement setups. Same-day delivery. WhatsApp ${BRAND.whatsappDisplay}.` },
        { property: "og:title", content: `Event Decoration in ${city} | Decorza Events` },
      ],
      links: [{ rel: "canonical", href: `/city/${city.toLowerCase()}` }],
    };
  },
  component: CityPage,
});

function CityPage() {
  const { city } = Route.useLoaderData();
  const wa = waLink(waBookingMessage({ city }));
  const cityReviews = REVIEWS.filter(([, c]) => c === city).slice(0, 6);
  const displayReviews = cityReviews.length ? cityReviews : REVIEWS.slice(0, 6);

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
            Premium Event Decoration in <span className="text-gradient-gold">{city}</span>
          </h1>
          <p className="mt-4 max-w-2xl text-white/85">
            Birthday decorations, anniversary surprises, proposal setups, baby showers, engagements, haldi and mehendi — beautifully crafted by our {city} decor team. Same-day setup available.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-whatsapp hover:opacity-90 text-white">
              <a href={wa} target="_blank" rel="noopener"><Phone className="mr-2 h-4 w-4" />WhatsApp Booking</a>
            </Button>
            <Button asChild size="lg" className="bg-gold text-[oklch(0.18_0.05_305)] hover:opacity-90">
              <Link to="/book"><CalendarCheck className="mr-2 h-4 w-4" />Book Online</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="prose prose-sm max-w-none text-muted-foreground">
          <h2 className="font-display text-2xl text-foreground">Event Decoration Services in {city}</h2>
          <p>
            Looking for trusted event decorators in {city}? Decorza Events specialises in premium birthday decorations, anniversary surprises, romantic bedroom setups, proposal decorations, car-boot surprises, baby showers, welcome-baby decor, rice ceremony, engagement, haldi, mehendi, bachelorette, corporate events and housewarming decorations across {city}.
          </p>
          <p>
            We deliver same-day decoration setups at homes, banquet halls, hotels, farmhouses, restaurants and offices in {city}. Every setup is handled by our trained, in-house decor team using premium balloons, fresh florals, fairy lights, neon signs and designer backdrops.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Popular in your city" title={`Popular Decorations in ${city}`} />
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {CATEGORIES.filter((c) => c.popular).slice(0, 8).map((c) => <CategoryCard key={c.slug} c={c} />)}
        </div>
      </section>

      <section className="bg-secondary/40 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Best Sellers" title={`Best-Selling Packages in ${city}`} />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {BEST_SELLERS.map((p) => <PackageCard key={p.id} pkg={p} />)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Gallery" title={`Recent Setups in ${city}`} />
        <div className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
          {GALLERY.slice(0, 12).map((g, i) => (
            <img key={i} src={g} alt={`${city} decoration ${i + 1}`} loading="lazy" className="aspect-square w-full rounded-xl object-cover" />
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Reviews" title={`Loved by customers in ${city}`} />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {displayReviews.map(([name, c, service, text, rating], i) => (
              <ReviewCard key={i} name={name} city={c} service={service} text={text} rating={rating as number} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionHeader eyebrow="FAQs" title={`${city} FAQs`} center={false} />
          <div className="mt-6"><Faq items={HOMEPAGE_FAQS} /></div>
        </div>
        <div className="rounded-2xl border bg-card p-6">
          <h3 className="font-display text-2xl">Book in {city}</h3>
          <p className="mt-1 text-sm text-muted-foreground">Tell us about your event — we’ll confirm via WhatsApp.</p>
          <div className="mt-5"><BookingForm /></div>
        </div>
      </section>
    </>
  );
}
