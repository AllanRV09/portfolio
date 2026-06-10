import { SectionTitle } from "../components/SectionTitle";
import { SectionLayout } from "../components/SectionLayout";
import { motion } from "framer-motion";
import { ABOUT_DATA } from "../data"

export function About() {
    const { index, label, title, paragraphs } = ABOUT_DATA;

    return (
        <section id="about" className="relative z-20 bg-background border-b border-surface/10 py-24 md:py-32 scroll-mt-24">
            <SectionLayout index={index} label={label}>
                <SectionTitle>{title}</SectionTitle>

                <div className="space-y-6">
                    {paragraphs.map((text, i) => (
                        <motion.p
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                ease: "easeOut",
                                delay: 0.3 + i * 0.08,   // base 0.3 para esperar el título, luego stagger
                            }}
                            viewport={{ once: true, amount: 0.2 }}   // era 0.4
                            className="font-light text-lg md:text-xl tracking-wide leading-relaxed max-w-[65ch] text-text/70"
                        >
                            {text}
                        </motion.p>
                    ))}
                </div>
            </SectionLayout>
        </section>
    )
}