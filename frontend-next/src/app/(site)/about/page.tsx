import { RichTextComponents } from "@/components/RichTextComponents"
import { getProfiles } from "@/sanity/sanity-utils"
import { PortableText } from "@portabletext/react"
import Image from "next/image"

type Props = {
    params: { profile: string }
}

export default async function About() {
    // const slug = params.profile
    const profile = await getProfiles()

    return(
        <main>
            <section className="px-8 md:px-48 mt-16 mb-20 md:mb-60 xl:mb-72">
                <>
                    <p className="font-semibold text-4xl">Aloha,</p>
                    <h1>
                        <span className="font-semibold text-4xl">I&apos;m </span>
                        <span className="font-bold text-4xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Almer Naufaly</span>
                    </h1>
                </>

                <>
                    {profile.map((author) => (
                        <article className="flex max-md:flex-col md:space-x-8 mt-6" key={author._id}>
                            <div className="flex items-center justify-center">
                                <Image src={author.image} alt={author.name} width={175} height={300} className="rounded-sm"></Image>
                            </div>
                            <div className="max-w-xl leading-relaxed text-zinc-600 dark:text-zinc-300 max-sm:mt-6 space-y-2 md:space-y-3 max-md:text-sm ">
                                <PortableText value={author.description}  components={RichTextComponents}/>
                            </div>
                            
                        </article>
                    ))}
                </>
            </section>
        </main>
    )
}