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
    },
    list: {
        bullet: ({ children }: any) => (
            <ul className="list-disc list-inside">{children}</ul>
        ),
        number: ({ children }: any) => (
            <ol className="list-decimal list-inside">{children}</ol>
        ),
    },
}
