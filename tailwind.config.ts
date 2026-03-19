import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-linen": "#F5F3EF",
        "bg-warm": "#EBE8E2",
        "bg-navy": "#1C2331",
        "text-dark": "#222222",
        "text-medium": "#4A4A4A",
        accent: "#C45C3E",
        "accent-gold": "#B8860B",
        "accent-green": "#4A7C59",
        border: "#D8D4CC",
      },
      fontFamily: {
        serif: ["Instrument Serif", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1040px",
      },
    },
  },
  plugins: [],
};
export default config;
