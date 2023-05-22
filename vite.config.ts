import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import { configDefaults, defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), mode !== "test" && eslint()].filter(Boolean),

  // https://vitest.dev/config/
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./test/setup.ts",
    coverage: {
      provider: "c8",

      // collect coverage for all except the files specified
      all: true,
      exclude: [
        ...configDefaults.coverage.exclude,
        "src/assets/**",
        "src/*.{ts,tsx}",
        "src/**/types/*.ts",
      ],
    },
  },
}));
