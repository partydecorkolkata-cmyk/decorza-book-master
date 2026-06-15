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
  { id: "anniversary-c2-red-love-rooftop", img: annivC2.url, name: "Rooftop Red Love Heart Surprise", desc: "Romantic rooftop setup with twin sheer drape backdrop, fairy lights, red 'love' foil, heart-shaped balloon bouquets, gold 'Happy Anniversary' banner and a rose-petal heart table — straight from the photo.", mrp: 4999, sp: 2499, off: 50, inc: ["✓\nSheer drape + fairy lights", "✓\nRed 'love' foil & heart balloons", "✓\nRose petal heart table + banner"], rt: 4.9, rv: 391 },
  { id: "anniversary-c3-25-gold-black", img: annivC3.url, name: "25th Gold & Black Garland Arch", desc: "Luxurious 25th anniversary corner with a black, gold & chrome balloon garland arch, glowing 'Happy Anniversary' neon and a giant marquee '25' light number — exactly like the picture.", mrp: 4999, sp: 3499, off: 30, inc: ["✓\nBlack, gold & chrome garland arch", "✓\nHappy Anniversary neon sign", "✓\nGiant marquee '25' light number"], rt: 4.9, rv: 456 },
  { id: "anniversary-c4-25-silver-white-ring", img: annivC4.url, name: "25th Silver & White Ring Arch", desc: "Elegant white & chrome silver ring balloon arch with a silver 'Happy Anniversary' cut-out, silver flower clusters and giant silver '25' foil numbers — recreated like the reference photo.", mrp: 3999, sp: 2499, off: 38, inc: ["✓\nWhite & chrome silver ring arch", "✓\nSilver 'Happy Anniversary' cut-out", "✓\nGiant silver '25' foil numbers"], rt: 4.8, rv: 312 },
  { id: "anniversary-c5-25-rosegold-white-ring", img: annivC5.url, name: "25th Rose-Gold & Ivory Ring Arch", desc: "Stunning ring backdrop loaded with ivory, white and chrome rose-gold balloons, a glowing 'Happy Anniversary' neon sign and giant rose-gold '25' foil numbers — exactly like the picture.", mrp: 4499, sp: 2999, off: 33, inc: ["✓\nIvory & rose-gold ring arch", "✓\nHappy Anniversary neon sign", "✓\nGiant rose-gold '25' foil numbers"], rt: 4.9, rv: 358 },
  { id: "anniversary-c6-33-pink-gold-silver", img: annivC6.url, name: "33rd Pink, Gold & Silver Ring", desc: "Personalised milestone ring arch with pink, white, gold and silver chrome balloons, a glowing 'Happy Anniversary' tree neon sign and gold '33' foil numbers — styled like the reference.", mrp: 4499, sp: 2999, off: 33, inc: ["✓\nPink, gold & silver ring arch", "✓\nGolden 'Happy Anniversary' neon", "✓\nCustom foil number setup"], rt: 4.8, rv: 246 },
  { id: "anniversary-c7-red-silver-foil", img: annivC7.url, name: "Red & Silver HAPPY ANNIVERSARY Foil", desc: "Budget-friendly anniversary backdrop with red foil curtain, twin red & silver balloon pillars, big silver 'HAPPY ANNIVERSARY' foil letters, gold star and custom number foil — recreated like the picture.", mrp: 2999, sp: 2199, off: 27, inc: ["✓\nRed foil curtain + silver letters", "✓\nTwin red & silver balloon pillars", "✓\nGold star & custom foil number"], rt: 4.6, rv: 189 },
  { id: "anniversary-c8-25-gold-canopy-love", img: annivC8.url, name: "25th Gold Canopy & LOVE Marquee", desc: "Romantic fairy-light tent canopy with a glowing 'Happy Anniversary' neon, gold '25' foil numbers, marquee 'LOVE' lights, gold & black balloon arch and a candle-rose petal floor — straight from the photo.", mrp: 4999, sp: 3499, off: 30, inc: ["✓\nFairy-light tent canopy + neon", "✓\nMarquee 'LOVE' & '25' foil numbers", "✓\nGold-black arch + candle petals"], rt: 4.9, rv: 423 },
  { id: "anniversary-c9-gold-ring-drape-floral", img: annivC9.url, name: "Gold Ring Drape & Fresh Floral Arch", desc: "Premium gold metal ring arch with a sheer white drape, glowing 'Happy Anniversary' neon, twin fresh peach floral & palm leaf clusters and a curtain of fairy lights — recreated exactly like the picture.", mrp: 5999, sp: 4499, off: 25, inc: ["✓\nGold ring arch + sheer drape", "✓\nFresh peach floral & palm clusters", "✓\nFairy-light curtain + neon sign"], rt: 4.9, rv: 487 },
  { id: "anniversary-c10-25-marquee-rosegold-tufted", img: annivC10.url, name: "25th Rose-Gold Tufted Frame Setup", desc: "Luxe anniversary setup against a tufted headboard with a white, grey & rose-gold organic balloon garland on a gold ring, fairy-light curtain, 'Happy Anniversary' neon and giant marquee '25' light numbers — like the reference.", mrp: 4999, sp: 3499, off: 30, inc: ["✓\nOrganic garland on gold ring", "✓\nFairy-light curtain + neon sign", "✓\nGiant marquee '25' light numbers"], rt: 4.9, rv: 365 },
];

const ALL_NEW_ANNIV = [...NEW_ANNIV_CARDS, ...NEW_ANNIV_CARDS_B, ...NEW_ANNIV_CARDS_C];

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
          <p className="mt-4 font-display text-2xl text-gold">Starting from ₹1,499</p>
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
