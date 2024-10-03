'use client'
import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge'

const MenuButton = () => {

  const [menuOpen, setMenuOpen] = useState(false)
  
  return (
    <div>
        <div className='relative h-10 w-6 group 
                        *:absolute *:w-[2px] *:bg-secondary-100 *:transition-all *:duration-300 *:delay-100
        '
        onClick={()=>setMenuOpen(prev=>!prev)}
        >
          <div className={twMerge(
            `left-0 bottom-0 h-[20%] ${menuOpen ||'group-hover:h-[100%]'}`,
            menuOpen && 'h-[100%] origin-top -rotate-45'
            )}/>

          <div className={twMerge(
            `left-1/2 bottom-0 h-[60%] ${menuOpen || 'group-hover:-translate-y-[16px]'}`,
            menuOpen && 'h-[60%] left-0 origin-bottom -translate-y-[50%] rotate-45'
            )}/>
          <div className={twMerge(
            `right-0 top-0 h-[100%] ${menuOpen || 'group-hover:h-[20%]'}`,
            menuOpen && 'h-[20%] origin-top translate-y-1/2 translate-x-full rotate-45'
            )}/>
        </div>
        <div>
          
        </div>
    </div>
  )
}

{/* height is 60% of h-10(40px) i.e. h=24px rest height remained is 16px to moved 16px ..now translatey100% means content's full height 
  if -translate-y-full then body will move 24px down 
*/}
export default MenuButton