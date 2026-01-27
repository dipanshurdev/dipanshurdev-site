import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  vite: {
    server: {
      watch: {
        // Fix: Windows often misses file-change events. Polling ensures edits are detected.
        usePolling: true,
        interval: 500,
      },
    },
    // Avoid stale HMR when switching between files
    optimizeDeps: {
      include: ["react", "react-dom", "framer-motion"],
    },
  },
});
