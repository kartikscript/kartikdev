'use client'
import { MenuLinks } from '@/constants/NavLinks'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

const MenuButton = () => {

  const [menuOpen, setMenuOpen] = useState(false)
  const [bgImage, setBgImage] = useState({url:'/images/home.jpg',loaded:true})
  // const [loaded, setLoaded] = useState(true)
  const toggleImage = (url:string) =>{
    setBgImage({url:url,loaded:false})
  }

  useEffect(() => {
    // Set opacity to 0 initially when image changes, then fade in

    const timer = setTimeout(() => {
      setBgImage({...bgImage,loaded:true});
    }, 500); // Delay for the transition effect

    return () => clearTimeout(timer);
  }, [bgImage]);
  return (
    <>
        <div className='relative h-14 w-8 group z-20
                        *:absolute *:w-[2px] *:bg-secondary-100 *:transition-all *:duration-300 *:delay-100
        '
        onClick={()=>setMenuOpen(prev=>!prev)}
        >
          <div className={twMerge(
            `left-0 bottom-0 h-[30%] ${menuOpen ||'group-hover:h-[100%]'}`,
            menuOpen && 'h-[100%] origin-top -rotate-45'
            )}/>

          <div className={twMerge(
            `left-1/2 bottom-0 h-[60%] ${menuOpen || 'group-hover:-translate-y-[22.4px]'}`,
            menuOpen && 'h-[100%] left-0 origin-bottom-right -translate-y-[25%] rotate-45'
            )}/>
          <div className={twMerge(
            `right-0 top-0 h-[100%] ${menuOpen || 'group-hover:h-[30%]'}`,
            menuOpen && 'h-[0%]'
            )}/>
        </div> 
        <section className={`fixed top-0 whitespace-nowrap bg-black h-full ${menuOpen?"w-full right-0":"w-[0%] left-0 "} overflow-hidden transition-all duration-700 delay-100 `}>
          <main  className='relative z-20 size-full  text-7xl text-secondary flex flex-col justify-center items-center gap-8'>
            {
              MenuLinks.map(({title,link},i)=>{
                return(
                  <Link key={i} onMouseEnter={()=>toggleImage(link)} href={'/'}>{title}</Link>
                )
              })
            }
          </main>
          <Image 
           className={`fixed bg-cover inset-0 ${bgImage.loaded ?'opacity-10' :'opacity-0'} transition-opacity duration-1000  z-10 size-full `}
           src={bgImage.url}
           alt='image'
           fill
          />
        </section>
  </> 
  )
}

export default MenuButton

{/* height is 60% of h-10(40px) i.e. h=24px rest height remained is 16px to moved 16px ..now translatey100% means content's full height 
  if -translate-y-full then body will move 24px down 
  40% will b moved when h-60%
*/}