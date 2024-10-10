import { navLinks } from '@/constants/NavLinks'
import MenuButton from '../MenuButton'
import Name from '../Name'
import ThemeSwitcher from '../ThemeSwitcher'
import Image from 'next/image'

const Navbar = () => {
  return (
  <div className='fixed top-6 w-full '>
    <div className='px-8 grid grid-cols-[1fr_1fr_1fr] '>
      <Name/>
      <nav className='*:w-[35px] justify-self-center flex gap-16 items-center bg-primary/80 dark:bg-primary/40 rounded-full ring-2 dark:ring-primary-100 ring-primary-100/50 px-14 backdrop-blur-sm'>
      {
          navLinks.map(({link,src},i)=>{
            return(
              <a 
              target='_blank'
              href={link}
              key={i}
              className='relative transition-all duration-300 delay-100 cursor-pointer overflow-hidden py-2 opacity-70 
                         hover:scale-95 hover:opacity-100
                         before:rounded-full before:absolute before:w-0 before:h-[2px] before:bg-secondary-100 before:bottom-0 before:left-0 before:-translate-y-1 before:hover:animate-nav
                         '
              >
               <Image
               src={src}
               alt='social logo'
               width={50}
               height={50}
               />
              </a>
            )
          })
        }
      </nav>
      <div className='justify-self-end flex items-center gap-16'>
       <ThemeSwitcher/>
          <MenuButton/>       
      </div>

    </div>
</div>
  )
}

export default Navbar