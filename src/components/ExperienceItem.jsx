import { Tag } from "./Tag";

export function ExperienceItem({ experience }) {
    return (
        <li className="mb-10 grid gap-6 sm:grid-cols-8 sm:gap-8">
            <header className="mt-4 text-xs font-semibold text-surface/60 sm:col-span-2">
                {experience.year}
            </header>

            <div className="mt-4 sm:col-span-6">
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