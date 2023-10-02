import Image from "next/image";
import Link from "next/link";


import React from 'react'

export const RichTextComponents = {
    block: {
        h1: ({ children }: any) => <h1 className="text-4xl md:text-5xl 2xl:text-6xl font-bold">{children}</h1>,
        h2: ({ children }: any) => <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-bold">{children}</h2>,
        h3: ({ children }: any) => <h3 className="text-2xl md:text-3xl 2xl:text-4xl font-bold">{children}</h3>,
        h4: ({ children }: any) => <h4 className="text-xl md:text-2xl 2xl:text-3xl font-bold">{children}</h4>,
        h5: ({ children }: any) => <h5 className="text-lg md:text-xl 2xl:text-2xl font-bold">{children}</h5>,
        h6: ({ children }: any) => <h6 className="text-base md:text-lg 2xl:text-xl font-bold">{children}</h6>,
        blockquote: ({children}: any) => <blockquote className="border-l-primary">{children}</blockquote>,
    },
    list: {
        bullet: ({ children }: any) => (
            <ul className="list-disc list-inside">{children}</ul>
        ),
        number: ({ children }: any) => (
            <ol className="list-decimal list-inside">{children}</ol>
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
                    className="inline-flex items-center font-medium focus:outline-none focus-visible:ring focus-visible:ring-primary border-b border-dotted border-dark hover:border-black/0 cursor-newtab"
                    // className="dark:bg-gradient-to-tr dark:from-primary dark:to-secondary dark:bg-clip-text dark:text-transparent"
                >
                    {children}
                </Link>
            )
        }
    },
}
