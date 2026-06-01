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
        background: "var(--background)",
        foreground: "var(--foreground)",
        "burnt-orange": "#C4602A",
        "deep-rust": "#B84A1E",
        "cream-sand": "#E8D5B0",
        "vespa-blue": "#5B8FA8",
        "navy-border": "#2B4A6B",
        "bg-light": "#FAF6EF",
        "bg-card": "#F2EBD9",
        "text-primary": "#1E3248",
        "text-muted": "#6B7E8F",
        divider: "#D9C9A8",
      },
    },
  },
  plugins: [],
};
export default config;
