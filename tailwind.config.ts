import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/adminComponents/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/HOC/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        "primary-color":"#744CCD",
        "secondary-color":"#192330",
        "tertiary-color":"#EBEDEF",
        "red-color":"#DC2626",
        "green-color":"#00b533",
        "tag-color":"#E0E0E0",
        "stars-color":"#FFD910",
        "text-color":"#ffffff",
        "text-secondary-color":"#979797",
        "warning-color":"#FFCC00",
      }
    },
    fontFamily: {
      poppins: ["Poppins", "sans"],
      lato: ["Lato", "sans"],
      teko: ["Teko", "sans"],
    }
  },
  plugins: [],
};
export default config;

// "primary-color":"#FFD910",