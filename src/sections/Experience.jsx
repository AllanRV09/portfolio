import { ExperienceItem } from "../components/ExperienceItem";
import { SectionLayout } from "../components/SectionLayout.jsx";
import { SectionTitle } from "../components/SectionTitle";
import { EXPERIENCES, EXPERIENCE_DATA } from "../data.js"

export function Experience() {
    const { index, label, title } = EXPERIENCE_DATA;

    return (
        <section id="experience" className="relative z-20 bg-background border-b border-surface/10 py-24 md:py-32 scroll-mt-24">
            <SectionLayout index={index} label={label}>
                <SectionTitle>{title}</SectionTitle>
            </SectionLayout>

            <div className="flex flex-col w-full max-w-[76rem] mx-auto px-[clamp(1.25rem,4vw,2.5rem)]">
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