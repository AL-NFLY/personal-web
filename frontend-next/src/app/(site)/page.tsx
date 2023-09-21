import Image from "next/image";
import { getProjects } from "@/sanity/sanity-utils";
import Link from "next/link";
import Experience from "@/components/Experience";
import ProjectCards from "@/components/ProjectCards";
// import { PortableText } from "@portabletext/react";


export default async function Home() {
  const projects = await getProjects();
  return (
    <main className="px-48 max-sm:px-8 -mt-20 max-sm:-mt-24">
      <section className="flex flex-col items-center justify-center min-h-screen">
        <article  >
          <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-bold">Hi,</h2>
          <h1 className="text-4xl md:text-5xl 2xl:text-6xl font-bold">
            I&apos;m
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Almer</span>!
          </h1>
          <p className="mt-4 text-zinc-300">A Software Engineer & Bachelor of Engineering in Computer Eng. ITS</p>

          <div className="flex mt-6 gap-4">
            <Link 
              href='https://drive.google.com/file/d/1dzMphHTvG-Fq3diGmdX1ymK69n07hGXq/view?usp=sharing'
              target="_blank"
              className="rounded-sm px-4 py-1 border hover:scale-105 bg-gradient-to-r from-primary to-secondary text-black font-bold shadow-lg hover:shadow-secondary duration-300">
              View my CV
            </Link>
            <Link
              href='https://github.com/AL-NFLY'
              target="_blank"
              className="rounded-sm px-4 py-1 border border-gray-500 hover:scale-105  font-bold shadow-lg hover:shadow-primary duration-300"
            >
              Visit my Github
            </Link>

            {/* <StarCanvas /> */}
          </div>
        </article>
      </section>

      <Experience />

      <ProjectCards />

    </main>
  )
}