import Blob from "@/components/Blob";
import Navbar from "@/components/shared/Navbar";
import Projects from "@/components/shared/Projects";
import Techs from "@/components/shared/Techs";
import { ArrowRight, ArrowRightFromLine } from "lucide-react";
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
        <Blob/>

      </div>
      <div className="w-[60%] h-[2px] bg-primary-100 mx-auto my-16"/>
      <section className="h-screen py-10 px-6 flex ">
        <main className="w-[60%] flex flex-col items-start  gap-20 z-10">
          <h2 className="text-6xl mb-4 shadow-[0_0_15px_5px] shadow-primary-100 text-secondary rounded-2xl px-12 py-3 skew-x-6 ">What I Do Best</h2>
          <p className=" text-xl tracking-wider leading-normal px-4 py-3 border-l border-primary-100">I am a highly skilled and passionate web developer specializing in frontend development with expertise in Next.js, TypeScript, HTML, and TailwindCSS. My deep understanding of these technologies enables me to build responsive, performant, and visually appealing web applications. I am equally proficient in backend development, where I handle APIs and perform CRUD operations using MongoDB and PostgreSQL.</p>
          <button className="relative mt-6 group animate-pulse text-secondary-100 text-2xl  px-4 py-1 rounded-2xl border-x-2 border-main transition-all duration-200 delay-100 
                              hover:px-6 hover:tracking-wide  hover:rounded-r-3xl hover:border-main 
                              "
            >
              Let&apos;s Connect
            <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 scale-0  transition-all duration-300 text-secondary-100 origin-left group-hover:scale-125 group-hover:-right-4"/>
          </button>
        </main>
        <div className="w-[30%] h-[50vh] self-end rounded-2xl overflow-hidden z-0 opacity-40 bg-cover relative origin-bottom-right scale-125 hover:scale-150 hover:opacity-50 transition-all duration-300 delay-100">
          <Image
            src={'/images/tech.jpg'}
            alt="photo"
            fill
          />
        </div>
      </section>
      <section className=" py-10 px-6 mt-16">
       <h2 className="text-6xl shadow-[0_0_15px_5px] shadow-primary-100 text-secondary inline-block  rounded-2xl px-12 py-3 skew-x-6 ">Tech Behind My Craft</h2>
      </section>
        <Techs/>
        <Projects/>
    </header>
  </>
  );
}
