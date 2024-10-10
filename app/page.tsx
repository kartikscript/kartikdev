import Blob from "@/components/Blob";
import Navbar from "@/components/shared/Navbar";
import Projects from "@/components/shared/Projects";
import Techs from "@/components/shared/Techs";
import { ArrowRight} from "lucide-react";
import Image from "next/image";

export default function Home() {

 
  return (<>
      <header id="Home" className="relative  h-screen overflow-hidden">
        <div className="h-[20vh] relative z-30">
          <Navbar/>
        </div>
        <h1 className="text-7xl sm:text-9xl tracking-wide h-[80vh] flex flex-col justify-end  py-10 px-4 text-transparent bg-clip-text bg-gradient-to-b from-30% via-50% to-90% from-primary/60 dark:from-primary-100 via-primary dark:via-secondary-100 dark:to-primary-100 to-primary/60">
          Hello,<br/>I&apos;m Kartik<br/> A Website Developer
        </h1>
        <Blob/>
      </header>

      <div className="w-[100%] h-[2px] my-16 bg-gradient-to-r from-transparent via-primary-100/60 dark:via-secondary to-transparent via-50% from-20% to-80%"/>
      
      <section id="About" className="h-screen py-10 px-6 flex ">
        <main className="sm:w-[60%] flex flex-col items-start  gap-20 z-10">
          <h2 className="text-7xl mb-4 shadow-[0_0_15px_5px] shadow-secondary dark:shadow-primary text-primary-100 dark:text-secondary-100 rounded-2xl px-12 py-3 skew-x-6 dark:first-line:text-primary-100 first-line:text-secondary bg-transparent hover:bg-primary-100/5 dark:hover:bg-primary-100/30 hover:shadow-primary/30 dark:hover:shadow-secondary/30 transition-all duration-500 ">What <br/>I Do Best</h2>
          <p className=" text-xl tracking-wider leading-normal px-4 py-3 text-primary dark:text-secondary border-l border-secondary dark:border-primary-100">I am a highly skilled and passionate web developer specializing in frontend development with expertise in Next.js, TypeScript, HTML, and TailwindCSS. My deep understanding of these technologies enables me to build responsive, performant, and visually appealing web applications. I am equally proficient in backend development, where I handle APIs and perform CRUD operations using MongoDB and PostgreSQL.</p>
          
          <a href="#Projects" className="relative mt-6 group animate-pulse text-primary dark:text-secondary-100 text-2xl  px-4 py-1 rounded-2xl border-x-2 border-main transition-all duration-200 delay-100 
                              hover:px-6 hover:tracking-wide  hover:rounded-r-3xl hover:border-main 
                              "
            >
              Recent Builds
            <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 scale-0  transition-all duration-300 text-primary dark:text-secondary-100 origin-left group-hover:scale-125 group-hover:-right-4"/>
          </a>
        </main>
        <div className="hidden sm:block w-[30%] h-[50vh] self-end rounded-2xl overflow-hidden z-0 opacity-60 dark:opacity-40 bg-cover relative origin-bottom-right scale-125 hover:scale-150 hover:opacity-50 transition-all duration-300 delay-100">
          <Image
            src={'/images/tech.jpg'}
            alt="photo"
            fill
          />
        </div>
      </section>
      <section  className=" py-10 px-6 mt-28 sm:mt-16">
      <h2 className="text-7xl mb-4 shadow-[0_0_15px_5px] shadow-secondary dark:shadow-primary text-primary-100 dark:text-secondary-100 rounded-2xl px-12 py-3 skew-x-6 inline-block dark:first-line:text-primary-100 first-line:text-secondary bg-transparent hover:bg-primary-100/5 dark:hover:bg-primary-100/30 hover:shadow-primary/30 dark:hover:shadow-secondary/30 transition-all duration-500 ">Techs <br/>Behind My Crafts</h2>
      </section>
        <Techs/>
        <Projects/>
      <div className="w-[100%] h-[2px] my-16 bg-gradient-to-r from-transparent via-secondary to-transparent via-50% from-20% to-80%"/>

       <main id='Contact' className="min-h-screen  py-10 px-6">
       <h2 className="text-6xl mb-4 shadow-[0_0_15px_5px] shadow-secondary dark:shadow-primary text-primary-100 dark:text-secondary-100 rounded-2xl px-12 py-3 skew-x-6 inline-block dark:first-line:text-primary-100 first-line:text-secondary bg-transparent hover:bg-primary-100/5 dark:hover:bg-primary-100/30 hover:shadow-primary/30 dark:hover:shadow-secondary/30 transition-all duration-500 ">Let&apos;s <br/>Collaborate & Innovate</h2>
       <p className="text-2xl text-primary dark:text-secondary-100 tracking-widest font-IBMBold sm:w-[60%] my-20">Whether you&apos;re looking for a developer to bring your concept to life or want to team up on a groundbreaking project, I&apos;m here for collaboration and innovation. Let&apos;s work together and make something exceptional !</p>
          <a target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=suk.m4hh@gmail.com&su=Hiring%20and%20Collaboration%20Discussions&body=Dear%20Kartik%2C%0D%0A%0D%0AI%20hope%20this%20message%20finds%20you%20well.%20My%20name%20is%20%5BSender's%20Name%5D%2C%20and%20I%20am%20with%20%5BCompany%20Name%5D%2C%20a%20%5Bbrief%20description%20of%20the%20company%2C%20e.g.%20leading%20tech%20firm%20specializing%20in%20innovative%20software%20solutions%5D.%20We%20are%20currently%20looking%20to%20expand%20our%20team%20and%20are%20interested%20in%20exploring%20potential%20collaboration%20opportunities%20with%20talented%20individuals%20like%20yourself.%0D%0A%0D%0AWe%20admire%20your%20work%20in%20%5Bspecific%20field%20or%20project%5D%2C%20and%20we%20believe%20that%20your%20skills%20could%20be%20a%20great%20fit%20for%20our%20projects.%20We%20would%20love%20to%20hear%20more%20about%20your%20career%20aspirations%20and%20the%20type%20of%20role%20you%20envision%20for%20yourself.%0D%0A%0D%0ACould%20you%20please%20share%20your%20thoughts%20on%20the%20desired%20role%20you%20are%20looking%20for%3F%0D%0A%0D%0AWe%20are%20excited%20about%20the%20possibility%20of%20collaborating%20with%20you%20and%20look%20forward%20to%20discussing%20this%20further.%0D%0A%0D%0AThank%20you%2C%0D%0A%5BSender's%20Name%5D%0D%0A%5BJob%20Title%5D%0D%0A%5BCompany%20Name%5D%0D%0A%5BContact%20Information%5D"

                      className='relative group font-IBMBold bg-primary text-secondary-100 text-4xl py-1 px-6 transition-all duration-300 z-0 hover:bg-transparent hover:text-secondary-100
                                before:absolute before:right-0 before:top-0 before:h-full before:w-0 before:bg-main hover:before:right-auto hover:before:left-0 hover:before:w-full before:transition-all before:duration-500 before:-z-10
                                '
                      >Contact Me
            <ArrowRight className="absolute size-10 right-0 top-1/2 -translate-y-1/2 scale-0  transition-all duration-300 text-primary-100 dark:text-secondary-100 origin-left group-hover:scale-125 group-hover:-right-5"/>
            </a>     
       </main>
       <footer className="h-[50vh] w-full bg-primary-100 flex flex-col justify-center ">
        <div className="flex justify-around items-start">
          <h1 className="text-5xl text-main font-DancingScript font-[600] self-center">Kartik <span className="text-secondary">Script</span></h1>
          <div >
            <h2 className="font-IBMBold text-3xl text-secondary-100">Quick Links</h2>
            <ul className="text-secondary text-lg mt-4 flex flex-col gap-2 hover:*:text-secondary-100">
              <a href="#Home">Home</a>
              <a href="#About">About</a>
              <a href="#Projects">Projects</a>
              <a href="#Contact">Contact</a>
            </ul>
          </div>
          <div >
            <h2 className="font-IBMBold text-3xl text-secondary-100">Social</h2>
            <ul className="text-secondary text-lg mt-4 flex flex-col gap-2 hover:*:text-secondary-100">
              <a target="_blank" href="https://x.com/kartikscript">Twitter</a>
              <a target="_blank" href="https://www.linkedin.com/in/kartik-soni-9ba1272b6/">LinkedIn</a>
              <a target="_blank" href="https://github.com/kartikscript">Github</a>
            </ul>
          </div>
        </div>
       <p className="text-md tracking-wider text-center mt-12">© Kartik Soni - 2024 </p>

       </footer>

  </>
  );
}
