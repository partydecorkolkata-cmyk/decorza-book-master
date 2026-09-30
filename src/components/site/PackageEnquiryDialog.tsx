import { useEffect, useId, useState, type ReactNode } from "react";
import { MessageCircle } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BRAND, waLink } from "@/lib/brand";
import { toast } from "sonner";

const STORAGE_KEY = "decorza-customer-enquiry-details";

const customerSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(100, "Name is too long."),
  address: z.string().trim().min(8, "Please enter your full decoration address.").max(500, "Address is too long."),
  phone: z.string().trim().regex(/^\+?[0-9\s()-]{8,20}$/, "Please enter a valid communication phone number."),
  date: z.iso.date("Please select a valid decoration date."),
  time: z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/, "Please select a valid decoration time."),
});

type CustomerDetails = z.infer<typeof customerSchema>;

const emptyCustomer: CustomerDetails = {
  name: "",
  address: "",
  phone: "",
  date: "",
  time: "",
};

type PackageEnquiryDialogProps = {
  packageId: string;
  name: string;
  description: string;
  image: string;
  includes: string[];
  offer: string;
  original: string;
  triggerLabel?: string;
  triggerClassName?: string;
  triggerSize?: "sm" | "default" | "lg";
  triggerIcon?: ReactNode;
};

export function PackageEnquiryDialog({
  packageId,
  name,
  description,
  image,
  includes,
  offer,
  original,
  triggerLabel = "WhatsApp",
  triggerClassName,
  triggerSize = "sm",
  triggerIcon,
}: PackageEnquiryDialogProps) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<CustomerDetails>(emptyCustomer);
  const fieldPrefix = useId();

  useEffect(() => {
    if (!open) return;
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (!saved) return;
      const parsed = customerSchema.partial().safeParse(JSON.parse(saved));
      if (parsed.success) setForm((current) => ({ ...current, ...parsed.data }));
    } catch {
      // Ignore unavailable or malformed browser storage.
    }
  }, [open]);

  function update(field: keyof CustomerDetails, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = customerSchema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0]?.message ?? "Please check your enquiry details.");
      return;
    }

    const customer = result.data;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(customer));
    } catch {
      // Continue to WhatsApp when browser storage is unavailable.
    }

    const imageUrl = new URL(image, window.location.origin).href;
    const packageUrl = new URL(`/package/${encodeURIComponent(packageId)}`, window.location.origin).href;
    const includedItems = includes.filter((item) => item.trim()).map((item) => `• ${item.trim()}`);
    const message = [
      `Hello ${BRAND.name},`,
      "I would like to enquire about this decoration package.",
      "",
      "PACKAGE DETAILS",
      `Package: ${name}`,
      `Selling Price: ${offer}`,
      `MRP: ${original}`,
      `Description: ${description.trim()}`,
      `Package Image: ${imageUrl}`,
      `Package Page: ${packageUrl}`,
      "What's Included:",
      ...includedItems,
      "",
      "CUSTOMER DETAILS",
      `Name: ${customer.name}`,
      `Full Address: ${customer.address}`,
      `Communication Phone: ${customer.phone}`,
      `Decoration Date: ${customer.date}`,
      `Decoration Time: ${customer.time}`,
      "",
      "Please confirm availability and the final quotation.",
    ].join("\n");

    window.open(waLink(message), "_blank", "noopener,noreferrer");
    toast.success("Opening WhatsApp with your complete enquiry…");
  }

  const today = new Date().toISOString().slice(0, 10);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size={triggerSize} className={triggerClassName}>
          {triggerIcon ?? <MessageCircle className="mr-1 h-3.5 w-3.5" />}
          {triggerLabel}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[92vh] max-w-3xl overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">WhatsApp Enquiry</DialogTitle>
          <DialogDescription>Your details are remembered on this browser for your next enquiry.</DialogDescription>
        </DialogHeader>

        <div className="grid gap-5 md:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-3">
            <div className="overflow-hidden rounded-lg bg-secondary/50">
              <img src={image} alt={name} className="aspect-[4/3] w-full object-contain" />
            </div>
            <div>
              <h3 className="font-display text-xl">{name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{description}</p>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-2xl text-primary">{offer}</span>
              <span className="text-sm text-muted-foreground line-through">{original}</span>
            </div>
            <div>
              <p className="text-sm font-semibold">What's included</p>
              <ul className="mt-1.5 space-y-1 text-xs text-muted-foreground">
                {includes.filter((item) => item.trim()).map((item) => <li key={item}>✓ {item}</li>)}
              </ul>
            </div>
          </div>

          <form onSubmit={submit} className="space-y-3 rounded-lg border bg-card p-4">
            <div>
              <Label htmlFor={`${fieldPrefix}-name`}>Full name *</Label>
              <Input id={`${fieldPrefix}-name`} autoComplete="name" value={form.name} onChange={(event) => update("name", event.target.value)} required minLength={2} maxLength={100} />
            </div>
            <div>
              <Label htmlFor={`${fieldPrefix}-address`}>Full decoration address *</Label>
              <Textarea id={`${fieldPrefix}-address`} autoComplete="street-address" rows={3} value={form.address} onChange={(event) => update("address", event.target.value)} required minLength={8} maxLength={500} />
            </div>
            <div>
              <Label htmlFor={`${fieldPrefix}-phone`}>Communication phone number *</Label>
              <Input id={`${fieldPrefix}-phone`} type="tel" inputMode="tel" autoComplete="tel" value={form.phone} onChange={(event) => update("phone", event.target.value)} required minLength={8} maxLength={20} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor={`${fieldPrefix}-date`}>Decoration date *</Label>
                <Input id={`${fieldPrefix}-date`} type="date" min={today} value={form.date} onChange={(event) => update("date", event.target.value)} required />
              </div>
              <div>
                <Label htmlFor={`${fieldPrefix}-time`}>Decoration time *</Label>
                <Input id={`${fieldPrefix}-time`} type="time" value={form.time} onChange={(event) => update("time", event.target.value)} required />
              </div>
            </div>
            <Button type="submit" className="w-full bg-whatsapp text-white hover:opacity-90">
              <MessageCircle className="mr-2 h-4 w-4" /> Send Complete Enquiry
            </Button>
            <p className="text-xs text-muted-foreground">Your details stay only in this browser and are sent through WhatsApp.</p>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}