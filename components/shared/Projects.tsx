'use client'
import React, { useRef } from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'
import { projectLinks } from '@/constants/NavLinks'
import Image from 'next/image'


const Projects = () => {

  const horRef = useRef<HTMLDivElement|null>(null)

  const {scrollYProgress} = useScroll({
    target:horRef
  })
  const x = useTransform(scrollYProgress, [0,1], ['0%','-300vw'])
  return (
 <div ref={horRef}  className='h-[300vh] relative'>
  <div className='h-screen sticky top-0 flex overflow-hidden '>
    <motion.div style={{x}} className='flex *:w-screen *:h-screen'>
      {
        projectLinks.map(({title,description,link,src},i)=>{
          return(
              <main className='flex items-center justify-center'>
                <a className='relative w-[40%] aspect-video rounded-3xl overflow-hidden shadow-[0_0_10px_10px] shadow-secondary'>
                  <Image
                    className='bg-contain'
                    src={src}
                    alt={title}
                    fill
                  />
                </a>
              </main>
          )
        })
      }
      <div className='bg-green-500'></div>
      <div className='bg-blue-500'></div>
      <div className='bg-amber-500'></div>
      <div className='bg-pink-500'></div>
    </motion.div>
  </div>
</div>
  )
}

export default Projects