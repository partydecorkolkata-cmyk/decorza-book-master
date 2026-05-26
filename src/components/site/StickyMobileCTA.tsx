import { Link } from "@tanstack/react-router";
import { Phone, CalendarCheck } from "lucide-react";
import { waLink, waBookingMessage } from "@/lib/brand";

export function StickyMobileCTA() {
  const wa = waLink(waBookingMessage({}));
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-px border-t bg-background/95 backdrop-blur lg:hidden">
      <a
        href={wa}
        target="_blank"
        rel="noopener"
        className="flex items-center justify-center gap-2 bg-whatsapp py-3 text-sm font-semibold text-white"
      >
        <Phone className="h-4 w-4" /> WhatsApp Book
      </a>
      <Link
        to="/book"
        className="flex items-center justify-center gap-2 bg-primary py-3 text-sm font-semibold text-primary-foreground"
      >
        <CalendarCheck className="h-4 w-4" /> Book Online
      </Link>
    </div>
  );
}
