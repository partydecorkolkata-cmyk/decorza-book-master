import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { CATEGORIES } from "@/lib/data";

export default defineTool({
  name: "list_categories",
  title: "List decoration categories",
  description:
    "List all decoration service categories offered by Decorza Events (birthday, anniversary, haldi, baby shower, theme birthday, etc.) with starting prices, ratings and short descriptions.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const items = CATEGORIES.map((c) => ({
      slug: c.slug,
      name: c.name,
      short: c.short,
      description: c.description,
      startsAt: c.startsAt,
      rating: c.rating,
      reviews: c.reviews,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { categories: items },
    };
  },
});

// silence unused import warning if any
void z;
