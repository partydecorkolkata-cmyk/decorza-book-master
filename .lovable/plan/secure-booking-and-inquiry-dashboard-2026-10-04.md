# Secure booking and inquiry dashboard

## Outcome
Create a protected `/admin` workspace for **sohailmac2022@gmail.com** where incoming booking and inquiry submissions can be searched, filtered, and managed through the full lead pipeline.

## What will change
- Add a bookings table containing customer name, phone, city/area, address, occasion, event date/time, package or service, source page, status, advance amount, balance due, customer message, and internal notes.
- Add a separate secure admin-role table. Only the approved email's signed-in account will be granted the admin role; no customer profile table will be created.
- Allow public forms to create records through a narrowly scoped server action. Public visitors will not be able to read, update, or list bookings.
- Save submissions from the online booking form, package WhatsApp enquiry form, package details enquiry form, and contact form before opening WhatsApp. If saving fails, keep the form open and show an error rather than losing the lead.
- Add a protected `/admin` route with sign-in redirect and server-side admin verification.
- Build a mobile-friendly dashboard with summary counts, status/date/city filters, phone search, lead cards/table, and editable status, advance, balance, and internal notes.
- Add sign-out access and make the existing sign-in screen return administrators to the requested page.

## Security
- Enforce row-level security and explicit database grants.
- Store roles separately from user/account data and verify admin access server-side for every dashboard read or update.
- Validate and limit every public submission and admin update.
- Keep all booking records inaccessible to anonymous visitors and non-admin accounts except for the single controlled create action.

## Technical details
- Use a database enum for the five statuses: New Lead, Contacted, Advance Paid, Completed, Cancelled.
- Use authenticated server functions for admin reads and updates; use a validated public server function only for new submissions.
- Keep WhatsApp message formatting and saved browser details unchanged, adding database persistence immediately before the WhatsApp redirect.
- Generate refreshed database types after applying the schema.

## Verification
- Confirm unauthenticated `/admin` visitors are sent to sign-in.
- Confirm non-admin accounts cannot read or change bookings.
- Submit each form type and verify one record is created before WhatsApp opens.
- Verify search, filters, status changes, financial fields, notes, sign-out, and mobile layout.
