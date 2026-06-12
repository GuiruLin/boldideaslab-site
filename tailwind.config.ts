import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F5F2EA",
        ink: "#1a1a1a",
        blue: "#002FA7",
        gold: "#C9A84C",
        red: "#CC2936"
      },
      fontFamily: {
        display: [
          "var(--font-fraunces)",
          "LXGW WenKai",
          "Georgia",
          "serif"
        ],
        body: ["var(--font-lora)", "LXGW WenKai", "Georgia", "serif"],
        sans: [
          "var(--font-sans)",
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Noto Sans SC",
          "PingFang SC",
          "Hiragino Sans GB",
          "Microsoft YaHei",
          "sans-serif"
        ],
        serif: [
          "var(--font-serif)",
          "Georgia",
          "Times New Roman",
          "Noto Serif SC",
          "serif"
        ]
      },
      boxShadow: {
        soft: "0 24px 70px rgba(26, 26, 26, 0.08)"
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        "fade-up": "fade-up 700ms ease-out both"
      }
    }
  },
  plugins: []
};

export default config;
