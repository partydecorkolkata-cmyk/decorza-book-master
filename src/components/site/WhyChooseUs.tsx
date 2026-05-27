import { Sparkles, Clock, Users, Wallet, MapPin, MessageCircle, Gem, Award } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const ITEMS = [
  { icon: Award, title: "12,500+ Happy Celebrations", desc: "A decade of memorable moments delivered across India." },
  { icon: Clock, title: "Same Day Setup", desc: "Last-minute plans? Our team mobilises within hours." },
  { icon: Users, title: "Professional Decor Team", desc: "Trained, in-house decorators — never random freelancers." },
  { icon: Wallet, title: "Affordable Packages", desc: "Transparent pricing from ₹1,499 — no hidden charges." },
  { icon: MapPin, title: "Multi-City Service", desc: "7 cities and counting — Kolkata to Mumbai, Delhi to Pune." },
  { icon: MessageCircle, title: "WhatsApp Booking Support", desc: "Instant quotes, real photos, fast confirmations 24/7." },
  { icon: Gem, title: "Premium Decoration Materials", desc: "Imported balloons, fresh florals, LED neon, designer props." },
  { icon: Sparkles, title: "Trusted Event Experts", desc: "Featured on hundreds of celebrations every single month." },
];

export function WhyChooseUs() {
  return (
    <section className="bg-primary text-primary-foreground py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why Decorza"
          title="Why Choose Decorza Events"
          subtitle="Premium quality, dependable service, unforgettable celebrations."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur transition hover:-translate-y-1 hover:border-gold/40 hover:bg-white/10"
            >
              <div className="grid h-10 w-10 place-items-center rounded-full bg-gold/15 text-gold">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg leading-tight">{title}</h3>
              <p className="mt-1.5 text-xs text-white/75">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
