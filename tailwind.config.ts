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
        background: "#151718",
        red: {
          50: "#fff1f2",
          100: "#ffe1e2",
          200: "#ffc8ca",
          300: "#ffa1a4",
          400: "#fe6b70",
          500: "#f73a41",
          600: "#e51d24",
          700: "#c0151b",
          800: "#9f151a",
          900: "#84181c",
          950: "#480709",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("tailwindcss-animate")],
};
export default config;
