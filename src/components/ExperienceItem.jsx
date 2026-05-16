import { Tag } from "./Tag";

export function ExperienceItem({ experience }) {
    return (
        <li className="mb-10 sm:grid sm:grid-cols-[1fr_3fr]">
            <header className="mt-4 text-xs font-semibold text-surface/60">
                {experience.year}
            </header>

            <div className="mt-4">
                <h3 className="text-lg font-medium">
                    {experience.title}
                </h3>

                <p className="mt-4 text-sm font-light tracking-wide leading-6">
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