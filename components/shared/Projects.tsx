'use client'
import React, { useState } from 'react'
import { projectInfos } from '@/constants/NavLinks'
import Image from 'next/image'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { twMerge } from 'tailwind-merge'
import Title from '../Title'
import Blob from '../Blob'
import Link from 'next/link'


const Projects = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const projImages = ['/images/proj-1.png','/images/proj-2.png','/images/proj-3.png']

  const handleEnter = (id:number) =>{
      setActiveIndex(id)
  }
  const handleLeave = () =>{
      setActiveIndex(null)
  }
  
  return (
      <div id='Projects' className='relative min-h-screen px-6'>
        <Title title='Project Gallery'/>
        <Blob left='20%' top='10%'/>
        <Blob right='50%' top='60%'/>
        <main className='relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12 *:rounded-3xl *:border *:border-white/70'>
          {
            projectInfos.map(({id,description,img,link,title})=>{
              let isBlur;
              if(activeIndex){
                isBlur = activeIndex !== id
              }
              return(
                <a key={id} target='_blank' onMouseLeave={handleLeave}  onMouseEnter={()=>handleEnter(id)} href={link} className={`${activeIndex&&(isBlur ? 'blur-sm scale-95 opacity-40':'scale-105 opacity-100 shadow-xl')} shadow-lg group opacity-80 transition-all duration-500 flex flex-col items-center shadow-primary-800/50 pb-10 text-center p-2  bg-primary-800 dark:bg-black/60`}>
                  <div className='w-fit mb-8 relative overflow-hidden rounded-2xl border border-white/40 shadow-primary-400/20 shadow-[0_0_13px_5px] '>
                    <Image
                    src={img}
                    alt='project image'
                    width={500}
                    height={500}
                    className=' md:aspect-video object-cover md:object-fill '
                    />
                    <div className='opacity-0 group-hover:opacity-100 transition-all duration-500 absolute size-full inset-0 flex items-center justify-center bg-black/80'>
                      <ExternalLink className='size-12 scale-50 group-hover:scale-100 transition-all duration-500'/>
                    </div>
                  </div>
                  <h2 className='mb-4 font-Oxanium text-2xl tracking-widest font-medium uppercase border-b-[1px] text-white dark:text-primary-100 border-white/40 px-3 inline-block'>{title}</h2>
                  <p className='text-white/60 font-light text-sm tracking-wider leading-relaxed'>{description}</p>
                </a>
              )
            })
          }
          <Link 
            href={'/projects'} 
            id={(projectInfos.length+1).toString()} onMouseLeave={handleLeave}  onMouseEnter={()=>handleEnter(projectInfos.length+1)} className={`${activeIndex&&((activeIndex !== projectInfos.length+1) ? 'blur-sm scale-95 opacity-40':'scale-105 opacity-100 shadow-xl')} hover:text-primary-300 shadow-lg group opacity-80  transition-all duration-500  shadow-primary-800/50 flex items-center justify-center  p-10 whitespace-nowrap bg-primary-800 dark:bg-black/60`}
          >
              <h2 className='underline text-3xl flex gap-2 items-center'>
                See All Projects
                <ArrowRight className='rotate-0 size-8 group-hover:-rotate-45 transition-transform duration-500'/>
              </h2>
          </Link>
        </main>
      </div>   
  )
}

export default Projects