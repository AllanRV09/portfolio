import { SectionTitle } from "../components/SectionTitle";
import { SectionLayout } from "../components/SectionLayout";
import { SectionDescription } from "../components/SectionDescription";
import { SERVICES, SERVICES_DATA } from "../data.js";
import { ServiceCard } from "../components/ServiceCard.jsx";

export function Services() {
    const { index, label, title, description } = SERVICES_DATA;

    return (
        <section
            id="services"
            data-theme="dark"
            className="relative z-20 bg-background border-b border-surface/10 rounded-t-3xl py-24 md:py-32 scroll-mt-24"
        >
            <SectionLayout index={index} label={label}>
                <SectionTitle>{title}</SectionTitle>

                <div>
                    <SectionDescription className="text-lg md:text-xl">
                        {description}
                    </SectionDescription>
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