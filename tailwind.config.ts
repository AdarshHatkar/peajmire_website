/* eslint-disable @typescript-eslint/no-var-requires */
import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#1a5f7a",
        "secondary": "#159895",
        "accent": "#57c5b6",
        "light-accent": "#dafffb",
        "dark-bg": "#102c3a",
        "light-bg": "#F6F8FA",
      },
      fontFamily: {
        "sans": ["Inter", "sans-serif"],
        "heading": ["Roboto", "sans-serif"],
      },
      animation: {

      }
    },
  },
  darkMode: "class",
  plugins: [nextui()]
};

export default config;
