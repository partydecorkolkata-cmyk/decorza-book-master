import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BRAND, waLink } from "@/lib/brand";
import { CATEGORIES, PACKAGES } from "@/lib/data";
import { toast } from "sonner";

export function BookingForm({ defaultPackageId }: { defaultPackageId?: string }) {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    whatsapp: "",
    city: "Kolkata",
    eventType: CATEGORIES[0].name,
    packageId: defaultPackageId ?? "",
    date: "",
    time: "",
    location: "",
    budget: "",
    notes: "",
  });

  function update<K extends keyof typeof form>(k: K, v: (typeof form)[K]) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.mobile || !form.city || !form.date) {
      toast.error("Please fill name, mobile, city and event date.");
      return;
    }
    const pkg = PACKAGES.find((p) => p.id === form.packageId);
    const msg = [
      `Hello ${BRAND.name},`,
      `New Online Booking Request:`,
      ``,
      `Name: ${form.name}`,
      `Mobile: ${form.mobile}`,
      `WhatsApp: ${form.whatsapp || form.mobile}`,
      `City: ${form.city}`,
      `Event Type: ${form.eventType}`,
      pkg ? `Package: ${pkg.name} (₹${pkg.offer.toLocaleString()})` : `Package: To be discussed`,
      `Event Date: ${form.date}`,
      `Event Time: ${form.time}`,
      `Location: ${form.location}`,
      `Budget: ${form.budget}`,
      `Special Requirements: ${form.notes}`,
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
        <Label>Event type</Label>
        <Select value={form.eventType} onValueChange={(v) => update("eventType", v)}>
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
      <div>
        <Label htmlFor="date">Event date *</Label>
        <Input id="date" type="date" value={form.date} onChange={(e) => update("date", e.target.value)} required />
      </div>
      <div>
        <Label htmlFor="time">Event time</Label>
        <Input id="time" type="time" value={form.time} onChange={(e) => update("time", e.target.value)} />
      </div>
      <div className="sm:col-span-2">
        <Label htmlFor="location">Event location / venue</Label>
        <Input id="location" value={form.location} onChange={(e) => update("location", e.target.value)} maxLength={160} />
      </div>
      <div className="sm:col-span-2">
        <Label>Budget</Label>
        <Select value={form.budget} onValueChange={(v) => update("budget", v)}>
          <SelectTrigger><SelectValue placeholder="Select budget range" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="Under ₹2,999">Under ₹2,999</SelectItem>
            <SelectItem value="₹3,000 – ₹5,999">₹3,000 – ₹5,999</SelectItem>
            <SelectItem value="₹6,000 – ₹9,999">₹6,000 – ₹9,999</SelectItem>
            <SelectItem value="₹10,000 – ₹19,999">₹10,000 – ₹19,999</SelectItem>
            <SelectItem value="₹20,000+">₹20,000 & above</SelectItem>
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
