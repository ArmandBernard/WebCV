/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./*.html"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
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
  extend: {
    screens: {
      print: { raw: "print" },
    },
  },
  plugins: [],
};
