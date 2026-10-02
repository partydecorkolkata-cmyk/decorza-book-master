import { Star, Phone, CalendarCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PackageEnquiryDialog } from "@/components/site/PackageEnquiryDialog";
import type { Package } from "@/lib/data";

export function PackageCard({ pkg }: { pkg: Package }) {
  const discount = Math.round(((pkg.original - pkg.offer) / pkg.original) * 100);
  return (
    <Card className="group overflow-hidden border-border/60 p-0 transition-all hover:-translate-y-1 hover:shadow-luxury">
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary/50">
        <Link to="/package/$id" params={{ id: pkg.id }} aria-label={`View details for ${pkg.name}`}>
          <img
            src={pkg.image}
            alt={`${pkg.name} event decoration package by Decorza Events`}
            loading="lazy"
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
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
          <PackageEnquiryDialog
            packageId={pkg.id}
            name={pkg.name}
            description={pkg.description}
            image={pkg.image}
            includes={pkg.includes}
            offer={`₹${pkg.offer.toLocaleString()}`}
            original={`₹${pkg.original.toLocaleString()}`}
            triggerClassName="bg-whatsapp text-white hover:opacity-90"
            triggerIcon={<Phone className="mr-1 h-3.5 w-3.5" />}
          />
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
