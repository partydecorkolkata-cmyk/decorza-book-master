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

export const Route = createFileRoute("/service/theme-birthday-decoration")({
  loader: () => {
    const c = categoryBySlug("theme-birthday-decoration");
    if (!c) throw notFound();
    return { category: c };
  },
  head: () => ({
    meta: [
      { title: `Theme Birthday Decoration in India | From ₹2,499 | Decorza Events` },
      { name: "description", content: `From jungle and unicorn to football, princess and superhero themes — fully styled with props, balloons and themed backdrops. Book on WhatsApp.` },
      { property: "og:title", content: `Theme Birthday Decoration | Decorza Events` },
      { property: "og:image", content: "/6e61fd55-46fb-4711-b051-e933b22701bb.jpg" },
    ],
    links: [{ rel: "canonical", href: "/service/theme-birthday-decoration" }],
  }),
  component: ServicePage,
});

function ServicePage() {
  const { category: c } = Route.useLoaderData();
  const wa = waLink(waBookingMessage({ packageName: "Theme Birthday Decoration" }));
  const reviews = REVIEWS.filter(([, , s]) => s === "Theme Birthday Decoration").slice(0, 6);
  const displayReviews = reviews.length ? reviews : REVIEWS.slice(0, 6);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/6e61fd55-46fb-4711-b051-e933b22701bb.jpg" alt="Theme Birthday Decoration" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.2_0.08_305)]/90 to-[oklch(0.32_0.13_5)]/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
          <Badge className="bg-white/10 backdrop-blur border border-white/20 text-white">
            <Star className="mr-1 h-3 w-3 fill-gold text-gold" /> 4.8 · 1,340 reviews
          </Badge>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl">Theme Birthday Decoration</h1>
          <p className="mt-4 max-w-2xl text-white/85">From jungle and unicorn to football, princess and superhero themes — fully styled with props, balloons and themed backdrops.</p>
          <p className="mt-4 font-display text-2xl text-gold">Starting from ₹2,499</p>
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
        <SectionHeader eyebrow="Packages" title="Theme Birthday Decoration Packages" subtitle="Pick from Essential, Premium and Luxury — or customise on WhatsApp." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <StaticPackageCard
            id="theme-birthday-decoration-essential"
            name="Essential Theme Birthday Decoration"
            description="A clean, photo-ready theme birthday decoration setup with a designer backdrop, themed props and warm lighting — exactly as shown in the picture."
            image="/6e61fd55-46fb-4711-b051-e933b22701bb.jpg"
            includes={["✓\n Designer backdrop  ","Themed props & signage","Standard lighting setup"]}
            rating={4.7}
            reviews={383}
            offer={<>₹3,499</>}
            original={<>₹9,999</>}
            discountPct={65}
            bestSeller={false}
          />
          <StaticPackageCard
            id="theme-birthday-decoration-premium"
            name="Premium Theme Birthday Decoration"
            description="An upgraded theme birthday decoration with a premium artificial flower arch, draped cloth backdrop, fresh floral accents and ambient fairy lights — styled like the reference photo."
            image="/7e03dbe4-3334-458e-86b5-1a89a2631696.jpg"
            includes={[" \nPremium artificial flower ","✓\nPremium cloth & light setup","Fresh flower accents"]}
            rating={4.8}
            reviews={536}
            offer={<>₹4,999</>}
            original={<>₹12,500</>}
            discountPct={60}
            bestSeller={false}
          />
          <StaticPackageCard
            id="theme-birthday-decoration-luxury"
            name="Luxury Theme Birthday Decoration"
            description="A full luxury theme birthday decoration experience with a grand floral installation, sweetheart lounge seating, drapes and props — recreated to match the photo."
            image="/ff1d6103-d695-41a4-96af-b20031509e2a.webp"
            includes={["Luxury floral installation","Customised stage / sweetheart corner","✓\nLight and props"]}
            rating={4.7}
            reviews={893}
            offer={<>₹19,999</>}
            original={<>₹34,999</>}
            discountPct={43}
            bestSeller={false}
          />
        </div>
      </section>

      <section className="bg-secondary/40 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Gallery" title="Theme Birthday Decoration Gallery" subtitle="Real setups by our decor team." />
          <div className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-3">
            <img src="/6e61fd55-46fb-4711-b051-e933b22701bb.jpg" alt="Theme Birthday Decoration 1" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src="/7e03dbe4-3334-458e-86b5-1a89a2631696.jpg" alt="Theme Birthday Decoration 2" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src="/ff1d6103-d695-41a4-96af-b20031509e2a.webp" alt="Theme Birthday Decoration 3" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src="/4d42c4f0-d677-46b7-b753-3a7931e097e5.jpg" alt="Theme Birthday Decoration 4" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src="/48692914-e809-4527-a8d3-a55e5cb89842.webp" alt="Theme Birthday Decoration 5" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src="/893cdd5d-ba31-485a-a0ca-fbe8d1990fc7.jpg" alt="Theme Birthday Decoration 6" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
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
          <SectionHeader eyebrow="FAQs" title="Theme Birthday Decoration FAQs" />
          <div className="mt-8"><Faq items={c.faqs} /></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Available In" title="Theme Birthday Decoration in Your City" />
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {BRAND.cities.map((city) => (
            <Link
              key={city}
              to="/city/$slug"
              params={{ slug: city.toLowerCase() }}
              className="rounded-xl border bg-card p-3 text-center text-sm hover:border-primary hover:text-primary"
            >
              Theme in {city}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
