import { RichTextComponents } from "@/components/RichTextComponents";
import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { IoLink, IoLogoGithub } from "react-icons/io5";

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
                        <ul className="flex flex-col gap-y-2 px-3 mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                            <li>
                                <Link
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-x-1 group"
                                >
                                    <IoLink className="w-6 h-auto" />
                                    <p className="rounded-md px-1 text-xs font-semibold bg-gradient-to-r from-primary to-secondary bg-bottom bg-no-repeat bg-[length:0%_2px] group-hover:bg-[length:100%_2px] transition-all">
                                        Live Link
                                    </p>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='https://github.com/AL-NFLY/'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-x-1 group"
                                >
                                    <IoLogoGithub className="w-6 h-auto" />
                                    <p className="rounded-md px-1 text-xs font-semibold bg-gradient-to-r from-primary to-secondary bg-bottom bg-no-repeat bg-[length:0%_2px] group-hover:bg-[length:100%_2px] transition-all">
                                        Github Link
                                    </p>
                                </Link>
                            </li>
                        </ul>

                        <div className="mt-3 border-t border-t-zinc-400 pt-3 text-zinc-600 dark:text-zinc-300 space-y-4 leading-relaxed">
                            <p>{project.overview}</p>
                            <PortableText 
                                value={project.content} 
                                components={RichTextComponents} 
                            />
                        </div>

                        <div className="flex mt-8">
                            <Link
                                href='/projects'
                                className="px-8 py-2 rounded-md text-sm text-center font-bold bg-zinc-200/50 dark:bg-zinc-800/50 hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:-translate-y-0.5 active:translate-y-0 duration-150"
                            >
                                Back to Projects
                            </Link>
                        </div>
                    </div>


                </>
            </article>
        </main>
    )
}