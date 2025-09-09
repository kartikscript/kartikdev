import { navLinks } from '@/constants/NavLinks'
import MenuButton from '../MenuButton'
import Name from '../Name'
import Image from 'next/image'
import { ArrowRight} from 'lucide-react'

const Navbar = () => {
  return (
  <div className='fixed z-30 h-[10vh] top-0 w-full py-5'>
    <div className='px-8 grid grid-cols-2 lg:grid-cols-3 place-content-center'>
      <Name/>
      <nav 
      className='*:w-[30px]  group hidden sm:justify-self-center lg:flex gap-8 xl:gap-16 items-center bg-black/80 dark:bg-transparent rounded-3xl ring-1 dark:ring-white/20 ring-primary-300/50 px-10 backdrop-blur-sm origin-bottom 
            hover:scale-y-105 hover:shadow-primary-800 shadow-md transition-all duration-200 dark:hover:bg-gradient-to-b dark:hover:from-primary-800/60 dark:hover:to-primary-800/10'>
      {
          navLinks.map(({link,src},i)=>{
            return(
              <a 
              target='_blank'
              href={link}
              key={i}
              style={{transitionDelay:`${(i+1)*150}ms`}}
              className='relative transition-all duration-300 cursor-pointer overflow-hidden py-2 opacity-70 origin-bottom group-hover:scale-110 
                         hover:opacity-100 
                         before:rounded-full before:absolute before:w-0 before:h-[2px] before:bg-white before:bottom-0 before:left-0 before:-translate-y-1 before:hover:animate-nav
                         '
              >
               <Image
               src={src}
               alt='social logo'
               width={30}
               height={20}
               />
              </a>
            )
          })
        }
      </nav>
      <div className='justify-self-end flex items-center gap-4 lg:gap-8'>
        <a
        target='_blank'
        href='mailto:suk.m4hh@gmail.com'
        className='relative group  text-sm 2xl:text-base whitespace-nowrap hidden sm:flex gap-1 items-center top-0 mr-4 lg:py-3 lg:px-6 py-2 px-4 shadow-sm text-white font-Oxanium tracking-widest backdrop-blur-sm bg-gradient-to-tr dark:from-primary-500/70 dark:via-primary-700/70 dark:to-primary-900/70 from-primary-800 to-primary-400 rounded-3xl
         hover:text-white hover:bg-primary-800/70 hover:-top-1 hover:shadow-lg hover:shadow-primary-800 transition-all '>
          Book Now
          <ArrowRight className='rotate-0 group-hover:-rotate-45 transition-all'/>
        </a>
          <MenuButton/>       
      </div>

    </div>
</div>
  )
}

export default Navbar