import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    base: "", // Elimina el prefijo ./ en las rutas generadas
  },
  // Add your domain name here
  site: "https://lexingtonthemes.com/",
  integrations: [sitemap()],
});
