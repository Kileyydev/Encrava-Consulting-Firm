import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        encravaBg: "#E3EAE5",
      },
      fontFamily: {
        sans: ["var(--font-jost)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;