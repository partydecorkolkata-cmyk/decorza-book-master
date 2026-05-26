import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/site/SectionHeader";
import { ReviewCard } from "@/components/site/ReviewCard";
import { BRAND } from "@/lib/brand";
import { REVIEWS, WHY_CHOOSE } from "@/lib/data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Decorza Events | Premium Event Decorators in India" },
      { name: "description", content: "Decorza Events specializes in premium event decoration and celebration experiences across Kolkata, Siliguri, Delhi, Mumbai, Bengaluru, Hyderabad and Pune." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="bg-secondary/40 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <SectionHeader eyebrow="About Us" title="Crafting Memorable Celebrations" />
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {BRAND.name} specializes in premium event decoration and celebration experiences across {BRAND.cities.slice(0, -1).join(", ")} and {BRAND.cities.slice(-1)}. From birthdays and anniversaries to proposals, baby showers, engagements and romantic surprises, we transform special occasions into unforgettable memories through creative designs, professional execution and exceptional customer service.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { v: "12,500+", l: "Celebrations Delivered" },
            { v: "4.9 / 5", l: "Average Customer Rating" },
            { v: "7", l: "Cities Across India" },
          ].map((s) => (
            <div key={s.l} className="rounded-2xl border bg-card p-8 text-center">
              <p className="font-display text-4xl text-primary">{s.v}</p>
              <p className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Our Promise" title="Why Customers Trust Us" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_CHOOSE.map((w) => (
              <div key={w.title} className="rounded-2xl border border-white/15 bg-white/5 p-6">
                <h3 className="font-display text-xl text-gold">{w.title}</h3>
                <p className="mt-2 text-sm text-white/85">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Testimonials" title="What Our Customers Say" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {REVIEWS.map(([name, city, service, text, rating], i) => (
            <ReviewCard key={i} name={name} city={city} service={service} text={text} rating={rating as number} />
          ))}
        </div>
      </section>
    </>
  );
}
