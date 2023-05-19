import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import { configDefaults, defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],

  // https://vitest.dev/config/
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./test/setup.js",
    coverage: {
      provider: "c8",

      // collect coverage for all except the files specified
      all: true,
      exclude: [
        ...configDefaults.coverage.exclude,
        "src/assets/**",
        "src/**/types/*.ts",
      ],
    },
  },
});
