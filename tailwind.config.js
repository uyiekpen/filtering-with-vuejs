/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "375px",
        sm: "425px",
        md: "640px", // Small screens
        lg: "1024px", // Large screens
      },
    },
  },
  plugins: [],
};
