import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "bounce-x": "bounce-x .8s linear infinite",
      },
      keyframes: {
        "bounce-x": {
          "50%": { transform: "scale(1.2, 1)" },
          "100%": { transform: "scale(1, 1)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
