import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    base: "./", // Para asegurar que no haya un '/' inicial
    build: {
      assetsDir: "_astro", // Indica el directorio de assets sin un prefijo absoluto
    },
  },
  // Add your domain name here
  site: "https://lexingtonthemes.com/",
  integrations: [sitemap()],
});
