import React from 'react'

const Title = ({title}:{title:string}) => {
  return (
    <div className=" dark:font-medium font-semibold tracking-wide  flex justify-center text-3xl sm:text-5xl mb-10 sm:mb-28">
      <h2 className='py-1 text-transparent bg-clip-text bg-gradient-to-tr dark:from-primary-700 dark:to-white from-primary-800 to-primary-500'>{title}</h2>
    </div>
  )
}

export default Title