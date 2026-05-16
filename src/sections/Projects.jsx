import { ProjectItem } from "../components/ProjectItem";
import { SectionTitle } from "../components/SectionTitle";
import { PROJECTS } from "../data"

export function Projects() {
    return (
        <section className="mb-32">
            <SectionTitle>PROJECTS</SectionTitle>

            <div className="flex flex-col">
                {
                    PROJECTS.map((project) => (
                        <ProjectItem
                            key={project.title}
                            project={project}
                        />
                    ))
                }
            </div>
        </section>
    )
}