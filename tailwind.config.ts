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
        cream: "#fffaf3",
        ink: "#25142f",
        tea: "#4b2e16",
        leaf: "#476a36",
        plum: {
          50: "#fbf7ff",
          100: "#f3e9ff",
          200: "#e5d0fb",
          300: "#cda9f3",
          400: "#aa77df",
          500: "#8d54c5",
          600: "#7437ad",
          700: "#5d288e",
          800: "#48216d",
          900: "#33184f",
          950: "#251035"
        },
        saffron: "#d9a441"
      },
      boxShadow: {
        glow: "0 24px 80px rgba(116, 55, 173, 0.22)",
        soft: "0 18px 60px rgba(37, 20, 47, 0.12)"
      },
      backgroundImage: {
        paper:
          "radial-gradient(circle at 10% 20%, rgba(170,119,223,.16), transparent 28%), linear-gradient(135deg, rgba(255,250,243,.98), rgba(243,233,255,.78))",
        leafline:
          "linear-gradient(90deg, rgba(71,106,54,.2), rgba(217,164,65,.45), rgba(116,55,173,.24))"
      }
    }
  },
  plugins: []
};

export default config;
