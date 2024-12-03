import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { schema } from "./src/sanity/schema";

export default defineConfig({
  name: "basc-santamarta",
  title: "Basc Santa Marta",
  basePath: "/studio",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  cdn: true,
  schema,
  plugins: [structureTool(), visionTool({ defaultApiVersion: "2024-09-18" })],
});
