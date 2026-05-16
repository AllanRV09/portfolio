import { ProjectItem } from "../components/ProjectItem";
import { SectionTitle } from "../components/SectionTitle";

const PROJECTS = [
    {
        title: "Lorem ipsum dolor sit amet",
        description: "Praesent et leo vel ante imperdiet eleifend. Duis luctus nisl id dolor eleifend, in lobortis justo convallis. Vivamus viverra erat ut placerat ornare. Phasellus finibus nunc sed enim faucibus semper. Nulla fermentum, turpis nec sagittis ullamcorper, augue nisl faucibus elit, id luctus nisi lacus sed tellus. Etiam sodales efficitur justo nec volutpat. Nulla lorem mi, dictum quis porttitor a, sollicitudin sed urna. Etiam vehicula eros a pulvinar accumsan.",
        image: "https://picsum.photos/300/200",
        link: "#"
    },
    {
        title: "Lorem",
        description: "Praesent et leo vel ante imperdiet eleifend. Duis luctus nisl id dolor eleifend, in lobortis justo convallis. Vivamus viverra erat ut placerat ornare. Phasellus finibus nunc sed enim faucibus semper. Nulla fermentum, turpis nec sagittis ullamcorper, augue nisl faucibus elit, id luctus nisi lacus sed tellus. Etiam sodales efficitur justo nec volutpat. Nulla lorem mi, dictum quis porttitor a, sollicitudin sed urna. Etiam vehicula eros a pulvinar accumsan.",
        image: "https://picsum.photos/300/200",
        link: "#"
    },
]

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