/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./*.html"],
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
