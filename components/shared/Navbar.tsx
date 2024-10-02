import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='py-6 px-10'>
      <div className='flex gap-2 items-end text-4xl tracking-wide font-medium '>
        <h1 className='text-main 
                      first-letter:text-7xl first-letter:font-mono first-letter:font-extrabold first-letter:leading-[0px]'
         > Kartik</h1>
        <h2
            className='text-secondary
                        first-letter:text-7xl first-letter:font-mono first-letter:font-semibold first-letter:leading-[0px] '
         >Dev</h2>

      </div>
    </div>
  )
}

export default Navbar