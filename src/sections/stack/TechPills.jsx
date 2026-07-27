import { memo } from "react"

export const TechPills = memo(function TechPills({
    technologies,
    theme,
    compact = false,
}) {
    return (
        <div
            className={`flex flex-wrap ${
                compact ? "gap-1.5" : "stack-tech-pills gap-2"
            }`}
        >
            {technologies.map((technology) => {
                const Icon = technology.icon

                return (
                    <span
                        key={technology.name}
                        className={`inline-flex items-center rounded-full border ${
                            compact
                                ? "min-h-7 gap-1.5 px-2.5 py-1 text-[0.68rem]"
                                : "stack-tech-pill min-h-8 gap-2 px-3 py-1.5 text-[0.72rem] xl:text-sm"
                        }`}
                        style={{
                            borderColor: theme.pillBorder,
                            color: theme.pillText,
                        }}
                    >
                        <Icon
                            aria-hidden="true"
                            className={
                                compact
                                    ? "size-3.5"
                                    : "stack-tech-icon size-4"
                            }
                        />
                        <span>{technology.name}</span>
                    </span>
                )
            })}
        </div>
    )
})
