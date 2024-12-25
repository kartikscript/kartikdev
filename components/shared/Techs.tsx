'use client'
import Image from 'next/image';
import React, { useRef } from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'
import { ArrowDown } from 'lucide-react';
import Blob from '../Blob';
import FloatingText from '../FloatingText';

const Techs = () => {

  const imgRef = useRef<HTMLDivElement|null>(null)

  const texts=['HTML5','CSS3','JavaScript','Tailwind CSS','MongoDB','TypeScript','NextJS','PostgreSQL']

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
      top:'10%',
      left:'17%',
      // width:'25vw',
      // height:'25vh'
    },
    {
      src:'/images/javascript.png',
      scale:scale7,
      top:'18%',
      left:'7%',
      // width:'30vw',
      // height:'35vh'
    },
    {
      src:'/images/mongodb.png',
      scale:scale9,
      top:'18%',
      left:'-5%',
      // width:'23vw',
      // height:'50vh'
    },
    {
      src:'/images/nextjs.png',
      scale:scale6,
      top:'10%',
      left:'-18%',
      // width:'20vw',
      // height:'55vh'
    },
    {
      src:'/images/postgresql.png',
      scale:scale8,
      top:'-15%',
      left:'-20%',
      // width:'15vw',
      // height:'35vh'
    },
    {
      src:'/images/tailwind.png',
      scale:scale6,
      top:'-23%',
      left:'-7%',
      // width:'20vw',
      // height:'20vh'
    },
    {
      src:'/images/typescript.png',
      scale:scale8,
      top:'-20%',
      left:'7%',
      // width:'20vw',
      // height:'25vh'
    },
    {
      src:'/images/node-js.png',
      scale:scale6,
      top:'-15%',
      left:'18%',
      // width:'20vw',
      // height:'25vh'
    },
  ]
  return (
    <>
    <div className='sm:hidden w-full *:inline-block *:mx-4 *:my-2 mb-10'>
    {
      texts.map((text,i)=>(
         <FloatingText delay={`${i*0.2}s`} key={i} title={text}/>
      ))
    }
    </div>



  <div ref={imgRef} className='sm:h-[300vh] hidden sm:block'>
   <div className='sticky  top-0 overflow-hidden h-screen '>
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
              className='relative group'
            >
              <Image
                className={` object-cover animate-blob `}
                style={{animationDelay:`${i*0.2}s`}}
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
        <h1 className='text-6xl tracking-wider text-primary-800 dark:text-primary-100 font-medium dark:font-light capitalize text-center px-8  rounded-3xl border-x-2 border-primary-500 dark:border-primary-500 leading-snug '>
          Step in & explore<br/> my works 
        </h1>
        <ArrowDown className='text-secondary text-black dark:text-white size-24 animate-bounce'/>
      </div>
    </motion.div>
  </div>
</div> 
    </>
  )
}

export default Techs