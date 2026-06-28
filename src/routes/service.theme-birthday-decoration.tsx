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
          {[...NEW_THEME_CARDS, ...NEW_THEME_CARDS_B].map((p) => (
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
            {NEW_THEME_CARDS.map((p, i) => (
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
