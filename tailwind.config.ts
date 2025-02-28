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
        background: "var(--background)",
        foreground: "var(--foreground)",
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
        'tablet': {min: '770px' },
        'custom': '1201px'
      },
    },
  },
  plugins: [],
} satisfies Config;