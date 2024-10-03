'use client'
import { Moon, Sun } from 'lucide-react'
import React, { useState } from 'react'

const ToggleTheme = () => {

  const [darkMode, setDarkMode] = useState(false)

  const toggleDark = () =>{
    setDarkMode(prev=>!prev)
}

  return (
    <div onClick={toggleDark} className='w-11 h-5 rounded-3xl cursor-pointer flex items-center relative overflow-hidden bg-secondary-100'>
        <div className={`absolute flex items-center justify-center text-secondary p-[1px] ${darkMode?'left-[90%] -translate-x-[90%]':'left-[5%]'} w-4 h-4 rounded-full transition-all duration-300  bg-primary-100`}>
          {darkMode?<Moon/>:<Sun/>}
        </div>
    </div>
  )
}

export default ToggleTheme