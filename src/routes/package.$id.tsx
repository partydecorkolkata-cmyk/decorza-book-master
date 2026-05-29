import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import {
  Phone, CalendarCheck, Star, Check, Clock, ShieldCheck, Sparkles, MapPin,
  Palette, Lightbulb, Wand2, PlusCircle, Truck, Users, Camera, Music,
} from "lucide-react";
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

// Premium balloon color palette options
const BALLOON_PALETTES = [
  { name: "Rose & Gold", colors: ["#f9c5d1", "#e8a0bf", "#d4a548", "#f5e6c8", "#ffffff"] },
  { name: "Pastel Dream", colors: ["#fde2e4", "#fad2e1", "#c5dedd", "#dbcdf0", "#f7d9c4"] },
  { name: "Royal Luxe", colors: ["#3d2c5e", "#6b4f9b", "#d4a548", "#1a0f2e", "#f5e6c8"] },
  { name: "Classic White", colors: ["#ffffff", "#f5f5f5", "#d4a548", "#e8d7a3", "#cccccc"] },
  { name: "Tropical Pop", colors: ["#ff6b6b", "#ffd166", "#06d6a0", "#118ab2", "#ef476f"] },
  { name: "Black & Gold", colors: ["#0a0a0a", "#1a1a1a", "#d4a548", "#f5e6c8", "#ffffff"] },
];

// LED neon name options
const LED_OPTIONS = [
  { label: "Custom Name", desc: "Up to 12 characters, LED neon flex" },
  { label: "Couple Initials", desc: "Stylish 2-letter monogram with heart" },
  { label: "Happy Birthday", desc: "Premium pre-made neon sign" },
  { label: "Marry Me", desc: "Romantic LED for proposal moments" },
  { label: "Mr & Mrs", desc: "Engagement & wedding signage" },
  { label: "Welcome Baby", desc: "Soft pastel LED for baby events" },
];

// Customization options
const CUSTOMIZATION = [
  { i: Palette, t: "Choose any balloon color palette" },
  { i: Lightbulb, t: "Custom LED name / message" },
  { i: Wand2, t: "Fresh flower upgrade (rose, orchid, lily)" },
  { i: Users, t: "Add seating & lounge styling" },
  { i: Camera, t: "Photo-ready props & backdrops" },
  { i: Music, t: "Soft music & fog effect on request" },
];

// Add-on services with pricing
const ADDONS = [
  { name: "Professional Photographer", price: 2999, desc: "1 hour shoot, 50+ edited photos" },
  { name: "Cinematic Videographer", price: 4999, desc: "Reel + highlight video" },
  { name: "Customised Cake (1kg)", price: 1499, desc: "Designer cake, premium flavours" },
  { name: "Fog / Cold-pyro Effect", price: 1999, desc: "Wow-moment entry effect" },
  { name: "Live Singer / Guitarist", price: 5999, desc: "30-min live acoustic set" },
  { name: "Premium Floral Upgrade", price: 2499, desc: "Fresh roses, orchids, lilies" },
  { name: "Bouquet & Chocolates", price: 999, desc: "Premium bouquet + Ferrero box" },
  { name: "Late-night Setup (post 10pm)", price: 1499, desc: "Setup between 10pm – 6am" },
];

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

      {/* HERO: GALLERY + DETAIL */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="overflow-hidden rounded-2xl shadow-luxury">
              <img src={pkg.image} alt={pkg.name} className="aspect-[4/3] w-full object-cover" />
            </div>
            <div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-6">
              {pkg.gallery.map((g: string, i: number) => (
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
                {pkg.includes.map((i: string) => (
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

      {/* DECORATION SETUP DETAILS */}
      <section className="border-y bg-gradient-to-b from-secondary/30 to-background py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="What you get" title="Decoration Setup Details" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { i: Sparkles, t: "Premium Quality Balloons", d: "Imported matte & chrome balloons, hand-inflated on-site. No leaks, no shine drops." },
              { i: Palette, t: "Designer Backdrop", d: "Themed fabric or paper backdrop styled to your colour palette and occasion." },
              { i: Lightbulb, t: "Ambient & LED Lighting", d: "Fairy lights, warm spots and LED uplighters create a magical, camera-ready vibe." },
              { i: Wand2, t: "Fresh Florals & Props", d: "Roses, orchids, marigolds plus themed props installed by our experienced florists." },
            ].map(({ i: I, t, d }) => (
              <div key={t} className="rounded-2xl border bg-card p-6 transition hover:-translate-y-1 hover:shadow-luxury">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <I className="h-5 w-5" />
                </div>
                <h4 className="mt-4 font-display text-lg">{t}</h4>
                <p className="mt-1.5 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BALLOON COLORS + LED NAME */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Balloon palettes */}
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold">
              <Palette className="h-4 w-4" /> Balloon Colours
            </div>
            <h2 className="mt-2 font-display text-3xl">Pick your palette</h2>
            <p className="mt-2 text-sm text-muted-foreground">Choose any of our signature palettes \u2014 or share your own colour scheme on WhatsApp. We\u2019ll match it exactly.</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {BALLOON_PALETTES.map((p) => (
                <div key={p.name} className="rounded-2xl border bg-card p-4 transition hover:border-primary">
                  <div className="flex items-center gap-1.5">
                    {p.colors.map((c) => (
                      <span key={c} className="h-7 w-7 rounded-full ring-2 ring-background shadow-sm" style={{ background: c }} />
                    ))}
                  </div>
                  <p className="mt-3 text-sm font-semibold">{p.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* LED name */}
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold">
              <Lightbulb className="h-4 w-4" /> LED Name Setup
            </div>
            <h2 className="mt-2 font-display text-3xl">Personalised neon signage</h2>
            <p className="mt-2 text-sm text-muted-foreground">A glowing LED neon sign is the heart of every Decorza setup. Pick a ready design or get a fully custom name made just for your event.</p>
            <div className="mt-6 grid gap-3">
              {LED_OPTIONS.map((l) => (
                <div key={l.label} className="flex items-start gap-3 rounded-xl border bg-card p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <Lightbulb className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{l.label}</p>
                    <p className="text-xs text-muted-foreground">{l.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">Custom LED neon may add 24-hour fabrication time. Confirm on WhatsApp.</p>
          </div>
        </div>
      </section>

      {/* CUSTOMIZATION OPTIONS */}
      <section className="bg-secondary/40 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Make it yours" title="Customisation Options" subtitle="Every Decorza setup is fully customisable. Mix, match and personalise to match your vision." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CUSTOMIZATION.map(({ i: I, t }) => (
              <div key={t} className="flex items-center gap-4 rounded-2xl border bg-card p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <I className="h-5 w-5" />
                </div>
                <p className="text-sm font-medium">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SETUP DURATION & PROCESS */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="How it works" title="Setup Duration & Process" />
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {[
            { step: "01", t: "Book & confirm", d: "WhatsApp or fill the form. We confirm within minutes." },
            { step: "02", t: "Team dispatched", d: "Our decor team reaches your venue 60-90 minutes early." },
            { step: "03", t: "Setup in progress", d: `${pkg.setupTime} \u2014 quiet, professional, on-time installation.` },
            { step: "04", t: "Enjoy & cleanup", d: "Celebrate your moment. We return for hassle-free cleanup." },
          ].map((s) => (
            <div key={s.step} className="rounded-2xl border bg-card p-6">
              <span className="font-display text-3xl text-gold">{s.step}</span>
              <h4 className="mt-3 font-display text-lg">{s.t}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ADD-ON SERVICES */}
      <section className="border-y bg-gradient-to-b from-background to-secondary/40 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Make it unforgettable" title="Add-on Services" subtitle="Elevate your celebration with these premium add-ons. Add any of them when you book." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ADDONS.map((a) => (
              <div key={a.name} className="group flex flex-col rounded-2xl border bg-card p-5 transition hover:-translate-y-1 hover:border-primary hover:shadow-luxury">
                <PlusCircle className="h-5 w-5 text-gold" />
                <h4 className="mt-3 font-display text-base">{a.name}</h4>
                <p className="mt-1 flex-1 text-xs text-muted-foreground">{a.desc}</p>
                <p className="mt-3 font-display text-lg text-primary">+ \u20B9{a.price.toLocaleString()}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <Truck className="h-4 w-4 text-gold" /> Free delivery & setup within city limits.
          </p>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-14">
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
      <section className="bg-secondary/30 py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeader eyebrow="FAQs" title="Common Questions" center={false} />
            <div className="mt-6"><Faq items={category.faqs} /></div>
          </div>
          <div className="rounded-2xl border bg-card p-6 shadow-luxury">
            <h3 className="font-display text-2xl">Book This Package</h3>
            <p className="mt-1 text-sm text-muted-foreground">Fill the form \u2014 we\u2019ll confirm availability on WhatsApp within minutes.</p>
            <div className="mt-5"><BookingForm defaultPackageId={pkg.id} /></div>
            <div className="mt-4 rounded-xl bg-whatsapp/10 p-4 text-sm">
              <p className="font-semibold text-whatsapp">Prefer WhatsApp?</p>
              <p className="mt-1 text-xs text-muted-foreground">Chat with our decor specialist now \u2014 share your date, city & vision.</p>
              <Button asChild className="mt-3 w-full bg-whatsapp hover:opacity-90 text-white">
                <a href={wa} target="_blank" rel="noopener"><Phone className="mr-2 h-4 w-4" /> WhatsApp {BRAND.whatsappDisplay}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="py-14">
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
