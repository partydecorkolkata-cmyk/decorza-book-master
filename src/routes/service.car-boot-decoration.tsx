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
import c1 from "@/assets/car-c1.jpg.asset.json";
import c2 from "@/assets/car-c2.png.asset.json";
import c3 from "@/assets/car-c3.png.asset.json";
import c4 from "@/assets/car-c4.jpg.asset.json";
import c5 from "@/assets/car-c5.png.asset.json";
import c6 from "@/assets/car-c6.png.asset.json";
import c7 from "@/assets/car-c7.jpg.asset.json";
import c8 from "@/assets/car-c8.jpg.asset.json";
import c9 from "@/assets/car-c9.jpg.asset.json";
import c10 from "@/assets/car-c10.jpg.asset.json";
import d1 from "@/assets/car-d1.jpg.asset.json";
import d2 from "@/assets/car-d2.jpg.asset.json";
import d3 from "@/assets/car-d3.jpg.asset.json";
import d4 from "@/assets/car-d4.jpg.asset.json";
import d5 from "@/assets/car-d5.jpg.asset.json";
import d6 from "@/assets/car-d6.jpg.asset.json";
import d7 from "@/assets/car-d7.jpg.asset.json";
import d8 from "@/assets/car-d8.webp.asset.json";
import d9 from "@/assets/car-d9.png.asset.json";
import d10 from "@/assets/car-d10.png.asset.json";

const CORE = [
  {
    id: "car-boot-essential-oh-baby-gold-butterfly",
    name: "Essential 'Oh Baby' Gold Butterfly Car Boot Decoration",
    description:
      "A warm golden car-boot surprise with 'Oh Baby' cutout letters and glitter butterflies on the rear glass, a glowing 'Happy Anniversary' script cutout, a gold 'I LOVE YOU' banner, a cuddly teddy and a boot full of gold and white balloons with fairy lights.",
    image: c1.url,
    includes: [
      "Gold 'Oh Baby' cutout + glitter butterfly cluster",
      "Glowing 'Happy Anniversary' script cutout",
      "Gold 'I LOVE YOU' heart banner",
      "Teddy bear, gold anniversary foil & fairy lights",
      "Gold & white balloon bed inside the boot",
    ],
    rating: 4.8,
    reviews: 214,
    offer: "₹2,499",
    original: "₹3,499",
    discountPct: 29,
  },
  {
    id: "car-boot-premium-black-gold-bday",
    name: "Premium Black & Gold 'Happy Bday' Car Boot Decoration",
    description:
      "A bold black and gold car-boot setup with a gold foil curtain backdrop, black 'HAPPY BDAY' flag banners, a giant champagne bottle foil, a gold heart foil, hanging personalised photo cards and balloon bunches on the open boot lid.",
    image: c2.url,
    includes: [
      "Gold foil fringe curtain backdrop",
      "Black & gold 'HAPPY BDAY' flag banners",
      "Giant champagne bottle foil + gold heart foil",
      "Hanging personalised photo prints with ribbons",
      "Black & gold balloon clusters on the boot lid",
    ],
    rating: 4.9,
    reviews: 302,
    offer: "₹2,499",
    original: "₹3,499",
    discountPct: 29,
    bestSeller: true,
  },
  {
    id: "car-boot-luxury-white-heart-teddy-roses",
    name: "Luxury White Heart & Roses Car Boot Decoration",
    description:
      "A dreamy evening car-boot setup with a white 'HAPPY BIRTHDAY' banner, hanging white and green paper heart strings, warm fairy lights outlining the boot, heart 'I love you' foil balloons on both sides, clipped photo prints, a red rose bouquet and a big teddy.",
    image: c3.url,
    includes: [
      "White 'HAPPY BIRTHDAY' banner + paper heart strings",
      "Fairy light outline around the boot & lid",
      "Two 'I love you' heart foil balloons",
      "Photo clip string with your pictures",
      "Red rose bouquet, teddy bear & gift box",
    ],
    rating: 4.9,
    reviews: 268,
    offer: "₹3,499",
    original: "₹4,999",
    discountPct: 30,
  },
];

const BATCH_C = [
  {
    id: "car-boot-champagne-gold-fringe-suv",
    name: "Champagne Gold Fringe SUV Boot Decoration",
    description:
      "A night-time SUV boot surprise with a rose-gold fringe curtain, black & gold 'HAPPY BIRTHDAY' banner, a large champagne bottle foil, a red heart foil and gold-black balloons with cascading fairy lights and ribbons.",
    image: c4.url,
    includes: [
      "Rose gold foil fringe curtain",
      "Black & gold 'HAPPY BIRTHDAY' banner",
      "Champagne bottle foil + red heart foil",
      "Gold, black & silver balloons with ribbon curls",
      "Fairy light curtain on the boot door",
    ],
    rating: 4.7,
    reviews: 132,
    offer: "₹1,999",
    original: "₹2,999",
    discountPct: 33,
  },
  {
    id: "car-boot-anniversary-number-silver-fringe",
    name: "Silver Fringe Anniversary Number Car Boot Decoration",
    description:
      "A shimmering anniversary boot setup with a silver fringe curtain, cursive 'Happy Anniversary' cutout, hanging gold hearts, big gold number foil balloons for your year and a bed of red, gold and white balloons lit by fairy lights.",
    image: c5.url,
    includes: [
      "Silver foil fringe curtain backdrop",
      "Cursive 'Happy Anniversary' cutout",
      "Hanging gold heart cutouts",
      "Gold number foil balloons (your year)",
      "Red, gold & white balloon bed with fairy lights",
    ],
    rating: 4.8,
    reviews: 176,
    offer: "₹1,999",
    original: "₹2,999",
    discountPct: 33,
  },
  {
    id: "car-boot-valentine-love-yellow-white",
    name: "Valentine 'LOVE' Yellow & White Car Boot Decoration",
    description:
      "A sunny romantic boot setup with yellow, white and gold helium balloons on the lid, a big red 'Happy Valentine's Day' heart, a red 'I LOVE you' polka heart with silver LOVE foil letters, a chalkboard message, a rustic bouquet and a glowing LOVE marquee light.",
    image: c6.url,
    includes: [
      "Yellow, white & gold helium balloon ceiling",
      "Red 'Happy Valentine's Day' heart foil",
      "Red polka heart + silver 'LOVE' foil letters",
      "Chalkboard message frame & rustic dried bouquet",
      "LED 'LOVE' marquee light with fairy lights",
    ],
    rating: 4.9,
    reviews: 198,
    offer: "₹3,499",
    original: "₹4,999",
    discountPct: 30,
  },
  {
    id: "car-boot-gold-silver-garland-photos",
    name: "Gold & Silver Balloon Garland Photo Boot Decoration",
    description:
      "A classy boot setup with a gold cursive 'Happy Birthday' banner, a dense gold and silver balloon garland, a gold foil curtain, printed photo memories tucked between chrome gold balloons and glowing LED balloons.",
    image: c7.url,
    includes: [
      "Gold cursive 'Happy Birthday' banner",
      "Gold & silver balloon garland",
      "Gold foil fringe curtain",
      "Printed photo memories display",
      "Chrome gold balloons with LED accents",
    ],
    rating: 4.7,
    reviews: 144,
    offer: "₹2,499",
    original: "₹3,499",
    discountPct: 29,
  },
  {
    id: "car-boot-red-gold-number-birthday",
    name: "Red & Gold Number Birthday Car Boot Decoration",
    description:
      "A striking red-themed boot surprise with a red foil fringe curtain, a white and gold 'HAPPY BIRTHDAY' banner, giant gold number foil balloons for the age, red heart foils on both sides and a bed of red, yellow and cream balloons under fairy lights.",
    image: c8.url,
    includes: [
      "Red foil fringe curtain backdrop",
      "White & gold 'HAPPY BIRTHDAY' banner",
      "Giant gold number foil balloons (any age)",
      "Red heart foil balloon bunches",
      "Red, yellow & cream balloon bed with fairy lights",
    ],
    rating: 4.9,
    reviews: 236,
    offer: "₹2,199",
    original: "₹3,499",
    discountPct: 37,
    bestSeller: true,
  },
  {
    id: "car-boot-confetti-photo-string-number",
    name: "Confetti Balloon & Photo String Car Boot Decoration",
    description:
      "A fun night boot setup with a black and yellow 'HAPPY BIRTHDAY' banner, transparent confetti balloons on both sides, a photo print string across the boot, gold number foil balloons and polka gold balloons with warm fairy lights.",
    image: c9.url,
    includes: [
      "Black & yellow 'HAPPY BIRTHDAY' banner",
      "Transparent confetti balloon bunches",
      "Photo print string across the boot",
      "Gold number foil balloons (any age)",
      "Gold polka balloons & fairy lights",
    ],
    rating: 4.6,
    reviews: 118,
    offer: "₹1,999",
    original: "₹2,999",
    discountPct: 33,
  },
  {
    id: "car-boot-peach-rosegold-love-boot",
    name: "Peach & Rose Gold 'Love' Car Boot Decoration",
    description:
      "A soft pastel boot setup with a peach and gold 'HAPPY BIRTHDAY' banner, a rose gold fringe curtain, rose gold 'love' foil letters and a boot filled with blush, grey and pastel balloons.",
    image: c10.url,
    includes: [
      "Peach & gold 'HAPPY BIRTHDAY' banner",
      "Rose gold foil fringe curtain",
      "Rose gold 'love' foil letters",
      "Blush, grey & pastel balloon bed",
      "Themed cake topper picks & props",
    ],
    rating: 4.7,
    reviews: 127,
    offer: "₹1,999",
    original: "₹2,999",
    discountPct: 33,
  },
];

const GALLERY = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10].map((a) => a.url);


export const Route = createFileRoute("/service/car-boot-decoration")({
  loader: () => {
    const c = categoryBySlug("car-boot-decoration");
    if (!c) throw notFound();
    return { category: c };
  },
  head: () => ({
    meta: [
      { title: `Car Boot Decoration in India | From ₹1,999 | Decorza Events` },
      { name: "description", content: `Roses, balloons, candles and LED setups inside your car boot — the most-loved surprise of the year. Book on WhatsApp.` },
      { property: "og:title", content: `Car Boot Decoration | Decorza Events` },
      { property: "og:image", content: c8.url },
    ],
    links: [{ rel: "canonical", href: "/service/car-boot-decoration" }],
  }),
  component: ServicePage,
});

function ServicePage() {
  const { category: c } = Route.useLoaderData();
  const wa = waLink(waBookingMessage({ packageName: "Car Boot Decoration" }));
  const reviews = REVIEWS.filter(([, , s]) => (s as string) === "Car Boot Decoration").slice(0, 6);
  const displayReviews = reviews.length ? reviews : REVIEWS.slice(0, 6);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={c8.url} alt="Car Boot Decoration" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.2_0.08_305)]/90 to-[oklch(0.32_0.13_5)]/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
          <Badge className="bg-white/10 backdrop-blur border border-white/20 text-white">
            <Star className="mr-1 h-3 w-3 fill-gold text-gold" /> 4.9 · 780 reviews
          </Badge>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl">Car Boot Decoration</h1>
          <p className="mt-4 max-w-2xl text-white/85">Roses, balloons, candles and LED setups inside your car boot — the most-loved surprise of the year.</p>
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
        <SectionHeader eyebrow="Packages" title="Car Boot Decoration Packages" subtitle="Pick from Essential, Premium and Luxury — or customise on WhatsApp." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[...CORE, ...BATCH_C].map((p) => (
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
              bestSeller={"bestSeller" in p ? (p as { bestSeller?: boolean }).bestSeller : false}
            />
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Gallery" title="Car Boot Decoration Gallery" subtitle="Real setups by our decor team." />
          <div className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-3">
            {GALLERY.map((src, i) => (
              <img key={src} src={src} alt={`Car Boot Decoration ${i + 1}`} loading="lazy" className="aspect-[4/3] w-full rounded-xl bg-secondary object-contain transition-transform hover:scale-[1.02]" />
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
          <SectionHeader eyebrow="FAQs" title="Car Boot Decoration FAQs" />
          <div className="mt-8"><Faq items={c.faqs} /></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Available In" title="Car Boot Decoration in Your City" />
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {BRAND.cities.map((city) => (
            <Link
              key={city}
              to="/city/$slug"
              params={{ slug: city.toLowerCase() }}
              className="rounded-xl border bg-card p-3 text-center text-sm hover:border-primary hover:text-primary"
            >
              Car in {city}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
