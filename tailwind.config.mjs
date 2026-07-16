/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "400px",
      // => @media (min-width: 400px) { ... }

      sm: "480px",
      // => @media (min-width: 480px) { ... }

      md: "547px",
      // => @media (min-width: 547px) { ... }

      lg: "768px",
      // => @media (min-width: 768px) { ... }

      xl: "1024px",
      // => @media (min-width: 1024px) { ... }

      "2xl": "1680px",
      // => @media (min-width: 1680px) { ... }
    },
    extend: {
      colors: {
        footer: "#efefef",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem", //over ride default container padding
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};
