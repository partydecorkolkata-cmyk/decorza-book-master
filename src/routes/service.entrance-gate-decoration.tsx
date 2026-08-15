import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Phone, CalendarCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/site/SectionHeader";
import { ReviewCard } from "@/components/site/ReviewCard";
import { Faq } from "@/components/site/Faq";
import { StaticPackageCard } from "@/components/site/StaticPackageCard";
import { BRAND, waLink, waBookingMessage } from "@/lib/brand";
import { categoryBySlug } from "@/lib/data";
import gateA1 from "@/assets/gate-a1.jpeg.asset.json";
import gateA2 from "@/assets/gate-a2.jpeg.asset.json";
import gateA3 from "@/assets/gate-a3.png.asset.json";
import gateA4 from "@/assets/gate-a4.jpeg.asset.json";
import gateA5 from "@/assets/gate-a5.jpeg.asset.json";
import gateA6 from "@/assets/gate-a6.jpeg.asset.json";
import gateA7 from "@/assets/gate-a7.jpeg.asset.json";
import gateA8 from "@/assets/gate-a8.jpeg.asset.json";
import gateA9 from "@/assets/gate-a9.jpeg.asset.json";
import gateA10 from "@/assets/gate-a10.jpeg.asset.json";
import gateC1 from "@/assets/gate-c1.jpeg.asset.json";
import gateC2 from "@/assets/gate-c2.jpeg.asset.json";
import gateC3 from "@/assets/gate-c3.jpeg.asset.json";
import gateC4 from "@/assets/gate-c4.jpeg.asset.json";
import gateC5 from "@/assets/gate-c5.jpeg.asset.json";
import gateC6 from "@/assets/gate-c6.jpeg.asset.json";
import gateC7 from "@/assets/gate-c7.jpeg.asset.json";
import gateC8 from "@/assets/gate-c8.jpeg.asset.json";
import gateC9 from "@/assets/gate-c9.jpeg.asset.json";
import gateC10 from "@/assets/gate-c10.jpeg.asset.json";

export const Route = createFileRoute("/service/entrance-gate-decoration")({
  loader: () => {
    const c = categoryBySlug("entrance-gate-decoration");
    if (!c) throw notFound();
    return { category: c };
  },
  head: () => ({
    meta: [
      { title: "Entrance Gate Decoration in India | From ₹1,999 | Decorza Events" },
      { name: "description", content: "Balloon gate arches, marigold torans, floral pillars and welcome pathways for weddings, birthdays and housewarmings. Book on WhatsApp." },
      { property: "og:title", content: "Entrance Gate Decoration | Decorza Events" },
      { property: "og:description", content: "Grand welcome gates, balloon arches and floral entrances starting at ₹1,999." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://decorza-book-master.lovable.app/service/entrance-gate-decoration" }],
  }),
  component: ServicePage,
});

const CARDS = [
  {
    id: "entrance-gate-decoration-essential",
    name: "Essential Balloon Entrance Gate",
    description: "A bold red and gold spiral balloon arch built around your main doorway — a bright, festive welcome for birthdays, shop openings and family functions.",
    image: gateA1.url,
    includes: ["Red & gold spiral balloon arch", "Sturdy frame with weighted base", "Doorway fitting & on-site setup"],
    rating: 4.7,
    reviews: 312,
    offer: "₹1,999",
    original: "₹3,499",
    discountPct: 43,
    bestSeller: false,
  },
  {
    id: "entrance-gate-decoration-premium",
    name: "Premium Pastel Organic Gate Arch",
    description: "An organic pastel balloon garland arch in peach, mint and olive with matching balloon pillars and a welcome board easel — perfect for kids' birthdays and theme parties.",
    image: gateA2.url,
    includes: ["Organic pastel garland arch", "2 matching balloon pillars", "Welcome board easel styling", "Ceiling balloon accents"],
    rating: 4.9,
    reviews: 486,
    offer: "₹2,999",
    original: "₹4,999",
    discountPct: 40,
    bestSeller: true,
  },
  {
    id: "entrance-gate-decoration-luxury",
    name: "Luxury Black & Gold Star Welcome Gate",
    description: "A dramatic black, gold and chrome balloon gate with jumbo orbs, gold star and burst foils framing your entrance — a premium red-carpet-style arrival moment.",
    image: gateA3.url,
    includes: ["Black, gold & chrome balloon arch", "Jumbo mirror orb balloons", "Gold star & burst foil accents", "Full doorway framing installation"],
    rating: 4.9,
    reviews: 268,
    offer: "₹3,499",
    original: "₹4,999",
    discountPct: 30,
    bestSeller: false,
  },
];

const BATCH_B = [
  {
    id: "gate-b1",
    name: "Blue & Yellow Baby Boy Welcome Gate",
    description: "A cheerful blue and yellow classic balloon arch at the main gate with character foil balloons, a pram foil and matching balloon pillars along the walkway.",
    image: gateA4.url,
    includes: ["Blue & yellow classic balloon arch", "Cartoon character foil balloons", "'It's a Boy' pram foil", "4 balloon pillars along the path"],
    rating: 4.8,
    reviews: 214,
    offer: "₹2,999",
    original: "₹4,499",
    discountPct: 33,
    bestSeller: false,
  },
  {
    id: "gate-b2",
    name: "Baby Girl Pink & White Gate Arch",
    description: "A dense pink and white balloon gate topped with silver 'BABY GIRL' foil letters, princess foil balloons and pink balloon flower clusters at the base.",
    image: gateA5.url,
    includes: ["Pink & white balloon gate arch", "'BABY GIRL' silver foil letters", "Princess & 'It's a Girl' foils", "Balloon flower clusters & pillars"],
    rating: 4.9,
    reviews: 331,
    offer: "₹3,499",
    original: "₹4,999",
    discountPct: 30,
    bestSeller: true,
  },
  {
    id: "gate-b3",
    name: "Baby Boy Blue & White Grand Gate",
    description: "A royal blue and white balloon arch across the porch with 'BABY BOY' foil letters, a gold crown foil, star balloons and baby-themed foil accents.",
    image: gateA6.url,
    includes: ["Blue & white balloon gate arch", "'BABY BOY' foil letters", "Gold crown & blue star foils", "Baby pram foil & side pillars"],
    rating: 4.8,
    reviews: 276,
    offer: "₹3,499",
    original: "₹4,999",
    discountPct: 30,
    bestSeller: false,
  },
  {
    id: "gate-b4",
    name: "Pink & Silver Chrome Welcome Gate",
    description: "A grand pink, blush and silver chrome balloon arch spanning the entrance with cartoon foil balloons and tall twin balloon pillars lining the walkway.",
    image: gateA7.url,
    includes: ["Pink, blush & silver chrome arch", "Cartoon character foil balloons", "4 tall balloon pillars", "Entrance walkway styling"],
    rating: 4.9,
    reviews: 189,
    offer: "₹3,499",
    original: "₹4,999",
    discountPct: 30,
    bestSeller: false,
  },
  {
    id: "gate-b5",
    name: "Purple & White Classic Gate Arch",
    description: "A neat metallic purple and white spiral balloon arch on a free-standing frame — ideal for shop launches, office events and inaugurations.",
    image: gateA8.url,
    includes: ["Purple & white spiral balloon arch", "Free-standing frame with base plates", "Metallic finish balloons", "On-site setup"],
    rating: 4.7,
    reviews: 158,
    offer: "₹1,999",
    original: "₹3,499",
    discountPct: 43,
    bestSeller: false,
  },
  {
    id: "gate-b6",
    name: "Black, Gold & White Organic Gate",
    description: "A chic organic garland arch in chrome gold, black and white wrapping the doorway — an elegant welcome for milestone birthdays and corporate evenings.",
    image: gateA9.url,
    includes: ["Chrome gold, black & white garland", "Organic cluster styling", "Full doorway wrap installation", "Weighted base columns"],
    rating: 4.8,
    reviews: 242,
    offer: "₹2,499",
    original: "₹3,499",
    discountPct: 29,
    bestSeller: false,
  },
  {
    id: "gate-b7",
    name: "Pastel Butterfly Garden Gate Arch",
    description: "A dreamy pastel balloon arch in lilac, blue, pink and yellow with butterfly and flower cut-outs, bubble balloons and a photo welcome board on an easel.",
    image: gateA10.url,
    includes: ["Pastel organic balloon arch", "Butterfly & flower cut-outs", "Clear bubble balloon accents", "Welcome photo board easel"],
    rating: 4.9,
    reviews: 305,
    offer: "₹3,499",
    original: "₹4,999",
    discountPct: 30,
    bestSeller: false,
  },
];

const BATCH_C = [
  {
    id: "gate-c1",
    name: "Purple & Pink Fairy Theme Welcome Gate",
    description: "A lavish purple, lilac and pink balloon gate framing the venue entrance with silver starburst foils, fairy character cut-outs and a 'Welcome' banner — made for princess and fairy theme birthdays.",
    image: gateC1.url,
    includes: ["Purple, lilac & pink balloon gate", "Silver starburst foil accents", "Fairy character cut-outs", "'Welcome' banner & side balloon stands"],
    rating: 4.9, reviews: 274, offer: "₹3,999", original: "₹5,499", discountPct: 27, bestSeller: true,
  },
  {
    id: "gate-c2",
    name: "Pastel & Rose Gold Chrome Arch Gate",
    description: "A tall pastel pink and lilac arch mixed with rose gold chrome balloons over the banquet doorway, paired with matching balloon pillars — elegant for first birthdays and naming ceremonies.",
    image: gateC2.url,
    includes: ["Pastel pink & lilac balloon arch", "Rose gold chrome balloon clusters", "2 matching balloon pillars", "Doorway frame installation"],
    rating: 4.8, reviews: 231, offer: "₹3,499", original: "₹4,999", discountPct: 30, bestSeller: false,
  },
  {
    id: "gate-c3",
    name: "Black & Gold Spiral Staircase Arch",
    description: "A striking black and gold spiral balloon arch built over a staircase or hall entry — a smart, dramatic look for milestone birthdays, farewells and corporate nights.",
    image: gateC3.url,
    includes: ["Black & gold spiral balloon arch", "Free-standing weighted frame", "Metallic gold balloon finish", "On-site setup & dismantling"],
    rating: 4.7, reviews: 168, offer: "₹1,999", original: "₹3,499", discountPct: 43, bestSeller: false,
  },
  {
    id: "gate-c4",
    name: "Black & Yellow Grand Hall Arch",
    description: "A wide black and yellow-gold spiral balloon arch spanning the hall aisle, built on a strong free-standing frame — ideal for school functions, award nights and stage entries.",
    image: gateC4.url,
    includes: ["Black & yellow spiral balloon arch", "Wide free-standing frame", "Aisle or stage entry placement", "Complete setup by our team"],
    rating: 4.7, reviews: 142, offer: "₹1,999", original: "₹3,499", discountPct: 43, bestSeller: false,
  },
  {
    id: "gate-c5",
    name: "Red & White Classic Shop Opening Arch",
    description: "A crisp red and white classic spiral balloon arch on twin stands — the go-to welcome gate for shop launches, inaugurations and grand opening promotions.",
    image: gateC5.url,
    includes: ["Red & white spiral balloon arch", "Twin stands with weighted bases", "Storefront-width sizing", "Quick on-site installation"],
    rating: 4.6, reviews: 196, offer: "₹1,999", original: "₹3,499", discountPct: 43, bestSeller: false,
  },
  {
    id: "gate-c6",
    name: "Multicolour Rainbow Welcome Gate",
    description: "A cheerful multicolour balloon gate in blue, purple, white, pink and peach at the venue entrance, finished with a photo welcome board on a decorated easel.",
    image: gateC6.url,
    includes: ["Multicolour classic balloon gate", "Colour-block balloon pillars", "Photo welcome board easel styling", "Entrance fitting & setup"],
    rating: 4.8, reviews: 203, offer: "₹2,999", original: "₹4,499", discountPct: 33, bestSeller: false,
  },
  {
    id: "gate-c7",
    name: "Blue & White Cloud Theme Entrance Arch",
    description: "A soft blue, white and silver organic balloon arch around the main door with chrome accents and a photo welcome board — a lovely fit for hot air balloon and cloud theme birthdays.",
    image: gateC7.url,
    includes: ["Blue, white & silver organic arch", "Chrome balloon accents", "Photo welcome board easel", "Doorway wrap installation"],
    rating: 4.8, reviews: 217, offer: "₹2,999", original: "₹4,499", discountPct: 33, bestSeller: false,
  },
  {
    id: "gate-c8",
    name: "Gold & White Grand Opening Gate",
    description: "A premium chrome gold and white spiral balloon arch framing your shutter or shopfront — a bright, classy welcome for inaugurations and housewarmings.",
    image: gateC8.url,
    includes: ["Chrome gold & white spiral arch", "Full doorway framing", "Weighted base supports", "On-site setup"],
    rating: 4.7, reviews: 184, offer: "₹1,999", original: "₹3,499", discountPct: 43, bestSeller: false,
  },
  {
    id: "gate-c9",
    name: "Royal Blue Baby Boy Grand Gate",
    description: "A grand blue and white organic balloon gate with 'BABY BOY' letter balloons, silver orb and star foils and teddy cut-outs guarding the pathway — a show-stopping welcome for naming ceremonies.",
    image: gateC9.url,
    includes: ["Blue & white organic balloon gate", "'BABY BOY' letter balloons", "Silver orb & star foil accents", "Teddy cut-outs & pathway clusters"],
    rating: 4.9, reviews: 258, offer: "₹4,499", original: "₹5,999", discountPct: 25, bestSeller: true,
  },
  {
    id: "gate-c10",
    name: "Signature Black, Gold & White Organic Gate",
    description: "Our signature organic balloon gate in black, chrome gold and white cascading over a double doorway — an understated, luxurious welcome for anniversaries, receptions and corporate galas.",
    image: gateC10.url,
    includes: ["Black, gold & white organic garland", "Jumbo & chrome balloon mix", "Double-door full frame wrap", "Weighted base columns & setup"],
    rating: 4.9, reviews: 291, offer: "₹3,499", original: "₹4,999", discountPct: 30, bestSeller: false,
  },
];

const BATCH_D = [
  {
    id: "gate-d1",
    name: "Red, White & Silver Chrome Tower Gate",
    description: "A bold red, white and silver chrome organic balloon arch built as twin towers over the hall doorway — a high-impact welcome for birthdays, receptions and corporate events.",
    image: gateD1.url,
    includes: ["Red, white & silver chrome organic garland", "Twin balloon tower columns", "Jumbo & cluster balloon mix", "Full doorway span with setup"],
    rating: 4.9, reviews: 246, offer: "₹3,499", original: "₹4,999", discountPct: 30, bestSeller: true,
  },
  {
    id: "gate-d2",
    name: "Black & Gold Classic Pillar Arch",
    description: "A tall classic black and gold spiral balloon arch on twin pillars framing the main lobby entrance — sharp, formal and perfect for milestone birthdays and office celebrations.",
    image: gateD2.url,
    includes: ["Black & gold classic spiral arch", "Twin balloon pillars with bases", "Full-height lobby sizing", "On-site setup & dismantling"],
    rating: 4.8, reviews: 189, offer: "₹2,199", original: "₹3,499", discountPct: 37, bestSeller: false,
  },
  {
    id: "gate-d3",
    name: "Gold & Silver Chrome Luxe Gate",
    description: "A luxe chrome gold and silver balloon arch over the corridor entry, mixing jumbo and small metallic balloons for a rich mirror-finish welcome at parties and hotel events.",
    image: gateD3.url,
    includes: ["Chrome gold & silver balloon arch", "Jumbo metallic balloon accents", "Corridor / doorway full frame", "Weighted base supports"],
    rating: 4.8, reviews: 212, offer: "₹2,999", original: "₹4,999", discountPct: 40, bestSeller: false,
  },
  {
    id: "gate-d4",
    name: "Rose Gold & Champagne Storefront Arch",
    description: "A glossy rose gold and champagne chrome balloon arch framing a glass shopfront — an elegant grand-opening welcome that photographs beautifully in daylight.",
    image: gateD4.url,
    includes: ["Rose gold & champagne chrome arch", "Full storefront doorway framing", "Cluster & jumbo balloon mix", "Weighted stands with setup"],
    rating: 4.8, reviews: 174, offer: "₹2,799", original: "₹4,499", discountPct: 38, bestSeller: false,
  },
  {
    id: "gate-d5",
    name: "Blue, Navy & Silver Organic Gate",
    description: "A square-framed organic balloon gate in baby blue, navy and silver chrome wrapping the doorway with blossom accents — a favourite for baby boy welcomes and naming ceremonies.",
    image: gateD5.url,
    includes: ["Blue, navy & silver organic garland", "Square doorway frame wrap", "Chrome & pastel balloon mix", "Complete on-site installation"],
    rating: 4.8, reviews: 198, offer: "₹2,499", original: "₹4,499", discountPct: 44, bestSeller: false,
  },
  {
    id: "gate-d6",
    name: "Green & Gold Starburst Celebration Arch",
    description: "A vibrant green, white and gold organic balloon arch studded with large gold starburst foils — a spirited entry for school events, sports nights and festive functions.",
    image: gateD6.url,
    includes: ["Green, white & gold organic arch", "Large gold starburst foil balloons", "Free-standing weighted frame", "Setup & dismantling included"],
    rating: 4.8, reviews: 163, offer: "₹3,199", original: "₹4,999", discountPct: 36, bestSeller: false,
  },
  {
    id: "gate-d7",
    name: "Black, Gold & Ivory Boutique Gate",
    description: "A designer organic balloon gate in black, chrome gold and ivory cascading around the entry door — refined styling for boutique launches, anniversaries and elegant house parties.",
    image: gateD7.url,
    includes: ["Black, gold & ivory organic garland", "Asymmetric designer cascade", "Doorway full frame wrap", "On-site professional setup"],
    rating: 4.9, reviews: 221, offer: "₹2,999", original: "₹4,499", discountPct: 33, bestSeller: false,
  },
  {
    id: "gate-d8",
    name: "Jungle Safari Grand Entrance Gate",
    description: "A grand jungle safari gate with a giraffe face centrepiece, animal print balloons, character cut-outs, white picket fencing and a lit welcome frame — a complete themed entry experience.",
    image: gateD8.url,
    includes: ["Safari theme balloon gate with giraffe centrepiece", "Animal print & jungle colour balloons", "Character cut-out standees", "White picket fencing & lit welcome frame"],
    rating: 4.9, reviews: 287, offer: "₹4,999", original: "₹7,999", discountPct: 38, bestSeller: true,
  },
  {
    id: "gate-d9",
    name: "Rainbow Kids Party Balloon Gate",
    description: "A bright green, blue and yellow classic balloon arch over the banquet doorway with matching flower balloon pillars along the walkway — pure fun for kids' birthdays.",
    image: gateD9.url,
    includes: ["Green, blue & yellow classic arch", "Matching balloon pillars", "Flower balloon walkway accents", "Venue entrance installation"],
    rating: 4.7, reviews: 209, offer: "₹1,999", original: "₹3,499", discountPct: 43, bestSeller: false,
  },
  {
    id: "gate-d10",
    name: "Purple & Gold Royal Square Gate",
    description: "A royal purple, lilac and chrome gold organic balloon gate built as a square frame around the entrance doors — a rich, premium welcome for salon launches and grand celebrations.",
    image: gateD10.url,
    includes: ["Purple, lilac & gold organic garland", "Square doorway frame styling", "Chrome gold balloon clusters", "Full setup & dismantling"],
    rating: 4.9, reviews: 234, offer: "₹2,499", original: "₹4,499", discountPct: 44, bestSeller: false,
  },
];

const GALLERY = [
  gateC10.url,
  gateD1.url,
  gateD2.url,
  gateD3.url,
  gateD4.url,
  gateD5.url,
  gateD6.url,
  gateD7.url,
  gateD8.url,
  gateD9.url,
  gateD10.url,

  gateC1.url,
  gateC2.url,
  gateC3.url,
  gateC4.url,
  gateC5.url,
  gateC6.url,
  gateC7.url,
  gateC8.url,
  gateC9.url,
  gateA1.url,
  gateA2.url,
  gateA3.url,
  gateA4.url,
  gateA5.url,
  gateA6.url,
  gateA7.url,
  gateA8.url,
  gateA9.url,
  gateA10.url,
  "/images/balloon-decoration-hero-v2.jpg",
  "/75e0da81-49b9-4d14-b41f-16c2c0751359.jpg",
  "/1e631830-5a03-4c62-9230-c36bba689802.png",
  "/ddbbe21d-b302-41b1-b540-d96886f6934a.jpg",
];

const GATE_REVIEWS: [string, string, string, string, number][] = [
  ["Ankita Mohanty", "Bhubaneswar", "Entrance Gate Decoration", "The purple fairy theme gate was the first thing every guest photographed. Team reached 3 hours early and finished neatly.", 5],
  ["Rahul Sethi", "Cuttack", "Entrance Gate Decoration", "Booked the gold and white arch for our shop opening. Looked premium in every photo and the price was very fair.", 5],
  ["Sneha Patnaik", "Puri", "Entrance Gate Decoration", "Blue baby boy gate for our son's naming ceremony — the teddy cut-outs and letter balloons were exactly like the picture.", 5],
  ["Debasish Nayak", "Rourkela", "Entrance Gate Decoration", "Black and gold organic gate at the banquet door. Guests kept clicking selfies there the whole evening.", 5],
  ["Priyanka Das", "Bhubaneswar", "Entrance Gate Decoration", "Very responsive on WhatsApp, shared design options within minutes and set up the pastel arch beautifully.", 5],
  ["Manoj Behera", "Berhampur", "Entrance Gate Decoration", "Red and white arch for our showroom inauguration. Balloons stayed perfect the entire day in the sun.", 4],
  ["Ritu Agarwal", "Sambalpur", "Entrance Gate Decoration", "The cloud theme entrance with the welcome board made my daughter's first birthday entry so special.", 5],
  ["Sourav Mishra", "Balasore", "Entrance Gate Decoration", "Staircase arch in black and gold for my 30th. Neat frame, no mess, and they cleared everything after the party.", 5],
  ["Jyoti Rani Sahu", "Angul", "Entrance Gate Decoration", "Multicolour welcome gate looked so cheerful. Reasonable pricing and the team was polite and punctual.", 5],
  ["Amit Kumar Jena", "Jajpur", "Entrance Gate Decoration", "Ordered last minute for a housewarming and they still delivered a lovely gold arch on time. Highly recommended.", 5],
];

function ServicePage() {
  const { category: c } = Route.useLoaderData();
  const wa = waLink(waBookingMessage({ packageName: "Entrance Gate Decoration" }));
  const displayReviews = GATE_REVIEWS;

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={c.hero} alt="Entrance Gate Decoration" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.2_0.08_305)]/90 to-[oklch(0.32_0.13_5)]/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
          <Badge className="bg-white/10 backdrop-blur border border-white/20 text-white">
            <Star className="mr-1 h-3 w-3 fill-gold text-gold" /> 4.8 · 460 reviews
          </Badge>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl">Entrance Gate Decoration</h1>
          <p className="mt-4 max-w-2xl text-white/85">
            Balloon gate arches, marigold torans, floral pillars and welcome pathways — the first wow moment of your celebration.
          </p>
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
        <SectionHeader eyebrow="Packages" title="Entrance Gate Decoration Packages" subtitle="Pick from Essential, Premium and Luxury — or customise on WhatsApp." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[...CARDS, ...BATCH_B, ...BATCH_C].map((p) => (
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
              bestSeller={p.bestSeller}
            />
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Gallery" title="Entrance Gate Decoration Gallery" subtitle="Real setups by our decor team." />
          <div className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {GALLERY.map((src, i) => (
              <img key={src + i} src={src} alt={`Entrance Gate Decoration ${i + 1}`} loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
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
          <SectionHeader eyebrow="FAQs" title="Entrance Gate Decoration FAQs" />
          <div className="mt-8"><Faq items={c.faqs} /></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Available In" title="Entrance Gate Decoration in Your City" />
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {BRAND.cities.map((city) => (
            <Link
              key={city}
              to="/city/$slug"
              params={{ slug: city.toLowerCase() }}
              className="rounded-xl border bg-card p-3 text-center text-sm hover:border-primary hover:text-primary"
            >
              Gate Decor in {city}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
