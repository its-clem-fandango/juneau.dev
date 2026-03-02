import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://juneau.ai",
  vite: {
    plugins: [tailwindcss()],
  },
});
