import { RichTextComponents } from "@/components/RichTextComponents"
import { getProfiles } from "@/sanity/sanity-utils"
import { PortableText } from "@portabletext/react"
import Image from "next/image"
import SocialItem from "./components/SocialItem"
import Link from "next/link"

type Props = {
    params: { profile: string }
}

export default async function About() {
    // const slug = params.profile
    const profile = await getProfiles()

    return(
        <main>
            <section className="px-8 md:px-48 mt-3 md:mt-16 md:mb-60 xl:mb-72">
                <>
                    <p className="font-semibold text-4xl">Aloha,</p>
                    <h1>
                        <span className="font-semibold text-4xl">I&apos;m </span>
                        <span className="font-bold text-4xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Almer Naufaly</span>
                    </h1>
                </>

                <>
                    {profile.map((author) => (
                        <article className="flex max-xl:flex-col lg:space-x-8 mt-6" key={author._id}>
                            <div className="flex flex-col items-center justify-center rounded-md">
                                <Image
                                    src={author.image}
                                    alt={author.name}
                                    width={200}
                                    height={200}
                                    className="w-48 h-auto aspect-[3/4] object-cover rounded-md rounded-b-none"
                                />
                                    <Link
                                        href='https://drive.google.com/file/d/1SVcxmopbjgWPImLW-GdryXJAZv1jGiOy/view?usp=sharing'
                                        target="_blank"
                                        className="translate-y-28 absolute w-48 rounded-md rounded-t-none py-1.5 text-center ring-1 ring-inset ring-secondary/10 bg-zinc-50/40 hover:bg-zinc-50/60 dark:bg-zinc-800/50 dark:hover:bg-zinc-800/75 bg-gradient-to-r hover:from-primary hover:to-secondary bg-bottom bg-no-repeat bg-[length:0_3px] hover:bg-[length:100%_3px] font-semibold duration-300"
                                        >
                                        View my CV
                                    </Link>
                            </div>
                            <div className="flex flex-col 2xl:max-w-2xl leading-relaxed text-zinc-600 dark:text-zinc-300 max-sm:mt-6 space-y-2 md:space-y-3">
                                <PortableText value={author.description}  components={RichTextComponents}/>
                            </div>
                            <SocialItem />
                        </article>
                    ))}
                </>
            </section>
        </main>
    )
}