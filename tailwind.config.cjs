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
        primary: "var(--primary)",
        "tag-background": "var(--tag-background)",
        grade: "var(--grade)",
      },
    },
  },
  plugins: [],
};
