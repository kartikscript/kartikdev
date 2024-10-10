"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }



  return (
    <div>
      The current theme is: {theme}
      <button onClick={() => setTheme("light")}>Light Mode</button>
      <button onClick={() => setTheme("dark")}>Dark Mode</button>
    </div>
//     <div  className='w-12 h-6 rounded-3xl cursor-pointer flex items-center relative overflow-hidden dark:bg-red-700 bg-secondary-100'>
//     {/* <div className={`absolute flex items-center justify-center p-[1px]  size-5 rounded-full transition-transform duration-300 delay-75 bg-secondary `}>
//     </div> */}
//      <Moon onClick={() => setTheme("light")} fill='#075985'  stroke='#0284c7' strokeWidth={0.3}/>
//       <Sun onClick={() => setTheme("dark")} fill='#ca8a04' />
// </div>
//         <p>theme is {theme}</p>
  );
};

export default ThemeSwitcher;