import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/home-daycare-site/",
  plugins: [tailwindcss()],
});
