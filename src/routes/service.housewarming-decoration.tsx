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
import hwN1 from "@/assets/hw-n1.jpeg.asset.json";
import hwN2 from "@/assets/hw-n2.jpeg.asset.json";
import hwN3 from "@/assets/hw-n3.jpeg.asset.json";
import hwN4 from "@/assets/hw-n4.jpeg.asset.json";
import hwN5 from "@/assets/hw-n5.jpeg.asset.json";
import hwN6 from "@/assets/hw-n6.jpeg.asset.json";
import hwN7 from "@/assets/hw-n7.jpg.asset.json";
import hwN8 from "@/assets/hw-n8.jpg.asset.json";
import hwN9 from "@/assets/hw-n9.jpeg.asset.json";
import hwN10 from "@/assets/hw-n10.png.asset.json";

const BATCH_N = [
  {
    id: "housewarming-white-gold-arch",
    name: "Ivory & Gold Housewarming Arch Decor",
    description: "An elegant fluted white arch board with a lush ivory, nude and chrome-gold balloon garland and baby's breath accents — perfect for a modern housewarming party photo corner.",
    image: hwN4.url,
    includes: ["Fluted white arch board with custom name print", "Ivory, nude & chrome gold balloon garland", "Baby's breath floral accents"],
    rating: 4.8,
    reviews: 74,
    offer: 4999,
    original: 7999,
  },
  {
    id: "housewarming-new-home-new-blooms",
    name: "New Home New Blooms Floral Arch Decor",
    description: "A vibrant pink arch panel with 'New Home New Blooms' lettering, twin balloon cascades in pink, orange and yellow, fresh-look blooms and a matching half-moon 'New Beginnings' board.",
    image: hwN5.url,
    includes: ["Pink arch panel with custom lettering", "Pink, orange & yellow balloon cascade with florals", "Matching half-moon welcome board", "Greenery fillers & floor styling"],
    rating: 4.9,
    reviews: 118,
    offer: 7499,
    original: 9999,
  },
  {
    id: "housewarming-home-sweet-home",
    name: "Home Sweet Home White Balloon Decor",
    description: "A clean all-white panel with 'Home Sweet Home' cut-out lettering, double organic balloon clusters, glow lights and eucalyptus leaf touches for a minimal, classy house warming setup.",
    image: hwN6.url,
    includes: ["White panel with Home Sweet Home cut-out lettering", "Organic white balloon clusters", "Warm glow lighting inside the setup", "Eucalyptus & gypsophila accents"],
    rating: 4.8,
    reviews: 66,
    offer: 4999,
    original: 7999,
  },
  {
    id: "housewarming-kanku-pagla-entrance",
    name: "Kanku Pagla Rangoli Entrance Decor",
    description: "A traditional entrance setup with flower petal rangoli, brass kalash centre, heart foil balloons and rose-gold, white and gold balloon pillars on both sides of the main door, plus a customised welcome easel.",
    image: hwN7.url,
    includes: ["Fresh flower petal rangoli with brass kalash", "Rose gold, white & gold balloon pillars", "Heart foil balloon accents", "Customised welcome easel board"],
    rating: 4.7,
    reviews: 52,
    offer: 2499,
    original: 4999,
  },
  {
    id: "housewarming-welcome-greenery-arch",
    name: "Welcome Greenery Arch Housewarming Decor",
    description: "A printed greenery 'Welcome' backdrop framed by a bold gold, rose-gold and white balloon arch with eucalyptus leaf styling — a warm indoor welcome for your new home.",
    image: hwN8.url,
    includes: ["Printed greenery Welcome backdrop panel", "Gold, rose gold & white balloon arch", "Eucalyptus leaf styling", "Pedestal styling beside the setup"],
    rating: 4.8,
    reviews: 81,
    offer: 4999,
    original: 7999,
  },
  {
    id: "housewarming-welcome-easel-pastel",
    name: "Pastel Welcome Easel Housewarming Decor",
    description: "A charming budget setup with a customised 'Welcome to our New Home' easel board and a flowing blush pink, peach, white and gold balloon garland — ideal for small home celebrations.",
    image: hwN9.url,
    includes: ["Customised welcome easel board", "Blush pink, peach, white & gold balloon garland", "Easel stand & floor balloon cluster"],
    rating: 4.7,
    reviews: 44,
    offer: 1999,
    original: 2999,
  },
  {
    id: "housewarming-grand-floral-doorway",
    name: "Grand Fresh Floral Doorway Decor",
    description: "A premium griha pravesh doorway fully covered in fresh roses, lilies, orchids and gypsophila with palm leaf detailing on the top valance and both pillars, finished with floor flower bases.",
    image: hwN10.url,
    includes: ["Full fresh flower doorway frame (top + both pillars)", "Roses, lilies, carnations & gypsophila mix", "Palm & foliage leaf detailing", "Floor flower base arrangements"],
    rating: 4.9,
    reviews: 137,
    offer: 9999,
    original: 14999,
  },
];

const GALLERY_N = [hwN5.url, hwN2.url, hwN1.url, hwN3.url, hwN4.url, hwN6.url, hwN7.url, hwN8.url, hwN9.url, hwN10.url];

export const Route = createFileRoute("/service/housewarming-decoration")({
  loader: () => {
    const c = categoryBySlug("housewarming-decoration");
    if (!c) throw notFound();
    return { category: c };
  },
  head: () => ({
    meta: [
      { title: `Housewarming Decoration in India | From ₹1,999 | Decorza Events` },
      { name: "description", content: `Traditional rangoli, floral entrances, mango leaf torans and lamp setups for housewarming ceremonies. Book on WhatsApp.` },
      { property: "og:title", content: `Housewarming Decoration | Decorza Events` },
      { property: "og:image", content: hwN5.url },
    ],
    links: [{ rel: "canonical", href: "/service/housewarming-decoration" }],
  }),
  component: ServicePage,
});

function ServicePage() {
  const { category: c } = Route.useLoaderData();
  const wa = waLink(waBookingMessage({ packageName: "Housewarming Decoration" }));
  const reviews = REVIEWS.filter(([, , s]) => (s as string) === "Housewarming Decoration").slice(0, 12);
  const displayReviews = reviews.length ? reviews : REVIEWS.slice(0, 12);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={hwN5.url} alt="Housewarming Decoration" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.2_0.08_305)]/90 to-[oklch(0.32_0.13_5)]/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
          <Badge className="bg-white/10 backdrop-blur border border-white/20 text-white">
            <Star className="mr-1 h-3 w-3 fill-gold text-gold" /> 4.8 · 290 reviews
          </Badge>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl">Housewarming Decoration</h1>
          <p className="mt-4 max-w-2xl text-white/85">Traditional rangoli, floral entrances, mango leaf torans and lamp setups for housewarming ceremonies.</p>
          <p className="mt-4 font-display text-2xl text-gold">Starting from ₹4999</p>
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
        <SectionHeader eyebrow="Packages" title="Housewarming Decoration Packages" subtitle="Pick from Essential, Premium and Luxury — or customise on WhatsApp." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <StaticPackageCard
            id="housewarming-decoration-essential"
            name="Essential Marigold Door Garland Decor"
            description="A traditional griha pravesh door decoration with layered marigold and genda garlands draped across the frame, a white mogra centre valance and hanging flower bunches — just like the picture."
            image={hwN1.url}
            includes={["Layered orange & yellow marigold door garlands", "White mogra centre valance", "Hanging flower bunches & side pillars", "Coconut & flower floor accents"]}
            rating={4.7}
            reviews={83}
            offer={<>₹4,999</>}
            original={<>₹8,499</>}
            discountPct={41}
            bestSeller={false}
          />
          <StaticPackageCard
            id="housewarming-decoration-premium"
            name="Premium Floral Pravesh Entrance Decor"
            description="A designer entrance with a dense pastel carnation and rose top valance, long marigold and mogra hanging strings on both sides and matching brass urn flower arrangements at the doorstep."
            image={hwN2.url}
            includes={["Pastel carnation & rose top valance", "Long marigold and mogra hanging strings", "Twin brass urn floral arrangements", "Foliage & leaf detailing"]}
            rating={4.8}
            reviews={116}
            offer={<>₹8,499</>}
            original={<>₹11,999</>}
            discountPct={29}
            bestSeller={true}
          />
          <StaticPackageCard
            id="housewarming-decoration-luxury"
            name="Luxury Blue & Silver Housewarming Party Decor"
            description="A grand housewarming party stage with a customised printed floral backdrop and big blue, white, silver chrome balloon clusters on both sides, styled with floor balloon pools."
            image={hwN3.url}
            includes={["Customised printed housewarming backdrop", "Blue, white & silver chrome balloon clusters", "Floor balloon pool styling", "Full setup & on-site installation"]}
            rating={4.7}
            reviews={193}
            offer={<>₹6,999</>}
            original={<>₹9,999</>}
            discountPct={30}
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
              offer={<>₹{p.offer.toLocaleString("en-IN")}</>}
              original={<>₹{p.original.toLocaleString("en-IN")}</>}
              discountPct={Math.round((1 - p.offer / p.original) * 100)}
            />
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Gallery" title="Housewarming Decoration Gallery" subtitle="Real setups by our decor team." />
          <div className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-3">
            <img src="/75e0da81-49b9-4d14-b41f-16c2c0751359.jpg" alt="Housewarming Decoration 1" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src="/1e631830-5a03-4c62-9230-c36bba689802.png" alt="Housewarming Decoration 2" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src="/6633b342-e24c-4d6b-9ea0-7bef49f66141.jpg" alt="Housewarming Decoration 3" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src="/ddbbe21d-b302-41b1-b540-d96886f6934a.jpg" alt="Housewarming Decoration 4" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src="/haldi-ring-decoration.png" alt="Housewarming Decoration 5" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src="/f584ba38-470f-4d64-944f-2383546039a1.jpg" alt="Housewarming Decoration 6" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src="/dac76f89-052b-49b0-bb30-830bf52781b7.jpg" alt="Housewarming Decoration 7" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
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
          <SectionHeader eyebrow="FAQs" title="Housewarming Decoration FAQs" />
          <div className="mt-8"><Faq items={c.faqs} /></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Available In" title="Housewarming Decoration in Your City" />
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {BRAND.cities.map((city) => (
            <Link
              key={city}
              to="/city/$slug"
              params={{ slug: city.toLowerCase() }}
              className="rounded-xl border bg-card p-3 text-center text-sm hover:border-primary hover:text-primary"
            >
              Housewarming in {city}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
