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
  const reviews = REVIEWS.filter(([, , s]) => s === "Anniversary Decoration").slice(0, 6);
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
            description="A clean, photo-ready anniversary decoration setup with a designer backdrop, themed props and warm lighting — exactly as shown in the picture."
            image="/745b9998-0fb1-4a81-a2cf-6f3870657562.jpg"
            includes={["✓\n Designer backdrop  ","Themed props & signage","Standard lighting setup"]}
            rating={4.800000000000001}
            reviews={520}
            offer={<>₹2,999</>}
            original={<>₹9,999</>}
            discountPct={70}
            bestSeller={false}
          />
          <StaticPackageCard
            id="anniversary-decoration-premium"
            name="Premium Anniversary Decoration"
            description="An upgraded anniversary decoration with a premium artificial flower arch, draped cloth backdrop, fresh floral accents and ambient fairy lights — styled like the reference photo."
            image="/9a913431-969c-4e55-998a-a7bba80c991b.webp"
            includes={[" \nPremium artificial flower ","✓\nPremium cloth & light setup","Fresh flower accents"]}
            rating={4.9}
            reviews={728}
            offer={<>₹4,499</>}
            original={<>₹9,999</>}
            discountPct={55}
            bestSeller={true}
          />
          <StaticPackageCard
            id="anniversary-decoration-luxury"
            name="Luxury Anniversary Decoration"
            description="A full luxury anniversary decoration experience with a grand floral installation, sweetheart lounge seating, drapes and props — recreated to match the photo."
            image="/b0418de5-2b26-48c7-bb26-a32effdfe487.webp"
            includes={["Luxury floral installation","Customised stage / sweetheart corner","✓\nLight and props"]}
            rating={4.800000000000001}
            reviews={1213}
            offer={<>₹9,999</>}
            original={<>₹9,999</>}
            discountPct={0}
            bestSeller={false}
          />
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
