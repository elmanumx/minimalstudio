import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    base: "/", // Aquí indica el subdirectorio
  },
  // Add your domain name here
  site: "https://elmanumx.com/demos/astrobuild/",
  integrations: [sitemap()],
});
