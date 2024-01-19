import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      layout: {
        radius: {
          full: "100px",
          large: "50px",
        },
      },
      themes: {
        dark: {
          colors: {
            primary: {
              DEFAULT: "#4F00F6",
              foreground: "#ebfaf8",
            },
            secondary: {
              DEFAULT: "#FCA453",
              foreground: "#ebfaf8",
            },
          },
        },
      },
    }),
  ],
};
