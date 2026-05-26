import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BRAND, waLink, waBookingMessage } from "@/lib/brand";
import { CATEGORIES } from "@/lib/data";

export function Header() {
  const [open, setOpen] = useState(false);
  const wa = waLink(waBookingMessage({}));

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full gradient-luxury text-white font-display text-lg shadow-luxury">
            D
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-semibold tracking-tight">
              {BRAND.name}
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              {BRAND.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          <Link to="/" className="text-sm font-medium hover:text-primary">Home</Link>
          <Link to="/packages" className="text-sm font-medium hover:text-primary">Packages</Link>
          <Link to="/about" className="text-sm font-medium hover:text-primary">About</Link>
          <Link to="/contact" className="text-sm font-medium hover:text-primary">Contact</Link>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild variant="outline" size="sm">
            <Link to="/book">Book Online</Link>
          </Button>
          <Button asChild size="sm" className="bg-whatsapp hover:opacity-90 text-white">
            <a href={wa} target="_blank" rel="noopener">
              <Phone className="mr-1 h-4 w-4" /> WhatsApp
            </a>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t bg-background">
          <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-3">
            <Link to="/" onClick={() => setOpen(false)} className="py-2">Home</Link>
            <Link to="/packages" onClick={() => setOpen(false)} className="py-2">All Packages</Link>
            <details>
              <summary className="py-2 cursor-pointer">Services</summary>
              <div className="grid grid-cols-1 gap-1 pl-2 pb-2">
                {CATEGORIES.slice(0, 10).map((c) => (
                  <Link
                    key={c.slug}
                    to="/service/$slug"
                    params={{ slug: c.slug }}
                    onClick={() => setOpen(false)}
                    className="py-1.5 text-sm text-muted-foreground"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            </details>
            <details>
              <summary className="py-2 cursor-pointer">Cities</summary>
              <div className="grid grid-cols-2 gap-1 pl-2 pb-2">
                {BRAND.cities.map((city) => (
                  <Link
                    key={city}
                    to="/city/$slug"
                    params={{ slug: city.toLowerCase() }}
                    onClick={() => setOpen(false)}
                    className="py-1.5 text-sm text-muted-foreground"
                  >
                    {city}
                  </Link>
                ))}
              </div>
            </details>
            <Link to="/about" onClick={() => setOpen(false)} className="py-2">About</Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="py-2">Contact</Link>
            <div className="grid grid-cols-2 gap-2 pt-2">
              <Button asChild variant="outline">
                <Link to="/book" onClick={() => setOpen(false)}>Book Online</Link>
              </Button>
              <Button asChild className="bg-whatsapp hover:opacity-90 text-white">
                <a href={wa} target="_blank" rel="noopener">WhatsApp</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
