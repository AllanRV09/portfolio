import { ExperienceItem } from "../components/ExperienceItem";
import { SectionTitle } from "../components/SectionTitle";
import { EXPERIENCES } from "../data.js"

export function Experience() {
    return (
        <section id="experience" className="mb-16 px-4 max-w-2xl sm:px-6 lg:px-8 scroll-mt-24">
            <SectionTitle>EXPERIENCE</SectionTitle>

            <div>
                <ol>
                    {
                        EXPERIENCES.map((experience) => (
                            <ExperienceItem
                                key={experience.title + experience.year}
                                experience={experience}
                            />
                        ))
                    }
                </ol>
            </div>
        </section>
    )
}