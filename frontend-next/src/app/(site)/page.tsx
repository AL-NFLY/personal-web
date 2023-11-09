import Image from "next/image";
import { getProjects } from "@/sanity/sanity-utils";
import Link from "next/link";
import Experience from "@/components/Experience";
import ProjectCards from "@/components/ProjectCards";
import { IoCaretDown } from "react-icons/io5";
import CurratedProjectCards from "@/components/CurratedProjectCards";
import Hero from "@/components/Hero";
// import { PortableText } from "@portabletext/react";


export default async function Home() {
  return (
    <main className="px-8 md:px-48 md:-mt-20 -mt-28">
      <Hero />
      <Experience />
      <CurratedProjectCards />
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