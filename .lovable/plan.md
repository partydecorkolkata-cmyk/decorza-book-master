# Package WhatsApp enquiry popup

## Scope
- Add one reusable enquiry popup used by the WhatsApp button on both category package cards and homepage/package-list cards.
- Keep existing package visuals, prices, category pages, and detail pages unchanged.

## Customer experience
- Clicking a package card’s WhatsApp button opens a popup instead of immediately leaving the site.
- The popup shows the selected package image, name, selling price, MRP, and inclusions.
- It collects full name, full address, communication phone number, decoration date, and decoration time.
- Previously entered customer details are restored from this browser and saved after validation.
- Submission opens WhatsApp to Decorza Events with the complete package details, image link, inclusions, and customer details.

## Validation and safety
- Validate all fields with Zod before saving or opening WhatsApp.
- Apply field length limits, phone/date/time checks, trimmed text, and encoded WhatsApp parameters.
- Browser storage is read only after the page loads, keeping server rendering stable.

## Technical details
- Build a shared package-enquiry dialog so all card types use identical behavior.
- Pass each card’s existing package ID, image, prices, and inclusions into the dialog without duplicating package records.
- Preserve the existing View Details behavior and booking routes.
- Verify desktop and mobile popup behavior, stored-field restoration, message contents, and current build status.
