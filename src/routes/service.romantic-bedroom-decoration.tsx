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
import rbdO1 from "@/assets/rbd-o1.jpg.asset.json";
import rbdO2 from "@/assets/rbd-o2.jpg.asset.json";
import rbdO3 from "@/assets/rbd-o3.jpg.asset.json";
import rbdO4 from "@/assets/rbd-o4.jpg.asset.json";
import rbdO5 from "@/assets/rbd-o5.webp.asset.json";
import rbdO6 from "@/assets/rbd-o6.jpg.asset.json";
import rbdO7 from "@/assets/rbd-o7.jpg.asset.json";
import rbdO8 from "@/assets/rbd-o8.jpg.asset.json";
import rbdO9 from "@/assets/rbd-o9.jpg.asset.json";
import rbdO10 from "@/assets/rbd-o10.jpg.asset.json";
import rbdQ1 from "@/assets/rbd-q1.jpg.asset.json";
import rbdQ2 from "@/assets/rbd-q2.jpg.asset.json";
import rbdQ3 from "@/assets/rbd-q3.jpg.asset.json";
import rbdQ4 from "@/assets/rbd-q4.jpg.asset.json";
import rbdQ5 from "@/assets/rbd-q5.jpg.asset.json";
import rbdQ6 from "@/assets/rbd-q6.jpg.asset.json";
import rbdQ7 from "@/assets/rbd-q7.jpg.asset.json";
import rbdQ8 from "@/assets/rbd-q8.jpg.asset.json";
import rbdQ9 from "@/assets/rbd-q9.jpg.asset.json";
import rbdQ10 from "@/assets/rbd-q10.jpg.asset.json";

const BATCH_Q = [
  {
    id: "rbd-q1-pink-silver-love-balloon-room",
    name: "Pink & Silver Love Balloon Room Decoration",
    description:
      "A soft pink and pearl white ceiling balloon cover with long ribbons and hanging roses, silver heart foils around the room, a silver 'love' script balloon on the bed with a pink net heart, LED tealights and a paper rose bouquet.",
    image: rbdQ1.url,
    includes: [
      "Pink & pearl ceiling balloons with hanging roses",
      "Silver heart foils & 'love' script balloon",
      "Net heart on bed with LED tealight candles",
    ],
    rating: 4.9,
    reviews: 384,
    offer: "₹3,499",
    original: "₹4,999",
    discountPct: 30,
  },
  {
    id: "rbd-q2-will-you-be-my-girlfriend-red-black",
    name: "Will You Be My Girlfriend Red & Black Room",
    description:
      "A bold red and black room proposal with big red foil letters spelling 'WILL YOU BE MY GIRLFRIEND' on the wall, red heart foils on both sides, a bed full of red and black balloons and a thick rose petal spread with candles.",
    image: rbdQ2.url,
    includes: [
      "Red foil 'WILL YOU BE MY GIRLFRIEND' letters",
      "Red & black ceiling and bed balloons with heart foils",
      "Rose petal spread, rose vases & LED candles",
    ],
    rating: 4.8,
    reviews: 297,
    offer: "₹2,499",
    original: "₹3,499",
    discountPct: 29,
  },
  {
    id: "rbd-q3-gold-silver-canopy-birthday-room",
    name: "Gold & Silver Net Canopy Birthday Room",
    description:
      "A warm golden room with a gold and silver chrome balloon ceiling, a fairy-lit net canopy pulled over the bed, gold 'HAPPY BIRTHDAY' foil letters on the wall, a teddy and a bed filled with metallic balloons.",
    image: rbdQ3.url,
    includes: [
      "Gold & silver chrome ceiling balloons",
      "Fairy-lit net canopy over the bed",
      "Gold 'HAPPY BIRTHDAY' foils, teddy & balloon bed",
    ],
    rating: 4.8,
    reviews: 331,
    offer: "₹3,499",
    original: "₹4,999",
    discountPct: 30,
  },
  {
    id: "rbd-q4-red-heart-ceiling-love-you-petal-bed",
    name: "Red Heart Ceiling & 'Love You' Petal Bed Room",
    description:
      "A dense red heart balloon ceiling with curling ribbons, fairy light curtains and a glowing light heart on the wall, finished with a big rose petal heart on the bed spelling 'love you' and red balloons across the floor.",
    image: rbdQ4.url,
    includes: [
      "Full red heart balloon ceiling with ribbons",
      "Fairy light curtains with wall light heart",
      "Rose petal 'love you' heart on bed & floor balloons",
    ],
    rating: 4.9,
    reviews: 412,
    offer: "₹4,499",
    original: "₹6,499",
    discountPct: 31,
  },
  {
    id: "rbd-q5-just-married-red-white-petal-heart",
    name: "Just Married Red & White Petal Heart Room",
    description:
      "A red and white balloon room with gold 'JUST MARRIED' foil letters and a red 'love' script over the headboard, red-white balloon pillars with heart foils and a rich rose petal heart on the bed with a petal-covered floor.",
    image: rbdQ5.url,
    includes: [
      "Red & white ceiling balloons with ribbons",
      "Gold 'JUST MARRIED' foils & red 'love' script",
      "Balloon pillars, rose petal heart on bed & petal floor",
    ],
    rating: 4.8,
    reviews: 358,
    offer: "₹2,999",
    original: "₹4,499",
    discountPct: 33,
  },
  {
    id: "rbd-q6-red-gold-fairy-canopy-first-night",
    name: "Red & Gold Fairy Canopy First Night Room",
    description:
      "A red and gold chrome ceiling balloon spread with curling ribbons, a fairy-lit net canopy tented over the bed, red heart foil balloon pillars and gold 'JUST MARRIED' foil letters on the side wall.",
    image: rbdQ6.url,
    includes: [
      "Red & gold chrome ceiling balloons",
      "Fairy-lit net canopy tent over the bed",
      "Heart foil balloon pillars & gold 'JUST MARRIED' foils",
    ],
    rating: 4.8,
    reviews: 276,
    offer: "₹3,499",
    original: "₹4,999",
    discountPct: 30,
  },
  {
    id: "rbd-q7-just-married-love-marquee-canopy",
    name: "Just Married LOVE Marquee Canopy Room",
    description:
      "A pink and red ceiling balloon cover with hanging rose strings, a beautifully fairy-lit sheer canopy over the bed, gold 'JUST MARRIED' foil letters and glowing marquee LOVE letters on a fresh rose petal bed.",
    image: rbdQ7.url,
    includes: [
      "Pink & red ceiling balloons with hanging rose strings",
      "Fairy-lit sheer canopy over the bed",
      "Gold 'JUST MARRIED' foils & marquee LOVE letters on petal bed",
    ],
    rating: 5,
    reviews: 246,
    offer: "₹4,499",
    original: "₹5,999",
    discountPct: 25,
  },
  {
    id: "rbd-q8-black-gold-silver-canopy-birthday",
    name: "Black Gold & Silver Canopy Birthday Room",
    description:
      "A classy black, gold and silver chrome balloon ceiling with a fairy-lit white net canopy over the bed, a black backdrop with gold 'HAPPY BIRTHDAY' foils and green vines, balloons on the bed and rose petals on the floor.",
    image: rbdQ8.url,
    includes: [
      "Black, gold & silver chrome ceiling balloons",
      "Fairy-lit net canopy with backdrop curtain",
      "Gold 'HAPPY BIRTHDAY' foils, vines & rose petals",
    ],
    rating: 4.8,
    reviews: 302,
    offer: "₹3,499",
    original: "₹4,999",
    discountPct: 30,
  },
  {
    id: "rbd-q9-happy-valentines-day-heart-foil-room",
    name: "Happy Valentine's Day Heart Foil Room",
    description:
      "A ceiling filled with red heart foil balloons and ribbons, red foil 'HAPPY VALENTINE'S DAY' and 'I LOVE YOU' letters on the walls with a red 'love' script, and a candle-lit rose petal heart on the bed.",
    image: rbdQ9.url,
    includes: [
      "Red heart foil balloon ceiling with ribbons",
      "'HAPPY VALENTINE'S DAY' & 'I LOVE YOU' foil letters",
      "Rose petal heart on bed with candles & floor balloons",
    ],
    rating: 4.9,
    reviews: 367,
    offer: "₹3,499",
    original: "₹4,999",
    discountPct: 30,
  },
  {
    id: "rbd-q10-pastel-bobo-balloon-birthday-room",
    name: "Pastel Bobo Balloon Birthday Room Decoration",
    description:
      "A dreamy pastel ceiling balloon cover with long ribbons, colourful 'HAPPY BIRTHDAY' foil letters with a butterfly, silver number balloons, fairy-lit bobo balloons on stands and a rose petal carpet at the bedside.",
    image: rbdQ10.url,
    includes: [
      "Pastel ceiling balloons with hanging ribbons",
      "Colourful 'HAPPY BIRTHDAY' foils, butterfly & number balloons",
      "Fairy-lit bobo balloon stands, flowers & rose petal carpet",
    ],
    rating: 4.9,
    reviews: 288,
    offer: "₹4,499",
    original: "₹5,999",
    discountPct: 25,
  },
];

const BATCH_O = [
  {
    id: "rbd-o1-red-black-silver-birthday-room",
    name: "Red & Black Chrome Birthday Room Decoration",
    description:
      "A bold black, silver and chrome ceiling balloon spread with a red foil 'HAPPY BIRTHDAY' banner and heart foils on the wall, silver balloons on the bed and a red 'I ❤ you' foil script at the bed foot with tealight candles.",
    image: rbdO1.url,
    includes: [
      "Black, silver & chrome ceiling balloons with ribbons",
      "Red foil 'HAPPY BIRTHDAY' banner with heart foils",
      "Red 'I love you' foil script & LED tealight candles",
    ],
    rating: 4.8,
    reviews: 342,
    offer: "₹2,499",
    original: "₹3,499",
    discountPct: 29,
  },
  {
    id: "rbd-o2-red-rose-canopy-birthday-room",
    name: "Red Rose Net Canopy Birthday Room Surprise",
    description:
      "A full red balloon ceiling with hanging roses and photo clips, gold 'HAPPY BIRTHDAY' foil letters, a fairy-lit net canopy over the bed with a rose petal heart and a long petal walkway with red heart balloon pillars.",
    image: rbdO2.url,
    includes: [
      "Red ceiling balloons, hanging roses & photo clips",
      "Fairy-lit net canopy with rose petal heart on bed",
      "Petal walkway with red heart balloon pillars",
    ],
    rating: 4.9,
    reviews: 468,
    offer: "₹3,499",
    original: "₹4,999",
    discountPct: 30,
  },
  {
    id: "rbd-o3-rooftop-floral-cabana-sunset",
    name: "Rooftop Floral Cabana Sunset Date Setup",
    description:
      "A premium rooftop cabana wrapped in fresh pink and white florals and dense fairy lights, cosy cushion seating, marquee LOVE letters, a custom name board, teddy, gift boxes, lanterns and a full rose petal floor with candles.",
    image: rbdO3.url,
    includes: [
      "Fresh floral cabana with fairy lights & cushions",
      "Custom name board, marquee LOVE letters & teddy",
      "Rose petal floor art, lanterns, candles & gift boxes",
    ],
    rating: 5,
    reviews: 187,
    offer: "₹9,999",
    original: "₹14,999",
    discountPct: 33,
  },
  {
    id: "rbd-o4-red-white-gold-cabana-room",
    name: "Red White & Gold Cabana Room Decoration",
    description:
      "An indoor sheer cabana tent lit with fairy lights and a glitter 'Happy Birthday' cutout, framed by a red, white and gold chrome balloon garland, red heart foils and a bed of pink and white balloons inside.",
    image: rbdO4.url,
    includes: [
      "Sheer cabana tent with fairy lights & glitter banner",
      "Red, white & gold chrome balloon garland with heart foils",
      "Balloon bed inside with cushions & side balloon pillars",
    ],
    rating: 4.8,
    reviews: 263,
    offer: "₹4,499",
    original: "₹6,499",
    discountPct: 31,
  },
  {
    id: "rbd-o5-just-married-pink-gold-first-night",
    name: "Just Married Pink & Gold First Night Room",
    description:
      "A first-night room in pink and gold balloon clusters across the ceiling and walls, a red 'love' script balloon over a fairy-lit net canopy, gold 'JUST MARRIED' foils and a fresh rose petal heart on the bed.",
    image: rbdO5.url,
    includes: [
      "Pink & gold balloon clusters with hanging ribbons",
      "Net canopy with fairy lights & red 'love' script balloon",
      "Gold 'JUST MARRIED' foils & rose petal heart on bed",
    ],
    rating: 4.9,
    reviews: 391,
    offer: "₹3,499",
    original: "₹4,999",
    discountPct: 30,
  },
  {
    id: "rbd-o6-golden-gazebo-teepee-milestone",
    name: "Golden Gazebo Teepee Milestone Celebration",
    description:
      "A white gazebo teepee glowing with fairy lights, a cursive 'Happy Birthday' cutout with green vines and a paper fan top, rose gold number balloons with a crown, yellow-white balloon clusters, heart foils and a cake table.",
    image: rbdO6.url,
    includes: [
      "Fairy-lit teepee with cursive banner, vines & fan top",
      "Rose gold number balloons with crown foil",
      "Yellow-white balloon clusters, heart foils & cake table styling",
    ],
    rating: 4.7,
    reviews: 208,
    offer: "₹4,499",
    original: "₹6,499",
    discountPct: 31,
  },
  {
    id: "rbd-o7-golden-night-flower-mandap-bed",
    name: "Golden Night Fresh Flower Mandap Bed Decoration",
    description:
      "A four-pillar fresh flower mandap over the bed built with white, purple and red chrysanthemums, roses and palm-leaf weaves, hanging mogra strings with red net bows and a thick rose petal carpet on the floor.",
    image: rbdO7.url,
    includes: [
      "Four-pillar fresh flower mandap with palm-leaf weaves",
      "Hanging mogra strings with red net bows",
      "Rose petal carpet & complete bed styling",
    ],
    rating: 5,
    reviews: 176,
    offer: "₹11,999",
    original: "₹14,999",
    discountPct: 20,
  },
  {
    id: "rbd-o8-golden-night-drape-flower-canopy",
    name: "Golden Night Drape & Flower Canopy Room",
    description:
      "A grand fairy-lit white drape canopy pulled from the ceiling to the bed corners, topped with a heavy fresh flower garland of white, orange and purple blooms running down the centre, over a red velvet bed and petal floor.",
    image: rbdO8.url,
    includes: [
      "Fairy-lit white drape canopy over the bed",
      "Heavy fresh flower garland with centre floral fall",
      "Red velvet bed styling with full rose petal floor",
    ],
    rating: 5,
    reviews: 164,
    offer: "₹11,999",
    original: "₹14,999",
    discountPct: 20,
  },
  {
    id: "rbd-o9-rose-garden-canopy-first-night",
    name: "Rose Garden Canopy First Night Decoration",
    description:
      "A luxury four-post canopy topped with a dense pink rose, baby's breath and chrysanthemum garden, sheer fairy-lit drapes falling to the bed, full floral pillars on both sides and a rich rose petal floor.",
    image: rbdO9.url,
    includes: [
      "Four-post canopy with pink rose & baby's breath top",
      "Sheer fairy-lit drapes with full floral corner pillars",
      "Rose petal floor spread & bed styling",
    ],
    rating: 5,
    reviews: 198,
    offer: "₹11,999",
    original: "₹14,999",
    discountPct: 20,
  },
  {
    id: "rbd-o10-pink-silver-number-birthday-room",
    name: "Pink & Silver Number Birthday Room Decoration",
    description:
      "A pretty pink and silver chrome ceiling balloon canopy with hanging ribbons and roses, gold 'HAPPY BIRTHDAY' foils with a red 'love' script, giant magenta heart foils, silver number balloons and rose petal hearts on the floor.",
    image: rbdO10.url,
    includes: [
      "Pink & silver chrome ceiling balloons with hanging roses",
      "Gold 'HAPPY BIRTHDAY' foils, 'love' script & heart foils",
      "Silver number balloons with balloon base & petal hearts",
    ],
    rating: 4.9,
    reviews: 305,
    offer: "₹3,999",
    original: "₹5,499",
    discountPct: 27,
  },
];

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
          {[...NEW_PACKAGES, ...BATCH_O, ...BATCH_Q].map((p) => (
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
              bestSeller={(p as { bestSeller?: boolean }).bestSeller ?? false}
            />
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Gallery" title="Romantic Bedroom Decoration Gallery" subtitle="Real setups by our decor team." />
          <div className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-3">
            {[rbdE1.url, rbdP1.url, rbdL1.url, ...NEW_PACKAGES.map((p) => p.image), ...BATCH_O.map((p) => p.image), ...BATCH_Q.map((p) => p.image)].map((src, i) => (
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
