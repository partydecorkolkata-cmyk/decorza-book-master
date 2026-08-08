import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Phone, CalendarCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/site/SectionHeader";
import { ReviewCard } from "@/components/site/ReviewCard";
import { Faq } from "@/components/site/Faq";
import { StaticPackageCard } from "@/components/site/StaticPackageCard";
import { BRAND, waLink, waBookingMessage } from "@/lib/brand";
import { categoryBySlug, REVIEWS } from "@/lib/data";

export const Route = createFileRoute("/service/entrance-gate-decoration")({
  loader: () => {
    const c = categoryBySlug("entrance-gate-decoration");
    if (!c) throw notFound();
    return { category: c };
  },
  head: () => ({
    meta: [
      { title: "Entrance Gate Decoration in India | From ₹1,999 | Decorza Events" },
      { name: "description", content: "Balloon gate arches, marigold torans, floral pillars and welcome pathways for weddings, birthdays and housewarmings. Book on WhatsApp." },
      { property: "og:title", content: "Entrance Gate Decoration | Decorza Events" },
      { property: "og:description", content: "Grand welcome gates, balloon arches and floral entrances starting at ₹1,999." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://decorza-book-master.lovable.app/service/entrance-gate-decoration" }],
  }),
  component: ServicePage,
});

const CARDS = [
  {
    id: "entrance-gate-decoration-essential",
    name: "Essential Balloon Entrance Gate",
    description: "A cheerful pastel balloon gate arch at your main door with matching balloon pillars and a confetti welcome path — quick, colourful and photo-ready.",
    image: "/images/balloon-decoration-hero-v2.jpg",
    includes: ["Balloon gate arch (single door)", "2 balloon pillars", "Confetti / petal walkway"],
    rating: 4.7,
    reviews: 312,
    offer: "₹1,999",
    original: "₹3,499",
    discountPct: 43,
    bestSeller: false,
  },
  {
    id: "entrance-gate-decoration-premium",
    name: "Premium Floral & Balloon Gate",
    description: "A grand double-sided entrance with a dense balloon garland arch, artificial floral accents, foil character or name balloons and a lit welcome pathway.",
    image: "/75e0da81-49b9-4d14-b41f-16c2c0751359.jpg",
    includes: ["Double-sided garland arch", "Artificial floral accents", "Foil name / theme balloons", "Lit welcome pathway"],
    rating: 4.9,
    reviews: 486,
    offer: "₹4,499",
    original: "₹7,999",
    discountPct: 44,
    bestSeller: true,
  },
  {
    id: "entrance-gate-decoration-luxury",
    name: "Luxury Grand Welcome Gate",
    description: "A full luxury entrance installation with a fresh marigold and rose toran gate, drapes, brass urlis, diyas and a red-carpet welcome aisle for weddings and griha pravesh.",
    image: "/1e631830-5a03-4c62-9230-c36bba689802.png",
    includes: ["Fresh flower toran gate", "Drapes & floral pillars", "Brass urli, diyas & rangoli", "Red carpet welcome aisle"],
    rating: 4.9,
    reviews: 268,
    offer: "₹9,999",
    original: "₹16,999",
    discountPct: 41,
    bestSeller: false,
  },
];

const GALLERY = [
  "/images/balloon-decoration-hero-v2.jpg",
  "/75e0da81-49b9-4d14-b41f-16c2c0751359.jpg",
  "/1e631830-5a03-4c62-9230-c36bba689802.png",
  "/ddbbe21d-b302-41b1-b540-d96886f6934a.jpg",
  "/haldi-ring-decoration.png",
  "/stage-floral-arch.png",
];

function ServicePage() {
  const { category: c } = Route.useLoaderData();
  const wa = waLink(waBookingMessage({ packageName: "Entrance Gate Decoration" }));
  const displayReviews = REVIEWS.slice(0, 6);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={c.hero} alt="Entrance Gate Decoration" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.2_0.08_305)]/90 to-[oklch(0.32_0.13_5)]/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
          <Badge className="bg-white/10 backdrop-blur border border-white/20 text-white">
            <Star className="mr-1 h-3 w-3 fill-gold text-gold" /> 4.8 · 460 reviews
          </Badge>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl">Entrance Gate Decoration</h1>
          <p className="mt-4 max-w-2xl text-white/85">
            Balloon gate arches, marigold torans, floral pillars and welcome pathways — the first wow moment of your celebration.
          </p>
          <p className="mt-4 font-display text-2xl text-gold">Starting from ₹1,999</p>
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
        <SectionHeader eyebrow="Packages" title="Entrance Gate Decoration Packages" subtitle="Pick from Essential, Premium and Luxury — or customise on WhatsApp." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((p) => (
            <StaticPackageCard
              key={p.id}
              id={p.id}
              name={p.name}
              description={p.description}
              image={p.image}
              includes={p.includes}
              rating={p.rating}
              reviews={p.reviews}
              offer={<>{p.offer}</>}
              original={<>{p.original}</>}
              discountPct={p.discountPct}
              bestSeller={p.bestSeller}
            />
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Gallery" title="Entrance Gate Decoration Gallery" subtitle="Real setups by our decor team." />
          <div className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {GALLERY.map((src, i) => (
              <img key={src + i} src={src} alt={`Entrance Gate Decoration ${i + 1}`} loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            ))}
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
          <SectionHeader eyebrow="FAQs" title="Entrance Gate Decoration FAQs" />
          <div className="mt-8"><Faq items={c.faqs} /></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Available In" title="Entrance Gate Decoration in Your City" />
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {BRAND.cities.map((city) => (
            <Link
              key={city}
              to="/city/$slug"
              params={{ slug: city.toLowerCase() }}
              className="rounded-xl border bg-card p-3 text-center text-sm hover:border-primary hover:text-primary"
            >
              Gate Decor in {city}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
