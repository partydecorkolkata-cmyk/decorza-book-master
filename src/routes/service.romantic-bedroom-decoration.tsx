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
import rbdE1 from "@/assets/rbd-e1.jpg.asset.json";
import rbdP1 from "@/assets/rbd-p1.jpg.asset.json";
import rbdL1 from "@/assets/rbd-l1.jpg.asset.json";
import rbdN1 from "@/assets/rbd-n1.jpg.asset.json";
import rbdN2 from "@/assets/rbd-n2.jpg.asset.json";
import rbdN3 from "@/assets/rbd-n3.jpg.asset.json";
import rbdN4 from "@/assets/rbd-n4.jpg.asset.json";
import rbdN5 from "@/assets/rbd-n5.webp.asset.json";
import rbdN6 from "@/assets/rbd-n6.jpg.asset.json";
import rbdN7 from "@/assets/rbd-n7.webp.asset.json";

const NEW_PACKAGES = [
  {
    id: "rbd-cabana-pink-birthday",
    name: "Pink Cabana Romantic Room Decoration",
    description:
      "A dreamy white net cabana glowing with fairy lights, topped with a silver star and a hand-lettered 'Happy Birthday' banner, framed by pink and pearl balloon pillars with red foil hearts and a rose petal walkway.",
    image: rbdN1.url,
    includes: [
      "White net cabana with fairy light curtain",
      "Pink & pearl balloon pillars with red foil hearts",
      "Rose petal aisle, petal hearts & tealight candles",
    ],
    rating: 4.9,
    reviews: 512,
    offer: "₹3,999",
    original: "₹6,499",
    discountPct: 38,
    bestSeller: true,
  },
  {
    id: "rbd-rooftop-love-tent",
    name: "Rooftop Love Tent Romantic Setup",
    description:
      "An open-air rooftop teepee draped in sheer net and warm fairy lights, crowned with red foil 'love' balloons, a bed of red heart balloons inside and lantern cages glowing on both sides.",
    image: rbdN2.url,
    includes: [
      "Sheer teepee tent with warm fairy lights",
      "Red foil 'LOVE' balloons & heart balloon bed",
      "Lantern cages and LED candles",
    ],
    rating: 4.8,
    reviews: 388,
    offer: "₹3,999",
    original: "₹5,999",
    discountPct: 33,
  },
  {
    id: "rbd-candlelit-terrace-canopy",
    name: "Candlelit Terrace Canopy Date Setup",
    description:
      "A night-time terrace canopy lit with twinkling lights, red heart balloons on a white mattress, gold star balloon pillars and a long candle-lined rose petal pathway leading to the tent.",
    image: rbdN3.url,
    includes: [
      "Canopy tent with fairy lights & heart balloons",
      "Gold star balloon pillars on both sides",
      "Long rose petal pathway with LED candles",
    ],
    rating: 4.9,
    reviews: 296,
    offer: "₹4,499",
    original: "₹6,499",
    discountPct: 31,
  },
  {
    id: "rbd-just-married-balloon-room",
    name: "Just Married Balloon Room Decoration",
    description:
      "A full red and white balloon room with a fairy-lit net canopy over the bed, gold 'JUST MARRIED' foils, a red 'love' script balloon and hanging heart foils — made for the first night home.",
    image: rbdN4.url,
    includes: [
      "Net canopy over bed with fairy lights",
      "Gold 'JUST MARRIED' & red 'love' foil balloons",
      "Red-white floor and ceiling balloon spread",
    ],
    rating: 4.8,
    reviews: 431,
    offer: "₹3,499",
    original: "₹4,999",
    discountPct: 30,
  },
  {
    id: "rbd-happy-honeymoon-room",
    name: "Happy Honeymoon Balloon Room",
    description:
      "A honeymoon suite styled with a red and pink ceiling balloon cloud, personalised silver foil message on the wall, floating heart balloons and a rose petal heart on the bed.",
    image: rbdN5.url,
    includes: [
      "Red & pink ceiling balloon cloud with ribbons",
      "Personalised silver foil name/message",
      "Heart foil balloons & rose petal heart on bed",
    ],
    rating: 4.9,
    reviews: 356,
    offer: "₹3,499",
    original: "₹4,999",
    discountPct: 30,
  },
  {
    id: "rbd-boho-picnic-teepee",
    name: "Boho Picnic Teepee Romantic Date",
    description:
      "A soft ivory teepee wrapped in warm fairy lights with cosy cushions, a white rose posy, pampas grass, marquee 'LOVE' letters and white balloons — a calm, aesthetic indoor date setup.",
    image: rbdN6.url,
    includes: [
      "Ivory teepee with fairy lights & cushion seating",
      "Pampas grass, white florals & marquee LOVE light",
      "White balloon accents and cosy rug styling",
    ],
    rating: 4.8,
    reviews: 274,
    offer: "₹4,499",
    original: "₹6,499",
    discountPct: 31,
  },
  {
    id: "rbd-luxury-floral-canopy-bed",
    name: "Luxury Floral Canopy Bed Decoration",
    description:
      "A grand four-pillar bed canopy in shimmer drapes and fairy lights, topped with a thick red and white flower garland, corner floral bouquets and hanging hearts — our most premium first-night setup.",
    image: rbdN7.url,
    includes: [
      "Four-pillar canopy with shimmer drapes & lights",
      "Full flower garland top with corner bouquets",
      "Hanging hearts, mood lighting & bed styling",
    ],
    rating: 5,
    reviews: 218,
    offer: "₹8,499",
    original: "₹11,999",
    discountPct: 29,
  },
];

export const Route = createFileRoute("/service/romantic-bedroom-decoration")({
  loader: () => {
    const c = categoryBySlug("romantic-bedroom-decoration");
    if (!c) throw notFound();
    return { category: c };
  },
  head: () => ({
    meta: [
      { title: `Romantic Bedroom Decoration in India | From ₹2,999 | Decorza Events` },
      { name: "description", content: `Rose petal beds, candle paths, balloons and fairy lights — perfect for honeymoons, anniversaries and surprises. Book on WhatsApp.` },
      { property: "og:title", content: `Romantic Bedroom Decoration | Decorza Events` },
      { property: "og:image", content: "/anniversary-2.webp" },
    ],
    links: [{ rel: "canonical", href: "/service/romantic-bedroom-decoration" }],
  }),
  component: ServicePage,
});

function ServicePage() {
  const { category: c } = Route.useLoaderData();
  const wa = waLink(waBookingMessage({ packageName: "Romantic Bedroom Decoration" }));
  const reviews = REVIEWS.filter(([, , s]) => (s as string) === "Romantic Bedroom Decoration").slice(0, 6);
  const displayReviews = reviews.length ? reviews : REVIEWS.slice(0, 6);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/anniversary-2.webp" alt="Romantic Bedroom Decoration" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.2_0.08_305)]/90 to-[oklch(0.32_0.13_5)]/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
          <Badge className="bg-white/10 backdrop-blur border border-white/20 text-white">
            <Star className="mr-1 h-3 w-3 fill-gold text-gold" /> 4.9 · 1,450 reviews
          </Badge>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl">Romantic Bedroom Decoration</h1>
          <p className="mt-4 max-w-2xl text-white/85">Rose petal beds, candle paths, balloons and fairy lights — perfect for honeymoons, anniversaries and surprises.</p>
          <p className="mt-4 font-display text-2xl text-gold">Starting from ₹2,999</p>
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
        <SectionHeader eyebrow="Packages" title="Romantic Bedroom Decoration Packages" subtitle="Pick from Essential, Premium and Luxury — or customise on WhatsApp." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <StaticPackageCard
            id="romantic-bedroom-decoration-essential"
            name="Essential Rose Gold Balloon Bedroom Decoration"
            description="A pretty bedroom surprise with a full rose gold and pink ceiling balloon cover, rose gold 'HAPPY BIRTHDAY' foil letters with heart accents on the wall and balloons scattered across the bed."
            image={rbdE1.url}
            includes={["Rose gold & pink ceiling balloons with ribbons","Rose gold foil letters with heart foils","Balloon spread on bed & wall balloon flowers"]}
            rating={4.8}
            reviews={414}
            offer={<>₹2,199</>}
            original={<>₹3,499</>}
            discountPct={37}
            bestSeller={false}
          />
          <StaticPackageCard
            id="romantic-bedroom-decoration-premium"
            name="Premium Just Married Love Room Decoration"
            description="A complete red and white love room with hanging heart foils and roses from the ceiling, gold 'JUST MARRIED' letters, a rose petal heart on the bed and a big 'I LOVE YOU' petal message on the floor."
            image={rbdP1.url}
            includes={["Red & white ceiling balloons with hanging heart foils","Gold 'JUST MARRIED' foil letters & hanging roses","Rose petal heart on bed + 'I LOVE YOU' petal floor art"]}
            rating={4.9}
            reviews={580}
            offer={<>₹3,499</>}
            original={<>₹4,999</>}
            discountPct={30}
            bestSeller={true}
          />
          <StaticPackageCard
            id="romantic-bedroom-decoration-luxury"
            name="Luxury Fairy Light Cabana Bedroom Decoration"
            description="A luxury cabana canopy over the bed in sheer white drapes packed with fairy lights, hanging white florals and red rose bunches, finished with a candle-lit rose petal walkway."
            image={rbdL1.url}
            includes={["Four-post cabana canopy with dense fairy lights","Hanging white floral vines & red rose bunches","Rose petal aisle with LED candles & bed styling"]}
            rating={5}
            reviews={967}
            offer={<>₹7,499</>}
            original={<>₹9,999</>}
            discountPct={25}
            bestSeller={false}
          />
          {NEW_PACKAGES.map((p) => (
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
          <SectionHeader eyebrow="Gallery" title="Romantic Bedroom Decoration Gallery" subtitle="Real setups by our decor team." />
          <div className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-3">
            {[rbdE1.url, rbdP1.url, rbdL1.url, ...NEW_PACKAGES.map((p) => p.image)].map((src, i) => (
              <img key={src} src={src} alt={`Romantic Bedroom Decoration ${i + 1}`} loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
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
          <SectionHeader eyebrow="FAQs" title="Romantic Bedroom Decoration FAQs" />
          <div className="mt-8"><Faq items={c.faqs} /></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Available In" title="Romantic Bedroom Decoration in Your City" />
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {BRAND.cities.map((city) => (
            <Link
              key={city}
              to="/city/$slug"
              params={{ slug: city.toLowerCase() }}
              className="rounded-xl border bg-card p-3 text-center text-sm hover:border-primary hover:text-primary"
            >
              Romantic in {city}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
