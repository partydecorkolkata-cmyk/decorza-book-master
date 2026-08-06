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
import q1 from "@/assets/prop-q1.jpg.asset.json";
import q2 from "@/assets/prop-q2.jpg.asset.json";
import q3 from "@/assets/prop-q3.jpg.asset.json";
import q4 from "@/assets/prop-q4.jpg.asset.json";
import q5 from "@/assets/prop-q5.jpg.asset.json";
import q6 from "@/assets/prop-q6.jpg.asset.json";
import q7 from "@/assets/prop-q7.jpg.asset.json";
import q8 from "@/assets/prop-q8.jpg.asset.json";
import q9 from "@/assets/prop-q9.jpg.asset.json";
import q10 from "@/assets/prop-q10.jpg.asset.json";
import r1 from "@/assets/prop-r1.png.asset.json";
import r2 from "@/assets/prop-r2.png.asset.json";
import r3 from "@/assets/prop-r3.jpeg.asset.json";
import r4 from "@/assets/prop-r4.jpeg.asset.json";
import r5 from "@/assets/prop-r5.jpeg.asset.json";
import r6 from "@/assets/prop-r6.jpeg.asset.json";
import r7 from "@/assets/prop-r7.jpeg.asset.json";
import r8 from "@/assets/prop-r8.png.asset.json";
import r9 from "@/assets/prop-r9.jpeg.asset.json";
import r10 from "@/assets/prop-r10.jpeg.asset.json";
import s1 from "@/assets/prop-s1.jpeg.asset.json";
import s2 from "@/assets/prop-s2.jpeg.asset.json";
import s3 from "@/assets/prop-s3.jpeg.asset.json";
import s4 from "@/assets/prop-s4.jpeg.asset.json";
import s5 from "@/assets/prop-s5.jpeg.asset.json";
import s6 from "@/assets/prop-s6.jpeg.asset.json";
import s7 from "@/assets/prop-s7.jpeg.asset.json";
import s8 from "@/assets/prop-s8.jpeg.asset.json";
import s9 from "@/assets/prop-s9.jpeg.asset.json";
import s10 from "@/assets/prop-s10.jpeg.asset.json";
import t1 from "@/assets/prop-t1.jpg.asset.json";
import t2 from "@/assets/prop-t2.jpeg.asset.json";
import t3 from "@/assets/prop-t3.jpeg.asset.json";
import t4 from "@/assets/prop-t4.jpeg.asset.json";
import t5 from "@/assets/prop-t5.jpeg.asset.json";
import t6 from "@/assets/prop-t6.jpg.asset.json";
import t7 from "@/assets/prop-t7.webp.asset.json";
import t8 from "@/assets/prop-t8.png.asset.json";
import t9 from "@/assets/prop-t9.png.asset.json";
import t10 from "@/assets/prop-t10.png.asset.json";

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

const BATCH_Q = [
  {
    id: "proposal-happy-wedding-gold-room",
    name: "'Happy Wedding' Gold Foil Room Decor",
    description:
      "A warm first-night room set-up with gold 'HAPPY WEDDING' foil lettering on the lit arch headboard, red heart foils, yellow-white-confetti balloon clusters and a double rose petal heart on the bed.",
    image: q1.url,
    includes: [
      "Gold 'HAPPY WEDDING' foil lettering on headboard arch",
      "Red heart foil balloons around the wall",
      "Yellow, white & confetti balloon clusters with ceiling floats",
      "Double rose petal heart bed art",
      "Rose petal floor pathway & silver star foil",
    ],
    rating: 4.8,
    reviews: 164,
    offer: <>₹2,999</>,
    original: <>₹4,499</>,
    discountPct: 33,
  },
  {
    id: "proposal-silver-white-marry-me-arch",
    name: "Silver & White 'Marry Me' Balloon Arch",
    description:
      "A chic evening proposal with a tall white arch panel printed with a 'Marry Me' ring monogram, a cascading silver chrome and white balloon garland and a wrapped red rose bouquet.",
    image: q2.url,
    includes: [
      "Tall white arch panel with 'Marry Me' ring print",
      "Silver chrome & white balloon garland cascade",
      "Jumbo chrome balloon accents",
      "Wrapped red rose bouquet",
      "Ambient outdoor lighting setup",
    ],
    rating: 4.9,
    reviews: 132,
    offer: <>₹4,999</>,
    original: <>₹7,999</>,
    discountPct: 38,
  },
  {
    id: "proposal-red-balloon-pillar-arch",
    name: "Red Balloon Pillar 'Will You Marry Me?' Arch",
    description:
      "A bold red garden proposal with a white arch board scripted 'Will You Marry Me?', twin red balloon pillars dressed with white floral clusters, heart foils, teddy hearts, candles and a thick petal floor.",
    image: q3.url,
    includes: [
      "White arch board with 'Will You Marry Me?' script",
      "Twin red balloon pillars with white floral clusters",
      "Red heart foil balloons at the base",
      "Plush 'Love' heart cushions & pillar candles",
      "Dense red rose petal floor",
    ],
    rating: 4.9,
    reviews: 118,
    offer: <>₹4,999</>,
    original: <>₹7,999</>,
    discountPct: 38,
  },
  {
    id: "proposal-white-rose-heart-neon-memory",
    name: "White Rose Heart & Memory Board Proposal",
    description:
      "A luxury rooftop proposal with a giant white rose and palm-leaf heart arch holding a glowing 'Will You Marry Me?' neon sign, paired with a personalised photo-collage memory board and a candle-lit petal lawn.",
    image: q4.url,
    includes: [
      "Giant white rose & greenery heart arch",
      "'Will You Marry Me?' warm neon sign",
      "Personalised photo collage memory board",
      "White floral frame on the board",
      "Cluster candles & white petal lawn scatter",
    ],
    rating: 5,
    reviews: 174,
    offer: <>₹9,999</>,
    original: <>₹14,999</>,
    discountPct: 33,
    bestSeller: true,
  },
  {
    id: "proposal-blush-pink-rose-heart-aisle",
    name: "Blush Pink Rose Heart Aisle Proposal",
    description:
      "A dreamy indoor proposal with a full blush pink rose heart arch and 'Will You Marry Me?' neon, flanked by tall floral stands, pink heart foil balloons, a white runner aisle and dozens of LED candles.",
    image: q5.url,
    includes: [
      "Full blush pink rose heart arch",
      "'Will You Marry Me?' neon sign",
      "Tall pink & white floral pedestal stands",
      "Pink heart foil balloon bunches",
      "White runner aisle with petals & LED candles",
    ],
    rating: 5,
    reviews: 208,
    offer: <>₹14,999</>,
    original: <>₹19,999</>,
    discountPct: 25,
    bestSeller: true,
  },
  {
    id: "proposal-round-ring-neon-lounge",
    name: "Round Ring Neon Lounge Proposal",
    description:
      "An indoor lounge proposal with a white round ring frame, a bright 'Will You Marry Me?' neon panel, a red rose cluster on the hoop, floating red heart balloons and a rose petal floor with candle glasses.",
    image: q6.url,
    includes: [
      "White round ring arch frame",
      "'Will You Marry Me?' neon panel",
      "Red rose cluster on the hoop",
      "Red heart & round foil balloon bunches",
      "Floating candles in glass cylinders with petals",
    ],
    rating: 4.9,
    reviews: 146,
    offer: <>₹6,499</>,
    original: <>₹9,999</>,
    discountPct: 35,
  },
  {
    id: "proposal-rooftop-red-heart-carpet",
    name: "Rooftop Red Rose Heart & Carpet Proposal",
    description:
      "A skyline rooftop proposal with a full red rose heart arch, a white 'Will You Marry Me?' neon sign, a red carpet aisle strewn with petals and acrylic risers holding floating candles.",
    image: q7.url,
    includes: [
      "Full red rose heart arch",
      "White 'Will You Marry Me?' neon sign",
      "Red carpet aisle with rose petals",
      "Acrylic risers with floating candles",
      "Rose petal terrace scatter",
    ],
    rating: 5,
    reviews: 187,
    offer: <>₹9,999</>,
    original: <>₹14,999</>,
    discountPct: 33,
  },
  {
    id: "proposal-sunset-terrace-heart-taper",
    name: "Sunset Terrace Heart Arch with Taper Candles",
    description:
      "A sunset terrace proposal with a deep red rose heart arch on a draped base, a golden 'Will You Marry Me?' neon, rows of rose-gold taper candle stands and a red runner covered in petals.",
    image: q8.url,
    includes: [
      "Deep red rose heart arch with fabric draped base",
      "Golden 'Will You Marry Me?' neon sign",
      "Rose-gold taper candelabra rows",
      "Red runner aisle with heavy petal scatter",
      "Hurricane pillar candles along the path",
    ],
    rating: 5,
    reviews: 161,
    offer: <>₹9,999</>,
    original: <>₹14,999</>,
    discountPct: 33,
  },
  {
    id: "proposal-pink-personalised-arch",
    name: "Personalised Pink & Maroon 'Marry Me' Arch",
    description:
      "An elegant indoor corridor proposal with a white arch board personalised with your partner's name and 'Will You Marry Me?', pink and maroon balloon garlands, rose clusters, a red rose ball bouquet and petal-strewn candles.",
    image: q9.url,
    includes: [
      "White arch board with personalised name lettering",
      "Pink, maroon & chrome balloon garlands",
      "Pink rose flower clusters on the garland",
      "Red rose ball bouquet with ribbon",
      "Pillar candles & pink-white petal floor",
    ],
    rating: 4.9,
    reviews: 139,
    offer: <>₹6,999</>,
    original: <>₹9,999</>,
    discountPct: 30,
  },
  {
    id: "proposal-white-candle-photo-proposal",
    name: "All-White Candle & Photo Memories Proposal",
    description:
      "A soft, minimal living-room proposal with a white arch hand-lettered 'Will You Marry Me?', white rose vases on pedestals, framed couple photos and a floor filled with floating candles and white petals.",
    image: q10.url,
    includes: [
      "White arch with 'Will You Marry Me?' lettering & floral crown",
      "White rose & baby's breath vases on pedestals",
      "Framed couple photo display",
      "Dozens of floating candles in glass cylinders",
      "White rose petal floor scatter",
    ],
    rating: 4.9,
    reviews: 124,
    offer: <>₹7,999</>,
    original: <>₹11,999</>,
    discountPct: 33,
  },
];

const BATCH_R = [
  {
    id: "proposal-will-you-be-my-girlfriend-red",
    name: "'Will You Be My Girlfriend' Red Balloon Room",
    description:
      "A bold red proposal room with a giant red ceiling balloon cloud with curling ribbons, red foil 'WILL YOU BE MY GIRLFRIEND' wall lettering, heart foil bunches on both sides and a rose petal diamond on the bed.",
    image: r1.url,
    includes: [
      "Red ceiling balloon cloud with curling ribbons",
      "Red foil 'WILL YOU BE MY GIRLFRIEND' lettering",
      "Red heart foil balloon bunches",
      "Rose petal diamond bed art with red balloons",
      "Petal scatter on the floor",
    ],
    rating: 4.9,
    reviews: 186,
    offer: <>₹2,999</>,
    original: <>₹4,499</>,
    discountPct: 33,
  },
  {
    id: "proposal-rose-gold-heart-petal-room",
    name: "Rose Gold Heart Balloons & Petal Heart Room",
    description:
      "A soft, elegant room set-up with floating rose gold heart foil balloons, a curtain of warm fairy lights on the wall, blush fur cushions and a large pink rose petal heart across the bed.",
    image: r2.url,
    includes: [
      "Floating rose gold heart foil balloons with ribbons",
      "Warm fairy light curtain wall styling",
      "Blush fur cushions on the bed",
      "Large pink rose petal heart bed art",
      "Fresh rose pots on the side tables",
    ],
    rating: 4.8,
    reviews: 142,
    offer: <>₹2,199</>,
    original: <>₹3,499</>,
    discountPct: 37,
  },
  {
    id: "proposal-red-balloon-heart-neon-aisle",
    name: "Red Balloon Heart Arch with Neon & Candle Aisle",
    description:
      "A dramatic red balloon heart arch built against a soft drape backdrop with a glowing cursive 'Will You Marry Me?' neon at the centre, a red carpet aisle, LED pillar candles and rose petals.",
    image: r3.url,
    includes: [
      "Giant red balloon heart arch",
      "Cursive 'Will You Marry Me?' neon sign",
      "Ivory fabric drape backdrop",
      "Red carpet aisle with rose petals",
      "Rows of LED pillar candles",
    ],
    rating: 5,
    reviews: 203,
    offer: <>₹4,499</>,
    original: <>₹6,499</>,
    discountPct: 31,
  },
  {
    id: "proposal-pink-gold-i-love-you-room",
    name: "Pink & Gold 'I Love You' Balloon Room",
    description:
      "A glamorous hotel room surprise with gold 'I LOVE YOU' foil lettering, a pink and gold chrome ceiling balloon canopy, pink heart foils and balloons filling the bed and the floor.",
    image: r4.url,
    includes: [
      "Gold 'I LOVE YOU' foil wall lettering",
      "Pink & gold chrome ceiling balloon canopy",
      "Pink heart foil balloons",
      "Bed & floor filled with pink and gold balloons",
      "Curling ribbon styling throughout",
    ],
    rating: 4.9,
    reviews: 158,
    offer: <>₹2,999</>,
    original: <>₹4,499</>,
    discountPct: 33,
  },
  {
    id: "proposal-red-white-i-love-you-bed-balloons",
    name: "Red & White 'I Love You' Bedroom Surprise",
    description:
      "A cheerful home set-up with red 'I LOVE YOU' foil lettering flanked by heart foils, red and white balloons floating on the ceiling with spiral streamers and the whole bed filled with balloons.",
    image: r5.url,
    includes: [
      "Red 'I LOVE YOU' foil wall lettering",
      "Two red heart foil balloons",
      "Red & white ceiling balloons with spiral streamers",
      "Bed filled with red, pink & white balloons",
      "Ribbon curtain styling",
    ],
    rating: 4.7,
    reviews: 121,
    offer: <>₹2,499</>,
    original: <>₹3,499</>,
    discountPct: 29,
  },
  {
    id: "proposal-silver-girlfriend-pink-floor",
    name: "Silver 'Will You Be My Girlfriend' Pink Floor Room",
    description:
      "A night-view suite set-up with silver foil 'WILL YOU BE MY GIRLFRIEND' lettering, a pink ceiling balloon cloud with long ribbons, LED candles in a petal heart on the bed and the entire floor covered in pink balloons.",
    image: r6.url,
    includes: [
      "Silver 'WILL YOU BE MY GIRLFRIEND' foil lettering",
      "Pink ceiling balloon cloud with hanging ribbons",
      "LED candle & petal heart on the bed",
      "Floor filled with pink balloons",
      "Rose gold heart foil balloon stands",
    ],
    rating: 4.9,
    reviews: 167,
    offer: <>₹3,499</>,
    original: <>₹4,999</>,
    discountPct: 30,
  },
  {
    id: "proposal-i-love-you-petal-heart-you",
    name: "'I Love You' Heart Foil & Petal 'YOU' Bed Decor",
    description:
      "A romantic room with a big red heart foil centred between silver 'I LOVE YOU' lettering, red and white ceiling balloons with spiral hangings, fairy lights on the headboard and a deep red petal heart with 'YOU' on the bed.",
    image: r7.url,
    includes: [
      "Red heart foil with silver 'I LOVE YOU' lettering",
      "Red & white ceiling balloons with spiral streamers",
      "Fairy light headboard styling",
      "Rose petal heart bed art with 'YOU'",
      "Balloon pillars on both sides of the bed",
    ],
    rating: 4.9,
    reviews: 176,
    offer: <>₹2,999</>,
    original: <>₹4,499</>,
    discountPct: 33,
  },
  {
    id: "proposal-gold-marry-me-red-heart-ceiling",
    name: "Gold 'Will You Marry Me' Red Heart Ceiling Room",
    description:
      "A warm-lit room proposal with gold foil 'WILL YOU MARRY ME' lettering above the headboard, dozens of red heart foil balloons floating on the ceiling with gold ribbons and red-gold balloons across the floor.",
    image: r8.url,
    includes: [
      "Gold 'WILL YOU MARRY ME' foil lettering",
      "Red heart foil balloon ceiling with gold ribbons",
      "Fairy lights along the headboard wall",
      "Rose petal heart on the bed",
      "Red & gold balloons scattered on the floor",
    ],
    rating: 4.8,
    reviews: 149,
    offer: <>₹3,499</>,
    original: <>₹4,999</>,
    discountPct: 30,
  },
  {
    id: "proposal-hotel-i-love-you-candle-heart",
    name: "Hotel 'I Love You' Candle Heart Room Set-up",
    description:
      "A classy hotel room surprise with red 'I LOVE YOU' foil lettering across the headboard, red heart foil clusters on both sides, jumbo red ceiling balloons, ribbon-tied cushions and an LED candle petal heart on the bed.",
    image: r9.url,
    includes: [
      "Red 'I LOVE YOU' foil headboard lettering",
      "Red heart foil balloon clusters both sides",
      "Jumbo red ceiling balloons with ribbons",
      "LED candle & rose petal heart on the bed",
      "Red ribbon cushion styling with petal scatter",
    ],
    rating: 4.8,
    reviews: 133,
    offer: <>₹2,499</>,
    original: <>₹3,499</>,
    discountPct: 29,
  },
  {
    id: "proposal-white-gold-marry-me-arch",
    name: "White & Gold 'Will You Marry Me?' Arch Proposal",
    description:
      "A refined indoor proposal with a tall white arch board lettered 'Will You Marry Me?' in gold script, dressed with a cascading white, gold chrome and confetti balloon garland on both sides.",
    image: r10.url,
    includes: [
      "Tall white arch board with gold 'Will You Marry Me?' script",
      "White, gold chrome & confetti balloon garland",
      "Jumbo balloon clusters at the base",
      "Balanced double-side garland styling",
      "On-site setup & styling",
    ],
    rating: 5,
    reviews: 154,
    offer: <>₹4,499</>,
    original: <>₹6,499</>,
    discountPct: 31,
  },
];

const BATCH_S = [
  {
    id: "proposal-pink-gold-ceiling-i-love-you",
    name: "Pink & Gold Ceiling 'I Love You' Room Décor",
    description:
      "A cheerful bedroom surprise with a full pink and gold chrome ceiling balloon spread, red foil 'I LOVE YOU' wall lettering flanked by pink heart foils, balloon flowers on the wardrobes and a balloon cluster on the bed.",
    image: s1.url,
    includes: [
      "Pink & gold chrome ceiling balloons with ribbons",
      "Red foil 'I LOVE YOU' wall lettering",
      "Pink heart foil balloons on both sides",
      "Balloon flower wall accents",
      "Bed balloon cluster styling",
    ],
    rating: 4.8,
    reviews: 164,
    offer: <>₹2,499</>,
    original: <>₹3,499</>,
    discountPct: 29,
  },
  {
    id: "proposal-red-sequin-marry-me-neon",
    name: "Red Sequin Wall 'Will You Marry Me?' Neon Setup",
    description:
      "A premium shimmer-wall proposal featuring a red sequin backdrop with a glowing 'Will you marry me?' neon sign, an organic red, white and silver chrome balloon garland and white faux florals.",
    image: s2.url,
    includes: [
      "Red shimmer sequin backdrop wall",
      "'Will you marry me?' neon sign",
      "Red, white & silver chrome organic balloon garland",
      "White faux floral vase styling",
      "Complete on-site setup & dismantle",
    ],
    rating: 5,
    reviews: 132,
    offer: <>₹7,499</>,
    original: <>₹9,999</>,
    discountPct: 25,
  },
  {
    id: "proposal-rose-gold-marry-me-bedroom",
    name: "Rose Gold 'Will You Marry Me' Bedroom Surprise",
    description:
      "A dreamy bedroom proposal with rose gold foil 'WILL YOU MARRY ME' letters above the headboard, pink and rose gold heart balloons on the ceiling, a floral garland across the bed and balloons scattered on the floor.",
    image: s3.url,
    includes: [
      "Rose gold foil 'WILL YOU MARRY ME' letters",
      "Pink & rose gold heart ceiling balloons",
      "Artificial rose garland across the bed",
      "Floor balloon scatter",
      "Rose petal bed styling",
    ],
    rating: 4.9,
    reviews: 148,
    offer: <>₹2,999</>,
    original: <>₹3,999</>,
    discountPct: 25,
  },
  {
    id: "proposal-pink-girlfriend-teddy-suite",
    name: "'Will You Be My Girlfriend' Pink Heart Suite",
    description:
      "A soft pink proposal room with foil 'WILL YOU BE MY GIRLFRIEND?' lettering, floating pink heart balloons, a rose bouquet hoop and teddy on the bed, petal heart art and balloons across the floor.",
    image: s4.url,
    includes: [
      "Pink foil 'WILL YOU BE MY GIRLFRIEND?' lettering",
      "Floating pink heart foil balloons",
      "Rose bouquet ring & teddy bear on bed",
      "Rose petal bed art & floor petals",
      "Floor balloon scatter with LED candles",
    ],
    rating: 4.9,
    reviews: 171,
    offer: <>₹2,999</>,
    original: <>₹4,499</>,
    discountPct: 33,
  },
  {
    id: "proposal-rose-gold-letters-petal-heart",
    name: "Rose Gold Letters & Rose Petal Heart Proposal",
    description:
      "An elegant daylight proposal with rose gold foil 'WILL YOU MARRY ME' letters strung across sheer curtains, a large red rose petal heart on the floor ringed with candles and tulle puffs at the base.",
    image: s5.url,
    includes: [
      "Rose gold foil 'WILL YOU MARRY ME' letters",
      "Large rose petal heart on the floor",
      "LED candle ring around the heart",
      "Pink tulle puff accents",
      "Fresh-look rose vase styling",
    ],
    rating: 4.8,
    reviews: 126,
    offer: <>₹1,999</>,
    original: <>₹3,499</>,
    discountPct: 43,
  },
  {
    id: "proposal-red-heart-arch-neon-candles",
    name: "Red Heart Balloon Arch with Neon & Candle Aisle",
    description:
      "A classic red heart-shaped balloon arch framing a glowing 'Will You Marry Me?' neon sign, with pillar candles, rose vases and a thick red petal carpet in front for the big moment.",
    image: s6.url,
    includes: [
      "Red heart-shaped balloon arch",
      "'Will You Marry Me?' neon sign",
      "LED pillar candles around the setup",
      "Red rose vases & bouquet",
      "Red rose petal floor carpet",
    ],
    rating: 5,
    reviews: 209,
    offer: <>₹4,999</>,
    original: <>₹6,999</>,
    discountPct: 29,
  },
  {
    id: "proposal-red-ring-arch-roses-neon",
    name: "Red Ring Balloon Arch with Roses & Neon Sign",
    description:
      "A grand circular red balloon ring arch dressed with red rose clusters, a 'Will You Marry Me?' neon sign in the centre, candle stands and a petal-covered carpet for the proposal.",
    image: s7.url,
    includes: [
      "Circular red balloon ring arch",
      "Red rose cluster accents on the ring",
      "'Will You Marry Me?' neon sign",
      "LED candle stands & rose vases",
      "Red petal carpet walkway",
    ],
    rating: 4.9,
    reviews: 187,
    offer: <>₹4,499</>,
    original: <>₹6,499</>,
    discountPct: 31,
  },
  {
    id: "proposal-red-ceiling-gold-letters-room",
    name: "Red Ceiling Balloons & Gold 'Marry Me' Room",
    description:
      "A romantic hotel-room proposal with a dense red ceiling balloon cloud with trailing ribbons, gold foil 'WILL YOU MARRY ME' wall letters and a red rose petal heart on the white bed.",
    image: s8.url,
    includes: [
      "Red ceiling balloon cloud with ribbons",
      "Gold foil 'WILL YOU MARRY ME' letters",
      "Red rose petal heart on the bed",
      "Red heart foil accents",
      "Floor balloon scatter",
    ],
    rating: 4.8,
    reviews: 158,
    offer: <>₹2,799</>,
    original: <>₹3,999</>,
    discountPct: 30,
  },
  {
    id: "proposal-just-married-love-canopy-room",
    name: "'Just Married' Red Canopy Love Room Décor",
    description:
      "A festive first-night room with gold 'JUST MARRIED' foil letters, a white net canopy lit with fairy lights, a red foil 'love' script, red balloon flowers on the walls and a red balloon bed base.",
    image: s9.url,
    includes: [
      "Gold foil 'JUST MARRIED' lettering",
      "White net canopy with fairy lights",
      "Red foil 'love' script",
      "Red & white balloon flower wall accents",
      "Red balloon bed base & ceiling balloons",
    ],
    rating: 4.9,
    reviews: 214,
    offer: <>₹2,999</>,
    original: <>₹4,499</>,
    discountPct: 33,
  },
  {
    id: "proposal-rooftop-red-heart-sunset",
    name: "Rooftop Red Heart Arch Sunset Proposal",
    description:
      "An open-air rooftop proposal with a giant red heart balloon arch, a 'Will You Marry Me?' neon sign in the centre, tall pillar candles and rose vases lining a petal-strewn deck.",
    image: s10.url,
    includes: [
      "Giant red heart balloon arch",
      "'Will You Marry Me?' neon sign",
      "Tall pillar candle arrangement",
      "Red rose vases along the aisle",
      "Rose petal scatter on the deck",
    ],
    rating: 5,
    reviews: 143,
    offer: <>₹4,999</>,
    original: <>₹7,999</>,
    discountPct: 38,
  },
];

const BATCH_T = [
  {
    id: "proposal-silver-marry-me-red-ceiling",
    name: "Silver 'Will You Marry Me' Foil & Red Ceiling Room",
    description:
      "A classic hotel-room proposal with a dense red ceiling balloon cloud trailing curling ribbons, silver foil 'WILL YOU MARRY ME' letters on the headboard wall with a red heart foil, and a rose-petal heart on the bed.",
    image: t1.url,
    includes: [
      "Red helium ceiling balloons with curling ribbons",
      "Silver foil 'WILL YOU MARRY ME' wall lettering",
      "Red heart foil accent balloon",
      "Rose petal heart & petal scatter on bed",
      "Rose bouquet placement",
    ],
    rating: 4.8,
    reviews: 172,
    offer: <>₹2,999</>,
    original: <>₹3,999</>,
    discountPct: 25,
  },
  {
    id: "proposal-red-heart-arch-neon-candle-aisle",
    name: "Red Balloon Heart Arch with Neon & Candle Aisle",
    description:
      "A show-stopping red balloon heart arch framing a glowing 'Will You Marry Me?' neon sign, with red heart foils floating on either side and a candle-lined rose petal aisle leading to the proposal spot.",
    image: t2.url,
    includes: [
      "Large red balloon heart arch",
      "'Will You Marry Me?' neon sign",
      "Red heart foil balloons",
      "LED pillar candle aisle",
      "Rose petal walkway",
    ],
    rating: 4.9,
    reviews: 208,
    offer: <>₹4,999</>,
    original: <>₹6,999</>,
    discountPct: 29,
  },
  {
    id: "proposal-red-ceiling-i-love-you-hotel",
    name: "Red Ceiling Balloons & 'I LOVE YOU' Hotel Surprise",
    description:
      "A romantic hotel-suite surprise with red helium balloons covering the ceiling, long satin ribbon curtains falling over the bed, red foil 'I LOVE YOU' lettering behind the headboard and rose petals with LED candles on the bed.",
    image: t3.url,
    includes: [
      "Red helium ceiling balloons with long ribbons",
      "Red foil 'I LOVE YOU' wall lettering",
      "Rose petal scatter on bed",
      "LED tealight candles",
      "Rose bouquet & wine-style prop styling",
    ],
    rating: 4.7,
    reviews: 149,
    offer: <>₹2,499</>,
    original: <>₹3,499</>,
    discountPct: 29,
  },
  {
    id: "proposal-red-gold-heart-arch-pillars",
    name: "Red & Gold Heart Arch with Balloon Pillars",
    description:
      "A grand indoor heart-shaped red balloon arch with chrome gold and red balloon pillars on both sides, red heart foils and a lit 'Will You Marry Me?' neon board at the centre.",
    image: t4.url,
    includes: [
      "Heart-shaped red balloon arch on stand",
      "Chrome gold & red balloon pillars (2)",
      "Red heart foil balloons",
      "'Will You Marry Me?' neon sign",
      "On-site setup & styling",
    ],
    rating: 4.8,
    reviews: 186,
    offer: <>₹3,999</>,
    original: <>₹5,999</>,
    discountPct: 33,
  },
  {
    id: "proposal-red-white-gold-ceiling-marry-me",
    name: "Red, White & Gold Ceiling 'Will You Marry Me' Room",
    description:
      "A full-room proposal with red, white and gold chrome balloons blanketing the ceiling, red foil 'WILL YOU MARRY ME' letters on a sheer curtain wall, heart foils and a rose-petal heart on the floor.",
    image: t5.url,
    includes: [
      "Red, white & gold chrome ceiling balloons",
      "Red foil 'WILL YOU MARRY ME' wall lettering",
      "Balloon garland over the curtain wall",
      "Red heart foil balloons",
      "Rose petal heart on floor",
    ],
    rating: 4.8,
    reviews: 163,
    offer: <>₹2,999</>,
    original: <>₹4,499</>,
    discountPct: 33,
  },
  {
    id: "proposal-rooftop-heart-arch-i-love-you-marquee",
    name: "Rooftop Heart Arch with 'I LOVE YOU' Marquee Letters",
    description:
      "An open-air terrace proposal with a red and silver chrome balloon heart arch, glowing 'I LOVE YOU' marquee letters, a fairy-lit backdrop and a thick rose petal path lit with candles.",
    image: t6.url,
    includes: [
      "Red & silver chrome balloon heart arch",
      "Illuminated 'I LOVE YOU' marquee letters",
      "'It Was Always You' neon accent",
      "Fairy light styling",
      "Rose petal path with candles",
    ],
    rating: 4.9,
    reviews: 221,
    offer: <>₹6,999</>,
    original: <>₹9,999</>,
    discountPct: 30,
  },
  {
    id: "proposal-luxury-rose-heart-red-carpet-terrace",
    name: "Luxury Red Rose Heart Arch & Red Carpet Proposal",
    description:
      "Our signature luxury proposal: a towering heart arch covered entirely in fresh-look red roses with a 'Will you marry me?' neon at the centre, gold pedestal florals, a red carpet aisle and dozens of glass pillar candles.",
    image: t7.url,
    includes: [
      "Full red rose heart arch (premium build)",
      "'Will you marry me?' neon sign",
      "Gold pedestal stands with rose arrangements",
      "Red carpet aisle runner",
      "Glass pillar candles & rose stem styling",
      "Dedicated setup & teardown team",
    ],
    rating: 5,
    reviews: 264,
    offer: <>₹9,999</>,
    original: <>₹14,999</>,
    discountPct: 33,
    bestSeller: true,
  },
  {
    id: "proposal-gold-be-my-girlfriend-red-room",
    name: "Gold 'Will You Be My Girlfriend' Red Balloon Room",
    description:
      "A dramatic red-and-gold bedroom proposal with red ceiling balloons dropping long ribbons, gold foil 'WILL YOU BE MY GIRLFRIEND' lettering, a red and black balloon floor border and a rose-petal heart on the bed.",
    image: t8.url,
    includes: [
      "Red helium ceiling balloons with ribbon drops",
      "Gold foil 'WILL YOU BE MY GIRLFRIEND' lettering",
      "Red & black balloon floor border",
      "Rose petal heart on bed",
      "Rose bouquet & gift box styling",
    ],
    rating: 4.8,
    reviews: 158,
    offer: <>₹2,999</>,
    original: <>₹4,499</>,
    discountPct: 33,
  },
  {
    id: "proposal-pink-silver-ceiling-i-love-u-petals",
    name: "Pink & Silver Ceiling with 'I LOVE U' Petal Letters",
    description:
      "A soft, pretty room surprise with pink, white and silver balloons filling the ceiling, long silver curling ribbons and 'I LOVE U' spelt out in rose petals above a big petal heart on the bed.",
    image: t9.url,
    includes: [
      "Pink, white & silver ceiling balloons",
      "Silver curling ribbon drops",
      "'I LOVE U' rose petal lettering",
      "Rose petal heart on bed",
      "Bedside balloon cluster styling",
    ],
    rating: 4.7,
    reviews: 141,
    offer: <>₹2,699</>,
    original: <>₹3,499</>,
    discountPct: 23,
  },
  {
    id: "proposal-i-love-you-love-foil-red-white-room",
    name: "'I LOVE YOU' Foil Wall & Red-White Balloon Room",
    description:
      "A cosy red and white bedroom set-up with ceiling balloons on ribbons, red foil 'I LOVE YOU' wall letters, heart foils, a script 'love' foil on the headboard and a rose-petal swirl heart on the bed.",
    image: t10.url,
    includes: [
      "Red & white ceiling balloons with ribbons",
      "Red foil 'I LOVE YOU' wall lettering",
      "Script 'love' foil balloon",
      "Red heart foil balloons",
      "Rose petal swirl heart & petal scatter",
    ],
    rating: 4.8,
    reviews: 152,
    offer: <>₹3,499</>,
    original: <>₹4,999</>,
    discountPct: 30,
  },
];

const ALL_PACKAGES = [...PACKAGES, ...BATCH_Q, ...BATCH_R, ...BATCH_S, ...BATCH_T];


const GALLERY = ALL_PACKAGES.map((p) => ({ src: p.image, alt: p.name }));


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
          {ALL_PACKAGES.map((p) => (
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
