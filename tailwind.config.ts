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
        Roboto:['var(--font-Roboto)','sans-serif'],
        Oxanium:['var(--font-Oxanium)','sans-serif'],
      },
      keyframes:{
        nav:{
          '0%':{width:'0%',transform:'translateX(0%)',},
          '25%':{width:'50%',transform:'translateX(50%)',},
          '50%':{width:'100%',transform:'translateX(100%)',},
          '75%':{width:'50%',transform:'translateX(50%)',},
          '100%':{width:'0%',transform:'translateX(0%)',},
        },
        "typing": {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        "erasing": {
          '0%': { width: '100%' },
          '100%': { width: '0%' },
        },
        blob:{
          '0%':{transform:'translate(0,0)',scale:'1'},
          '33%':{transform:'translate(50%,50%)',scale:'1.1'},
          '66%':{transform:'translate(30%,-30%)',scale:'0.9'},
          '100%':{transform:'translate(0,0)',scale:'1'},
        },
        logoBg:{
          '0%':{backgroundPosition:"0% 50%"},
          '50%':{backgroundPosition:"100% 50%"},
          '100%':{backgroundPosition:"0% 50%"},
          },
        moving:{
          '0%':{transform:'translate(0%,0%)'},
          '100%':{transform:'translate(-100%,0%)'},
        }
        },
      animation:{
        'nav':'nav 0.5s linear ',
        'typing':'typing 0.7s steps(20,end)',
        'erasing':'erasing 0.7s steps(30,end) forwards',
        'blob':'blob 7s infinite',
        'moving-background':'logoBg 5s infinite linear',
        'hor-move':"moving 4s infinite linear"
      }
    },
  },
  plugins: [],
  darkMode:'class'
};
export default config;
