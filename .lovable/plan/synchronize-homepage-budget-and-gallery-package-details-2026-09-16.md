# Synchronize homepage, budget, and gallery package details

## What will change
- Replace the independently invented Trending Decorations and Most-Loved details with exact copies of existing category-page packages, including each package’s image, name, description, inclusions, selling price, MRP, and destination.
- Keep Trending and Most-Loved as separate collections with no repeated package.
- Make each homepage budget tile open the packages page with that exact budget already selected.
- Restrict the packages page’s budget results to the synchronized existing category packages rather than generated placeholder tiers.
- Keep Decoration Gallery as the current visual image grid, but map every gallery image that belongs to an existing category package to that exact package’s details page. Unmatched existing gallery images remain visible.

## Implementation approach
- Add a shared canonical catalogue for the selected existing category packages, using their current category-card IDs and exact displayed details.
- Build Trending, Most-Loved, budget results, and gallery image links from that catalogue so the same package identity and details are reused.
- Add validated budget search parameters to `/packages`, preserving the current filters and card design.
- Do not redesign the homepage sections, change category-page layouts, create duplicate package cards, or alter booking and WhatsApp behavior.

## Verification
- Confirm every featured card and matched gallery image resolves to the same name, image, description, inclusions, prices, and category as its source card.
- Confirm all four homepage budget tiles open correctly filtered results.
- Check desktop and mobile behavior, package-detail links, WhatsApp actions, and the final build.
