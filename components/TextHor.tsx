import React from 'react'

const TextHor = () => {

  const texts=['Logic Building','UI/UX','Optimized Codes','API','Performance']
  return (
    <div className='*:inline-flex relative z-0 text-black dark:text-white lg:text-4xl md:text-3xl sm:text-2xl text-xs py-2 sm:py-4 lg:*:py-6 font-Oxanium  whitespace-nowrap overflow-hidden'>
      <div className='animate-hor-move flex justify-around items-center w-screen'>
        {
          texts.map((text,i)=>(<p key={i} className=''>{text}</p>))
        }
      </div>
      <div className='animate-hor-move flex justify-around items-center w-screen'>
        {
          texts.map((text,i)=>(<p key={i}>{text}</p>))
        }
      </div>
    </div>
  )
}

export default TextHor