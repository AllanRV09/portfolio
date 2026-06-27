export function FeatureList({ features }) {
    return (
        <ul className="min-w-0">
            {features.map((feature, i) => (
                <li key={feature} className="mt-3">
                    <div className="flex gap-3 md:gap-7 text-base md:text-xl font-semibold">
                        <span className="font-semibold text-xs md:text-sm text-surface/60 shrink-0 tracking-[0.2em]" aria-hidden="true">
                            {(i + 1).toString().padStart(2, "0")}
                        </span>
                        <span className="break-words text-surface/85">{feature}</span>
                    </div>
                    {i !== features.length - 1 && <hr className="w-full border-surface/10 mt-3" />}
                </li>
            ))}
        </ul>
    );
}