import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Phone, CalendarCheck, Star, Check, Clock, ShieldCheck, Sparkles, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/site/SectionHeader";
import { ReviewCard } from "@/components/site/ReviewCard";
import { Faq } from "@/components/site/Faq";
import { BookingForm } from "@/components/site/BookingForm";
import { BRAND, waLink, waBookingMessage } from "@/lib/brand";
import { packageById, categoryBySlug, REVIEWS, PACKAGES } from "@/lib/data";

export const Route = createFileRoute("/package/$id")({
  loader: ({ params }) => {
    const pkg = packageById(params.id);
    if (!pkg) throw notFound();
    const category = categoryBySlug(pkg.categorySlug)!;
    return { pkg, category };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.pkg;
    if (!p) return {};
    return {
      meta: [
        { title: `${p.name} | \u20B9${p.offer.toLocaleString()} | Decorza Events` },
        { name: "description", content: `${p.name} \u2014 starting at \u20B9${p.offer.toLocaleString()}. Includes ${p.includes.slice(0, 3).join(", ")}. Book on WhatsApp ${BRAND.whatsappDisplay}.` },
        { property: "og:title", content: `${p.name} | Decorza Events` },
        { property: "og:description", content: p.description },
        { property: "og:image", content: p.image },
        { property: "og:type", content: "product" },
      ],
      links: [{ rel: "canonical", href: `/package/${p.id}` }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: p.name,
          image: p.gallery,
          description: p.longDescription,
          brand: { "@type": "Brand", name: "Decorza Events" },
          aggregateRating: { "@type": "AggregateRating", ratingValue: p.rating, reviewCount: p.reviews },
          offers: { "@type": "Offer", priceCurrency: "INR", price: p.offer, availability: "https://schema.org/InStock" },
        }),
      }],
    };
  },
  component: PackageDetailPage,
});

function PackageDetailPage() {
  const { pkg, category } = Route.useLoaderData();
  const wa = waLink(waBookingMessage({ packageName: pkg.name }));
  const discount = Math.round(((pkg.original - pkg.offer) / pkg.original) * 100);
  const reviews = REVIEWS.filter(([, , s]) => s === category.name).slice(0, 6);
  const display = reviews.length ? reviews : REVIEWS.slice(0, 6);
  const related = PACKAGES.filter((p) => p.categorySlug === pkg.categorySlug && p.id !== pkg.id);

  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 py-3 text-xs text-muted-foreground sm:px-6 lg:px-8">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/packages" className="hover:text-primary">Packages</Link>
          <span className="mx-2">/</span>
          <Link to="/service/$slug" params={{ slug: category.slug }} className="hover:text-primary">{category.name}</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground font-medium">{pkg.name}</span>
        </div>
      </div>

      {/* GALLERY + DETAIL */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="overflow-hidden rounded-2xl shadow-luxury">
              <img src={pkg.image} alt={pkg.name} className="aspect-[4/3] w-full object-cover" />
            </div>
            <div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-6">
              {pkg.gallery.map((g, i) => (
                <img key={i} src={g} alt={`${pkg.name} ${i + 1}`} loading="lazy" className="aspect-square w-full rounded-lg object-cover ring-1 ring-border hover:ring-primary transition" />
              ))}
            </div>
          </div>

          <div>
            <Badge variant="outline" className="border-gold/30 text-gold">{category.name}</Badge>
            <h1 className="mt-3 font-display text-3xl sm:text-4xl">{pkg.name}</h1>
            <div className="mt-2 flex items-center gap-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2 py-0.5 font-semibold text-primary">
                <Star className="h-3.5 w-3.5 fill-gold text-gold" /> {pkg.rating.toFixed(1)}
              </span>
              <span>{pkg.reviews.toLocaleString()} reviews</span>
              {pkg.bestSeller && <Badge className="bg-gold text-[oklch(0.18_0.05_305)]">Best Seller</Badge>}
            </div>

            <div className="mt-5 flex items-baseline gap-3">
              <span className="font-display text-4xl text-primary">\u20B9{pkg.offer.toLocaleString()}</span>
              <span className="text-base text-muted-foreground line-through">\u20B9{pkg.original.toLocaleString()}</span>
              {discount > 0 && <Badge className="bg-rose-brand text-white">{discount}% OFF</Badge>}
            </div>
            <p className="mt-1 text-xs text-muted-foreground">Inclusive of setup & cleanup. Custom add-ons available on request.</p>

            <p className="mt-5 text-sm text-muted-foreground">{pkg.longDescription}</p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-whatsapp hover:opacity-90 text-white">
                <a href={wa} target="_blank" rel="noopener"><Phone className="mr-2 h-4 w-4" /> Book on WhatsApp</a>
              </Button>
              <Button asChild size="lg" className="bg-gold text-[oklch(0.18_0.05_305)] hover:opacity-90">
                <Link to="/book" search={{ pkg: pkg.id }}><CalendarCheck className="mr-2 h-4 w-4" /> Book Online</Link>
              </Button>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {[
                { i: Clock, t: pkg.setupTime },
                { i: Sparkles, t: pkg.duration },
                { i: ShieldCheck, t: "On-time guarantee" },
              ].map(({ i: I, t }) => (
                <div key={t} className="rounded-xl border bg-card p-3">
                  <I className="mx-auto h-5 w-5 text-gold" />
                  <p className="mt-1 text-xs font-medium">{t}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border bg-card p-5">
              <h3 className="font-display text-lg">Package Inclusions</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {pkg.includes.map((i) => (
                  <li key={i} className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-gold mt-0.5" /> {i}</li>
                ))}
              </ul>
            </div>

            <div className="mt-4 rounded-2xl border border-gold/30 bg-gold/5 p-4 text-sm">
              <p className="font-semibold text-primary">Available in all 7 cities</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {BRAND.cities.map((c) => (
                  <Link key={c} to="/city/$slug" params={{ slug: c.toLowerCase() }} className="inline-flex items-center gap-1 rounded-full border bg-background px-2.5 py-1 text-xs hover:border-primary hover:text-primary">
                    <MapPin className="h-3 w-3" /> {c}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-secondary/40 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Reviews" title={`What customers say about ${category.name}`} />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {display.map(([name, city, service, text, rating], i) => (
              <ReviewCard key={i} name={name} city={city} service={service} text={text} rating={rating as number} />
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING + FAQ */}
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionHeader eyebrow="FAQs" title="Common Questions" center={false} />
          <div className="mt-6"><Faq items={category.faqs} /></div>
        </div>
        <div className="rounded-2xl border bg-card p-6">
          <h3 className="font-display text-2xl">Book This Package</h3>
          <p className="mt-1 text-sm text-muted-foreground">Fill the form \u2014 we\u2019ll confirm availability on WhatsApp within minutes.</p>
          <div className="mt-5"><BookingForm defaultPackageId={pkg.id} /></div>
        </div>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="bg-secondary/30 py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader eyebrow="Also explore" title={`Other ${category.name} Packages`} />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <Link key={p.id} to="/package/$id" params={{ id: p.id }} className="group overflow-hidden rounded-2xl border bg-card transition hover:-translate-y-1 hover:shadow-luxury">
                  <img src={p.image} alt={p.name} loading="lazy" className="aspect-[4/3] w-full object-cover transition group-hover:scale-105" />
                  <div className="p-4">
                    <h4 className="font-display text-lg">{p.name}</h4>
                    <div className="mt-2 flex items-baseline gap-2">
                      <span className="font-display text-xl text-primary">\u20B9{p.offer.toLocaleString()}</span>
                      <span className="text-xs text-muted-foreground line-through">\u20B9{p.original.toLocaleString()}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
