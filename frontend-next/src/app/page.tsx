import { getProjects } from "../../sanity/sanity-utils";
import { Project } from "../../types/Project";

export default async function Home() {
  const projects = await getProjects();
  return (
    <section>
      {projects.map((project) =>(
        <div key={project._id}>{project.name}</div>
      ))}
    </section>
  )
}
