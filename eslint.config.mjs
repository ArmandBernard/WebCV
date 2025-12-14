import { defineConfig } from "eslint/config";
import jsxA11y from "eslint-plugin-jsx-a11y";
import reactHooks from "eslint-plugin-react-hooks";
import react from "eslint-plugin-react";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import nextPlugin from "@next/eslint-plugin-next";
import globals from "globals";

export default defineConfig([
  {
    ignores: [".next/**", "dist/**"],
  },
  ...tseslint.configs.recommended.map((config) => ({
    ...config,
    files: ["src/**/*.{ts,tsx}"],
  })),
  {
    files: ["src/**/*.{js,jsx,ts,tsx}"],
    ...react.configs.flat.recommended,
    ...reactHooks.configs["recommended-latest"],
    ...eslint.configs.recommended,
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
      "@next/next": nextPlugin,
    },

    rules: {
      ...nextPlugin.configs.recommended.rules,
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "error",
      "no-unused-vars": "off",
      "@next/next/no-img-element": "off",

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
