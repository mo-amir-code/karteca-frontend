import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
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
        "primary-color":"#FFD910",
        "secondary-color":"#192330",
        "tertiary-color":"#EBEDEF",
        "red-color":"#DC2626",
        "green-color":"#22C55E",
      }
    },
    fontFamily: {
      poppins: ["Poppins", "sans"],
      lato: ["Lato", "sans"],
    }
  },
  plugins: [],
};
export default config;
