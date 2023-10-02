// import { getProject } from "@/sanity/sanity-utils";
import { RichTextComponents } from "@/components/RichTextComponents";
import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
    params: { project: string }
}

export default async function Project({ params }: Props){
    const slug = params.project
    const project = await getProject(slug)

    return(
        <main className="min-h-screen">
            <section className="max-w-3xl mx-auto">
                <article>
                    <Image 
                        src={project.image}
                        alt={project.name}
                        width={1920}
                        height={1080}
                        className="rounded-md max-sm:rounded-none object-contain"
                    />

                    <div className="flex flex-col items-start mt-6 max-sm:px-4">
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary dark:bg-clip-text dark:text-transparent">{project.name}</h1>
                        <ul className="mt-1 list-inside list-disc px-3 text-sm text-zinc-500 dark:text-zinc-300">
                            <li>
                                <a 
                                    href={project.url}
                                    title="View Project"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:font-bold dark:hover:text-white duration-150"
                                    >
                                        Live Link
                                </a>  
                            </li>
                            <li>
                                <a 
                                    href='https://github.com/AL-NFLY/'
                                    title="View Project"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:font-bold dark:hover:text-white duration-150"
                                    >
                                        Github Link
                                </a>    

                            </li>
                        </ul>
                        <div className="mt-3 border-t border-t-zinc-400 pt-3 text-zinc-600 dark:text-zinc-300 space-y-2 md:space-y-3">
                            <p>{project.overview}</p>
                            <PortableText value={project.content} components={RichTextComponents} />
                        </div>
                    </div>

                </article>

            </section>
        </main>
    )
}