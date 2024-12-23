import React from 'react'

const Title = ({title}:{title:string}) => {
  return (
    <div className=" font-medium tracking-wide  flex justify-center text-5xl mb-28">
      <h2 className='py-1 text-transparent bg-clip-text bg-gradient-to-tr from-primary-700 to-white'>{title}</h2>
    </div>
  )
}

export default Title