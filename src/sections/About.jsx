import { SectionTitle } from "../components/SectionTitle";
import { SectionLayout, SectionMarker } from "../components/SectionLayout";
import { SectionDescription } from "../components/SectionDescription";
import { ABOUT_DATA } from "../data/data"
import { ExperienceItem } from "../components/ExperienceItem";
import { EXPERIENCES, EXPERIENCE_META } from "../data/experience-data";

export function About() {
    const { index, label, title, paragraphs } = ABOUT_DATA;

    return (
        <section id="about" data-theme="dark" className="relative z-20 bg-background border-b border-surface/10 py-24 md:py-32 scroll-mt-24">
            <SectionLayout index={index} label={label}>
                <SectionTitle>{title}</SectionTitle>

                <div className="grid gap-14 lg:grid-cols-[minmax(0,3fr)_minmax(18rem,2fr)] lg:gap-20">
                    <div className="space-y-6">
                        {paragraphs.map((text, index) => (
                            <SectionDescription
                                key={text}
                                delay={0.3 + index * 0.08}
                                className="text-lg md:text-xl"
                            >
                                {text}
                            </SectionDescription>
                        ))}
                    </div>

                    <aside
                        id="experience"
                        aria-label={EXPERIENCE_META.label}
                        className="scroll-mt-24"
                    >
                        <SectionMarker
                            index={EXPERIENCE_META.index}
                            label={EXPERIENCE_META.label}
                        />

                        <ol className="mt-9">
                            {EXPERIENCES.map((experience) => (
                                <ExperienceItem
                                    key={`${experience.company}-${experience.year}`}
                                    experience={experience}
                                />
                            ))}
                        </ol>
                    </aside>
                </div>
            </SectionLayout>
        </section>
    )
}
