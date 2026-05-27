import { Sparkles, Phone } from "lucide-react";
import { BRAND } from "@/lib/brand";

export function TopBar() {
  return (
    <div className="w-full gradient-luxury text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-1 px-4 py-2 text-[11px] sm:flex-row sm:px-6 sm:text-xs lg:px-8">
        <p className="flex items-center gap-1.5 font-medium">
          <Sparkles className="h-3.5 w-3.5 text-gold" />
          Same Day Decoration Available · 12,500+ Happy Celebrations
        </p>
        <a
          href={`https://wa.me/${BRAND.whatsapp}`}
          target="_blank"
          rel="noopener"
          className="flex items-center gap-1.5 font-semibold text-gold hover:underline"
        >
          <Phone className="h-3.5 w-3.5" /> WhatsApp Booking: {BRAND.whatsappDisplay}
        </a>
      </div>
    </div>
  );
}
