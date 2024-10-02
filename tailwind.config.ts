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
        main:'#eb5e28',
        primary:{
          DEFAULT:'#252422',
          100:'#403d39'
        },
        secondary:{
          DEFAULT:'#ccc5b9',
          100:'#fffcf2'
        },
      },
    },
  },
  plugins: [],
};
export default config;
