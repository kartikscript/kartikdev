import React from 'react'

const Blob = () => {
  return (
    <div className='group *:mix-blend-multiply *:filter *:blur-3xl z-10 dark:opacity-50 *:-translate-x-1/2 *:transition-all *:delay-200 *:duration-500'>
          <span className='absolute top-[20%] right-[10%] group-hover:right-[5%] group-hover:bg-emerald-400 size-60 animate-blob rounded-full bg-sky-300'/>
          <span className='absolute left-[55%] top-[20%] group-hover:left-[60%] group-hover:bg-sky-400 size-72  animate-blob rounded-full animation-delay-2000 bg-pink-300'/>
          <span className='absolute left-[70%] top-[50%] group-hover:top-[45%] group-hover:bg-pink-400 size-52 animate-blob rounded-full animation-delay-4000 bg-emerald-300'/>
    </div>
  )
}

export default Blob