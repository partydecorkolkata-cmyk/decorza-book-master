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
import themeA1 from "@/assets/theme-a1.jpg.asset.json";
import themeA2 from "@/assets/theme-a2.jpeg.asset.json";
import themeA3 from "@/assets/theme-a3.jpeg.asset.json";
import themeA4 from "@/assets/theme-a4.jpeg.asset.json";
import themeA5 from "@/assets/theme-a5.jpg.asset.json";
import themeA6 from "@/assets/theme-a6.jpg.asset.json";
import themeA7 from "@/assets/theme-a7.jpg.asset.json";
import themeA8 from "@/assets/theme-a8.jpeg.asset.json";
import themeA9 from "@/assets/theme-a9.webp.asset.json";
import themeA10 from "@/assets/theme-a10.jpg.asset.json";
import themeB1 from "@/assets/theme-b1.jpeg.asset.json";
import themeB2 from "@/assets/theme-b2.jpeg.asset.json";
import themeB3 from "@/assets/theme-b3.webp.asset.json";
import themeB4 from "@/assets/theme-b4.jpeg.asset.json";
import themeB5 from "@/assets/theme-b5.jpeg.asset.json";
import themeB6 from "@/assets/theme-b6.jpeg.asset.json";
import themeB7 from "@/assets/theme-b7.jpeg.asset.json";
import themeB8 from "@/assets/theme-b8.jpeg.asset.json";
import themeB9 from "@/assets/theme-b9.jpeg.asset.json";
import themeB10 from "@/assets/theme-b10.jpeg.asset.json";
import themeC1 from "@/assets/theme-c1.jpeg.asset.json";
import themeC2 from "@/assets/theme-c2.jpg.asset.json";
import themeC3 from "@/assets/theme-c3.jpeg.asset.json";
import themeC4 from "@/assets/theme-c4.jpeg.asset.json";
import themeC5 from "@/assets/theme-c5.jpeg.asset.json";
import themeC6 from "@/assets/theme-c6.jpeg.asset.json";
import themeC7 from "@/assets/theme-c7.jpeg.asset.json";
import themeC8 from "@/assets/theme-c8.jpeg.asset.json";
import themeC9 from "@/assets/theme-c9.jpeg.asset.json";
import themeC10 from "@/assets/theme-c10.jpeg.asset.json";
import themeD1 from "@/assets/theme-d1.jpeg.asset.json";
import themeD2 from "@/assets/theme-d2.jpeg.asset.json";
import themeD3 from "@/assets/theme-d3.jpeg.asset.json";
import themeD4 from "@/assets/theme-d4.jpeg.asset.json";
import themeD5 from "@/assets/theme-d5.jpeg.asset.json";
import themeD6 from "@/assets/theme-d6.jpg.asset.json";
import themeD7 from "@/assets/theme-d7.jpg.asset.json";
import themeD8 from "@/assets/theme-d8.jpeg.asset.json";
import themeD9 from "@/assets/theme-d9.jpeg.asset.json";
import themeD10 from "@/assets/theme-d10.jpg.asset.json";
import themeE1 from "@/assets/theme-e1.jpeg.asset.json";
import themeE2 from "@/assets/theme-e2.jpeg.asset.json";
import themeE3 from "@/assets/theme-e3.jpeg.asset.json";
import themeE4 from "@/assets/theme-e4.webp.asset.json";
import themeE5 from "@/assets/theme-e5.webp.asset.json";
import themeE6 from "@/assets/theme-e6.jpeg.asset.json";
import themeE7 from "@/assets/theme-e7.jpg.asset.json";
import themeE8 from "@/assets/theme-e8.jpeg.asset.json";
import themeE9 from "@/assets/theme-e9.jpg.asset.json";
import themeE10 from "@/assets/theme-e10.jpg.asset.json";
import themeF1 from "@/assets/theme-f1.jpg.asset.json";
import themeF2 from "@/assets/theme-f2.jpeg.asset.json";
import themeF3 from "@/assets/theme-f3.jpeg.asset.json";
import themeF4 from "@/assets/theme-f4.jpg.asset.json";
import themeF5 from "@/assets/theme-f5.jpeg.asset.json";
import themeF6 from "@/assets/theme-f6.jpeg.asset.json";
import themeF7 from "@/assets/theme-f7.jpeg.asset.json";
import themeF8 from "@/assets/theme-f8.jpg.asset.json";
import themeF9 from "@/assets/theme-f9.jpeg.asset.json";
import themeF10 from "@/assets/theme-f10.webp.asset.json";
import themeG1 from "@/assets/theme-g1.jpg.asset.json";
import themeG2 from "@/assets/theme-g2.jpeg.asset.json";
import themeG3 from "@/assets/theme-g3.jpeg.asset.json";
import themeG4 from "@/assets/theme-g4.jpeg.asset.json";
import themeG5 from "@/assets/theme-g5.jpeg.asset.json";
import themeG6 from "@/assets/theme-g6.jpeg.asset.json";
import themeG7 from "@/assets/theme-g7.jpeg.asset.json";
import themeG8 from "@/assets/theme-g8.jpeg.asset.json";
import themeG9 from "@/assets/theme-g9.jpeg.asset.json";
import themeG10 from "@/assets/theme-g10.jpeg.asset.json";
import themeH1 from "@/assets/theme-h1.webp.asset.json";
import themeH2 from "@/assets/theme-h2.webp.asset.json";
import themeH3 from "@/assets/theme-h3.jpg.asset.json";
import themeH4 from "@/assets/theme-h4.jpg.asset.json";
import themeH5 from "@/assets/theme-h5.jpg.asset.json";

const NEW_THEME_CARDS_H = [
  {
    id: "theme-h-gustu-dana-jungle-sage-gold-1st",
    name: "Gustu Dana Jungle Sage & Gold 1st Arch",
    description: "A charming jungle 1st birthday arch with a personalised ivory arched backdrop reading 'GUSTU DANA is turning 1', a lush organic balloon garland in sage-green, chrome-gold, white & clear balloons with tropical palm & ivy leaves, a cute baby-lion cut-out standee and a tall white cake pedestal — recreated from the reference photo.",
    image: themeH1.url,
    includes: ["Personalised 'NAME is turning 1' ivory arched backdrop", "Sage green, chrome-gold, white & clear balloon garland", "Palm + ivy tropical leaf accents", "Baby lion cut-out standee + white cake pedestal"],
    rating: 4.8, reviews: 312, offer: <>₹4,499</>, original: <>₹5,999</>, discountPct: 25, bestSeller: true,
  },
  {
    id: "theme-h-anaaya-reddy-jungle-safari-arch",
    name: "Anaaya Reddy Jungle Safari Grand 1st Arch",
    description: "A lavish jungle safari 1st birthday setup with a personalised mint chiara backdrop featuring the baby's photo and 'Anaaya Reddy Turns 1', a lush green, gold & ivory organic balloon arch, life-size giraffe, monkey, lion & lioness cut-out standees, marquee '1' light, mini ferris-wheel cake stand, printed cake pedestals and a green grass floor — recreated from the picture.",
    image: themeH2.url,
    includes: ["Personalised photo backdrop 'NAME Turns 1'", "Green, chrome-gold, ivory & clear jungle balloon arch", "Giraffe, monkey, lion & lioness standees + marquee '1' light", "Ferris-wheel cake stand + printed pedestals + grass floor"],
    rating: 4.9, reviews: 574, offer: <>₹9,999</>, original: <>₹14,999</>, discountPct: 33, bestSeller: true,
  },
  {
    id: "theme-h-navya-onederful-grand-stage",
    name: "Navya 'Isn't She ONEderful' Grand Stage Decor",
    description: "A grand banquet stage setup with a personalised pink 'isn't she ONEderful — Navya' twin backdrop, boho arched side props, a lush pastel peach, coral, rose-gold, cream & chrome organic balloon garland with palm-leaf paper fans, tall printed cake pedestals with retro daisies, wooden 'ONE' blocks, boho rainbow, giant marquee 'NAVYA' name light and a neon '1' light — recreated from the reference photo.",
    image: themeH3.url,
    includes: ["Personalised twin 'ONEderful' + NAME backdrop with boho arches", "Peach, coral, rose-gold & cream organic balloon garland + palm fans", "Wooden 'ONE' blocks + boho rainbow + printed cake pedestals", "Giant marquee 'NAME' letters light + neon '1' light + full stage styling"],
    rating: 5.0, reviews: 892, offer: <>₹34,999</>, original: <>₹44,999</>, discountPct: 22, bestSeller: true,
  },
  {
    id: "theme-h-jisnu-cocomelon-banquet-grand",
    name: "Jisnu Cocomelon Banquet Grand 1st Decor",
    description: "A grand banquet Cocomelon 1st birthday with a personalised 'JISNU Turns One' yellow backdrop, silver sequin shimmer wall with 'Happy Birthday' neon, rainbow Cocomelon character backdrop, pastel rainbow (mint, peach, lilac, sky, yellow) & chrome-gold organic balloon arch across the stage, life-size JJ, Bingo, Cody & Nina Cocomelon standees, a Cocomelon school-bus prop and a personalised marquee '#JISNU1#' picket-fence name light — exactly like the picture.",
    image: themeH4.url,
    includes: ["Personalised Cocomelon 'NAME Turns One' backdrop + silver shimmer wall + neon", "Pastel rainbow + chrome-gold organic balloon garland across stage", "4 Cocomelon character standees + school-bus prop", "Marquee '#NAME1#' picket-fence name light + full banquet setup"],
    rating: 5.0, reviews: 731, offer: <>₹29,999</>, original: <>₹39,999</>, discountPct: 25, bestSeller: true,
  },
  {
    id: "theme-h-cocomelon-sequin-neon-arch",
    name: "Cocomelon Rose-Gold Sequin & Neon Arch",
    description: "A stunning Cocomelon arch with a rose-gold sequin shimmer wall, glowing 'Happy Birthday' pink neon centrepiece, a rainbow organic balloon arch in pink, blue, peach, lilac, cream & chrome-gold, Cocomelon family topper cut-out, watermelon logo, sunshine prop, JJ & Cody standees, artificial grass floor and a marquee number '1' light — recreated from the reference photo.",
    image: themeH5.url,
    includes: ["Rose-gold sequin shimmer wall + 'Happy Birthday' pink neon", "Rainbow + chrome-gold organic balloon arch", "Cocomelon family topper + watermelon + sunshine cut-outs", "JJ & Cody standees + grass floor + marquee '1' light"],
    rating: 4.9, reviews: 486, offer: <>₹7,499</>, original: <>₹9,999</>, discountPct: 25, bestSeller: true,
  },
];

const NEW_THEME_CARDS_G = [
  {
    id: "theme-g-mishant-cocomelon-blue-melon-1st",
    name: "Mishant Cocomelon 'In a Melon 1' Blue Arch",
    description: "A dreamy Cocomelon 1st birthday setup with a personalised 'MISHANT is in a MELON 1' sky-blue cloud backdrop, a chiara blue-slatted side arch with cloud cut-outs, a large organic balloon garland in navy, powder-blue, ivory & clear bubble balloons, a boho rainbow prop and a life-size JJ Cocomelon standee — recreated exactly like the picture.",
    image: themeG1.url,
    includes: ["Personalised 'In a Melon 1' cloud backdrop + slatted chiara arch", "Navy, blue, ivory & bubble balloon organic garland", "Cloud cut-outs + boho rainbow prop", "Life-size JJ Cocomelon standee + venue setup"],
    rating: 4.9, reviews: 512, offer: <>₹9,999</>, original: <>₹14,999</>, discountPct: 33, bestSeller: true,
  },
  {
    id: "theme-g-karl-cocomelon-rainbow-arch",
    name: "Karl Cocomelon Rainbow Balloon Arch",
    description: "A colourful outdoor Cocomelon arch with a personalised 'Happy Birthday KARL' watermelon-sky backdrop, a rainbow organic balloon arch in green, yellow, orange, red & sky-blue, watermelon Cocomelon face cut-outs, a school bus prop and a life-size JJ standee — styled exactly like the photo.",
    image: themeG2.url,
    includes: ["Personalised Cocomelon watermelon backdrop", "Rainbow (green/yellow/orange/red/blue) organic balloon arch", "Watermelon Cocomelon face cut-outs + school bus prop", "Life-size JJ standee + outdoor setup"],
    rating: 4.8, reviews: 388, offer: <>₹8,499</>, original: <>₹12,999</>, discountPct: 35,
  },
  {
    id: "theme-g-matias-boss-baby-blue-white-arch",
    name: "Matias Boss Baby Blue & White Chiara Arch",
    description: "A classy Boss Baby decor with a tall white chiara backdrop, personalised 'BOSS BABY MATIAS' cut-out logo, blue-white-black organic balloon garland cascading down one side, life-size Boss Baby standee, tuxedo cake pedestal with black bow-tie and a glowing marquee number '1' — recreated from the reference photo.",
    image: themeG3.url,
    includes: ["White chiara backdrop + 'Boss Baby NAME' cut-out logo", "Blue, white & black organic balloon garland", "Life-size Boss Baby standee + tuxedo cake pedestal", "Marquee number '1' light + venue setup"],
    rating: 4.9, reviews: 446, offer: <>₹4,499</>, original: <>₹5,999</>, discountPct: 25, bestSeller: true,
  },
  {
    id: "theme-g-rian-turns-one-jungle-grass-arch",
    name: "Rian Turns One Jungle Grass Outdoor Arch",
    description: "A grand outdoor jungle 1st birthday with a personalised 'RIAN TURNS ONE' backdrop, central green grass wall with 'Happy Birthday' neon, a lush organic balloon arch in peach, sage, ivory & chrome-gold, giraffe & bunny cut-out standees, squirrel prop and a glowing marquee number '1' on grass — exactly like the picture.",
    image: themeG4.url,
    includes: ["Personalised 'NAME Turns One' backdrop + grass wall", "'Happy Birthday' neon centrepiece", "Peach, sage, ivory & chrome-gold organic balloon arch", "Giraffe, bunny & squirrel cut-outs + marquee '1' light"],
    rating: 4.9, reviews: 617, offer: <>₹14,999</>, original: <>₹19,999</>, discountPct: 25, bestSeller: true,
  },
  {
    id: "theme-g-pastel-unicorn-rainbow-4th-arch",
    name: "Pastel Unicorn Rainbow 4th Birthday Arch",
    description: "A dreamy pastel unicorn arch with a mint-green round backdrop, 'Happy Birthday' neon sign, a pastel organic balloon ring in pink, lilac, mint, sky-blue & yellow, a large unicorn foil balloon and a rose-gold number '4' foil column — styled exactly like the reference photo.",
    image: themeG5.url,
    includes: ["Mint round backdrop + 'Happy Birthday' neon", "Pastel pink/lilac/mint/blue/yellow balloon ring", "Large unicorn foil balloon", "Rose-gold number '4' foil column + setup"],
    rating: 4.8, reviews: 298, offer: <>₹2,999</>, original: <>₹4,499</>, discountPct: 33,
  },
  {
    id: "theme-g-natan-jahdiel-boss-baby-blue-gold",
    name: "Natan Jahdiel Boss Baby Blue & Gold Arch",
    description: "A stylish Boss Baby setup with a personalised sky-blue 'NATAN JAHDIEL' backdrop featuring milk-bottle, tie & moustache motifs, a metallic blue, chrome-gold, white & clear organic balloon arch, life-size Boss Baby standee and a tuxedo cake pedestal with black bow-tie — exactly like the picture.",
    image: themeG6.url,
    includes: ["Personalised Boss Baby 'NAME' blue backdrop", "Metallic blue, gold, white & clear balloon arch", "Life-size Boss Baby standee", "Tuxedo cake pedestal + venue setup"],
    rating: 4.8, reviews: 341, offer: <>₹4,499</>, original: <>₹5,999</>, discountPct: 25,
  },
  {
    id: "theme-g-raelynn-unicorn-pastel-restaurant",
    name: "Raelynn Pastel Unicorn 1st Restaurant Arch",
    description: "A charming pastel unicorn 1st birthday restaurant decor with a lilac chiara backdrop personalised 'Happy First Birthday NAME', a lush pastel & chrome-gold organic balloon arch with flower clusters, a large unicorn cut-out standee and a giant clear bubble balloon — recreated from the photo.",
    image: themeG7.url,
    includes: ["Lilac chiara backdrop personalised 'Happy First Birthday NAME'", "Pastel + chrome-gold organic balloon arch with flowers", "Large unicorn cut-out standee", "Giant bubble balloon + restaurant setup"],
    rating: 4.9, reviews: 402, offer: <>₹4,499</>, original: <>₹5,999</>, discountPct: 25, bestSeller: true,
  },
  {
    id: "theme-g-happy-birthday-rosegold-room-simple",
    name: "Happy Birthday Rose-Gold Simple Room Decor",
    description: "A simple, budget-friendly room decor with a rose-gold 'HAPPY BIRTHDAY' foil banner on a yellow wall, pastel pink & white flower balloon clusters on the sides, ceiling helium balloons and small balloon bouquets on the sofa & table — exactly like the reference photo.",
    image: themeG8.url,
    includes: ["Rose-gold 'Happy Birthday' foil banner", "Pastel pink & white flower balloon clusters", "Ceiling helium balloons", "Sofa & table balloon accents"],
    rating: 4.7, reviews: 224, offer: <>₹1,499</>, original: <>₹2,499</>, discountPct: 40,
  },
  {
    id: "theme-g-anfa-frozen-elsa-twin-chiara",
    name: "Anfa Frozen Elsa Twin Chiara Arch",
    description: "A magical Frozen twin-chiara birthday setup with a personalised 'Happy Birthday ANFA' Anna & Elsa backdrop, a purple, lavender, white & silver organic balloon garland flowing across both arches, three Frozen character standees (Anna, Elsa, Elsa in blue gown), an Olaf-wrapped pedestal, personalised 'ANFA' name light and a marquee number light — recreated from the photo.",
    image: themeG9.url,
    includes: ["Twin chiara personalised Anna & Elsa backdrop", "Purple, lavender, white & silver organic balloon garland", "3 Frozen character standees + Olaf cake pedestal", "Personalised 'NAME' light + marquee number light"],
    rating: 4.9, reviews: 528, offer: <>₹9,999</>, original: <>₹14,999</>, discountPct: 33, bestSeller: true,
  },
  {
    id: "theme-g-mudita-frozen-ceiling-blue-white-room",
    name: "Mudita Frozen Ceiling Blue & White Room Decor",
    description: "A cheerful room decor with a blue & white ceiling balloon canopy with hanging ribbons, personalised gold 'HAPPY BIRTHDAY MUDITA' foil letters, twin balloon pillars with pink & blue heart foils, a unicorn foil balloon, an Elsa cut-out and a red rose-petal cake table — exactly like the picture.",
    image: themeG10.url,
    includes: ["Blue & white ceiling balloon canopy with ribbons", "Personalised gold 'HAPPY BIRTHDAY NAME' foils", "Twin balloon pillars + heart foils + unicorn balloon", "Elsa cut-out + rose-petal cake table"],
    rating: 4.8, reviews: 271, offer: <>₹1,999</>, original: <>₹2,999</>, discountPct: 33,
  },
];

const NEW_THEME_CARDS_F = [
  {
    id: "theme-f-jungle-safari-restaurant-arch",
    name: "Jungle Safari Restaurant Balloon Arch",
    description: "A cheerful jungle safari themed restaurant arch with gold, ivory, sage-green & white organic balloon columns, a glowing 'Happy Birthday' neon centre, and four animal foil balloons — lion, tiger, monkey, zebra & cow — perched on top of balloon pillars, exactly like the picture.",
    image: themeF1.url,
    includes: ["Gold, ivory, sage-green & white organic balloon arch", "'Happy Birthday' neon centrepiece", "Animal foils: lion, tiger, monkey, zebra, cow", "Four balloon pillars + venue setup"],
    rating: 4.8, reviews: 274, offer: <>₹3,299</>, original: <>₹4,999</>, discountPct: 34,
  },
  {
    id: "theme-f-frozen-elsa-5th-banquet-arch",
    name: "Frozen Elsa 5th Birthday Banquet Arch",
    description: "A magical Frozen themed banquet decor with a round 'Happy Birthday' Elsa backdrop, blue-purple-silver-white organic balloon arch, twin Anna & Elsa cut-out pillars, three Frozen character pedestals (Elsa, Anna, Olaf) and a glowing marquee number '5' — recreated exactly like the picture.",
    image: themeF2.url,
    includes: ["Round personalised Elsa 'Happy Birthday' backdrop", "Blue, purple, silver & white organic balloon arch", "Twin Anna & Elsa cut-out balloon pillars", "3 Frozen character pedestals + marquee number 5"],
    rating: 4.9, reviews: 421, offer: <>₹6,499</>, original: <>₹7,999</>, discountPct: 19, bestSeller: true,
  },
  {
    id: "theme-f-bossbaby-adith-blue-white-stage",
    name: "Boss Baby Adith Blue & White Stage Backdrop",
    description: "A stylish Boss Baby stage decor with personalised 'Happy Birthday NAME' Boss Baby character backdrop, full blue-white organic balloon frame around it, a life-size Boss Baby standee and a decorated cake pedestal — straight from the photo.",
    image: themeF3.url,
    includes: ["Personalised 'Happy Birthday NAME' Boss Baby backdrop", "Blue & white organic balloon frame around backdrop", "Life-size Boss Baby standee", "Decorated cake pedestal + venue setup"],
    rating: 4.8, reviews: 356, offer: <>₹6,499</>, original: <>₹7,999</>, discountPct: 19, bestSeller: true,
  },
  {
    id: "theme-f-bossbaby-moiz-black-white-round",
    name: "Boss Baby Moiz Black & White Round Arch",
    description: "A chic monochrome Boss Baby decor with a round white 'BOSS BABY NAME' backdrop, black-white-silver-chrome & clear confetti organic balloon garland, life-size Boss Baby cut-out, geometric cake pedestal and a glowing marquee number '1' on a mini balloon base.",
    image: themeF4.url,
    includes: ["Round white 'BOSS BABY NAME' personalised backdrop", "Black, white, silver-chrome & clear confetti garland", "Life-size Boss Baby cut-out + gold geo pedestal", "Marquee number 1 on mini balloon base"],
    rating: 4.9, reviews: 389, offer: <>₹4,999</>, original: <>₹6,999</>, discountPct: 29, bestSeller: true,
  },
  {
    id: "theme-f-bossbaby-alyan-twin-blue-silver",
    name: "Boss Baby Alyan Twin Arch Blue & Silver Grand",
    description: "A premium Boss Baby twin arch decor with personalised 'ALYAN BOSS BABY' + 'Happy Birthday' neon chiara backdrops, blue-silver-chrome-white organic balloon arches, Boss Baby cut-outs and three tie-print pedestals for the cake and props — recreated exactly like the picture.",
    image: themeF5.url,
    includes: ["Personalised twin 'BOSS BABY NAME' + neon chiara backdrops", "Blue, silver-chrome & white organic balloon arches", "Boss Baby cut-outs on both sides", "Three tie-print pedestals for cake & props"],
    rating: 4.9, reviews: 512, offer: <>₹8,999</>, original: <>₹12,999</>, discountPct: 31, bestSeller: true,
  },
  {
    id: "theme-f-baby-in-bloom-butterfly-double-arch",
    name: "'Baby in Bloom' Butterfly Double Arch Grand Decor",
    description: "A luxurious 'Baby in Bloom' butterfly themed decor with personalised twin pink chiara backdrops, dense pink-purple-magenta-rose gold organic balloon arches with fresh flowers, two giant 3D butterfly wing props, hand-painted butterfly art and two draped pedestals — exactly like the picture.",
    image: themeF6.url,
    includes: ["Personalised twin pink 'Baby in Bloom' chiara backdrops", "Pink, purple, magenta & rose-gold organic arches with flowers", "Two giant 3D butterfly wing props", "Hand-painted butterfly art + two draped pedestals"],
    rating: 4.9, reviews: 587, offer: <>₹9,999</>, original: <>₹14,999</>, discountPct: 33, bestSeller: true,
  },
  {
    id: "theme-f-butterfly-esha-crown-pastel-arch",
    name: "Butterfly 'Esha' Crown Pastel Arch Decor",
    description: "A dreamy butterfly themed decor with personalised 'Happy Birthday NAME' floral crown-butterfly backdrop, pastel pink, peach, purple, blue & white organic balloon arch, three large 3D butterfly cut-outs and a sequin-draped gold cake stand — straight from the photo.",
    image: themeF7.url,
    includes: ["Personalised 'Happy Birthday NAME' crown-butterfly backdrop", "Pastel pink, peach, purple, blue & white organic arch", "Three large 3D butterfly cut-outs", "Sequin-draped cake table + gold cake stand"],
    rating: 4.8, reviews: 342, offer: <>₹4,499</>, original: <>₹5,999</>, discountPct: 25,
  },
  {
    id: "theme-f-butterfly-aarvi-princess-purple-ring",
    name: "Butterfly 'Aarvi' Princess Purple Ring Arch",
    description: "A cute butterfly & princess themed decor with personalised round 'Happy Birthday NAME' floral butterfly backdrop, pastel pink, lilac & purple organic ring balloon arch, butterfly stickers, Sofia & Ariel princess standees and a purple balloon floor scatter — exactly like the picture.",
    image: themeF8.url,
    includes: ["Personalised round butterfly floral 'NAME' backdrop", "Pink, lilac & purple organic ring balloon arch", "Sofia & Ariel princess standees + butterfly stickers", "Purple balloon floor scatter"],
    rating: 4.8, reviews: 298, offer: <>₹4,499</>, original: <>₹5,999</>, discountPct: 25,
  },
  {
    id: "theme-f-butterfly-baby-purple-grand-arch",
    name: "Butterfly Baby Purple Grand Photo Arch",
    description: "A grand butterfly themed banquet decor with personalised 'Happy Birthday' pink-purple chiara backdrop with baby photo, pink-purple-gold-chrome & white organic balloon arch with vines, two massive lilac butterfly wing props on either side and a butterfly-print floor mat — recreated exactly like the picture.",
    image: themeF9.url,
    includes: ["Personalised 'Happy Birthday' backdrop with baby photo", "Pink, purple, gold-chrome & white organic arch with vines", "Two massive lilac butterfly wing side props", "Butterfly print floor mat + venue setup"],
    rating: 4.9, reviews: 476, offer: <>₹11,999</>, original: <>₹17,999</>, discountPct: 33, bestSeller: true,
  },
  {
    id: "theme-f-amelia-pastel-butterfly-marquee-arch",
    name: "'Amelia' Pastel Butterfly Marquee Arch Decor",
    description: "A whimsical pastel butterfly decor with personalised 'Happy Birthday NAME' neon chiara backdrop, pink-lilac-peach-silver chrome organic balloon arch with pink butterfly props, a giant glowing yellow butterfly LED prop and a marquee number '1' — straight from the photo.",
    image: themeF10.url,
    includes: ["Personalised 'Happy Birthday NAME' neon chiara backdrop", "Pink, lilac, peach & silver-chrome organic balloon arch", "Giant glowing yellow butterfly LED prop", "Marquee number 1 + pink butterfly cut-outs"],
    rating: 4.9, reviews: 398, offer: <>₹5,999</>, original: <>₹7,999</>, discountPct: 25, bestSeller: true,
  },
];

const NEW_THEME_CARDS_E = [
  {
    id: "theme-e-shrihan-jungle-safari-one-grand",
    name: "Shrihan Jungle Safari Grand 1st Birthday Stage",
    description: "A grand jungle safari themed stage with twin green-grass arch backdrops featuring personalised 'NAME Turns ONE' panels, sage-green, ivory & gold organic balloon arches, life-size lion, giraffe, tiger, zebra & elephant cut-outs, marquee number '1' and a personalised 'NAME' marquee name light — recreated exactly like the picture.",
    image: themeE1.url,
    includes: ["Twin grass-arch personalised 'NAME Turns ONE' backdrops", "Sage green, ivory & gold organic balloon arches", "Lion, giraffe, tiger, zebra & elephant cut-outs", "Marquee number 1 + personalised NAME marquee lights"],
    rating: 4.9, reviews: 542, offer: <>₹21,999</>, original: <>₹29,999</>, discountPct: 27, bestSeller: true,
  },
  {
    id: "theme-e-parnika-butterfly-pink-purple-one",
    name: "Parnika Butterfly Pink & Purple 1st Birthday Arch",
    description: "A dreamy butterfly themed decor with personalised 'NAME is One' pink chiara backdrop, pink-purple-white-chrome organic balloon arch, multiple 3D butterfly cut-outs, 'Happy Birthday' neon, silver star foil, butterfly print pedestal and marquee number '1' on a balloon pillar.",
    image: themeE2.url,
    includes: ["Personalised 'NAME is One' pink chiara backdrop", "Pink, purple, white & chrome organic balloon arch", "3D butterfly cut-outs + 'Happy Birthday' neon", "Butterfly print pedestal + marquee number 1 pillar"],
    rating: 4.8, reviews: 387, offer: <>₹4,999</>, original: <>₹6,499</>, discountPct: 23, bestSeller: true,
  },
  {
    id: "theme-e-bossbaby-daiwik-blue-ring",
    name: "Boss Baby Daiwik Blue & Silver Ring Arch",
    description: "A stylish Boss Baby decor with personalised '1st Happy Birthday NAME' Boss Baby backdrop, blue-white-black-chrome-silver organic ring arch, three Boss Baby cut-outs, star & '1' foils and a marquee number '1' on a balloon pillar — straight from the photo.",
    image: themeE3.url,
    includes: ["Personalised Boss Baby 1st birthday backdrop", "Blue, white, black & chrome organic ring arch", "Three Boss Baby cut-outs + star & 1 foils", "Marquee number 1 on balloon pillar"],
    rating: 4.9, reviews: 412, offer: <>₹4,499</>, original: <>₹5,999</>, discountPct: 25, bestSeller: true,
  },
  {
    id: "theme-e-yuwaan-too-wild-2-handle-jungle",
    name: "Yuwaan 'Too Wild 2 Handle' Jungle Twin Arch",
    description: "A premium jungle safari decor with personalised twin chiara backdrop ('Happy Birthday NAME' + 'Too Wild 2 Handle'), sage-green, mustard-yellow, ivory & olive organic balloon arches, lion cut-out & lion plush, two pedestals and a glowing marquee number '2' — recreated exactly like the picture.",
    image: themeE4.url,
    includes: ["Personalised twin chiara 'Too Wild 2 Handle' backdrop", "Sage green, mustard, ivory & olive organic arches", "Lion cut-out + cute lion plush prop", "Marquee number 2 + 2 decorated pedestals"],
    rating: 4.9, reviews: 498, offer: <>₹9,999</>, original: <>₹14,999</>, discountPct: 33, bestSeller: true,
  },
  {
    id: "theme-e-amayra-butterfly-pink-purple-2nd",
    name: "Amayra Butterfly Pink & Purple 2nd Birthday Arch",
    description: "A whimsical butterfly themed outdoor decor with personalised round 'NAME' watercolour backdrop, pastel pink, lavender, magenta & white organic balloon arch, multiple 3D pink & gold butterfly cut-outs, a flower pedestal and marquee number '2' — exactly like the picture.",
    image: themeE5.url,
    includes: ["Personalised round 'NAME' butterfly backdrop", "Pastel pink, lavender & white organic balloon arch", "3D pink & gold butterfly cut-outs", "Flower pedestal + marquee number 2"],
    rating: 4.8, reviews: 356, offer: <>₹4,499</>, original: <>₹5,999</>, discountPct: 25,
  },
  {
    id: "theme-e-dhriti-cocomelon-rainbow-arch",
    name: "Dhriti Cocomelon Rainbow Square Arch",
    description: "A bright Cocomelon themed decor with personalised 'Happy Birthday NAME' Cocomelon rainbow backdrop, square balloon arch in pastel green, blue, purple, yellow, orange, peach & gold chrome and an LED light marquee '1' — straight from the photo.",
    image: themeE6.url,
    includes: ["Personalised Cocomelon rainbow backdrop", "Square balloon arch (pastel + chrome gold)", "Cocomelon character cut-outs on backdrop", "Marquee number 1 LED light"],
    rating: 4.8, reviews: 289, offer: <>₹4,699</>, original: <>₹5,999</>, discountPct: 22,
  },
  {
    id: "theme-e-alaiia-berry-strawberry-1st-grand",
    name: "Alaiia's Berry 1st Birthday Grand Strawberry Decor",
    description: "A premium 'Berry First Birthday' strawberry themed decor with personalised twin pink chiara arched backdrop ('NAME's BERRY 1st Birthday'), red & pastel-pink organic balloon garlands, large strawberry cut-outs, a white picket fence, strawberry print pedestal and flower basket — recreated exactly like the picture.",
    image: themeE7.url,
    includes: ["Personalised twin 'BERRY 1st Birthday' chiara backdrop", "Red & pastel pink organic balloon garlands", "Large strawberry cut-outs + white picket fence", "Strawberry print pedestal + flower basket"],
    rating: 4.9, reviews: 612, offer: <>₹17,999</>, original: <>₹24,999</>, discountPct: 28, bestSeller: true,
  },
  {
    id: "theme-e-ira-butterfly-floral-purple-one",
    name: "Ira Butterfly & Floral Purple 1st Birthday Arch",
    description: "A magical butterfly & floral decor with personalised round 'NAME Turns ONE' purple floral backdrop, pastel pink, gold chrome & white organic balloon arch, multiple butterfly cut-outs, a large purple butterfly foil and a marquee number '1' on the side — exactly like the picture.",
    image: themeE8.url,
    includes: ["Personalised round 'NAME Turns ONE' floral backdrop", "Pastel pink, gold chrome & white organic arch", "Multiple butterfly cut-outs + large butterfly foil", "Marquee number 1 + 'Happy Birthday' foil"],
    rating: 4.9, reviews: 478, offer: <>₹4,499</>, original: <>₹5,999</>, discountPct: 25, bestSeller: true,
  },
  {
    id: "theme-e-hanvika-butterfly-pink-purple-arch-grand",
    name: "Hanvika Butterfly Pink-Purple Grand 1st Arch Setup",
    description: "A luxurious butterfly themed decor with personalised 'NAME's 1st Birthday' chiara backdrop, full pink-lavender-peach organic balloon arch with cherry-blossom branches, gold & purple butterflies, two beige draped pedestals, a large white butterfly prop and marquee number '1' — recreated exactly like the picture.",
    image: themeE9.url,
    includes: ["Personalised 'NAME's 1st Birthday' chiara backdrop", "Pink, lavender & peach organic arch with blossoms", "Gold & purple butterfly cut-outs + white butterfly prop", "Two beige pedestals + marquee number 1"],
    rating: 4.9, reviews: 534, offer: <>₹11,999</>, original: <>₹17,999</>, discountPct: 33, bestSeller: true,
  },
  {
    id: "theme-e-fairy-princess-mahek-manya-9th-stage",
    name: "Fairy & Princess Twin 9th Birthday Stage Decor",
    description: "A magical fairy & princess themed stage with personalised twin pink-lavender chiara backdrops ('NAME & NAME Turns 9'), pink-lilac-gold organic balloon arches, two glowing butterfly LED wings, Cinderella & Aurora princess standees, flower bouquet centre and fairy cut-outs — exactly like the picture.",
    image: themeE10.url,
    includes: ["Personalised twin 'NAME & NAME Turns 9' chiara backdrops", "Pink, lilac & gold organic balloon arches", "Two glowing butterfly LED wings", "Cinderella & Aurora princess standees + flower bouquet"],
    rating: 4.9, reviews: 467, offer: <>₹14,999</>, original: <>₹19,999</>, discountPct: 25, bestSeller: true,
  },
];



const NEW_THEME_CARDS_D = [
  {
    id: "theme-d-bossbaby-blue-white-arch-stage",
    name: "Boss Baby Blue & White Stage Arch Decor",
    description: "A grand Boss Baby themed stage decor with a tall blue & white organic balloon arch, 'Happy Birthday' neon centrepiece, four life-size Boss Baby cut-outs on balloon pillars, marquee number '1' and a green carpet runway with a gold cake stand — recreated exactly like the picture.",
    image: themeD1.url,
    includes: ["Tall blue & white organic balloon arch", "'Happy Birthday' neon centrepiece", "4 Boss Baby cut-outs on balloon pillars", "Marquee number 1 + gold cake stand on green runway"],
    rating: 4.9, reviews: 412, offer: <>₹4,999</>, original: <>₹6,499</>, discountPct: 23, bestSeller: true,
  },
  {
    id: "theme-d-vedanth-wild-one-jungle-grand",
    name: "Vedanth's Wild One Jungle Safari Grand Setup",
    description: "A premium jungle safari 'Wild One' decor with personalised 'NAME's Wild ONE' triple chiara backdrop, twin yellow-green-ivory balloon arches, lion / zebra / tiger / giraffe / elephant cut-outs, marquee number '1', personalised 'VEDANTH' marquee name lights and three decorated pedestals on a red stage.",
    image: themeD2.url,
    includes: ["Personalised triple chiara 'Wild One' backdrop", "Twin yellow, green & ivory organic balloon arches", "Lion, tiger, zebra, giraffe & elephant cut-outs", "Marquee number 1 + personalised NAME marquee lights + 3 pedestals"],
    rating: 4.9, reviews: 678, offer: <>₹21,999</>, original: <>₹29,999</>, discountPct: 27, bestSeller: true,
  },
  {
    id: "theme-d-tom-jerry-adhyaa-turns-2",
    name: "Tom & Jerry Adhyaa Turns 2 Pastel Arch",
    description: "A bright Tom & Jerry themed decor with personalised 'NAME Turns 2' twin chiara backdrop, full pastel multi-colour organic balloon arch, multiple Tom & Jerry cut-outs on either side and three grey draped pedestals — exactly like the picture.",
    image: themeD3.url,
    includes: ["Personalised 'NAME Turns 2' twin chiara backdrop", "Pastel multi-colour organic balloon arch", "Tom & Jerry cut-outs + character pillars on both sides", "Three draped pedestals for cake & props"],
    rating: 4.8, reviews: 489, offer: <>₹14,999</>, original: <>₹19,999</>, discountPct: 25, bestSeller: true,
  },
  {
    id: "theme-d-pastel-baby-5th-glitter-curtain",
    name: "Pastel 'Baby' 5th Birthday Glitter Curtain Decor",
    description: "A dreamy pastel birthday decor with silver glitter fringe curtain, 'Happy Birthday' neon, pink-peach-purple-burgundy-white organic balloon garland with moon & star foils, gold 'BABY' foil letters, pastel 'BABY' balloon blocks and a marquee number '5'.",
    image: themeD4.url,
    includes: ["Silver glitter fringe curtain + 'Happy Birthday' neon", "Pink, peach, purple & burgundy organic garland", "Gold moon, star & 'BABY' foil letters", "Pastel 'BABY' balloon blocks + marquee number 5"],
    rating: 4.8, reviews: 298, offer: <>₹2,999</>, original: <>₹4,499</>, discountPct: 33,
  },
  {
    id: "theme-d-bossbaby-kairo-pillar-prince",
    name: "Boss Baby Kairo 'Prince' 1st Birthday Pillar Decor",
    description: "A stylish Boss Baby corner decor with personalised 'BOSS BABY NAME' backdrop, tall organic balloon pillar in pastel blue, silver chrome, black, white & metallic blue, Boss Baby cut-out, blue '1' crown foil and 'ONE' balloon blocks — straight from the photo.",
    image: themeD5.url,
    includes: ["Personalised 'BOSS BABY NAME' backdrop", "Tall pastel blue, chrome, black & white balloon pillar", "Life-size Boss Baby cut-out", "Blue '1' crown foil + 'ONE' balloon blocks"],
    rating: 4.9, reviews: 354, offer: <>₹3,999</>, original: <>₹5,499</>, discountPct: 27, bestSeller: true,
  },
  {
    id: "theme-d-cars-vedaansh-mcqueen-6th-arch",
    name: "Cars McQueen Vedaansh 6th Birthday Arch",
    description: "A racing themed Cars decor with personalised 'Happy Birthday NAME 6' arched chiara backdrop, red-blue-black-white-checker organic balloon arch with chrome checker foils, McQueen & tyre foils, marquee number '6' and a checker-print cake pedestal.",
    image: themeD6.url,
    includes: ["Personalised arched Cars chiara backdrop", "Red, blue, black, white & checker organic garland", "McQueen + tyre foil balloons + checker foils", "Marquee number 6 + checker cake pedestal"],
    rating: 4.9, reviews: 421, offer: <>₹4,499</>, original: <>₹5,999</>, discountPct: 25, bestSeller: true,
  },
  {
    id: "theme-d-butterfly-twin-tharika-thanvika-grand",
    name: "Butterfly Twin 'Tharika & Thanvika' Grand Stage",
    description: "A luxury twin-baby butterfly themed stage with two personalised pink-purple chiara backdrops, silver sequin shimmer wall, 'Happy Birthday' neon, glowing butterfly props, pink & purple organic balloon arches, two marquee name lights, butterfly print pedestals and 'B' baby blocks.",
    image: themeD7.url,
    includes: ["Twin personalised pink-purple chiara backdrops", "Silver sequin shimmer wall + 'Happy Birthday' neon", "Pink & purple organic balloon arches + glowing butterflies", "Two marquee name lights + butterfly pedestals + baby blocks"],
    rating: 4.9, reviews: 587, offer: <>₹29,999</>, original: <>₹39,999</>, discountPct: 25, bestSeller: true,
  },
  {
    id: "theme-d-peppa-pig-pink-pastel-room",
    name: "Peppa Pig Pink Pastel Room Birthday Decor",
    description: "A cute Peppa Pig home decor with silver fringe curtain backdrop, pink 'HAPPY BIRTHDAY' foil letters, pastel pink-blue-yellow balloon arch & table garland, magenta star foils, gold & magenta heart foils and two Peppa Pig balloon stands on either side — exactly like the picture.",
    image: themeD8.url,
    includes: ["Silver fringe curtain + pink 'HAPPY BIRTHDAY' foil", "Pastel pink, blue & yellow balloon arch + table garland", "Magenta star foils + gold & magenta heart foils", "Two Peppa Pig balloon stands on side pillars"],
    rating: 4.7, reviews: 234, offer: <>₹2,199</>, original: <>₹3,499</>, discountPct: 37,
  },
  {
    id: "theme-d-superhero-avengers-3rd-arch",
    name: "Superhero Avengers 3rd Birthday Ring Arch",
    description: "A vibrant Avengers decor with multi-colour superhero organic ring arch in red, blue, yellow, green, black & gold, Captain America shield foil top, Spider-Man / Batman / Iron Man / Hulk foils, comic 'POW! BAMM! WHAM!' cut-outs, 'Happy Birthday' neon and a marquee number '3'.",
    image: themeD9.url,
    includes: ["Multi-colour superhero ring balloon arch", "Captain America shield + character foils (Spider-Man, Iron Man, Batman, Hulk)", "Comic POW / BAMM / WHAM cut-outs", "'Happy Birthday' neon + marquee number 3"],
    rating: 4.9, reviews: 446, offer: <>₹4,499</>, original: <>₹5,999</>, discountPct: 25, bestSeller: true,
  },
  {
    id: "theme-d-princess-arzoyi-rapunzel-3rd",
    name: "Princess Arzoyi Rapunzel 3rd Birthday Round Arch",
    description: "A magical Rapunzel princess decor with personalised 'PRINCESS NAME TURNS 3' round chiara backdrop, pink-magenta-purple-peach organic balloon ring arch with Rapunzel sticker cut-outs, two Rapunzel standees, a flower castle prop and a glowing marquee number '3'.",
    image: themeD10.url,
    includes: ["Personalised 'PRINCESS NAME TURNS 3' round chiara backdrop", "Pink, magenta, purple & peach organic ring arch", "Two Rapunzel standees + flower castle prop", "Glowing marquee number 3 + Rapunzel sticker cut-outs"],
    rating: 4.8, reviews: 312, offer: <>₹4,499</>, original: <>₹5,999</>, discountPct: 25,
  },
];

const NEW_THEME_CARDS_C = [
  {
    id: "theme-c-cocomelon-restaurant-grand-arch",
    name: "Cocomelon Restaurant Grand 1st Birthday Arch",
    description: "A grand Cocomelon themed restaurant decor with a tall organic balloon arch in blue, green, yellow & chrome, custom Cocomelon sky backdrop with rainbow & character cut-outs, two 'Happy Birthday' neons, marquee number '1', personalised 'BABY' balloon blocks and decorated cake & cocktail tables.",
    image: themeC1.url,
    includes: ["Grand organic balloon arch (blue, green, yellow, chrome)", "Custom Cocomelon sky + rainbow chiara backdrop", "Two 'Happy Birthday' neons + marquee number 1", "'BABY' balloon blocks + decorated cake & cocktail tables"],
    rating: 4.9, reviews: 564, offer: <>₹12,999</>, original: <>₹19,999</>, discountPct: 35, bestSeller: true,
  },
  {
    id: "theme-c-aryav-13th-outdoor-ring-arch",
    name: "Aryav 13th Outdoor Pool-Side Ring Arch",
    description: "A bold outdoor poolside ring arch in red, blue, black, grey & white organic balloons with 'Happy Birthday' neon at the centre and personalised marquee 'ARYAV 13' name lights — perfect for lawn and rooftop teen birthdays.",
    image: themeC2.url,
    includes: ["Outdoor red, blue, black, grey & white ring arch", "'Happy Birthday' neon inside the ring", "Personalised 'NAME + 13' marquee letter lights", "Draped cocktail table + setup at venue"],
    rating: 4.8, reviews: 312, offer: <>₹4,999</>, original: <>₹7,999</>, discountPct: 38, bestSeller: true,
  },
  {
    id: "theme-c-jungle-1st-home-green-gold",
    name: "Jungle Safari 1st Birthday Home Decor",
    description: "A cute jungle themed home decor with green foil fringe curtain, 'Happy Birthday' bunting, gold foil number '1', green-gold balloon arch and animal foils — tiger, monkey, giraffe, zebra & cow — exactly like the picture.",
    image: themeC3.url,
    includes: ["Green, light-green & gold balloon arch", "Green foil fringe curtain + 'Happy Birthday' bunting", "Animal foil set: tiger, monkey, giraffe, zebra, cow", "Gold foil number 1 balloon"],
    rating: 4.7, reviews: 234, offer: <>₹1,999</>, original: <>₹2,999</>, discountPct: 33,
  },
  {
    id: "theme-c-ovee-animal-7th-pastel-arch",
    name: "Ovee Animal Theme 7th Birthday Pastel Arch",
    description: "A pretty pastel jungle arch in green, white, gold & peach over a personalised 'Happy Birthday OVEE' chiara backdrop with baby animal art, palm leaves, marquee number '7' and a cake pedestal.",
    image: themeC4.url,
    includes: ["Pastel green, white, gold & peach organic balloon arch", "Personalised 'Happy Birthday NAME' chiara backdrop", "Palm leaf accents + baby animal artwork", "Marquee number 7 + decorated cake pedestal"],
    rating: 4.8, reviews: 276, offer: <>₹4,499</>, original: <>₹5,999</>, discountPct: 25,
  },
  {
    id: "theme-c-unicorn-rihaviha-twin-name",
    name: "Unicorn Riha & Viha Twin Name 1st Birthday",
    description: "A bright twin-baby unicorn decor with multi-colour pastel balloon arch, gold foil 'RIHA + VIHA' names, pink 'Happy Birthday' bunting, unicorn foils, magenta star foils and two matching balloon pillars — recreated as in the picture.",
    image: themeC5.url,
    includes: ["Pastel multi-colour balloon arch", "Two gold foil personalised names", "Pink 'Happy Birthday' bunting + unicorn foils", "Two balloon pillars with star foils"],
    rating: 4.8, reviews: 252, offer: <>₹1,999</>, original: <>₹2,999</>, discountPct: 33,
  },
  {
    id: "theme-c-bossbaby-shivansh-1st-curtain",
    name: "Boss Baby Shivansh 1st Birthday Curtain Decor",
    description: "A Boss Baby home decor with teal curtain backdrop, blue 'happy birthday' foil letters, two Boss Baby & star foils, blue, white & black balloon arch, decorated cake table and gold 'SHIVANSH + 1' name foils on the floor.",
    image: themeC6.url,
    includes: ["Blue, white & black organic balloon arch", "Teal curtain backdrop + 'happy birthday' foil", "Boss Baby + blue star foils", "Personalised name & number 1 gold foils + cake table"],
    rating: 4.8, reviews: 268, offer: <>₹2,299</>, original: <>₹3,499</>, discountPct: 34,
  },
  {
    id: "theme-c-cars-shivansh-mcqueen-decor",
    name: "Cars McQueen Shivansh Birthday Curtain Decor",
    description: "A Disney Cars themed entrance decor with gold foil fringe curtain, 'Happy Birthday' neon, silver 'SHIVANSH' name foil, McQueen foil balloons, red star foils, gold number '1' and red, gold, black & white balloon pillars on either side.",
    image: themeC7.url,
    includes: ["Gold foil fringe curtain backdrop", "'Happy Birthday' neon + silver name foil", "McQueen foils + red star foils + gold number 1", "Two side balloon pillars in red, black, gold & white"],
    rating: 4.8, reviews: 289, offer: <>₹2,499</>, original: <>₹3,499</>, discountPct: 29,
  },
  {
    id: "theme-c-bossbaby-silver-3rd-fringe",
    name: "Boss Baby Silver 3rd Birthday Fringe Arch",
    description: "A premium Boss Baby decor in silver chrome, blue & black with silver fringe curtain, 'Happy Birthday' bunting, multiple Boss Baby & star foils, rose-gold '3' foil and a balloon pillar — straight from the picture.",
    image: themeC8.url,
    includes: ["Silver chrome, blue & black balloon arch", "Silver fringe curtain + 'Happy Birthday' bunting", "Multiple Boss Baby + blue star foils", "Rose-gold number 3 foil + balloon pillar"],
    rating: 4.8, reviews: 244, offer: <>₹1,999</>, original: <>₹2,999</>, discountPct: 33,
  },
  {
    id: "theme-c-frozen-mudita-ceiling-decor",
    name: "Frozen Mudita Ceiling Balloon Surprise",
    description: "A magical Frozen themed home decor with blue & white ceiling balloons & ribbons, 'Happy Birthday MUDITA' gold foil name, two pink & blue heart pillars, unicorn foil, Elsa standee and a rose-petal centre table.",
    image: themeC9.url,
    includes: ["Blue & white ceiling balloons with ribbons", "'Happy Birthday + Name' gold foil letters", "Two heart-foil balloon pillars + unicorn foil", "Elsa standee + rose-petal centre table"],
    rating: 4.7, reviews: 213, offer: <>₹1,999</>, original: <>₹2,999</>, discountPct: 33,
  },
  {
    id: "theme-c-mickey-mouse-outdoor-chiara",
    name: "Mickey Mouse Outdoor Chiara Balloon Decor",
    description: "A vibrant Mickey Mouse outdoor decor with white chiara backdrop, 'Happy Birthday' neon, red, yellow, black & white organic balloon garland, two Mickey-shaped balloon pillars, Mickey foil and a white cake pedestal — exactly like the picture.",
    image: themeC10.url,
    includes: ["White chiara backdrop + 'Happy Birthday' neon", "Red, yellow, black & white organic garland", "Two Mickey-shaped balloon pillars + Mickey foil", "White cake pedestal"],
    rating: 4.9, reviews: 341, offer: <>₹3,999</>, original: <>₹5,999</>, discountPct: 33, bestSeller: true,
  },
];

const NEW_THEME_CARDS_B = [
  {
    id: "theme-b-cocomelon-aryaan-rainbow-arch",
    name: "Cocomelon Aryaan Pastel Rainbow 1st Birthday Arch",
    description: "A dreamy Cocomelon themed ring arch with personalised 'Aryaan Turns 1' rainbow photo backdrop, pastel multi-colour balloon arch, Cocomelon character cut-out, marquee number 1 and 'Happy Birthday' neon — exactly like the picture.",
    image: themeB1.url,
    includes: ["Pastel rainbow balloon ring arch", "Personalised photo backdrop with rainbow", "Cocomelon cut-out + marquee number 1 light", "'Happy Birthday' neon + two balloon pillars"],
    rating: 4.9, reviews: 432, offer: <>₹4,199</>, original: <>₹5,999</>, discountPct: 30, bestSeller: true,
  },
  {
    id: "theme-b-blue-silver-chrome-1st-home",
    name: "Blue & Silver Chrome 1st Birthday Home Decor",
    description: "A neat blue, silver and white chrome balloon garland on the wall with gold foil '1', silver fringe curtain, 'Happy Birthday' bunting and two matching balloon pillars with silver stars — a perfect first-birthday home setup.",
    image: themeB2.url,
    includes: ["Blue, silver & white chrome wall balloon garland", "Silver fringe curtain + 'Happy Birthday' bunting", "Gold foil number 1 balloon", "Two chrome balloon pillars with silver star foils"],
    rating: 4.7, reviews: 218, offer: <>₹1,999</>, original: <>₹2,999</>, discountPct: 33,
  },
  {
    id: "theme-b-superhero-nishv-3rd",
    name: "Tiny Hero Big Powers Superhero 3rd Birthday",
    description: "A vibrant superhero themed ring arch with personalised 'Nishv Turns 3 — Level 3 Unlocked' backdrop, multi-colour balloon garland, Captain America, Superman, Hulk & Spider-Man cut-outs, marquee '3' and 'NISHV' name lights with themed pedestals.",
    image: themeB3.url,
    includes: ["Personalised superhero photo backdrop", "Red, blue, yellow & green balloon ring arch", "Four superhero life-size cut-outs", "Marquee number 3 + 'Name' marquee lights + themed pedestals"],
    rating: 4.9, reviews: 389, offer: <>₹4,999</>, original: <>₹6,999</>, discountPct: 29, bestSeller: true,
  },
  {
    id: "theme-b-mermaid-4th-birthday",
    name: "Little Mermaid 'Happy 4th Birthday' Decor",
    description: "A magical mermaid themed wall decor with green sheer curtain, fairy-light backdrop, 'happy birthday' silver foil letters, silver '4' foil, mermaid and seashell cut-outs and a teal, purple, gold & blue chrome balloon arch — straight from under the sea.",
    image: themeB4.url,
    includes: ["Green sheer curtain + fairy-light backdrop", "Teal, purple, gold & blue chrome balloon arch", "Mermaid, seashell & starfish cut-outs", "'happy birthday' silver foil + number 4 foil"],
    rating: 4.8, reviews: 264, offer: <>₹2,499</>, original: <>₹3,499</>, discountPct: 29,
  },
  {
    id: "theme-b-cocomelon-nishwanth-grand-stage",
    name: "Cocomelon Nishwanth Grand 1st Birthday Stage",
    description: "A full Cocomelon grand stage with twin chiara backdrops, gold sequin shimmer wall, multiple Cocomelon character cut-outs, pastel balloon garland, marquee '1' with crown, personalised 'NISHWANTH' marquee name and decorated pedestals — recreated as in the photo.",
    image: themeB5.url,
    includes: ["Twin chiara + gold sequin shimmer backdrop", "Pastel balloon garland with Cocomelon characters", "Marquee number 1 with crown + 'NISHWANTH' name lights", "Personalised Cocomelon pedestals + floral accents"],
    rating: 4.9, reviews: 547, offer: <>₹21,999</>, original: <>₹29,999</>, discountPct: 27, bestSeller: true,
  },
  {
    id: "theme-b-dinosaur-jungle-3rd",
    name: "Dinosaur Jungle 'Happy Birthday' 3rd Decor",
    description: "A wild dinosaur themed home decor with green foil fringe curtain, gold 'Happy Birthday' foil letters, gold '3' foil, green, gold and dark-green balloon garland and four dino foil balloons — perfect for a little dino fan.",
    image: themeB6.url,
    includes: ["Green foil fringe curtain backdrop", "Green, light-green & gold balloon garland", "Gold 'Happy Birthday' + number 3 foil", "Four assorted dinosaur foil balloons"],
    rating: 4.7, reviews: 195, offer: <>₹1,999</>, original: <>₹2,999</>, discountPct: 33,
  },
  {
    id: "theme-b-barbie-bhavya-pink",
    name: "Barbie Bhavya Pink & Gold 1st Birthday Arch",
    description: "A pretty Barbie themed arch in pink, white and gold balloons over a pink fringe curtain with Barbie foils, magenta heart foils, 'Happy Birthday' bunting, personalised 'BHAVYA' gold name foil and gold '1' — exactly like the picture.",
    image: themeB7.url,
    includes: ["Pink, white & gold balloon arch", "Pink fringe curtain + 'Happy Birthday' bunting", "Barbie foil + magenta heart foils", "Personalised 'BHAVYA' name foil + gold number 1"],
    rating: 4.8, reviews: 241, offer: <>₹2,199</>, original: <>₹2,999</>, discountPct: 27,
  },
  {
    id: "theme-b-boss-baby-blue-neon-1st",
    name: "Boss Baby Blue Chrome 1st Birthday Arch",
    description: "A bold Boss Baby ring arch in blue, white and silver chrome balloons over a silver fringe curtain with 'Happy Birthday' neon, Boss Baby & star foils, decorated pedestal and a glowing marquee number 1 — recreated as shown.",
    image: themeB8.url,
    includes: ["Blue, white & silver chrome ring arch", "Silver fringe curtain + 'Happy Birthday' neon", "Boss Baby foils + blue star foils", "Marquee number 1 + decorated gold pedestal"],
    rating: 4.9, reviews: 358, offer: <>₹3,499</>, original: <>₹4,999</>, discountPct: 30, bestSeller: true,
  },
  {
    id: "theme-b-cocomelon-vivan-pastel-grand",
    name: "Cocomelon Vivan Turns One Pastel Grand Decor",
    description: "A luxury Cocomelon pastel rainbow grand stage with gold sequin shimmer panel, custom 'Vivan Turns One' backdrop, big pastel balloon arch, multiple Cocomelon cut-outs, marquee '1' with crown, 'One' neon, 'VIVAN' name lights and a wooden picket fence prop.",
    image: themeB9.url,
    includes: ["Pastel rainbow grand balloon arch", "Gold sequin shimmer + custom 'Turns One' backdrop", "Multiple Cocomelon character cut-outs", "'One' neon + marquee '1' + 'VIVAN' name lights + picket fence"],
    rating: 4.9, reviews: 612, offer: <>₹27,999</>, original: <>₹34,999</>, discountPct: 20, bestSeller: true,
  },
  {
    id: "theme-b-boss-baby-outdoor-deck-arch",
    name: "Boss Baby Outdoor Deck Black & Blue Arch",
    description: "A premium Boss Baby outdoor balloon arch in black, blue chrome and silver over a 'Boss Baby' chiara backdrop with star foils, a tall Boss Baby cut-out and a white pedestal — perfect for outdoor and rooftop celebrations.",
    image: themeB10.url,
    includes: ["Black, blue chrome & silver organic balloon arch", "'Boss Baby' personalised chiara backdrop", "Blue star foils + tall Boss Baby cut-out", "White cylinder pedestal for cake"],
    rating: 4.8, reviews: 297, offer: <>₹3,999</>, original: <>₹5,999</>, discountPct: 33,
  },
];

const NEW_THEME_CARDS = [
  {
    id: "theme-boss-baby-madhulan-luxury",
    name: "Boss Baby Luxury Twin-Arch Birthday Setup",
    description: "A grand Boss Baby themed twin-arch stage decor with black tie cut-outs, 'BOSS' name backdrop, marquee number 1 and name letters, balloon clusters in black, ivory and silver chrome with a 'Happy Birthday' neon — recreated as in the picture.",
    image: themeA1.url,
    includes: ["Twin chiara arches with tie & 'BOSS' name backdrop", "Boss Baby cut-outs + marquee name & number 1", "Black, ivory & silver chrome balloon garland", "'Happy Birthday' neon + decorated cake pedestal"],
    rating: 4.9, reviews: 612, offer: <>₹17,999</>, original: <>₹24,999</>, discountPct: 28, bestSeller: true,
  },
  {
    id: "theme-purple-13th-official-teenager",
    name: "Purple 'Official Teenager' 13th Birthday Arch",
    description: "A vibrant purple, lilac and white balloon garland arch over a silver foil-curtain backdrop with 'Happy Birthday Official Teenager' banner and silver foil '13' — perfect for the big teen reveal.",
    image: themeA2.url,
    includes: ["Purple, lilac & white balloon garland arch", "Silver foil-curtain backdrop", "'Official Teenager' banner + butterfly accents", "Silver foil number '13' with balloon pillars"],
    rating: 4.7, reviews: 286, offer: <>₹1,999</>, original: <>₹2,999</>, discountPct: 33,
  },
  {
    id: "theme-boss-baby-blue-arch-home",
    name: "Boss Baby Blue & Gold Home Arch Setup",
    description: "A classic Boss Baby ring arch decor in sky blue, black, white and gold chrome with two Boss Baby cut-outs, marquee '1', tie-print pedestal and a 'Happy Birthday' neon — ideal first-birthday home setup.",
    image: themeA3.url,
    includes: ["Blue, black, white & gold balloon ring arch", "Two Boss Baby cut-outs + marquee number 1", "Tie-print pedestal + 'Happy Birthday' neon", "White sheer curtain backdrop"],
    rating: 4.8, reviews: 341, offer: <>₹3,999</>, original: <>₹4,999</>, discountPct: 20,
  },
  {
    id: "theme-rudransh-boss-baby-grand",
    name: "Rudransh Boss Baby Grand Stage Decor",
    description: "A premium hall stage Boss Baby setup with gold sequin centre panel, custom 'Rudransh Turns 1' backdrop, three Boss Baby cut-outs, white picket fence, marquee name and a red stage carpet — exactly as in the photo.",
    image: themeA4.url,
    includes: ["Stage with gold sequin + custom 'Turns 1' backdrop", "Three Boss Baby cut-outs + marquee name letters", "White picket fence + red carpet stage", "Blue, white & silver chrome balloon clusters"],
    rating: 4.9, reviews: 524, offer: <>₹21,999</>, original: <>₹29,999</>, discountPct: 27, bestSeller: true,
  },
  {
    id: "theme-fairy-butterfly-blue-mouli",
    name: "Blue Fairy & Butterfly Dreamland 3rd Birthday",
    description: "A whimsical fairy theme decor with arched backdrop, fairy & butterfly cut-outs, heart neon lamp, bobo bubble balloons, baby-blue & white garland and a floral pedestal base — straight out of a storybook.",
    image: themeA5.url,
    includes: ["Custom fairy & butterfly arched backdrop", "Bobo bubble + blue & white balloon garland", "Heart neon lamp + fairy and number cut-outs", "Floral pedestal base with cake-stand"],
    rating: 4.9, reviews: 408, offer: <>₹11,999</>, original: <>₹14,999</>, discountPct: 20, bestSeller: true,
  },
  {
    id: "theme-spiderman-ved-ring-arch",
    name: "Spider-Man Ring Arch Birthday Decor",
    description: "An action-packed Spider-Man ring arch in red, blue and black balloons with Spidey foil, 'Happy Birthday' neon, marquee name, gold foil number and themed balloon pillars on either side.",
    image: themeA6.url,
    includes: ["Red, blue & black balloon ring arch + Spidey foil", "'Happy Birthday' neon + marquee name letters", "Gold foil number balloon", "Spider-Man cut-out + two balloon pillars"],
    rating: 4.8, reviews: 372, offer: <>₹3,999</>, original: <>₹4,999</>, discountPct: 20,
  },
  {
    id: "theme-cocomelon-dharmik-grand",
    name: "Cocomelon Grand 1st Birthday Stage Decor",
    description: "A full Cocomelon themed stage with custom 'Happy Birthday' name backdrop, pastel rainbow balloon arch, character cut-outs, school bus, marquee '1' and personalised pedestal cylinders — like the picture.",
    image: themeA7.url,
    includes: ["Triple custom Cocomelon backdrop panels", "Pastel rainbow + butterfly balloon arch", "Cocomelon character cut-outs + school bus prop", "Personalised name pedestals + marquee number 1"],
    rating: 4.9, reviews: 478, offer: <>₹21,999</>, original: <>₹29,999</>, discountPct: 27, bestSeller: true,
  },
  {
    id: "theme-boss-baby-yaseen-organic-arch",
    name: "Boss Baby Yaseen Organic Balloon Arch",
    description: "A modern organic balloon arch in shades of blue, grey, white and chrome over a striped 'Boss Baby Yaseen' twin chiara backdrop with a Boss Baby cut-out and marquee number 1.",
    image: themeA8.url,
    includes: ["Organic blue, grey, white & chrome balloon arch", "Striped 'Boss Baby' personalised twin chiara backdrop", "Boss Baby cut-out + white pedestal", "Marquee number 1 light"],
    rating: 4.8, reviews: 263, offer: <>₹7,999</>, original: <>₹9,999</>, discountPct: 20,
  },
  {
    id: "theme-baby-elephant-vedaant-pastel",
    name: "Baby Elephant Pastel 1st Birthday Arch",
    description: "A sweet pastel 1st birthday arch in peach, blue, mustard, orange and grey balloons over peach & blue chiara backdrops with a custom 'Happy 1st Birthday' name and a cute baby-elephant cut-out.",
    image: themeA9.url,
    includes: ["Peach & blue twin chiara backdrop with custom name", "Pastel balloon arch with floral accents", "Baby elephant cut-out + decorated pedestal", "Fresh-look floral & balloon base"],
    rating: 4.9, reviews: 351, offer: <>₹7,999</>, original: <>₹9,999</>, discountPct: 20,
  },
  {
    id: "theme-avinya-butterfly-pastel-outdoor",
    name: "Avinya Pastel Butterfly Outdoor 1st Birthday",
    description: "An outdoor pastel butterfly themed decor with custom 'Avinya Happy Birthday' twin chiara backdrop, pastel pink, mint and lavender balloon arch, big butterfly cut-out, marquee '1' and butterfly-wrapped pedestal.",
    image: themeA10.url,
    includes: ["Custom butterfly twin chiara backdrop", "Pastel pink, mint & lavender balloon arch", "Large butterfly cut-out + butterfly pedestal", "Marquee number 1 light"],
    rating: 4.9, reviews: 297, offer: <>₹7,999</>, original: <>₹9,999</>, discountPct: 20, bestSeller: true,
  },
];

export const Route = createFileRoute("/service/theme-birthday-decoration")({
  loader: () => {
    const c = categoryBySlug("theme-birthday-decoration");
    if (!c) throw notFound();
    return { category: c };
  },
  head: () => ({
    meta: [
      { title: `Theme Birthday Decoration in India | From ₹2,499 | Decorza Events` },
      { name: "description", content: `From jungle and unicorn to football, princess and superhero themes — fully styled with props, balloons and themed backdrops. Book on WhatsApp.` },
      { property: "og:title", content: `Theme Birthday Decoration | Decorza Events` },
      { property: "og:image", content: "/6e61fd55-46fb-4711-b051-e933b22701bb.jpg" },
    ],
    links: [{ rel: "canonical", href: "/service/theme-birthday-decoration" }],
  }),
  component: ServicePage,
});

function ServicePage() {
  const { category: c } = Route.useLoaderData();
  const wa = waLink(waBookingMessage({ packageName: "Theme Birthday Decoration" }));
  const reviews = REVIEWS.filter(([, , s]) => (s as string) === "Theme Birthday Decoration").slice(0, 6);
  const displayReviews = reviews.length ? reviews : REVIEWS.slice(0, 6);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/6e61fd55-46fb-4711-b051-e933b22701bb.jpg" alt="Theme Birthday Decoration" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.2_0.08_305)]/90 to-[oklch(0.32_0.13_5)]/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
          <Badge className="bg-white/10 backdrop-blur border border-white/20 text-white">
            <Star className="mr-1 h-3 w-3 fill-gold text-gold" /> 4.8 · 1,340 reviews
          </Badge>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl">Theme Birthday Decoration</h1>
          <p className="mt-4 max-w-2xl text-white/85">From jungle and unicorn to football, princess and superhero themes — fully styled with props, balloons and themed backdrops.</p>
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
        <SectionHeader eyebrow="Packages" title="Theme Birthday Decoration Packages" subtitle="Pick from Essential, Premium and Luxury — or customise on WhatsApp." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <StaticPackageCard
            id="theme-birthday-decoration-essential"
            name="Essential Theme Birthday Decoration"
            description="A clean, photo-ready themed birthday setup with a custom character backdrop, a colourful balloon garland arch and matching props — exactly as shown in the picture."
            image="/6e61fd55-46fb-4711-b051-e933b22701bb.jpg"
            includes={["Custom themed backdrop panel", "Colourful balloon garland arch", "Themed props, signage & cake pedestal", "Standard warm lighting setup"]}
            rating={4.7}
            reviews={383}
            offer={<>₹3,499</>}
            original={<>₹9,999</>}
            discountPct={65}
            bestSeller={false}
          />
          <StaticPackageCard
            id="theme-birthday-decoration-premium"
            name="Premium Theme Birthday Decoration"
            description="An upgraded themed birthday setup with a double-arch backdrop, a denser organic balloon garland in your chosen palette, themed character cut-outs, marquee name/number lights and fairy lighting — styled like the reference photo."
            image="/7e03dbe4-3334-458e-86b5-1a89a2631696.jpg"
            includes={["Double chiara / arch themed backdrop", "Dense organic balloon garland", "Themed character cut-outs + marquee name or number", "Decorated pedestal + fairy lights"]}
            rating={4.8}
            reviews={536}
            offer={<>₹4,999</>}
            original={<>₹12,500</>}
            discountPct={60}
            bestSeller={false}
          />
          <StaticPackageCard
            id="theme-birthday-decoration-luxury"
            name="Luxury Theme Birthday Decoration"
            description="A full luxury themed birthday experience with a grand custom stage backdrop, two themed arches, character cut-outs, sequin / shimmer wall, marquee name & number, personalised pedestals and themed props — recreated to match the photo."
            image="/ff1d6103-d695-41a4-96af-b20031509e2a.webp"
            includes={["Grand custom themed stage backdrop", "Twin themed arches + sequin/shimmer panel", "Themed character cut-outs + marquee name & number", "Personalised pedestals, props & uplighters"]}
            rating={4.7}
            reviews={893}
            offer={<>₹19,999</>}
            original={<>₹34,999</>}
            discountPct={43}
            bestSeller={false}
          />
          {[...NEW_THEME_CARDS, ...NEW_THEME_CARDS_B, ...NEW_THEME_CARDS_C, ...NEW_THEME_CARDS_D, ...NEW_THEME_CARDS_E, ...NEW_THEME_CARDS_F, ...NEW_THEME_CARDS_G].map((p) => (
            <StaticPackageCard key={p.id} {...p} />
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Gallery" title="Theme Birthday Decoration Gallery" subtitle="Real setups by our decor team." />
          <div className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-3">
            <img src="/6e61fd55-46fb-4711-b051-e933b22701bb.jpg" alt="Theme Birthday Decoration 1" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src="/7e03dbe4-3334-458e-86b5-1a89a2631696.jpg" alt="Theme Birthday Decoration 2" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src="/ff1d6103-d695-41a4-96af-b20031509e2a.webp" alt="Theme Birthday Decoration 3" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src="/4d42c4f0-d677-46b7-b753-3a7931e097e5.jpg" alt="Theme Birthday Decoration 4" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src="/48692914-e809-4527-a8d3-a55e5cb89842.webp" alt="Theme Birthday Decoration 5" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src="/893cdd5d-ba31-485a-a0ca-fbe8d1990fc7.jpg" alt="Theme Birthday Decoration 6" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            {[...NEW_THEME_CARDS, ...NEW_THEME_CARDS_B, ...NEW_THEME_CARDS_C, ...NEW_THEME_CARDS_D, ...NEW_THEME_CARDS_E, ...NEW_THEME_CARDS_F, ...NEW_THEME_CARDS_G].map((p, i) => (
              <img key={p.id} src={p.image} alt={`Theme Birthday Decoration ${7 + i}`} loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
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
          <SectionHeader eyebrow="FAQs" title="Theme Birthday Decoration FAQs" />
          <div className="mt-8"><Faq items={c.faqs} /></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Available In" title="Theme Birthday Decoration in Your City" />
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {BRAND.cities.map((city) => (
            <Link
              key={city}
              to="/city/$slug"
              params={{ slug: city.toLowerCase() }}
              className="rounded-xl border bg-card p-3 text-center text-sm hover:border-primary hover:text-primary"
            >
              Theme in {city}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
