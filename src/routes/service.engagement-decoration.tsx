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
import engN1 from "@/assets/eng-n1.jpg.asset.json";
import engN2 from "@/assets/eng-n2.png.asset.json";
import engN3 from "@/assets/eng-n3.png.asset.json";
import engN4 from "@/assets/eng-n4.png.asset.json";
import engN5 from "@/assets/eng-n5.jpg.asset.json";
import engN6 from "@/assets/eng-n6.jpg.asset.json";
import engN7 from "@/assets/eng-n7.jpg.asset.json";
import engN8 from "@/assets/eng-n8.jpg.asset.json";
import engN9 from "@/assets/eng-n9.jpg.asset.json";
import engN10 from "@/assets/eng-n10.jpg.asset.json";
import engO1 from "@/assets/eng-o1.jpg.asset.json";
import engO2 from "@/assets/eng-o2.jpg.asset.json";
import engO3 from "@/assets/eng-o3.jpg.asset.json";
import engO4 from "@/assets/eng-o4.jpg.asset.json";
import engO5 from "@/assets/eng-o5.jpg.asset.json";
import engO6 from "@/assets/eng-o6.jpg.asset.json";
import engO7 from "@/assets/eng-o7.jpg.asset.json";
import engO8 from "@/assets/eng-o8.jpg.asset.json";
import engO9 from "@/assets/eng-o9.jpg.asset.json";
import engO10 from "@/assets/eng-o10.jpg.asset.json";

const BATCH_O = [
  {
    id: "engagement-forever-always-pampas-ring",
    name: "Forever & Always Pampas Ring Engagement Decor",
    description:
      "A soft ivory fairy-light curtain wall with a metal ring arch dressed in blush, mauve and white roses, dried pampas and palm fans, glowing 'Forever and Always' neon and golden candle pillars with cherry-blossom stands.",
    image: engO1.url,
    includes: [
      "Ivory fairy-light curtain backdrop",
      "Ring arch with blush & white rose clusters",
      "Dried pampas and palm leaf styling",
      "'Forever and Always' neon sign",
      "Golden candle pillars & cherry blossom stands",
    ],
    rating: 4.9,
    reviews: 221,
    offer: "₹9,999",
    original: "₹14,999",
    discountPct: 33,
  },
  {
    id: "engagement-purple-velvet-better-together",
    name: "Purple Velvet Better Together Engagement Backdrop",
    description:
      "Rich purple velvet side curtains framing a cream drape centre, with a floral crescent of peach, lilac and white roses, a golden fan drape and a warm 'Better Together' neon sign.",
    image: engO2.url,
    includes: [
      "Purple velvet side curtains with cream centre drape",
      "Peach, lilac & white rose crescent garland",
      "Golden fan drape styling",
      "'Better Together' neon sign",
    ],
    rating: 4.8,
    reviews: 176,
    offer: "₹8,499",
    original: "₹13,999",
    discountPct: 39,
  },
  {
    id: "engagement-blush-cross-drape-rose-canopy",
    name: "Blush Cross Drape Rose Canopy Engagement Stage",
    description:
      "A blush-pink cross drape backdrop over ivory curtains, topped with a full canopy of cream and pink roses with eucalyptus, fairy lights and matching floral urns on gold pedestals.",
    image: engO3.url,
    includes: [
      "Ivory curtain wall with blush cross drapes",
      "Full rose & eucalyptus top canopy",
      "Twin floral urns on gold pedestal stands",
      "Warm fairy light layering",
    ],
    rating: 4.9,
    reviews: 198,
    offer: "₹11,999",
    original: "₹17,999",
    discountPct: 33,
  },
  {
    id: "engagement-pink-drape-lily-corner-arch",
    name: "Pink Drape Lily Corner Engagement Arch",
    description:
      "A shimmering white fairy-light backdrop with a bold pink side drape and an L-shaped garland of pink roses, white daisies and baby's breath, finished with fresh lily vases on the floor.",
    image: engO4.url,
    includes: [
      "White fairy-light shimmer backdrop",
      "Pink drape swag with floral tie-back",
      "L-shaped rose, daisy & baby's breath garland",
      "Fresh lily floor vases",
    ],
    rating: 4.8,
    reviews: 164,
    offer: "₹9,999",
    original: "₹14,999",
    discountPct: 33,
  },
  {
    id: "engagement-round-ring-pink-cascade",
    name: "Round Ring Pink Cascade Engagement Backdrop",
    description:
      "A white pleated curtain wall studded with warm lights, centred on a round ring wrapped in vibrant pink roses and trailing greenery, with a soft white centre drape and 'Better Together' neon.",
    image: engO5.url,
    includes: [
      "White pleated curtain wall with warm bulbs",
      "Round ring with pink rose & vine cascade",
      "Soft white centre drape",
      "'Better Together' neon sign",
    ],
    rating: 4.8,
    reviews: 187,
    offer: "₹8,499",
    original: "₹12,999",
    discountPct: 35,
  },
  {
    id: "engagement-baat-pakki-floral-frame",
    name: "Baat Pakki Floral Frame Engagement Decor",
    description:
      "A traditional roka-style setup with a white fairy-light curtain, pink side drape and a thick mixed rose garland frame, crowned by a glittering gold 'Baat Pakki' ring cutout and floor flower vases.",
    image: engO6.url,
    includes: [
      "White fairy-light curtain with pink drape",
      "Mixed pink, white & blue rose frame garland",
      "Gold glitter 'Baat Pakki' ring cutout",
      "Floral floor vases both sides",
    ],
    rating: 4.9,
    reviews: 209,
    offer: "₹9,999",
    original: "₹14,999",
    discountPct: 33,
  },
  {
    id: "engagement-grand-banquet-tropical-stage",
    name: "Grand Banquet Tropical Green Engagement Stage",
    description:
      "A full banquet stage with a white shimmer drape wall, a lush tropical palm and white rose top garland, hanging edison bulbs, custom couple name neon, golden candle towers and a printed aisle runner with floral pedestals.",
    image: engO7.url,
    includes: [
      "Full-width white shimmer drape stage wall",
      "Tropical palm & white rose top garland",
      "Custom couple name neon with hanging bulbs",
      "Golden candle tower rows",
      "Printed aisle runner with floral pedestals",
    ],
    rating: 4.9,
    reviews: 288,
    offer: "₹24,999",
    original: "₹34,999",
    discountPct: 29,
  },
  {
    id: "engagement-white-rose-entrance-canopy",
    name: "White Rose Entrance Canopy Engagement Decor",
    description:
      "A grand venue entrance dressed in white roses and mixed greenery with flowing white drapes, a crystal chandelier at the centre and matching welcome-sign floral styling.",
    image: engO8.url,
    includes: [
      "White rose & greenery entrance garland",
      "Flowing white side drapes with tie-backs",
      "Crystal chandelier at entry centre",
      "Floral welcome signage styling",
    ],
    rating: 4.8,
    reviews: 152,
    offer: "₹8,499",
    original: "₹11,999",
    discountPct: 29,
  },
  {
    id: "engagement-outdoor-mauve-chandelier",
    name: "Outdoor Mauve Chandelier Engagement Setup",
    description:
      "A dreamy open-air setup with an ivory fairy-light drape wall, mauve side curtain, an L-shaped blush rose garland, a glowing crystal chandelier, 'Better Together' neon and gold pillar stands with lanterns on a lace floor rug.",
    image: engO9.url,
    includes: [
      "Ivory fairy-light drape wall with mauve curtain",
      "L-shaped blush rose garland",
      "Hanging crystal chandelier",
      "'Better Together' neon sign",
      "Gold pillar stands, lanterns & lace floor rug",
    ],
    rating: 4.9,
    reviews: 243,
    offer: "₹14,999",
    original: "₹19,999",
    discountPct: 25,
  },
  {
    id: "engagement-ivory-peach-corner-arch",
    name: "Ivory & Peach Corner Arch Engagement Decor",
    description:
      "A clean ivory curtain backdrop with a dusty-pink side drape and an L-shaped garland of white roses, peach carnations and fresh greenery — simple, bright and perfect for compact venues.",
    image: engO10.url,
    includes: [
      "Ivory pleated curtain backdrop",
      "Dusty pink side drape with floral tie-back",
      "White rose & peach carnation L-garland",
      "Greenery detailing with floral stand",
    ],
    rating: 4.7,
    reviews: 138,
    offer: "₹7,999",
    original: "₹11,999",
    discountPct: 33,
  },
];

const NEW_CARDS = [
  {
    id: "engagement-maroon-neon-drape",
    name: "Better Together Maroon Drape Engagement Decor",
    description:
      "A maroon and ivory drape backdrop crowned with a red-and-white rose garland, a glowing 'Better Together' neon sign, matching floral corner bouquets and a draped ring ceremony table.",
    image: engN4.url,
    includes: [
      "Maroon & ivory pleated drape backdrop",
      "Red and white rose garland with greenery",
      "'Better Together' neon sign",
      "Floral corner stands & draped ceremony table",
    ],
    rating: 4.9,
    reviews: 214,
    offer: "₹8,499",
    original: "₹12,999",
    discountPct: 35,
  },
  {
    id: "engagement-pastel-round-board",
    name: "Pastel Cloud Round Board Engagement Decor",
    description:
      "A custom printed round board with the couple's names in pastel cloud art, framed by tropical greenery and cream-blush flower clusters with tall floral pillar stands on both sides.",
    image: engN5.url,
    includes: [
      "Custom printed round name board",
      "Tropical leaf & blush rose floral frame",
      "4 tall metal floral pillar stands",
      "Warm backlight setup",
    ],
    rating: 4.9,
    reviews: 168,
    offer: "₹8,499",
    original: "₹12,999",
    discountPct: 35,
  },
  {
    id: "engagement-white-floral-hoop-stage",
    name: "White Floral Hoop Engagement Stage",
    description:
      "A classic white curtain stage with a full white chrysanthemum and rose hoop arch, hanging pendant bulbs and matching white floral corner clusters with urn arrangements.",
    image: engN6.url,
    includes: [
      "White pleated curtain backdrop",
      "White flower hoop arch with hanging bulbs",
      "Corner floral clusters & pedestal urns",
      "Floral pillar stands with greenery",
    ],
    rating: 4.8,
    reviews: 193,
    offer: "₹11,999",
    original: "₹19,999",
    discountPct: 40,
  },
  {
    id: "engagement-rustic-neon-floral-frame",
    name: "Rustic Neon Floral Frame Engagement Decor",
    description:
      "A rustic wooden frame wrapped in pink, lilac and white roses with baby's breath, hanging rope edison bulbs and a 'Better Together' neon sign — perfect for compact home engagements.",
    image: engN7.url,
    includes: [
      "Rustic wooden frame structure",
      "Pink, lilac & white rose floral runners",
      "Hanging rope edison bulbs",
      "'Better Together' neon sign",
    ],
    rating: 4.8,
    reviews: 142,
    offer: "₹7,999",
    original: "₹11,999",
    discountPct: 33,
  },
  {
    id: "engagement-grand-greenery-hoop-stage",
    name: "Grand Greenery Hoop Banquet Engagement Stage",
    description:
      "A grand banquet stage with white fairy-light drapes, twin greenery hoop arches, hanging ring lanterns, a white rose crown and rows of golden candle pillars along the stage.",
    image: engN8.url,
    includes: [
      "Full-width fairy light drape backdrop",
      "Twin greenery hoop arches with white roses",
      "Hanging ring lanterns with edison bulbs",
      "Golden candle pillar rows & stage skirting",
    ],
    rating: 4.9,
    reviews: 231,
    offer: "₹19,999",
    original: "₹29,999",
    discountPct: 33,
  },
  {
    id: "engagement-blush-circle-drape",
    name: "Blush Circle Drape Engagement Backdrop",
    description:
      "A gold circular ring backdrop with cascading blush, mauve and white roses, soft white cross drapes, fairy lights and a 'Better Together' neon sign over a pleated curtain wall.",
    image: engN9.url,
    includes: [
      "Pleated white curtain wall with fairy lights",
      "Gold circular ring with blush floral cascade",
      "Soft white cross drape styling",
      "'Better Together' neon sign",
    ],
    rating: 4.8,
    reviews: 176,
    offer: "₹7,499",
    original: "₹11,999",
    discountPct: 38,
  },
  {
    id: "engagement-vibrant-floral-ring",
    name: "Vibrant Floral Ring Engagement Decor",
    description:
      "A bright ring backdrop covered in magenta, peach and white blossoms with trailing greenery, a soft cream drape centre, fairy lights and matching floor flower pots.",
    image: engN10.url,
    includes: [
      "Ring backdrop with magenta & peach florals",
      "Cream centre drape with fairy lights",
      "Matching floor floral pots",
      "'Better Together' neon sign",
    ],
    rating: 4.7,
    reviews: 158,
    offer: "₹7,499",
    original: "₹11,999",
    discountPct: 38,
  },
];

export const Route = createFileRoute("/service/engagement-decoration")({
  loader: () => {
    const c = categoryBySlug("engagement-decoration");
    if (!c) throw notFound();
    return { category: c };
  },
  head: () => ({
    meta: [
      { title: `Engagement Decoration in India | From ₹4,999 | Decorza Events` },
      { name: "description", content: `Premium engagement stage decor, ring exchange backdrops, floral arches and lounge seating arrangements. Book on WhatsApp.` },
      { property: "og:title", content: `Engagement Decoration | Decorza Events` },
      { property: "og:image", content: "/bd0376ae-9b5b-4709-b15a-e12b400d023d.png" },
    ],
    links: [{ rel: "canonical", href: "/service/engagement-decoration" }],
  }),
  component: ServicePage,
});

function ServicePage() {
  const { category: c } = Route.useLoaderData();
  const wa = waLink(waBookingMessage({ packageName: "Engagement Decoration" }));
  const reviews = REVIEWS.filter(([, , s]) => (s as string) === "Engagement Decoration").slice(0, 6);
  const displayReviews = reviews.length ? reviews : REVIEWS.slice(0, 6);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/bd0376ae-9b5b-4709-b15a-e12b400d023d.png" alt="Engagement Decoration" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.2_0.08_305)]/90 to-[oklch(0.32_0.13_5)]/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
          <Badge className="bg-white/10 backdrop-blur border border-white/20 text-white">
            <Star className="mr-1 h-3 w-3 fill-gold text-gold" /> 4.9 · 690 reviews
          </Badge>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl">Engagement Decoration</h1>
          <p className="mt-4 max-w-2xl text-white/85">Premium engagement stage decor, ring exchange backdrops, floral arches and lounge seating arrangements.</p>
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
        <SectionHeader eyebrow="Packages" title="Engagement Decoration Packages" subtitle="Pick from Essential, Premium and Luxury — or customise on WhatsApp." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <StaticPackageCard
            id="engagement-decoration-essential"
            name="Essential Engagement Decoration"
            description="A soft white engagement setup with a fairy-light curtain wall, a gold circular ring draped in flowing white cloth and pastel rose clusters on both corners — elegant and photo-ready."
            image={engN1.url}
            includes={["White fairy-light curtain backdrop","Gold ring with flowing white drape","Pastel rose & greenery clusters","Warm ambient lighting"]}
            rating={4.8}
            reviews={197}
            offer={<>₹5,999</>}
            original={<>₹7,999</>}
            discountPct={25}
            bestSeller={false}
          />
          <StaticPackageCard
            id="engagement-decoration-premium"
            name="Premium Engagement Decoration"
            description="A maroon and ivory drape backdrop with a red-and-white rose crown, glowing 'Better Together' neon sign, floral side clusters and a draped ring ceremony table."
            image={engN2.url}
            includes={["Maroon & ivory drape backdrop","Red and white rose crown garland","'Better Together' neon sign","Draped ring ceremony table & floral stand"]}
            rating={4.9}
            reviews={276}
            offer={<>₹6,999</>}
            original={<>₹9,999</>}
            discountPct={30}
            bestSeller={false}
          />
          <StaticPackageCard
            id="engagement-decoration-luxury"
            name="Luxury Engagement Decoration"
            description="A grand banquet-style engagement stage with a full white shimmer drape wall, triple gold ring arches, pastel yellow swag drapes and lavish pink-and-white rose installations with floor floral vases."
            image={engN3.url}
            includes={["Full-width white shimmer drape wall","Triple gold ring arch structure","Pastel yellow swag drapes with fairy lights","Lavish pink & white rose installations","Floor floral vases and stage carpet"]}
            rating={4.9}
            reviews={460}
            offer={<>₹14,999</>}
            original={<>₹24,999</>}
            discountPct={40}
            bestSeller
          />
          {[...NEW_CARDS, ...BATCH_O].map((p) => (
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
            />
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Gallery" title="Engagement Decoration Gallery" subtitle="Real setups by our decor team." />
          <div className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-3">
            <img src="/bd0376ae-9b5b-4709-b15a-e12b400d023d.png" alt="Engagement Decoration 1" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src="/942d57ec-d885-471e-bd0d-3bae09b3ea63.jpg" alt="Engagement Decoration 2" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src="/092f68ee-d169-404c-97de-a830bbd7c3e2.jpg" alt="Engagement Decoration 3" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src="/dc25d543-a4c2-4658-82c6-c01a06faf17a.jpg" alt="Engagement Decoration 4" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src="/bae35f06-2535-4318-982f-fe6bdb55f651.jpg" alt="Engagement Decoration 5" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src="/52c60fcc-e74c-44a6-bc41-839070781d6b.png" alt="Engagement Decoration 6" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src="/e91b4943-ba81-4542-aefe-adaf303d70b5.png" alt="Engagement Decoration 7" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src="/387c0a1f-1f20-432b-b58b-2993981a54b9.jpg" alt="Engagement Decoration 8" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src="/96ca5637-e2c0-441b-9518-18461f2248e7.jpg" alt="Engagement Decoration 9" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
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
          <SectionHeader eyebrow="FAQs" title="Engagement Decoration FAQs" />
          <div className="mt-8"><Faq items={c.faqs} /></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Available In" title="Engagement Decoration in Your City" />
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {BRAND.cities.map((city) => (
            <Link
              key={city}
              to="/city/$slug"
              params={{ slug: city.toLowerCase() }}
              className="rounded-xl border bg-card p-3 text-center text-sm hover:border-primary hover:text-primary"
            >
              Engagement in {city}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
