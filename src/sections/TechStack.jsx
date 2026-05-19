import { SectionTitle } from "../components/SectionTitle";
import { TechItem } from "../components/TechItem";
import { STACK } from "../data.js"


export function TechStack() {
    return (
        <section id="mystack" className="mb-16 px-4 max-w-2xl sm:px-6 lg:px-8 scroll-mt-24">
            <SectionTitle>MY STACK</SectionTitle>

            {
                STACK.map(({ title, techs }) => (
                    <div key={title} className="mb-8 grid gap-4 sm:grid-cols-8 sm:gap-8">
                        <h3 className="text-xs font-semibold text-surface/60 uppercase tracking-wider sm:col-span-2">{title}</h3>

                        <div className="mb-8 flex flex-wrap gap-6 sm:col-span-6">
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