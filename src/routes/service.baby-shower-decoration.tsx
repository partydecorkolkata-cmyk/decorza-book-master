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

export const Route = createFileRoute("/service/baby-shower-decoration")({
  loader: () => {
    const c = categoryBySlug("baby-shower-decoration");
    if (!c) throw notFound();
    return { category: c };
  },
  head: () => ({
    meta: [
      { title: `Baby Shower Decoration in India | From ₹1,999 | Decorza Events` },
      { name: "description", content: `Pastel balloon arches, floral backdrops and elegant baby shower setups for the mommy-to-be. Book on WhatsApp.` },
      { property: "og:title", content: `Baby Shower Decoration | Decorza Events` },
      { property: "og:image", content: "/2f34d637-44bd-46dd-8753-d31930cc31b6.jpg" },
    ],
    links: [{ rel: "canonical", href: "/service/baby-shower-decoration" }],
  }),
  component: ServicePage,
});

function ServicePage() {
  const { category: c } = Route.useLoaderData();
  const wa = waLink(waBookingMessage({ packageName: "Baby Shower Decoration" }));
  const reviews = REVIEWS.filter(([, , s]) => (s as string) === "Baby Shower Decoration").slice(0, 6);
  const displayReviews = reviews.length ? reviews : REVIEWS.slice(0, 6);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/2f34d637-44bd-46dd-8753-d31930cc31b6.jpg" alt="Baby Shower Decoration" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.2_0.08_305)]/90 to-[oklch(0.32_0.13_5)]/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
          <Badge className="bg-white/10 backdrop-blur border border-white/20 text-white">
            <Star className="mr-1 h-3 w-3 fill-gold text-gold" /> 4.9 · 870 reviews
          </Badge>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl">Baby Shower Decoration</h1>
          <p className="mt-4 max-w-2xl text-white/85">Pastel balloon arches, floral backdrops and elegant baby shower setups for the mommy-to-be.</p>
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
        <SectionHeader eyebrow="Packages" title="Baby Shower Decoration Packages" subtitle="Pick from Essential, Premium and Luxury — or customise on WhatsApp." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <StaticPackageCard
            id="baby-shower-decoration-essential"
            name="Essential Baby Shower Decoration"
            description="A clean, photo-ready baby shower decoration setup with a designer backdrop, themed props and warm lighting — exactly as shown in the picture."
            image="/2f34d637-44bd-46dd-8753-d31930cc31b6.jpg"
            includes={["✓\n Designer backdrop  ","Themed props & signage","Standard lighting setup"]}
            rating={4.800000000000001}
            reviews={249}
            offer={<>₹2,499</>}
            original={<>₹10,499</>}
            discountPct={76}
            bestSeller={false}
          />
          <StaticPackageCard
            id="baby-shower-decoration-premium"
            name="Premium Baby Shower Decoration"
            description="An upgraded baby shower decoration with a premium artificial flower arch, draped cloth backdrop, fresh floral accents and ambient fairy lights — styled like the reference photo."
            image="/38135b41-25f2-4c2f-a08f-cac6575c3b12.jpg"
            includes={[" \nPremium artificial flower ","✓\nPremium cloth & light setup","Fresh flower accents"]}
            rating={4.9}
            reviews={348}
            offer={<>₹5,999</>}
            original={<>₹12,500</>}
            discountPct={52}
            bestSeller={true}
          />
          <StaticPackageCard
            id="baby-shower-decoration-luxury"
            name="Luxury Baby Shower Decoration"
            description="A full luxury baby shower decoration experience with a grand floral installation, sweetheart lounge seating, drapes and props — recreated to match the photo."
            image="/6fec18e9-7b78-42b6-9764-cbb3037878e1.jpg"
            includes={["Luxury floral installation","Customised stage / sweetheart corner","✓\nLight and props"]}
            rating={4.800000000000001}
            reviews={580}
            offer={<>₹7,999</>}
            original={<>₹11,999</>}
            discountPct={33}
            bestSeller={false}
          />
        </div>
      </section>

      <section className="bg-secondary/40 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Gallery" title="Baby Shower Decoration Gallery" subtitle="Real setups by our decor team." />
          <div className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-3">
            <img src="/2f34d637-44bd-46dd-8753-d31930cc31b6.jpg" alt="Baby Shower Decoration 1" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src="/38135b41-25f2-4c2f-a08f-cac6575c3b12.jpg" alt="Baby Shower Decoration 2" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src="/6fec18e9-7b78-42b6-9764-cbb3037878e1.jpg" alt="Baby Shower Decoration 3" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src="/cefa309d-aa34-467c-aa1d-a6503bc509a8.webp" alt="Baby Shower Decoration 4" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src="/611a101e-21ad-44d4-b9df-2995798cd982.jpg" alt="Baby Shower Decoration 5" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src="/3e650746-51ce-4c70-bbab-c733c2f8b532.jpg" alt="Baby Shower Decoration 6" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src="/b3318de7-5a76-4dad-b0f6-4f752365071d.jpg" alt="Baby Shower Decoration 7" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
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
          <SectionHeader eyebrow="FAQs" title="Baby Shower Decoration FAQs" />
          <div className="mt-8"><Faq items={c.faqs} /></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Available In" title="Baby Shower Decoration in Your City" />
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {BRAND.cities.map((city) => (
            <Link
              key={city}
              to="/city/$slug"
              params={{ slug: city.toLowerCase() }}
              className="rounded-xl border bg-card p-3 text-center text-sm hover:border-primary hover:text-primary"
            >
              Baby in {city}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
