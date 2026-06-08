import { useState } from "react";
import { Star, Phone, CalendarCheck, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { BRAND, waLink, waBookingMessage } from "@/lib/brand";
import { toast } from "sonner";
import type { ReactNode } from "react";

export function StaticPackageCard({
  id, name, description, image, includes, rating, reviews,
  offer, original, discountPct, bestSeller,
}: {
  id: string;
  name: string;
  description: string;
  image: string;
  includes: string[];
  rating: number;
  reviews: number;
  offer: ReactNode;
  original: ReactNode;
  discountPct: number;
  bestSeller?: boolean;
}) {
  const wa = waLink(waBookingMessage({ packageName: name }));
  const [open, setOpen] = useState(false);

  return (
    <Card className="group overflow-hidden border-border/60 p-0 transition-all hover:-translate-y-1 hover:shadow-luxury">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={image} alt={name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        {discountPct > 0 && (
          <Badge className="absolute left-3 top-3 bg-rose-brand text-white">{discountPct}% OFF</Badge>
        )}
        {bestSeller && (
          <Badge className="absolute right-3 top-3 bg-gold text-[oklch(0.18_0.05_305)]">Best Seller</Badge>
        )}
      </div>
      <div className="flex flex-col gap-3 p-4">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2 py-0.5 font-semibold text-primary">
            <Star className="h-3 w-3 fill-gold text-gold" /> {rating.toFixed(1)}
          </span>
          <span>{reviews.toLocaleString()} reviews</span>
        </div>
        <h3 className="font-display text-lg leading-tight">{name}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        <ul className="space-y-1 text-xs text-muted-foreground">
          {includes.map((i) => (
            <li key={i} className="flex gap-1.5"><span className="text-gold">✓</span> {i}</li>
          ))}
        </ul>
        <div className="flex items-baseline gap-2">
          <span className="font-display text-2xl text-primary">{offer}</span>
          <span className="text-sm text-muted-foreground line-through">{original}</span>
        </div>
        <div className="mt-1 grid grid-cols-2 gap-2">
          <Button asChild size="sm" className="bg-whatsapp hover:opacity-90 text-white">
            <a href={wa} target="_blank" rel="noopener"><Phone className="mr-1 h-3.5 w-3.5" /> WhatsApp</a>
          </Button>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button size="sm" variant="outline">
                <CalendarCheck className="mr-1 h-3.5 w-3.5" /> View Details
              </Button>
            </DialogTrigger>
            <PackageDetailsDialog
              id={id}
              name={name}
              description={description}
              image={image}
              includes={includes}
              offer={offer}
              original={original}
              discountPct={discountPct}
              wa={wa}
            />
          </Dialog>
        </div>
      </div>
    </Card>
  );
}

function PackageDetailsDialog({
  name, description, image, includes, offer, original, discountPct, wa,
}: {
  id: string;
  name: string;
  description: string;
  image: string;
  includes: string[];
  offer: ReactNode;
  original: ReactNode;
  discountPct: number;
  wa: string;
}) {
  const [form, setForm] = useState({ name: "", mobile: "", date: "", city: "", notes: "" });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.mobile || !form.date) {
      toast.error("Please fill name, mobile and event date.");
      return;
    }
    const msg = [
      `Hello ${BRAND.name},`,
      `Enquiry for: ${name}`,
      ``,
      `Name: ${form.name}`,
      `Mobile: ${form.mobile}`,
      `City: ${form.city}`,
      `Event Date: ${form.date}`,
      `Notes: ${form.notes}`,
      ``,
      `Please share availability & final quote.`,
    ].join("\n");
    window.open(waLink(msg), "_blank", "noopener");
    toast.success("Opening WhatsApp with your enquiry…");
  }

  return (
    <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="font-display text-2xl">{name}</DialogTitle>
        <DialogDescription className="sr-only">Package details and enquiry form</DialogDescription>
      </DialogHeader>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-3">
          <div className="overflow-hidden rounded-xl">
            <img src={image} alt={name} className="aspect-[4/3] w-full object-cover" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-display text-2xl text-primary">{offer}</span>
            <span className="text-sm text-muted-foreground line-through">{original}</span>
            {discountPct > 0 && (
              <Badge className="bg-rose-brand text-white">{discountPct}% OFF</Badge>
            )}
          </div>
          <p className="text-sm text-muted-foreground">{description}</p>
          <div>
            <p className="text-sm font-semibold">What's included</p>
            <ul className="mt-1.5 space-y-1 text-sm text-muted-foreground">
              {includes.map((i) => (
                <li key={i} className="flex gap-1.5"><Check className="h-4 w-4 shrink-0 text-gold mt-0.5" /> {i}</li>
              ))}
            </ul>
          </div>
          <Button asChild className="w-full bg-whatsapp hover:opacity-90 text-white">
            <a href={wa} target="_blank" rel="noopener">
              <Phone className="mr-2 h-4 w-4" /> Chat on WhatsApp ({BRAND.whatsappDisplay})
            </a>
          </Button>
        </div>

        <form onSubmit={submit} className="space-y-3 rounded-xl border bg-card p-4">
          <p className="font-display text-lg">Enquire about this decoration</p>
          <div>
            <Label htmlFor="dlg-name">Full name *</Label>
            <Input id="dlg-name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
          </div>
          <div>
            <Label htmlFor="dlg-mobile">Mobile / WhatsApp *</Label>
            <Input id="dlg-mobile" inputMode="tel" value={form.mobile} onChange={(e) => setForm({ ...form, mobile: e.target.value })} required />
          </div>
          <div>
            <Label htmlFor="dlg-city">City</Label>
            <Input id="dlg-city" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} />
          </div>
          <div>
            <Label htmlFor="dlg-date">Event date *</Label>
            <Input id="dlg-date" type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} required />
          </div>
          <div>
            <Label htmlFor="dlg-notes">Notes</Label>
            <Textarea id="dlg-notes" rows={3} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} />
          </div>
          <Button type="submit" className="w-full bg-whatsapp hover:opacity-90 text-white">
            Send Enquiry via WhatsApp
          </Button>
          <p className="text-xs text-muted-foreground">We reply within minutes on {BRAND.whatsappDisplay}.</p>
        </form>
      </div>
    </DialogContent>
  );
}
