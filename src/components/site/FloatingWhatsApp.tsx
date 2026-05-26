import { MessageCircle } from "lucide-react";
import { BRAND, waLink, waBookingMessage } from "@/lib/brand";

export function FloatingWhatsApp() {
  const href = waLink(waBookingMessage({}));
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      aria-label={`Chat with ${BRAND.name} on WhatsApp`}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-luxury transition-transform hover:scale-105"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-whatsapp opacity-40" />
      <MessageCircle className="relative h-7 w-7" />
    </a>
  );
}
