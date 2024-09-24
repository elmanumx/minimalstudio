import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    base: "./", // Para asegurar que no haya un '/' inicial
    build: {
      assetsDir: "./_astro", // Indica el directorio de assets sin un prefijo absoluto
      rollupOptions: {
        output: {
          entryFileNames: "./_astro/[name].js",
          chunkFileNames: "./_astro/[name].js",
          assetFileNames: "./_astro/[name].[ext]",
        },
      },
    },
  },
  // Add your domain name here
  site: "https://lexingtonthemes.com/",
  integrations: [sitemap()],
});
