export function ExperienceItem({ experience }) {
    const { role, type, company, year } = experience;

    return (
        <li className="border-b border-surface/12 py-5 first:pt-3">
            <div className="flex items-start justify-between gap-6">
                <div className="min-w-0">
                    <h3 className="type-item-title text-surface">
                        {company}
                    </h3>
                    <p className="type-item-copy mt-2 text-text">
                        {role}
                    </p>

                    <p className="mt-1 text-xs leading-relaxed text-text md:text-sm">
                        {type}
                    </p>
                </div>

                <time
                    dateTime={year}
                    className="shrink-0 whitespace-nowrap pt-0.5 font-mono text-xs uppercase tracking-wide text-surface/65"
                >
                    {year}
                </time>
            </div>
        </li>
    );
}
