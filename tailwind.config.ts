import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#141917",
        paper: "#F5F6F3",
        teal: {
          DEFAULT: "#0E4B44",
          light: "#166059",
          dark: "#0A3733",
        },
        amber: {
          DEFAULT: "#E6A339",
          dark: "#C7862A",
        },
        muted: "#5C6B67",
        line: "#DDE3E0",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
