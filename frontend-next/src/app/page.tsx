import Image from "next/image";
import { getProjects } from "@/sanity/sanity-utils";
import Link from "next/link";
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
          </div>
        </article>

      </section>
      
      <section className="min-h-screen">
        <article className="">
          <h2 className="pt-8" id="projects">
            <span className="font-bold text-2xl md:text-3xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Currated Projects</span>
          </h2>
          <p className="mt-2 text-zinc-300">Here is a list of my projects, feel free to check them out!</p>

          <ul className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">{projects.map((project) => (
            <li 
              className="group rounded-lg border hover:border-b-4 hover:border- border-gray-500 hover:border-b-primary hover:scale-105 active:scale-95 duration-300 transition"
              key={project._id}
              >
              <Link href={`/projects/${project.slug}`}>
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={450}
                    height={300}
                    className="object-contain overflow-hidden rounded-t-lg border-b border-b-gray-500 justify-center items-center flex"
                  />
                )}
                
                  <div className="px-8 py-4 max-sm:px-4 max-sm:py-3">
                    <span className="font-extrabold text-primary group-hover:bg-gradient-to-r from-primary to-secondary group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-red-300 duration-50">
                      {project.name}
                    </span>
                    <div className="mt-1 text-sm text-zinc-300">
                      <p>{project.overview}</p>
                    </div>
                    <p className="text-sm pt-4 max-sm:pt-3"> Read More →</p>
                  </div>  
              </Link>
            </li>
          ))}
          </ul>

        </article>
      </section>
    </main>
  )
}