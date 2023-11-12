import { RichTextComponents } from "@/components/RichTextComponents"
import { getProfiles } from "@/sanity/sanity-utils"
import { PortableText } from "@portabletext/react"
import Image from "next/image"
import SocialItem from "./components/SocialItem"

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
                            <div className="flex items-center justify-center">
                                <Image
                                    src={author.image}
                                    alt={author.name}
                                    width={200}
                                    height={200}
                                    className="w-48 h-auto aspect-[3/4] object-cover rounded-md"
                                />
                            </div>
                            <div className="flex flex-col 2xl:max-w-2xl leading-relaxed text-zinc-600 dark:text-zinc-300 max-sm:mt-6 space-y-2 md:space-y-3">
                                <PortableText value={author.description}  components={RichTextComponents}/>
                            </div>
                            <SocialItem />
                            <div className='flex font-extrabold text-9xl px-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:scale-105 active:scale-100'>
                                AL
                            </div>
                        </article>
                    ))}
                </>
            </section>
        </main>
    )
}