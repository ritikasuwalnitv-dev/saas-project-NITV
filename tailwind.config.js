export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#2563EB",
        navbar: "#222938",
      },
      fontFamily: {
        baloo: ["'Baloo Thambi 2'", "cursive"],
         inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}