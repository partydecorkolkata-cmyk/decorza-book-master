import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BRAND, waLink, waBookingMessage } from "@/lib/brand";
import { CATEGORIES } from "@/lib/data";

export function Footer() {
  const wa = waLink(waBookingMessage({}));
  return (
    <footer className="border-t bg-[oklch(0.16_0.05_305)] text-white/85">
      {/* CTA strip */}
      <div className="border-b border-white/10 bg-[oklch(0.14_0.06_305)]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
          <div>
            <p className="font-display text-xl text-gold">Plan your celebration today</p>
            <p className="text-sm text-white/65">WhatsApp our decor team for instant quotes & slot availability.</p>
          </div>
          <Button asChild size="lg" className="bg-whatsapp hover:opacity-90 text-white">
            <a href={wa} target="_blank" rel="noopener">
              <Phone className="mr-2 h-4 w-4" /> Chat on WhatsApp
            </a>
          </Button>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-6 lg:px-8">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-full gradient-gold text-[oklch(0.18_0.05_305)] font-display text-lg">D</span>
            <span className="font-display text-xl">{BRAND.name}</span>
          </div>
          <p className="mt-4 text-sm text-white/65">
            Premium event decoration & celebration planning across India. Crafting memorable celebrations — one balloon arch, one candle path, one magical moment at a time.
          </p>
          <ul className="mt-5 space-y-2 text-sm">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-gold" /><a href={`https://wa.me/${BRAND.whatsapp}`} className="text-gold hover:underline">{BRAND.whatsappDisplay}</a></li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-gold" /><a href={`mailto:${BRAND.email}`} className="hover:text-gold">{BRAND.email}</a></li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" />Serving 7 cities across India</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-gold">Services</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {CATEGORIES.slice(0, 8).map((c) => (
              <li key={c.slug}>
                <Link to="/service/$slug" params={{ slug: c.slug }} className="hover:text-gold">{c.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-gold">Cities</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {BRAND.cities.map((city) => (
              <li key={city}>
                <Link to="/city/$slug" params={{ slug: city.toLowerCase() }} className="hover:text-gold">Decoration in {city}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-gold">Company</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-gold">About Us</Link></li>
            <li><Link to="/packages" className="hover:text-gold">All Packages</Link></li>
            <li><Link to="/blog" className="hover:text-gold">Blog & Ideas</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
            <li><Link to="/book" className="hover:text-gold">Book Online</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-gold">Resources</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="/sitemap.xml" className="hover:text-gold">Sitemap</a></li>
            <li><Link to="/contact" className="hover:text-gold">FAQ & Support</Link></li>
            <li><a href="#" className="hover:text-gold">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gold">Terms of Service</a></li>
            <li><a href="#" className="hover:text-gold">Refund Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-white/55 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
          <p>Crafted with love for celebrations.</p>
        </div>
      </div>
    </footer>
  );
}
