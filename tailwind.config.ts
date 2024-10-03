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
      fontFamily:{
        DancingScript:['var(--font-dancing-script)','sans-serif']
      },
      keyframes:{
        nav:{
          '0%':{width:'0%',transform:'translateX(0%)',},
          '25%':{width:'50%',transform:'translateX(50%)',},
          '50%':{width:'100%',transform:'translateX(100%)',},
          '75%':{width:'50%',transform:'translateX(50%)',},
          '100%':{width:'0%',transform:'translateX(0%)',},
        }
      },
      animation:{
        'nav':'nav 0.5s linear'
      }
    },
  },
  plugins: [],
};
export default config;
