import React from 'react'

const TextHor = () => {

  const texts=['Design','Development','UI/UX','API','Performance']
  return (
    <div className='*:inline-block w-full h-16 py-4 whitespace-nowrap'>
      <div className='animate-hor-move size-full bg-green-700'></div>
      <div className='animate-hor-move size-full bg-red-700'></div>
    </div>
  )
}

export default TextHor