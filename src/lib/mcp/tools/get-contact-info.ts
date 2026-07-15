import { defineTool } from "@lovable.dev/mcp-js";
import { BRAND, waLink } from "@/lib/brand";

export default defineTool({
  name: "get_contact_info",
  title: "Get Decorza Events contact info",
  description:
    "Get Decorza Events business contact info: brand name, WhatsApp number, email, service cities and a ready-to-open WhatsApp booking link.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const data = {
      brand: BRAND.name,
      tagline: BRAND.tagline,
      whatsapp: BRAND.whatsappDisplay,
      whatsappLink: waLink(`Hello ${BRAND.name}, I would like to enquire about decoration services.`),
      email: BRAND.email,
      cities: [...BRAND.cities],
    };
    return {
      content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
      structuredContent: data,
    };
  },
});
