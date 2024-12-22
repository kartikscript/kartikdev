import React from 'react'

const Title = ({title}:{title:string}) => {
  return (
    <div className="relative translate-y-0 hover:translate-y-full transition-all font-medium tracking-wide text-5xl flex flex-col gap-1  h-16 text-transparent bg-clip-text bg-gradient-to-b from-teal-600 to-green-400">
      <h2>{title}</h2>
      <h2>{title}</h2>
    </div>
  )
}

export default Title