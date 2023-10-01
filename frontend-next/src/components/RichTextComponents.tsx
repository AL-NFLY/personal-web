import Image from "next/image";
import Link from "next/link";


import React from 'react'

export const RichTextComponents = {
    list: {
        bullet: ({ children }: any) => (
            <ul className="list-disc list-inside">{children}</ul>
        ),
        number: ({ children }: any) => (
            <ol className="list-decimal list-inside">{children}</ol>
        ),
    },
}
