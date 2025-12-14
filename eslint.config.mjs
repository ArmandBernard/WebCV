import { defineConfig } from "eslint/config";
import jsxA11y from "eslint-plugin-jsx-a11y";
import reactHooks from "eslint-plugin-react-hooks";
import react from "eslint-plugin-react";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";

export default defineConfig([
  tseslint.configs.recommended,
  eslint.configs.recommended,
  {
    files: ["src/**/*.{js,jsx,ts,tsx}"],
    ...react.configs.flat.recommended,
    ...reactHooks.configs["recommended-latest"],
    ...jsxA11y.flatConfigs.recommended,
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      "react-hooks": reactHooks,
    },

    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "error",

      quotes: [
        1,
        "double",
        {
          allowTemplateLiterals: true,
        },
      ],

      semi: [1, "always"],
    },
  },
]);
