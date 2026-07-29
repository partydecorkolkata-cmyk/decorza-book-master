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
import w20 from "@/assets/wb-w20.jpg.asset.json";
import w21 from "@/assets/wb-w21.jpg.asset.json";
import w22 from "@/assets/wb-w22.jpg.asset.json";
import w23 from "@/assets/wb-w23.jpg.asset.json";
import w24 from "@/assets/wb-w24.jpg.asset.json";
import w25 from "@/assets/wb-w25.jpg.asset.json";
import w26 from "@/assets/wb-w26.jpg.asset.json";
import w27 from "@/assets/wb-w27.jpg.asset.json";
import w28 from "@/assets/wb-w28.jpg.asset.json";
import w29 from "@/assets/wb-w29.jpg.asset.json";
import w30 from "@/assets/wb-w30.jpg.asset.json";
import w31 from "@/assets/wb-w31.jpg.asset.json";
import w32 from "@/assets/wb-w32.jpg.asset.json";
import w33 from "@/assets/wb-w33.jpg.asset.json";
import w34 from "@/assets/wb-w34.jpg.asset.json";
import w35 from "@/assets/wb-w35.jpg.asset.json";
import w36 from "@/assets/wb-w36.jpg.asset.json";
import w37 from "@/assets/wb-w37.jpg.asset.json";
import w38 from "@/assets/wb-w38.jpg.asset.json";
import w39 from "@/assets/wb-w39.jpg.asset.json";
import w40 from "@/assets/wb-w40.jpg.asset.json";
import w41 from "@/assets/wb-w41.jpg.asset.json";
import w42 from "@/assets/wb-w42.jpg.asset.json";
import w43 from "@/assets/wb-w43.jpg.asset.json";
import w44 from "@/assets/wb-w44.jpg.asset.json";
import w45 from "@/assets/wb-w45.jpg.asset.json";
import w46 from "@/assets/wb-w46.jpg.asset.json";
import w47 from "@/assets/wb-w47.jpg.asset.json";
import w48 from "@/assets/wb-w48.jpg.asset.json";
import w49 from "@/assets/wb-w49.jpg.asset.json";
import w50 from "@/assets/wb-w50.jpg.asset.json";
import w51 from "@/assets/wb-w51.jpg.asset.json";
import w52 from "@/assets/wb-w52.jpg.asset.json";
import w53 from "@/assets/wb-w53.jpg.asset.json";
import w54 from "@/assets/wb-w54.jpg.asset.json";
import w55 from "@/assets/wb-w55.jpg.asset.json";
import w56 from "@/assets/wb-w56.jpg.asset.json";
import w57 from "@/assets/wb-w57.jpg.asset.json";
import w58 from "@/assets/wb-w58.jpg.asset.json";
import w59 from "@/assets/wb-w59.jpg.asset.json";
import w60 from "@/assets/wb-w60.jpg.asset.json";
import w61 from "@/assets/wb-w61.jpg.asset.json";
import w62 from "@/assets/wb-w62.jpg.asset.json";
import w63 from "@/assets/wb-w63.jpg.asset.json";
import w64 from "@/assets/wb-w64.jpg.asset.json";
import w65 from "@/assets/wb-w65.jpg.asset.json";
import w66 from "@/assets/wb-w66.jpg.asset.json";
import w67 from "@/assets/wb-w67.jpg.asset.json";
import w68 from "@/assets/wb-w68.jpg.asset.json";
import w69 from "@/assets/wb-w69.jpg.asset.json";
import w70 from "@/assets/wb-w70.jpeg.asset.json";
import w71 from "@/assets/wb-w71.jpeg.asset.json";
import w72 from "@/assets/wb-w72.jpeg.asset.json";
import w73 from "@/assets/wb-w73.jpeg.asset.json";
import w74 from "@/assets/wb-w74.jpeg.asset.json";
import w75 from "@/assets/wb-w75.jpeg.asset.json";
import w76 from "@/assets/wb-w76.jpeg.asset.json";
import w77 from "@/assets/wb-w77.png.asset.json";
import w78 from "@/assets/wb-w78.png.asset.json";
import w79 from "@/assets/wb-w79.png.asset.json";
import w80 from "@/assets/wb-w80.png.asset.json";
import w81 from "@/assets/wb-w81.png.asset.json";
import w82 from "@/assets/wb-w82.jpeg.asset.json";
import w83 from "@/assets/wb-w83.jpeg.asset.json";
import w84 from "@/assets/wb-w84.jpeg.asset.json";
import w85 from "@/assets/wb-w85.jpeg.asset.json";
import w86 from "@/assets/wb-w86.jpeg.asset.json";
import w87 from "@/assets/wb-w87.jpeg.asset.json";
import w88 from "@/assets/wb-w88.jpeg.asset.json";
import w89 from "@/assets/wb-w89.jpeg.asset.json";
import w90 from "@/assets/wb-w90.jpeg.asset.json";
import w91 from "@/assets/wb-w91.jpeg.asset.json";
import w92 from "@/assets/wb-w92.jpeg.asset.json";
import w93 from "@/assets/wb-w93.jpeg.asset.json";
import w94 from "@/assets/wb-w94.jpeg.asset.json";
import w95 from "@/assets/wb-w95.jpeg.asset.json";
import w96 from "@/assets/wb-w96.png.asset.json";
import w97 from "@/assets/wb-w97.png.asset.json";
import w98 from "@/assets/wb-w98.jpeg.asset.json";
import w99 from "@/assets/wb-w99.jpeg.asset.json";

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

const NEW_CARDS = [
  {
    id: "welcome-baby-decoration-little-princess-twin-arch",
    name: "'Welcome Home Little Princess' Twin Arch Luxury Setup",
    description:
      "A luxury twin-arch welcome for baby girl — a printed pink 'Welcome Home Little Princess' panel paired with a pastel dress & rainbow arch, framed by a coral, pink, blush & silver-chrome balloon garland.",
    image: w11.url,
    includes: [
      "Printed twin arch panels ('Little Princess' + baby dress art)",
      "Coral, pink, blush & silver chrome balloon garland",
      "Silver orb balloons & greenery accents",
      "Floor uplights for a stage-like glow",
    ],
    rating: 4.9, reviews: 312,
    offer: <>₹8,999</>, original: <>₹14,999</>, discountPct: 40,
  },
  {
    id: "welcome-baby-decoration-pink-gold-foil-silver-curtain",
    name: "Pink & Gold 'Welcome Baby' Foil on Silver Curtain",
    description:
      "A cheerful room welcome for baby girl with pink & gold ceiling balloons, a silver foil-curtain backdrop, pink 'Welcome Baby' star foil letters, 'It's a Girl' bottle and baby-girl foil.",
    image: w12.url,
    includes: [
      "Pink, white & gold chrome ceiling balloon canopy",
      "Silver foil fringe curtain backdrop",
      "Pink star 'Welcome Baby' foil letters",
      "'It's a Girl' bottle & baby-girl foil balloons",
    ],
    rating: 4.7, reviews: 154,
    offer: <>₹1,999</>, original: <>₹3,499</>, discountPct: 43,
  },
  {
    id: "welcome-baby-decoration-blue-welcome-baby-neon-hall",
    name: "Blue 'Welcome Baby' Neon Hall Setup with BABY Blocks",
    description:
      "A grand hall welcome for baby boy — blue, white & silver-chrome balloon arch around a 'Welcome Baby' neon, with baby & moon foils, BABY blocks, 'It's A Boy' bottle and twin balloon pillars.",
    image: w13.url,
    includes: [
      "Blue, white & silver chrome balloon arch",
      "'Welcome Baby' neon sign on TV wall",
      "BABY letter blocks + baby, moon & bottle foils",
      "Twin balloon pillars flanking the setup",
    ],
    rating: 4.8, reviews: 226,
    offer: <>₹3,999</>, original: <>₹5,999</>, discountPct: 33,
  },
  {
    id: "welcome-baby-decoration-little-prince-arch-teddy",
    name: "'Welcome Home Our Little Prince' Pastel Arch with Teddy",
    description:
      "A soft pastel welcome-home arch with a printed 'Welcome Home Our Little Prince' backdrop, baby-blue, grey & white balloon garland, fresh-look florals, teddy bear props and a white rose bouquet.",
    image: w14.url,
    includes: [
      "Printed 'Welcome Home Our Little Prince' backdrop arch",
      "Baby-blue, grey & white organic balloon garland",
      "Fresh-look florals & greenery accents",
      "Large & small teddy bear props + rose bouquet",
    ],
    rating: 4.9, reviews: 278,
    offer: <>₹6,499</>, original: <>₹8,999</>, discountPct: 28,
  },
  {
    id: "welcome-baby-decoration-gold-welcome-bedroom-pastels",
    name: "Gold 'Welcome' Bedroom Setup with Pastel Balloon Bouquets",
    description:
      "A warm bedroom welcome for the new mom & baby with gold 'WELCOME' foil letters on the headboard wall, gold, purple, sage & peach balloon bouquets, hanging ceiling balloons and pink streamers.",
    image: w15.url,
    includes: [
      "Gold 'WELCOME' foil letters + baby foil",
      "Gold, purple, sage & peach balloon bouquets around the bed",
      "Hanging ceiling balloons with pink streamers",
      "Curly ribbons & fairy accents",
    ],
    rating: 4.7, reviews: 132,
    offer: <>₹1,999</>, original: <>₹2,999</>, discountPct: 33,
  },
  {
    id: "welcome-baby-decoration-blue-ceiling-welcome-baby-boy",
    name: "Blue Ceiling Balloons 'Welcome Baby' Boy Setup with Petal Path",
    description:
      "A big-impact home welcome for baby boy — blue, metallic-blue & white ceiling balloons with ribbons, a blue 'Welcome Baby' foil wall with baby, stars, foot & 'It's a Boy' foils, and a heart-shaped rose-petal walkway.",
    image: w16.url,
    includes: [
      "Blue, metallic & white ceiling balloons with ribbons",
      "Blue 'Welcome Baby' foil letters",
      "Baby, star, foot & 'It's a Boy' foil balloons",
      "Rose & marigold heart-petal walkway",
    ],
    rating: 4.8, reviews: 189,
    offer: <>₹2,999</>, original: <>₹4,499</>, discountPct: 33,
  },
  {
    id: "welcome-baby-decoration-pink-door-arch-hallway-ring",
    name: "Pink Door Arch + 'Welcome Baby' Hallway Ring Experience",
    description:
      "A grand entrance welcome for baby girl — a pink, white & magenta-chrome door arch with 'It's a Girl' foil, plus a hallway 'Welcome Baby' ring with GIRL foil letters and a floral 'WELCOME' rangoli path.",
    image: w17.url,
    includes: [
      "Pink, white & magenta chrome door arch with 'It's a Girl' foil",
      "Hallway balloon ring with GIRL foil letters",
      "'Welcome Baby' hanging banner",
      "Floral 'WELCOME' rangoli walkway",
    ],
    rating: 4.9, reviews: 254,
    offer: <>₹4,999</>, original: <>₹8,999</>, discountPct: 44,
  },
  {
    id: "welcome-baby-decoration-magenta-pink-ring-girl-foil",
    name: "Magenta & Pink Ring Arch with 'GIRL' Foil Letters",
    description:
      "A pretty magenta, pink & white balloon ring arch with big pink 'GIRL' foil letters, a 'Welcome Baby' glitter banner, baby-girl foil and a pink heart foil — perfect for the living-room welcome.",
    image: w18.url,
    includes: [
      "Magenta, pink & white balloon ring arch",
      "Pink 'GIRL' foil letters",
      "'Welcome Baby' glitter banner",
      "Baby-girl round foil + pink heart foil",
    ],
    rating: 4.8, reviews: 197,
    offer: <>₹3,499</>, original: <>₹4,999</>, discountPct: 30,
  },
  {
    id: "welcome-baby-decoration-baby-girl-foot-ceiling-cutout",
    name: "'Welcome Baby' Bedroom Setup with Baby-Girl Foot Ceiling Cutout",
    description:
      "A cosy bedroom welcome for baby girl — pink polka 'WELCOME BABY' foil letters, magenta & pink balloon bouquets, a big 'Baby Girl' foot ceiling cutout and a pink-white balloon bed spread.",
    image: w19.url,
    includes: [
      "Pink polka 'WELCOME BABY' foil letters",
      "Magenta & pink chrome balloon bouquets",
      "'Baby Girl' foot ceiling cutout",
      "Pink & white balloon bed spread + baby-girl foil",
    ],
    rating: 4.7, reviews: 148,
    offer: <>₹1,999</>, original: <>₹2,999</>, discountPct: 33,
  },
];

const EXTRA_CARDS = [
  {
    id: "welcome-baby-decoration-pink-welcome-car-baby-girl",
    name: "Pink 'WELCOME' Car Decor with Baby-Girl Crown Foil",
    description:
      "A sweet car welcome for baby girl coming home — silver 'WELCOME' foil letters on the bonnet, pink & white balloon clusters, a pink crown foil on the roof and a big baby-girl foil on the grill.",
    image: w20.url,
    includes: [
      "Silver 'WELCOME' foil letters on bonnet",
      "Pink, magenta & white balloon clusters",
      "Pink crown foil on roof + baby-girl foil on grill",
      "Baby-girl dress & bow window stickers",
    ],
    rating: 4.7, reviews: 138,
    offer: <>₹1,799</>, original: <>₹2,999</>, discountPct: 40,
  },
  {
    id: "welcome-baby-decoration-welcome-baby-girl-pink-room",
    name: "'Welcome Baby Girl' Pink Room Setup with BABY Boxes",
    description:
      "A dreamy pink room welcome for baby girl — a pink & white balloon garland with silver moon & butterflies, pink 'WELCOME BABY' and silver 'GIRL' foil letters, twin balloon pillars, clear BABY boxes and a milk-bottle foil.",
    image: w21.url,
    includes: [
      "Pink & white balloon garland with silver moon foil",
      "Pink 'WELCOME BABY' + silver 'GIRL' foil letters",
      "Twin pink & white balloon pillars",
      "Clear BABY letter boxes + 'It's A Girl' bottle foil",
    ],
    rating: 4.8, reviews: 216,
    offer: <>₹2,499</>, original: <>₹3,499</>, discountPct: 29,
  },
  {
    id: "welcome-baby-decoration-blue-silver-door-arch-its-a-boy",
    name: "Blue & Silver Door Arch with 'It's A Boy' Foils",
    description:
      "A grand door-frame welcome for baby boy — dense blue, sky-blue, chrome-silver & metallic-blue balloon arch with silver moon, starburst & 'It's A Boy' foot foils framing the main entrance.",
    image: w22.url,
    includes: [
      "Blue, sky-blue, silver & metallic-blue balloon door arch",
      "Silver moon & starburst foil accents",
      "'It's A Boy' foot & round foils",
      "Inside 'Welcome Baby' foil banner setup",
    ],
    rating: 4.9, reviews: 264,
    offer: <>₹4,499</>, original: <>₹5,999</>, discountPct: 25,
  },
  {
    id: "welcome-baby-decoration-welcome-baby-blue-fringe-room",
    name: "'Welcome Baby' Blue Fringe Room Setup with Heart Pillars",
    description:
      "A full-room welcome for baby boy — a white foil-fringe backdrop with blue 'WELCOME BABY' letters, blue & silver balloon garland, moon, starburst & bottle foils, ceiling balloons and twin silver-heart balloon pillars.",
    image: w23.url,
    includes: [
      "White foil-fringe backdrop with blue 'WELCOME BABY' letters",
      "Blue & silver chrome balloon garland + moon/starburst foils",
      "Ceiling balloon bouquets with ribbons",
      "Twin silver-heart balloon pillars with baby-boy foils",
    ],
    rating: 4.8, reviews: 231,
    offer: <>₹2,999</>, original: <>₹4,499</>, discountPct: 33,
  },
  {
    id: "welcome-baby-decoration-pink-welcome-baby-hallway-hot-air",
    name: "Pink 'Welcome Baby' Hallway Arch with Hot-Air Balloon",
    description:
      "A magical hallway welcome for baby girl — a pink & silver-chrome balloon arch with a baby-girl foil, pink 'WELCOME BABY' foils, a pink hot-air balloon prop, pink foil stars, hearts and ceiling bouquets.",
    image: w24.url,
    includes: [
      "Pink, silver & white balloon arch with daisy accents",
      "Pink 'WELCOME BABY' foil letters",
      "Pink hot-air balloon prop + baby-girl foil",
      "Pink stars, hearts & ceiling balloon bouquets",
    ],
    rating: 4.8, reviews: 187,
    offer: <>₹2,999</>, original: <>₹4,499</>, discountPct: 33,
  },
  {
    id: "welcome-baby-decoration-welcome-baby-boy-car-blue",
    name: "'Welcome Baby Boy' Car Decor with Blue Balloon Trails",
    description:
      "A cheerful ride-home car welcome for baby boy — blue & silver balloon trails, a 'Hello Baby' foil, baby-boy foil at the window, gold 'BOY' letters on the windshield and a 'WELCOME BABY' bunting.",
    image: w25.url,
    includes: [
      "Blue & silver balloon trails on bonnet & doors",
      "'Hello Baby' round foil on roof",
      "Baby-boy foil + gold 'BOY' letters on windshield",
      "'WELCOME BABY' triangular bunting on hood",
    ],
    rating: 4.7, reviews: 142,
    offer: <>₹1,799</>, original: <>₹2,999</>, discountPct: 40,
  },
  {
    id: "welcome-baby-decoration-welcome-angel-rose-gold-arch",
    name: "'Welcome Angel' Rose-Gold Arch with Teddy & Pram",
    description:
      "A luxury living-room welcome for baby girl — a printed 'Welcome Angel' arched backdrop with pink, rose-gold, silver & white balloon garland, teddy prop, baby-pram foil, 'It's A Girl' bottle and BABY boxes.",
    image: w26.url,
    includes: [
      "Printed 'Welcome Angel' arch backdrop",
      "Pink, rose-gold, silver & white balloon garland",
      "Teddy prop + baby-pram foil column",
      "'It's A Girl' bottle foil + BABY letter boxes",
    ],
    rating: 4.9, reviews: 296,
    offer: <>₹6,499</>, original: <>₹8,999</>, discountPct: 28,
  },
  {
    id: "welcome-baby-decoration-blue-gold-outdoor-arch-petal-path",
    name: "Blue & Gold Outdoor Balloon Arch with Golden Petal Path",
    description:
      "A traditional entrance welcome for baby boy — a blue, white & gold-chrome balloon arch with a big baby-boy foil on top, 'It's A Boy' bottle & foot foils, blue star pillars and a golden confetti petal walkway.",
    image: w27.url,
    includes: [
      "Blue, white & gold-chrome balloon door arch",
      "Baby-boy foil on top + 'It's A Boy' bottle & foot foils",
      "Blue star foil balloon pillars",
      "Golden confetti petal walkway inside",
    ],
    rating: 4.8, reviews: 174,
    offer: <>₹1,999</>, original: <>₹2,999</>, discountPct: 33,
  },
  {
    id: "welcome-baby-decoration-welcome-baby-neon-ring-elephant",
    name: "'Welcome Baby' Blue Neon Ring with Elephant Prop",
    description:
      "A charming boy welcome — a blue, sky-blue, white & silver-chrome balloon ring around a yellow 'Welcome Baby' neon, with a cute elephant cutout on one side and clear BABY boxes on the other.",
    image: w28.url,
    includes: [
      "Blue, sky-blue, white & silver chrome balloon ring",
      "Yellow 'Welcome Baby' neon sign in centre",
      "Elephant cartoon cutout prop",
      "Clear BABY letter boxes + balloon ceiling bouquets",
    ],
    rating: 4.8, reviews: 208,
    offer: <>₹3,999</>, original: <>₹4,999</>, discountPct: 20,
  },
  {
    id: "welcome-baby-decoration-welcome-baby-bed-bedroom-blue",
    name: "'Welcome Baby' Blue Bedroom Setup with Balloon Bed Spread",
    description:
      "A cosy bedroom welcome for baby boy — blue & white balloon garland on the wall with blue 'WELCOME BABY' foil letters, a baby-boy foil, teddy props on bolsters and a blue balloon spread across the bed with twin bottle pillars.",
    image: w29.url,
    includes: [
      "Blue, metallic & white balloon garland with 'WELCOME BABY' foils",
      "Baby-boy foil + teddy props on bolsters",
      "Blue balloon spread across the bed",
      "Twin 'It's A Boy' bottle balloon pillars",
    ],
    rating: 4.7, reviews: 163,
    offer: <>₹2,299</>, original: <>₹3,499</>, discountPct: 34,
  },
];

const BATCH_W30 = [
  {
    id: "welcome-baby-w30",
    name: "'Welcome' Blue & White Hallway Balloon Pathway",
    description:
      "A dreamy hallway welcome with pastel blue & white balloon garland pillars lining a rose-petal walkway, topped with gold foil 'WELCOME' letters and blue star balloons.",
    image: w30.url,
    includes: [
      "Blue & white balloon pillars along the walkway",
      "Gold foil 'WELCOME' letters on the wall",
      "Rose petal aisle & blue star foil balloons",
    ],
    rating: 4.7, reviews: 152,
    offer: <>₹1,999</>, original: <>₹2,999</>, discountPct: 33,
  },
  {
    id: "welcome-baby-w31",
    name: "'Welcome Home' Personalised Hot-Air Balloon Boy Arch",
    description:
      "A grand hallway setup with a personalised blue hot-air balloon arched backdrop, chrome-blue balloon pillars, teddy, 'IT'S A BOY' bottle balloon and rose-petal path.",
    image: w31.url,
    includes: [
      "Personalised 'Welcome' arched backdrop",
      "Chrome blue balloon pillars & ceiling balloons",
      "Teddy prop, bottle balloon & petal aisle",
    ],
    rating: 4.9, reviews: 214,
    offer: <>₹5,999</>, original: <>₹8,999</>, discountPct: 33,
  },
  {
    id: "welcome-baby-w32",
    name: "Blue & Silver Moon Ring Welcome Neon Backdrop",
    description:
      "A stunning half-blue half-silver chrome balloon moon ring with a warm 'Welcome' neon sign, baby foil balloons, 'It's a Boy' bottle and 'BABY' boxes.",
    image: w32.url,
    includes: [
      "Blue & silver chrome balloon moon ring",
      "'Welcome' warm-white neon sign",
      "Baby, bottle & 'BABY' letter box props",
    ],
    rating: 4.8, reviews: 178,
    offer: <>₹3,499</>, original: <>₹4,999</>, discountPct: 30,
  },
  {
    id: "welcome-baby-w33",
    name: "'Welcome Baby' Blue Foil Wall & Ceiling Balloons",
    description:
      "Blue starry foil 'WELCOME BABY' letters on a textured wall with silver & blue chrome ceiling balloons, 'It's A Boy' foot pillar and baby-boy round foils.",
    image: w33.url,
    includes: [
      "Starry 'WELCOME BABY' blue foil letters",
      "Blue & silver chrome ceiling balloons",
      "Baby foil balloon & 'IT'S A BOY' props",
    ],
    rating: 4.6, reviews: 134,
    offer: <>₹1,999</>, original: <>₹2,999</>, discountPct: 33,
  },
  {
    id: "welcome-baby-w34",
    name: "'Welcome Home' Personalised Pink Rose-Gold Ring",
    description:
      "A romantic personalised round backdrop with 'Welcome Home' bunny & butterfly print, surrounded by a lush pink, white, gold & rose-gold chrome balloon ring.",
    image: w34.url,
    includes: [
      "Personalised bunny & butterfly round backdrop",
      "Pink, white, gold & rose-gold balloon ring",
      "Setup, styling & on-site installation",
    ],
    rating: 4.8, reviews: 192,
    offer: <>₹3,499</>, original: <>₹4,999</>, discountPct: 30,
  },
  {
    id: "welcome-baby-w35",
    name: "Boho Greenery 'Welcome' Chiara Arch Backdrop",
    description:
      "An elegant boho 'Welcome' chiara arch with printed eucalyptus greenery and a lush white, gold, rose-gold & burgundy balloon garland — refined and photo-ready.",
    image: w35.url,
    includes: [
      "Chiara arch with greenery 'Welcome' panel",
      "White, gold, rose-gold & burgundy garland",
      "Fluted pedestal styling",
    ],
    rating: 4.9, reviews: 221,
    offer: <>₹4,499</>, original: <>₹6,499</>, discountPct: 31,
  },
  {
    id: "welcome-baby-w36",
    name: "'Baby Is On The Way' Nude & Gold Luxury Arch",
    description:
      "A luxury personalised arched backdrop reading 'Baby ___ is on the way' with a nude, cream & chrome-gold balloon garland, giant teddy and 'BABY' block boxes.",
    image: w36.url,
    includes: [
      "Personalised 'Baby Is On The Way' arched panel",
      "Nude, cream & chrome-gold balloon garland",
      "Giant teddy & 'BABY' letter boxes",
    ],
    rating: 4.9, reviews: 246,
    offer: <>₹5,999</>, original: <>₹8,999</>, discountPct: 33,
  },
  {
    id: "welcome-baby-w37",
    name: "'Welcome Home Princess' Personalised Pink Twin Arch",
    description:
      "A grand pink twin-arch backdrop with 'Welcome Home Princess' & baby name, hot-air balloon print, pink & white balloon garland and 'Baby Girl' foil accents.",
    image: w37.url,
    includes: [
      "Personalised pink twin arched backdrop",
      "Pink & white balloon garland with foil daisies",
      "'Baby Girl' & flower foil balloons",
    ],
    rating: 5.0, reviews: 268,
    offer: <>₹7,999</>, original: <>₹12,999</>, discountPct: 38,
  },
  {
    id: "welcome-baby-w38",
    name: "'It's a Baby Boy' Outdoor Entrance Balloon Arch",
    description:
      "A welcoming outdoor entrance arch in pastel blue, white and rose-gold balloons with an 'It's a Baby Boy' foil, blue star pillars and a rose-petal walk-in.",
    image: w38.url,
    includes: [
      "Outdoor pastel blue, white & rose-gold arch",
      "'It's a Baby Boy' round foil & star balloons",
      "Rose petal entrance walkway",
    ],
    rating: 4.7, reviews: 141,
    offer: <>₹1,999</>, original: <>₹2,999</>, discountPct: 33,
  },
  {
    id: "welcome-baby-w39",
    name: "'Welcome Home Baby' Blue Toile Rocking-Horse Arch",
    description:
      "A refined personalised 'Welcome Home Baby ___' blue toile arched backdrop with rocking horse cutout, teddy props, hot-air balloon and pastel blue, cream & rose-gold garland.",
    image: w39.url,
    includes: [
      "Personalised blue toile arched backdrop",
      "Pastel blue, cream & rose-gold balloon garland",
      "Rocking horse, teddy & hot-air balloon props",
    ],
    rating: 4.9, reviews: 209,
    offer: <>₹6,499</>, original: <>₹8,999</>, discountPct: 28,
  },
];

const BATCH_W40 = [
  {
    id: "welcome-baby-w40",
    name: "'Welcome Baby' Pink & Purple Bedroom Balloon Setup",
    description:
      "A pretty pink, purple, white & gold balloon garland above the bed with pink foil 'WELCOME BABY' letters, 'It's A Girl' bottle and foot foil balloon pillars — a warm bedroom welcome for a baby girl.",
    image: w40.url,
    includes: [
      "Pink, purple, white & gold balloon garland",
      "Pink foil 'WELCOME BABY' letters on wall",
      "'It's A Girl' bottle & foot foil pillars",
    ],
    rating: 4.7, reviews: 158,
    offer: <>₹1,999</>, original: <>₹2,999</>, discountPct: 33,
  },
  {
    id: "welcome-baby-w41",
    name: "'Welcome Home' Rose-Gold Ceiling Balloon Living Room",
    description:
      "A luxurious living-room welcome with rose-gold foil 'WELCOME HOME' letters, personalised name balloons and a dreamy ceiling full of rose-gold chrome, blush, confetti balloons and gold streamers.",
    image: w41.url,
    includes: [
      "Rose-gold foil 'WELCOME HOME' letters",
      "Two personalised name balloon bouquets",
      "Rose-gold, blush & confetti ceiling balloons with streamers",
    ],
    rating: 4.9, reviews: 226,
    offer: <>₹3,499</>, original: <>₹4,999</>, discountPct: 30,
  },
  {
    id: "welcome-baby-w42",
    name: "Blue & Cream 'Baby Boy' Door Arch Welcome",
    description:
      "A charming door welcome with pastel blue, teal, cream & white balloon arch, baby pram foil, 'It's A Boy' bottle and feet foil balloons and a soft blue door drape with a baby cutout.",
    image: w42.url,
    includes: [
      "Pastel blue, teal, cream & white door balloon arch",
      "Baby pram, bottle & feet foil balloons",
      "Blue tulle door drape with baby cutout",
    ],
    rating: 4.7, reviews: 149,
    offer: <>₹1,999</>, original: <>₹2,999</>, discountPct: 33,
  },
  {
    id: "welcome-baby-w43",
    name: "'Welcome Little Prince' Round Arch with Elephants",
    description:
      "A cute pastel blue, mint, white & gold round arch backdrop reading 'Welcome To Our Family Little Prince', paired with two adorable elephant cutouts, a bubble balloon and stand pedestals.",
    image: w43.url,
    includes: [
      "'Welcome Little Prince' round chiara backdrop",
      "Blue, mint, white & gold organic balloon garland",
      "Twin elephant cutout props & bubble balloon",
      "Gold stand pedestals for styling",
    ],
    rating: 4.9, reviews: 231,
    offer: <>₹4,999</>, original: <>₹6,999</>, discountPct: 29,
  },
  {
    id: "welcome-baby-w44",
    name: "'Welcome Home' Personalised Pink Butterfly & Bunny Arch",
    description:
      "A romantic personalised pink arched backdrop with 'Welcome Home ___' calligraphy, a giant butterfly cutout on top and a sweet bunny prop, framed by a pink, peach & white balloon garland.",
    image: w44.url,
    includes: [
      "Personalised 'Welcome Home' pink arched backdrop",
      "Giant butterfly & bunny cutout props",
      "Pink, peach & white organic balloon garland",
    ],
    rating: 4.9, reviews: 242,
    offer: <>₹4,999</>, original: <>₹6,999</>, discountPct: 29,
  },
  {
    id: "welcome-baby-w45",
    name: "'Welcome Baby' Blue Bedroom Setup with Fairy Lights",
    description:
      "A soft blue bedroom setup with pastel blue, teal, cream & white balloon garland, silver moon foil, butterfly accents, 'WELCOME BABY' bunting and warm fairy-light curtain behind the bed.",
    image: w45.url,
    includes: [
      "Blue, teal, cream & white balloon garland",
      "Silver moon foil & butterfly accents",
      "'WELCOME BABY' bunting + fairy-light curtain",
      "'It's A Boy' bottle, feet & 'BOY' foil props",
    ],
    rating: 4.8, reviews: 187,
    offer: <>₹2,499</>, original: <>₹3,499</>, discountPct: 29,
  },
  {
    id: "welcome-baby-w46",
    name: "'Welcome Home Krishiv' Luxury Twin Arch with Teddy",
    description:
      "A luxury personalised welcome — a twin arched backdrop with baby name & photo panel and an 'It's A Boy' print panel, framed by blue, white & chrome-gold balloon pillars, giant teddy and 'BABY' letter boxes.",
    image: w46.url,
    includes: [
      "Personalised twin arched backdrops with photo",
      "Blue, white & chrome-gold balloon pillars",
      "Giant teddy prop, 'BABY' letter boxes",
      "'IT'S A BOY' bottle foil pillar",
    ],
    rating: 5.0, reviews: 278,
    offer: <>₹9,999</>, original: <>₹14,999</>, discountPct: 33,
  },
  {
    id: "welcome-baby-w47",
    name: "'Welcome Baby' Pastel Purple Butterfly Outdoor Arch",
    description:
      "A grand outdoor pastel purple 'Welcome Baby' arched backdrop dressed with a lush pink, lavender & cream balloon garland, fresh floral clusters and colourful butterfly cutouts — a dreamy premium welcome.",
    image: w47.url,
    includes: [
      "Pastel purple 'Welcome Baby' arched backdrop",
      "Pink, lavender & cream organic balloon garland",
      "Fresh floral clusters & butterfly cutouts",
      "Pedestal styling with floral centrepiece",
    ],
    rating: 5.0, reviews: 302,
    offer: <>₹14,999</>, original: <>₹19,999</>, discountPct: 25,
  },
  {
    id: "welcome-baby-w48",
    name: "'Welcome Home Aarav' Twin Blue Arch with Elephants",
    description:
      "A premium personalised twin arched backdrop with 'Welcome' neon and baby name, framed by a lush blue, chrome-blue, silver & grey balloon garland and two elephant cutout props with balloon accents.",
    image: w48.url,
    includes: [
      "Personalised twin arched backdrop with baby name",
      "'Welcome' neon sign on striped arch",
      "Blue, chrome-blue, silver & grey balloon garland",
      "Twin elephant cutout props",
    ],
    rating: 4.9, reviews: 264,
    offer: <>₹9,999</>, original: <>₹14,999</>, discountPct: 33,
  },
  {
    id: "welcome-baby-w49",
    name: "'It's A Boy' Blue & Gold Car Welcome Decoration",
    description:
      "A stylish baby-boy car welcome for the drive home from the hospital — blue, white & gold chrome balloon garland across the bonnet with 'It's A Boy' bottle foil and a blue tulle sash.",
    image: w49.url,
    includes: [
      "Blue, white & gold chrome balloon garland on car",
      "'It's A Boy' bottle foil balloon",
      "Blue tulle sash across the bonnet",
      "On-site setup at your address",
    ],
    rating: 4.8, reviews: 176,
    offer: <>₹1,999</>, original: <>₹2,999</>, discountPct: 33,
  },
];

const BATCH_W50 = [
  {
    id: "welcome-baby-w50",
    name: "Butterfly Theme Pink & Lilac Door Welcome Arch",
    description:
      "A cheerful butterfly-theme entrance welcome for a baby girl — pink, lilac & gold balloon door arch with an 'It's a Girl' foil, princess foil balloon, a personalised butterfly welcome board and a fresh rose-petal walkway.",
    image: w50.url,
    includes: [
      "Pink, lilac & gold balloon door arch",
      "Personalised butterfly welcome board with baby name",
      "'It's a Girl' & princess foil balloons",
      "Rose petal entrance walkway",
    ],
    rating: 4.8, reviews: 168,
    offer: <>₹2,499</>, original: <>₹3,499</>, discountPct: 29,
  },
  {
    id: "welcome-baby-w51",
    name: "Butterfly Bloom Personalised Welcome Backdrop",
    description:
      "A grand butterfly-theme indoor welcome with a personalised 'Our Precious Bundle of Joy Is Home' printed panel, pink-lilac-gold balloon garland, BABY blocks, giant butterfly cutouts, unicorn & Hello Kitty foils and ceiling balloon clusters.",
    image: w51.url,
    includes: [
      "Personalised printed butterfly backdrop panel",
      "Pink, lilac, rose-gold & gold balloon garland",
      "Gold BABY blocks with balloons",
      "Giant butterfly cutout props & character foils",
      "Ceiling balloon clusters across the hall",
    ],
    rating: 4.9, reviews: 241,
    offer: <>₹6,499</>, original: <>₹8,999</>, discountPct: 28,
  },
  {
    id: "welcome-baby-w52",
    name: "Royal Blue & Gold Baby Boy Room Welcome",
    description:
      "A luxurious bedroom welcome for a baby boy — blue, gold & white helium ceiling balloons with curling ribbons, 'Welcome Baby' bunting, 'Baby Boy' foils, navy heart balloons and floor balloon pathway.",
    image: w52.url,
    includes: [
      "Blue, gold & white helium ceiling balloons",
      "'Welcome Baby' bunting banner",
      "'Baby Boy' & navy heart foil balloons",
      "Floor balloon spread & photo frame stand",
    ],
    rating: 4.8, reviews: 197,
    offer: <>₹3,499</>, original: <>₹4,999</>, discountPct: 30,
  },
  {
    id: "welcome-baby-w53",
    name: "Luxury 'It's A Baby Boy' Hot Air Balloon Stage",
    description:
      "Our signature luxury welcome stage — triple arched panels with a custom 'It's A Baby Boy' cutout, blue-gold-ivory organic balloon installation, hot air balloon and cloud cutouts, jumbo bobo balloons, cloud ceiling clusters and a giant teddy.",
    image: w53.url,
    includes: [
      "Triple arched panel backdrop with custom name board",
      "Blue, gold & ivory organic balloon installation",
      "Hot air balloon & cloud cutout props",
      "Jumbo bobo balloons and cloud ceiling clusters",
      "Giant teddy bear and white cylinder plinth",
    ],
    rating: 5.0, reviews: 118,
    offer: <>₹17,999</>, original: <>₹24,999</>, discountPct: 28,
  },
  {
    id: "welcome-baby-w54",
    name: "'Welcome Baby Boy' Entrance Arch with Petal Path",
    description:
      "A grand entrance welcome with a blue, sky-blue & gold balloon door arch, a printed 'Welcome Baby Boy' board, teddy-in-hot-air-balloon cutout, pram & baby cutouts and a rich rose-petal red carpet path.",
    image: w54.url,
    includes: [
      "Blue, sky-blue & gold entrance balloon arch",
      "Printed 'Welcome Baby Boy' board",
      "Teddy hot air balloon & pram cutout props",
      "Rose petal walkway to the door",
      "Ceiling balloon clusters in the porch",
    ],
    rating: 4.9, reviews: 205,
    offer: <>₹4,499</>, original: <>₹6,999</>, discountPct: 36,
  },
  {
    id: "welcome-baby-w55",
    name: "Pink Butterfly 'Welcome Baby' Neon Curtain Arch",
    description:
      "A soft, glowing living-room welcome — pink, white & chrome-pink balloon arch with butterfly accents and confetti balloons around a warm fairy-light curtain backdrop with a 'Welcome Baby' neon sign.",
    image: w55.url,
    includes: [
      "Pink, white & chrome-pink balloon arch",
      "'Welcome Baby' neon sign",
      "Fairy-light curtain backdrop",
      "Butterfly & confetti balloon accents",
      "Ceiling balloon bunches",
    ],
    rating: 4.8, reviews: 189,
    offer: <>₹3,999</>, original: <>₹5,999</>, discountPct: 33,
  },
  {
    id: "welcome-baby-w56",
    name: "Pastel Rainbow Ring 'Welcome Baby' Arch",
    description:
      "A pretty pastel ring arch framing your hall entry — pastel blue, lilac, mint, pink & peach balloons with silver chrome clusters and a bright 'Welcome Baby!' neon at the centre.",
    image: w56.url,
    includes: [
      "Pastel multi-colour balloon ring arch",
      "'Welcome Baby!' neon sign",
      "Silver chrome balloon clusters",
      "Ceiling balloon bunches & floor balloons",
    ],
    rating: 4.8, reviews: 174,
    offer: <>₹3,499</>, original: <>₹4,999</>, discountPct: 30,
  },
  {
    id: "welcome-baby-w57",
    name: "Blue & Grey Ring Arch with Baby Foils & BABY Blocks",
    description:
      "A classic baby-boy ring arch in blue, grey, white & silver chrome with a 'Welcome Baby' neon, baby, pram, bottle and 'It's a Boy' foils, silver moon and white BABY blocks.",
    image: w57.url,
    includes: [
      "Blue, grey, white & silver chrome ring arch",
      "'Welcome Baby' neon sign",
      "Baby, pram, bottle & 'It's a Boy' foil balloons",
      "White BABY blocks with balloons",
      "Silver moon & star foils",
    ],
    rating: 4.9, reviews: 213,
    offer: <>₹3,999</>, original: <>₹5,999</>, discountPct: 33,
  },
  {
    id: "welcome-baby-w58",
    name: "Sky Blue & Silver Chrome Welcome Baby Ring",
    description:
      "A clean, photo-ready circular ring arch in sky blue, white & silver chrome with a warm 'Welcome Baby!' neon, hanging photo tassels, baby foil and BABY letter blocks.",
    image: w58.url,
    includes: [
      "Sky blue, white & silver chrome ring arch",
      "'Welcome Baby!' neon sign",
      "Hanging photo & tassel string",
      "Baby foil balloon and BABY blocks",
      "Ceiling balloon clusters",
    ],
    rating: 4.8, reviews: 158,
    offer: <>₹3,499</>, original: <>₹4,999</>, discountPct: 30,
  },
  {
    id: "welcome-baby-w59",
    name: "Personalised Name Fringe Ring Welcome (Baby Girl)",
    description:
      "A pink fringe-curtain ring arch personalised with your baby's name in gold foil letters, framed by pink, lilac, white & silver balloons with heart foils, pram prop, baby foil and BABY blocks.",
    image: w59.url,
    includes: [
      "Pink fringe curtain ring backdrop",
      "Gold foil baby name & WELCOME bunting",
      "Pink, lilac, white & silver balloon garland",
      "Heart foils, baby & pram foil props",
      "BABY blocks and twin balloon pillars",
    ],
    rating: 4.9, reviews: 231,
    offer: <>₹3,999</>, original: <>₹5,499</>, discountPct: 27,
  },
];

const BATCH_W60 = [
  {
    id: "welcome-baby-w60",
    name: "Blue & Gold 'Welcome Baby Boy' Wall Arch",
    description:
      "A bright living-room welcome for a baby boy — royal blue, sky blue, silver & gold balloon garland sweeping across the wall with gold foil 'WELCOME BABY BOY' letters, a teddy foil, pram foil, milk bottle and 'It's a Boy' round foils.",
    image: w60.url,
    includes: [
      "Royal blue, sky blue, silver & gold balloon garland",
      "Gold foil 'WELCOME BABY BOY' letters",
      "Teddy, pram & milk bottle foil balloons",
      "'It's a Boy' round foils and silver star foils",
      "Corner helium balloon bunches",
    ],
    rating: 4.8, reviews: 186,
    offer: <>₹2,499</>, original: <>₹3,499</>, discountPct: 29,
  },
  {
    id: "welcome-baby-w61",
    name: "Pink & Silver Fringe 'Welcome Baby Girl' Backdrop",
    description:
      "A classic baby-girl welcome backdrop with a shimmering magenta fringe curtain, gold foil 'WELCOME BABY GIRL' letters, pink & silver balloon garland with confetti balloons and four sturdy balloon pillars with baby, bottle and baby-feet foils.",
    image: w61.url,
    includes: [
      "Magenta shimmer fringe curtain backdrop",
      "Gold foil 'WELCOME BABY GIRL' letters",
      "Pink & silver balloon garland with confetti balloons",
      "Four balloon pillars with baby & bottle foils",
      "'It's a Girl', heart & star foil balloons",
    ],
    rating: 4.8, reviews: 172,
    offer: <>₹2,499</>, original: <>₹3,499</>, discountPct: 29,
  },
  {
    id: "welcome-baby-w62",
    name: "Personalised Name Blue & Gold Hall Welcome",
    description:
      "A full living-room welcome with a blue, white & gold balloon arch over the seating, your baby's name in gold foil letters, a jumbo 'It's a Boy' bottle balloon pillar and ceiling helium balloons with curling ribbons all through the hall.",
    image: w62.url,
    includes: [
      "Blue, white & gold balloon arch across the hall",
      "Personalised gold foil name + WELCOME letters",
      "Jumbo 'It's a Boy' bottle balloon pillar",
      "Baby, pram & bottle foil balloons",
      "Ceiling helium balloons with curling ribbons",
    ],
    rating: 4.9, reviews: 204,
    offer: <>₹2,799</>, original: <>₹3,999</>, discountPct: 30,
  },
  {
    id: "welcome-baby-w63",
    name: "Simple Blue Ceiling Balloon Welcome Baby Setup",
    description:
      "A light, budget-friendly home welcome — blue & white helium ceiling balloons with hanging swirls, gold foil 'WELCOME BABY' letters on the wall, star and pram foils and twin balloon pillars with 'It's a Boy' bottle balloons.",
    image: w63.url,
    includes: [
      "Blue & white helium ceiling balloons with swirls",
      "Gold foil 'WELCOME BABY' letters",
      "Blue star & pram foil balloons",
      "Twin balloon pillars with 'It's a Boy' foils",
    ],
    rating: 4.7, reviews: 149,
    offer: <>₹1,499</>, original: <>₹2,999</>, discountPct: 50,
  },
  {
    id: "welcome-baby-w64",
    name: "Little Prince Blue & Gold Fairy-Light Welcome",
    description:
      "A dreamy blue & gold welcome for the little prince — warm fairy-light curtain backdrop with gold 'BABY WELCOME' foil letters, an 'It's a Boy' bunting, giant gold moon, chrome gold & confetti balloon arch and a floor balloon spread.",
    image: w64.url,
    includes: [
      "Fairy-light curtain backdrop",
      "Gold foil 'BABY WELCOME' letters & 'It's a Boy' bunting",
      "Blue, white, gold chrome & confetti balloon arch",
      "Giant gold moon and star foil balloons",
      "Baby, bottle & baby-feet foils with floor balloons",
    ],
    rating: 4.9, reviews: 228,
    offer: <>₹2,499</>, original: <>₹3,999</>, discountPct: 38,
  },
  {
    id: "welcome-baby-w65",
    name: "Pink & White Curtain 'Welcome Baby' Arch",
    description:
      "A soft pink half-arch sweeping over your curtain wall with gold foil 'WELCOME BABY' letters, baby-girl round foils, pink heart and star foils — a warm, homely welcome for your little girl.",
    image: w65.url,
    includes: [
      "Pink & white balloon half arch with side pillar",
      "Gold foil 'WELCOME BABY' letters",
      "Baby girl round foils & baby foil balloon",
      "Pink heart and star foil balloons",
    ],
    rating: 4.7, reviews: 161,
    offer: <>₹2,199</>, original: <>₹3,499</>, discountPct: 37,
  },
  {
    id: "welcome-baby-w66",
    name: "Pink Bedroom Ceiling & Flower Balloon Welcome",
    description:
      "A pretty bedroom welcome with pink & white helium ceiling balloons and hanging ribbons, pink polka 'WELCOME BABY' foil letters, balloon flowers across the wall, gold star foils and a baby foil balloon.",
    image: w66.url,
    includes: [
      "Pink & white helium ceiling balloons with ribbons",
      "Pink polka 'WELCOME BABY' foil letters",
      "Balloon flower wall accents",
      "Gold star foils & baby foil balloon",
      "Bed balloon spread",
    ],
    rating: 4.8, reviews: 177,
    offer: <>₹1,799</>, original: <>₹2,999</>, discountPct: 40,
  },
  {
    id: "welcome-baby-w67",
    name: "Pink Flower Balloon Headboard Welcome (Baby Girl)",
    description:
      "A neat above-the-bed welcome for a baby girl — pink polka 'WELCOME BABY' foil letters framed by pink & white balloon flowers, gold star foils, a baby-girl foil and hanging bubble balloon clusters on both sides.",
    image: w67.url,
    includes: [
      "Pink polka 'WELCOME BABY' foil letters",
      "Pink & white balloon flowers on the wall",
      "Gold star foil balloons",
      "Baby girl foil balloon",
      "Hanging bubble balloon clusters",
    ],
    rating: 4.7, reviews: 143,
    offer: <>₹1,499</>, original: <>₹2,999</>, discountPct: 50,
  },
  {
    id: "welcome-baby-w68",
    name: "Blue Chrome 'Welcome Baby' Hall Arch with Flower Path",
    description:
      "A grand hall welcome — blue chrome foil 'WELCOME BABY' letters under a blue, white & navy balloon arch, gold BOY letter blocks, a full ceiling of helium balloons with ribbons and a fresh marigold & rose petal walkway.",
    image: w68.url,
    includes: [
      "Blue, white & navy balloon arch on the wall",
      "Blue chrome 'WELCOME BABY' foil letters",
      "Gold BOY letter balloon blocks",
      "Full ceiling helium balloons with ribbons",
      "Marigold & rose petal entrance walkway",
    ],
    rating: 4.9, reviews: 216,
    offer: <>₹2,999</>, original: <>₹4,499</>, discountPct: 33,
  },
  {
    id: "welcome-baby-w69",
    name: "Blue & Silver Chrome Welcome Baby Boy Frame",
    description:
      "An elegant blue, white & silver chrome balloon frame around your wall panel with a 'Welcome Baby Boy' fabric bunting, baby-boy round foils, bottle foil, star foils and a bunch of blue heart helium balloons.",
    image: w69.url,
    includes: [
      "Blue, white & silver chrome balloon frame arch",
      "'Welcome Baby Boy' fabric bunting banner",
      "Baby boy round foils & milk bottle foil",
      "Blue star and heart foil balloons",
      "Twin balloon plinths with baby foils",
    ],
    rating: 4.8, reviews: 190,
    offer: <>₹2,999</>, original: <>₹3,999</>, discountPct: 25,
  },
];

const BATCH_W70 = [
  {
    id: "welcome-baby-w70",
    name: "Red Balloon 'Welcome Home' Bedroom Surprise",
    description:
      "A warm homecoming setup with gold foil 'WELCOME HOME' letters on the wall, red balloon flower clusters on either side, the bed covered in red balloons and rose petals, and a floor carpet of red balloons.",
    image: w70.url,
    includes: [
      "Gold foil 'WELCOME HOME' letters",
      "Red balloon flower clusters on wall",
      "Red balloons & rose petals on the bed",
      "Floor filled with red balloons",
      "Rose petal scatter across floor",
    ],
    rating: 4.8, reviews: 174,
    offer: <>₹1,799</>, original: <>₹2,999</>, discountPct: 40,
  },
  {
    id: "welcome-baby-w71",
    name: "Pink Baby Girl 'Welcome' Hall Decoration",
    description:
      "A cheerful pink and white welcome for a baby girl with gold foil 'WELCOME' letters, rose-gold 'GIRL' foils, ceiling balloons with curling ribbons, 'It's a Girl' foils, baby & bottle foils and twin balloon pillars topped with pram foils.",
    image: w71.url,
    includes: [
      "Gold foil 'WELCOME' + rose-gold 'GIRL' letters",
      "Pink & white ceiling balloons with ribbons",
      "'It's a Girl' round & bottle foil balloons",
      "Baby foil and pram foil balloons",
      "Two pink & white balloon pillars",
    ],
    rating: 4.9, reviews: 208,
    offer: <>₹1,999</>, original: <>₹3,499</>, discountPct: 43,
  },
  {
    id: "welcome-baby-w72",
    name: "'Welcome Baby Girl' Pink Arch with BABY Blocks",
    description:
      "An elegant pastel pink and silver setup with a sweeping balloon garland, glittery pink 'WELCOME BABY' and silver 'GIRL' foil letters, moon foil, milk bottle balloon column, baby foil and transparent BABY blocks filled with balloons.",
    image: w72.url,
    includes: [
      "Pink, blush & silver balloon garland",
      "Pink 'WELCOME BABY' + silver 'GIRL' foil letters",
      "Transparent BABY blocks with balloons",
      "Milk bottle & baby foil balloons",
      "Two pink balloon pillars + moon foil",
    ],
    rating: 4.9, reviews: 246,
    offer: <>₹2,999</>, original: <>₹3,999</>, discountPct: 25,
  },
  {
    id: "welcome-baby-w73",
    name: "Ceiling Balloons & Floral Path Welcome Decor",
    description:
      "A full living-room welcome with a dense pink, maroon, silver & white ceiling balloon canopy with hanging ribbons, gold foil 'WELCOME' letters, baby and star foils, plus a fresh flower rangoli path on the floor.",
    image: w73.url,
    includes: [
      "Pink, maroon, silver & white ceiling balloons",
      "Hanging ribbon streamers",
      "Gold foil 'WELCOME' letters",
      "Baby foil & pink star foil balloons",
      "Fresh flower petal rangoli path",
    ],
    rating: 4.9, reviews: 219,
    offer: <>₹1,999</>, original: <>₹3,499</>, discountPct: 43,
  },
  {
    id: "welcome-baby-w74",
    name: "Pink & White 'Welcome Baby' Bedroom Canopy",
    description:
      "A soft pink and white ceiling balloon canopy with golden ribbon tails, big gold foil 'WELCOME BABY' letters on the wall, pink balloon flowers on both sides, an 'It's a Girl' bottle foil and balloons scattered on the bed.",
    image: w74.url,
    includes: [
      "Pink & white ceiling balloon canopy",
      "Golden curling ribbon tails",
      "Gold foil 'WELCOME BABY' letters",
      "Pink balloon flowers on both walls",
      "'It's a Girl' bottle foil + bed balloons",
    ],
    rating: 4.8, reviews: 197,
    offer: <>₹1,999</>, original: <>₹3,499</>, discountPct: 43,
  },
  {
    id: "welcome-baby-w75",
    name: "Blue Foil 'Welcome Baby Boy' Living Room Decor",
    description:
      "A striking blue-themed welcome with blue foil 'WELCOME BABY BOY' letters on the feature wall, blue & white balloon flowers, baby foil, pram and bottle foils, and twin blue-white balloon pillars flanking the seating.",
    image: w75.url,
    includes: [
      "Blue foil 'WELCOME BABY BOY' letters",
      "Blue & white balloon flower clusters",
      "Baby, pram & milk bottle foil balloons",
      "Two blue & white balloon pillars",
      "Rose petal heart on centre table",
    ],
    rating: 4.8, reviews: 163,
    offer: <>₹1,799</>, original: <>₹2,999</>, discountPct: 40,
  },
  {
    id: "welcome-baby-w76",
    name: "Personalised Name 'Welcome' Blue Balloon Decor",
    description:
      "A clean hall setup with gold foil 'WELCOME' plus the baby's name in gold letters, blue & white helium balloon bunches with ribbons, silver star foils, cute animal foils and balloons scattered across the floor.",
    image: w76.url,
    includes: [
      "Gold foil 'WELCOME' + baby's name letters",
      "Blue & white helium balloon bunches",
      "Silver star foil balloons",
      "Cute animal foil accents",
      "Floor balloons & marigold petal path",
    ],
    rating: 4.7, reviews: 152,
    offer: <>₹1,799</>, original: <>₹2,999</>, discountPct: 40,
  },
  {
    id: "welcome-baby-w77",
    name: "Blue 'Welcome Baby' Bedroom Foil Setup",
    description:
      "A cosy bedroom welcome for a baby boy with blue star-print foil 'WELCOME BABY' letters above the headboard, teal star foils, 'It's a Boy' round and bottle foils, gold baby foil and blue-white balloon pillars on both sides.",
    image: w77.url,
    includes: [
      "Blue star-print foil 'WELCOME BABY' letters",
      "Teal star foil balloons",
      "'It's a Boy' round, bottle & bouquet foils",
      "Gold baby foil balloon",
      "Two blue & white balloon pillars",
    ],
    rating: 4.8, reviews: 171,
    offer: <>₹1,799</>, original: <>₹2,999</>, discountPct: 40,
  },
  {
    id: "welcome-baby-w78",
    name: "Pink & Gold 'Welcome Baby' Bed Arch",
    description:
      "A luxurious pink, white and chrome-gold balloon arch framing the bed with pink foil 'WELCOME BABY' letters, 'It's a Girl' bottle and cone foils, baby foil, floating chrome balloons and balloons on the bed.",
    image: w78.url,
    includes: [
      "Pink, white & chrome gold balloon arch over bed",
      "Pink foil 'WELCOME BABY' letters",
      "'It's a Girl' bottle & cone foils",
      "Floating chrome gold and rose balloons",
      "Baby foil + bed balloon accents",
    ],
    rating: 4.9, reviews: 234,
    offer: <>₹2,799</>, original: <>₹3,999</>, discountPct: 30,
  },
  {
    id: "welcome-baby-w79",
    name: "Pink Ring Arch 'Welcome Home' Photo Backdrop",
    description:
      "A premium free-standing pink, white and gold balloon ring arch with a glitter 'WELCOME HOME' banner in the centre, baby girl foil, pink star foil and gold balloon flower accents — a perfect photo backdrop.",
    image: w79.url,
    includes: [
      "Free-standing pink, white & gold ring balloon arch",
      "Glitter 'WELCOME HOME' banner",
      "Baby girl foil balloon",
      "Pink star foil & gold balloon flowers",
      "Setup at your venue with a photo-ready finish",
    ],
    rating: 5.0, reviews: 268,
    offer: <>₹3,499</>, original: <>₹4,999</>, discountPct: 30,
  },
];

const BATCH_W80 = [
  {
    id: "welcome-baby-w80",
    name: "Pink & Silver 'Baby Girl' Ring Arch",
    description:
      "A full circular ring arch packed with pink, white and chrome-silver balloons, centred by a pink foil 'BABY GIRL' script, baby and milk-bottle foils, a foil baby-feet accent and a stack of clear BABY blocks filled with balloons.",
    image: w80.url,
    includes: [
      "Circular ring arch in pink, white & chrome silver",
      "Pink foil 'BABY GIRL' letters",
      "Baby foil + milk bottle foil + baby-feet foil",
      "Stacked BABY blocks filled with balloons",
      "Complete setup at your venue",
    ],
    rating: 4.9, reviews: 212,
    offer: <>₹3,499</>, original: <>₹4,999</>, discountPct: 30,
  },
  {
    id: "welcome-baby-w81",
    name: "Blue & Gold 'Baby Welcome' Fairy Light Wall",
    description:
      "A dreamy blue, white and gold garland arch with big gold foil 'BABY WELCOME' letters, warm fairy lights, an 'IT'S A BOY' bunting, gold stars, a crescent moon foil and baby, feet and bottle character foils at the base.",
    image: w81.url,
    includes: [
      "Blue, white, confetti & gold balloon garland",
      "Gold foil 'BABY WELCOME' letters",
      "'IT'S A BOY' bunting + fairy light curtain",
      "Moon, star & butterfly foil accents",
      "Baby, baby-feet and milk-bottle foils",
    ],
    rating: 5.0, reviews: 246,
    offer: <>₹2,499</>, original: <>₹3,499</>, discountPct: 29,
  },
  {
    id: "welcome-baby-w82",
    name: "Hot Air Balloon 'Welcome Baby' Backdrop",
    description:
      "A printed sky-blue cloud backdrop with 'WELCOME BABY' text, framed by a pastel blue, white and chrome-gold balloon garland, with hot air balloon props and balloon clusters at the base.",
    image: w82.url,
    includes: [
      "Printed 'Welcome Baby' cloud backdrop panel",
      "Pastel blue, white & chrome gold garland",
      "Hot air balloon props",
      "Base balloon clusters",
      "On-site installation & dismantling",
    ],
    rating: 4.9, reviews: 158,
    offer: <>₹4,499</>, original: <>₹5,999</>, discountPct: 25,
  },
  {
    id: "welcome-baby-w83",
    name: "Pink & Chrome Silver 'Welcome Baby' Ring Setup",
    description:
      "An elegant ring arch in pink, white and chrome-silver balloons with a 'Welcome Baby' cutout on a sheer curtain, butterfly accents, a baby girl foil, a personalised name board and pink BABY blocks with floor balloons.",
    image: w83.url,
    includes: [
      "Ring arch in pink, white & chrome silver",
      "'Welcome Baby' cutout on sheer curtain",
      "Butterfly & star foil accents",
      "Personalised name board + baby girl foil",
      "Pink BABY blocks and floor balloon spread",
    ],
    rating: 5.0, reviews: 231,
    offer: <>₹3,999</>, original: <>₹5,999</>, discountPct: 33,
  },
  {
    id: "welcome-baby-w84",
    name: "Rose Gold Ceiling 'Welcome Baby' Room Decor",
    description:
      "A luxurious room setup with a ceiling full of pink, rose-gold and silver chrome balloons with curling ribbons, pink foil 'WELCOME BABY' letters, twin balloon pillars, a draped table with gold bow and a rose petal pathway.",
    image: w84.url,
    includes: [
      "Ceiling filled with chrome & pink balloons",
      "Pink foil 'WELCOME BABY' letters",
      "Twin balloon pillars with bubble balloons",
      "Draped table with gold bow",
      "Rose petal pathway on the floor",
    ],
    rating: 4.8, reviews: 189,
    offer: <>₹2,999</>, original: <>₹4,499</>, discountPct: 33,
  },
  {
    id: "welcome-baby-w85",
    name: "Twins 'Welcome Babies' Pastel Arch",
    description:
      "A double-delight pastel setup for twins with pink, blue, lilac and chrome-gold balloons framing a panel, gold foil 'WELCOME BABIES' letters, two baby foils, heart and star foils and baby-feet foils on both sides.",
    image: w85.url,
    includes: [
      "Pastel pink, blue, lilac & gold balloon frame",
      "Gold foil 'WELCOME BABIES' letters",
      "Two baby character foils",
      "Heart & star foil accents",
      "Baby-feet foils on both sides",
    ],
    rating: 4.9, reviews: 143,
    offer: <>₹2,199</>, original: <>₹3,499</>, discountPct: 37,
  },
  {
    id: "welcome-baby-w86",
    name: "Pink Foil Curtain 'Baby Girl' Backdrop",
    description:
      "A shimmering pink foil fringe curtain with a 'BABY GIRL' banner, framed by a chunky pink, white and chrome-pink balloon garland, plus a baby girl foil on a side balloon pillar.",
    image: w86.url,
    includes: [
      "Pink shimmer foil curtain backdrop",
      "'BABY GIRL' paper banner",
      "Pink, white & chrome pink balloon garland",
      "Baby girl character foil",
      "Side balloon pillar",
    ],
    rating: 4.8, reviews: 176,
    offer: <>₹2,499</>, original: <>₹3,499</>, discountPct: 29,
  },
  {
    id: "welcome-baby-w87",
    name: "Neon 'Welcome Baby' Pastel Ring Arch",
    description:
      "A stylish ring arch in pastel pink, blue and chrome-gold balloons with a glowing neon 'Welcome Baby' sign, draped net with fairy lights, a baby foil, 'Baby Boy' foil and twin balloon pillars with a rose petal path.",
    image: w87.url,
    includes: [
      "Pastel pink, blue & chrome gold ring arch",
      "Neon 'Welcome Baby' sign",
      "Draped net with fairy lights",
      "Baby foil + 'Baby Boy' round foil",
      "Twin balloon pillars & rose petal path",
    ],
    rating: 5.0, reviews: 254,
    offer: <>₹3,499</>, original: <>₹4,999</>, discountPct: 30,
  },
  {
    id: "welcome-baby-w88",
    name: "Blue & White 'Welcome Baby Boy' Wall Arch",
    description:
      "A classic blue and white balloon arch with big blue foil 'WELCOME BABY BOY' letters, star foils, 'It's a Boy' foil, baby and milk-bottle foils and twin balloon pillars with balloon clusters on the floor.",
    image: w88.url,
    includes: [
      "Blue & white balloon arch",
      "Blue foil 'WELCOME BABY BOY' letters",
      "Star foils & 'It's a Boy' foil",
      "Baby and milk-bottle character foils",
      "Twin pillars + floor balloon clusters",
    ],
    rating: 4.9, reviews: 198,
    offer: <>₹2,499</>, original: <>₹3,499</>, discountPct: 29,
  },
  {
    id: "welcome-baby-w89",
    name: "Pink & White 'Welcome Baby' Living Room Setup",
    description:
      "A bright home welcome with pink foil 'WELCOME BABY' letters on the wall, a pink, white and silver balloon cloud, 'It's a Girl' foils, heart foils and ceiling-hung pink balloons with ribbons over the seating area.",
    image: w89.url,
    includes: [
      "Pink foil 'WELCOME BABY' letters",
      "Pink, white & silver balloon cloud arch",
      "'It's a Girl' round foils",
      "Pink heart foils",
      "Ceiling-hung balloons with ribbons",
    ],
    rating: 4.8, reviews: 167,
    offer: <>₹2,499</>, original: <>₹3,499</>, discountPct: 29,
  },
];

const CARDS_ALL = [...CARDS, ...NEW_CARDS, ...EXTRA_CARDS, ...BATCH_W30, ...BATCH_W40, ...BATCH_W50, ...BATCH_W60, ...BATCH_W70, ...BATCH_W80];

const GALLERY = [w1.url, w2.url, w3.url, w4.url, w5.url, w6.url, w7.url, w8.url, w9.url, w10.url, w11.url, w12.url, w13.url, w14.url, w15.url, w16.url, w17.url, w18.url, w19.url, w20.url, w21.url, w22.url, w23.url, w24.url, w25.url, w26.url, w27.url, w28.url, w29.url, w30.url, w31.url, w32.url, w33.url, w34.url, w35.url, w36.url, w37.url, w38.url, w39.url, w40.url, w41.url, w42.url, w43.url, w44.url, w45.url, w46.url, w47.url, w48.url, w49.url, w50.url, w51.url, w52.url, w53.url, w54.url, w55.url, w56.url, w57.url, w58.url, w59.url, w60.url, w61.url, w62.url, w63.url, w64.url, w65.url, w66.url, w67.url, w68.url, w69.url, w70.url, w71.url, w72.url, w73.url, w74.url, w75.url, w76.url, w77.url, w78.url, w79.url, w80.url, w81.url, w82.url, w83.url, w84.url, w85.url, w86.url, w87.url, w88.url, w89.url];

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
          {CARDS_ALL.map((p) => (
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
