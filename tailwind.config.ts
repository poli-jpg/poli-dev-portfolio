import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Base surfaces — a deep slate-navy, not pure black.
        base: {
          DEFAULT: "#0A0E14",
          soft: "#0D121B",
          surface: "#121826",
          border: "#1E2739",
        },
        // Light mode surfaces
        paper: {
          DEFAULT: "#F7F8FA",
          soft: "#FFFFFF",
          surface: "#EEF1F5",
          border: "#DCE1E9",
        },
        ink: {
          DEFAULT: "#E7EAF1",
          muted: "#8B93A7",
          dim: "#5B6478",
        },
        // Retained for legacy component references — mirrors ink.dim / ink.muted.
        night: {
          DEFAULT: "#111726",
          muted: "#5B6478",
        },
        // Signature accent — warm beige, used for the terminal / infra motif.
        signal: {
          DEFAULT: "#C9A876",
          bright: "#E3CDA0",
          dim: "#8A6F47",
        },
        // Secondary accent — used sparingly for "in progress / learning" states.
        amber: {
          DEFAULT: "#F0A860",
          dim: "#8A5B2C",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(201,168,118,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(201,168,118,0.08) 1px, transparent 1px)",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        blink: "blink 1s step-start infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
