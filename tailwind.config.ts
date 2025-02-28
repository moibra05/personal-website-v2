import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: "var(--primary-blue)",
        secondaryBlue: "var(--secondary-blue)",
        white1: "var(--white-1)",
      },
      fontFamily: {
        ptsans: ["var(--font-pt-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
