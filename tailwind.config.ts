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
            dark: "#29c1ffcc",
          },
        },
        paper: "#e4b257",
        paperHover: "#E6BB6D",
        orange: "#e93f1e",
      },
      fontSize: {
        xs: "0.7rem",
      },
    },
  },
  plugins: [],
} satisfies Config
