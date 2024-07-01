import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      
      transitionProperty: {
        "width": "width",
        "translate": "translate"
      },

     
    },
    animation: {
      "spin-slow": "spin 3s linear infinite",
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config