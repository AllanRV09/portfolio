import { SectionTitle } from "../components/SectionTitle";
import { TechItem } from "../components/TechItem";
import { STACK } from "../data.js"


export function TechStack() {
    return (
        <section className="mb-16">
            <SectionTitle>MY STACK</SectionTitle>

            {
                STACK.map(({ title, techs }) => (
                    <div key={title}>
                        <h3 className="mb-2 text-xl font-semibold">{title}</h3>

                        <div className="mb-8 flex flex-wrap gap-6">
                            {
                                techs.map((tech) => (
                                    <TechItem
                                        key={tech.name}
                                        name={tech.name}
                                        icon={tech.icon}
                                    />
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </section>
    )
}