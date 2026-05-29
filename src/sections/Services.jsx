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
            className="relative z-20 bg-background scroll-mt-24"
        >
            <SectionLayout index={index} label={label}>
                <SectionTitle>{title}</SectionTitle>

                <div className="max-w-2xl mt-4">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.4 }}
                        className="text-sm md:text-base font-light text-text/60 leading-relaxed hover:text-text/80 transition-colors duration-300"
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