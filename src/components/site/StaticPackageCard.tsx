import { useEffect, useState } from "react";
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
import { BRAND, waLink } from "@/lib/brand";
import { PackageEnquiryDialog } from "@/components/site/PackageEnquiryDialog";
import { toast } from "sonner";
import type { ReactNode } from "react";
import { z } from "zod";

const detailsEnquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(100, "Name is too long."),
  mobile: z.string().trim().regex(/^\+?[0-9\s()-]{8,20}$/, "Please enter a valid mobile number."),
  address: z.string().trim().min(8, "Please enter the full decoration address.").max(500, "Address is too long."),
  city: z.string().trim().max(100, "City is too long."),
  date: z.iso.date("Please select a valid event date."),
  time: z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/, "Please select a valid decoration time."),
  notes: z.string().trim().max(800, "Notes are too long."),
});

const DETAILS_STORAGE_KEY = "decorza-customer-enquiry-details";

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
  const [open, setOpen] = useState(false);
  const offerText = reactNodeText(offer);
  const originalText = reactNodeText(original);

  return (
    <Card className="group overflow-hidden border-border/60 p-0 transition-all hover:-translate-y-1 hover:shadow-luxury">
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary/50">
        <img src={image} alt={`${name} event decoration package by Decorza Events`} loading="lazy" className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105" />
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
          {includes.filter((i) => i.trim()).map((i) => (
            <li key={i} className="flex gap-1.5"><span className="text-gold">✓</span> {i}</li>
          ))}
        </ul>
        <div className="flex items-baseline gap-2">
          <span className="font-display text-2xl text-primary">{offer}</span>
          <span className="text-sm text-muted-foreground line-through">{original}</span>
        </div>
        <div className="mt-1 grid grid-cols-2 gap-2">
          <PackageEnquiryDialog
            packageId={id}
            name={name}
            description={description}
            image={image}
            includes={includes}
            offer={offerText}
            original={originalText}
            triggerClassName="bg-whatsapp text-white hover:opacity-90"
            triggerIcon={<Phone className="mr-1 h-3.5 w-3.5" />}
          />
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
            />
          </Dialog>
        </div>
      </div>
    </Card>
  );
}

function PackageDetailsDialog({
  id, name, description, image, includes, offer, original, discountPct,
}: {
  id: string;
  name: string;
  description: string;
  image: string;
  includes: string[];
  offer: ReactNode;
  original: ReactNode;
  discountPct: number;
}) {
  const [form, setForm] = useState({ name: "", mobile: "", address: "", date: "", time: "", city: "", notes: "" });

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(DETAILS_STORAGE_KEY);
      if (!saved) return;
      const parsed = z.object({
        name: z.string().optional(),
        phone: z.string().optional(),
        address: z.string().optional(),
        date: z.string().optional(),
        time: z.string().optional(),
      }).safeParse(JSON.parse(saved));
      if (parsed.success) setForm((current) => ({
        ...current,
        name: parsed.data.name ?? current.name,
        mobile: parsed.data.phone ?? current.mobile,
        address: parsed.data.address ?? current.address,
        date: parsed.data.date ?? current.date,
        time: parsed.data.time ?? current.time,
      }));
    } catch {
      // Ignore unavailable or malformed browser storage.
    }
  }, []);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const result = detailsEnquirySchema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0]?.message ?? "Please check your enquiry details.");
      return;
    }
    const customer = result.data;
    try {
      window.localStorage.setItem(DETAILS_STORAGE_KEY, JSON.stringify({
        name: customer.name,
        phone: customer.mobile,
        address: customer.address,
        date: customer.date,
        time: customer.time,
      }));
    } catch {
      // Continue to WhatsApp when browser storage is unavailable.
    }
    const imageUrl = new URL(image, window.location.origin).href;
    const packageUrl = new URL(`/package/${encodeURIComponent(id)}`, window.location.origin).href;
    const msg = [
      `Hello ${BRAND.name},`,
      `I would like to enquire about this decoration package.`,
      ``,
      `PACKAGE DETAILS`,
      `Package: ${name}`,
      `Selling Price: ${reactNodeText(offer)}`,
      `MRP: ${reactNodeText(original)}`,
      `Description: ${description.trim()}`,
      `Package Image: ${imageUrl}`,
      `Package Page: ${packageUrl}`,
      `What's Included:`,
      ...includes.filter((item) => item.trim()).map((item) => `• ${item.trim()}`),
      ``,
      `CUSTOMER DETAILS`,
      `Name: ${customer.name}`,
      `Communication Phone: ${customer.mobile}`,
      `Full Decoration Address: ${customer.address}`,
      `City: ${customer.city || "Not specified"}`,
      `Decoration Date: ${customer.date}`,
      `Decoration Time: ${customer.time}`,
      `Notes: ${customer.notes || "None"}`,
      ``,
      `Please confirm availability and the final quotation.`,
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
          <div className="overflow-hidden rounded-xl bg-secondary/50">
            <img src={image} alt={`${name} event decoration package by Decorza Events`} className="aspect-[4/3] w-full object-contain" />
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
              {includes.filter((i) => i.trim()).map((i) => (
                <li key={i} className="flex gap-1.5"><Check className="h-4 w-4 shrink-0 text-gold mt-0.5" /> {i}</li>
              ))}
            </ul>
          </div>
          <PackageEnquiryDialog
            packageId={id}
            name={name}
            description={description}
            image={image}
            includes={includes}
            offer={reactNodeText(offer)}
            original={reactNodeText(original)}
            triggerLabel={`WhatsApp ${BRAND.whatsappDisplay}`}
            triggerSize="default"
            triggerClassName="w-full bg-whatsapp text-white hover:opacity-90"
            triggerIcon={<Phone className="mr-2 h-4 w-4" />}
          />
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
            <Input id="dlg-city" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} maxLength={100} />
          </div>
          <div>
            <Label htmlFor="dlg-address">Full decoration address *</Label>
            <Textarea id="dlg-address" autoComplete="street-address" rows={3} value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} required minLength={8} maxLength={500} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
            <Label htmlFor="dlg-date">Event date *</Label>
            <Input id="dlg-date" type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} required />
            </div>
            <div>
              <Label htmlFor="dlg-time">Decoration time *</Label>
              <Input id="dlg-time" type="time" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} required />
            </div>
          </div>
          <div>
            <Label htmlFor="dlg-notes">Notes</Label>
            <Textarea id="dlg-notes" rows={3} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} maxLength={800} />
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

function reactNodeText(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(reactNodeText).join("");
  if (node && typeof node === "object" && "props" in node) {
    const element = node as { props?: { children?: ReactNode } };
    return reactNodeText(element.props?.children);
  }
  return "";
}
