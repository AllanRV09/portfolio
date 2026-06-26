import { ExperienceItem } from "../components/ExperienceItem";
import { SectionLayout } from "../components/SectionLayout.jsx";
import { SectionTitle } from "../components/SectionTitle";
import { EXPERIENCES, EXPERIENCE_DATA } from "../data.js"

export function Experience() {
    const { index, label, title } = EXPERIENCE_DATA;

    return (
        <section id="experience" data-theme="dark" className="relative z-20 bg-background border-b border-surface/10 py-24 md:py-32 scroll-mt-24">
            <SectionLayout index={index} label={label}>
                <SectionTitle>{title}</SectionTitle>
                <ol className="mt-2">
                    {EXPERIENCES.map((experience) => (
                        <ExperienceItem
                            key={experience.role + experience.year}
                            experience={experience}
                        />
                    ))}
                </ol>
            </SectionLayout>
        </section>
    );
}