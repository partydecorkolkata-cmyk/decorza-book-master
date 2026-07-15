import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { PACKAGES, CATEGORIES } from "@/lib/data";

export default defineTool({
  name: "list_packages",
  title: "List decoration packages",
  description:
    "List Decorza Events decoration packages. Optionally filter by category slug (e.g. 'birthday-decoration', 'anniversary-decoration', 'baby-shower-decoration'). Returns package id, name, price, tier and short description. Use list_categories to discover valid slugs.",
  inputSchema: {
    categorySlug: z
      .string()
      .optional()
      .describe("Optional category slug to filter packages by."),
    limit: z
      .number()
      .int()
      .optional()
      .describe("Optional max number of packages to return (default 50)."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ categorySlug, limit }) => {
    if (categorySlug && !CATEGORIES.some((c) => c.slug === categorySlug)) {
      return {
        content: [
          {
            type: "text",
            text: `Unknown categorySlug '${categorySlug}'. Call list_categories to see available slugs.`,
          },
        ],
        isError: true,
      };
    }
    const filtered = categorySlug
      ? PACKAGES.filter((p) => p.categorySlug === categorySlug)
      : PACKAGES;
    const capped = filtered.slice(0, limit ?? 50);
    const items = capped.map((p) => ({
      id: p.id,
      categorySlug: p.categorySlug,
      name: p.name,
      description: p.description,
      mrp: p.original,
      sellingPrice: p.offer,
      rating: p.rating,
      reviews: p.reviews,
      duration: p.duration,
      setupTime: p.setupTime,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { total: filtered.length, returned: items.length, packages: items },
    };
  },
});
