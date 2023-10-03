import Image from "next/image";
import Link from "next/link";


import React from 'react'

export const RichTextComponents = {
    block: {
        h1: ({ children }: any) => <h1 className="pt-4 text-4xl md:text-5xl 2xl:text-6xl font-bold text-dark dark:text-white">{children}</h1>,
        h2: ({ children }: any) => <h2 className="pt-4 text-3xl md:text-4xl 2xl:text-5xl font-bold text-dark dark:text-white">{children}</h2>,
        h3: ({ children }: any) => <h3 className="pt-4 text-lg md:text-xl font-bold text-dark dark:text-white">{children}</h3>,
        // h4: ({ children }: any) => <h4 className="text-xl md:text-2xl 2xl:text-3xl font-bold">{children}</h4>,
        // h5: ({ children }: any) => <h5 className="text-lg md:text-xl 2xl:text-2xl font-bold">{children}</h5>,
        // h6: ({ children }: any) => <h6 className="text-base md:text-lg 2xl:text-xl font-bold">{children}</h6>,
        blockquote: ({children}: any) => <blockquote className="bg-gradient-to-b from-primary to-secondary bg-left bg-no-repeat bg-[length:3px_100%] pl-6 text-xl md:text-2xl text-dark dark:text-white">{children}</blockquote>,
    },
    list: {
        bullet: ({ children }: any) => (
            <ul className="list-disc list-inside space-y-2">{children}</ul>
        ),
        number: ({ children }: any) => (
            <ol className="list-decimal list-inside space-y-2">{children}</ol>
        ),
    },
    marks: {
        link: ({ children, value}: any) => {
            const rel = !value.href.startsWith('/')
                ? 'noreferrer noopener'
                : undefined;
            return (
                <Link
                    href={value.href}
                    rel={rel}
                    className="text-zinc-500 dark:text-zinc-300 font-semibold bg-gradient-to-r from-primary to-secondary bg-no-repeat bg-bottom bg-[length:0%_2px] hover:bg-[length:100%_2px] hover:no-underline transition-all"
                >
                    {children}
                </Link>
            )
        }
    },
}
