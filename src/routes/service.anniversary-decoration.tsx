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
import annivA1 from "@/assets/anniv-a1-25y-sequin-red-gold.jpg.asset.json";
import annivA2 from "@/assets/anniv-a2-red-silver-heart-arch.jpg.asset.json";
import annivA3 from "@/assets/anniv-a3-sarika-ritesh-25th.webp.asset.json";
import annivA4 from "@/assets/anniv-a4-25th-silver-palm.jpg.asset.json";
import annivA5 from "@/assets/anniv-a5-35th-pink-purple-sequin.jpg.asset.json";
import annivA6 from "@/assets/anniv-a6-gold-ring-palm-fans.jpg.asset.json";
import annivA7 from "@/assets/anniv-a7-25th-gold-black-peach.webp.asset.json";
import annivA8 from "@/assets/anniv-a8-pink-rosegold-love-ring.jpg.asset.json";
import annivA9 from "@/assets/anniv-a9-25-outdoor-pink-garden.jpg.asset.json";
import annivA10 from "@/assets/anniv-a10-rosegold-ring-photo.webp.asset.json";
import annivB1 from "@/assets/anniv-b1-red-canopy-vna.jpg.asset.json";
import annivB2 from "@/assets/anniv-b2-red-gold-canopy-love.jpg.asset.json";
import annivB3 from "@/assets/anniv-b3-red-hearts-ceiling.webp.asset.json";
import annivB4 from "@/assets/anniv-b4-rosegold-canopy-frame.jpg.asset.json";
import annivB5 from "@/assets/anniv-b5-red-gold-ceiling-arch.webp.asset.json";
import annivB6 from "@/assets/anniv-b6-white-silver-palm-arch.jpg.asset.json";
import annivB7 from "@/assets/anniv-b7-purple-ring-floral.webp.asset.json";
import annivB8 from "@/assets/anniv-b8-25th-floral-maroon.jpg.asset.json";
import annivB9 from "@/assets/anniv-b9-25th-pastel-floral-arch.jpg.asset.json";
import annivC1 from "@/assets/anniv-c1.jpg.asset.json";
import annivC2 from "@/assets/anniv-c2.webp.asset.json";
import annivC3 from "@/assets/anniv-c3.webp.asset.json";
import annivC4 from "@/assets/anniv-c4.jpg.asset.json";
import annivC5 from "@/assets/anniv-c5.jpg.asset.json";
import annivC6 from "@/assets/anniv-c6.webp.asset.json";
import annivC7 from "@/assets/anniv-c7.jpg.asset.json";
import annivC8 from "@/assets/anniv-c8.jpg.asset.json";
import annivC9 from "@/assets/anniv-c9.jpg.asset.json";
import annivC10 from "@/assets/anniv-c10.jpg.asset.json";
import annivD1 from "@/assets/anniv-d1.jpeg.asset.json";
import annivD2 from "@/assets/anniv-d2.jpeg.asset.json";
import annivD3 from "@/assets/anniv-d3.jpeg.asset.json";
import annivD4 from "@/assets/anniv-d4.jpg.asset.json";
import annivD5 from "@/assets/anniv-d5.jpg.asset.json";
import annivD6 from "@/assets/anniv-d6.jpg.asset.json";
import annivD7 from "@/assets/anniv-d7.jpg.asset.json";
import annivD8 from "@/assets/anniv-d8.jpg.asset.json";
import annivD9 from "@/assets/anniv-d9.jpeg.asset.json";
import annivD10 from "@/assets/anniv-d10.jpg.asset.json";
import annivE1 from "@/assets/anniv-e1.jpg.asset.json";
import annivE2 from "@/assets/anniv-e2.jpg.asset.json";
import annivE3 from "@/assets/anniv-e3.jpg.asset.json";
import annivE4 from "@/assets/anniv-e4.jpeg.asset.json";
import annivE5 from "@/assets/anniv-e5.jpeg.asset.json";
import annivE6 from "@/assets/anniv-e6.jpg.asset.json";
import annivE7 from "@/assets/anniv-e7.jpg.asset.json";
import annivE8 from "@/assets/anniv-e8.webp.asset.json";
import annivE9 from "@/assets/anniv-e9.jpg.asset.json";
import annivE10 from "@/assets/anniv-e10.jpg.asset.json";
import annivF1 from "@/assets/anniv-f1.jpeg.asset.json";
import annivF2 from "@/assets/anniv-f2.jpeg.asset.json";
import annivF3 from "@/assets/anniv-f3.jpeg.asset.json";
import annivF4 from "@/assets/anniv-f4.webp.asset.json";
import annivF5 from "@/assets/anniv-f5.webp.asset.json";
import annivF6 from "@/assets/anniv-f6.jpg.asset.json";
import annivF7 from "@/assets/anniv-f7.jpg.asset.json";
import annivF8 from "@/assets/anniv-f8.jpg.asset.json";
import annivF9 from "@/assets/anniv-f9.jpg.asset.json";
import annivF10 from "@/assets/anniv-f10.jpg.asset.json";
import annivG1 from "@/assets/anniv-g1.jpg.asset.json";
import annivG2 from "@/assets/anniv-g2.jpg.asset.json";
import annivG3 from "@/assets/anniv-g3.jpg.asset.json";
import annivG4 from "@/assets/anniv-g4.jpg.asset.json";
import annivG5 from "@/assets/anniv-g5.jpg.asset.json";
import annivG6 from "@/assets/anniv-g6.jpg.asset.json";
import annivG7 from "@/assets/anniv-g7.jpg.asset.json";
import annivG8 from "@/assets/anniv-g8.jpg.asset.json";
import annivG9 from "@/assets/anniv-g9.jpg.asset.json";
import annivG10 from "@/assets/anniv-g10.jpg.asset.json";
import annivH1 from "@/assets/anniv-h1.jpeg.asset.json";
import annivH2 from "@/assets/anniv-h2.jpeg.asset.json";
import annivH3 from "@/assets/anniv-h3.jpeg.asset.json";
import annivH4 from "@/assets/anniv-h4.jpeg.asset.json";
import annivH5 from "@/assets/anniv-h5.jpeg.asset.json";
import annivH6 from "@/assets/anniv-h6.jpeg.asset.json";
import annivH7 from "@/assets/anniv-h7.jpeg.asset.json";
import annivH8 from "@/assets/anniv-h8.jpg.asset.json";
import annivH9 from "@/assets/anniv-h9.jpeg.asset.json";
import annivH10 from "@/assets/anniv-h10.jpeg.asset.json";
import annivI1 from "@/assets/anniv-i1.jpeg.asset.json";
import annivI2 from "@/assets/anniv-i2.jpeg.asset.json";
import annivI3 from "@/assets/anniv-i3.jpeg.asset.json";
import annivI4 from "@/assets/anniv-i4.jpeg.asset.json";
import annivI5 from "@/assets/anniv-i5.jpeg.asset.json";
import annivI6 from "@/assets/anniv-i6.jpeg.asset.json";
import annivI7 from "@/assets/anniv-i7.jpeg.asset.json";
import annivI8 from "@/assets/anniv-i8.jpeg.asset.json";
import annivI9 from "@/assets/anniv-i9.jpeg.asset.json";
import annivI10 from "@/assets/anniv-i10.jpeg.asset.json";

const NEW_ANNIV_CARDS = [
  { id: "anniversary-a1-25y-sequin", img: annivA1.url, name: "25 Years Rose-Gold Sequin Wall", desc: "Shimmering rose-gold sequin wall paired with a lush gold, maroon & ivory balloon garland, glowing marquee '25' numbers and a neon Happy Anniversary sign — exactly like the picture.", mrp: 8999, sp: 6499, off: 28, best: true, inc: ["Rose-gold sequin shimmer wall","Gold, maroon & ivory balloon garland","Marquee '25' numbers + neon sign"], rt: 4.9, rv: 612 },
  { id: "anniversary-a2-heart-arch", img: annivA2.url, name: "Red, Gold & Silver Heart Arch", desc: "A bold heart-shaped balloon arch in red, chrome gold and silver with foil hearts and a Happy Anniversary banner against a silver fringe curtain — recreated to match the photo.", mrp: 4999, sp: 3499, off: 30, inc: ["Heart-shaped balloon arch","Silver foil fringe curtain","Happy Anniversary foil banner"], rt: 4.8, rv: 384 },
  { id: "anniversary-a3-sarika-ritesh", img: annivA3.url, name: "Personalised 25th Celebration Arch", desc: "Custom-printed arch backdrop with couple's name and monogram, soft white & nude balloon garland and glowing marquee '25' numbers — fully personalised like the reference.", mrp: 5999, sp: 4499, off: 25, inc: ["Personalised printed arch panel","White & nude organic garland","Glowing marquee '25' numbers"], rt: 4.9, rv: 271 },
  { id: "anniversary-a4-silver-palm", img: annivA4.url, name: "25th Silver, White & Dried Palm Arch", desc: "Elegant pastel arch backdrop with a chrome silver & white balloon cluster, silver burst stars, butterfly cut-outs and dried palm leaves with floral accents — styled like the picture.", mrp: 5999, sp: 4499, off: 25, inc: ["Pastel printed arch backdrop","Silver chrome cluster & stars","Dried palm leaves & florals"], rt: 4.7, rv: 198 },
  { id: "anniversary-a5-35th-pink-purple", img: annivA5.url, name: "35th Pink & Purple Iridescent Sequin", desc: "Iridescent pastel sequin wall framed by a pink, lilac and rose-gold balloon garland, marquee '35' numbers and a fresh floral pedestal — a dreamy milestone setup as shown.", mrp: 8999, sp: 6499, off: 28, inc: ["Iridescent pastel sequin wall","Pink, lilac & rose-gold garland","Marquee '35' + floral pedestal"], rt: 4.9, rv: 503 },
  { id: "anniversary-a6-gold-ring-palm", img: annivA6.url, name: "Royal Gold Ring & Palm Fans", desc: "Grand circular ring backdrop loaded with chrome gold balloons, dried palm fans and a neon Happy Anniversary sign — paired with a glowing white '1' for the perfect anniversary photo.", mrp: 4999, sp: 3499, off: 30, inc: ["Chrome gold ring balloon arch","Dried palm fans & accents","Neon Happy Anniversary sign"], rt: 4.8, rv: 342 },
  { id: "anniversary-a7-25th-gold-black-peach", img: annivA7.url, name: "Happy 25th Gold, Black & Peach Arch", desc: "Custom 'Happy 25th Anniversary' printed backdrop framed by a gold, black and peach balloon garland with foil stars and uplighters — exactly like the reference setup.", mrp: 5999, sp: 4499, off: 25, inc: ["Custom 25th printed backdrop","Gold, black & peach garland","Foil stars + warm uplighters"], rt: 4.8, rv: 256 },
  { id: "anniversary-a8-pink-rosegold-love", img: annivA8.url, name: "Pink, Rose-Gold & Love Ring Arch", desc: "Romantic ring backdrop in pink, white and chrome rose-gold balloons with silver foil stars, fairy lights, a glowing neon sign and a red 'love' foil — straight from the picture.", mrp: 4499, sp: 2999, off: 33, inc: ["Pink & rose-gold ring arch","Fairy lights + silver stars","Neon sign & red 'love' foil"], rt: 4.9, rv: 471 },
  { id: "anniversary-a9-25-outdoor-garden", img: annivA9.url, name: "25th Outdoor Garden Ring Setup", desc: "Garden-style ring arch with pastel pink, white and chrome gold balloons, fresh florals, a neon Happy Anniversary sign and glowing marquee '25' numbers — recreated outdoors as shown.", mrp: 5499, sp: 3999, off: 27, inc: ["Outdoor pastel ring arch","Fresh floral accents","Neon sign + marquee '25'"], rt: 4.7, rv: 163 },
  { id: "anniversary-a10-rosegold-photo", img: annivA10.url, name: "Rose-Gold Ring with Photo Strings", desc: "Stunning ring backdrop in soft pink and chrome rose-gold balloons with a neon Happy Anniversary sign and personalised photo strings on star lights — a memory-lane setup like the picture.", mrp: 4999, sp: 3499, off: 30, inc: ["Pink & rose-gold ring backdrop","Personalised photo strings","Star fairy lights + neon sign"], rt: 4.9, rv: 389 },
];

const NEW_ANNIV_CARDS_B = [
  { id: "anniversary-b1-red-canopy-vna", img: annivB1.url, name: "Red Romantic Bedroom Canopy Surprise", desc: "Dreamy bedroom surprise with a fairy-light tent canopy, red ceiling balloons, rose petal V♥A floor art, 'I Love You' foil wall and twin red & gold balloon pillars — exactly like the picture.", mrp: 3499, sp: 2499, off: 29, inc: ["Fairy-light tent canopy","Red ceiling balloons & ribbons","Rose petal V♥A floor + 'I Love You' foil"], rt: 4.9, rv: 318 },
  { id: "anniversary-b2-red-gold-canopy-love", img: annivB2.url, name: "Red & Gold 'Love' Hearts Canopy", desc: "Romantic fairy-light tent canopy over the bed with red & gold ceiling hearts, a glowing 'love' foil headboard, red 'I Love You' heart wall and a bed full of printed heart balloons — straight from the photo.", mrp: 3499, sp: 2499, off: 29, inc: ["Fairy-light bed canopy","Red & gold heart ceiling","'love' foil + I-Love-You hearts"], rt: 4.9, rv: 412 },
  { id: "anniversary-b3-red-hearts-ceiling", img: annivB3.url, name: "Red Heart Foil Ceiling Surprise", desc: "Budget-friendly room surprise with red foil hearts floating from the ceiling on ribbons with hanging roses and a sparkling 'Happy Anniversary' wall sign — recreated exactly like the picture.", mrp: 2999, sp: 1499, off: 50, inc: ["Red heart foil ceiling balloons","Hanging fresh roses on ribbons","Sparkle 'Happy Anniversary' sign"], rt: 4.7, rv: 268 },
  { id: "anniversary-b4-rosegold-canopy-frame", img: annivB4.url, name: "Rose-Gold Canopy & Photo Frame Surprise", desc: "Full room surprise with a red fairy-light canopy over the bed, rose-gold & white ceiling balloon clusters, a gold 'HAPPY ANNIVERSARY' wall, couple photo frame and rose petal heart trail — just like the reference.", mrp: 3499, sp: 2499, off: 29, inc: ["Red fairy-light bed canopy","Rose-gold ceiling clusters","Gold foil wall + photo frame"], rt: 4.9, rv: 357 },
  { id: "anniversary-b5-red-gold-ceiling-arch", img: annivB5.url, name: "Red & Gold Ceiling Balloon Room", desc: "Bedroom decked with red & gold ceiling balloons and curling ribbons, a bold gold 'HAPPY ANNIVERSARY' foil wall and twin red-gold balloon pillars with foil hearts — exactly like the picture.", mrp: 2999, sp: 1999, off: 33, inc: ["Red & gold ceiling balloons","Gold 'Happy Anniversary' foil wall","Twin balloon pillars with foil hearts"], rt: 4.8, rv: 224 },
  { id: "anniversary-b6-white-silver-palm-arch", img: annivB6.url, name: "Elegant White & Silver Palm Arch", desc: "Classy 'Happy Anniversary' arched white panel framed with a silver chrome & white balloon garland, dried golden palm spears and a balloon column — styled like the reference photo.", mrp: 4999, sp: 3499, off: 30, inc: ["White arched 'Happy Anniversary' panel","Silver chrome & white garland","Dried golden palm spears + column"], rt: 4.8, rv: 286 },
  { id: "anniversary-b7-purple-ring-floral", img: annivB7.url, name: "Purple Floral Ring Anniversary Arch", desc: "Stunning gold ring arch covered in fresh purple, pink & white florals with a flowing purple satin drape, neon 'Happy Anniversary' sign and twin gold pedestal floral stands — recreated like the picture.", mrp: 8999, sp: 5999, off: 33, inc: ["Gold ring with fresh florals","Purple satin drape + neon sign","Twin gold floral pedestal stands"], rt: 4.9, rv: 541, best: true },
  { id: "anniversary-b8-25th-floral-maroon", img: annivB8.url, name: "25th Pastel Floral & Maroon Drape", desc: "Luxe 25th anniversary stage with a pastel rose square arch, sheer drape backdrop with hanging crystal birds, maroon velvet sash, neon 'Happy Anniversary' and a gold velvet table — exactly like the reference.", mrp: 9999, sp: 6499, off: 35, inc: ["Pastel rose square arch","Sheer drape + crystal birds","Maroon velvet sash & gold table"], rt: 4.9, rv: 468 },
  { id: "anniversary-b9-25th-pastel-floral-arch", img: annivB9.url, name: "25th Pastel Roses Photo Arch", desc: "Picture-perfect 25th anniversary photo arch with a pastel rose floral frame, fairy-light backdrop, pink drape with neon 'Happy Anniversary' and giant silver '25' foil numbers — straight from the photo.", mrp: 9999, sp: 6499, off: 35, inc: ["Pastel rose floral photo arch","Fairy-light + pink drape","Giant silver '25' foil numbers"], rt: 4.9, rv: 502 },
];

const NEW_ANNIV_CARDS_C = [
  { id: "anniversary-c1-purple-ring-1st", img: annivC1.url, name: "Purple Pastel Ring Anniversary Arch", desc: "Dreamy circular ring backdrop covered in pastel purple, lilac, white and chrome gold balloons with a glowing 'Happy Anniversary' neon sign and a silver foil '1' number — recreated like the picture.", mrp: 4499, sp: 2999, off: 33, inc: ["✓\nPurple & lilac ring balloon arch", "✓\nHappy Anniversary neon sign", "✓\nSilver foil number & chrome accents"], rt: 4.8, rv: 274 },
  { id: "anniversary-c2-red-love-rooftop", img: annivC2.url, name: "Rooftop Red Love Heart Surprise", desc: "Romantic rooftop setup with twin sheer drape backdrop, fairy lights, red 'love' foil, heart-shaped balloon bouquets, gold 'Happy Anniversary' banner and a rose-petal heart table — straight from the photo.", mrp: 4999, sp: 2999, off: 40, inc: ["✓\nSheer drape + fairy lights", "✓\nRed 'love' foil & heart balloons", "✓\nRose petal heart table + banner"], rt: 4.9, rv: 391 },
  { id: "anniversary-c3-25-gold-black", img: annivC3.url, name: "25th Gold & Black Garland Arch", desc: "Luxurious 25th anniversary corner with a black, gold & chrome balloon garland arch, glowing 'Happy Anniversary' neon and a giant marquee '25' light number — exactly like the picture.", mrp: 4999, sp: 3499, off: 30, inc: ["✓\nBlack, gold & chrome garland arch", "✓\nHappy Anniversary neon sign", "✓\nGiant marquee '25' light number"], rt: 4.9, rv: 456 },
  { id: "anniversary-c4-25-silver-white-ring", img: annivC4.url, name: "25th Silver & White Ring Arch", desc: "Elegant white & chrome silver ring balloon arch with a silver 'Happy Anniversary' cut-out, silver flower clusters and giant silver '25' foil numbers — recreated like the reference photo.", mrp: 3999, sp: 2499, off: 38, inc: ["✓\nWhite & chrome silver ring arch", "✓\nSilver 'Happy Anniversary' cut-out", "✓\nGiant silver '25' foil numbers"], rt: 4.8, rv: 312 },
  { id: "anniversary-c5-25-rosegold-white-ring", img: annivC5.url, name: "25th Rose-Gold & Ivory Ring Arch", desc: "Stunning ring backdrop loaded with ivory, white and chrome rose-gold balloons, a glowing 'Happy Anniversary' neon sign and giant rose-gold '25' foil numbers — exactly like the picture.", mrp: 4499, sp: 2999, off: 33, inc: ["✓\nIvory & rose-gold ring arch", "✓\nHappy Anniversary neon sign", "✓\nGiant rose-gold '25' foil numbers"], rt: 4.9, rv: 358 },
  { id: "anniversary-c6-33-pink-gold-silver", img: annivC6.url, name: "33rd Pink, Gold & Silver Ring", desc: "Personalised milestone ring arch with pink, white, gold and silver chrome balloons, a glowing 'Happy Anniversary' tree neon sign and gold '33' foil numbers — styled like the reference.", mrp: 4499, sp: 2999, off: 33, inc: ["✓\nPink, gold & silver ring arch", "✓\nGolden 'Happy Anniversary' neon", "✓\nCustom foil number setup"], rt: 4.8, rv: 246 },
  { id: "anniversary-c7-red-silver-foil", img: annivC7.url, name: "Red & Silver HAPPY ANNIVERSARY Foil", desc: "Budget-friendly anniversary backdrop with red foil curtain, twin red & silver balloon pillars, big silver 'HAPPY ANNIVERSARY' foil letters, gold star and custom number foil — recreated like the picture.", mrp: 2999, sp: 2199, off: 27, inc: ["✓\nRed foil curtain + silver letters", "✓\nTwin red & silver balloon pillars", "✓\nGold star & custom foil number"], rt: 4.6, rv: 189 },
  { id: "anniversary-c8-25-gold-canopy-love", img: annivC8.url, name: "25th Gold Canopy & LOVE Marquee", desc: "Romantic fairy-light tent canopy with a glowing 'Happy Anniversary' neon, gold '25' foil numbers, marquee 'LOVE' lights, gold & black balloon arch and a candle-rose petal floor — straight from the photo.", mrp: 4999, sp: 3499, off: 30, inc: ["✓\nFairy-light tent canopy + neon", "✓\nMarquee 'LOVE' & '25' foil numbers", "✓\nGold-black arch + candle petals"], rt: 4.9, rv: 423 },
  { id: "anniversary-c9-gold-ring-drape-floral", img: annivC9.url, name: "Gold Ring Drape & Fresh Floral Arch", desc: "Premium gold metal ring arch with a sheer white drape, glowing 'Happy Anniversary' neon, twin fresh peach floral & palm leaf clusters and a curtain of fairy lights — recreated exactly like the picture.", mrp: 5999, sp: 4499, off: 25, inc: ["✓\nGold ring arch + sheer drape", "✓\nFresh peach floral & palm clusters", "✓\nFairy-light curtain + neon sign"], rt: 4.9, rv: 487 },
  { id: "anniversary-c10-25-marquee-rosegold-tufted", img: annivC10.url, name: "25th Rose-Gold Tufted Frame Setup", desc: "Luxe anniversary setup against a tufted headboard with a white, grey & rose-gold organic balloon garland on a gold ring, fairy-light curtain, 'Happy Anniversary' neon and giant marquee '25' light numbers — like the reference.", mrp: 4999, sp: 3499, off: 30, inc: ["✓\nOrganic garland on gold ring", "✓\nFairy-light curtain + neon sign", "✓\nGiant marquee '25' light numbers"], rt: 4.9, rv: 365 },
];

const NEW_ANNIV_CARDS_D = [
  { id: "anniversary-d1-black-gold-foil-curtain", img: annivD1.url, name: "Black, Gold & Champagne Anniversary Surprise", desc: "Romantic room surprise with a black foil curtain backdrop, gold 'HAPPY ANNIVERSARY' letters, ceiling balloons in black, gold, silver and white, foil hearts, stars, a giant champagne bottle balloon and candlelit base — exactly like the picture.", mrp: 2999, sp: 1999, off: 33, inc: ["✓\nBlack foil curtain + gold letters", "✓\nGold, black & silver ceiling balloons", "✓\nChampagne foil + candle base"], rt: 4.8, rv: 246 },
  { id: "anniversary-d2-rosegold-ceiling-room", img: annivD2.url, name: "Rose-Gold Ceiling Balloon Room Surprise", desc: "Sweet bedroom surprise with rose-gold, gold and white ceiling balloons with curling ribbons, a rose-gold 'HAPPY ANNIVERSARY' foil wall and pearl flower clusters — recreated like the photo.", mrp: 2499, sp: 1499, off: 40, inc: ["✓\nRose-gold ceiling balloons + ribbons", "✓\nRose-gold 'Happy Anniversary' foil", "✓\nPearl flower wall clusters"], rt: 4.7, rv: 218 },
  { id: "anniversary-d3-red-ceiling-room", img: annivD3.url, name: "Red & White Ceiling Balloon Surprise", desc: "Classic romantic room surprise with bright red ceiling balloons and curling ribbons, a red 'HAPPY ANNIVERSARY' foil wall and red-white pearl flower clusters — straight from the picture.", mrp: 2499, sp: 1499, off: 40, inc: ["✓\nRed ceiling balloons + ribbons", "✓\nRed 'Happy Anniversary' foil wall", "✓\nRed & white pearl flower clusters"], rt: 4.8, rv: 264 },
  { id: "anniversary-d4-gold-white-ring-1", img: annivD4.url, name: "Gold & White Ring Anniversary Arch", desc: "Stunning chrome gold & white balloon ring backdrop with a glowing 'Happy Anniversary' neon sign and a giant marquee '1' light number — exactly like the reference photo.", mrp: 4999, sp: 3499, off: 30, inc: ["✓\nChrome gold & white ring arch", "✓\nHappy Anniversary neon sign", "✓\nMarquee '1' light number"], rt: 4.9, rv: 341 },
  { id: "anniversary-d5-white-drape-gold-arch", img: annivD5.url, name: "White Drape & Gold Floral Arch", desc: "Romantic round drape backdrop with a chrome gold, ivory & pastel balloon garland, neon 'Happy Anniversary' sign, gold pedestal floral stand with dried pampas and warm uplighters — recreated like the picture.", mrp: 5999, sp: 4499, off: 25, inc: ["✓\nWhite drape + gold balloon garland", "✓\nNeon 'Happy Anniversary' sign", "✓\nGold floral pedestal + uplighters"], rt: 4.9, rv: 412, best: true },
  { id: "anniversary-d6-gold-curtain-25", img: annivD6.url, name: "Gold Fairy-Light Curtain 25th Anniversary", desc: "Grand 25th anniversary backdrop with gold & white balloon arch, gold-white satin & fairy-light curtain, 'Happy Anniversary' cut-out, champagne foil and giant gold '25' foil numbers — straight from the photo.", mrp: 4499, sp: 2999, off: 33, inc: ["✓\nGold & white balloon arch", "✓\nGold satin + fairy-light curtain", "✓\nChampagne foil & '25' numbers"], rt: 4.8, rv: 287 },
  { id: "anniversary-d7-pink-gold-25-ring", img: annivD7.url, name: "Pink & Gold 25th Ring Anniversary Arch", desc: "Cheerful 25th anniversary ring arch in pastel pink, peach and chrome gold balloons with a glowing 'Happy Anniversary' neon sign, gold '25' foil numbers and floral pedestal base — recreated like the picture.", mrp: 4499, sp: 3199, off: 29, inc: ["✓\nPink, peach & gold ring arch", "✓\nHappy Anniversary neon sign", "✓\nGold '25' foil + floral pedestal"], rt: 4.8, rv: 263 },
  { id: "anniversary-d8-rosegold-silver-5", img: annivD8.url, name: "Rose-Gold, Gold & Silver Ring with Marquee '5'", desc: "Premium ring balloon arch in rose-gold, chrome gold, silver and pink balloons with a neon 'Happy Anniversary' sign, a wooden table base with floral balloon stands and a giant marquee '5' light number — exactly like the picture.", mrp: 4999, sp: 3499, off: 30, inc: ["✓\nRose-gold, gold & silver ring arch", "✓\nHappy Anniversary neon + table base", "✓\nMarquee '5' light number"], rt: 4.9, rv: 398 },
  { id: "anniversary-d9-rosegold-sh-marquee", img: annivD9.url, name: "Rose-Gold & White Ring with Marquee Initials", desc: "Luxurious chrome rose-gold and pearl white ring balloon arch with a glowing 'Happy Anniversary' neon sign, fresh rose bouquet centrepiece, giant marquee letter initials and a floor full of rose-gold, silver & white balloons — straight from the photo.", mrp: 5999, sp: 4499, off: 25, inc: ["✓\nRose-gold & pearl ring arch", "✓\nMarquee initials + neon sign", "✓\nFloor balloons + rose bouquet"], rt: 4.9, rv: 451, best: true },
  { id: "anniversary-d10-gold-white-brick-1", img: annivD10.url, name: "Gold & White Ring Anniversary Arch (Rustic)", desc: "Beautiful gold & white balloon ring arch on a rustic brick wall with a glowing 'Happy Anniversary' neon, gold foil stars, confetti accents and a gold marquee '1' foil number — recreated like the picture.", mrp: 4499, sp: 3199, off: 29, inc: ["✓\nGold & white ring balloon arch", "✓\nHappy Anniversary neon + foil stars", "✓\nGold '1' foil number"], rt: 4.8, rv: 302 },
];

const NEW_ANNIV_CARDS_E = [
  { id: "anniversary-e1-purple-white-gold-arch", img: annivE1.url, name: "Purple, White & Gold Personalised Arch", desc: "Romantic personalised 'Happy Anniversary' panel with the couple's names, framed by a lush purple, lilac, white and chrome gold balloon arch with side balloon pillar — recreated exactly like the picture.", mrp: 5999, sp: 3499, off: 42, inc: ["✓\nPurple, lilac & white balloon arch", "✓\nPersonalised name backdrop panel", "✓\nGold chrome accents + side pillar"], rt: 4.8, rv: 287 },
  { id: "anniversary-e2-40-years-rosegold", img: annivE2.url, name: "40 Years of Love Rose-Gold Arch", desc: "Elegant '40 Years of Love' printed arched backdrop framed with a chrome rose-gold, ivory and white organic balloon garland and dried golden palm spear accents — exactly like the photo.", mrp: 5999, sp: 3499, off: 42, inc: ["✓\nPrinted '40 Years of Love' arch", "✓\nRose-gold & ivory organic garland", "✓\nDried golden palm spears"], rt: 4.9, rv: 364 },
  { id: "anniversary-e3-red-tent-i-love-you", img: annivE3.url, name: "Red Cabana Tent & I LOVE YOU Marquee", desc: "Dreamy room surprise with a sheer fairy-light cabana tent, lanterns inside, neon 'Happy Anniversary' sign, red foil heart, pink flower balloon stand, marquee 'I LOVE YOU' lights and a rose-petal heart — straight from the picture.", mrp: 5499, sp: 3499, off: 36, inc: ["✓\nFairy-light cabana tent + lanterns", "✓\nMarquee 'I LOVE YOU' light letters", "✓\nNeon sign + rose petal heart"], rt: 4.9, rv: 421, best: true },
  { id: "anniversary-e4-red-foil-anniversary", img: annivE4.url, name: "Red Foil HAPPY ANNIVERSARY Room Surprise", desc: "Romantic room surprise with red foil curtain backdrop, silver 'HAPPY ANNIVERSARY' foil letters, foil hearts and stars, red-white ceiling balloons and twin red-silver balloon pillars — recreated like the picture.", mrp: 2999, sp: 1999, off: 33, inc: ["✓\nRed foil curtain + silver letters", "✓\nRed & white ceiling balloons", "✓\nFoil hearts, stars & balloon pillars"], rt: 4.7, rv: 246 },
  { id: "anniversary-e5-pink-foil-anniversary", img: annivE5.url, name: "Pink Foil HAPPY ANNIVERSARY with Champagne", desc: "Cheerful room surprise with hot-pink foil curtain, silver 'HAPPY ANNIVERSARY' foil letters, foil stars and hearts, pink-silver ceiling balloons, twin balloon pillars and a giant champagne bottle foil — exactly like the photo.", mrp: 2999, sp: 1999, off: 33, inc: ["✓\nPink foil curtain + silver letters", "✓\nPink-silver ceiling balloons + pillars", "✓\nChampagne bottle foil balloon"], rt: 4.8, rv: 272 },
  { id: "anniversary-e6-25th-navy-gold-arch", img: annivE6.url, name: "25th Navy, Gold & Ivory Anniversary Arch", desc: "Classy 'Happy 25th Anniversary' arched panel with a navy blue, chrome gold and ivory organic balloon garland and matching side balloon column — styled exactly like the reference photo.", mrp: 5999, sp: 3499, off: 42, inc: ["✓\nPrinted 25th anniversary arch panel", "✓\nNavy, gold & ivory organic garland", "✓\nMatching side balloon column"], rt: 4.9, rv: 338 },
  { id: "anniversary-e7-pink-rosegold-ring-1", img: annivE7.url, name: "Pink & Rose-Gold Ring with Marquee 1", desc: "Stunning circular ring backdrop loaded with pink, white, silver and chrome rose-gold balloons, soft peach drape, neon 'Happy Anniversary' sign, gold cocktail table and a glowing marquee '1' light number — recreated like the picture.", mrp: 4999, sp: 3499, off: 30, inc: ["✓\nPink & rose-gold ring arch + drape", "✓\nNeon sign + gold cocktail table", "✓\nMarquee '1' light number"], rt: 4.9, rv: 392 },
  { id: "anniversary-e8-gold-sequin-wall", img: annivE8.url, name: "Grand Gold Sequin Shimmer Wall Setup", desc: "Luxurious gold sequin shimmer wall framed by a chrome gold, silver, ivory and white organic balloon garland with dried pampas accents, neon 'Happy Anniversary' sign and a gold pedestal — premium setup exactly like the photo.", mrp: 11999, sp: 7999, off: 33, inc: ["✓\nGold sequin shimmer wall", "✓\nGold, silver & ivory organic garland", "✓\nNeon sign + dried pampas + pedestal"], rt: 4.9, rv: 587, best: true },
  { id: "anniversary-e9-30th-amma-nanna", img: annivE9.url, name: "Personalised 30th 'Together Forever' Arch", desc: "Premium personalised 'Happy 30th Anniversary' backdrop with 'Together Forever' calligraphy and the couple's names, framed by a red, chrome gold and ivory balloon garland with fresh roses, pampas centrepiece and a neon Happy Anniversary sign — exactly like the photo.", mrp: 8999, sp: 6499, off: 28, inc: ["✓\nPersonalised 30th printed backdrop", "✓\nRed, gold & ivory organic garland", "✓\nPampas centrepiece + neon sign"], rt: 4.9, rv: 462 },
  { id: "anniversary-e10-rosegold-neon-ring", img: annivE10.url, name: "Rose-Gold & White Neon Ring Arch", desc: "Elegant gold ring balloon arch in chrome rose-gold and pearl white balloons with fresh floral accents, a glowing neon 'Happy Anniversary' sign and matching balloon clusters on the floor — recreated like the picture.", mrp: 4999, sp: 3499, off: 30, inc: ["✓\nRose-gold & pearl ring balloon arch", "✓\nFresh floral accents on arch", "✓\nNeon 'Happy Anniversary' sign"], rt: 4.8, rv: 318 },
];

const NEW_ANNIV_CARDS_F = [
  { id: "anniversary-f1-red-gold-heart-10", img: annivF1.url, name: "Red & Gold Heart Arch with 10 Foil", desc: "Romantic heart-shaped balloon arch in chrome gold and red balloons with a fairy-light curtain, neon 'Happy Anniversary' sign, gold '10' foil numbers and a heart-foil balloon bouquet — recreated exactly like the picture.", mrp: 5499, sp: 3499, off: 36, inc: ["✓\nRed & gold heart balloon arch", "✓\nFairy-light curtain + neon sign", "✓\nGold '10' foil + heart balloon bouquet"], rt: 4.9, rv: 412, best: true },
  { id: "anniversary-f2-silver-sequin-25-marquee", img: annivF2.url, name: "Silver Sequin Shimmer Wall with Marquee 25", desc: "Premium silver sequin shimmer wall framed by a red, white and chrome silver organic balloon garland with foil hearts, neon 'Happy Anniversary' sign, draped cake table and giant marquee '25' light numbers — exactly like the photo.", mrp: 8999, sp: 6499, off: 28, inc: ["✓\nSilver sequin shimmer wall", "✓\nRed, white & silver organic garland", "✓\nMarquee '25' light numbers + neon"], rt: 4.9, rv: 538, best: true },
  { id: "anniversary-f3-ivory-rosegold-1-marquee", img: annivF3.url, name: "Ivory & Rose-Gold Arch with Marquee 1", desc: "Elegant white arched backdrop with a flowing ivory and chrome rose-gold balloon cascade, neon 'Happy Anniversary' sign, twin rose-gold heart pillars with pink floral stands, gold cocktail table and a marquee '1' light number — recreated like the picture.", mrp: 6999, sp: 4999, off: 29, inc: ["✓\nWhite arch + ivory & rose-gold cascade", "✓\nTwin heart pillars with floral stands", "✓\nMarquee '1' light + neon sign"], rt: 4.9, rv: 387 },
  { id: "anniversary-f4-red-white-silver-25-personalised", img: annivF4.url, name: "Personalised 25th Red, White & Silver Arch", desc: "Personalised 'Happy Anniversary' arched panel with the couple's names framed by a red, white and chrome silver organic balloon garland with pampas accents and giant gold marquee '25' light numbers — exactly like the photo.", mrp: 5999, sp: 3999, off: 33, inc: ["✓\nPersonalised name arch panel", "✓\nRed, white & silver organic garland", "✓\nGold marquee '25' light numbers"], rt: 4.8, rv: 324 },
  { id: "anniversary-f5-red-gold-ring-25", img: annivF5.url, name: "Red & Gold Ring Arch with Silver 25", desc: "Bold circular ring backdrop loaded with red and chrome gold balloons with a glowing 'Happy Anniversary' neon sign, balloon base cluster, twin balloon pillars and giant silver '25' foil numbers — recreated like the picture.", mrp: 4999, sp: 2999, off: 40, inc: ["✓\nRed & gold ring balloon arch", "✓\nHappy Anniversary neon sign", "✓\nSilver '25' foil + balloon pillars"], rt: 4.8, rv: 296 },
  { id: "anniversary-f6-white-rosegold-ring-1", img: annivF6.url, name: "White & Rose-Gold Ring with Marquee 1", desc: "Romantic ring backdrop in pearl white, chrome silver and rose-gold balloons with a fairy-light curtain, neon 'Happy Anniversary' sign and a glowing marquee '1' light number — exactly like the photo.", mrp: 4999, sp: 3499, off: 30, inc: ["✓\nWhite, silver & rose-gold ring arch", "✓\nFairy-light curtain + neon sign", "✓\nMarquee '1' light number"], rt: 4.9, rv: 358 },
  { id: "anniversary-f7-red-room-canopy-love", img: annivF7.url, name: "Red Room Canopy 'Love' Anniversary Surprise", desc: "Dreamy bedroom surprise with red ceiling balloons & ribbons, a sheer fairy-light canopy over the bed, red 'love' foil, hanging rose vines, a gold 'HAPPY ANNIVERSARY' foil wall and a rose-petal floor heart — recreated exactly like the picture.", mrp: 4499, sp: 2999, off: 33, inc: ["✓\nRed ceiling balloons + fairy-light canopy", "✓\nRed 'love' foil + gold anniversary letters", "✓\nRose-petal floor heart + vines"], rt: 4.9, rv: 421 },
  { id: "anniversary-f8-purple-pink-1-floral", img: annivF8.url, name: "Purple, Pink & White 1st Anniversary Arch", desc: "Dreamy pastel arch with purple, pink and white organic balloon garland on a sheer fairy-light drape backdrop, a neon 'Happy Anniversary' heart sign, fresh floral side column, foil hearts and a marquee '1' light number — exactly like the picture.", mrp: 7999, sp: 5999, off: 25, inc: ["✓\nPurple, pink & white organic garland", "✓\nFresh floral side column + foil hearts", "✓\nMarquee '1' light + neon sign"], rt: 4.9, rv: 476, best: true },
  { id: "anniversary-f9-red-white-silver-frame-5", img: annivF9.url, name: "Red, White, Silver & Gold 5th Frame Arch", desc: "Photo-perfect square frame backdrop with red, white, silver and gold chrome balloons, a 'HAPPY ANNIVERSARY' bunting and a gold '5' foil number — a budget-friendly setup recreated like the picture.", mrp: 3499, sp: 2199, off: 37, inc: ["✓\nRed, white, silver & gold frame arch", "✓\n'HAPPY ANNIVERSARY' bunting", "✓\nGold '5' foil number"], rt: 4.7, rv: 218 },
  { id: "anniversary-f10-blue-silver-white-ring-7", img: annivF10.url, name: "Blue, Silver & White Ring with Foil 7", desc: "Stunning circular ring backdrop loaded with white, chrome silver and royal blue balloons with mickey-cluster accents, a glowing neon 'Happy Anniversary' sign and a silver '7' foil number on a matching balloon pillar — exactly like the photo.", mrp: 4499, sp: 2999, off: 33, inc: ["✓\nBlue, silver & white ring balloon arch", "✓\nHappy Anniversary neon sign", "✓\nSilver '7' foil + balloon pillar"], rt: 4.9, rv: 364 },
];

const NEW_ANNIV_CARDS_G = [
  { id: "anniversary-g1-red-anniv-champagne", img: annivG1.url, name: "Red HAPPY ANNIVERSARY with Champagne Pillars", desc: "Romantic room surprise with a silver foil curtain backdrop, bold red 'HAPPY ANNIVERSARY' foil letters, lush pink, gold, white & confetti balloon garland on top, gold foil hearts and twin Château Célébration champagne bottle balloon pillars — recreated exactly like the picture.", mrp: 3499, sp: 2199, off: 37, inc: ["✓\nSilver foil curtain + red 'HAPPY ANNIVERSARY' letters", "✓\nPink, gold, white & confetti balloon garland", "✓\nTwin champagne bottle balloon pillars"], rt: 4.7, rv: 234 },
  { id: "anniversary-g2-pink-rosegold-gold-ring-neon", img: annivG2.url, name: "Pink, Rose-Gold & Gold Ring with Neon Sign", desc: "Stunning circular ring backdrop loaded with soft pink, chrome rose-gold and chrome gold balloons with mickey-cluster accents, a glowing neon 'Happy Anniversary' heart sign and fairy-light base — exactly like the photo.", mrp: 4499, sp: 2999, off: 33, inc: ["✓\nPink, rose-gold & gold ring arch", "✓\nNeon 'Happy Anniversary' heart sign", "✓\nFairy-light base + chrome accents"], rt: 4.8, rv: 312 },
  { id: "anniversary-g3-blue-rosegold-25-butterfly", img: annivG3.url, name: "Blue, Rose-Gold & Butterfly 25th Ring Arch", desc: "Bold circular ring backdrop in royal blue and chrome rose-gold balloons with silver butterfly cut-outs, fresh florals, neon 'Happy Anniversary' heart sign, a butterfly-decked cocktail table and glowing marquee '25' light numbers — recreated like the picture.", mrp: 5999, sp: 3999, off: 33, inc: ["✓\nBlue & rose-gold ring + butterflies", "✓\nNeon sign + fresh floral accents", "✓\nMarquee '25' light numbers + cocktail table"], rt: 4.9, rv: 421, best: true },
  { id: "anniversary-g4-silver-chrome-25-ring", img: annivG4.url, name: "Silver Chrome Ring with Marquee 25", desc: "Premium circular ring backdrop loaded with all-chrome silver balloons of mixed sizes on a tiled wall with a glowing 'Happy Anniversary' neon sign and giant white marquee '25' light numbers — exactly like the photo.", mrp: 5999, sp: 3499, off: 42, inc: ["✓\nAll-chrome silver ring balloon arch", "✓\nHappy Anniversary neon sign", "✓\nGiant marquee '25' light numbers"], rt: 4.9, rv: 386 },
  { id: "anniversary-g5-outdoor-white-gold-25-mrmrs", img: annivG5.url, name: "Outdoor White & Gold 25th with Mr & Mrs", desc: "Garden-style round panel backdrop with a lush white, chrome gold and confetti balloon garland, palm leaf accents, neon 'Happy Anniversary' sign, gold 'Mr & Mrs' pedestals and giant marquee '25' light numbers — recreated outdoors like the picture.", mrp: 5999, sp: 4499, off: 25, inc: ["✓\nRound panel + white & gold garland", "✓\nPalm leaves + Mr & Mrs pedestals", "✓\nMarquee '25' light numbers + neon sign"], rt: 4.9, rv: 458, best: true },
  { id: "anniversary-g6-25-years-of-love-vasuni", img: annivG6.url, name: "Personalised '25 Years of Love' Arch", desc: "Custom-printed white arched backdrop with '25 Years of Love #VASUNI' calligraphy, framed by a peach, pink, ivory, gold and chrome rose-pink organic balloon garland with floral clusters — exactly like the photo.", mrp: 5999, sp: 3499, off: 42, inc: ["✓\nPersonalised '25 Years of Love' arch", "✓\nPeach, pink, ivory & gold organic garland", "✓\nChrome rose-pink floral clusters"], rt: 4.9, rv: 392 },
  { id: "anniversary-g7-rosegold-sequin-marquee-3", img: annivG7.url, name: "Rose-Gold Sequin Wall with Marquee 3", desc: "Luxurious rose-gold sequin shimmer wall framed by a chrome gold, copper rose-gold and white organic balloon garland with rose-gold foil orbs, glowing neon 'Happy Anniversary' sign, gold cocktail table and a giant marquee '3' light number — premium setup like the picture.", mrp: 8999, sp: 6499, off: 28, inc: ["✓\nRose-gold sequin shimmer wall", "✓\nGold, copper & white organic garland", "✓\nMarquee '3' light + neon + gold cocktail table"], rt: 4.9, rv: 512, best: true },
  { id: "anniversary-g8-gold-white-drape-pampas-ring", img: annivG8.url, name: "Gold & White Drape Ring with Pampas Floral", desc: "Elegant gold ring balloon arch in white, ivory, chrome gold and peach balloons paired with a gold satin & white sheer drape backdrop, a glowing neon 'Happy Anniversary' sign and a pampas-grass white rose floral installation — recreated like the picture.", mrp: 5999, sp: 3999, off: 33, inc: ["✓\nGold ring + white & gold balloon garland", "✓\nGold satin & white sheer drape", "✓\nPampas-grass white rose floral + neon"], rt: 4.9, rv: 374 },
  { id: "anniversary-g9-50-multi-chrome-ring", img: annivG9.url, name: "50th Multi-Chrome Ring with Marquee 50", desc: "Grand circular ring balloon arch loaded with chrome silver, rose-gold, copper and yellow chrome balloons with foil stars, fairy-light backdrop, twin balloon pillars, a gold 'Happy Anniversary' banner and glowing marquee '50' light numbers on a draped pedestal — exactly like the photo.", mrp: 5499, sp: 3999, off: 27, inc: ["✓\nMulti-chrome ring + twin balloon pillars", "✓\nFairy-light backdrop + foil stars", "✓\nMarquee '50' light numbers + banner"], rt: 4.9, rv: 487 },
  { id: "anniversary-g10-white-silver-flower-25-ring", img: annivG10.url, name: "White & Silver Flower Ring with Marquee 25", desc: "Elegant circular ring balloon arch loaded with white and chrome silver balloons with silver balloon flower clusters, neon 'Happy Anniversary' heart sign and giant white marquee '25' light numbers against a wood-panel wall — recreated like the picture.", mrp: 4999, sp: 3499, off: 30, inc: ["✓\nWhite & silver ring balloon arch", "✓\nSilver balloon flower clusters + neon sign", "✓\nMarquee '25' light numbers"], rt: 4.8, rv: 342 },
];

const NEW_ANNIV_CARDS_H = [
  { id: "anniversary-h1-red-iu-candle-heart", img: annivH1.url, name: "Red 'I ♥ U' Balloon Ceiling with Candle Heart Bed", desc: "Romantic bedroom surprise with a sky of red ceiling balloons on ribbons, giant silver 'I' and 'U' foil letters with a red foil heart, fresh roses hanging from the ceiling and a glowing tealight heart on a rose-petal bed — recreated exactly like the picture.", mrp: 3499, sp: 2299, off: 34, inc: ["✓\nRed ceiling balloons + hanging roses", "✓\nSilver 'I' & 'U' foil letters + red heart", "✓\nTealight heart on rose-petal bed"], rt: 4.8, rv: 287 },
  { id: "anniversary-h2-red-blue-ceiling-tent-anniv", img: annivH2.url, name: "Red & Blue Ceiling with Fairy-Light Tent Canopy", desc: "Grand bedroom surprise with a packed red and royal-blue ceiling balloon cluster, cascading silver curl ribbons, a fairy-light tent canopy over the bed, red 'I ♥ YOU' heart pillows, neon 'love' sign and a glowing red 'HAPPY ANNIVERSARY' wall — exactly like the photo.", mrp: 4999, sp: 3299, off: 34, inc: ["✓\nRed & blue ceiling balloons + curl ribbons", "✓\nFairy-light tent canopy over bed", "✓\nRed 'HAPPY ANNIVERSARY' wall + neon 'love'"], rt: 4.9, rv: 426, best: true },
  { id: "anniversary-h3-i-love-you-red-pillars", img: annivH3.url, name: "Red 'I LOVE YOU' Hearts with Black & Red Pillars", desc: "Full bedroom surprise with a red ceiling balloon cluster, hanging red foil hearts, big red 'I LOVE YOU' foil wall, red bedsheet with rose petals and twin black, red & white balloon pillars topped with red foil hearts — recreated exactly like the picture.", mrp: 3499, sp: 1999, off: 43, inc: ["✓\nRed ceiling balloons + hanging foil hearts", "✓\nRed 'I LOVE YOU' foil wall + red bedsheet", "✓\nTwin black, red & white balloon pillars"], rt: 4.7, rv: 312 },
  { id: "anniversary-h4-rosegold-happy-anniv-love-heart", img: annivH4.url, name: "Rose-Gold HAPPY ANNIVERSARY with LOVE Rose Heart", desc: "Luxe hotel-room style surprise with red, white and chrome rose-gold helium balloons, rose-gold 'HAPPY ANNIVERSARY' foil wall, a giant LOVE rose-petal heart on a white bed, candle-lit rose petal trail and champagne setup — styled exactly like the photo.", mrp: 4499, sp: 2799, off: 38, inc: ["✓\nRed, white & rose-gold helium balloons", "✓\nRose-gold 'HAPPY ANNIVERSARY' foil wall", "✓\nLOVE rose-petal heart + candle trail + champagne"], rt: 4.9, rv: 458, best: true },
  { id: "anniversary-h5-25-gold-black-anniv", img: annivH5.url, name: "25th Gold & Black HAPPY ANNIVERSARY with '25' Numbers", desc: "Classic 25th anniversary backdrop with a gold and black balloon garland on top, red foil hearts, silver fringe curtain, big gold 'HAPPY ANNIVERSARY' foil letters and a table-top gold '25' foil numbers on a black & gold balloon stand — recreated like the picture.", mrp: 2999, sp: 1799, off: 40, inc: ["✓\nGold & black balloon garland + red foil hearts", "✓\nSilver fringe curtain + gold 'HAPPY ANNIVERSARY' foil", "✓\nGold '25' foil numbers on balloon stand"], rt: 4.7, rv: 224 },
  { id: "anniversary-h6-red-anniv-1st-balloon", img: annivH6.url, name: "Red HAPPY ANNIVERSARY 1st with Giant '1' Foil", desc: "Romantic bedroom surprise with a red ceiling balloon cluster, red 'HAPPY ANNIVERSARY' foil wall, a giant red '1' number balloon on a balloon stand, ribbon-bowed pillows, a glowing tealight heart on rose petals and red foil heart bouquet — exactly like the picture.", mrp: 3499, sp: 2199, off: 37, inc: ["✓\nRed ceiling balloons + 'HAPPY ANNIVERSARY' foil wall", "✓\nGiant red '1' number balloon on stand", "✓\nTealight heart on rose-petal bed + foil heart bouquet"], rt: 4.8, rv: 268 },
  { id: "anniversary-h7-white-floral-25-marquee", img: annivH7.url, name: "White Drape Ring with Marquee 25 & Floral Crown", desc: "Premium round panel backdrop in white sheer drape with a fairy-light starburst, neon 'Happy Anniversary' sign, a half-crown of fresh red & white roses with greens, dried pampas accents, white pedestal and giant marquee '25' light numbers — recreated like the photo.", mrp: 7999, sp: 5499, off: 31, inc: ["✓\nWhite drape round panel + fairy-light starburst", "✓\nFresh red & white floral crown + pampas accents", "✓\nNeon sign + giant marquee '25' light numbers"], rt: 4.9, rv: 482, best: true },
  { id: "anniversary-h8-black-silver-chrome-25th-arch", img: annivH8.url, name: "Black & Silver Chrome 25th Anniversary Arch", desc: "Elegant ivory arched panel printed with 'Happy 25th Anniversary' calligraphy, framed by a bold organic balloon garland in black and chrome silver with white fresh rose & baby's breath floral clusters — recreated exactly like the picture.", mrp: 5999, sp: 3999, off: 33, inc: ["✓\nIvory arch panel with 'Happy 25th Anniversary'", "✓\nBlack & chrome silver organic garland", "✓\nWhite rose & baby's breath floral clusters"], rt: 4.9, rv: 394 },
  { id: "anniversary-h9-tulle-photos-floral-anniv", img: annivH9.url, name: "White Tulle Photo Backdrop with Floral Arch", desc: "Romantic memory-lane backdrop with sheer white tulle drapes, warm fairy lights, polaroid photo strings, a neon 'Happy Anniversary' heart sign, vine-and-floral side arches and twin white floral urn pedestals — exactly like the picture.", mrp: 7999, sp: 4999, off: 38, inc: ["✓\nWhite tulle drape + fairy lights + polaroid photos", "✓\nNeon 'Happy Anniversary' heart sign", "✓\nVine & floral arches + twin floral urn pedestals"], rt: 4.9, rv: 437 },
  { id: "anniversary-h10-red-hearts-anniv-banner", img: annivH10.url, name: "Red Heart Foils with HAPPY ANNIVERSARY Banner", desc: "Cosy bedroom surprise with red foil hearts floating from the ceiling, a black 'Happy ♥ Anniversary' banner, gold '1' foil balloon on the bed, red heart cushions, scattered red rose petals, glowing tealight candles and a red rose petal pathway — recreated like the photo.", mrp: 3499, sp: 2199, off: 37, inc: ["✓\nRed heart foil ceiling balloons + 'Happy ♥ Anniversary' banner", "✓\nGold '1' foil + red heart cushions on bed", "✓\nRose petal bed art + candle pathway"], rt: 4.8, rv: 296 },
];

const ALL_NEW_ANNIV = [...NEW_ANNIV_CARDS, ...NEW_ANNIV_CARDS_B, ...NEW_ANNIV_CARDS_C, ...NEW_ANNIV_CARDS_D, ...NEW_ANNIV_CARDS_E, ...NEW_ANNIV_CARDS_F, ...NEW_ANNIV_CARDS_G, ...NEW_ANNIV_CARDS_H];

export const Route = createFileRoute("/service/anniversary-decoration")({
  loader: () => {
    const c = categoryBySlug("anniversary-decoration");
    if (!c) throw notFound();
    return { category: c };
  },
  head: () => ({
    meta: [
      { title: `Anniversary Decoration in India | From ₹1,499 | Decorza Events` },
      { name: "description", content: `Candle paths, rose petal beds, balloon canopies and personalised photo decor for unforgettable anniversaries. Book on WhatsApp.` },
      { property: "og:title", content: `Anniversary Decoration | Decorza Events` },
      { property: "og:image", content: "/745b9998-0fb1-4a81-a2cf-6f3870657562.jpg" },
    ],
    links: [{ rel: "canonical", href: "/service/anniversary-decoration" }],
  }),
  component: ServicePage,
});

function ServicePage() {
  const { category: c } = Route.useLoaderData();
  const wa = waLink(waBookingMessage({ packageName: "Anniversary Decoration" }));
  const reviews = REVIEWS.filter(([, , s]) => (s as string) === "Anniversary Decoration").slice(0, 6);
  const displayReviews = reviews.length ? reviews : REVIEWS.slice(0, 6);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/745b9998-0fb1-4a81-a2cf-6f3870657562.jpg" alt="Anniversary Decoration" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.2_0.08_305)]/90 to-[oklch(0.32_0.13_5)]/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
          <Badge className="bg-white/10 backdrop-blur border border-white/20 text-white">
            <Star className="mr-1 h-3 w-3 fill-gold text-gold" /> 4.9 · 1,820 reviews
          </Badge>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl">Anniversary Decoration</h1>
          <p className="mt-4 max-w-2xl text-white/85">Candle paths, rose petal beds, balloon canopies and personalised photo decor for unforgettable anniversaries.</p>
          <p className="mt-4 font-display text-2xl text-gold">Starting from ₹ 1499&nbsp;</p>
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
        <SectionHeader eyebrow="Packages" title="Anniversary Decoration Packages" subtitle="Pick from Essential, Premium and Luxury — or customise on WhatsApp." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <StaticPackageCard
            id="anniversary-decoration-essential"
            name="Essential Anniversary Decoration"
            description="A romantic anniversary setup with a printed couple backdrop, soft pastel balloon arch, fairy lights and floral pedestal — clean and photo-ready, just like the picture."
            image="/745b9998-0fb1-4a81-a2cf-6f3870657562.jpg"
            includes={["✓\nRound ring balloon arch", "✓\nChrome balloon & neon sign light\u00a0", "✓\nNumber led light & cake cutting table\u00a0"]}
            rating={4.7}
            reviews={386}
            offer={<>₹3,499</>}
            original={<>₹4,999</>}
            discountPct={30}
            bestSeller={false}
          />
          <StaticPackageCard
            id="anniversary-decoration-premium"
            name="Premium Anniversary Decoration"
            description="An upgraded anniversary setup with a premium artificial flower arch, draped cloth backdrop, fresh floral accents and ambient fairy lights — styled exactly like the reference photo."
            image="/9a913431-969c-4e55-998a-a7bba80c991b.webp"
            includes={["✓\nPremium chrome ballon arch\u00a0", "\u00a0\nCustomisable backdrop + neon sign light", "\n\n\u00a0Artificial flower accents + focus light\u00a0"]}
            rating={4.9}
            reviews={612}
            offer={<>₹4,499</>}
            original={<>₹5,999</>}
            discountPct={25}
            bestSeller={true}
          />
          <StaticPackageCard
            id="anniversary-decoration-luxury"
            name="Luxury Anniversary Decoration"
            description="A full luxury anniversary experience with a grand floral installation, sweetheart lounge corner, drapes, props and uplighters — recreated to match the photo."
            image="/b0418de5-2b26-48c7-bb26-a32effdfe487.webp"
            includes={["✓\nPastel balloon arch & customisable backdrop", "\n\n\u00a0 \u00a0Palm leaves and spot light / focus light\u00a0", "✓\nNumber led light & flower stand\u00a0"]}
            rating={4.8}
            reviews={847}
            offer={<>₹9,999</>}
            original={<>₹14,999</>}
            discountPct={33}
            bestSeller={false}
          />
          {ALL_NEW_ANNIV.map((p) => (
            <StaticPackageCard
              key={p.id}
              id={p.id}
              name={p.name}
              description={p.desc}
              image={p.img}
              includes={p.inc}
              rating={p.rt}
              reviews={p.rv}
              offer={<>₹{p.sp.toLocaleString("en-IN")}</>}
              original={<>₹{p.mrp.toLocaleString("en-IN")}</>}
              discountPct={p.off}
              bestSeller={(p as { best?: boolean }).best}
            />
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Gallery" title="Anniversary Decoration Gallery" subtitle="Real setups by our decor team." />
          <div className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-3">
            <img src="/745b9998-0fb1-4a81-a2cf-6f3870657562.jpg" alt="Anniversary Decoration 1" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src="/9a913431-969c-4e55-998a-a7bba80c991b.webp" alt="Anniversary Decoration 2" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src="/b0418de5-2b26-48c7-bb26-a32effdfe487.webp" alt="Anniversary Decoration 3" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src="/f509339e-766d-4a5d-9ced-5167e8717f52.jpg" alt="Anniversary Decoration 4" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src="/71f437ab-4685-46d6-a645-79a6d4757424.jpg" alt="Anniversary Decoration 5" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src="/36260f0d-da30-4ba0-aa88-bac67d178bed.webp" alt="Anniversary Decoration 6" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src="/4665153c-3e8b-4ba8-9a93-f357082df038.jpg" alt="Anniversary Decoration 7" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src="/54013206-8c95-465c-a4ad-05daa25f6a56.jpg" alt="Anniversary Decoration 8" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            {ALL_NEW_ANNIV.map((p) => (
              <img key={p.id} src={p.img} alt={p.name} loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
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
          <SectionHeader eyebrow="FAQs" title="Anniversary Decoration FAQs" />
          <div className="mt-8"><Faq items={c.faqs} /></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Available In" title="Anniversary Decoration in Your City" />
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {BRAND.cities.map((city) => (
            <Link
              key={city}
              to="/city/$slug"
              params={{ slug: city.toLowerCase() }}
              className="rounded-xl border bg-card p-3 text-center text-sm hover:border-primary hover:text-primary"
            >
              Anniversary in {city}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
