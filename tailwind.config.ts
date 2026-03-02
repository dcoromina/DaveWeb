import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/[object Object].js",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-outfit)", "sans-serif"],
      },
      colors: {
        background: "#000000", // Pure Black
        surface: "#121212", // Dark Grey
        primary: {
          DEFAULT: "#f97316", // Orange 500
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#ffffff", // White
          foreground: "#000000",
        },
        accent: "#fb923c", // Orange 400
      },
      keyframes: {
        animatedgradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      backgroundSize: {
        "300%": "300%",
      },
      animation: {
        gradient: "animatedgradient 6s ease infinite alternate",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "slide-up": "slide-up 0.7s ease-out forwards",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-glow": "conic-gradient(from 90deg at 50% 50%, #00000000 50%, #000000 100%), radial-gradient(rgba(249, 115, 22, 0.3) 0%, transparent 50%)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(), require("daisyui"), require("tailwindcss-animated")],
};
export default config;
