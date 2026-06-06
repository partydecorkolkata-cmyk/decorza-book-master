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
  const reviews = REVIEWS.filter(([, , s]) => (s as string) === "Mehendi Decoration").slice(0, 6);
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
            description="A clean, photo-ready mehendi decoration setup with a designer backdrop, themed props and warm lighting — exactly as shown in the picture."
            image="/ddbbe21d-b302-41b1-b540-d96886f6934a.jpg"
            includes={["✓\n Designer backdrop  ","Themed props & signage","Standard lighting setup"]}
            rating={4.7}
            reviews={123}
            offer={<>₹3,999</>}
            original={<>₹9,999</>}
            discountPct={60}
            bestSeller={false}
          />
          <StaticPackageCard
            id="mehendi-decoration-premium"
            name="Premium Mehendi Decoration"
            description="An upgraded mehendi decoration with a premium artificial flower arch, draped cloth backdrop, fresh floral accents and ambient fairy lights — styled like the reference photo."
            image="/f3443506-ae43-4c2b-a1b0-8bf5c9cfa542.jpg"
            includes={[" \nPremium artificial flower ","✓\nPremium cloth & light setup","Fresh flower accents"]}
            rating={4.8}
            reviews={172}
            offer={<>₹7,999</>}
            original={<>₹9,999</>}
            discountPct={20}
            bestSeller={false}
          />
          <StaticPackageCard
            id="mehendi-decoration-luxury"
            name="Luxury Mehendi Decoration"
            description="A full luxury mehendi decoration experience with a grand floral installation, sweetheart lounge seating, drapes and props — recreated to match the photo."
            image="/3b9eaec6-1f96-432f-af2d-1c0c14a2be84.jpg"
            includes={["Luxury floral installation","Customised stage / sweetheart corner","✓\nLight and props"]}
            rating={4.7}
            reviews={287}
            offer={<>₹12,999</>}
            original={<>₹18,999</>}
            discountPct={32}
            bestSeller={false}
          />
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
