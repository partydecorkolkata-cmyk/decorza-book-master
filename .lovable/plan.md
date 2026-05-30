## Fixes

**1. Image not showing — root cause**
In `src/lib/data.ts`, the Birthday hero is set via `img(BALLOON_DECOR[0])`. The `img()` helper prepends `https://images.unsplash.com/`, which corrupts the local path into `https://images.unsplash.com//images/balloon-decoration-hero-v2.jpg`.

**Fix:** Make the `img()` helper pass through any value that starts with `/` (local public asset). One-line change so both the hero and gallery entries render the uploaded photo correctly across the homepage, category cards, service page, and package cards.

**2. Homepage Birthday Decoration "Starting from" price → ₹1,499**
Change `startsAt: 2999` → `startsAt: 1499` for the `birthday-decoration` category in `src/lib/data.ts`. This updates the "From ₹1,499" text on the homepage category card and anywhere `c.startsAt` is displayed for Birthday Decoration.

**3. Essential Birthday Decoration package stays at ₹2,999**
The package-offer code already hardcodes `2999` for the Essential tier when the slug is `birthday-decoration`, so the Essential package card price is preserved automatically. The Premium tier (also hardcoded 4499) is unaffected. Only the Luxury offer (which uses `startsAt × multOffer`) will recompute — I'll pin it to a sensible fixed price so the discount math still looks clean.

## Files to edit
- `src/lib/data.ts` — `img()` helper passthrough, Birthday `startsAt`, Luxury offer pin.

No image re-upload needed — the file `public/images/balloon-decoration-hero-v2.jpg` is already in place.