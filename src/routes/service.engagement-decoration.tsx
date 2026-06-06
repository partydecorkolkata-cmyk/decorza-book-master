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
            description="A clean, photo-ready engagement decoration setup with a designer backdrop, themed props and warm lighting — exactly as shown in the picture."
            image="/bd0376ae-9b5b-4709-b15a-e12b400d023d.png"
            includes={["✓\n Designer backdrop  ","Themed props & signage","Standard lighting setup"]}
            rating={4.800000000000001}
            reviews={197}
            offer={<>₹6,999</>}
            original={<>₹10,499</>}
            discountPct={33}
            bestSeller={false}
          />
          <StaticPackageCard
            id="engagement-decoration-premium"
            name="Premium Engagement Decoration"
            description="An upgraded engagement decoration with a premium artificial flower arch, draped cloth backdrop, fresh floral accents and ambient fairy lights — styled like the reference photo."
            image="/942d57ec-d885-471e-bd0d-3bae09b3ea63.jpg"
            includes={[" \nPremium artificial flower ","✓\nPremium cloth & light setup","Fresh flower accents"]}
            rating={4.9}
            reviews={276}
            offer={<>₹7,999</>}
            original={<>₹12,500</>}
            discountPct={36}
            bestSeller={false}
          />
          <StaticPackageCard
            id="engagement-decoration-luxury"
            name="Luxury Engagement Decoration"
            description="A full luxury engagement decoration experience with a grand floral installation, sweetheart lounge seating, drapes and props — recreated to match the photo."
            image="/092f68ee-d169-404c-97de-a830bbd7c3e2.jpg"
            includes={["Luxury floral installation","Customised stage / sweetheart corner","✓\nLight and props"]}
            rating={4.800000000000001}
            reviews={460}
            offer={<>₹12,999</>}
            original={<>₹18,999</>}
            discountPct={32}
            bestSeller={false}
          />
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
