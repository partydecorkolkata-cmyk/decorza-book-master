import { Link } from "@tanstack/react-router";
import { Star, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { waLink, waBookingMessage } from "@/lib/brand";
import type { Category } from "@/lib/data";

export function CategoryCard({ c }: { c: Category }) {
  const wa = waLink(waBookingMessage({ packageName: c.name }));
  return (
    <div className="group relative overflow-hidden rounded-2xl border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-luxury">
      <Link
        to="/service/$slug"
        params={{ slug: c.slug }}
        className="block aspect-[5/4] overflow-hidden"
      >
        <img
          src={c.hero}
          alt={c.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-4 text-white">
          <div className="mb-1 flex items-center gap-2 text-xs">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/20 px-2 py-0.5 backdrop-blur">
              <Star className="h-3 w-3 fill-gold text-gold" /> {c.rating.toFixed(1)}
            </span>
            <span className="opacity-80">{c.reviews.toLocaleString()} reviews</span>
          </div>
          <h3 className="font-display text-xl leading-tight">{c.name}</h3>
          <p className="mt-1 text-xs opacity-85 line-clamp-1">{c.short}</p>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-gold font-semibold">From ₹{c.startsAt.toLocaleString()}</span>
            <span className="text-xs line-through opacity-70">
              ₹{Math.round(c.startsAt * 1.6).toLocaleString()}
            </span>
          </div>
        </div>
      </Link>
      <div className="grid grid-cols-2 gap-px bg-border">
        <a
          href={wa}
          target="_blank"
          rel="noopener"
          className="flex items-center justify-center gap-1 bg-whatsapp py-2.5 text-xs font-semibold text-white"
        >
          <Phone className="h-3 w-3" /> WhatsApp
        </a>
        <Link
          to="/service/$slug"
          params={{ slug: c.slug }}
          className="flex items-center justify-center bg-primary py-2.5 text-xs font-semibold text-primary-foreground"
        >
          View Packages
        </Link>
      </div>
    </div>
  );
}
