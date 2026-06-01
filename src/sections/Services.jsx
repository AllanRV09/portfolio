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
            className="relative z-20 bg-background border-b border-surface/10 py-24 md:py-32 scroll-mt-24"
        >
            <SectionLayout index={index} label={label}>
                <SectionTitle>{title}</SectionTitle>

                <div className="max-w-3xl mt-4">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.4 }}
                        className="font-light text-xl tracking-wide leading-relaxed max-w-3xl text-text/70 hover:text-text/90 transition-colors duration-300"
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