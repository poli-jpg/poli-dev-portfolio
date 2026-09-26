import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Thème unique : fond noir, texte clair, accent doré.
        bg: { DEFAULT: "#000000", card: "#0B0B0C", hover: "#111113" },
        line: "#1F1F23",
        fg: { DEFAULT: "#F4F4F5", muted: "#A1A1AA", dim: "#71717A" },
        accent: { DEFAULT: "#C9A876", bright: "#E3CDA0" },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: { "fade-up": "fade-up 0.6s ease-out both" },
    },
  },
  plugins: [],
};

export default config;
