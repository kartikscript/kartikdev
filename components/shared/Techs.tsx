'use client'
import Image from 'next/image';
import React, { useRef } from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'
import { ArrowDown } from 'lucide-react';

const Techs = () => {

  const imgRef = useRef<HTMLDivElement|null>(null)

  const {scrollYProgress} = useScroll({
    target:imgRef
  })
  const scale4 = useTransform(scrollYProgress, [0,1], [1,4])
  const scale9 = useTransform(scrollYProgress, [0,1], [1,9])
  const scale7 = useTransform(scrollYProgress, [0,1], [1,7])
  const scale8 = useTransform(scrollYProgress, [0,1], [1,8])
  const scale6 = useTransform(scrollYProgress, [0,1], [1,6])
  const pics = [
    {
      src:'/images/html.png',
      scale:scale6,
      top:'5%',
      left:'17%',
      // width:'25vw',
      // height:'25vh'
    },
    {
      src:'/images/javascript.png',
      scale:scale7,
      top:'-15%',
      left:'18%',
      // width:'30vw',
      // height:'35vh'
    },
    {
      src:'/images/mongodb.png',
      scale:scale9,
      top:'22%',
      left:'7%',
      // width:'23vw',
      // height:'50vh'
    },
    {
      src:'/images/nextjs.png',
      scale:scale6,
      top:'-15%',
      left:'-20%',
      // width:'20vw',
      // height:'55vh'
    },
    {
      src:'/images/postgresql.png',
      scale:scale8,
      top:'10%',
      left:'-18%',
      // width:'15vw',
      // height:'35vh'
    },
    {
      src:'/images/tailwind.png',
      scale:scale6,
      top:'20%',
      left:'-5%',
      // width:'20vw',
      // height:'20vh'
    },
    {
      src:'/images/typescript.png',
      scale:scale8,
      top:'-23%',
      left:'-7%',
      // width:'20vw',
      // height:'25vh'
    },
    {
      src:'/images/node-js.png',
      scale:scale6,
      top:'-20%',
      left:'7%',
      // width:'20vw',
      // height:'25vh'
    },
  ]
  return (
    <>
    <div className='sm:hidden w-full grid gap-4 place-items-center grid-cols-[1fr_1fr]'>
    {
      pics.map(({ src }, i) => {
        // console.log(width, height, left, top);
        return (
          <div key={i} className='size-full flex justify-center '>
            
              <Image
                className='object-cover '
                src={src}
                alt='logo'
                width={100}
                height={100}
              />
          </div>
        );
      })
    }
    </div>
  <div ref={imgRef} className='sm:h-[300vh] hidden sm:block'>
   <div className='sticky top-0 overflow-hidden h-screen '>
    {
      pics.map(({ left, top, scale, src,  }, i) => {
        // console.log(width, height, left, top);
        return (
          <motion.div key={i} style={{scale}} transition={{duration:0.5, ease:'easeInOut'}} className='absolute top-0 left-0 size-full flex justify-center items-center '>
            <div
              style={{
                // width: `${width}`,
                // height: `${height}`,
                top: `${top}`,
                left: `${left}`,
              }}
              className='relative '
            >
              <Image
                className='object-cover '
                src={src}
                alt='logo'
                width={100}
                height={100}
              />
            </div>
          </motion.div>
        );
      })
    }
    <motion.div  style={{scale:scale4}} transition={{duration:0.5, ease:'easeInOut'}} className='absolute top-0 left-0 size-full flex justify-center items-center'>
      <div className='relative size-full scale-[0.25] flex flex-col gap-8 items-center justify-center'>
        <h1 className='text-6xl font-IBMBold tracking-wider text-primary-100 dark:text-secondary capitalize text-center px-8 rounded-3xl border-x-8 border-secondary dark:border-primary-100 leading-snug '>
          Step in and explore<br/> my works using <br/>these tech stacks
        </h1>
        <h1 className='text-secondary text-center dark:text-primary-100 text-8xl font-IBMBold '>Recent Projects</h1>
        <ArrowDown className='text-secondary dark:text-primary-100 size-24 animate-bounce'/>
      </div>
    </motion.div>
  </div>
</div> 
    </>
  )
}

export default Techs