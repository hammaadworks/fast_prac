// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import path, {dirname} from "path";
import { fileURLToPath } from 'url';

// Get the current directory name in an ESM-compatible way
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://astro.build/config
export default defineConfig({
  base: "/fast_prac/",
  site: "https://hammaadworks.github.io",
  vite: {
    resolve: {
      alias: {
        // Map "@" to the absolute path of your src directory
        "@": path.resolve(__dirname, "./src"),
      },
    },
    plugins: [tailwindcss()],
  },
  integrations: [react()],
});
