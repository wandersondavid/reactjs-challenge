/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      theme: {
        screens: {
          sm: "640px",
          md: "840px",
          lg: "1024px",
          xl: "1200px",
          "2xl": "1536px",
        },
        fontSize: {
          sm: "0.8rem",
          base: "1rem",
          xl: "1.25rem",
          "2xl": "1.563rem",
          "3xl": "1.953rem",
          "4xl": "2.441rem",
          "5xl": "3.052rem",
        },
      },
    },
  },
  important: "#root",
  plugins: [],
};
