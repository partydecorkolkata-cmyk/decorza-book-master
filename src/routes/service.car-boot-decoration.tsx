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
import e1 from "@/assets/car-e1.png.asset.json";
import e2 from "@/assets/car-e2.jpg.asset.json";
import e3 from "@/assets/car-e3.jpg.asset.json";
import e4 from "@/assets/car-e4.jpg.asset.json";
import e5 from "@/assets/car-e5.jpeg.asset.json";
import e6 from "@/assets/car-e6.jpeg.asset.json";
import e7 from "@/assets/car-e7.jpeg.asset.json";
import e8 from "@/assets/car-e8.jpeg.asset.json";
import e9 from "@/assets/car-e9.jpeg.asset.json";
import e10 from "@/assets/car-e10.jpeg.asset.json";
import f1 from "@/assets/car-f1.jpeg.asset.json";
import f2 from "@/assets/car-f2.jpeg.asset.json";
import f3 from "@/assets/car-f3.jpeg.asset.json";
import f4 from "@/assets/car-f4.jpeg.asset.json";
import f5 from "@/assets/car-f5.jpeg.asset.json";
import f6 from "@/assets/car-f6.jpeg.asset.json";
import f7 from "@/assets/car-f7.jpeg.asset.json";
import f8 from "@/assets/car-f8.jpeg.asset.json";
import f9 from "@/assets/car-f9.jpeg.asset.json";
import f10 from "@/assets/car-f10.jpeg.asset.json";



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

const BATCH_D = [
  {
    id: "car-boot-purple-blue-led-photo-string",
    name: "Purple & Blue LED Balloon Photo String Car Boot Decoration",
    description:
      "A glowing night boot surprise with a silver cursive 'Happy Birthday' cutout, ribbons holding your printed photos across the rear glass, and a boot filled with purple, blue and rose-gold confetti balloons lit from inside with warm LED lights.",
    image: d1.url,
    includes: [
      "Silver cursive 'Happy Birthday' cutout",
      "Hanging photo prints on ribbons across the glass",
      "Purple, blue & white LED balloon bed",
      "Rose gold confetti balloons",
      "Warm fairy lights inside the boot",
    ],
    rating: 4.7,
    reviews: 121,
    offer: "₹2,199",
    original: "₹2,999",
    discountPct: 27,
  },
  {
    id: "car-boot-red-love-heart-canopy",
    name: "Red 'love' Heart Canopy Car Boot Decoration",
    description:
      "A romantic red boot setup with a ceiling of hanging red foil hearts and curling ribbons, a red and gold 'HAPPY BIRTHDAY' flag banner, big red 'love' script foil balloons and a bed of red, white and gold balloons glowing with fairy lights.",
    image: d2.url,
    includes: [
      "Hanging red foil heart canopy with ribbon curls",
      "Red & gold 'HAPPY BIRTHDAY' flag banner",
      "Red 'love' script foil balloons",
      "Red, white & gold balloon bed",
      "Warm fairy lights inside the boot",
    ],
    rating: 4.9,
    reviews: 214,
    offer: "₹2,499",
    original: "₹3,499",
    discountPct: 29,
    bestSeller: true,
  },
  {
    id: "car-boot-pastel-gold-number-fringe",
    name: "Pastel & Gold Number Fringe Car Boot Decoration",
    description:
      "A soft pastel boot surprise with helium balloons in blush, mint, lilac and chrome gold floating from the boot lid on gold ribbons, a silver fringe curtain, a white and gold 'HAPPY BIRTHDAY' banner and giant gold number foil balloons for the age.",
    image: d3.url,
    includes: [
      "Pastel & chrome gold helium balloons with gold ribbons",
      "Silver foil fringe curtain",
      "White & gold 'HAPPY BIRTHDAY' banner",
      "Gold number foil balloons (any age)",
      "Fairy lights & paper flower accent",
    ],
    rating: 4.6,
    reviews: 98,
    offer: "₹1,999",
    original: "₹2,999",
    discountPct: 33,
  },
  {
    id: "car-boot-marquee-love-initial-luxe",
    name: "Marquee 'LOVE' & Initial Letter Luxury Car Boot Decoration",
    description:
      "A premium night boot setup with maroon and white helium balloons on rose gold ribbons, hanging photo prints, a gold glitter 'Happy Birthday' banner, glowing LOVE and initial marquee lights, a lit butterfly lamp, paper fans and a decorative birdcage.",
    image: d4.url,
    includes: [
      "Maroon & white helium balloons with rose gold ribbons",
      "Hanging photo print string",
      "Gold glitter 'Happy Birthday' banner",
      "LED 'LOVE' marquee + initial letter light",
      "Butterfly lamp, paper fans & decorative birdcage",
    ],
    rating: 4.9,
    reviews: 187,
    offer: "₹3,499",
    original: "₹4,999",
    discountPct: 30,
  },
  {
    id: "car-boot-pink-white-cloud-gold-fringe",
    name: "Pink & White Cloud Gold Fringe Car Boot Decoration",
    description:
      "A pretty daytime boot setup with a dense pink and white balloon cloud on the boot lid, a gold foil fringe curtain, a black and gold 'HAPPY BIRTHDAY' banner, pink heart foil balloons and a full bed of pink and white balloons with red ribbon streamers.",
    image: d5.url,
    includes: [
      "Pink & white balloon cloud on the boot lid",
      "Gold foil fringe curtain backdrop",
      "Black & gold 'HAPPY BIRTHDAY' banner",
      "Two pink heart foil balloons",
      "Pink & white balloon bed with ribbon streamers",
    ],
    rating: 4.8,
    reviews: 166,
    offer: "₹2,499",
    original: "₹3,499",
    discountPct: 29,
  },
  {
    id: "car-boot-red-gold-classic-sedan",
    name: "Red & Gold Classic Sedan Boot Decoration",
    description:
      "A simple, striking daytime boot surprise with black and gold 'HAPPY BIRTHDAY' banners on the lid and inside, red and gold chrome balloon clusters at the corners, purple ribbon streamers and a bed of red and gold balloons with champagne bottle foils.",
    image: d6.url,
    includes: [
      "Black & gold 'HAPPY BIRTHDAY' banners",
      "Red & gold chrome balloon clusters",
      "Ribbon streamers on the boot lid",
      "Red & gold balloon bed",
      "Gold champagne bottle foil balloons",
    ],
    rating: 4.6,
    reviews: 104,
    offer: "₹1,999",
    original: "₹2,999",
    discountPct: 33,
  },
  {
    id: "car-boot-glitter-gold-banner-red-love",
    name: "Glitter Gold Banner & Red 'love' Car Boot Decoration",
    description:
      "A bright hatchback boot setup with a gold glitter 'HAPPY BIRTHDAY' banner, red and gold chrome balloon clusters on the lid and around the frame, red ribbon curls and red 'love' script foil balloons resting on a bed of red and gold balloons.",
    image: d7.url,
    includes: [
      "Gold glitter 'HAPPY BIRTHDAY' banner",
      "Red & gold chrome balloon clusters",
      "Red ribbon curls on the boot lid",
      "Red 'love' script foil balloons",
      "Red & gold balloon bed",
    ],
    rating: 4.7,
    reviews: 112,
    offer: "₹2,199",
    original: "₹3,499",
    discountPct: 37,
  },
  {
    id: "car-boot-all-gold-photo-memories",
    name: "All-Gold Photo Memories Car Boot Decoration",
    description:
      "A rich all-gold boot setup with chrome gold helium balloons on the lid, a gold foil fringe curtain, two white and gold 'HAPPY BIRTHDAY' banners, hanging printed photo memories, a rose gold heart foil and gold balloons with shredded foil confetti.",
    image: d8.url,
    includes: [
      "Chrome gold helium balloons on the boot lid",
      "Gold foil fringe curtain",
      "Double white & gold 'HAPPY BIRTHDAY' banners",
      "Hanging printed photo memories",
      "Rose gold heart foil & gold balloon bed with fairy lights",
    ],
    rating: 4.8,
    reviews: 158,
    offer: "₹2,499",
    original: "₹3,499",
    discountPct: 29,
  },
  {
    id: "car-boot-pink-navy-photo-clip-lights",
    name: "Pink & Navy Photo Clip Light Car Boot Decoration",
    description:
      "A lavish night boot surprise with clip-light photo strings holding dozens of your pictures, pink and white balloons along the lid, a white and gold 'HAPPY BIRTHDAY' banner, a foil birthday sash, a chalkboard love message and a dried flower bouquet.",
    image: d9.url,
    includes: [
      "Clip-light photo strings with your pictures",
      "Pink, white & navy balloon arrangement",
      "White & gold 'HAPPY BIRTHDAY' banner + foil sash",
      "Chalkboard 'I love you forever' message frame",
      "Dried flower bouquet & fairy light spread",
    ],
    rating: 4.9,
    reviews: 173,
    offer: "₹2,999",
    original: "₹4,499",
    discountPct: 33,
  },
  {
    id: "car-boot-purple-gold-rose-basket",
    name: "Purple & Gold Chrome Rose Basket Car Boot Decoration",
    description:
      "A grand night boot setup with a purple glitter 'Happy Birthday' cursive banner, chrome purple, gold and black balloon clusters, hanging red foil hearts, gold ribbon streamers, your printed photos and a red rose basket at the centre.",
    image: d10.url,
    includes: [
      "Purple glitter cursive 'Happy Birthday' banner",
      "Chrome purple, gold & black balloon clusters",
      "Hanging red foil hearts & gold ribbon streamers",
      "Printed photo cards throughout the setup",
      "Red rose basket with fairy lights",
    ],
    rating: 4.9,
    reviews: 196,
    offer: "₹3,499",
    original: "₹4,999",
    discountPct: 30,
    bestSeller: true,
  },
];

const BATCH_E = [
  {
    id: "car-boot-red-23-heart-rose-bouquet",
    name: "Red Heart & Number Rose Bouquet Car Boot Decoration",
    description:
      "A bold red car-boot surprise with a red and gold 'HAPPY BIRTHDAY' flag banner, floating red foil hearts on ribbons, giant red number foil balloons for the age, a red rose and baby's breath bouquet, a gift bag and a bed of red and chrome gold balloons under warm fairy lights.",
    image: e1.url,
    includes: [
      "Red & gold 'HAPPY BIRTHDAY' flag banner",
      "Floating red heart foil balloons",
      "Giant red number foil balloons (any age)",
      "Red rose & baby's breath bouquet with gift bag",
      "Red & chrome gold balloon bed with fairy lights",
    ],
    rating: 4.9,
    reviews: 188,
    offer: "₹2,499",
    original: "₹3,499",
    discountPct: 29,
    bestSeller: true,
  },
  {
    id: "car-boot-blush-maroon-photo-garland",
    name: "Blush & Maroon Photo Garland Car Boot Decoration",
    description:
      "A soft blush car-boot setup with a gold cursive 'Happy Birthday' cutout on the rear glass, a peach, white and maroon balloon garland along the boot lid, your printed photos hanging on ribbons, a gold confetti birthday foil and shredded red foil with fairy lights inside.",
    image: e2.url,
    includes: [
      "Gold cursive 'Happy Birthday' cutout",
      "Peach, white & maroon balloon garland",
      "Hanging printed photo prints on ribbons",
      "Gold confetti 'Happy Birthday' foil balloon",
      "Red shredded foil base with fairy lights",
    ],
    rating: 4.7,
    reviews: 134,
    offer: "₹2,499",
    original: "₹3,499",
    discountPct: 29,
  },
  {
    id: "car-boot-red-heart-photo-memory-night",
    name: "Red Heart Photo Memory Car Boot Decoration",
    description:
      "A romantic night-time boot surprise with a silver 'Happy Birthday' cursive banner strung with fairy lights, big red heart foil balloons carrying your couple photos, a gold foil fringe curtain, message cards on ribbons and a bed of peach, white and red balloons over gold shreds and rose petals.",
    image: e3.url,
    includes: [
      "Silver cursive 'Happy Birthday' banner with fairy lights",
      "Large red heart foil balloons with photo prints",
      "Gold foil fringe curtain backdrop",
      "Hanging message cards & photo prints",
      "Peach, white & red balloon bed with rose petals",
    ],
    rating: 4.8,
    reviews: 162,
    offer: "₹2,499",
    original: "₹3,499",
    discountPct: 29,
  },
  {
    id: "car-boot-chrome-gold-copper-love-you",
    name: "Chrome Gold & Copper 'I Love You' Car Boot Decoration",
    description:
      "A glowing hatchback boot setup with a gold cursive 'Happy Birthday' cutout across the glass, gold foil fringe curtains on both sides of the boot door, a printed birthday round foil, a red 'I love you' heart foil and a full bed of chrome gold, copper and clear balloons lit with fairy lights.",
    image: e4.url,
    includes: [
      "Gold cursive 'Happy Birthday' cutout",
      "Gold foil fringe curtains on the boot frame",
      "Printed 'Happy Birthday' round foil balloon",
      "Red 'I love you' heart foil balloon",
      "Chrome gold, copper & clear balloon bed with fairy lights",
    ],
    rating: 4.8,
    reviews: 149,
    offer: "₹2,499",
    original: "₹3,499",
    discountPct: 29,
  },
  {
    id: "car-boot-pink-glitter-heart-bouquet",
    name: "Pink Glitter Script & Heart Bouquet Car Boot Decoration",
    description:
      "A dreamy pink boot surprise with a large pink glitter 'Happy Birthday' script cutout, a silver fringe curtain backdrop, pink and rose gold heart foil balloons with curling ribbons, a mixed rose bouquet and a bed of pastel pink and white balloons framed by fairy lights.",
    image: e5.url,
    includes: [
      "Pink glitter 'Happy Birthday' script cutout",
      "Silver foil fringe curtain backdrop",
      "Pink & rose gold heart foil balloons",
      "Mixed pink & white rose bouquet",
      "Pastel pink & white balloon bed with fairy lights",
    ],
    rating: 4.9,
    reviews: 176,
    offer: "₹2,499",
    original: "₹3,499",
    discountPct: 29,
  },
  {
    id: "car-boot-hot-pink-butterfly-number",
    name: "Hot Pink Butterfly Number Car Boot Decoration",
    description:
      "A bright daytime SUV boot setup with hot pink balloons lining the open boot door, a pink and gold 'HAPPY BIRTHDAY' banner with paper butterflies, giant gold number foil balloons for the age, a shimmering backdrop and pink balloon clusters at the corners.",
    image: e6.url,
    includes: [
      "Hot pink balloon row along the boot door",
      "Pink & gold 'HAPPY BIRTHDAY' banner",
      "Paper butterfly cutouts",
      "Giant gold number foil balloons (any age)",
      "Shimmer backdrop & pink balloon clusters",
    ],
    rating: 4.7,
    reviews: 128,
    offer: "₹2,499",
    original: "₹3,499",
    discountPct: 29,
  },
  {
    id: "car-boot-lilac-white-lily-simple",
    name: "Lilac & White Lily Car Boot Decoration",
    description:
      "A fresh, minimal boot surprise with a pastel ombre 'Happy Birthday' cursive cutout across the rear seats, a wrapped white lily bouquet and a soft bed of lilac and white balloons — simple, elegant and perfect for a quick daytime surprise.",
    image: e7.url,
    includes: [
      "Pastel ombre 'Happy Birthday' cursive cutout",
      "Wrapped white lily bouquet",
      "Lilac & white balloon bed",
      "Ribbon accents & setup styling",
      "Complete on-location setup by our team",
    ],
    rating: 4.6,
    reviews: 103,
    offer: "₹1,999",
    original: "₹2,999",
    discountPct: 33,
  },
  {
    id: "car-boot-valentine-love-petal-clipstring",
    name: "Valentine 'LOVE' Rose Petal Car Boot Decoration",
    description:
      "A full red romantic boot setup with a clip photo string of your pictures across the boot, a handmade 'Happy Valentine's Day My Love' poster, red 'LOVE' foil letters, giant red heart foils, a carpet of red rose petals with chocolates, a cake spot and a fresh flower bouquet.",
    image: e8.url,
    includes: [
      "Clip photo string with your printed pictures",
      "Handmade 'Happy Valentine's Day My Love' poster",
      "Red 'LOVE' foil letters & giant heart foils",
      "Red rose petal carpet with chocolates",
      "Fresh flower bouquet & fairy lights",
    ],
    rating: 4.9,
    reviews: 205,
    offer: "₹2,499",
    original: "₹3,499",
    discountPct: 29,
  },
  {
    id: "car-boot-pastel-pink-gift-hamper",
    name: "Pastel Pink Gift Hamper Car Boot Decoration",
    description:
      "A cute pink boot surprise with a pink and gold 'HAPPY BIRTHDAY' banner lit with fairy lights, a pink heart foil balloon, a flower vase centrepiece, soft toy and gift hamper styling and a boot filled with blush and peach balloons glowing from within.",
    image: e9.url,
    includes: [
      "Pink & gold 'HAPPY BIRTHDAY' banner with fairy lights",
      "Pink heart foil balloon",
      "Flower vase centrepiece",
      "Soft toy & gift hamper styling",
      "Blush & peach balloon bed with warm LED glow",
    ],
    rating: 4.8,
    reviews: 141,
    offer: "₹2,499",
    original: "₹3,499",
    discountPct: 29,
  },
  {
    id: "car-boot-rosegold-pompom-number-fringe",
    name: "Rose Gold Pom-Pom Number Car Boot Decoration",
    description:
      "A charming boot setup with silver number foil balloons for the age, a silver fringe curtain, pink and blush paper pom-poms across the top, a pastel 'HAPPY BIRTHDAY' banner and a bed of nude and blush balloons with ribbon curls and fairy lights.",
    image: e10.url,
    includes: [
      "Silver number foil balloons (any age)",
      "Silver foil fringe curtain backdrop",
      "Pink & blush paper pom-pom cluster",
      "Pastel 'HAPPY BIRTHDAY' banner",
      "Nude & blush balloon bed with fairy lights",
    ],
    rating: 4.7,
    reviews: 119,
    offer: "₹2,499",
    original: "₹3,499",
    discountPct: 29,
  },
];

const GALLERY = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, e1, e2, e3, e4, e5, e6, e7, e8, e9, e10].map((a) => a.url);


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
          {[...CORE, ...BATCH_C, ...BATCH_D, ...BATCH_E].map((p) => (
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
