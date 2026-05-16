import { ExperienceItem } from "../components/ExperienceItem";
import { SectionTitle } from "../components/SectionTitle";
import { EXPERIENCES } from "../data.js"

export function Experience() {
    return (
        <section className="mb-16">
            <SectionTitle>EXPERIENCE</SectionTitle>

            {
                EXPERIENCES.map((experience) => (
                    <ExperienceItem
                        key={experience.title}
                        experience={experience}
                    />
                ))
            }
        </section>
    )
}