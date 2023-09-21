import { getProjects } from '@/sanity/sanity-utils';
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'


const ProjectCards = async() => {
    const projects = await getProjects();

    return (
        <section className="min-h-screen">
        <article className="" id="projects">
        <div className="invisible">Divide</div>
        <h2 className="mt-16 md:mt-32" id="">
            <span className="font-bold text-2xl md:text-3xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Currated Projects</span>
        </h2>
        <p className="mt-2 text-zinc-300">Here is a list of my projects, feel free to check them out!</p>

        <ul className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">{projects.map((project) => (
            <li 
            className="group rounded-lg border hover:border-b-4 border-gray-500 hover:border-b-primary hover:-translate-y-2 active:scale-[0.98] duration-300 transition"
            key={project._id}
            >
            <Link href={`/projects/${project.slug}`}>
                {project.image && (
                <Image
                    src={project.image}
                    alt={project.name}
                    width={500}
                    height={250}
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
  )
}

export default ProjectCards