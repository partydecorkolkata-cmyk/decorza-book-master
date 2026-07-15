import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { packageById } from "@/lib/data";

export default defineTool({
  name: "get_package",
  title: "Get decoration package details",
  description:
    "Get full details for a single Decorza Events decoration package by id, including long description, what's included, pricing and duration.",
  inputSchema: {
    id: z.string().min(1).describe("Package id, e.g. 'birthday-decoration-premium'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ id }) => {
    const pkg = packageById(id);
    if (!pkg) {
      return {
        content: [{ type: "text", text: `No package found with id '${id}'.` }],
        isError: true,
      };
    }
    const data = {
      id: pkg.id,
      categorySlug: pkg.categorySlug,
      name: pkg.name,
      description: pkg.description,
      longDescription: pkg.longDescription,
      includes: pkg.includes,
      mrp: pkg.original,
      sellingPrice: pkg.offer,
      rating: pkg.rating,
      reviews: pkg.reviews,
      duration: pkg.duration,
      setupTime: pkg.setupTime,
    };
    return {
      content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
      structuredContent: data,
    };
  },
});
