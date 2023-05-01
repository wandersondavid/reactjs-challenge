/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      theme: {
        screens: {
          sm: "640px",
          // => @media (min-width: 640px) { ... }

          md: "840px",
          // => @media (min-width: 768px) { ... }

          lg: "1024px",
          // => @media (min-width: 1024px) { ... }

          xl: "1200px",
          // => @media (min-width: 1280px) { ... }

          "2xl": "1536px",
          // => @media (min-width: 1536px) { ... }
        },
      },
    },
  },
  plugins: [],
};
