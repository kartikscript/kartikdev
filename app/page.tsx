import Navbar from "@/components/shared/Navbar";
import { ArrowRightFromLine } from "lucide-react";
import Image from "next/image";

export default function Home() {

 
  return (<>
    <header className=" bg-primary font-IBMRegular selection:text-secondary-100 selection:bg-main">
      <div className="relative  h-screen">
        <div className="h-[20vh] relative z-20">
          <Navbar/>
        </div>
        <h1 className="text-9xl tracking-wide h-[80vh] flex flex-col justify-end  py-10 px-4 text-transparent bg-clip-text bg-gradient-to-b from-20% via-50%   from-primary-100 via-secondary-100 to-primary-100">
          Hello,<br/>I&apos;m Kartik<br/> A Website Developer
        </h1>
        <div className='*:mix-blend-multiply *:filter *:blur-xl z-10 opacity-50 *:-translate-x-1/2 '>
          <span className='absolute top-[20%] right-[10%] size-60 animate-blob rounded-full bg-sky-300'/>
          <span className='absolute left-[55%] top-[20%] size-72 animate-blob rounded-full animation-delay-2000 bg-pink-300'/>
          <span className='absolute left-[70%] top-[50%] size-52 animate-blob rounded-full animation-delay-4000 bg-emerald-300'/>
        </div>

      </div>
      <div className="w-[60%] h-[2px] bg-primary-100 mx-auto my-16"/>
      <section className="h-screen py-10 px-6 flex ">
        <main className="w-[60%] flex flex-col items-start gap-16 z-10">
          <h2 className="text-7xl text-main font-DancingScript font-[700]">What I Do Best</h2>
          <p className=" text-2xl tracking-wider leading-normal px-4 py-3 border-l border-primary-100">I am a highly skilled and passionate web developer specializing in frontend development with expertise in Next.js, TypeScript, HTML, and TailwindCSS. My deep understanding of these technologies enables me to build responsive, performant, and visually appealing web applications. I am equally proficient in backend development, where I handle APIs and perform CRUD operations using MongoDB and PostgreSQL.</p>
          <button className="relative bg-main text-2xl font-IBMBold px-5 py-3 rounded-full rounded-l-none border-x-2 border-secondary  ">
            Let&apos;s Connect !
            <ArrowRightFromLine className="absolute -right-4 top-1/2 -translate-y-1/2 size-10 text-main origin-left scale-125"/>
          </button>
        </main>
        <div className="w-[30%] h-[50vh] rounded-2xl overflow-hidden z-0 opacity-40 bg-cover relative origin-top-right scale-125 hover:scale-150 hover:opacity-50 transition-all duration-300 delay-100">
          <Image
            src={'/images/tech.jpg'}
            alt="photo"
            fill
          />
        </div>
      </section>
    </header>
  </>
  );
}
