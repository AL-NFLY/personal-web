import { PortableTextBlock } from "sanity";

export type Project = {
    _id: string;
    _createdAt: Date;
    name: string;
    slug: string;
    overview: string;
    image: string;
    tags: string;
    url: string;
    content: PortableTextBlock[]
}