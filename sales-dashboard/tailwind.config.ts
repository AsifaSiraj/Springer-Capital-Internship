import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["'DM Mono'", "monospace"],
        sans: ["'DM Sans'", "sans-serif"],
        display: ["'Syne'", "sans-serif"],
      },
      colors: {
        ink: {
          50: "#f5f3ef",
          100: "#e8e3da",
          200: "#d1c8b5",
          300: "#b5a88a",
          400: "#9a8a68",
          500: "#857550",
          600: "#6d5f42",
          700: "#574b35",
          800: "#463c2b",
          900: "#3b3224",
          950: "#201b12",
        },
        cream: "#faf8f3",
        amber: {
          accent: "#e8891a",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "slide-in": "slideIn 0.4s ease forwards",
        "count-up": "countUp 0.8s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-10px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
