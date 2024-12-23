import React from 'react'

const Blob = ({top,left,right,bottom}:{top?:string,left?:string,right?:string,bottom?:string}) => {
  return (
    <div 
    style={{
      top: top || "auto",
      left: left || "auto",
      right: right || "auto",
      bottom: bottom || "auto",

    }}
    className={`absolute z-0 shadow-primary-700 shadow-[0_0_300px_100px] scale-150 animate-pulse `}/>
  )
}

export default Blob