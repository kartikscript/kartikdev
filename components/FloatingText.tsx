

const FloatingText = ({title,delay}:{delay?:string,title:string}) => {
  return (
      <div 
      style={{
        animationDelay:delay
      }}
      className='text-xs font-bold animate-pulse bg-white/60 px-4 py-2 rounded-full uppercase tracking-widest text-primary-700 shadow-primary-700 shadow-[0px_0px_7px_3px] '
      >
        {title}
      </div>
  )
}

export default FloatingText