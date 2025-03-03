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
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        textGray: "var(--text-gray)",
        white1: "var(--white-1)",
      },
      fontFamily: {
        ptsans: ["var(--font-pt-sans)", "sans-serif"],
      },
      boxShadow: {
        "navbar-shadow": "0 0px 50px rgba(60, 131, 246, 0.4)",
        "contact-form-shadow": "0 0 500px rgba(255, 255, 255, 0.05)",
      }
      
    },
  },
  plugins: [],
} satisfies Config;
