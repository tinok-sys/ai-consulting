import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Notre palette "Cabinet IA Premium"
        background: "#020617", // Noir profond
        foreground: "#f8fafc", // Blanc cassé
        primary: "#3b82f6",    // Bleu électrique
        accent: "#60a5fa",     // Bleu clair
      },
    },
  },
  plugins: [],
};
export default config;