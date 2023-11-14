import Link from "next/link"
import { IoCaretDown } from "react-icons/io5"

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen ">
        <article>
          <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-bold">Hi,</h2>
          <h1 className="group text-4xl md:text-5xl 2xl:text-6xl font-bold">
            <div className="group-hover:hidden">
              I&apos;m <span className="rounded-md bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">Almer</span>!
            </div>
            <div className="hidden group-hover:inline">
              I&apos;m <span className="rounded-md bg-gradient-to-r from-primary to-secondary bg-bottom bg-no-repeat bg-[length:0_4px] hover:bg-[length:100%_4px] active:bg-[length:100%_100%] active:text-zinc-900  duration-150">Almer</span>!
            </div>
          </h1>
          <p className="mt-4 text-dark dark:text-zinc-300 tracking-wide">A Software Engineer & Bachelor of Engineering in Computer Eng. ITS</p>

          <div className="flex mt-6 gap-x-6">
          <Link
              href='https://drive.google.com/file/d/1SVcxmopbjgWPImLW-GdryXJAZv1jGiOy/view?usp=sharing'
              target="_blank"
              className="rounded-md px-6 py-2 ring-1 ring-inset ring-secondary/10 bg-zinc-50/50 dark:bg-zinc-800/50 bg-gradient-to-r hover:from-secondary hover:to-secondary bg-bottom bg-no-repeat bg-[length:0_3px] hover:bg-[length:100%_3px] font-bold shadow-md shadow-secondary hover:scale-[1.02] active:scale-[0.98] duration-300"
              >
              View my CV
            </Link>
            <Link
              href='https://github.com/AL-NFLY'
              target="_blank"
              className="rounded-md px-6 py-2 ring-1 ring-inset ring-primary/10 font-bold bg-zinc-50/50 dark:bg-zinc-800/50 bg-gradient-to-r hover:from-primary hover:to-primary bg-bottom bg-no-repeat bg-[length:0_3px] hover:bg-[length:100%_3px] shadow-md shadow-primary hover:scale-[1.02] active:scale-[0.98] duration-300"
            >
              Visit my Github
            </Link>

          </div>
        </article>
        <Link className="absolute bottom-8 md:bottom-12 rounded-full transition-colors duration-300" href='#experience'>
          <IoCaretDown className='rounded-full h-8 w-8 animate-pulse active:animate-none md:h-10 md:w-10 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:scale-105 active:scale-95 duration-300'/>
        </Link>
    </section>
  )
}

export default Hero