import { ProjectItem } from "../components/ProjectItem";
import { SectionLayout } from "../components/SectionLayout";
import { SectionTitle } from "../components/SectionTitle";
import { PROJECTS, PROJECTS_DATA } from "../data"

export function Projects() {
    const { index, label, title } = PROJECTS_DATA;
    return (
        <section id="projects" className="relative z-20 bg-background rounded-b-3xl py-24 md:py-32 scroll-mt-24">
            <SectionLayout index={index} label={label}>
                <SectionTitle>{title}</SectionTitle>
            </SectionLayout>

            <div className="flex flex-col w-full max-w-[76rem] mx-auto px-[clamp(1.25rem,4vw,2.5rem)]">
                <ul>
                    {
                        PROJECTS.map((project) => (
                            <ProjectItem
                                key={project.title}
                                project={project}
                            />
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}