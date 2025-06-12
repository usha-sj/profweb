import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import vercel from "@astrojs/vercel"; // replacing node

import { remarkReadingTime } from "./remark-reading-time.mjs";

export default defineConfig({
  output: "server", // works with vercel
  adapter: vercel(), // switch from node to vercel
  integrations: [tailwind(), icon()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});

