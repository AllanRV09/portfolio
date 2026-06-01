import { Tag } from "./Tag";

export function ExperienceItem({ experience }) {
    return (
        <li className="mb-10 grid gap-6 sm:grid-cols-8 sm:gap-8">
            <header className="mt-4 text-xs font-semibold text-surface/40 sm:col-span-2">
                {experience.year}
            </header>

            <div className="mt-4 sm:col-span-6">
                <h3 className="text-2xl font-medium">
                    {experience.title}
                </h3>

                <p className="mt-4 font-light text-lg tracking-wide leading-relaxed max-w-3xl text-text/70 hover:text-text/90 transition-colors duration-300">
                    {experience.description}
                </p>

                <ul className="mt-2 flex flex-wrap text-xs font-medium leading-5">
                    {experience.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                    ))}
                </ul>
            </div>
        </li>
    )
}