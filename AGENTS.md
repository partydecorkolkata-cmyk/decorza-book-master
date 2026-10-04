# Project Architecture Rules

- Use `PackageEnquiryDialog` for package-card WhatsApp enquiries so validation, saved customer details, and message formatting stay consistent.
- Use `https://decorzaevents.com` as the single SEO origin for sitemap entries, canonicals, and structured-data identifiers so search engines consolidate signals on the custom domain.
- Keep the MCP catalogue protected with delegated OAuth and route consent through the app's sign-in screen; public catalogue pages remain available without signing in.
- Persist public enquiries through a validated server function, and authorize all booking reads and updates with the separate admin role.