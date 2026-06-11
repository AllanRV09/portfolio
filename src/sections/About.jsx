import { SectionTitle } from "../components/SectionTitle";
import { SectionLayout } from "../components/SectionLayout";
import { SectionDescription } from "../components/SectionDescription";
import { ABOUT_DATA } from "../data"

export function About() {
    const { index, label, title, paragraphs } = ABOUT_DATA;

    return (
        <section id="about" data-theme="dark" className="relative z-20 bg-background border-b border-surface/10 py-24 md:py-32 scroll-mt-24">
            <SectionLayout index={index} label={label}>
                <SectionTitle>{title}</SectionTitle>

                <div className="space-y-6">
                    {paragraphs.map((text, i) => (
                        <SectionDescription
                            key={i}
                            delay={0.3 + i * 0.08}
                            className="text-lg md:text-xl"
                        >
                            {text}
                        </SectionDescription>
                    ))}
                </div>
            </SectionLayout>
        </section>
    )
}