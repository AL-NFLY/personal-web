import { createClient, groq } from "next-sanity"; 

export async function getProjects() {
    const client = createClient({
        projectId: "giahi441",
        dataset: "production",
        apiVersion: "2023-11-09",
    });

    return client.fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content,
        }`
    )
}