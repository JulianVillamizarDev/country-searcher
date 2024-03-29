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
        primary: {
          50: 'hsl(0, 0%, 100%)',
          100: 'hsl(0, 0%, 98%)',
          200: 'hsl(0, 0%, 52%)',
        },
        secondary: {
          50: 'hsl(209, 23%, 22%)',
          100: 'hsl(207, 26%, 17%)',
          200: 'hsl(200, 15%, 8%)',
        }
      }
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
