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
    <div className='relative z-30 w-fit flex items-baseline text-6xl text-white font-Oxanium whitespace-nowrap '>
        <h1 className='font-[400] text-primary-200 '>K</h1>
        <h1 className={` text-4xl flex gap-1 font-[300] overflow-hidden ${isAnimating?"animate-erasing":"animate-typing"}`}>artik.<span className=' font-light'>Script</span></h1>
   </div>
  )
}

export default Name