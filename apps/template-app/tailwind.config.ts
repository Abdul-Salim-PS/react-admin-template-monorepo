import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    // Option 1: If using workspace dependencies in a monorepo
    "../../packages/ileaf-ui/src/**/*.{js,ts,jsx,tsx}",
    // Option 2: If installed from npm
    "./node_modules/ileaf-ui/dist/**/*.{js,mjs,cjs}",
  ],
  theme: {
    // extend: {
    //   // Your theme extensions
    //   colors: {
    //     primary: "var(--color-primary)",
    //     secondary: "var(--color-secondary)",
    //   },
    //   fontFamily: {
    //     primary: "var(--font-primary)",
    //   },
    // },
  },
  plugins: [],
  safelist: ["bg-red-500", "border-gray-100"],
};
