import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bone: "#f3efe6",
        carbon: "#15120e",
        muted: "#6f675d",
        ochre: "#b77922",
        stone: "#c8bfb0"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(23, 23, 23, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
