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
import w1 from "@/assets/wb-w1.jpg.asset.json";
import w2 from "@/assets/wb-w2.jpg.asset.json";
import w3 from "@/assets/wb-w3.png.asset.json";
import w4 from "@/assets/wb-w4.png.asset.json";
import w5 from "@/assets/wb-w5.jpg.asset.json";
import w6 from "@/assets/wb-w6.png.asset.json";
import w7 from "@/assets/wb-w7.jpg.asset.json";
import w8 from "@/assets/wb-w8.jpg.asset.json";
import w9 from "@/assets/wb-w9.jpg.asset.json";
import w10 from "@/assets/wb-w10.jpg.asset.json";
import w11 from "@/assets/wb-w11.jpg.asset.json";
import w12 from "@/assets/wb-w12.jpg.asset.json";
import w13 from "@/assets/wb-w13.jpg.asset.json";
import w14 from "@/assets/wb-w14.jpg.asset.json";
import w15 from "@/assets/wb-w15.jpg.asset.json";
import w16 from "@/assets/wb-w16.jpg.asset.json";
import w17 from "@/assets/wb-w17.jpg.asset.json";
import w18 from "@/assets/wb-w18.jpg.asset.json";
import w19 from "@/assets/wb-w19.jpg.asset.json";

export const Route = createFileRoute("/service/welcome-baby-decoration")({
  loader: () => {
    const c = categoryBySlug("welcome-baby-decoration");
    if (!c) throw notFound();
    return { category: c };
  },
  head: () => ({
    meta: [
      { title: `Welcome Baby Decoration in India | From ₹1,999 | Decorza Events` },
      { name: "description", content: `Cradle decor, balloon hoops and welcome-home signage to celebrate the newborn’s arrival. Book on WhatsApp.` },
      { property: "og:title", content: `Welcome Baby Decoration | Decorza Events` },
      { property: "og:image", content: w1.url },
    ],
    links: [{ rel: "canonical", href: "/service/welcome-baby-decoration" }],
  }),
  component: ServicePage,
});

const CARDS = [
  {
    id: "welcome-baby-decoration-essential",
    name: "Essential Welcome Baby Room Decoration",
    description:
      "A cheerful pink & white balloon room setup with foil 'Welcome Baby' letters, baby foil, 'It's a Girl' bottle and foot balloons — perfect for bringing the newborn home.",
    image: w1.url,
    includes: [
      "Pink & white ceiling balloons with ribbons",
      "'Welcome Baby' pink foil letters",
      "Baby, bottle & 'It's a Girl' foil balloons",
    ],
    rating: 4.7, reviews: 168,
    offer: <>₹1,999</>, original: <>₹3,499</>, discountPct: 43,
  },
  {
    id: "welcome-baby-decoration-premium",
    name: "Premium Pink Balloon Arch with Welcome Baby Neon",
    description:
      "A premium pink, white & silver balloon arch with a silver moon and stars, framing a fairy-light curtain backdrop with a warm 'Welcome Baby' neon sign.",
    image: w2.url,
    includes: [
      "Pink, white & silver organic balloon arch",
      "Silver moon & star foils",
      "Fairy-light curtain + 'Welcome Baby' neon",
    ],
    rating: 4.8, reviews: 232,
    offer: <>₹3,499</>, original: <>₹4,999</>, discountPct: 30,
  },
  {
    id: "welcome-baby-decoration-luxury",
    name: "Luxury 'Welcome Home Our Little Prince' Setup",
    description:
      "A luxury blue & gold welcome home setup with a printed 'Our Little Prince' backdrop, hot-air balloon art, BOY blocks, teddy props and chrome balloon garlands.",
    image: w3.url,
    includes: [
      "Printed 'Welcome Home Our Little Prince' backdrop",
      "Blue & gold chrome balloon garlands + pillars",
      "BOY blocks, teddy prop & pennant bunting",
    ],
    rating: 4.9, reviews: 289,
    offer: <>₹5,999</>, original: <>₹8,999</>, discountPct: 33,
  },
  {
    id: "welcome-baby-decoration-grand-hallway-boy",
    name: "Grand Blue & Gold Welcome Baby Boy Hallway Experience",
    description:
      "A grand event-hall welcome for the newborn: cloud ceiling, blue-gold-cream balloon pillars, printed 'Welcome Boy' & teddy standees, arches and a rose-petal walkway.",
    image: w4.url,
    includes: [
      "Cloud ceiling installation & multiple balloon pillars",
      "'Welcome Boy' + teddy printed standees & backdrop arch",
      "Rose petal walkway with baby foil balloons",
    ],
    rating: 4.9, reviews: 341,
    offer: <>₹19,999</>, original: <>₹29,999</>, discountPct: 33,
  },
  {
    id: "welcome-baby-decoration-purple-wall-gold-letters",
    name: "Purple Wall Gold 'Welcome Baby' Foil Letter Decor",
    description:
      "A warm home welcome with gold 'Welcome Baby' foil letters on a purple wall, pink & white daisies, baby-girl pram & bottle foils and rose-petal rangoli on the floor.",
    image: w5.url,
    includes: [
      "Gold 'Welcome Baby' foil letters",
      "Pink & white daisy wall accents",
      "Baby pram, bottle & 'It's a Girl' foil balloons",
      "Rose-petal rangoli floor pattern",
    ],
    rating: 4.7, reviews: 141,
    offer: <>₹1,999</>, original: <>₹3,499</>, discountPct: 43,
  },
  {
    id: "welcome-baby-decoration-car-baby-girl",
    name: "Welcome Baby Girl Car Decoration",
    description:
      "A pink car decoration to bring the baby girl home in style — pink chrome balloon clusters on the bonnet, foil 'GIRL' letters, 'Welcome Baby' bunting and daisy balloon flowers.",
    image: w6.url,
    includes: [
      "Pink chrome balloon clusters on bonnet & sides",
      "Foil 'GIRL' & 'Welcome Baby' bunting",
      "Daisy balloon flowers on grille",
      "Baby pram & 'It's a Girl' cutouts",
    ],
    rating: 4.8, reviews: 196,
    offer: <>₹2,199</>, original: <>₹3,499</>, discountPct: 37,
  },
  {
    id: "welcome-baby-decoration-blue-gold-foil-sofa",
    name: "Blue & Gold 'Welcome Baby' Foil Balloon Wall",
    description:
      "A blue, white & gold-chrome balloon garland on the living-room wall with blue foil 'Welcome Baby' letters, gold baby head, pram, foot and bottle foil balloons.",
    image: w7.url,
    includes: [
      "Blue, white & gold-chrome balloon garland",
      "Blue foil 'Welcome Baby' letters",
      "Baby, pram, foot & bottle foil balloons",
    ],
    rating: 4.7, reviews: 158,
    offer: <>₹2,199</>, original: <>₹3,499</>, discountPct: 37,
  },
  {
    id: "welcome-baby-decoration-baby-boy-cloud-arch",
    name: "'Welcome Baby Boy' Cloud Arch Decoration",
    description:
      "A dreamy blue & silver balloon arch around a printed 'Welcome Baby Boy' cloud backdrop, with a hot-air balloon prop, baby foil and 'It's A Boy' balloon pillar.",
    image: w8.url,
    includes: [
      "Printed 'Welcome Baby Boy' cloud backdrop arch",
      "Blue, white & silver chrome balloon garland",
      "Hot-air balloon prop & baby foil",
      "'It's A Boy' foil balloon pillar",
    ],
    rating: 4.8, reviews: 214,
    offer: <>₹4,999</>, original: <>₹6,999</>, discountPct: 29,
  },
  {
    id: "welcome-baby-decoration-welcome-home-baby-khiyan",
    name: "Personalised 'Welcome Home Baby' Floral Arch",
    description:
      "A personalised welcome-home arch with the baby's name & photo, blue-white pastel balloons, fresh-look florals, greenery cascade and a teddy prop on BABY blocks.",
    image: w9.url,
    includes: [
      "Personalised name & photo backdrop panel",
      "Blue, white & silver organic balloon garland",
      "Fresh-look floral & greenery cascade",
      "Teddy bear prop with wooden BABY blocks",
    ],
    rating: 4.9, reviews: 267,
    offer: <>₹6,499</>, original: <>₹8,999</>, discountPct: 28,
  },
  {
    id: "welcome-baby-decoration-gold-baby-boxes-arch",
    name: "'Welcome Baby' Gold Letters with BABY Balloon Boxes",
    description:
      "A pastel pink, gold & silver chrome balloon arch with gold 'Welcome Baby' foil letters, fairy-light backdrop, teddy foils and clear BABY balloon boxes.",
    image: w10.url,
    includes: [
      "Pastel pink, gold & silver chrome balloon arch",
      "Gold 'Welcome Baby' foil letters",
      "Fairy-light backdrop with drapes",
      "Clear BABY balloon boxes + teddy foils",
    ],
    rating: 4.8, reviews: 203,
    offer: <>₹3,499</>, original: <>₹4,999</>, discountPct: 30,
  },
];

const GALLERY = [w1.url, w2.url, w3.url, w4.url, w5.url, w6.url, w7.url, w8.url, w9.url, w10.url];

function ServicePage() {
  const { category: c } = Route.useLoaderData();
  const wa = waLink(waBookingMessage({ packageName: "Welcome Baby Decoration" }));
  const reviews = REVIEWS.filter(([, , s]) => (s as string) === "Welcome Baby Decoration").slice(0, 6);
  const displayReviews = reviews.length ? reviews : REVIEWS.slice(0, 6);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={w2.url} alt="Welcome Baby Decoration" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.2_0.08_305)]/90 to-[oklch(0.32_0.13_5)]/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
          <Badge className="bg-white/10 backdrop-blur border border-white/20 text-white">
            <Star className="mr-1 h-3 w-3 fill-gold text-gold" /> 4.8 · 540 reviews
          </Badge>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl">Welcome Baby Decoration</h1>
          <p className="mt-4 max-w-2xl text-white/85">Cradle decor, balloon hoops and welcome-home signage to celebrate the newborn’s arrival.</p>
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
        <SectionHeader eyebrow="Packages" title="Welcome Baby Decoration Packages" subtitle="Pick from Essential, Premium and Luxury — or customise on WhatsApp." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((p) => (
            <StaticPackageCard key={p.id} {...p} />
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Gallery" title="Welcome Baby Decoration Gallery" subtitle="Real setups by our decor team." />
          <div className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
            {GALLERY.map((src, i) => (
              <img key={i} src={src} alt={`Welcome Baby Decoration ${i + 1}`} loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
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
          <SectionHeader eyebrow="FAQs" title="Welcome Baby Decoration FAQs" />
          <div className="mt-8"><Faq items={c.faqs} /></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Available In" title="Welcome Baby Decoration in Your City" />
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {BRAND.cities.map((city) => (
            <Link
              key={city}
              to="/city/$slug"
              params={{ slug: city.toLowerCase() }}
              className="rounded-xl border bg-card p-3 text-center text-sm hover:border-primary hover:text-primary"
            >
              Welcome in {city}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
