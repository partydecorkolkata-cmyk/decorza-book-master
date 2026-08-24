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
import mehN1 from "@/assets/meh-n1.png.asset.json";
import mehN2 from "@/assets/meh-n2.jpg.asset.json";
import mehN3 from "@/assets/meh-n3.jpg.asset.json";
import mehN4 from "@/assets/meh-n4.jpg.asset.json";
import mehN5 from "@/assets/meh-n5.jpg.asset.json";
import mehN6 from "@/assets/meh-n6.jpg.asset.json";
import mehN7 from "@/assets/meh-n7.jpg.asset.json";
import mehN8 from "@/assets/meh-n8.jpg.asset.json";
import mehN9 from "@/assets/meh-n9.jpg.asset.json";
import mehN10 from "@/assets/meh-n10.jpg.asset.json";
import mehP1 from "@/assets/meh-p1.jpg.asset.json";
import mehP2 from "@/assets/meh-p2.jpg.asset.json";
import mehP3 from "@/assets/meh-p3.jpg.asset.json";
import mehP4 from "@/assets/meh-p4.jpg.asset.json";
import mehP5 from "@/assets/meh-p5.jpg.asset.json";
import mehP6 from "@/assets/meh-p6.jpg.asset.json";
import mehP7 from "@/assets/meh-p7.jpg.asset.json";
import mehP8 from "@/assets/meh-p8.jpg.asset.json";
import mehP9 from "@/assets/meh-p9.jpg.asset.json";
import mehP10 from "@/assets/meh-p10.jpg.asset.json";

const BATCH_P = [
  {
    id: "mehendi-marigold-hanging-canopy-stage",
    name: "Marigold Hanging Canopy Mehendi Stage",
    description: "A festive gate-style setup with pink, orange and yellow drapes, a full mixed-rose top valance and long hanging marigold strings over a fairy-light curtain, styled with a Rajasthani umbrella, matka and haldi props.",
    image: mehP1.url,
    includes: ["Pink, orange & yellow pleated drape gate", "Mixed rose & carnation top valance", "Long hanging marigold garland strings", "White fairy-light curtain backdrop", "Embroidered Rajasthani umbrella prop", "Clay matka with marigold garland", "Draped platform with printed cushions", "Haldi thali & wooden tray styling"],
    rating: 4.9, reviews: 231, offer: "₹9,999", original: "₹14,999", pct: 33,
  },
  {
    id: "mehendi-olive-yellow-moss-letter",
    name: "Olive & Yellow Moss Letter Mehendi",
    description: "A bright yellow centre drape framed by olive-green side curtains, with a yellow-white rose top cluster, moss 'मेहंदी' lettering, mogra and lemon-bead hangings and gota wheel bell danglers.",
    image: mehP2.url,
    includes: ["Yellow centre drape with olive side curtains", "Yellow & white rose top cluster with greenery", "Moss 'मेहंदी' lettering", "Mogra strings & lemon-bead hangings", "Marigold garland swags", "Gota wheel & bell danglers"],
    rating: 4.8, reviews: 174, offer: "₹9,999", original: "₹14,999", pct: 33,
  },
  {
    id: "mehendi-olive-swag-white-rose-arch",
    name: "Olive Swag White Rose Mehendi Arch",
    description: "An elegant olive-green draped arch with layered swags, dense white rose and hydrangea corners, cascading mogra strings and a matching green draped platform with a matka and tray setup.",
    image: mehP3.url,
    includes: ["Olive-green draped arch with layered swags", "White rose & hydrangea corner florals", "Cascading mogra bud strings", "Green draped platform with bolster cushion", "Clay matka with mogra overflow", "Wooden tray & mehendi cone styling"],
    rating: 4.9, reviews: 258, offer: "₹11,999", original: "₹17,999", pct: 33,
  },
  {
    id: "mehendi-sunflower-green-gate",
    name: "Sunflower & Green Drape Mehendi Gate",
    description: "A deep green backdrop with parted yellow drapes, a full sunflower and rose top border with trailing vines, marigold pillar strings, colourful gota diamonds and lace umbrellas on matkas.",
    image: mehP4.url,
    includes: ["Deep green backdrop with parted yellow drapes", "Sunflower & yellow rose top border", "Trailing green vine ceiling strings", "Marigold garland pillar borders", "Colourful gota diamond hangings", "Marigold 'हल्दी' lettering", "Golden lace umbrellas with matka props"],
    rating: 4.9, reviews: 284, offer: "₹14,999", original: "₹19,999", pct: 25,
  },
  {
    id: "mehendi-neon-leafy-fairy-curtain",
    name: "Neon Mehndi Leafy Fairy-Light Backdrop",
    description: "A glowing pink, orange and yellow satin curtain wall studded with warm fairy lights, a lush green leaf canopy frame, 'Mehndi' neon sign and mirror-work umbrellas with marigold matkas.",
    image: mehP5.url,
    includes: ["Pink, orange & yellow satin curtain wall", "Warm fairy-light studded backdrop", "Green leaf canopy frame & ceiling trail", "'Mehndi' neon signage", "Mirror-work Rajasthani umbrellas", "Matka props with marigold & pom-pom garlands", "Uplighter accent lighting"],
    rating: 4.9, reviews: 302, offer: "₹9,999", original: "₹14,999", pct: 33,
  },
  {
    id: "mehendi-outdoor-umbrella-gota",
    name: "Outdoor Umbrella Gota Mehendi Panel",
    description: "A bright lawn setup with yellow, pink and purple net drape panels, five embroidered Rajasthani umbrellas on top, colourful gota diamond hangings, tassels and marigold matka stands.",
    image: mehP6.url,
    includes: ["Yellow, pink & purple net drape panels", "Five embroidered Rajasthani umbrellas", "Colourful gota diamond hangings", "Tassel & bell danglers", "Yellow frilled platform draping", "Marigold-draped matka stands"],
    rating: 4.8, reviews: 166, offer: "₹8,499", original: "₹11,999", pct: 29,
  },
  {
    id: "mehendi-green-kite-tassel-panel",
    name: "Green Kite & Tassel Mehendi Panel",
    description: "A parrot-green net panel with yellow side drapes, pink-cream rose top border, marigold 'मेहंदी' lettering, colourful kites, gota wheels, bells and yellow tassels with white floral urns.",
    image: mehP7.url,
    includes: ["Parrot-green net panel with yellow side drapes", "Pink & cream rose top border", "Marigold 'मेहंदी' lettering", "Colourful kite hangings", "Gota wheel, bell & tassel danglers", "White floral urn pedestals"],
    rating: 4.8, reviews: 152, offer: "₹9,999", original: "₹14,999", pct: 33,
  },
  {
    id: "mehendi-multicolour-drape-lounge",
    name: "Multicolour Drape Mehendi Lounge",
    description: "A rich pink, green and yellow drape wall with a pastel floral top garland, mogra and gold-coin strings, sparkling fairy lights, gold 'मेहंदी' signage and a carpeted floor lounge with cushions and lanterns.",
    image: mehP8.url,
    includes: ["Pink, green & yellow drape wall", "Pastel floral & greenery top garland", "Mogra and gold-coin hanging strings", "Fairy-light layering with uplighters", "Gold 'मेहंदी' signage", "Draped platform with velvet bolsters", "Carpeted floor seating with cushions", "Lantern, birdcage & flower vase props"],
    rating: 4.9, reviews: 277, offer: "₹11,999", original: "₹17,999", pct: 33,
  },
  {
    id: "mehendi-neon-rainbow-marigold-stage",
    name: "Neon Rainbow Marigold Mehendi Stage",
    description: "A rainbow drape wall in pink, green and yellow with a dense mixed-rose top border, hanging marigold strings, warm fairy lights, 'Mehndi' neon sign, gold shimmer platform and marigold pillar clusters with lanterns.",
    image: mehP9.url,
    includes: ["Rainbow pink, green & yellow drape wall", "Dense mixed rose top border", "Hanging marigold garland strings", "Warm fairy-light curtains", "'Mehndi' neon signage", "Gold shimmer draped platform", "Marigold pillar clusters", "Metal lantern props"],
    rating: 4.9, reviews: 296, offer: "₹11,999", original: "₹17,999", pct: 33,
  },
  {
    id: "mehendi-pompom-neon-welcome",
    name: "Pom-Pom Neon Welcome Mehendi Setup",
    description: "A red, orange and teal sheer drape backdrop with marigold pom-pom strings, a warm dahlia-rose top cluster, 'Mehndi' neon sign, gold sequin platform, welcome easel board and a printed mandala rug.",
    image: mehP10.url,
    includes: ["Red, orange & teal sheer drape backdrop", "Marigold pom-pom hanging strings", "Dahlia & rose top floral cluster", "'Mehndi' neon signage", "Gold sequin platform with frill skirt", "Personalised welcome easel board", "Rose floral easel accent", "Printed mandala floor rug"],
    rating: 4.9, reviews: 243, offer: "₹9,999", original: "₹14,999", pct: 33,
  },
];

const GALLERY_P = [mehP1.url, mehP2.url, mehP3.url, mehP4.url, mehP5.url, mehP6.url, mehP7.url, mehP8.url, mehP9.url, mehP10.url];

const BATCH_N = [
  {
    id: "mehendi-marigold-letter-drape",
    name: "Marigold Letter Mehendi Drape",
    description: "Yellow and teal pleated drape backdrop with a white and orange rose valance, marigold 'मेहंदी' lettering, gota hangings and tassels — plus a yellow frilled platform with bolsters and cushions.",
    image: mehN1.url,
    includes: ["Yellow & teal pleated drape backdrop", "White-orange rose valance on top", "Marigold 'मेहंदी' lettering", "Gota strings & tassel hangings", "Yellow frilled platform with cushions & bolsters"],
    rating: 4.8, reviews: 164, offer: "₹8,499", original: "₹11,999", pct: 29,
  },
  {
    id: "mehendi-white-floral-ring-arch",
    name: "White Floral Ring Arch Mehendi",
    description: "An elegant circular ring arch dressed with white roses, hydrangeas and fresh greenery, a deep green draped swag and a shimmering fairy-light curtain backdrop.",
    image: mehN3.url,
    includes: ["Round metal ring arch", "White rose & hydrangea florals with greenery", "Deep green draped swag", "White sheer backdrop with fairy-light curtain", "Green table runner styling"],
    rating: 4.9, reviews: 211, offer: "₹8,499", original: "₹11,999", pct: 29,
  },
  {
    id: "mehendi-grass-gate-tassel",
    name: "Grass Gate Mehendi Backdrop",
    description: "A vibrant mehendi gate with artificial grass centre panel, yellow gota-leaf drapes, green swagged side pleats, a mixed red-orange flower valance and red-gold tassels.",
    image: mehN4.url,
    includes: ["Artificial grass centre panel", "Yellow gota-leaf side drapes", "Green swagged pleating", "Mixed rose & marigold flower valance", "Red & gold tassel hangings", "Floral stand pedestals"],
    rating: 4.8, reviews: 178, offer: "₹13,499", original: "₹19,999", pct: 33,
  },
  {
    id: "mehendi-marigold-curtain-stage",
    name: "Marigold Curtain Mehendi Stage",
    description: "Bright yellow backdrop layered with olive-green side drapes, hanging marigold and mogra strings, a yellow-white rose crown and a draped platform with silk cushions.",
    image: mehN5.url,
    includes: ["Yellow centre drape with olive side curtains", "Hanging marigold & mogra flower strings", "Yellow-white rose crown on top", "Marigold garland side borders", "Draped platform with silk cushions", "Fresh flower vase accents"],
    rating: 4.9, reviews: 246, offer: "₹9,999", original: "₹14,999", pct: 33,
  },
  {
    id: "mehendi-grass-wall-marigold-swag",
    name: "Grass Wall Marigold Swag Backdrop",
    description: "A green artificial grass wall dressed with layered marigold swags, long marigold pillars on both sides and hanging white bud strings — perfect for a daytime home mehendi.",
    image: mehN6.url,
    includes: ["Artificial grass wall panel", "Layered marigold swag drapes", "Marigold pillar borders", "Hanging white bud strings", "Ceiling ribbon criss-cross styling"],
    rating: 4.7, reviews: 132, offer: "₹7,999", original: "₹11,999", pct: 33,
  },
  {
    id: "mehendi-olive-teepee-terrace",
    name: "Olive Teepee Terrace Mehendi",
    description: "A boho olive-green teepee canopy topped with a pink rose and pampas cluster, ivy vine trails, dried palm fans on stands and a red carpet walkway with printed rugs.",
    image: mehN7.url,
    includes: ["Olive teepee drape canopy", "Pink rose & pampas top cluster", "Ivy vine trails on canopy edges", "Dried palm fan props on stands", "Printed rugs & red carpet walkway", "Draped platform with cushions"],
    rating: 4.8, reviews: 156, offer: "₹9,999", original: "₹14,999", pct: 33,
  },
  {
    id: "mehendi-rajasthani-umbrella",
    name: "Rajasthani Umbrella Mehendi Stage",
    description: "A festive Rajasthani theme with colourful embroidered umbrellas overhead and on the floor, lehariya kite hangings, tassel dreamcatchers, a green drape wall and mirror-work 'मेहंदी' signage.",
    image: mehN8.url,
    includes: ["Green pleated drape wall", "Colourful embroidered Rajasthani umbrellas", "Kite & diamond gota hangings", "Tassel dreamcatcher hangings", "Mirror-work 'मेहंदी' signage", "Draped platform with round cushions"],
    rating: 4.9, reviews: 268, offer: "₹8,499", original: "₹11,999", pct: 29,
  },
  {
    id: "mehendi-matka-tent-backdrop",
    name: "Matka & Tassel Mehendi Tent",
    description: "A warm yellow drape backdrop with green tapered side panels, a pastel pom-pom flower valance, gota bell hangings, marigold-draped clay matkas on stands and floral urns.",
    image: mehN9.url,
    includes: ["Yellow drape backdrop with green tapered panels", "Pastel pom-pom flower valance", "Moss 'मेहंदी' lettering", "Gota wheel & bell hangings", "Clay matka props with marigold drapes", "Floral urn accents"],
    rating: 4.8, reviews: 187, offer: "₹13,499", original: "₹19,999", pct: 33,
  },
  {
    id: "mehendi-green-yellow-umbrella-panel",
    name: "Green & Yellow Umbrella Mehendi Panel",
    description: "A parrot-green and yellow net drape panel with mixed rose valance, hanging white blossom vines, LED 'हल्दी' and 'मेहंदी' signage, a colourful rangoli disc and bell strings, topped with two Rajasthani umbrellas.",
    image: mehN10.url,
    includes: ["Parrot-green & yellow net drape panel", "Mixed rose flower valance", "Hanging white blossom vines", "LED 'हल्दी' & 'मेहंदी' signage", "Rangoli disc & tassel bell strings", "Two embroidered Rajasthani umbrellas"],
    rating: 4.8, reviews: 143, offer: "₹8,499", original: "₹11,999", pct: 29,
  },
];

const GALLERY_N = [mehN1.url, mehN2.url, mehN3.url, mehN4.url, mehN5.url, mehN6.url, mehN7.url, mehN8.url, mehN9.url, mehN10.url];


export const Route = createFileRoute("/service/mehendi-decoration")({
  loader: () => {
    const c = categoryBySlug("mehendi-decoration");
    if (!c) throw notFound();
    return { category: c };
  },
  head: () => ({
    meta: [
      { title: `Mehendi Decoration in India | From ₹4,499 | Decorza Events` },
      { name: "description", content: `Bohemian umbrellas, jhoolas, floral installations and Rajasthani-style mehendi decor. Book on WhatsApp.` },
      { property: "og:title", content: `Mehendi Decoration | Decorza Events` },
      { property: "og:image", content: "/ddbbe21d-b302-41b1-b540-d96886f6934a.jpg" },
    ],
    links: [{ rel: "canonical", href: "/service/mehendi-decoration" }],
  }),
  component: ServicePage,
});

function ServicePage() {
  const { category: c } = Route.useLoaderData();
  const wa = waLink(waBookingMessage({ packageName: "Mehendi Decoration" }));
  const reviews = REVIEWS.filter(([, , s]) => (s as string) === "Mehendi Decoration").slice(0, 12);
  const displayReviews = reviews.length ? reviews : REVIEWS.slice(0, 6);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/ddbbe21d-b302-41b1-b540-d96886f6934a.jpg" alt="Mehendi Decoration" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.2_0.08_305)]/90 to-[oklch(0.32_0.13_5)]/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
          <Badge className="bg-white/10 backdrop-blur border border-white/20 text-white">
            <Star className="mr-1 h-3 w-3 fill-gold text-gold" /> 4.8 · 430 reviews
          </Badge>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl">Mehendi Decoration</h1>
          <p className="mt-4 max-w-2xl text-white/85">Bohemian umbrellas, jhoolas, floral installations and Rajasthani-style mehendi decor.</p>
          <p className="mt-4 font-display text-2xl text-gold">Starting from ₹4,499</p>
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
        <SectionHeader eyebrow="Packages" title="Mehendi Decoration Packages" subtitle="Pick from Essential, Premium and Luxury — or customise on WhatsApp." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <StaticPackageCard
            id="mehendi-decoration-essential"
            name="Essential Mehendi Decoration"
            description="A yellow and teal pleated drape backdrop with a white-orange rose valance, marigold 'मेहंदी' lettering, gota strings and tassels, finished with a yellow frilled platform and cushions."
            image={mehN1.url}
            includes={["Yellow & teal pleated drape backdrop", "White-orange rose valance", "Marigold 'मेहंदी' lettering", "Gota strings & tassel hangings", "Yellow frilled platform with cushions"]}
            rating={4.7}
            reviews={123}
            offer={<>₹8,499</>}
            original={<>₹11,999</>}
            discountPct={29}
            bestSeller={false}
          />
          <StaticPackageCard
            id="mehendi-decoration-premium"
            name="Premium Mehendi Decoration"
            description="An upgraded mehendi decoration with a premium artificial flower arch, draped cloth backdrop, fresh floral accents and ambient fairy lights — styled like the reference photo."
            image="/f3443506-ae43-4c2b-a1b0-8bf5c9cfa542.jpg"
            includes={["Premium artificial flower arch", "Premium cloth drape & lighting setup", "Fresh flower accents"]}
            rating={4.8}
            reviews={172}
            offer={<>₹9,999</>}
            original={<>₹14,999</>}
            discountPct={33}
            bestSeller={false}
          />
          <StaticPackageCard
            id="mehendi-decoration-luxury"
            name="Luxury Mehendi Decoration"
            description="A boho luxury mehendi setup with a parrot-green teepee canopy, a marigold and pampas grass crown, tall marigold flower stands and a draped platform with cushions."
            image={mehN2.url}
            includes={["Parrot-green teepee drape canopy", "Marigold & pampas grass top cluster", "Tall marigold flower stands", "Draped platform with cushions & bolsters", "Ambient event lighting"]}
            rating={4.7}
            reviews={287}
            offer={<>₹11,999</>}
            original={<>₹17,999</>}
            discountPct={33}
            bestSeller={false}
          />
          {BATCH_N.map((p) => (
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
              discountPct={p.pct}
            />
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Gallery" title="Mehendi Decoration Gallery" subtitle="Real setups by our decor team." />
          <div className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-3">
            <img src="/ddbbe21d-b302-41b1-b540-d96886f6934a.jpg" alt="Mehendi Decoration 1" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src="/f3443506-ae43-4c2b-a1b0-8bf5c9cfa542.jpg" alt="Mehendi Decoration 2" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src="/3b9eaec6-1f96-432f-af2d-1c0c14a2be84.jpg" alt="Mehendi Decoration 3" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src="/dac76f89-052b-49b0-bb30-830bf52781b7.jpg" alt="Mehendi Decoration 4" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            {GALLERY_N.map((src, i) => (
              <img key={src} src={src} alt={`Mehendi Decoration ${i + 5}`} loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
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
          <SectionHeader eyebrow="FAQs" title="Mehendi Decoration FAQs" />
          <div className="mt-8"><Faq items={c.faqs} /></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Available In" title="Mehendi Decoration in Your City" />
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {BRAND.cities.map((city) => (
            <Link
              key={city}
              to="/city/$slug"
              params={{ slug: city.toLowerCase() }}
              className="rounded-xl border bg-card p-3 text-center text-sm hover:border-primary hover:text-primary"
            >
              Mehendi in {city}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
