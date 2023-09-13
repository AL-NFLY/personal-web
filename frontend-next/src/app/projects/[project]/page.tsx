import { getProject } from "../../../../sanity/sanity-utils"
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
    params: { project: string }
}

export default async function Project({ params }: Props){
    const slug = params.project
    const project = await getProject(slug)

    return(
        <main className="bg-dark h-screen">
            <section className="max-w-3xl mx-auto py-20">
                <div>
                    <Image 
                        src={project.image}
                        alt={project.name}
                        width={1920}
                        height={1080}
                        className="rounded-md object-contain"
                    />
                    <div className="flex flex-col items-start mt-6">
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{project.name}</h1>
                        <ul className="mt-1 list-inside list-disc px-3 text-sm text-zinc-300">
                            <li>
                                <a 
                                    href={project.url}
                                    title="View Project"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:font-bold hover:text-white duration-150"
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
                                    className="hover:font-bold hover:text-white duration-150"
                                    >
                                        Github Link
                                </a>    
                            </li>
                        </ul>
                        <div className="mt-3 border-t pt-3">
                            <PortableText value={project.content} />
                        </div>
                    </div>

                </div>

            </section>
        </main>
    )
}