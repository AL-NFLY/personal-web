import { getProjects } from '@/sanity/sanity-utils';
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'


const CurratedProjectCards = async() => {
    const projects = await getProjects();
    const selectedProjects = projects.splice(0, 3);
    
    return (
    <section className="">
            <article className="" id="projects">
            <h2 className="pt-20 md:pt-24" id="">
                <span className="font-bold text-2xl md:text-3xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Currated Projects</span>
            </h2>
            <p className="mt-2 dark:text-zinc-300 text-zinc-600">Here is a list of some of my best projects, feel free to check them out!</p>

            <ul className="mt-6 grid md:grid-cols-2 xl:grid-cols-3 gap-6">{selectedProjects.map((project) => (
                <li 
                className="flex justify-center items-center group rounded-lg border border-b-4 border-zinc-300 dark:border-zinc-500 hover:border-b-primary dark:hover:border-b-primary hover:-translate-y-2 active:scale-[0.98] duration-300 transition-all"
                // className="flex justify-center items-center group px-2 pt-2 rounded-lg bg-gradient-to-r from-zinc-300 to-zinc-300 dark:from-zinc-500 dark:to-zinc-500 dark:hover:from-primary dark:hover:to-secondary bg-bottom bg-no-repeat bg-[length:100%_4px] bg-zinc-800/50 hover:bg-zinc-800 duration-300 hover:-translate-y-2 active:-translate-y-0.5"
                key={project._id}
                >
                        <Link href={`/projects/${project.slug}`}>
                            {project.image && (
                                    <Image
                                    src={project.image}
                                    alt={project.name}
                                    width={500}
                                    height={250}
                                    className="object-cover overflow-hidden aspect-[16/10] rounded-lg w-full h-auto"
                                    // className=" object-cover overflow-hidden aspect-[16/10] rounded-t-lg border-b border-zinc-300 dark:border-b-zinc-500 "
                                    />
                                )}
                            
                            <div className="px-6 py-4 max-sm:px-4 max-sm:py-3">
                                <span className="font-extrabold text-sm lg:text-base dark:text-primary group-hover:bg-gradient-to-r from-primary to-secondary group-hover:dark:bg-clip-text group-hover:dark:text-transparent group-hover:bg-red-300 duration-50">
                                {project.name}
                                </span>
                                <div className="mt-1 text-xs lg:text-sm text-zinc-600 dark:text-zinc-300">
                                    <p className='tracking-wide line-clamp-6 2xl:line-clamp-4'>{project.overview}</p>
                                </div>
                                <p className="text-xs lg:text-sm pt-4 max-sm:pt-3"> Read More →</p>
                            </div>  
                        </Link>
                </li>
            ))}
            </ul>
            </article>
        </section>
  )
}

export default CurratedProjectCards