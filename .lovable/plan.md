# Restore clickable Decoration Gallery

## What will change
- Restore the homepage Decoration Gallery to its existing visual image grid using the full existing `GALLERY` collection rather than package cards.
- Keep all current gallery images visible; do not create, copy, or remove any package records.
- Associate a gallery image with an existing package only when its image URL matches an existing package image.
- Make matched images fully clickable to the existing `/package/$id` details page; leave unmatched images visible and non-navigating.
- Add only a subtle image zoom and “View Package” overlay for matched images, while preserving the gallery spacing, proportions, and responsive columns.

## Technical details
- Derive gallery entries from the existing `GALLERY` and `PACKAGES` data using the existing package ID as the stable relationship.
- Replace only the Decoration Gallery rendering in the homepage; Trending, Most-Loved, package cards, prices, categories, booking, and WhatsApp flows remain untouched.
- Verify image count, matched destinations, unmatched image retention, desktop/mobile presentation, and the final app build.
