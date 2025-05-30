import { defineConfig } from "tsup";
import { resolve } from "path";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: [
    "react",
    "react-dom",
    "tailwindcss",
    "classnames",
    "country-flag-icons/unicode",
    "react-icons",
    "react-router-dom",
  ],
  esbuildOptions(options) {
    options.banner = {
      js: '"use client";',
    };
    options.alias = {
      "@components": resolve(__dirname, "src/components"),
      "@hooks": resolve(__dirname, "src/hooks"),
      "@context": resolve(__dirname, "src/context"),
    };
  },
  // onSuccess: "npm run build:css",
});
