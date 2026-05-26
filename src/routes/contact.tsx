import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SectionHeader } from "@/components/site/SectionHeader";
import { BRAND, waLink } from "@/lib/brand";
import { CATEGORIES } from "@/lib/data";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Decorza Events | WhatsApp +91 86378 70742" },
      { name: "description", content: "Get in touch with Decorza Events on WhatsApp +91 86378 70742 for premium event decoration across Kolkata, Mumbai, Delhi, Bengaluru, Hyderabad, Pune and Siliguri." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [f, setF] = useState({ name: "", phone: "", city: "Kolkata", type: CATEGORIES[0].name, message: "" });
  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!f.name || !f.phone) { toast.error("Please fill name and phone."); return; }
    const msg = `Hello ${BRAND.name},\n\nNew Inquiry:\nName: ${f.name}\nPhone: ${f.phone}\nCity: ${f.city}\nEvent Type: ${f.type}\n\n${f.message}`;
    window.open(waLink(msg), "_blank", "noopener");
    toast.success("Opening WhatsApp to send your inquiry…");
  }

  return (
    <>
      <section className="bg-secondary/40 py-12">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Get In Touch" title="Contact Decorza Events" subtitle="We reply on WhatsApp within minutes — 24/7." />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="space-y-6">
          <div className="rounded-2xl border bg-card p-6">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-whatsapp text-white">
                <MessageCircle className="h-6 w-6" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">WhatsApp</p>
                <a href={`https://wa.me/${BRAND.whatsapp}`} className="font-display text-2xl text-primary">{BRAND.whatsappDisplay}</a>
              </div>
            </div>
            <Button asChild className="mt-4 w-full bg-whatsapp text-white hover:opacity-90">
              <a href={waLink(`Hello ${BRAND.name}, I would like to enquire.`)} target="_blank" rel="noopener">
                <Phone className="mr-2 h-4 w-4" /> Chat on WhatsApp
              </a>
            </Button>
          </div>

          <div className="rounded-2xl border bg-card p-6">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground">
                <MapPin className="h-6 w-6" />
              </span>
              <p className="font-display text-xl">Operating Cities</p>
            </div>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {BRAND.cities.map((c) => (
                <li key={c} className="flex items-center gap-2 rounded-lg bg-secondary px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-gold" /> {c}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted-foreground">
              We provide setup at homes, banquet halls, hotels, farmhouses and offices across all listed cities.
            </p>
          </div>
        </div>

        <form onSubmit={submit} className="rounded-2xl border bg-card p-6 shadow-sm">
          <h3 className="font-display text-2xl">Send an Inquiry</h3>
          <p className="mt-1 text-sm text-muted-foreground">Fill the form and we’ll respond on WhatsApp right away.</p>
          <div className="mt-5 grid gap-4">
            <div>
              <Label htmlFor="cname">Name</Label>
              <Input id="cname" value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} required maxLength={80} />
            </div>
            <div>
              <Label htmlFor="cphone">Phone</Label>
              <Input id="cphone" inputMode="tel" value={f.phone} onChange={(e) => setF({ ...f, phone: e.target.value })} required maxLength={15} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label>City</Label>
                <Select value={f.city} onValueChange={(v) => setF({ ...f, city: v })}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>{BRAND.cities.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <div>
                <Label>Event Type</Label>
                <Select value={f.type} onValueChange={(v) => setF({ ...f, type: v })}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>{CATEGORIES.map((c) => <SelectItem key={c.slug} value={c.name}>{c.name}</SelectItem>)}</SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label htmlFor="cmsg">Message</Label>
              <Textarea id="cmsg" rows={4} value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} maxLength={600} />
            </div>
            <Button type="submit" className="bg-whatsapp text-white hover:opacity-90">Send Inquiry on WhatsApp</Button>
          </div>
        </form>
      </section>
    </>
  );
}
