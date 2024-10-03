import { navLinks } from '@/constants/NavLinks'
import ToggleTheme from '../ToggleTheme'
import MenuButton from '../MenuButton'

const Navbar = () => {
  return (
    <div className='py-12 px-8 flex justify-between items-center'>
      <div className='flex gap-2 items-end text-4xl tracking-wide font-DancingScript font-[600]'>
        <h1 className='text-main 
                      first-letter:text-7xl first-letter:font-[700] first-letter:leading-[0px]'
         > Kartik</h1>
        <h2
            className='text-secondary
                        first-letter:text-6xl first-letter:leading-[0px] '
         >Script</h2>
      </div>
      <nav className='*:w-[35px] flex gap-12 items-center'>
      {
          navLinks.map((src,i)=>{
            return(
              <a 
              key={i}
              className='relative transition-all duration-300 delay-100 cursor-pointer overflow-hidden pb-2 opacity-70
                         hover:scale-95 hover:opacity-100
                         before:rounded-full before:absolute before:w-0 before:h-[2px] before:bg-secondary-100 before:bottom-0 before:left-0 before:-translate-y-1 before:hover:animate-nav
                         '
              >
               <img src={src} alt='twitter logo'/>
              </a>
            )
          })
        }
      </nav>
      <div className='flex items-center gap-10'>
       <ToggleTheme/>
       <MenuButton/>
       <div>

       </div>
      </div>

    </div>
  )
}

export default Navbar