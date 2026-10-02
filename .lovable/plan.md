# Booking UX and sitewide SEO improvements

## Goal
Make the main booking choices unambiguous, make city pages easier to reach, remove mobile CTA collisions, and strengthen search/social metadata without changing package content or pricing.

## Implementation

### 1. Separate the homepage booking actions
- Replace the homepage hero’s WhatsApp popup trigger with a direct WhatsApp link using the existing business number and prefilled booking message.
- Change “Book Online” into a normal link to `/book`, preserving the current online form and optional package selection there.
- Keep package-card WhatsApp enquiry dialogs unchanged so detailed package enquiries continue collecting customer and package details.

### 2. Add city navigation in the header
- Add a desktop “Cities” dropdown containing Kolkata, Mumbai, Delhi, Bengaluru, Pune, Hyderabad, and Siliguri.
- Keep the mobile Cities section, align its order with the requested list, and ensure every entry uses the typed `/city/$slug` route.
- Close the mobile navigation after a city is selected.

### 3. Prevent mobile CTA overlap
- On small screens, hide the separate floating WhatsApp circle because the sticky bottom bar already provides WhatsApp access.
- Keep the floating button on larger screens only.
- Respect safe-area spacing in the sticky mobile bar and reserve enough page-bottom space so the bar does not cover content.

### 4. Clean and standardize metadata
- Remove the duplicate root description, page-specific root title/description, root canonical, and root share image so leaf pages control their own metadata cleanly.
- Keep only true sitewide metadata and organization/local-business schema in the root.
- Add or normalize unique title, description, Open Graph title/description/type, and Twitter card metadata on every public content route.
- Use `https://decorzaevents.com` for every content-page canonical and `og:url`, including dynamic city, package, blog, and city-category URLs.
- Keep sign-in, OAuth consent, error, and other non-content pages out of search with `noindex` rather than treating them as public landing pages.

### 5. Add structured search data
- Add `FAQPage` JSON-LD generated from the exact visible questions and answers on the homepage and city pages.
- Add matching FAQ structured data to other public pages that visibly render FAQs, without adding hidden FAQ content.
- Expand package-page structured data to describe the decoration as a `Service` with an INR `Offer`, canonical URL, provider, service area, availability, image, rating, and price.
- Preserve the existing LocalBusiness data and point all identifiers/URLs at the custom domain.

### 6. Improve image descriptions
- Update shared package, category, homepage, city, gallery, blog, and related-package image labels to describe the depicted decoration and relevant occasion/city.
- Replace generic labels such as numbered “decoration 1” text where nearby package/category data can provide accurate intent.
- Keep decorative images appropriately empty only when they convey no content.

## Technical details
- Reuse `SITE_URL` / `absoluteUrl()` from the existing SEO helper to prevent mixed domains and relative canonicals.
- Add small reusable helpers for FAQ, service/offer, and route metadata where this avoids duplicating schema logic across many large category files.
- Use existing Button and navigation components; do not introduce a second booking flow.
- Validate with the project build signal, metadata inspection, structured-data JSON parsing, and Playwright at desktop and narrow mobile sizes.
