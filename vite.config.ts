/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

const isProduction = process.env.NODE_ENV === "production";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), isProduction && ViteImageOptimizer()].filter(Boolean),
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
  },
});
