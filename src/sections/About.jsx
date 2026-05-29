import { SectionTitle } from "../components/SectionTitle";
import { SectionLayout } from "../components/SectionLayout";
import { motion } from "framer-motion";
import { ABOUT_DATA } from "../data"

export function About() {
    const { index, label, title, paragraphs } = ABOUT_DATA;

    return (
        <section id="about" className="relative z-20 bg-background rounded-t-3xl py-24 md:py-32 scroll-mt-24">
            <SectionLayout index={index} label={label}>
                <SectionTitle>{title}</SectionTitle>

                <div className="space-y-6 mt-4">
                    {paragraphs.map((text, i) => (
                        <motion.p
                            key={i}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                ease: "easeOut",
                                delay: i * 0.08,
                            }}
                            viewport={{ once: true, amount: 0.4 }}
                            className="font-light tracking-wide leading-relaxed max-w-3xl text-text/70 hover:text-text/90 transition-colors duration-300"
                        >
                            {text}
                        </motion.p>
                    ))}
                </div>
            </SectionLayout>
        </section>
    )
}