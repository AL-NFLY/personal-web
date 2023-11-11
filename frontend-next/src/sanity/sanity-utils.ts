import { createClient, groq } from "next-sanity"; 
import { Project } from "../types/Project";
import { Profile } from "@/types/Profile";
import config from "./config/client-config";

export async function getProjects(): Promise<Project[]> {
    return createClient(config).fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            overview,
            tags,
            url,
            content,
        }`
    )
}

export async function getProject(slug: string): Promise<Project> {
    return createClient(config).fetch(
        groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            overview,   
            "image": image.asset->url,
            tags,
            url,
            content,
        }`,
        { slug }
    )
}

export async function getProfiles(): Promise<Profile[]> {
    return createClient(config).fetch(
        groq`*[_type == 'profile']{
            _id,
            _createdAt,
            name,
            'image': image.asset->url,
            description,
        }`
    )
}

// export async function getProfile(): Promise<Profile> {
    
// }

