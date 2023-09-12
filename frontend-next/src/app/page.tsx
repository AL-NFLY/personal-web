import Image from "next/image";
import { getProjects } from "../../sanity/sanity-utils";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

export default async function Home() {
  const projects = await getProjects();
  return (
    <main>
      <section className="flex flex-col items-center justify-center min-h-screen">
        <article className="">
          <h2 className="text-2xl md:text-4xl 2xl:text-5xl font-bold">Hi,</h2>
          <h1 className="text-3xl md:text-5xl 2xl:text-6xl font-bold">
            I&apos;m
            <span className="bg-gradient-to-r from-cyan-300 to-red-300 dark:bg-clip-text dark:text-transparent"> Almer!</span>
          </h1>
          <p className="mt-4">A Software Engineer & Bachelor of Engineering in Computer Eng. ITS</p>
        </article>
      </section>

      <section className="min-h-screen px-32">
        <article className="">
          <span className="font-bold text-gray-700 text-2xl md:text-3xl bg-gradient-to-r from-cyan-300 to-red-300 dark:bg-clip-text dark:text-transparent">My Projects</span>
          <p className="mt-2">Here is a list of my projects, feel free to check them out!</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 ">
            {projects.map((project)=>(
              <Link 
                href={`/projects/${project.slug}`}
                key={project._id}
                className="border-2 border-gray-600 hover:border-black rounded-sm hover:scale-[1.05] active:scale-[0.95] transition duration-300"
              >
                {project.image && (
                  <Image
                  src={project.image}
                  alt={project.name}
                  width={500}
                  height={300}
                    className="object-cover rounded-t-sm border border-gray-500"
                    />
                    )}
                  <div className="px-6 py-3 leading-6">
                    <span className="font-extrabold bg-gradient-to-r from-cyan-300 to-red-300 dark:bg-clip-text dark:text-transparent">
                      {project.name}
                    </span>
                    <div className="mt-1 text-sm  "><PortableText value={project.content} /></div>
                    <p className="text-sm mt-4"> Read More →</p>
                  </div>  
              </Link>
              ))}
          </div>
        </article>
      </section>
    </main>
  )
}
