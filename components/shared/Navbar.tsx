import { navLinks } from '@/constants/NavLinks'
import MenuButton from '../MenuButton'
import Name from '../Name'
import ThemeSwitcher from '../ThemeSwitcher'
import Image from 'next/image'

const Navbar = () => {
  return (
  <div className='fixed z-30 h-[10vh] top-0 w-full py-5'>
    <div className='px-6 grid grid-cols-2 sm:grid-cols-3 '>
      <Name/>
      <nav 
      className='*:w-[30px]  group hidden sm:justify-self-center sm:flex gap-16 items-center bg-black/80 dark:bg-transparent rounded-full ring-1 dark:ring-white/20 ring-primary-100/50 px-10 backdrop-blur-sm origin-bottom 
            hover:scale-y-105 hover:shadow-teal-900 shadow-md transition-all duration-200 dark:hover:bg-gradient-to-b dark:hover:from-teal-950/70 dark:hover:to-teal-900/70'>
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
               width={60}
               height={60}
               />
              </a>
            )
          })
        }
      </nav>
      <div className='justify-self-end flex items-center gap-16'>
        <button className='relative top-0 py-3 px-6 shadow-sm text-white font-Oxanium tracking-widest backdrop-blur-sm bg-gradient-to-tr from-teal-500/70 via-teal-800/70 to-teal-900/70 rounded-full
         hover:text-white hover:bg-teal-900/70 hover:-top-1 hover:shadow-lg hover:shadow-teal-900 transition-all '>Book Now</button>
       <ThemeSwitcher/> 
          <MenuButton/>       
      </div>

    </div>
</div>
  )
}

export default Navbar