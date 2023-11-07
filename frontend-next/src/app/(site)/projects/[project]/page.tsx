// import { getProject } from "@/sanity/sanity-utils";
import { RichTextComponents } from "@/components/RichTextComponents";
import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

type Props = {
    params: { project: string }
}

export default async function Project({ params }: Props){
    const slug = params.project
    const project = await getProject(slug)

    return(
        <main className="min-h-screen">
            <article className="max-w-3xl mx-auto">
                <>
                    <Image 
                        src={project.image}
                        alt={project.name}
                        width={1920}
                        height={1080}
                        className="rounded-md max-sm:rounded-none object-contain"
                    />

                    <div className="flex flex-col items-start mt-6 max-sm:px-4">
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary dark:bg-clip-text dark:text-transparent">{project.name}</h1>
                        <ul className="flex flex-col gap-y-2 px-3 mt-1 text-sm text-zinc-500 dark:text-zinc-300">
                            <li>
                                <Link
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex gap-x-2 hover:font-bold dark:hover:text-white duration-150"
                                >

                                    Live Link
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='https://github.com/AL-NFLY/'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex gap-x-2 hover:font-bold dark:hover:text-white duration-150 "
                                >
                                    Github Link
                                </Link>
                            </li>
                        </ul>
                        <div className="mt-3 border-t border-t-zinc-400 pt-3 text-zinc-600 dark:text-zinc-300 space-y-4 leading-relaxed">
                            <p>{project.overview}</p>
                            <PortableText value={project.content} components={RichTextComponents} />
                        </div>
                    </div>

                </>
            </article>
        </main>
    )
}