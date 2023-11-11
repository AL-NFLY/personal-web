import { getProjects } from '@/sanity/sanity-utils';
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'


const ProjectCards = async() => {
    const projects = await getProjects();
    
    return (
    <section className="">
            <article className="" id="projects">
            <h2 className="pt-20 md:pt-24" id="">
                <span className="font-bold text-2xl md:text-3xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Project Catalog</span>
            </h2>
            <p className="mt-2 dark:text-zinc-300 text-zinc-600">Here is a complete list of my projects, feel free to check them out!</p>

            <ul className="mt-6 grid md:grid-cols-2 xl:grid-cols-3 gap-y-6 gap-x-4 lg:gap-x-6">{projects.map((project) => (
                <li 
                    className="group flex justify-center items-center group px-2 pt-2 rounded-lg bg-gradient-to-r from-zinc-300 to-zinc-300 dark:from-zinc-500 dark:to-zinc-500 hover:from-primary hover:to-secondary dark:hover:from-primary dark:hover:to-secondary bg-bottom bg-no-repeat bg-[length:100%_4px] bg-zinc-100/50 hover:bg-zinc-200/50 dark:bg-zinc-800/50 dark:hover:bg-zinc-800 hover:-translate-y-2 active:-translate-y-0.5 duration-300"
                    // className="flex justify-center items-center group rounded-lg border border-b-4 border-zinc-300 dark:border-zinc-500 hover:border-b-primary dark:hover:border-b-primary hover:-translate-y-2 active:scale-[0.98] duration-300 transition-all"
                    key={project._id}
                >
                        <Link href={`/projects/${project.slug}`}>
                            {project.image && (
                                <Image
                                src={project.image}
                                alt={project.name}
                                width={500}
                                height={250}
                                className="object-cover overflow-hidden aspect-[16/10] rounded-lg"
                                // className="object-cover overflow-hidden aspect-[16/10] rounded-t-lg border-b border-zinc-300 dark:border-b-zinc-500 "
                                />
                                )}

                                <p className='absolute p-1 rounded-md text-xs text-white right-4 bottom-1/3 translate-y-0 group-hover:-translate-y-6 md:group-hover:-translate-y-8 opacity-0 group-hover:opacity-100 bg-black/50 duration-300'>
                                    {project.tags}
                                </p>
                            
                            <div className="px-6 py-4 max-sm:px-4 max-sm:py-3">
                                <span className="font-extrabold text-sm lg:text-base tracking-tight md:tracking-normal dark:text-primary group-hover:bg-gradient-to-r from-primary to-secondary group-hover:dark:bg-clip-text group-hover:dark:text-transparent group-hover:bg-red-300 duration-50">
                                    {project.name}
                                </span>
                                <div className="mt-1 text-xs lg:text-sm text-zinc-600 dark:text-zinc-300">
                                    <p className='tracking-wide line-clamp-6 2xl:line-clamp-4'>{project.overview}</p>
                                </div>
                                <p className="text-xs lg:text-sm pt-3 md:pt-4 pb-1.5 md:pb-2">Read More →</p>
                            </div>  
                        </Link>
                </li>
            ))}
            </ul>

            <div className='flex mt-8'>
                <Link
                    href='/'
                    className='px-12 py-2 rounded-md max-sm:w-full text-center text-sm font-semibold bg-zinc-200/50 dark:bg-zinc-800/50 hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:-translate-y-0.5 active:translate-y-0 duration-150'
                >
                    Back to Home
                </Link>
            </div>

            </article>
        </section>
  )
}

export default ProjectCards