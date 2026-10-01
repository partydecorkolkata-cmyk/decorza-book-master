# Complete WhatsApp enquiry details

## Goal
Make the package-detail and homepage booking journeys collect complete event information and send the selected package's existing image and details to Decorza Events on WhatsApp.

## Changes
- Extend the enquiry form inside each package card's **View Details** popup with full address and decoration time, while retaining name, phone, city, date, and notes.
- Validate all fields before opening WhatsApp, remember reusable customer details in the browser, and include the existing package name, image link, description, selling price, MRP, and non-empty inclusions in the WhatsApp message.
- Replace the homepage's direct **Book On WhatsApp** link with a popup that collects occasion, address, date, time, and budget, then sends those details to the existing business WhatsApp number.
- Replace only the homepage hero's **Book Online** navigation with a popup using the existing booking form.
- Enhance that booking form so choosing an optional existing package shows its image and key details, and its final WhatsApp message includes the same existing package image, description, prices, and inclusions. Keep `/book` and other existing uses of the form working.

## Validation
- Check the package-card View Details enquiry message contains address, time, and all package details.
- Check both homepage booking buttons open popups and submit complete, encoded WhatsApp messages.
- Check optional package selection displays the correct existing image and details on desktop and mobile.
- Confirm the preview builds without errors.

## Technical details
- Reuse `PACKAGES`, package IDs, `waLink`, and existing dialog/form controls; do not create duplicate package data.
- Use Zod validation and safe URL encoding through the existing WhatsApp link helper.
- Keep customer data in the existing browser-only storage pattern; no server or database changes.
