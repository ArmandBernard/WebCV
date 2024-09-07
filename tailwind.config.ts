import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        "text-color": "var(--text-color)",
        primary: "var(--primary)",
        "tag-background": "var(--tag-background)",
        grade: "var(--grade)",
      },
    },
  },
  plugins: [],
};
export default config;
