'use client'
import React, { useEffect, useState } from 'react'


const Name = () => {

  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // How much the user has scrolled from the top
      const windowHeight = window.innerHeight; // Viewport height
      const docHeight = document.documentElement.scrollHeight; // Total document height

      const totalScroll = docHeight - windowHeight; // Total scrollable area
      const scrollPosition = (scrollTop / totalScroll) * 100; // Percentage of how much has been scrolled
      console.log(scrollPosition)
      if(scrollPosition>0.3 && !isAnimating){
          setIsAnimating(true)
      }
      if(scrollPosition<0.3 && isAnimating){
          setIsAnimating(false)
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isAnimating]);


  return (
    <div className='flex gap-1 items-end tracking-wide font-DancingScript z-20'>
        <h1 className={`text-main flex items-end text-5xl sm:text-7xl font-[700] `}
         > K<div className={`${isAnimating ? 'animate-erasing' :"animate-typing"} mx-[1.5px] text-3xl sm:text-4xl font-[600] overflow-hidden`}>artik</div></h1>
        <h2
            className={`text-primary-100 dark:text-secondary text-3xl sm:text-6xl overflow-hidden flex items-end font-[600] ${isAnimating ? 'animate-erasing' :"animate-typing"}`}
         >Script</h2>
    </div>
  )
}

export default Name