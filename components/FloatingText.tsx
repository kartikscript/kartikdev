

const FloatingText = ({top,left,right,bottom,title,delay}:{delay?:string,title:string,top?:string,left?:string,right?:string,bottom?:string}) => {
  return (
      <div 
      style={{
        top: top || "auto",
        left: left || "auto",
        right: right || "auto",
        bottom: bottom || "auto",
        animationDelay:delay
      }}
      className='absolute text-xs font-bold animate-pulse bg-white/60 px-4 py-2 rounded-full uppercase tracking-widest text-primary-700 shadow-primary-700 shadow-[0px_0px_7px_3px] '
      >
        {title}'s
      </div>
  )
}

export default FloatingText