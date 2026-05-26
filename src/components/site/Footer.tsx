import { Link } from "@tanstack/react-router";
import { BRAND } from "@/lib/brand";
import { CATEGORIES } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t bg-[oklch(0.16_0.05_305)] text-white/85">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-full gradient-gold text-[oklch(0.18_0.05_305)] font-display text-lg">
              D
            </span>
            <span className="font-display text-xl">{BRAND.name}</span>
          </div>
          <p className="mt-4 text-sm text-white/65">
            Premium event decoration & celebration planning across India. Crafting memorable celebrations since day one.
          </p>
          <p className="mt-4 text-sm">
            WhatsApp:{" "}
            <a href={`https://wa.me/${BRAND.whatsapp}`} className="text-gold hover:underline">
              {BRAND.whatsappDisplay}
            </a>
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg text-gold">Popular Services</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {CATEGORIES.slice(0, 8).map((c) => (
              <li key={c.slug}>
                <Link to="/service/$slug" params={{ slug: c.slug }} className="hover:text-gold">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-gold">Cities We Serve</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {BRAND.cities.map((city) => (
              <li key={city}>
                <Link to="/city/$slug" params={{ slug: city.toLowerCase() }} className="hover:text-gold">
                  Event Decoration in {city}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-gold">Company</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-gold">About Us</Link></li>
            <li><Link to="/packages" className="hover:text-gold">All Packages</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
            <li><Link to="/book" className="hover:text-gold">Book Online</Link></li>
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
