'use client'
import React, { useRef, useState } from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'
import { projectInfos } from '@/constants/NavLinks'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import { twMerge } from 'tailwind-merge'


const Projects = () => {

  const horRef = useRef<HTMLDivElement|null>(null)
  const [activeIndex, setActiveIndex] = useState(1)

  const projImages = ['/images/proj-1.png','/images/proj-2.png','/images/proj-3.png']

  const changeProj = (id:number)=>{
      setActiveIndex(id)
  }
  const currentProjInfo = projectInfos.find(item=>item.id===activeIndex)
  const {scrollYProgress} = useScroll({
    target:horRef
  })
  const x = useTransform(scrollYProgress, [0,1], ['0%','-300vw'])

console.log(activeIndex)
  return (
 <div ref={horRef}  className='h-[300vh] relative'>
  <div className='h-screen sticky top-0 flex overflow-hidden '>
    <motion.div style={{x}} className='flex *:w-screen *:h-screen'>
     
              <main  className=' flex gap-20 items-center justify-center border-r-2 border-primary-100'>
                  <div className=' relative flex flex-col justify-center items-center w-[50%] h-full cursor-pointer  *:transition-all *:duration-700 
                                  before:z-20 before:absolute before:w-full before:h-[10%] before:inset-0 before:bg-gradient-to-t before:from-transparent before:to-primary before:from-10% 
                                  after:z-20 after:absolute after:w-full after:h-[10%] after:bottom-0 after:bg-gradient-to-b after:from-transparent after:to-primary after:from-10% 
                                  '
                  >
                    {
                      projImages.map((imageSrc,i)=>{
                        const activeImage = activeIndex === i
                        const prevImage = activeIndex > i
                        const nextImage = activeIndex < i 
                        const lastImage = activeIndex===(projImages.length - 1) && i===0 //active index =2  that is last pic clicked and have to make changes for first image that is i=0 
                        const firstImage =  activeIndex + i=== 2//only set for firstImage click to do something for lastImage
                        let position;
                        if(activeImage) position='scale-125 z-20 ring-1 ring-primary-100 shadow-[0_0_20px_1px] shadow-secondary-100 opacity-100 '
                        else if(prevImage) position='-translate-y-full'
                        else if(nextImage) position='translate-y-full'
                        if(prevImage && lastImage) position='translate-y-full'//suppose if last image clicked (active Index =2) then we want first to take its place and rest will have same behaviour prevImage true for both i=0 &1 so only we want changes in i=0
                        if(nextImage && firstImage) position='-translate-y-full'
                        return(
                            <Image
                              key={i}
                              className={twMerge(`opacity-30 z-10 absolute left-0  translate-x-[50%] rounded-3xl  bg-contain  transition-all duration-300 delay-100 `,
                                position
                              )}
                              src={imageSrc}
                              alt={'web image'}
                              width={400}
                              height={450}
                              onClick={()=>changeProj(i)}
                            />
                        )
                      })
                    }
                  
                      
                  </div>

                  {/* <div className='z-10 flex flex-col gap-1 items-center justify-center text-secondary-100 transition-all duration-300 delay-200 opacity-0 peer-hover:opacity-100'>
                    <ExternalLink className='size-10 '/>
                    <p className='text-sm '>Explore The Project</p>
                  </div> */}
              
                <div className='w-[40%] flex flex-col gap-8 justify-start'>
                  <h2 className='text-7xl font-IBMBold text-primary-100'>Project Overview</h2>
                  <h3 className='relative text-5xl mt-6 font-IBMBold text-secondary-100 flex items-end gap-6'>{currentProjInfo?.title} <a target='_blank' href={currentProjInfo?.link}><ExternalLink className='size-8'/></a></h3>
                  <p className=' px-4 py-3 text-secondary border-l border-primary-100'>{currentProjInfo?.description}</p>
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