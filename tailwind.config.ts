import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        primary: "rgb(var(--primary) / <alpha-value>)",
        "primary-foreground": "rgb(var(--primary-foreground) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        "accent-foreground": "rgb(var(--accent-foreground) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        "surface-foreground": "rgb(var(--surface-foreground) / <alpha-value>)",
      },
      padding: {
        "container-horizontal-lg": "var(--padding-container-horizontal-lg)",
        "container-vertical-lg": "var(--padding-container-vertical-lg)",
        "container-horizontal-sm": "var(--padding-container-horizontal-sm)",
        "container-vertical-sm": "var(--padding-container-vertical-sm)",
      },
    },
  },
  plugins: [],
};
export default config;
