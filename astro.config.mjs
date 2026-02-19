import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://yopdude.github.io",
  base: "/ReleaseRadar-site",
  integrations: [react(), tailwind({ applyBaseStyles: false })],
});