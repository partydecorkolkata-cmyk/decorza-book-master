import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, CalendarCheck, Sparkles, Star, ShieldCheck, Clock, Headphones, MapPin, Award, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CategoryCard } from "@/components/site/CategoryCard";
import { PackageCard } from "@/components/site/PackageCard";
import { ReviewCard } from "@/components/site/ReviewCard";
import { Faq } from "@/components/site/Faq";
import { BRAND, waLink, waBookingMessage } from "@/lib/brand";
import {
  CATEGORIES, TRENDING_PACKAGES, BEST_SELLERS, BUDGET_BUCKETS,
  REVIEWS, GALLERY, HOMEPAGE_FAQS, WHY_CHOOSE,
} from "@/lib/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Decorza Events | Premium Event Decoration in Your City" },
      { name: "description", content: "Book premium birthday, anniversary, proposal, baby shower, haldi & engagement decorations in Kolkata, Mumbai, Delhi, Bengaluru, Hyderabad, Pune & Siliguri. Same-day setup. WhatsApp +91 86378 70742." },
      { property: "og:title", content: "Decorza Events | Premium Event Decoration" },
      { property: "og:description", content: "Crafting memorable celebrations across India. Book on WhatsApp." },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Decorza Events",
          description: "Premium event decoration & celebration planning across India.",
          telephone: "+91 86378 70742",
          areaServed: [...BRAND.cities],
          priceRange: "₹₹",
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "12500" },
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const wa = waLink(waBookingMessage({}));
  const popularCats = CATEGORIES.filter((c) => c.popular).slice(0, 12);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1920&q=80"
            alt="Premium event decoration"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.18_0.08_305)]/95 via-[oklch(0.22_0.1_315)]/80 to-[oklch(0.32_0.13_5)]/55" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-2 lg:px-8 lg:py-32">
          <div className="text-white">
            <Badge className="bg-white/10 text-white backdrop-blur border border-white/20">
              <Sparkles className="mr-1 h-3 w-3 text-gold" /> {BRAND.tagline}
            </Badge>
            <h1 className="mt-4 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Premium Event <span className="text-gradient-gold">Decorations</span> In Your City
            </h1>
            <p className="mt-5 max-w-xl text-base text-white/85 sm:text-lg">
              Beautiful birthday decorations, anniversary setups, proposal surprises, baby showers, romantic surprises, engagement ceremonies, haldi functions and more — handcrafted by our expert decor team.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-whatsapp hover:opacity-90 text-white shadow-luxury">
                <a href={wa} target="_blank" rel="noopener">
                  <Phone className="mr-2 h-4 w-4" /> Book On WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" className="bg-gold text-[oklch(0.18_0.05_305)] hover:opacity-90">
                <Link to="/book"><CalendarCheck className="mr-2 h-4 w-4" /> Book Online</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20">
                <Link to="/packages">View Packages</Link>
              </Button>
            </div>
            <div className="mt-8 grid max-w-md grid-cols-3 gap-4 text-center">
              {[
                { v: "12,500+", l: "Happy Clients" },
                { v: "4.9★", l: "Avg Rating" },
                { v: "7 Cities", l: "Pan India" },
              ].map((s) => (
                <div key={s.l} className="rounded-xl border border-white/15 bg-white/5 p-3 backdrop-blur">
                  <p className="font-display text-2xl text-gold">{s.v}</p>
                  <p className="text-[11px] uppercase tracking-wider text-white/70">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              {CATEGORIES.slice(0, 4).map((c, i) => (
                <img
                  key={c.slug}
                  src={c.hero}
                  alt={c.name}
                  className={`h-56 w-full rounded-2xl object-cover shadow-luxury ${i % 2 ? "mt-10" : ""}`}
                  loading={i === 0 ? "eager" : "lazy"}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y bg-secondary/60">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-6 text-xs sm:grid-cols-4 sm:px-6 lg:px-8 lg:text-sm">
          {[
            { i: ShieldCheck, t: "100% Setup Guarantee" },
            { i: Clock, t: "Same Day Decoration" },
            { i: Headphones, t: "24/7 WhatsApp Support" },
            { i: Award, t: "12,500+ Happy Clients" },
          ].map(({ i: I, t }) => (
            <div key={t} className="flex items-center gap-2 text-primary">
              <I className="h-4 w-4 shrink-0 text-gold" />
              <span className="font-semibold">{t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* POPULAR CATEGORIES */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Popular Categories"
          title="Find the Perfect Decoration"
          subtitle="From intimate surprises to grand celebrations — curated, premium, and conversion-tested."
        />
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {popularCats.map((c) => <CategoryCard key={c.slug} c={c} />)}
        </div>
        <div className="mt-8 text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/packages">Browse All Categories</Link>
          </Button>
        </div>
      </section>

      {/* TRENDING */}
      <section className="bg-secondary/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Trending Now" title="Trending Decorations" subtitle="The most-booked decoration packages this season." />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {TRENDING_PACKAGES.map((p) => <PackageCard key={p.id} pkg={p} />)}
          </div>
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Best Sellers" title="Most-Loved Packages" subtitle="Couples and families across India keep coming back for these." />
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {BEST_SELLERS.map((p) => <PackageCard key={p.id} pkg={p} />)}
        </div>
      </section>

      {/* BUDGET */}
      <section className="bg-gradient-to-b from-secondary/30 to-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Shop by Budget" title="Decoration By Budget" subtitle="Premium options for every pocket." />
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {BUDGET_BUCKETS.map((b) => (
              <Link
                key={b.slug}
                to="/packages"
                className="group relative overflow-hidden rounded-2xl border bg-card p-6 text-center transition-all hover:-translate-y-1 hover:shadow-luxury"
              >
                <IndianRupee className="mx-auto h-7 w-7 text-gold" />
                <p className="mt-3 font-display text-lg">{b.label}</p>
                <p className="mt-1 text-xs text-muted-foreground">Explore packages</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CITIES */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Pan India" title="Decoration By City" subtitle="Live and loved in 7 cities. Same-day setup available." />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {BRAND.cities.map((city) => (
            <Link
              key={city}
              to="/city/$slug"
              params={{ slug: city.toLowerCase() }}
              className="group relative overflow-hidden rounded-2xl border bg-card transition-all hover:-translate-y-1 hover:shadow-luxury"
            >
              <div className="flex items-center gap-3 p-5">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-primary">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-lg leading-tight">{city}</p>
                  <p className="text-xs text-muted-foreground">Event Decoration</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-secondary/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Customer Love"
            title="What Our Customers Say"
            subtitle="12,500+ celebrations and counting. Here’s what they tell us."
          />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {REVIEWS.slice(0, 12).map(([name, city, service, text, rating], i) => (
              <ReviewCard key={i} name={name} city={city} service={service} text={text} rating={rating as number} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              Read more reviews <Star className="h-4 w-4 fill-gold text-gold" />
            </Link>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Our Work" title="Decoration Gallery" subtitle="Real setups from real celebrations." />
        <div className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
          {GALLERY.map((g, i) => (
            <img
              key={i}
              src={g}
              alt={`Decoration ${i + 1}`}
              loading="lazy"
              className="aspect-square w-full rounded-xl object-cover transition-transform hover:scale-[1.03]"
            />
          ))}
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Why Decorza" title="Why Choose Decorza Events" subtitle="Premium quality, dependable service, unforgettable celebrations." />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_CHOOSE.map((w) => (
              <div key={w.title} className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
                <Sparkles className="h-6 w-6 text-gold" />
                <h3 className="mt-3 font-display text-xl">{w.title}</h3>
                <p className="mt-2 text-sm text-white/80">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="FAQs" title="Frequently Asked Questions" />
        <div className="mt-8">
          <Faq items={HOMEPAGE_FAQS} />
        </div>
      </section>

      {/* CTA BAND */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-luxury" />
        <div className="relative mx-auto max-w-7xl px-4 py-14 text-center text-white sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl">Ready to Plan Your Celebration?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/85">
            Message us on WhatsApp for instant quotes, slot availability and custom packages.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-whatsapp hover:opacity-90 text-white">
              <a href={wa} target="_blank" rel="noopener"><Phone className="mr-2 h-4 w-4" /> Chat on WhatsApp</a>
            </Button>
            <Button asChild size="lg" className="bg-gold text-[oklch(0.18_0.05_305)] hover:opacity-90">
              <Link to="/book"><CalendarCheck className="mr-2 h-4 w-4" /> Request a Callback</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
