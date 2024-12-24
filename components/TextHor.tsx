import React from 'react'

const TextHor = () => {

  const texts=['Design','Development','UI/UX','API','Performance']
  return (
    <div className='*:inline-flex relative z-0 text-4xl *:py-6 font-Oxanium  whitespace-nowrap overflow-hidden'>
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