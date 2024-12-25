import Blob from "@/components/Blob";
import FloatingText from "@/components/FloatingText";
import Navbar from "@/components/shared/Navbar";
import Projects from "@/components/shared/Projects";
import Techs from "@/components/shared/Techs";
import TextHor from "@/components/TextHor";
import Title from "@/components/Title";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { EvervaultCard } from "@/components/ui/evervault-card";
import { ArrowRight} from "lucide-react";
import Image from "next/image";

export default function Home() {

 
  return (<>
      <header id="Home" className="relative  bg-cover bg-black h-[70vh] sm:h-screen flex items-end justify-center overflow-hidden">
        <Blob bottom="-30%" left="50%"/>
        <Blob top="-20%" left="50%"/>
        <BackgroundBeams/>
        {/* <Blob top="10%" left="0%"/>
        <Blob top="10%" right="0%"/> */}
        {/* <FloatingText title='Builder' top="40%" left='10% ' delay="0.5s"/>
        <FloatingText title='Innovator' top="30%" left='30% ' delay="1s"/>
        <FloatingText title='Visionary' top="30%" right='30% ' delay="1.5s"/>
        <FloatingText title='Creator' top="40%" right='10% ' delay="2s"/> */}
        <Navbar/>
        <div className="space-y-10 w-full text-center uppercase py-8 px-4  ">
          <h1 className=" tracking-wide text-7xl md:text-8xl lg:text-9xl text-white">I am Kartik</h1>
          <h2 className="font-[400] font-Oxanium  sm:whitespace-nowrap text-4xl sm:text-3xl md:text-[2.5rem] lg:text-[3.5rem] xl:text-7xl tracking-[0.3em] text-white/60">A Frontend Developer</h2>
        </div>
      </header>

      <div className="w-[100%] h-[2px] bg-black bg-gradient-to-r from-transparent via-white to-transparent "/>
      
        {/* <TextHor/> */}
      <section id="About" className="relative  min-h-screen py-20 px-6 bg-primary-300/60 dark:bg-black ">
        <Title title="Services Provided"/>
        <div className="mb-20 relative rounded-3xl bg-primary-400 dark:bg-black/40 border border-white/10 overflow-hidden">
          <div className="animate-pulse z-10 absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-purple-100/30 dark:from-primary-800 to-transparent "/>
          <div className="animate-pulse z-10 absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-purple-100/30 dark:from-primary-800 to-transparent "/>
          <TextHor/>
        </div>
        <Blob left="50%" top="50%"/>
        <main className="relative grid grid-cols-1 md:grid-cols-2 gap-20 text-center *:bg-primary-700 dark:*:bg-black/40 *:space-y-4 *:backdrop-blur-md *:p-6 *:rounded-3xl *:border *:border-white/10">
          <div >
            <EvervaultCard className="h-[20vh] sm:h-[40vh] tracking-[0.1em] font-Oxanium" text="DEVELOPMENT"/>
            <p className="leading-relaxed text-primary-100/80 dark:text-white/70  tracking-wide font-semibold dark:font-light">Building robust, scalable, and efficient code tailored to meet modern web standards.
            I specialize in creating seamless functionality and optimizing performance for a smooth user experience.
            </p>
          </div>
          <div >
            <EvervaultCard className="h-[20vh] sm:h-[40vh] tracking-[0.1em] font-Oxanium" text="DESIGN"/>
            <p className="leading-relaxed text-primary-100/80 dark:text-white/70  tracking-wide font-semibold dark:font-light">Crafting visually compelling and intuitive interfaces that resonate with your audience.
            I focus on delivering designs that are both aesthetically pleasing and user-centric.
            </p>
          </div>
        </main>
      </section>
      <div className="w-[100%] h-[2px] bg-black bg-gradient-to-r from-transparent via-white to-transparent "/>
      
      <section  className=" relative z-0 py-20 bg-primary-100/70  dark:bg-primary-800/5">
        <Blob right="10%" top="30%"/>
        <Blob left="20%" top="10%"/>
        <Title title="Key Skills"/>
        <Techs/>
        <Projects/>
      </section>
      <div className="w-[100%] h-[2px] bg-black bg-gradient-to-r from-transparent via-white to-transparent "/>

       <section id='Contact' className="h-[80vh] sm:h-screen bg-primary-100/30 dark:bg-black py-10 px-6">
          <Title title="Let's Connect"/>
          <div className="flex flex-col items-center gap-8">
             <h1 className="text-5xl text-center font-Oxanium tracking-wide dark:text-white text-primary-800 font-[600] dark:font-[500]">Got a project in mind? Let&apos;s talk!</h1>
             <a
              target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=suk.m4hh@gmail.com&su=Hiring%20and%20Collaboration%20Discussions&body=Dear%20Kartik%2C%0D%0A%0D%0AI%20hope%20this%20message%20finds%20you%20well.%20My%20name%20is%20%5BSender's%20Name%5D%2C%20and%20I%20am%20with%20%5BCompany%20Name%5D%2C%20a%20%5Bbrief%20description%20of%20the%20company%2C%20e.g.%20leading%20tech%20firm%20specializing%20in%20innovative%20software%20solutions%5D.%20We%20are%20currently%20looking%20to%20expand%20our%20team%20and%20are%20interested%20in%20exploring%20potential%20collaboration%20opportunities%20with%20talented%20individuals%20like%20yourself.%0D%0A%0D%0AWe%20admire%20your%20work%20in%20%5Bspecific%20field%20or%20project%5D%2C%20and%20we%20believe%20that%20your%20skills%20could%20be%20a%20great%20fit%20for%20our%20projects.%20We%20would%20love%20to%20hear%20more%20about%20your%20career%20aspirations%20and%20the%20type%20of%20role%20you%20envision%20for%20yourself.%0D%0A%0D%0ACould%20you%20please%20share%20your%20thoughts%20on%20the%20desired%20role%20you%20are%20looking%20for%3F%0D%0A%0D%0AWe%20are%20excited%20about%20the%20possibility%20of%20collaborating%20with%20you%20and%20look%20forward%20to%20discussing%20this%20further.%0D%0A%0D%0AThank%20you%2C%0D%0A%5BSender's%20Name%5D%0D%0A%5BJob%20Title%5D%0D%0A%5BCompany%20Name%5D%0D%0A%5BContact%20Information%5D"
              
              className='relative group flex gap-1 items-center top-0 mr-4 py-3 px-6 shadow-sm text-white font-Oxanium tracking-widest backdrop-blur-sm bg-gradient-to-tr dark:from-primary-500/70 dark:via-primary-700/70 dark:to-primary-900/70 from-primary-800 to-primary-400 rounded-3xl
              hover:text-white hover:bg-primary-800/70 hover:-top-1 hover:shadow-lg hover:shadow-primary-800 transition-all '>
              Connect Now
              <ArrowRight className='rotate-0 group-hover:-rotate-45 transition-all'/>
             </a>
            <div className="relative mt-6">
              <Image
                src={'/images/connect.png'}
                alt="connect"
                width={200}
                height={300}
                className="w-48"
              />
              <Blob left="50%" top="50%"/>
            </div>
            
          </div>
       </section>
       <footer className="min-h-[50vh] w-full bg-primary-800 dark:bg-primary-800/20 text-white p-4 flex flex-col justify-center ">
        <div className="flex sm:flex-row flex-col justify-around gap-8 items-start">
          <h1 className="text-5xl font-Oxanium text-main  sm:self-center first-letter:text-6xl first-letter:text-purple-600">Kartik <span className="text-secondary">Script</span></h1>
          <div >
            <h2 className=" text-3xl">Quick Links</h2>
            <ul className=" text-lg mt-4 flex flex-col gap-2 hover:*:text-primary-300">
              <a href="#Home">Home</a>
              <a href="#About">About</a>
              <a href="#Projects">Projects</a>
              <a href="#Contact">Contact</a>
            </ul>
          </div>
          <div >
            <h2 className=" text-3xl">Social</h2>
            <ul className="text-lg mt-4 flex flex-col gap-2 hover:*:text-primary-300">
              <a target="_blank" href="https://x.com/kartikscript">Twitter</a>
              <a target="_blank" href="https://www.linkedin.com/in/kartik-soni-9ba1272b6/">LinkedIn</a>
              <a target="_blank" href="https://github.com/kartikscript">Github</a>
            </ul>
          </div>
        </div>
       <p className="text-md font-Oxanium tracking-wider text-center mt-12">© Kartik Soni - 2024 </p>

       </footer>

  </>
  );
}


{/* <a
   target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=suk.m4hh@gmail.com&su=Hiring%20and%20Collaboration%20Discussions&body=Dear%20Kartik%2C%0D%0A%0D%0AI%20hope%20this%20message%20finds%20you%20well.%20My%20name%20is%20%5BSender's%20Name%5D%2C%20and%20I%20am%20with%20%5BCompany%20Name%5D%2C%20a%20%5Bbrief%20description%20of%20the%20company%2C%20e.g.%20leading%20tech%20firm%20specializing%20in%20innovative%20software%20solutions%5D.%20We%20are%20currently%20looking%20to%20expand%20our%20team%20and%20are%20interested%20in%20exploring%20potential%20collaboration%20opportunities%20with%20talented%20individuals%20like%20yourself.%0D%0A%0D%0AWe%20admire%20your%20work%20in%20%5Bspecific%20field%20or%20project%5D%2C%20and%20we%20believe%20that%20your%20skills%20could%20be%20a%20great%20fit%20for%20our%20projects.%20We%20would%20love%20to%20hear%20more%20about%20your%20career%20aspirations%20and%20the%20type%20of%20role%20you%20envision%20for%20yourself.%0D%0A%0D%0ACould%20you%20please%20share%20your%20thoughts%20on%20the%20desired%20role%20you%20are%20looking%20for%3F%0D%0A%0D%0AWe%20are%20excited%20about%20the%20possibility%20of%20collaborating%20with%20you%20and%20look%20forward%20to%20discussing%20this%20further.%0D%0A%0D%0AThank%20you%2C%0D%0A%5BSender's%20Name%5D%0D%0A%5BJob%20Title%5D%0D%0A%5BCompany%20Name%5D%0D%0A%5BContact%20Information%5D"
className='relative group font-IBMBold bg-primary text-secondary-100 text-4xl py-1 px-6 transition-all duration-300 z-0 hover:bg-transparent hover:text-secondary-100
          before:absolute before:right-0 before:top-0 before:h-full before:w-0 before:bg-main hover:before:right-auto hover:before:left-0 hover:before:w-full before:transition-all before:duration-500 before:-z-10
          '
>Contact Me
<ArrowRight className="absolute size-10 right-0 top-1/2 -translate-y-1/2 scale-0  transition-all duration-300 text-primary-100 dark:text-secondary-100 origin-left group-hover:scale-125 group-hover:-right-5"/>
</a>    */}