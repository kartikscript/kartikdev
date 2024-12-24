'use client'
import { MenuLinks } from '@/constants/NavLinks'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import React, {  useState } from 'react'
import { twMerge } from 'tailwind-merge'

const MenuButton = () => {

  const [menuOpen, setMenuOpen] = useState(false)
  const [bgImage, setBgImage] = useState('/images/home.jpg')
  const [loaded, setLoaded] = useState(true)


  const toggleImage = (url:string) =>{
    if(bgImage===url)return
    setLoaded(false)

    const timer = setTimeout(() => {
        setBgImage(url)
        setLoaded(true)
    }, 400); // Delay for the transition effect
  
    return () => clearTimeout(timer);
  }

  return (
    <>
        <div className='relative h-14 w-14 group z-20 cursor-pointer overflow-hidden
                        *:absolute *:w-1 *:rounded-full  dark:*:bg-primary-100/60 *:backdrop-blur-md *:transition-all *:duration-300 
        '
        onClick={()=>setMenuOpen(prev=>!prev)}
        >
          <div className={twMerge(
            `left-0 bottom-0 h-[30%] ${menuOpen ||'group-hover:h-[100%]'}`,
            menuOpen && ' h-[200%] translate-y-1/2 origin-top -rotate-45'
            )}/>

          <div className={twMerge(
            `left-1/2 bottom-0 h-[60%] ${menuOpen || 'group-hover:-translate-y-[22.4px]'}`,
            menuOpen && ' h-[80%] left-0 origin-bottom-right  rotate-45'
            )}/>
          <div className={twMerge(
            `right-0 top-0 h-[100%] ${menuOpen || 'group-hover:h-[30%]'}`,
            menuOpen && ' h-[30%] rotate-45 origin-top'
            )}/>
        </div> 
        <section className={`fixed top-0 bg-black h-full ${menuOpen?"w-full right-0":"w-[0%] left-0 "} overflow-hidden transition-all duration-700 `}>
          <main  className='relative  size-full text-7xl text-amber-100 flex flex-col justify-center items-center gap-8'>
            {
              MenuLinks.map(({title,link,href},i)=>{
                return(
                    <a href={href} key={i}  onMouseEnter={()=>toggleImage(link)} onClick={()=>setMenuOpen(false)}
                      className='relative group opacity-50 py-1 px-6 transition-all duration-300 skew-x-12 skew-y-1 hover:opacity-100 hover:scale-125 z-20
                                before:absolute before:right-0 before:top-0 before:h-full before:w-0 before:bg-primary-600 hover:before:right-auto hover:before:left-0 hover:before:w-full before:transition-all before:duration-500 before:-z-10
                                '
                      >{title}
                      <ExternalLink className='absolute top-0 right-0 origin-bottom-left opacity-0 scale-0 transition-all duration-500 -translate-x-1/2 translate-y-1/2 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:scale-150'/>
                    </a>
                )
              })
            }
          </main>
          <Image 
           className={`fixed bg-contain inset-0 ${loaded ?'opacity-15' :'opacity-0'} transition-all duration-1000  z-10 size-full `}
           src={bgImage}
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