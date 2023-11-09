import Image from "next/image";
import { getProjects } from "@/sanity/sanity-utils";
import Link from "next/link";
import Experience from "@/components/Experience";
import ProjectCards from "@/components/ProjectCards";
import { IoCaretDown } from "react-icons/io5";
import CurratedProjectCards from "@/components/CurratedProjectCards";
// import { PortableText } from "@portabletext/react";


export default async function Home() {
  return (
    <main className="px-8 md:px-48 md:-mt-20 -mt-28">
      <section className="flex flex-col items-center justify-center min-h-screen ">
        <article>
          <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-bold">Hi,</h2>
          <h1 className="text-4xl md:text-5xl 2xl:text-6xl font-bold">
            I&apos;m <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Almer</span>!
          </h1>
          <p className="mt-4 text-dark dark:text-zinc-300 tracking-wide">A Software Engineer & Bachelor of Engineering in Computer Eng. ITS</p>

          <div className="flex mt-6 gap-x-6">
          <Link
              href='https://drive.google.com/file/d/1SVcxmopbjgWPImLW-GdryXJAZv1jGiOy/view?usp=sharing'
              target="_blank"
              className="rounded-md px-6 py-2 ring-1 ring-inset ring-secondary/10 bg-zinc-800/50 bg-gradient-to-r from-zinc-500 to-zinc-500 hover:from-secondary hover:to-secondary bg-bottom bg-no-repeat bg-[length:0_3px] hover:bg-[length:100%_3px] font-bold shadow-md shadow-secondary hover:scale-[1.02] active:scale-[0.98] duration-300"
              /* className="rounded-md px-6 py-2 ring-1 ring-inset ring-secondary/10 bg-zinc-800/50 bg-gradient-to-r from-zinc-500 to-zinc-500 hover:from-secondary hover:to-secondary bg-bottom bg-no-repeat bg-[length:0_3px] hover:bg-[length:100%_3px] font-bold shadow-md shadow-secondary active:scale-95 duration-300" */
              /* className="rounded-md px-6 py-2 ring-1 ring-inset ring-secondary/10 hover:scale-105 bg-zinc-800/50 bg-gradient-to-r from-zinc-500 to-zinc-500 hover:from-primary hover:to-secondary bg-bottom bg-no-repeat bg-[length:100%_3px] font-bold shadow-md shadow-secondary active:scale-100 duration-300" */
              >
              View my CV
            </Link>
            <Link
              href='https://github.com/AL-NFLY'
              target="_blank"
              className="rounded-md px-6 py-2 ring-1 ring-inset ring-primary/10 font-bold bg-zinc-800/50 bg-gradient-to-r from-zinc-500 to-zinc-500 hover:from-primary hover:to-primary bg-bottom bg-no-repeat bg-[length:0_3px] hover:bg-[length:100%_3px] shadow-md shadow-primary hover:scale-[1.02] active:scale-[0.98] duration-300"
              // className="rounded-md px-6 py-2 ring-1 ring-inset ring-primary/10 font-bold bg-zinc-800/50 bg-gradient-to-r from-zinc-500 to-zinc-500 hover:from-primary hover:to-primary bg-bottom bg-no-repeat bg-[length:0_3px] hover:bg-[length:100%_3px] shadow-md shadow-primary active:scale-95 duration-300"
              // className="rounded-md px-6 py-2 ring-1 ring-inset ring-primary/10 hover:scale-105 font-bold bg-zinc-800/50 bg-gradient-to-r from-zinc-500 to-zinc-500 hover:from-primary hover:to-secondary bg-bottom bg-no-repeat bg-[length:100%_3px] shadow-md shadow-primary active:scale-100 duration-300"
            >
              Visit my Github
            </Link>

            {/* <StarCanvas /> */}
          </div>
        </article>
        <Link className="absolute bottom-8 md:bottom-12 rounded-full transition-colors duration-300" href='#experience'>
          <IoCaretDown className='rounded-full h-8 w-8 animate-pulse active:animate-none md:h-10 md:w-10 hover:bg-gradient-to-r hover:from-primary hover:to-secondary active:scale-95 '/>
        </Link>
      </section>

      <Experience />
      <CurratedProjectCards />

      {/* <section className="mt-6 mb-24 xl:mb-48">
        <div className="flex">
          <Link
            href={'/projects'}
            className="px-4  py-2 font-bold text-sm text-zinc-600 dark:text-zinc-300 border rounded-sm border-zinc-300 dark:border-zinc-500 shadow-sm hover:shadow-primary hover: active:scale-95 duration-300"
            >
            View More Projects
          </Link>
        </div>
      </section> */}

      <section className="mt-6 mb-24 xl:mb-48">
        <div className="flex">
          <Link
            href={'/projects'}
            className="px-6 py-2 font-bold text-sm text-black dark:text-zinc-300 rounded-md bg-zinc-200/50 hover:bg-zinc-200 dark:bg-zinc-800/50 dark:hover:bg-zinc-800 hover:-translate-y-0.5 active:translate-y-0 duration-300 max-sm:w-full max-sm:text-center"
            // className="px-4  py-2 font-bold text-sm text-zinc-600 dark:text-zinc-300 border rounded-sm border-zinc-300 dark:border-zinc-500 shadow-sm hover:shadow-primary active:scale-95 duration-300"
          >
            View More Projects
          </Link>
        </div>
      </section>

      
    </main>
  )
}