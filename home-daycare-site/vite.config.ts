import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "https://github.com/DaBurgermeista/home-daycare-site",
  plugins: [tailwindcss()],
});
