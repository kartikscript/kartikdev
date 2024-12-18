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
    className={`absolute shadow-teal-300 shadow-[0_0_300px_100px] opacity-50 scale-150 `}/>
  )
}

export default Blob