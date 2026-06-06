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

export const Route = createFileRoute("/service/haldi-decoration")({
  loader: () => {
    const c = categoryBySlug("haldi-decoration");
    if (!c) throw notFound();
    return { category: c };
  },
  head: () => ({
    meta: [
      { title: `Haldi Decoration in India | From ₹1,999 | Decorza Events` },
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
        <SectionHeader eyebrow="Packages" title="Haldi Decoration Packages" subtitle="Pick from Essential, Premium and Luxury — or customise on WhatsApp." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <StaticPackageCard
            id="haldi-decoration-essential"
            name="Essential Haldi Decoration"
            description="A clean, photo-ready haldi decoration setup with a designer backdrop, themed props and warm lighting — exactly as shown in the picture."
            image="/75e0da81-49b9-4d14-b41f-16c2c0751359.jpg"
            includes={["✓\n Designer backdrop  ","Themed props & signage","Standard lighting setup"]}
            rating={4.800000000000001}
            reviews={160}
            offer={<>₹4,999</>}
            original={<>₹9,999</>}
            discountPct={50}
            bestSeller={false}
          />
          <StaticPackageCard
            id="haldi-decoration-premium"
            name="Premium Haldi Decoration"
            description="An upgraded haldi decoration with a premium artificial flower arch, draped cloth backdrop, fresh floral accents and ambient fairy lights — styled like the reference photo."
            image="/haldi-ring-decoration.png"
            includes={[" \nPremium artificial flower ","✓\nPremium cloth & light setup","Fresh flower accents"]}
            rating={4.9}
            reviews={224}
            offer={<>₹8,500</>}
            original={<>₹11,999</>}
            discountPct={29}
            bestSeller={false}
          />
          <StaticPackageCard
            id="haldi-decoration-luxury"
            name="Luxury Haldi Decoration"
            description="A full luxury haldi decoration experience with a grand floral installation, sweetheart lounge seating, drapes and props — recreated to match the photo."
            image="/ac57fefc-1c84-403f-ba4d-264bd4c0948e.jpg"
            includes={["Luxury floral installation","Customised stage / sweetheart corner","✓\nLight and props"]}
            rating={4.800000000000001}
            reviews={373}
            offer={<>₹5,999</>}
            original={<>₹9,999</>}
            discountPct={40}
            bestSeller={false}
          />
          <StaticPackageCard
            id="haldi-decoration-marigold-cascade"
            name="Marigold Cascade Haldi Setup"
            description="A vibrant haldi backdrop layered with cascading marigold strings, yellow drapes and a wooden swing — bringing a traditional courtyard feel to your celebration."
            image="/cf7339f7-010d-43fa-b60a-9bf45b9a7760.jpg"
            includes={["Marigold cascade backdrop","Yellow & orange drapes","Wooden swing or low seating"]}
            rating={4.9}
            reviews={210}
            offer={<>₹7,999</>}
            original={<>₹7,999</>}
            discountPct={0}
            bestSeller={false}
          />
          <StaticPackageCard
            id="haldi-decoration-floral-jhoola"
            name="Floral Jhoola Haldi Special"
            description="A photogenic floral jhoola seating crafted with fresh yellow blooms, mango leaves and pastel drapes — perfect for those traditional haldi portraits."
            image="/f584ba38-470f-4d64-944f-2383546039a1.jpg"
            includes={["Floral jhoola swing seating","Pastel yellow draped backdrop","Hanging genda phool strings"]}
            rating={4.9}
            reviews={175}
            offer={<>₹5,999</>}
            original={<>₹11,999</>}
            discountPct={50}
            bestSeller={false}
          />
          <StaticPackageCard
            id="haldi-decoration-royal-courtyard"
            name="Royal Courtyard Haldi Mandap"
            description="A luxury haldi mandap with floral pillars, draped canopy and a sweetheart lounge — recreating a royal Indian courtyard for your ceremony."
            image="/e4da38f3-73cd-470c-885d-c617777fa1eb.jpg"
            includes={["Four-pillar floral mandap","Draped canopy ceiling","Sweetheart lounge seating"]}
            rating={5}
            reviews={132}
            offer={<>₹12,999</>}
            original={<>₹15,999</>}
            discountPct={19}
            bestSeller={false}
          />
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
