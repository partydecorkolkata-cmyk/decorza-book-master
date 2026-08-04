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
import p1 from "@/assets/prop-p1.png.asset.json";
import p2 from "@/assets/prop-p2.jpeg.asset.json";
import p3 from "@/assets/prop-p3.jpg.asset.json";
import p4 from "@/assets/prop-p4.webp.asset.json";
import p5 from "@/assets/prop-p5.png.asset.json";
import p6 from "@/assets/prop-p6.jpeg.asset.json";
import p7 from "@/assets/prop-p7.jpeg.asset.json";
import p8 from "@/assets/prop-p8.jpeg.asset.json";
import p9 from "@/assets/prop-p9.jpeg.asset.json";
import p10 from "@/assets/prop-p10.jpeg.asset.json";

const PACKAGES = [
  {
    id: "proposal-decoration-essential",
    name: "Essential 'Will You Marry Me' Room Proposal",
    description:
      "A classic red and white ceiling balloon proposal set-up in your room with a bold red foil 'WILL YOU MARRY ME' wall, silver heart foils, LED candles and a rose petal bed spread.",
    image: p1.url,
    includes: [
      "Red & white ceiling balloons with curling ribbons",
      "Red foil 'WILL YOU MARRY ME' wall lettering",
      "Silver heart foil balloons",
      "LED candles & rose petal bed spread",
    ],
    rating: 4.8,
    reviews: 214,
    offer: <>₹2,499</>,
    original: <>₹3,499</>,
    discountPct: 29,
  },
  {
    id: "proposal-decoration-premium",
    name: "Premium 'I Love You' Heart Petal Room Decor",
    description:
      "A romantic bedroom set-up with a silver 'I LOVE YOU' foil wall, red heart foils, ceiling balloons, warm fairy lights and a big rose petal heart with 'LOVE' written on the bed.",
    image: p2.url,
    includes: [
      "Silver 'I LOVE YOU' foil lettering with red heart foils",
      "Red & white ceiling balloons with ribbons",
      "Warm fairy light headboard styling",
      "Rose petal heart bed art with 'LOVE'",
      "Fresh red rose bunches on side tables",
    ],
    rating: 4.9,
    reviews: 336,
    offer: <>₹2,999</>,
    original: <>₹4,499</>,
    discountPct: 33,
    bestSeller: true,
  },
  {
    id: "proposal-decoration-luxury",
    name: "Luxury Red & Gold Heart Balloon Arch Proposal",
    description:
      "A grand red balloon heart arch with gold chrome accents, a shimmer foil curtain, glowing 'Will You Marry Me?' neon sign, 'I Love You' heart foils and an LED candle-lit red carpet aisle.",
    image: p3.url,
    includes: [
      "Giant red heart balloon arch with gold chrome balloons",
      "Shimmer foil curtain backdrop",
      "'Will You Marry Me?' neon sign",
      "Red carpet aisle with LED candles",
      "'I Love You' heart foil pillars",
    ],
    rating: 5,
    reviews: 428,
    offer: <>₹4,499</>,
    original: <>₹6,499</>,
    discountPct: 31,
  },
  {
    id: "proposal-red-rose-heart-arch",
    name: "Grand Red Rose Heart Arch Proposal",
    description:
      "A show-stopping full red rose heart arch with a cursive 'Will you marry me?' neon sign at the centre, framed by planters, a candle-lined floor and a thick rose petal aisle.",
    image: p4.url,
    includes: [
      "Full artificial red rose heart arch",
      "Cursive 'Will you marry me?' neon sign",
      "Rose petal aisle pathway",
      "Cluster of LED pillar candles",
      "Green planters & floor floral base",
    ],
    rating: 5,
    reviews: 189,
    offer: <>₹9,999</>,
    original: <>₹14,999</>,
    discountPct: 33,
    bestSeller: true,
  },
  {
    id: "proposal-pastel-marry-me-hoop",
    name: "Pastel Floral 'Marry Me' Hoop Proposal",
    description:
      "A dreamy pastel proposal with a gold ring hoop, draped white tulle, blush and ivory rose garlands, a 'Marry Me' neon sign, marquee MARRY ME letters and a red rose bouquet.",
    image: p5.url,
    includes: [
      "Gold hoop arch with white tulle drape",
      "Blush & ivory rose floral garlands",
      "'Marry Me' neon sign",
      "Light-up MARRY ME marquee letters",
      "Red rose bouquet, LED candles & petals",
    ],
    rating: 4.9,
    reviews: 152,
    offer: <>₹8,999</>,
    original: <>₹12,999</>,
    discountPct: 31,
  },
  {
    id: "proposal-just-married-gold",
    name: "'Just Married' Gold Foil Room Decor",
    description:
      "A warm welcome-home set-up with gold 'JUST MARRIED' foil lettering, red heart foils, red and white ceiling balloon clusters and a rose petal heart on the bed.",
    image: p6.url,
    includes: [
      "Gold 'JUST MARRIED' foil lettering",
      "Red & white ceiling balloon clusters",
      "Red heart foil balloons",
      "Rose petal heart bed decor",
    ],
    rating: 4.7,
    reviews: 128,
    offer: <>₹2,499</>,
    original: <>₹3,499</>,
    discountPct: 29,
  },
  {
    id: "proposal-i-love-you-marble-wall",
    name: "'I Love You' Heart Foil Ceiling Room Surprise",
    description:
      "A bold red proposal room with 'I LOVE YOU' foil lettering on the feature wall, floating red heart foil balloons on the ceiling and red-white latex balloons spread across the bed.",
    image: p7.url,
    includes: [
      "Red 'I LOVE YOU' foil wall lettering",
      "Floating red heart foil balloons",
      "Red & white latex balloons on bed",
      "Heart balloon side cluster",
    ],
    rating: 4.8,
    reviews: 173,
    offer: <>₹2,799</>,
    original: <>₹3,499</>,
    discountPct: 20,
  },
  {
    id: "proposal-suite-red-balloon-floor",
    name: "Luxury Suite Red Balloon Floor Proposal",
    description:
      "A hotel-suite style romantic set-up with a red heart foil ceiling cloud, 'I LOVE YOU' lettering, a red 'love' script cushion piece and the whole floor covered in red balloons.",
    image: p8.url,
    includes: [
      "Red heart foil ceiling balloon cloud",
      "'I LOVE YOU' foil wall lettering",
      "Floor filled with red latex balloons",
      "Rose petal & 'love' script bed styling",
    ],
    rating: 4.9,
    reviews: 241,
    offer: <>₹3,499</>,
    original: <>₹4,999</>,
    discountPct: 30,
  },
  {
    id: "proposal-just-married-red-ceiling",
    name: "'Just Married' Red Ceiling Balloon Room",
    description:
      "A red-lit first-night room with gold 'JUST MARRIED' foil lettering, hanging red balloon flower clusters on the ceiling, red heart foils and rose stems on the wall.",
    image: p9.url,
    includes: [
      "Gold 'JUST MARRIED' foil lettering",
      "Hanging red balloon flower clusters",
      "Red heart foil balloons",
      "Wall rose stems & ambient red lighting",
    ],
    rating: 4.7,
    reviews: 118,
    offer: <>₹2,499</>,
    original: <>₹3,499</>,
    discountPct: 29,
  },
  {
    id: "proposal-white-arch-outdoor",
    name: "Outdoor 'Will You Marry Me?' White Arch",
    description:
      "An elegant outdoor proposal with a white arch panel hand-lettered 'Will you marry me?', red balloon garlands, red rose vases, tall pillar candles and a rose petal floor.",
    image: p10.url,
    includes: [
      "White arch panel with 'Will you marry me?' lettering",
      "Red balloon garland on both sides",
      "Red rose vases & greenery styling",
      "Tall pillar candles",
      "Rose petal floor scatter",
    ],
    rating: 5,
    reviews: 96,
    offer: <>₹6,999</>,
    original: <>₹9,999</>,
    discountPct: 30,
  },
];

const GALLERY = PACKAGES.map((p) => ({ src: p.image, alt: p.name }));


export const Route = createFileRoute("/service/proposal-decoration")({
  loader: () => {
    const c = categoryBySlug("proposal-decoration");
    if (!c) throw notFound();
    return { category: c };
  },
  head: () => ({
    meta: [
      { title: `Proposal Decoration in India | From ₹2,499 | Decorza Events` },
      { name: "description", content: `Romantic proposal decor with candles, rose paths, ring props, LED “Marry Me” lights and dreamy ambient setups. Book on WhatsApp.` },
      { property: "og:title", content: `Proposal Decoration | Decorza Events` },
      { property: "og:image", content: "/anniversary-gallery-1.jpg" },
    ],
    links: [{ rel: "canonical", href: "/service/proposal-decoration" }],
  }),
  component: ServicePage,
});

function ServicePage() {
  const { category: c } = Route.useLoaderData();
  const wa = waLink(waBookingMessage({ packageName: "Proposal Decoration" }));
  const reviews = REVIEWS.filter(([, , s]) => (s as string) === "Proposal Decoration").slice(0, 6);
  const displayReviews = reviews.length ? reviews : REVIEWS.slice(0, 6);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/anniversary-gallery-1.jpg" alt="Proposal Decoration" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.2_0.08_305)]/90 to-[oklch(0.32_0.13_5)]/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
          <Badge className="bg-white/10 backdrop-blur border border-white/20 text-white">
            <Star className="mr-1 h-3 w-3 fill-gold text-gold" /> 5.0 · 962 reviews
          </Badge>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl">Proposal Decoration</h1>
          <p className="mt-4 max-w-2xl text-white/85">Romantic proposal decor with candles, rose paths, ring props, LED “Marry Me” lights and dreamy ambient setups.</p>
          <p className="mt-4 font-display text-2xl text-gold">Starting from ₹2,499</p>
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
        <SectionHeader eyebrow="Packages" title="Proposal Decoration Packages" subtitle="Pick from Essential, Premium and Luxury — or customise on WhatsApp." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PACKAGES.map((p) => (
            <StaticPackageCard key={p.id} {...p} />
          ))}
        </div>

      </section>

      <section className="bg-secondary/40 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Gallery" title="Proposal Decoration Gallery" subtitle="Real setups by our decor team." />
          <div className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-3">
            {GALLERY.map((g) => (
              <img key={g.src} src={g.src} alt={g.alt} loading="lazy" className="aspect-[4/3] w-full rounded-xl bg-secondary/50 object-contain transition-transform hover:scale-[1.02]" />
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
          <SectionHeader eyebrow="FAQs" title="Proposal Decoration FAQs" />
          <div className="mt-8"><Faq items={c.faqs} /></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Available In" title="Proposal Decoration in Your City" />
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {BRAND.cities.map((city) => (
            <Link
              key={city}
              to="/city/$slug"
              params={{ slug: city.toLowerCase() }}
              className="rounded-xl border bg-card p-3 text-center text-sm hover:border-primary hover:text-primary"
            >
              Proposal in {city}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
