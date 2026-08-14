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
import gateA1 from "@/assets/gate-a1.jpeg.asset.json";
import gateA2 from "@/assets/gate-a2.jpeg.asset.json";
import gateA3 from "@/assets/gate-a3.png.asset.json";
import gateA4 from "@/assets/gate-a4.jpeg.asset.json";
import gateA5 from "@/assets/gate-a5.jpeg.asset.json";
import gateA6 from "@/assets/gate-a6.jpeg.asset.json";
import gateA7 from "@/assets/gate-a7.jpeg.asset.json";
import gateA8 from "@/assets/gate-a8.jpeg.asset.json";
import gateA9 from "@/assets/gate-a9.jpeg.asset.json";
import gateA10 from "@/assets/gate-a10.jpeg.asset.json";

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
    description: "A bold red and gold spiral balloon arch built around your main doorway — a bright, festive welcome for birthdays, shop openings and family functions.",
    image: gateA1.url,
    includes: ["Red & gold spiral balloon arch", "Sturdy frame with weighted base", "Doorway fitting & on-site setup"],
    rating: 4.7,
    reviews: 312,
    offer: "₹1,999",
    original: "₹3,499",
    discountPct: 43,
    bestSeller: false,
  },
  {
    id: "entrance-gate-decoration-premium",
    name: "Premium Pastel Organic Gate Arch",
    description: "An organic pastel balloon garland arch in peach, mint and olive with matching balloon pillars and a welcome board easel — perfect for kids' birthdays and theme parties.",
    image: gateA2.url,
    includes: ["Organic pastel garland arch", "2 matching balloon pillars", "Welcome board easel styling", "Ceiling balloon accents"],
    rating: 4.9,
    reviews: 486,
    offer: "₹2,999",
    original: "₹4,999",
    discountPct: 40,
    bestSeller: true,
  },
  {
    id: "entrance-gate-decoration-luxury",
    name: "Luxury Black & Gold Star Welcome Gate",
    description: "A dramatic black, gold and chrome balloon gate with jumbo orbs, gold star and burst foils framing your entrance — a premium red-carpet-style arrival moment.",
    image: gateA3.url,
    includes: ["Black, gold & chrome balloon arch", "Jumbo mirror orb balloons", "Gold star & burst foil accents", "Full doorway framing installation"],
    rating: 4.9,
    reviews: 268,
    offer: "₹3,499",
    original: "₹4,999",
    discountPct: 30,
    bestSeller: false,
  },
];

const BATCH_B = [
  {
    id: "gate-b1",
    name: "Blue & Yellow Baby Boy Welcome Gate",
    description: "A cheerful blue and yellow classic balloon arch at the main gate with character foil balloons, a pram foil and matching balloon pillars along the walkway.",
    image: gateA4.url,
    includes: ["Blue & yellow classic balloon arch", "Cartoon character foil balloons", "'It's a Boy' pram foil", "4 balloon pillars along the path"],
    rating: 4.8,
    reviews: 214,
    offer: "₹2,999",
    original: "₹4,499",
    discountPct: 33,
    bestSeller: false,
  },
  {
    id: "gate-b2",
    name: "Baby Girl Pink & White Gate Arch",
    description: "A dense pink and white balloon gate topped with silver 'BABY GIRL' foil letters, princess foil balloons and pink balloon flower clusters at the base.",
    image: gateA5.url,
    includes: ["Pink & white balloon gate arch", "'BABY GIRL' silver foil letters", "Princess & 'It's a Girl' foils", "Balloon flower clusters & pillars"],
    rating: 4.9,
    reviews: 331,
    offer: "₹3,499",
    original: "₹4,999",
    discountPct: 30,
    bestSeller: true,
  },
  {
    id: "gate-b3",
    name: "Baby Boy Blue & White Grand Gate",
    description: "A royal blue and white balloon arch across the porch with 'BABY BOY' foil letters, a gold crown foil, star balloons and baby-themed foil accents.",
    image: gateA6.url,
    includes: ["Blue & white balloon gate arch", "'BABY BOY' foil letters", "Gold crown & blue star foils", "Baby pram foil & side pillars"],
    rating: 4.8,
    reviews: 276,
    offer: "₹3,499",
    original: "₹4,999",
    discountPct: 30,
    bestSeller: false,
  },
  {
    id: "gate-b4",
    name: "Pink & Silver Chrome Welcome Gate",
    description: "A grand pink, blush and silver chrome balloon arch spanning the entrance with cartoon foil balloons and tall twin balloon pillars lining the walkway.",
    image: gateA7.url,
    includes: ["Pink, blush & silver chrome arch", "Cartoon character foil balloons", "4 tall balloon pillars", "Entrance walkway styling"],
    rating: 4.9,
    reviews: 189,
    offer: "₹3,499",
    original: "₹4,999",
    discountPct: 30,
    bestSeller: false,
  },
  {
    id: "gate-b5",
    name: "Purple & White Classic Gate Arch",
    description: "A neat metallic purple and white spiral balloon arch on a free-standing frame — ideal for shop launches, office events and inaugurations.",
    image: gateA8.url,
    includes: ["Purple & white spiral balloon arch", "Free-standing frame with base plates", "Metallic finish balloons", "On-site setup"],
    rating: 4.7,
    reviews: 158,
    offer: "₹1,999",
    original: "₹3,499",
    discountPct: 43,
    bestSeller: false,
  },
  {
    id: "gate-b6",
    name: "Black, Gold & White Organic Gate",
    description: "A chic organic garland arch in chrome gold, black and white wrapping the doorway — an elegant welcome for milestone birthdays and corporate evenings.",
    image: gateA9.url,
    includes: ["Chrome gold, black & white garland", "Organic cluster styling", "Full doorway wrap installation", "Weighted base columns"],
    rating: 4.8,
    reviews: 242,
    offer: "₹2,499",
    original: "₹3,499",
    discountPct: 29,
    bestSeller: false,
  },
  {
    id: "gate-b7",
    name: "Pastel Butterfly Garden Gate Arch",
    description: "A dreamy pastel balloon arch in lilac, blue, pink and yellow with butterfly and flower cut-outs, bubble balloons and a photo welcome board on an easel.",
    image: gateA10.url,
    includes: ["Pastel organic balloon arch", "Butterfly & flower cut-outs", "Clear bubble balloon accents", "Welcome photo board easel"],
    rating: 4.9,
    reviews: 305,
    offer: "₹3,499",
    original: "₹4,999",
    discountPct: 30,
    bestSeller: false,
  },
];

const GALLERY = [
  gateA1.url,
  gateA2.url,
  gateA3.url,
  gateA4.url,
  gateA5.url,
  gateA6.url,
  gateA7.url,
  gateA8.url,
  gateA9.url,
  gateA10.url,
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
