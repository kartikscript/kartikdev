'use client'
import React, { useRef, useState } from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'
import { projectLinks } from '@/constants/NavLinks'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'


const Projects = () => {

  const horRef = useRef<HTMLDivElement|null>(null)
  const [activeProj, setActiveProj] = useState(false)

  const projLinks = ['/images/proj-1.png','/images/proj-2.png','/images/proj-3.png']

  const changeProj = (id:string)=>{
    
  }
  const {scrollYProgress} = useScroll({
    target:horRef
  })
  const x = useTransform(scrollYProgress, [0,1], ['0%','-300vw'])

  const activeProjStyles = 'top-[0%] '
  return (
 <div ref={horRef}  className='h-[300vh] relative'>
  <div className='h-screen sticky top-0 flex overflow-hidden '>
    <motion.div style={{x}} className='flex *:w-screen *:h-screen'>
     
              <main  className=' flex gap-20 items-center justify-center border-r-2 border-primary-100'>
                <div className='relative cursor-pointer w-[40%] aspect-video *:transition-all duration-700'>
                  <Image
                    id='1'
                    className=' absolute inset-0 rounded-3xl  bg-contain peer z-0 transition-all duration-300 delay-100 hover:opacity-40 hover:scale-105'
                    src={'/images/proj-1.png'}
                    alt={'web image'}
                    fill
                    onClick={()=>changeProj('1')}
                  />
                    <Image
                      className='-z-10 bg-contain rounded-2xl absolute -translate-x-1/2 left-[50%] -top-[20%]'
                      src={'/images/proj-2.png'}
                      alt='ima'
                      width={480}
                      height={450}
                      fill={false}
                      onClick={()=>changeProj('2')}
                    />
                    <Image
                      className='-z-10 bg-contain rounded-2xl absolute -translate-x-1/2 left-[50%] -bottom-[20%]'
                      src={'/images/proj-3.png'}
                      alt='ima'
                      width={480}
                      height={450}
                      fill={false}
                      onClick={()=>changeProj('3')}
                    />

                </div>
                  {/* <div className='z-10 flex flex-col gap-1 items-center justify-center text-secondary-100 transition-all duration-300 delay-200 opacity-0 peer-hover:opacity-100'>
                    <ExternalLink className='size-10 '/>
                    <p className='text-sm '>Explore The Project</p>
                  </div> */}
                <div className='w-[40%] flex flex-col gap-8 justify-start'>
                  <h2 className='text-7xl font-IBMBold text-primary-100'>Project Overview</h2>
                  <h3 className='text-5xl mt-10 font-IBMBold text-secondary-100'>my title</h3>
                  <p className='text-lg px-4 py-3 text-secondary border-l border-primary-100'>desped</p>
                </div>
              </main>
      
      <div>

      </div>
      <div className='bg-amber-500'></div>
      <div className='bg-pink-500'></div>
    </motion.div>
  </div>
</div>
  )
}

export default Projects