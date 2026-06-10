import { SectionTitle } from "../components/SectionTitle";
import { SectionLayout } from "../components/SectionLayout";
import { SERVICES, SERVICES_DATA } from "../data.js";
import { ServiceCard } from "../components/ServiceCard.jsx";
import { motion } from "framer-motion";

export function Services() {
    const { index, label, title, description } = SERVICES_DATA;

    return (
        <section
            id="services"
            className="relative z-20 bg-background border-b border-surface/10 rounded-t-3xl py-24 md:py-32 scroll-mt-24"
        >
            <SectionLayout index={index} label={label}>
                <SectionTitle>{title}</SectionTitle>

                <div>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}  // espera el título
                        viewport={{ once: true, amount: 0.2 }}   // era 0.4 — más confiable en móvil
                        className="font-light text-lg md:text-xl tracking-wide leading-relaxed max-w-[65ch] text-text/70"
                    >
                        {description}
                    </motion.p>
                </div>
            </SectionLayout>

            <div className="flex flex-col w-full max-w-[76rem] mx-auto px-[clamp(1.25rem,4vw,2.5rem)]">
                {SERVICES.map(({ title: serviceTitle, description, features }, idx) => (
                    <ServiceCard
                        key={serviceTitle}
                        title={serviceTitle}
                        description={description}
                        features={features}
                        idx={idx}
                    />
                ))}
            </div>
        </section>
    );
}