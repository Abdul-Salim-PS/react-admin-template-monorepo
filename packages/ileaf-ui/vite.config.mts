import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [react(), dts({ include: ["src"] })],
  resolve: {
    alias: {
      "@components": path.resolve("./src/components"),
      "@assets": path.resolve("./src/assets"),
      "@hooks": path.resolve("./src/hooks"),
      "@lib": path.resolve("./src/lib"),
      "@styles": path.resolve("./src/styles"),
      "@stores": path.resolve("./src/stores"),
      "@context": path.resolve("./src/context"),
      "@types": path.resolve("./src/types"),
    },
  },
  build: {
    lib: {
      entry: resolve("./src/index.ts"),
      name: "ileaf-ui",
      formats: ["es", "cjs"],
    },
    cssCodeSplit: true,
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});
