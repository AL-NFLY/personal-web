import Image from "next/image";
import { getProjects } from "../../sanity/sanity-utils";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

export default async function Home() {
  const projects = await getProjects();
  return (
    <main className="bg-dark px-48">
      <section className="flex flex-col items-center justify-center min-h-screen">
        <article className="">
          <h2 className="text-2xl md:text-4xl 2xl:text-5xl font-bold">Hi,</h2>
          <h1 className="text-3xl md:text-5xl 2xl:text-6xl font-bold">
            I&apos;m
            <span className="bg-gradient-to-r from-primary to-secondary dark:bg-clip-text dark:text-transparent"> Almer</span>!
          </h1>
          <p className="mt-4 text-zinc-300">A Software Engineer & Bachelor of Engineering in Computer Eng. ITS</p>
        </article>
      </section>

      <section className="min-h-screen">
        <article className="">
          <h2 className="pt-8" id="projects">
            <span className="font-bold text-2xl md:text-3xl bg-gradient-to-r from-primary to-secondary dark:bg-clip-text dark:text-transparent">My Projects</span>
          </h2>
          <p className="mt-2 text-zinc-300">Here is a list of my projects, feel free to check them out!</p>


          <ul className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-5">{projects.map((project) => (
            <li 
              className="group rounded-lg border hover:border-b-4 hover:border-dark border-gray-500 hover:border-b-primary hover:scale-105 active:scale-95 duration-300 transition"
              key={project._id}
              >
              <Link 
                href={`/projects/${project.slug}`} 
              >
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={450}
                    height={300}
                    className="object-contain overflow-hidden rounded-t-lg border-b border-b-gray-500 justify-center items-center flex"
                  />
                )}
                  <div className="px-8 my-4 ">
                    <span className="font-extrabold group-hover:bg-grahttps://fragrance-fresh.vercel.app/dient-to-r text-primary group-hover:bg-gradient-to-r from-primary to-secondary group-hover:dark:bg-clip-text group-hover:dark:text-transparent group-hover:bg-red-300 duration-50">
                      {project.name}
                    </span>
                    <div className="mt-1 text-sm text-zinc-300"><PortableText value={project.content} /></div>
                    <p className="text-sm mt-4"> Read More →</p>
                  </div>  
              </Link>
            </li>
          ))}
          </ul>


        {/* <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project)=>(
            <Link 
              href={`/projects/${project.slug}`}
              key={project._id}
              className="group border hover:border-b-4 hover:border-b-primary hover:border-0 border-gray-600 hover:bg-gradient-to-br hover:from-zinc-800 hover:to-dark hover rounded-lg hover:scale-[1.05] active:scale-[0.95] transition duration-300"
            >
              {project.image && (
                <Image
                src={project.image}
                alt={project.name}
                width={450}
                height={300}
                  className="object-cover rounded-t-md border-b-2 border-b-zinc-300"
                  />
                  )}
                <div className="px-6 py-3 leading-6">
                  <span className="font-extrabold group-hover:bg-gradient-to-r text-sky-300 from-primary to-secondary group-hover:dark:bg-clip-text group-hover:dark:text-transparent group-hover:bg-red-300 duration-50">
                    {project.name}
                  </span>
                  <div className="mt-1 text-sm"><PortableText value={project.content} /></div>
                  <p className="text-sm mt-4"> Read More →</p>
                </div>  
            </Link>
            ))}
          </div> */}






          {/* <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-4">{projects.map((project) => (
            <Link 
              href={`/projects/${project.slug}`} 
              key={project._id} 
              className="hover:border-b-4 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition">
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.name}
                  width={750}
                  height={300}
                  className="object-cover rounded-lg border border-gray-500"
                />
              )}
                <div className="px-8 my-5">
                  <span className="font-extrabold group-hover:bg-gradient-to-r text-sky-300 from-primary to-secondary group-hover:dark:bg-clip-text group-hover:dark:text-transparent group-hover:bg-red-300 duration-50">
                    {project.name}
                  </span>
                  <div className="mt-1 text-sm leading-6"><PortableText value={project.content} /></div>
                  <p className="text-sm mt-4"> Read More →</p>
                </div>  
            </Link>
          ))}
          </div> */}

          {/* <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {projects.map((project)=>(
            <li className="project-card rounded-md md:w-full border dark:border-gray-600 scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu transition duration-100 motion-reduce:hover:scale-100 animate-shadow">

              <Link 
              href={`/projects/${project.slug}`}
              key={project._id}
              className="group border hover:border-b-4 hover:border-b-primary hover:border-0 border-gray-600 hover:bg-gradient-to-br hover:from-zinc-800 hover:to-dark hover rounded-lg hover:scale-[1.05] active:scale-[0.95] transition duration-300"
              >
                {project.image && (
                  <div className="">
                    <Image
                    src={project.image}
                    alt={project.name}
                    width={750}
                    height={300}
                    className="object-cover rounded-t-md border-b-2 border-b-zinc-300"
                    />
                  </div>
                    )}
                  <div className="px-8 my-5">
                    <span className="font-extrabold group-hover:bg-gradient-to-r text-sky-300 from-primary to-secondary group-hover:dark:bg-clip-text group-hover:dark:text-transparent group-hover:bg-red-300 duration-50">
                      {project.name}
                    </span>
                    <div className="mt-1 text-sm leading-6"><PortableText value={project.content} /></div>
                    <p className="text-sm mt-4"> Read More →</p>
                  </div>  
              </Link>

            </li>
              ))}
          </ul> */}
        </article>
      </section>
    </main>
  )
}
