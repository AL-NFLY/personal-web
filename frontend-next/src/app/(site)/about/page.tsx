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
        <main className="min-h-screen">
            <section className="px-8 md:px-48 mt-16">
                <>
                    <p className="font-semibold text-4xl">Aloha,</p>
                    <h1>
                        <span className="font-semibold text-4xl">I&apos;m </span>
                        <span className="font-bold text-4xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Almer Naufaly</span>
                    </h1>
                </>

                    <>
                        {profile.map((me) => (
                            <article>
                                <Image src={me.image} alt={me.name} width={200} height={500}></Image>
                                {/* <p>{me.name}</p> */}
                                {/* <PortableText value={me.content}></PortableText> */}
                            </article>


                        ))}
                        
                    </>
            </section>
        </main>
    )
}