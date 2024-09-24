import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    base: "/demos/astrobuild/", // Para asegurar que no haya un '/' inicial
    build: {
      assetsDir: "/demos/astrobuild/", // Rutas de assets relativas con './'
    },
  },
  // Add your domain name here
  site: "https://lexingtonthemes.com/",
  integrations: [sitemap()],
});
