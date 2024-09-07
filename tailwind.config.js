/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Lobster: ["Lobster", "sans-serif"], // Add your custom font here
      },
      colors: {
        customgray: "#59427a",
      },
    },
  },
  plugins: [],
};
