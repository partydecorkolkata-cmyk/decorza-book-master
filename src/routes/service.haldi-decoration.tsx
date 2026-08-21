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
import haldiN1 from "@/assets/haldi-n1.jpg.asset.json";
import haldiN2 from "@/assets/haldi-n2.png.asset.json";
import haldiN3 from "@/assets/haldi-n3.jpg.asset.json";
import haldiN4 from "@/assets/haldi-n4.jpg.asset.json";
import haldiN5 from "@/assets/haldi-n5.jpg.asset.json";
import haldiN6 from "@/assets/haldi-n6.jpg.asset.json";
import haldiN7 from "@/assets/haldi-n7.jpg.asset.json";
import haldiN8 from "@/assets/haldi-n8.jpg.asset.json";
import haldiP1 from "@/assets/haldi-p1.jpg.asset.json";
import haldiP2 from "@/assets/haldi-p2.jpg.asset.json";
import haldiP3 from "@/assets/haldi-p3.jpg.asset.json";
import haldiP4 from "@/assets/haldi-p4.jpg.asset.json";
import haldiP5 from "@/assets/haldi-p5.jpg.asset.json";
import haldiP6 from "@/assets/haldi-p6.jpg.asset.json";
import haldiP7 from "@/assets/haldi-p7.jpg.asset.json";
import haldiP8 from "@/assets/haldi-p8.jpg.asset.json";
import haldiP9 from "@/assets/haldi-p9.jpg.asset.json";
import haldiP10 from "@/assets/haldi-p10.jpg.asset.json";

const BATCH_P = [
  {
    id: "haldi-decoration-p1",
    name: "Golden Glow Haldi Ring Backdrop",
    description:
      "An indoor haldi corner with a yellow and ivory shimmer drape wall, a full yellow-white rose ring, warm fairy-light curtains, a glowing 'Haldi' neon and a carved yellow urli with a traditional low stool.",
    image: haldiP1.url,
    includes: ["Yellow & ivory shimmer drape wall", "Yellow-white rose ring arch with greens", "Fairy-light curtain layering", "Haldi neon sign", "Carved yellow urli styling"],
    rating: 4.9,
    reviews: 176,
    original: 14999,
    offer: 9999,
  },
  {
    id: "haldi-decoration-p2",
    name: "Sunflower Multicolour Haldi Stage",
    description:
      "A rich multicolour pleated drape wall in pink, green, orange and yellow with a heavy sunflower and rose top row, corner floral cascades, hanging rangoli discs with red tassels and a glowing 'Haldi' neon.",
    image: haldiP2.url,
    includes: ["Multicolour pleated drape wall", "Sunflower & rose top row with corner cascades", "Hanging rangoli discs and red tassels", "Fairy-light backlighting", "Haldi neon sign"],
    rating: 4.8,
    reviews: 148,
    original: 12999,
    offer: 8499,
  },
  {
    id: "haldi-decoration-p3",
    name: "Rajasthani Umbrella Haldi Setup",
    description:
      "A bright outdoor setup with pink, purple and yellow drape panels crowned by five embroidered Rajasthani umbrellas, colourful gota hangings with bells, marigold-draped brass matkas and a yellow frilled ceremony table.",
    image: haldiP3.url,
    includes: ["Pink, purple & yellow drape panels", "Five embroidered Rajasthani umbrellas", "Colourful gota hangings with bells & tassels", "Marigold-draped brass matkas on stands", "Yellow frilled ceremony table"],
    rating: 4.8,
    reviews: 139,
    original: 11999,
    offer: 7999,
  },
  {
    id: "haldi-decoration-p4",
    name: "Yellow Rose Canopy Haldi Mandap",
    description:
      "A grand outdoor haldi canopy with a dense yellow rose top frame, swooping yellow net drapes, pink gota diamond hangings with floral tassels, decorative umbrellas and a golden urli with a wooden ceremony crate.",
    image: haldiP4.url,
    includes: ["Dense yellow rose canopy frame", "Swooping yellow net drape backdrop", "Pink gota diamond hangings with tassels", "Decorative yellow & green umbrellas", "Golden urli with wooden ceremony crate"],
    rating: 5,
    reviews: 192,
    original: 19999,
    offer: 14999,
  },
  {
    id: "haldi-decoration-p5",
    name: "Marigold Basket Haldi Backdrop",
    description:
      "A warm indoor haldi frame with a criss-cross wooden lattice centre, sunflower and marigold floral pillars, hanging genda phool strings with cane flower baskets, ivory-orange ceiling drapes and a golden haldi urli.",
    image: haldiP5.url,
    includes: ["Criss-cross wooden lattice centre panel", "Sunflower & marigold floral frame", "Hanging genda strings with cane flower baskets", "Ivory-orange ceiling drape layering", "Golden urli with marigold border"],
    rating: 4.9,
    reviews: 164,
    original: 19999,
    offer: 14999,
  },
  {
    id: "haldi-decoration-p6",
    name: "Grand Genda Phool Haldi Mandap",
    description:
      "A festive open-air haldi mandap with yellow and pink curtain layers, a green centre drape, a lush marigold-rose top valance, hanging phool latkans with rangoli discs, colourful umbrellas, brass matkas and a floral floor ring.",
    image: haldiP6.url,
    includes: ["Yellow-pink curtain layering with green centre", "Marigold & rose top valance", "Hanging phool latkans and rangoli discs", "Colourful umbrellas with brass matkas", "Marigold floor ring and Haldi neon"],
    rating: 5,
    reviews: 205,
    original: 19999,
    offer: 14999,
  },
  {
    id: "haldi-decoration-p7",
    name: "Mehndi Tassel Haldi Backdrop",
    description:
      "An elegant indoor mehndi-haldi corner with pink, yellow, mint and white drape strips, a sunflower and hydrangea top row, yellow-pink cloth tassel hangings, marigold vertical strings, fairy lights, gold flower vases and a 'Mehndi' neon.",
    image: haldiP7.url,
    includes: ["Multi-tone drape strip backdrop", "Sunflower & hydrangea top row", "Yellow-pink cloth tassel hangings", "Marigold vertical strings with fairy lights", "Gold pedestal flower vases", "Mehndi neon sign"],
    rating: 4.9,
    reviews: 158,
    original: 17999,
    offer: 11999,
  },
  {
    id: "haldi-decoration-p8",
    name: "Marigold Curtain Haldi Frame",
    description:
      "A traditional haldi backdrop built from dense yellow and orange marigold curtain strings inside a mixed-flower and fern frame, warm fairy lights, a glowing 'Haldi' neon and a yellow floor sheet finish.",
    image: haldiP8.url,
    includes: ["Yellow & orange marigold curtain strings", "Mixed flower and fern frame border", "Warm fairy-light layering", "Haldi neon sign", "Yellow floor sheet styling"],
    rating: 4.8,
    reviews: 143,
    original: 14999,
    offer: 9999,
  },
  {
    id: "haldi-decoration-p9",
    name: "Gold Shimmer Haldi Ring Stage",
    description:
      "A luxe banquet haldi stage with gold shimmer and ivory drapes, a peach-cream rose ring arch, beaded gold latkans with tassels, twinkling fairy lights, a 'Haldi' neon and a gold sequin ceremony table.",
    image: haldiP9.url,
    includes: ["Gold shimmer & ivory drape wall", "Peach-cream rose ring arch", "Beaded gold latkans with tassels", "Fairy-light backlighting", "Haldi neon sign", "Gold sequin ceremony table setup"],
    rating: 5,
    reviews: 171,
    original: 12999,
    offer: 8499,
  },
  {
    id: "haldi-decoration-p10",
    name: "Ivory & Yellow Minimal Haldi Backdrop",
    description:
      "A clean pastel haldi backdrop with white sheer drapes, mustard-yellow side sashes, a full yellow-white rose top row, hanging marigold florets, brass urns with genda baskets and floral pedestals.",
    image: haldiP10.url,
    includes: ["White sheer drapes with mustard sashes", "Yellow & white rose top row", "Hanging marigold floret strings", "Brass urns with genda baskets", "Floral pedestal styling"],
    rating: 4.9,
    reviews: 152,
    original: 14999,
    offer: 9999,
  },
];



const NEW_PACKAGES = [
  {
    id: "haldi-decoration-royal-ring",
    name: "Grand Marigold Ring Haldi Backdrop",
    description:
      "A grand outdoor haldi stage with a giant yellow floral ring, sheer white drapes, a pink-purple flower valance, hanging marigold strings with pearl tassels and a golden haldi urli in front.",
    image: haldiN2.url,
    includes: ["Giant yellow floral ring backdrop", "White sheer drapes with pink flower valance", "Hanging marigold strings & pearl tassels", "Golden urli with vases and haldi lettering"],
    rating: 5,
    reviews: 168,
    original: 19999,
    offer: 14999,
  },
  {
    id: "haldi-decoration-grass-gate",
    name: "Green Grass Haldi & Mehendi Gate",
    description:
      "A vibrant entrance-style setup with a green grass panel centre, yellow gota drapes, deep green pleated pillars, a lush red-orange floral top row and colourful tassels.",
    image: haldiN3.url,
    includes: ["Artificial grass centre panel with name cut-out", "Yellow drapes with green pleated pillars", "Red & orange floral top row", "Hanging tassels and floral corner stands"],
    rating: 4.9,
    reviews: 142,
    original: 19999,
    offer: 14999,
  },
  {
    id: "haldi-decoration-dreamcatcher",
    name: "Dreamcatcher Haldi Backdrop",
    description:
      "A soft white draped backdrop styled with handmade dreamcatchers, a sunflower and rose corner arrangement, one bold yellow drape swag and mustard cushions for the ceremony seating.",
    image: haldiN4.url,
    includes: ["White & yellow draped backdrop", "Handmade dreamcatcher hangings", "Sunflower and mixed rose corner florals", "Yellow drape seating with cushions"],
    rating: 4.8,
    reviews: 121,
    original: 14999,
    offer: 9999,
  },
  {
    id: "haldi-decoration-pink-yellow-canopy",
    name: "Pink & Yellow Genda Canopy Haldi",
    description:
      "An open-air haldi canopy in bright pink, yellow and ivory drapes with hanging marigold and mogra strings, a white-yellow rose top cluster and a haldi thali corner setup.",
    image: haldiN5.url,
    includes: ["Pink, yellow & ivory drape canopy", "Hanging marigold and mogra strings", "White-yellow rose top floral cluster", "Draped platform with printed cushions & haldi thali table"],
    rating: 4.9,
    reviews: 196,
    original: 11999,
    offer: 8499,
  },
  {
    id: "haldi-decoration-sunflower-arch",
    name: "Sunflower Fairy-Light Haldi Arch",
    description:
      "An indoor haldi corner with a full sunflower and white rose arch, shimmer gold and yellow curtains, delicate fairy-light strings and mogra hangings for a warm glow.",
    image: haldiN6.url,
    includes: ["Sunflower & white rose arch", "Gold shimmer and yellow curtain backdrop", "Warm fairy-light and mogra strings", "Draped platform with cushions"],
    rating: 5,
    reviews: 154,
    original: 14999,
    offer: 9999,
  },
  {
    id: "haldi-decoration-umbrella-drape",
    name: "Rajasthani Umbrella Haldi-Mehendi Wall",
    description:
      "A festive green and yellow net drape wall topped with mixed roses, decorated with embroidered Rajasthani umbrellas, haldi-mehendi name cut-outs, a bright rangoli disc and bell hangings.",
    image: haldiN7.url,
    includes: ["Green & yellow net drape wall", "Rose top row with hanging vines", "Embroidered Rajasthani umbrellas", "Haldi-Mehendi name cut-outs, rangoli disc & bell strings"],
    rating: 4.8,
    reviews: 133,
    original: 14999,
    offer: 9999,
  },
  {
    id: "haldi-decoration-fiesta-stage",
    name: "Marigold Fiesta Haldi Stage",
    description:
      "A colourful haldi stage with orange, pink and yellow drapes, dense hanging genda phool strings, a full rose top row, fairy-lit ivory backdrop and fun photo-prop signage.",
    image: haldiN8.url,
    includes: ["Orange, pink & yellow drape frame", "Dense hanging marigold strings", "Mixed rose top row with floral pillars", "Fairy-lit ivory backdrop, haldi props & fun signage"],
    rating: 4.9,
    reviews: 187,
    original: 19999,
    offer: 14999,
  },
];

export const Route = createFileRoute("/service/haldi-decoration")({
  loader: () => {
    const c = categoryBySlug("haldi-decoration");
    if (!c) throw notFound();
    return { category: c };
  },
  head: () => ({
    meta: [
      { title: `Haldi Decoration in India | From ₹4,999 | Decorza Events` },
      { name: "description", content: `Marigold florals, yellow drapes, swing decor and traditional props for a picture-perfect haldi function. Book on WhatsApp.` },
      { property: "og:title", content: `Haldi Decoration | Decorza Events` },
      { property: "og:image", content: "/75e0da81-49b9-4d14-b41f-16c2c0751359.jpg" },
    ],
    links: [{ rel: "canonical", href: "/service/haldi-decoration" }],
  }),
  component: ServicePage,
});

function ServicePage() {
  const { category: c } = Route.useLoaderData();
  const wa = waLink(waBookingMessage({ packageName: "Haldi Decoration" }));
  const reviews = REVIEWS.filter(([, , s]) => (s as string) === "Haldi Decoration").slice(0, 6);
  const displayReviews = reviews.length ? reviews : REVIEWS.slice(0, 6);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/75e0da81-49b9-4d14-b41f-16c2c0751359.jpg" alt="Haldi Decoration" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.2_0.08_305)]/90 to-[oklch(0.32_0.13_5)]/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
          <Badge className="bg-white/10 backdrop-blur border border-white/20 text-white">
            <Star className="mr-1 h-3 w-3 fill-gold text-gold" /> 4.9 · 560 reviews
          </Badge>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl">Haldi Decoration</h1>
          <p className="mt-4 max-w-2xl text-white/85">Marigold florals, yellow drapes, swing decor and traditional props for a picture-perfect haldi function.</p>
          <p className="mt-4 font-display text-2xl text-gold">Starting from ₹4,999</p>
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
        <SectionHeader eyebrow="Packages" title="Haldi Decoration Packages" subtitle="Pick from Essential, Premium and Luxury — or customise on WhatsApp." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <StaticPackageCard
            id="haldi-decoration-essential"
            name="Rajasthani Umbrella Haldi Backdrop"
            description="A colourful haldi corner with a printed umbrella wall, hanging yellow genda strings and bright drapes — a lively traditional setup just like the picture."
            image={haldiN1.url}
            includes={["Printed Rajasthani umbrella wall", "Hanging yellow genda phool strings", "Colourful drape panels", "Warm ambient lighting"]}
            rating={4.8}
            reviews={160}
            offer={<>₹4,999</>}
            original={<>₹7,999</>}
            discountPct={38}
            bestSeller={false}
          />
          <StaticPackageCard
            id="haldi-decoration-premium"
            name="Premium Floral Ring Haldi Decoration"
            description="An upgraded haldi setup with a floral ring backdrop, draped cloth panels, fresh flower accents and ambient fairy lights — styled like the reference photo."
            image="/haldi-ring-decoration.png"
            includes={["Premium artificial flower ring backdrop", "Draped cloth panels with fairy lights", "Fresh flower accents", "Haldi urli & thali styling"]}
            rating={4.9}
            reviews={224}
            offer={<>₹9,999</>}
            original={<>₹14,999</>}
            discountPct={33}
            bestSeller={false}
          />
          <StaticPackageCard
            id="haldi-decoration-luxury"
            name="Luxury Haldi Floral Stage"
            description="A grand haldi decoration with a large floral installation, layered drapes, styled haldi corner and props — recreated to match the photo."
            image="/ac57fefc-1c84-403f-ba4d-264bd4c0948e.jpg"
            includes={["Grand floral installation", "Layered drape backdrop", "Styled haldi corner with urli & props", "Decorative lighting setup"]}
            rating={4.8}
            reviews={373}
            offer={<>₹9,999</>}
            original={<>₹14,999</>}
            discountPct={33}
            bestSeller={false}
          />
          <StaticPackageCard
            id="haldi-decoration-marigold-cascade"
            name="Marigold Cascade Haldi Setup"
            description="A vibrant haldi backdrop layered with cascading marigold strings, yellow drapes and a wooden swing — bringing a traditional courtyard feel to your celebration."
            image="/cf7339f7-010d-43fa-b60a-9bf45b9a7760.jpg"
            includes={["Marigold cascade backdrop", "Yellow & orange drapes", "Wooden swing styling", "Floral corner arrangement"]}
            rating={4.9}
            reviews={210}
            offer={<>₹9,999</>}
            original={<>₹14,999</>}
            discountPct={33}
            bestSeller={false}
          />
          <StaticPackageCard
            id="haldi-decoration-floral-jhoola"
            name="Floral Jhoola Haldi Special"
            description="A photogenic floral jhoola crafted with yellow blooms, mango leaves and pastel drapes — perfect for those traditional haldi portraits."
            image="/f584ba38-470f-4d64-944f-2383546039a1.jpg"
            includes={["Floral jhoola swing", "Pastel yellow draped backdrop", "Hanging genda phool strings", "Mango leaf toran accents"]}
            rating={4.9}
            reviews={175}
            offer={<>₹9,999</>}
            original={<>₹14,999</>}
            discountPct={33}
            bestSeller={false}
          />
          <StaticPackageCard
            id="haldi-decoration-royal-courtyard"
            name="Royal Courtyard Haldi Mandap"
            description="A luxury haldi mandap with floral pillars and a draped canopy — recreating a royal Indian courtyard for your ceremony."
            image="/e4da38f3-73cd-470c-885d-c617777fa1eb.jpg"
            includes={["Four-pillar floral mandap", "Draped canopy ceiling", "Floral pathway styling", "Premium lighting setup"]}
            rating={5}
            reviews={132}
            offer={<>₹19,999</>}
            original={<>₹29,999</>}
            discountPct={33}
            bestSeller={false}
          />
          {[...NEW_PACKAGES, ...BATCH_P].map((p) => (
            <StaticPackageCard
              key={p.id}
              id={p.id}
              name={p.name}
              description={p.description}
              image={p.image}
              includes={p.includes}
              rating={p.rating}
              reviews={p.reviews}
              offer={<>₹{p.offer.toLocaleString("en-IN")}</>}
              original={<>₹{p.original.toLocaleString("en-IN")}</>}
              discountPct={Math.round(((p.original - p.offer) / p.original) * 100)}
              bestSeller={false}
            />
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Gallery" title="Haldi Decoration Gallery" subtitle="Real setups by our decor team." />
          <div className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-3">
            <img src="/75e0da81-49b9-4d14-b41f-16c2c0751359.jpg" alt="Haldi Decoration 1" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src="/haldi-ring-decoration.png" alt="Haldi Decoration 2" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src="/ac57fefc-1c84-403f-ba4d-264bd4c0948e.jpg" alt="Haldi Decoration 3" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src="/1e631830-5a03-4c62-9230-c36bba689802.png" alt="Haldi Decoration 4" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src="/f584ba38-470f-4d64-944f-2383546039a1.jpg" alt="Haldi Decoration 5" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src="/7dcff27b-5a03-4801-8ad6-2c43f1a35a9c.jpg" alt="Haldi Decoration 6" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src="/b167380d-72d4-4a9f-a036-aa6d35bbf9af.jpg" alt="Haldi Decoration 7" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src="/f0430936-2c24-4bc9-b390-1c2e533e7ec4.jpg" alt="Haldi Decoration 8" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src="/6774f332-8168-4bc0-bfa4-53c82b9ea5b1.jpg" alt="Haldi Decoration 9" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src="/46cb56f9-f2ef-4246-9575-b3ddfc0147b9.jpg" alt="Haldi Decoration 10" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src="/cf7339f7-010d-43fa-b60a-9bf45b9a7760.jpg" alt="Haldi Decoration 11" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src="/abe2c18c-0300-48e2-b4ca-652e95789ac2.png" alt="Haldi Decoration 12" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            {[haldiN1, haldiN2, haldiN3, haldiN4, haldiN5, haldiN6, haldiN7, haldiN8].map((a, i) => (
              <img key={a.url} src={a.url} alt={`Haldi Decoration ${13 + i}`} loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
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
          <SectionHeader eyebrow="FAQs" title="Haldi Decoration FAQs" />
          <div className="mt-8"><Faq items={c.faqs} /></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Available In" title="Haldi Decoration in Your City" />
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {BRAND.cities.map((city) => (
            <Link
              key={city}
              to="/city/$slug"
              params={{ slug: city.toLowerCase() }}
              className="rounded-xl border bg-card p-3 text-center text-sm hover:border-primary hover:text-primary"
            >
              Haldi in {city}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
