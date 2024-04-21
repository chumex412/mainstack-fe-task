import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      screens: {
        //xs: "375px",
        // => @media (min-width: 480px) { ... }
        sm: "480px",
        // => @media (min-width: 640px) { ... }
        md: "650px",
        // => @media (min-width: 768px) { ... }
        lg: "768px",
        // => @media (min-width: 1024px) { ... }
        xl: "960px",
        // => @media (min-width: 1280px) { ... }
        "2xl": "1140px",
        "3xl": "1232px",
        // => @media (min-width: 1536px) { ... }
        "4xl": "1312px"
      },
      colors: {
        black: {
          300: "rgb(var(--primary-300) / 1)"
        },
        gray: {
          50: "rgb(var(--gray-50) / 1)",
          400: "rgb(var(--gray-400) / 1)"
        },

        green: {
          50: "rgb(var(--green-50) / 1)",
          400: "rgb(var(--green-400) / 1)"
        },
        orange: {
          300: "rgb(var(--orange-300) / 1)",
          600: "rgb(var(--orange-600) / 1)"
        },
        red: {
          50: "rgb(var(--red-50) / 1)"
        },
        white: "rgb(var(--white) / 1)"
      },
      fontFamily: {},
      fontSize: {
        sm: "var(--sm)",
        base: "var(--base)",
        lg: "var(--h3)",
        xl: "var(--h2)",
        "2xl": "var(--h1)"
      }
    }
  },
  plugins: []
};
export default config;
