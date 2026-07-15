import { defineMcp } from "@lovable.dev/mcp-js";
import listCategories from "./tools/list-categories";
import listPackages from "./tools/list-packages";
import getPackage from "./tools/get-package";
import getContactInfo from "./tools/get-contact-info";

export default defineMcp({
  name: "decorza-events-mcp",
  title: "Decorza Events",
  version: "0.1.0",
  instructions:
    "Public catalog for Decorza Events, a premium event decoration service in India (Kolkata, Mumbai, Delhi, Bengaluru, Hyderabad, Pune, Siliguri). Use list_categories to see all decoration categories (birthday, anniversary, haldi, baby shower, theme birthday, proposal, etc.), list_packages to browse decoration packages (optionally filtered by category), get_package for full details on a specific package, and get_contact_info for the WhatsApp booking number and service cities.",
  tools: [listCategories, listPackages, getPackage, getContactInfo],
});
