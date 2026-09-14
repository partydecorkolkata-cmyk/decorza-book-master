# Correct and expand homepage package collections

## What will change
- Replace the automatically generated Trending Decorations cards with a curated set of real packages whose names, photos, descriptions, inclusions, and pricing agree.
- Replace the Most-Loved Packages cards with a separate curated set, using no package that appears in Trending Decorations.
- Expand both homepage sections from their current selection to 12 cards each so more options appear without overwhelming the page.
- Keep every card linked to its correct package details page and WhatsApp booking flow.

## Content approach
- Reuse the project's uploaded, clearly named event photos rather than generic or unrelated category gallery images.
- Give each card a specific, photo-led package name and matching details instead of broad “Premium Category” labels.
- Cover a balanced mix of birthdays, anniversaries, proposals, baby celebrations, traditional ceremonies, romantic rooms, car boot surprises, and bachelorette setups.

## Technical details
- Define two explicit `Package[]` collections in `src/lib/data.ts`, each with unique IDs and no overlap.
- Use existing local asset metadata URLs for reliable image display.
- Preserve the existing `PackageCard`, detail route, discount calculation, and homepage grid behavior.
- Validate collection uniqueness, image availability, links, desktop/mobile presentation, and the final app build.
