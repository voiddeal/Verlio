import type { Config } from "tailwindcss"

export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        primary: {
          light: "#818181",
          default: "#272727",
        },
      },
      colors: {
        theme: {
          green: {
            light: "#a5ffa5",
            default: "#6fff6f",
            dark: "#009900",
          },
          blue: {
            light: "#94e0ff",
            default: "#60d1ff",
          },
        },
        paper: "#e4b257",
      },
      fontSize: {
        xs: "0.7rem",
      },
    },
    screens: {
      sm: "576px", // Replace 'sm' breakpoint with your custom value
      md: "768px", // Replace 'md' breakpoint
      lg: "992px", // Replace 'lg' breakpoint
      xl: "1200px", // Replace 'xl' breakpoint
      "2xl": "1366px", // Replace '2xl' breakpoint
    },
  },
  plugins: [],
} satisfies Config
