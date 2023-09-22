import { PortableTextBlock } from "sanity";

export type Profile = {
    _id: string;
    _createdAt: Date;
    name: string;
    image: string;
    content: PortableTextBlock[]
}