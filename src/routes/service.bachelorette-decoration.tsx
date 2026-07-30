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
import b1 from "@/assets/bach-b1.jpg.asset.json";
import b2 from "@/assets/bach-b2.webp.asset.json";
import b3 from "@/assets/bach-b3.jpg.asset.json";
import b4 from "@/assets/bach-b4.jpg.asset.json";
import b5 from "@/assets/bach-b5.jpg.asset.json";
import b6 from "@/assets/bach-b6.jpg.asset.json";
import b7 from "@/assets/bach-b7.jpg.asset.json";
import b8 from "@/assets/bach-b8.png.asset.json";
import b9 from "@/assets/bach-b9.png.asset.json";
import b10 from "@/assets/bach-b10.png.asset.json";

const NEW_CARDS = [
  {
    id: "bachelorette-pink-gold-bride-to-be-arch",
    name: "Pink & Gold 'Bride To Be' Arch Decoration",
    description:
      "A blush-pink round backdrop with a gold 'Bride To Be' script, wrapped in a pink, rose-gold and chrome-gold balloon garland with fresh rose clusters, pampas and white cylinder pedestals for the cake and bouquet.",
    image: b4.url,
    includes: [
      "Pink round backdrop with gold 'Bride To Be' lettering",
      "Pink, rose gold & chrome gold balloon garland",
      "Pink rose + pampas floral corners",
      "2 white cylinder pedestals & pink walkway carpet",
    ],
    rating: 4.9,
    reviews: 186,
    offer: "₹4,999",
    original: "₹7,999",
    discountPct: 38,
  },
  {
    id: "bachelorette-black-silver-groom-to-be",
    name: "Black & Silver 'Groom To Be' Sequin Wall Setup",
    description:
      "A dapper bachelor-side setup with a shimmering silver sequin wall, black 'Groom to Be' glitter board, black-silver-chrome balloon garland, white orchid vase, welcome signage and pedestals for the cake and cupcakes.",
    image: b5.url,
    includes: [
      "Silver shimmer sequin wall panel",
      "'Groom To Be' glitter board + personalised welcome sign",
      "Black, silver & chrome balloon garland",
      "2 cylinder pedestals + white floral arrangement",
    ],
    rating: 4.8,
    reviews: 142,
    offer: "₹6,999",
    original: "₹9,999",
    discountPct: 30,
  },
  {
    id: "bachelorette-black-white-neon-bride-to-be",
    name: "Monochrome Neon 'Bride To Be' Ring Setup",
    description:
      "A moody black-and-white theme with a white drape backdrop, glowing 'Bride To Be' neon sign, marquee light-up ring, black & white balloon spiral with confetti balloons and a dried palm-leaf floral accent.",
    image: b6.url,
    includes: [
      "White drape + black curtain backdrop",
      "'Bride To Be' neon sign & light-up marquee ring",
      "Black, white & confetti balloon spiral garland",
      "Dried palm leaf and rose floral accent",
    ],
    rating: 4.9,
    reviews: 121,
    offer: "₹4,499",
    original: "₹6,499",
    discountPct: 31,
  },
  {
    id: "bachelorette-rose-gold-ceiling-bride-room",
    name: "Rose Gold Ceiling 'BRIDE' Hotel Room Surprise",
    description:
      "A dreamy hotel-room surprise with a full ceiling of helium rose-gold and blush balloons with curling ribbons, giant rose-gold BRIDE foil letters on the wall and chrome balloons scattered across the bed.",
    image: b7.url,
    includes: [
      "Helium rose gold & blush ceiling balloons with ribbons",
      "Rose gold 'BRIDE' foil letter set",
      "Chrome balloons styled on the bed",
      "Complete on-site setup & cleanup",
    ],
    rating: 4.8,
    reviews: 168,
    offer: "₹2,499",
    original: "₹3,499",
    discountPct: 29,
  },
  {
    id: "bachelorette-bachelor-party-ring-arch",
    name: "'Bachelor Party' Black & Silver Ring Arch",
    description:
      "A bold last-fling setup on a gold ring frame with a printed 'Bachelor Party' board, black-silver-white balloon garland, giant champagne bottle and Cheers glass foils plus blue hydrangea floral pops.",
    image: b8.url,
    includes: [
      "Gold circular ring frame arch",
      "'Bachelor Party' printed signage board",
      "Black, silver & white balloon garland",
      "Champagne bottle + 'Cheers' glass foil balloons",
    ],
    rating: 4.8,
    reviews: 97,
    offer: "₹4,499",
    original: "₹6,499",
    discountPct: 31,
  },
  {
    id: "bachelorette-shes-tying-the-knot-bow",
    name: "'She's Tying The Knot' Black Bow Backdrop",
    description:
      "A chic Parisian-style setup with a matte black round backdrop printed 'She's Tying The Knot', an all-white balloon garland tied with black satin bows and one oversized black velvet bow statement piece.",
    image: b9.url,
    includes: [
      "Black round backdrop with custom quote print",
      "All-white balloon garland with black satin bows",
      "Oversized black velvet statement bow",
      "Floor balloon spill styling",
    ],
    rating: 4.9,
    reviews: 134,
    offer: "₹4,999",
    original: "₹7,999",
    discountPct: 38,
  },
  {
    id: "bachelorette-rose-gold-butterfly-neon-ring",
    name: "Rose Gold Butterfly 'Bride To Be' Neon Ring",
    description:
      "A glamorous ring arch in rose gold, copper chrome and white balloons with paper butterflies, a glowing 'Bride to be' neon sign, light-up marquee ring, gold cocktail table and a 'Let's Party' champagne foil.",
    image: b10.url,
    includes: [
      "Rose gold, copper & white ring balloon arch",
      "'Bride To Be' neon sign + light-up marquee ring",
      "Paper butterfly cutout styling",
      "Gold cocktail table & champagne foil balloon",
    ],
    rating: 4.9,
    reviews: 158,
    offer: "₹4,499",
    original: "₹6,999",
    discountPct: 36,
  },
];

const GALLERY = [b1, b2, b3, b4, b5, b6, b7, b8, b9, b10].map((a) => a.url);


export const Route = createFileRoute("/service/bachelorette-decoration")({
  loader: () => {
    const c = categoryBySlug("bachelorette-decoration");
    if (!c) throw notFound();
    return { category: c };
  },
  head: () => ({
    meta: [
      { title: `Bachelorette Decoration in India | From ₹1,999 | Decorza Events` },
      { name: "description", content: `Neon signs, sash backdrops, balloon clouds and Insta-worthy bachelorette setups for the bride squad. Book on WhatsApp.` },
      { property: "og:title", content: `Bachelorette Decoration | Decorza Events` },
      { property: "og:image", content: "/4d42c4f0-d677-46b7-b753-3a7931e097e5.jpg" },
    ],
    links: [{ rel: "canonical", href: "/service/bachelorette-decoration" }],
  }),
  component: ServicePage,
});

function ServicePage() {
  const { category: c } = Route.useLoaderData();
  const wa = waLink(waBookingMessage({ packageName: "Bachelorette Decoration" }));
  const reviews = REVIEWS.filter(([, , s]) => (s as string) === "Bachelorette Decoration").slice(0, 6);
  const displayReviews = reviews.length ? reviews : REVIEWS.slice(0, 6);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/4d42c4f0-d677-46b7-b753-3a7931e097e5.jpg" alt="Bachelorette Decoration" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.2_0.08_305)]/90 to-[oklch(0.32_0.13_5)]/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
          <Badge className="bg-white/10 backdrop-blur border border-white/20 text-white">
            <Star className="mr-1 h-3 w-3 fill-gold text-gold" /> 4.9 · 380 reviews
          </Badge>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl">Bachelorette Decoration</h1>
          <p className="mt-4 max-w-2xl text-white/85">Neon signs, sash backdrops, balloon clouds and Insta-worthy bachelorette setups for the bride squad.</p>
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
        <SectionHeader eyebrow="Packages" title="Bachelorette Decoration Packages" subtitle="Pick from Essential, Premium and Luxury — or customise on WhatsApp." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <StaticPackageCard
            id="bachelorette-decoration-essential"
            name="Essential Bachelorette Decoration"
            description="A rose-gold hotel room surprise with helium rose-gold, silver chrome and white balloons floating across the ceiling, giant rose-gold BRIDE foil letters above the headboard, a silver heart foil and bubble balloons styled on the bed."
            image={b1.url}
            includes={[
              "Rose gold 'BRIDE' foil letter set",
              "Rose gold, silver chrome & white ceiling balloons",
              "Silver heart foil + clear bubble balloons on bed",
              "Floor balloon spill styling",
            ]}
            rating={4.8}
            reviews={109}
            offer={<>₹1,999</>}
            original={<>₹3,499</>}
            discountPct={43}
            bestSeller={false}
          />
          <StaticPackageCard
            id="bachelorette-decoration-premium"
            name="Premium Bachelorette Decoration"
            description="An elegant boho setup with a ribbed ivory arch panel, glowing 'Bride To Be' neon sign, an organic purple-cream-white balloon garland with a white cloud cluster, pampas grass starburst and a satin-draped cocktail table with candles."
            image={b2.url}
            includes={[
              "Ivory ribbed arch panel backdrop",
              "'Bride To Be' neon sign",
              "Purple, cream & white organic balloon garland",
              "Pampas starburst + satin cocktail table with candles",
            ]}
            rating={4.9}
            reviews={152}
            offer={<>₹4,999</>}
            original={<>₹7,999</>}
            discountPct={38}
            bestSeller
          />
          <StaticPackageCard
            id="bachelorette-decoration-luxury"
            name="Luxury Bachelorette Decoration"
            description="A glamorous gold shimmer-sequin wall with a 'Bride to be' neon sign, light-up marquee ring, 'She Said Yes' and heart foils, a lush rose-gold and silver chrome balloon garland with flowers and pampas, plus a floor balloon carpet."
            image={b3.url}
            includes={[
              "Gold shimmer sequin wall backdrop",
              "'Bride To Be' neon sign + light-up marquee ring",
              "Rose gold & silver chrome balloon garland with florals",
              "'She Said Yes', heart & champagne foil balloons",
            ]}
            rating={4.8}
            reviews={253}
            offer={<>₹6,999</>}
            original={<>₹9,999</>}
            discountPct={30}
            bestSeller={false}
          />
          {NEW_CARDS.map((c) => (
            <StaticPackageCard
              key={c.id}
              id={c.id}
              name={c.name}
              description={c.description}
              image={c.image}
              includes={c.includes}
              rating={c.rating}
              reviews={c.reviews}
              offer={<>{c.offer}</>}
              original={<>{c.original}</>}
              discountPct={c.discountPct}
            />
          ))}
        </div>

      </section>

      <section className="bg-secondary/40 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Gallery" title="Bachelorette Decoration Gallery" subtitle="Real setups by our decor team." />
          <div className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-3">
            <img src="/4d42c4f0-d677-46b7-b753-3a7931e097e5.jpg" alt="Bachelorette Decoration 1" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src="/48692914-e809-4527-a8d3-a55e5cb89842.webp" alt="Bachelorette Decoration 2" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src="/893cdd5d-ba31-485a-a0ca-fbe8d1990fc7.jpg" alt="Bachelorette Decoration 3" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src="/f3ab7510-f01a-43e3-8829-dee6cbe70a88.jpg" alt="Bachelorette Decoration 4" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
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
          <SectionHeader eyebrow="FAQs" title="Bachelorette Decoration FAQs" />
          <div className="mt-8"><Faq items={c.faqs} /></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Available In" title="Bachelorette Decoration in Your City" />
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {BRAND.cities.map((city) => (
            <Link
              key={city}
              to="/city/$slug"
              params={{ slug: city.toLowerCase() }}
              className="rounded-xl border bg-card p-3 text-center text-sm hover:border-primary hover:text-primary"
            >
              Bachelorette in {city}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
