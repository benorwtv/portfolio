import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          crimson: "#8B0000",
          cream: "#FFFDD0",
          creamDark: "#F5F5DC",
          dark: "#1A1A1A",
          darker: "#0A0A0A",
          earth: "#8B7355",
          metallic: "#D4AF37",
          bronze: "#CD7F32",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "metallic-gradient":
          "linear-gradient(45deg, #D4AF37, #FFFDD0, #D4AF37, #8B7355)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
