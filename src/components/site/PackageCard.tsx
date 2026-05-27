import { Star, Phone, CalendarCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { waLink, waBookingMessage } from "@/lib/brand";
import type { Package } from "@/lib/data";

export function PackageCard({ pkg }: { pkg: Package }) {
  const discount = Math.round(((pkg.original - pkg.offer) / pkg.original) * 100);
  const wa = waLink(waBookingMessage({ packageName: pkg.name }));
  return (
    <Card className="group overflow-hidden border-border/60 p-0 transition-all hover:-translate-y-1 hover:shadow-luxury">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {discount > 0 && (
          <Badge className="absolute left-3 top-3 bg-rose-brand text-white">
            {discount}% OFF
          </Badge>
        )}
        {pkg.bestSeller && (
          <Badge className="absolute right-3 top-3 bg-gold text-[oklch(0.18_0.05_305)]">
            Best Seller
          </Badge>
        )}
      </div>
      <div className="flex flex-col gap-3 p-4">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2 py-0.5 font-semibold text-primary">
            <Star className="h-3 w-3 fill-gold text-gold" /> {pkg.rating.toFixed(1)}
          </span>
          <span>{pkg.reviews.toLocaleString()} reviews</span>
        </div>
        <h3 className="font-display text-lg leading-tight">{pkg.name}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{pkg.description}</p>
        <ul className="space-y-1 text-xs text-muted-foreground">
          {pkg.includes.slice(0, 3).map((i) => (
            <li key={i} className="flex gap-1.5">
              <span className="text-gold">✓</span> {i}
            </li>
          ))}
        </ul>
        <div className="flex items-baseline gap-2">
          <span className="font-display text-2xl text-primary">₹{pkg.offer.toLocaleString()}</span>
          <span className="text-sm text-muted-foreground line-through">
            ₹{pkg.original.toLocaleString()}
          </span>
        </div>
        <div className="mt-1 grid grid-cols-2 gap-2">
          <Button asChild size="sm" className="bg-whatsapp hover:opacity-90 text-white">
            <a href={wa} target="_blank" rel="noopener">
              <Phone className="mr-1 h-3.5 w-3.5" /> WhatsApp
            </a>
          </Button>
          <Button asChild size="sm" variant="outline">
            <Link to="/package/$id" params={{ id: pkg.id }}>
              <CalendarCheck className="mr-1 h-3.5 w-3.5" /> View Details
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
}
