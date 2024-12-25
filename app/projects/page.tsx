'use client'
import Title from '@/components/Title';
import { otherProjects, projectInfos } from '@/constants/NavLinks';
import { ExternalLink, MoveLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

const page = () => {

    const [activeIndex, setActiveIndex] = useState<number | null>(null)
  
    const handleEnter = (id:number) =>{
        setActiveIndex(id)
    }
    const handleLeave = () =>{
        setActiveIndex(null)
    }
    
  return (
    <section className='flex flex-col my-10 px-8 md:px-20 bg-primary-800/10'>
        <Link href={'/'}>
           <MoveLeft className='size-10 relative sm:translate-y-full'/>
        </Link>
          <Title title='Project Gallery'/>
      <main className='relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12 *:rounded-3xl *:border *:border-white/70'>
      {
        projectInfos.concat(otherProjects).map(({id,description,img,link,title})=>{
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
      </main>

    </section>
  )
}

export default page