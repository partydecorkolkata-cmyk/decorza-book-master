import { useEffect, useState } from "react";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BRAND, waLink } from "@/lib/brand";
import { CATEGORIES, PACKAGES } from "@/lib/data";
import { toast } from "sonner";

const bookingSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(80, "Name is too long."),
  mobile: z.string().trim().regex(/^\+?[0-9\s()-]{8,20}$/, "Please enter a valid mobile number."),
  whatsapp: z.union([z.literal(""), z.string().trim().regex(/^\+?[0-9\s()-]{8,20}$/, "Please enter a valid WhatsApp number.")]),
  city: z.string().trim().min(1, "Please select a city."),
  eventType: z.string().trim().min(1, "Please select an occasion."),
  packageId: z.string(),
  date: z.iso.date("Please select a valid event date."),
  time: z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/, "Please select a valid event time."),
  location: z.string().trim().min(8, "Please enter the full decoration address.").max(300, "Address is too long."),
  budget: z.string().trim().min(1, "Please select a budget."),
  notes: z.string().trim().max(800, "Special requirements are too long."),
});

const STORAGE_KEY = "decorza-customer-booking-details";

export function BookingForm({ defaultPackageId }: { defaultPackageId?: string }) {
  const defaultPackage = PACKAGES.find((pkg) => pkg.id === defaultPackageId);
  const defaultCategory = CATEGORIES.find((category) => category.slug === defaultPackage?.categorySlug);
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    whatsapp: "",
    city: "Kolkata",
    eventType: defaultCategory?.name ?? CATEGORIES[0].name,
    packageId: defaultPackageId ?? "",
    date: "",
    time: "",
    location: "",
    budget: "",
    notes: "",
  });
  const selectedPackage = PACKAGES.find((pkg) => pkg.id === form.packageId);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (!saved) return;
      const parsed = bookingSchema.pick({ name: true, mobile: true, whatsapp: true, city: true, location: true }).partial().safeParse(JSON.parse(saved));
      if (parsed.success) setForm((current) => ({ ...current, ...parsed.data }));
    } catch {
      // Ignore unavailable or malformed browser storage.
    }
  }, []);

  function update<K extends keyof typeof form>(k: K, v: (typeof form)[K]) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = bookingSchema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0]?.message ?? "Please check your booking details.");
      return;
    }
    const booking = result.data;
    const pkg = PACKAGES.find((p) => p.id === booking.packageId);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({
        name: booking.name,
        mobile: booking.mobile,
        whatsapp: booking.whatsapp,
        city: booking.city,
        location: booking.location,
      }));
    } catch {
      // Continue to WhatsApp when browser storage is unavailable.
    }
    const packageImage = pkg ? new URL(pkg.image, window.location.origin).href : "";
    const packagePage = pkg ? new URL(`/package/${encodeURIComponent(pkg.id)}`, window.location.origin).href : "";
    const msg = [
      `Hello ${BRAND.name},`,
      `New Online Booking Request:`,
      ``,
      `Name: ${booking.name}`,
      `Mobile: ${booking.mobile}`,
      `WhatsApp: ${booking.whatsapp || booking.mobile}`,
      `City: ${booking.city}`,
      `Occasion: ${booking.eventType}`,
      `Full Decoration Address: ${booking.location}`,
      `Event Date: ${booking.date}`,
      `Event Time: ${booking.time}`,
      `Budget: ${booking.budget}`,
      `Special Requirements: ${booking.notes || "None"}`,
      ``,
      pkg ? `PACKAGE DETAILS` : `Package: To be discussed`,
      ...(pkg ? [
        `Package: ${pkg.name}`,
        `Selling Price: ₹${pkg.offer.toLocaleString()}`,
        `MRP: ₹${pkg.original.toLocaleString()}`,
        `Description: ${pkg.description.trim()}`,
        `Package Image: ${packageImage}`,
        `Package Page: ${packagePage}`,
        `What's Included:`,
        ...pkg.includes.filter((item) => item.trim()).map((item) => `• ${item.trim()}`),
      ] : []),
    ].join("\n");
    window.open(waLink(msg), "_blank", "noopener");
    toast.success("Sending your request to our team on WhatsApp…");
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <Label htmlFor="name">Full name *</Label>
        <Input id="name" value={form.name} onChange={(e) => update("name", e.target.value)} required maxLength={80} />
      </div>
      <div>
        <Label htmlFor="mobile">Mobile number *</Label>
        <Input id="mobile" inputMode="tel" value={form.mobile} onChange={(e) => update("mobile", e.target.value)} required maxLength={15} />
      </div>
      <div>
        <Label htmlFor="wa">WhatsApp number</Label>
        <Input id="wa" inputMode="tel" value={form.whatsapp} onChange={(e) => update("whatsapp", e.target.value)} maxLength={15} />
      </div>
      <div>
        <Label>City *</Label>
        <Select value={form.city} onValueChange={(v) => update("city", v)}>
          <SelectTrigger><SelectValue /></SelectTrigger>
          <SelectContent>
            {BRAND.cities.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label>Occasion *</Label>
        <Select value={form.eventType} onValueChange={(v) => setForm((current) => ({ ...current, eventType: v, packageId: "" }))}>
          <SelectTrigger><SelectValue /></SelectTrigger>
          <SelectContent>
            {CATEGORIES.map((c) => <SelectItem key={c.slug} value={c.name}>{c.name}</SelectItem>)}
          </SelectContent>
        </Select>
      </div>
      <div className="sm:col-span-2">
        <Label>Select package (optional)</Label>
        <Select value={form.packageId} onValueChange={(v) => update("packageId", v)}>
          <SelectTrigger><SelectValue placeholder="Choose a package — or let us suggest" /></SelectTrigger>
          <SelectContent>
            {PACKAGES.filter((p) => p.categorySlug === CATEGORIES.find((c) => c.name === form.eventType)?.slug).map((p) => (
              <SelectItem key={p.id} value={p.id}>{p.name} — ₹{p.offer.toLocaleString()}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {selectedPackage && (
        <div className="sm:col-span-2 grid grid-cols-[96px_1fr] gap-3 rounded-lg border bg-card p-3">
          <img src={selectedPackage.image} alt={selectedPackage.name} className="aspect-[4/3] w-24 rounded-md object-contain bg-secondary/50" />
          <div className="min-w-0">
            <p className="font-display text-base leading-tight">{selectedPackage.name}</p>
            <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{selectedPackage.description}</p>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="font-semibold text-primary">₹{selectedPackage.offer.toLocaleString()}</span>
              <span className="text-xs text-muted-foreground line-through">₹{selectedPackage.original.toLocaleString()}</span>
            </div>
          </div>
        </div>
      )}
      <div>
        <Label htmlFor="date">Event date *</Label>
        <Input id="date" type="date" value={form.date} onChange={(e) => update("date", e.target.value)} required />
      </div>
      <div>
        <Label htmlFor="time">Event time *</Label>
        <Input id="time" type="time" value={form.time} onChange={(e) => update("time", e.target.value)} required />
      </div>
      <div className="sm:col-span-2">
        <Label htmlFor="location">Full decoration address *</Label>
        <Input id="location" autoComplete="street-address" value={form.location} onChange={(e) => update("location", e.target.value)} required minLength={8} maxLength={300} />
      </div>
      <div className="sm:col-span-2">
        <Label>Budget *</Label>
        <Select value={form.budget} onValueChange={(v) => update("budget", v)}>
          <SelectTrigger><SelectValue placeholder="Select budget range" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="Under ₹2,000">Under ₹2,000</SelectItem>
            <SelectItem value="₹2,000 to ₹5,000">₹2,000 to ₹5,000</SelectItem>
            <SelectItem value="₹5,000 to ₹10,000">₹5,000 to ₹10,000</SelectItem>
            <SelectItem value="₹10,000 & above">₹10,000 & above</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="sm:col-span-2">
        <Label htmlFor="notes">Special requirements</Label>
        <Textarea id="notes" rows={4} value={form.notes} onChange={(e) => update("notes", e.target.value)} maxLength={800} />
      </div>
      <div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row">
        <Button type="submit" className="flex-1 bg-whatsapp hover:opacity-90 text-white">
          Send Booking Request via WhatsApp
        </Button>
        <Button type="button" variant="outline" className="flex-1" asChild>
          <a href={`tel:+${BRAND.whatsapp}`}>Call / Request Callback</a>
        </Button>
      </div>
      <p className="sm:col-span-2 text-xs text-muted-foreground">
        We’ll confirm availability within minutes. Your details are only used to coordinate your booking.
      </p>
    </form>
  );
}
