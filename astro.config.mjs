import { defineConfig } from "astro/config";

import react from "@astrojs/react";

export default defineConfig({
  site: "https://yopdude.github.io",
  base: "/ReleaseRadar-site",
  integrations: [react()],
});