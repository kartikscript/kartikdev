'use client'
import { Moon, Sun } from 'lucide-react'
import React, { useState } from 'react'

const ToggleTheme = () => {

  const [darkMode, setDarkMode] = useState(false)

  const toggleDark = () =>{
    setDarkMode(prev=>!prev)
}

  return (
    <div onClick={toggleDark} className='w-12 h-6 rounded-3xl cursor-pointer flex items-center relative overflow-hidden bg-secondary-100'>
        <div className={`absolute flex items-center justify-center p-[1px] ${darkMode?'translate-x-[26px]':'left-[5%] text-yellow-600 bg'} size-5 rounded-full transition-transform duration-300 delay-75 bg-secondary `}>
          {darkMode?<Moon fill='#075985'  stroke='#0284c7' strokeWidth={0.3}/>:<Sun fill='#ca8a04' />}
        </div>
    </div>
  )
}

export default ToggleTheme

// w-12 = w=48px |w-5 =20px , length to move = 48px - 20px = 28px
// present at left-5% of parent width i.e. at 1px so to maintain edge gap both side = 2px , so translate 28px -2px =26px 