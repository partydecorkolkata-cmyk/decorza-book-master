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

export const Route = createFileRoute("/service/housewarming-decoration")({
  loader: () => {
    const c = categoryBySlug("housewarming-decoration");
    if (!c) throw notFound();
    return { category: c };
  },
  head: () => ({
    meta: [
      { title: `Housewarming Decoration in India | From ₹2,999 | Decorza Events` },
      { name: "description", content: `Traditional rangoli, floral entrances, mango leaf torans and lamp setups for housewarming ceremonies. Book on WhatsApp.` },
      { property: "og:title", content: `Housewarming Decoration | Decorza Events` },
      { property: "og:image", content: "/6633b342-e24c-4d6b-9ea0-7bef49f66141.jpg" },
    ],
    links: [{ rel: "canonical", href: "/service/housewarming-decoration" }],
  }),
  component: ServicePage,
});

function ServicePage() {
  const { category: c } = Route.useLoaderData();
  const wa = waLink(waBookingMessage({ packageName: "Housewarming Decoration" }));
  const reviews = REVIEWS.filter(([, , s]) => (s as string) === "Housewarming Decoration").slice(0, 6);
  const displayReviews = reviews.length ? reviews : REVIEWS.slice(0, 6);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/6633b342-e24c-4d6b-9ea0-7bef49f66141.jpg" alt="Housewarming Decoration" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.2_0.08_305)]/90 to-[oklch(0.32_0.13_5)]/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
          <Badge className="bg-white/10 backdrop-blur border border-white/20 text-white">
            <Star className="mr-1 h-3 w-3 fill-gold text-gold" /> 4.8 · 290 reviews
          </Badge>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl">Housewarming Decoration</h1>
          <p className="mt-4 max-w-2xl text-white/85">Traditional rangoli, floral entrances, mango leaf torans and lamp setups for housewarming ceremonies.</p>
          <p className="mt-4 font-display text-2xl text-gold">Starting from ₹2,999</p>
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
            name="Essential Housewarming Decoration"
            description="A clean, photo-ready housewarming decoration setup with a designer backdrop, themed props and warm lighting — exactly as shown in the picture."
            image="/75e0da81-49b9-4d14-b41f-16c2c0751359.jpg"
            includes={["✓\n Designer backdrop  ","Themed props & signage","Standard lighting setup"]}
            rating={4.7}
            reviews={83}
            offer={<>₹8,999</>}
            original={<>₹10,499</>}
            discountPct={14}
            bestSeller={false}
          />
          <StaticPackageCard
            id="housewarming-decoration-premium"
            name="Premium Housewarming Decoration"
            description="An upgraded housewarming decoration with a premium artificial flower arch, draped cloth backdrop, fresh floral accents and ambient fairy lights — styled like the reference photo."
            image="/1e631830-5a03-4c62-9230-c36bba689802.png"
            includes={[" \nPremium artificial flower ","✓\nPremium cloth & light setup","Fresh flower accents"]}
            rating={4.8}
            reviews={116}
            offer={<>₹6,999</>}
            original={<>₹12,500</>}
            discountPct={44}
            bestSeller={false}
          />
          <StaticPackageCard
            id="housewarming-decoration-luxury"
            name="Luxury Housewarming Decoration"
            description="A full luxury housewarming decoration experience with a grand floral installation, sweetheart lounge seating, drapes and props — recreated to match the photo."
            image="/6633b342-e24c-4d6b-9ea0-7bef49f66141.jpg"
            includes={["Luxury floral installation","Customised stage / sweetheart corner","✓\nLight and props"]}
            rating={4.7}
            reviews={193}
            offer={<>₹6,598</>}
            original={<>₹9,997</>}
            discountPct={34}
            bestSeller={false}
          />
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
