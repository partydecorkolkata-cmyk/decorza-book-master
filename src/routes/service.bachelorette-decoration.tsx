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
import cover from "@/assets/bach-cover.jpg.asset.json";
import c1 from "@/assets/bach-c1.jpg.asset.json";
import c2 from "@/assets/bach-c2.jpg.asset.json";
import c3 from "@/assets/bach-c3.jpg.asset.json";
import c4 from "@/assets/bach-c4.jpg.asset.json";
import c5 from "@/assets/bach-c5.jpg.asset.json";
import c6 from "@/assets/bach-c6.jpg.asset.json";
import c7 from "@/assets/bach-c7.jpg.asset.json";
import c8 from "@/assets/bach-c8.jpg.asset.json";
import c9 from "@/assets/bach-c9.jpg.asset.json";
import c10 from "@/assets/bach-c10.jpg.asset.json";
import d1 from "@/assets/bach-d1.jpg.asset.json";
import d2 from "@/assets/bach-d2.jpg.asset.json";
import d3 from "@/assets/bach-d3.jpg.asset.json";
import d4 from "@/assets/bach-d4.webp.asset.json";
import d5 from "@/assets/bach-d5.webp.asset.json";
import d6 from "@/assets/bach-d6.jpg.asset.json";
import d7 from "@/assets/bach-d7.webp.asset.json";
import d8 from "@/assets/bach-d8.jpg.asset.json";
import d9 from "@/assets/bach-d9.jpg.asset.json";
import d10 from "@/assets/bach-d10.webp.asset.json";

const BATCH_D = [
  {
    id: "bachelorette-black-gold-cheers-fringe-arch",
    name: "Black & Gold 'BRIDE TO BE' Cheers Fringe Arch",
    description:
      "A glam black fringe curtain backdrop with gold BRIDE TO BE foil letters, framed by a lush black, chrome-gold and confetti balloon arch with rose-gold champagne bottle, 'Cheers' glass, star and crown foil balloons.",
    image: d1.url,
    includes: [
      "Black fringe curtain backdrop",
      "Gold 'BRIDE TO BE' foil letters",
      "Black, chrome gold & confetti balloon arch",
      "Champagne, 'Cheers' glass, star & crown foils",
    ],
    rating: 4.8,
    reviews: 118,
    offer: "₹2,799",
    original: "₹3,999",
    discountPct: 30,
  },
  {
    id: "bachelorette-rosegold-silver-fringe-bride-to-be",
    name: "Rose Gold & White 'BRIDE TO BE' Silver Fringe Setup",
    description:
      "A soft rose-gold and white balloon garland arch over a shimmering silver fringe curtain with gold BRIDE TO BE foil letters, a rose-gold heart foil, diamond ring balloon and a champagne bottle foil accent.",
    image: d2.url,
    includes: [
      "Silver fringe curtain backdrop",
      "Gold 'BRIDE TO BE' foil letters",
      "Rose gold, white & confetti balloon garland",
      "Heart, diamond ring & champagne bottle foils",
    ],
    rating: 4.7,
    reviews: 104,
    offer: "₹2,699",
    original: "₹3,499",
    discountPct: 23,
  },
  {
    id: "bachelorette-ivory-white-chrome-arch-panel",
    name: "Ivory & Chrome 'Bride to Be' Arch Panel",
    description:
      "An understated luxe setup with a cream arch panel printed 'Bride to Be' in elegant script, wrapped in an organic white, chrome-silver and gold balloon garland with clear bubble balloons and a matching floor cluster.",
    image: d3.url,
    includes: [
      "Ivory arch panel with 'Bride to Be' script",
      "White, chrome silver & gold organic garland",
      "Clear bubble balloon accents",
      "Matching floor balloon cluster",
    ],
    rating: 4.9,
    reviews: 137,
    offer: "₹4,499",
    original: "₹6,999",
    discountPct: 36,
  },
  {
    id: "bachelorette-sunflower-yellow-bride-to-be",
    name: "Sunflower Yellow 'Bride To Be' Floral Arch",
    description:
      "A bright sunflower theme with a white arch panel, black 'Bride To Be' lettering, a yellow, mustard, white and chrome-silver balloon garland loaded with fresh sunflowers, daisies and eucalyptus plus two floor balloon columns.",
    image: d4.url,
    includes: [
      "White arch panel with 'Bride To Be' decal",
      "Yellow, mustard, white & chrome balloon garland",
      "Sunflower, daisy & eucalyptus florals",
      "2 matching floor balloon columns",
    ],
    rating: 4.9,
    reviews: 162,
    offer: "₹4,999",
    original: "₹7,999",
    discountPct: 38,
  },
  {
    id: "bachelorette-black-silver-neon-arch-panel",
    name: "Black & Silver Neon 'Bride To Be' Arch",
    description:
      "A moody black arch panel lit by a pink 'Bride To Be' neon sign, dressed with a bold black, chrome-silver and clear bubble balloon garland, oversized orbz balloons and a blush cylinder pedestal for the cake.",
    image: d5.url,
    includes: [
      "Black arch panel with pink 'Bride To Be' neon",
      "Black, chrome silver & bubble balloon garland",
      "Giant chrome orbz balloon accents",
      "Blush cylinder pedestal for cake",
    ],
    rating: 4.8,
    reviews: 126,
    offer: "₹4,999",
    original: "₹7,499",
    discountPct: 33,
  },
  {
    id: "bachelorette-poolside-groom-to-be-arch",
    name: "Poolside 'Groom To Be' Cream & Black Arch",
    description:
      "A stylish poolside bachelor setup with a ribbed cream arch panel, a glowing 'Groom To Be' neon sign, a flowing black, cream and chrome-silver balloon garland and a matching fluted pedestal under hanging lanterns.",
    image: d6.url,
    includes: [
      "Ribbed cream arch panel backdrop",
      "'Groom To Be' neon sign",
      "Black, cream & chrome silver balloon garland",
      "Fluted cream pedestal + outdoor setup",
    ],
    rating: 4.8,
    reviews: 89,
    offer: "₹4,999",
    original: "₹7,999",
    discountPct: 38,
  },
  {
    id: "bachelorette-garden-pink-white-bride-panel",
    name: "Garden Pink & White 'Bride To Be' Panel Setup",
    description:
      "An outdoor lawn setup with a lilac printed bride-illustration arch panel, a pink and white balloon garland with clear bubble balloons, a giant champagne bottle foil, gold side table and a dried pampas floral arrangement.",
    image: d7.url,
    includes: [
      "Printed bride-illustration arch panel",
      "Pink & white balloon garland with bubbles",
      "Giant champagne bottle foil balloon",
      "Gold side table + pampas floral spray",
    ],
    rating: 4.9,
    reviews: 143,
    offer: "₹4,999",
    original: "₹7,499",
    discountPct: 33,
  },
  {
    id: "bachelorette-blush-gold-rose-arch-panel",
    name: "Blush & Gold 'Bride To Be' Rose Arch",
    description:
      "A romantic lilac-blush arch panel with gold cursive 'Bride To Be' lettering, a chrome-gold, rose-gold and blush balloon garland cascading down both sides and a fresh rose corner spray against black drapes.",
    image: d8.url,
    includes: [
      "Blush arch panel with gold 'Bride To Be' script",
      "Chrome gold, rose gold & blush balloon garland",
      "Fresh rose floral corner spray",
      "Black drape backdrop framing",
    ],
    rating: 4.9,
    reviews: 171,
    offer: "₹4,999",
    original: "₹7,999",
    discountPct: 38,
  },
  {
    id: "bachelorette-fairy-light-purple-pink-bride",
    name: "Fairy Light Purple & Pink 'BRIDE TO BE' Wall",
    description:
      "A dreamy home setup with a sheer curtain wall lit by warm fairy lights, gold BRIDE TO BE foil letters, a purple, pink and chrome-gold balloon garland on top, two balloon flowers and a floor balloon spill.",
    image: d9.url,
    includes: [
      "Sheer curtain wall with fairy lights",
      "Gold 'BRIDE TO BE' foil letters",
      "Purple, pink & chrome gold balloon garland",
      "2 balloon flowers + floor balloon spill",
    ],
    rating: 4.8,
    reviews: 132,
    offer: "₹2,999",
    original: "₹4,499",
    discountPct: 33,
  },
  {
    id: "bachelorette-hot-pink-coral-neon-arch",
    name: "Hot Pink & Coral Neon 'Bride To Be' Arch",
    description:
      "A vibrant hot-pink arch panel with a yellow 'Bride To Be' neon sign, a coral, ivory and copper-chrome organic balloon garland with dried palm fans and a gold cocktail table for the cake.",
    image: d10.url,
    includes: [
      "Hot pink arch panel with yellow neon sign",
      "Coral, ivory & copper chrome balloon garland",
      "Dried palm fan styling",
      "Gold cocktail table for cake",
    ],
    rating: 4.9,
    reviews: 154,
    offer: "₹4,999",
    original: "₹7,999",
    discountPct: 38,
  },
];

const BATCH_C = [
  {
    id: "bachelorette-rose-gold-fringe-bride-room",
    name: "Rose Gold Fringe 'BRIDE' Hotel Room Setup",
    description:
      "A rose-gold hotel room surprise with a shimmering fringe curtain backdrop, rose-gold BRIDE foil letters, a diamond ring and champagne bottle foil, a full helium ceiling of chrome, white and confetti balloons and a bed covered in balloons.",
    image: c1.url,
    includes: [
      "Rose gold fringe curtain backdrop",
      "Rose gold 'BRIDE' foil letters + ring & champagne foils",
      "Helium rose gold, white & confetti ceiling balloons",
      "Balloon-covered bed styling",
    ],
    rating: 4.8,
    reviews: 128,
    offer: "₹2,499",
    original: "₹3,499",
    discountPct: 29,
  },
  {
    id: "bachelorette-rooftop-cabana-bride-to-be",
    name: "Rooftop Cabana 'Bride To Be' Ring Arch Party",
    description:
      "A full rooftop bachelorette cabana with fairy-light curtain walls, hanging paper lanterns and greenery, a rose-gold and white ring balloon arch with a 'Bride To Be' neon sign, floor mattress seating with cushions and floral table styling.",
    image: c2.url,
    includes: [
      "Rooftop cabana frame with fairy light curtains",
      "Rose gold & white ring balloon arch + 'Bride To Be' neon",
      "Hanging lanterns, greenery & 4 balloon pillars",
      "Floor mattress seating, cushions & floral table runner",
    ],
    rating: 4.9,
    reviews: 96,
    offer: "₹11,999",
    original: "₹14,999",
    discountPct: 20,
  },
  {
    id: "bachelorette-gold-black-groom-to-be-room",
    name: "Gold & Black 'GROOM TO BE' Living Room Setup",
    description:
      "A bold bachelor party setup with giant gold GROOM TO BE foil letters on the wall, a gold ring and champagne bottle foil, a full ceiling of gold, black and silver helium balloons and balloons scattered across the floor.",
    image: c3.url,
    includes: [
      "Gold 'GROOM TO BE' foil letter set",
      "Gold diamond ring + champagne bottle foil balloons",
      "Gold, black & silver helium ceiling balloons",
      "Floor balloon spill styling",
    ],
    rating: 4.8,
    reviews: 112,
    offer: "₹2,499",
    original: "₹3,499",
    discountPct: 29,
  },
  {
    id: "bachelorette-black-gold-bride-to-be-fringe",
    name: "Black & Gold 'BRIDE TO BE' Fringe Arch",
    description:
      "A glam black fringe curtain backdrop with gold BRIDE TO BE foil letters, a heart foil and diamond ring balloon, framed by a dramatic black and chrome-gold balloon arch with a champagne bottle foil accent.",
    image: c4.url,
    includes: [
      "Black fringe curtain backdrop",
      "Gold 'BRIDE TO BE' foil letters + heart & ring foils",
      "Black & chrome gold balloon arch",
      "Champagne bottle foil balloon",
    ],
    rating: 4.9,
    reviews: 141,
    offer: "₹2,499",
    original: "₹3,499",
    discountPct: 29,
  },
  {
    id: "bachelorette-blush-chrome-bride-to-be-wall",
    name: "Blush Chrome 'BRIDE TO BE' Wall & Ceiling",
    description:
      "A soft blush and white theme with rose-gold BRIDE TO BE foil letters on the wall, heart and diamond-ring foils, a chrome and white helium ceiling with curling ribbons and a floor carpet of confetti balloons.",
    image: c5.url,
    includes: [
      "Rose gold 'BRIDE TO BE' foil lettering",
      "Heart + diamond ring foil balloons",
      "Chrome, white & blush helium ceiling with ribbons",
      "Confetti balloon floor carpet",
    ],
    rating: 4.8,
    reviews: 104,
    offer: "₹2,199",
    original: "₹3,499",
    discountPct: 37,
  },
  {
    id: "bachelorette-peach-gold-boho-neon-arch",
    name: "Peach & Gold Boho 'Bride To Be' Neon Arch",
    description:
      "An elegant boho arch panel with a glowing 'Bride to be' neon sign, an organic peach, white and chrome-gold balloon garland with dried palm fans, pampas accents and a silver cocktail table for the cake.",
    image: c6.url,
    includes: [
      "Ivory arch panel with 'Bride To Be' neon sign",
      "Peach, white & chrome gold organic balloon garland",
      "Dried palm fan & pampas styling",
      "Silver cocktail table for cake",
    ],
    rating: 4.9,
    reviews: 173,
    offer: "₹4,999",
    original: "₹7,999",
    discountPct: 38,
  },
  {
    id: "bachelorette-pink-white-foil-curtain-arch",
    name: "Pink & White 'Bride to be' Foil Curtain Arch",
    description:
      "A budget-friendly home setup with a pink and white balloon square arch, a shimmering magenta and silver foil curtain backdrop, a gold 'Bride to be' cursive cutout and a styled side table for cake and gifts.",
    image: c7.url,
    includes: [
      "Pink & white balloon square arch",
      "Magenta + silver foil curtain backdrop",
      "Gold 'Bride to be' cursive cutout",
      "Side table styling for cake",
    ],
    rating: 4.7,
    reviews: 118,
    offer: "₹2,499",
    original: "₹3,499",
    discountPct: 29,
  },
  {
    id: "bachelorette-garden-pastel-neon-arch",
    name: "Garden Pastel Neon 'Bride To Be' Arch Setup",
    description:
      "An outdoor garden setup with a lilac arch panel lit by a pink 'Bride to be' neon sign, a vibrant pink, peach and yellow balloon garland with fresh florals, hanging star lights and confetti balloon pillars.",
    image: c8.url,
    includes: [
      "Lilac arch panel with pink 'Bride To Be' neon",
      "Pink, peach & yellow balloon garland with florals",
      "Hanging star fairy lights",
      "2 confetti balloon pillars + cake table",
    ],
    rating: 4.9,
    reviews: 149,
    offer: "₹4,999",
    original: "₹7,999",
    discountPct: 38,
  },
  {
    id: "bachelorette-pink-ribbon-ceiling-bride-to-be",
    name: "Pink Ribbon Ceiling 'BRIDE TO BE' Room Decor",
    description:
      "A pretty-in-pink room surprise with a full ceiling of pink and white balloons trailing curling ribbons, silver-pink BRIDE TO BE foil letters on the wall, a heart-with-ring foil and matching balloon pillars.",
    image: c9.url,
    includes: [
      "Pink & white ceiling balloons with curling ribbons",
      "Silver-pink 'BRIDE TO BE' foil letters",
      "Heart + diamond ring foil balloons",
      "2 pink & white balloon pillars",
    ],
    rating: 4.8,
    reviews: 132,
    offer: "₹2,499",
    original: "₹3,499",
    discountPct: 29,
  },
  {
    id: "bachelorette-magenta-rosegold-bride-to-be-arch",
    name: "Magenta & Rose Gold 'BRIDE TO BE' Arch",
    description:
      "A vibrant magenta, rose-gold and white balloon arch with confetti balloons around a black fringe curtain backdrop, rose-gold BRIDE TO BE foil letters and a 'Let's Party' champagne bottle foil.",
    image: c10.url,
    includes: [
      "Magenta, rose gold & white balloon arch",
      "Black fringe curtain backdrop",
      "Rose gold 'BRIDE TO BE' foil letters",
      "'Let's Party' champagne foil balloon",
    ],
    rating: 4.8,
    reviews: 126,
    offer: "₹2,799",
    original: "₹3,999",
    discountPct: 30,
  },
];

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

const GALLERY = [cover, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, c1, c2, c3, c4, c5, c6, c7, c8, c9, c10].map((a) => a.url);


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
      { property: "og:image", content: cover.url },
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
          <img src={cover.url} alt="Bachelorette Decoration" className="h-full w-full object-cover" />
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
          {[...NEW_CARDS, ...BATCH_C].map((c) => (
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
            {GALLERY.map((src, i) => (
              <img key={src} src={src} alt={`Bachelorette Decoration ${i + 1}`} loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
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
