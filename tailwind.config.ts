import type { Config } from "tailwindcss";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        foreground: "var(--foreground)",
        primary: "#cdbdff",
        "on-primary": "#370096",
        "primary-container": "#3b00a1",
        "on-primary-container": "#a68bff",
        tertiary: "#00daf3",
        background: "#101419",
        "on-background": "#e0e2eb",
        "surface-container-low": "#181c22",
        "surface-container": "#1c2026",
        "outline-variant": "#474553",
      },
      fontFamily: {
        rubikRegular: ["rubikRegular", "sans-serif"],
        rubikMedium: ["rubikMedium", "sans-serif"],
        rubikBold: ["rubikBold", "sans-serif"],
        rubikLight: ["rubikLight", "sans-serif"],
        interRegular: ["interRegular", "sans-serif"],
        interBold: ["interBold", "sans-serif"],
      },
      screens: {
        tablet: { min: "770px" },
        custom: "1201px",
      },
    },
  },
  plugins: [],
} satisfies Config;
