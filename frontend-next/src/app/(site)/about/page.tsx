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
                            <article className="flex max-sm:flex-col space-x-8 mt-6" key={me._id}>
                                <figure className="flex items-center justify-center">
                                    <Image src={me.image} alt={me.name} width={175} height={300} className="rounded-sm"></Image>
                                </figure>
                                <div className="max-w-xl leading-relaxed text-zinc-600 dark:text-zinc-300 max-sm:mt-6">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aperiam, accusantium ad suscipit repellendus laborum temporibus adipisci itaque dolorum repellat cupiditate iusto id error laboriosam ratione inventore vero porro reiciendis!</p>
                                    <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, itaque libero dolorem alias fuga odit facere nihil laborum reprehenderit quisquam molestias numquam atque perferendis minima eum at recusandae, ipsam error? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque quod quas sit quasi dolorum fuga hic sapiente veniam, ullam nostrum, facilis repellat aspernatur? Ex veniam eligendi itaque sunt deserunt nemo?</p>
                                </div>
                                {/* <PortableText value={me.content}></PortableText> */}
                            </article>


                        ))}
                        
                    </>
            </section>
        </main>
    )
}