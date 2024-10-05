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
        DancingScript:['var(--font-dancing-script)','sans-serif'],
        IBMRegular:['var(--font-IBM-regular)','sans-serif'],
        IBMBold:['var(--font-IBM-bold)','sans-serif'],
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
          '33%':{transform:'translate(-20px,40px)',scale:'1.1'},
          '66%':{transform:'translate(30px,-30px)',scale:'0.9'},
          '100%':{transform:'translate(0,0)',scale:'1'},
        },
        },
      animation:{
        'nav':'nav 0.5s linear',
        'typing':'typing 0.7s steps(20,end)',
        'erasing':'erasing 0.7s steps(30,end) forwards',
        'blob':'blob 7s infinite',
      }
    },
  },
  plugins: [],
};
export default config;
