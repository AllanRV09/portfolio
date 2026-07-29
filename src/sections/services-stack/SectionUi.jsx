import { memo } from "react"
import { motion } from "framer-motion"
import {
    ACTIVE_TRACK_TRANSITION,
    CHIP_FILL_TRANSITION,
    CHIP_TEXT_TRANSITION,
    formatCount,
} from "./theme"

function SectionMarker({ index, label, theme }) {
    return (
        <p
            className="flex items-center gap-3 font-mono text-xs tracking-wide"
            style={{ color: theme.marker }}
        >
            <span style={{ color: theme.accent }}>{index}</span>
            <span
                aria-hidden="true"
                style={{ color: theme.separator }}
            >
                /
            </span>
            <span>{label}</span>
        </p>
    )
}

export function MobileSectionMarker({ index, label, theme }) {
    return (
        <p
            className="flex items-center gap-3 font-mono text-[0.68rem] tracking-wide"
            style={{ color: theme.marker }}
        >
            <span style={{ color: theme.accent }}>{index}</span>
            <span aria-hidden="true" style={{ color: theme.separator }}>
                /
            </span>
            <span>{label}</span>
        </p>
    )
}

export function MobileNumberChip({ id, theme, filled = false }) {
    return (
        <span
            aria-hidden="true"
            className="absolute left-7 top-5 z-10 flex h-6 min-w-9 -translate-x-1/2 items-center justify-center border px-2 font-mono text-[0.62rem]"
            style={{
                backgroundColor: filled
                    ? theme.chip.fill
                    : theme.chip.background,
                borderColor: filled
                    ? theme.chip.filledBorder
                    : theme.chip.idleBorder,
                color: filled
                    ? theme.chip.filledText
                    : theme.chip.idleText,
            }}
        >
            {id}
        </span>
    )
}

export function AxisGuide({ className = "", style }) {
    return (
        <span
            aria-hidden="true"
            className={`pointer-events-none absolute inset-y-0 left-[62%] block w-px ${className}`}
            style={style}
        />
    )
}

export function EditorialHeader({
    headingId,
    index,
    label,
    title,
    description,
    activeIndex,
    total,
    theme,
    staticMode,
    statusValue,
    statusLabel = "In focus",
}) {
    const visibleCount = staticMode ? total : Math.min(activeIndex + 1, total)

    return (
        <header
            className="relative grid h-[clamp(10.5rem,20vh,12.5rem)] shrink-0 grid-cols-[62%_38%] border-b"
            style={{ borderColor: theme.rule }}
        >
            <AxisGuide
                className="z-10"
                style={{ backgroundColor: theme.guide }}
            />

            <div className="relative pr-12">
                <div className="absolute left-0 top-0">
                    <SectionMarker index={index} label={label} theme={theme} />
                </div>

                <h2
                    id={headingId}
                    className="absolute bottom-7 left-0 text-[clamp(2.35rem,2.9vw,3.7rem)] font-extrabold leading-[0.98] tracking-[-0.055em]"
                    style={{ color: theme.text }}
                >
                    {title.map((line) => (
                        <span key={line} className="block">
                            {line}
                        </span>
                    ))}
                </h2>
            </div>

            <div className="pointer-events-none relative">
                <p
                    className="absolute right-0 top-0 font-mono text-xs uppercase tracking-wide"
                    style={{ color: theme.secondary }}
                    aria-label={
                        (statusValue && `${statusLabel} ${statusValue}`) ??
                        `${statusLabel}, ${visibleCount} of ${total}`
                    }
                >
                    {statusValue ? (
                        <>
                            <span>{statusLabel}</span>
                            <span className="ml-2 font-semibold">
                                {statusValue}
                            </span>
                        </>
                    ) : (
                        <>
                            {statusLabel}
                            <span className="ml-4 font-semibold">
                                {formatCount(visibleCount)} / {formatCount(total)}
                            </span>
                        </>
                    )}
                </p>

                <p
                    className="absolute bottom-7 right-0 max-w-[32rem] pl-12 text-right text-base leading-relaxed"
                    style={{ color: theme.secondary }}
                >
                    {description}
                </p>
            </div>
        </header>
    )
}

function AnimatedChipContent({ id, filled, theme }) {
    return (
        <>
            <motion.span
                className="absolute inset-0 z-0 origin-top"
                style={{ backgroundColor: theme.chip.fill }}
                initial={false}
                animate={{ scaleY: filled ? 1 : 0 }}
                transition={CHIP_FILL_TRANSITION}
            />
            <motion.span
                className="relative z-10"
                initial={false}
                animate={{
                    color: filled
                        ? theme.chip.filledText
                        : theme.chip.idleText,
                }}
                transition={CHIP_TEXT_TRANSITION}
            >
                {id}
            </motion.span>
        </>
    )
}

export const AxisChip = memo(function AxisChip({ id, state, theme }) {
    const filled = state === "active" || state === "complete"

    return (
        <span
            aria-hidden="true"
            className="absolute left-[62%] top-1/2 z-20 flex h-6 min-w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden border px-2 font-mono text-[0.62rem]"
            style={{
                backgroundColor: theme.chip.background,
                borderColor: filled
                    ? theme.chip.filledBorder
                    : theme.chip.idleBorder,
            }}
        >
            <AnimatedChipContent id={id} filled={filled} theme={theme} />
        </span>
    )
})

export function ActiveAxisSegment({ position, theme, visible = true }) {
    return (
        <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute left-[62%] top-0 z-[15] block w-px"
            style={{ backgroundColor: theme.accent }}
            initial={false}
            animate={{
                y: position.top,
                height: position.height,
                opacity: visible && position.ready ? 1 : 0,
            }}
            transition={ACTIVE_TRACK_TRANSITION}
        />
    )
}

export function LayerShell({
    children,
    labelledBy,
    theme,
    style,
    staticMode,
    layerClassName,
}) {
    return (
        <motion.article
            aria-labelledby={labelledBy}
            style={{
                ...style,
                backgroundColor: theme.surface,
                color: theme.text,
            }}
            className={`${staticMode ? "relative" : "absolute inset-0 h-full overflow-hidden"} ${layerClassName}`}
        >
            <div
                className={`container-main flex flex-col pb-[clamp(1.25rem,2.4vw,2.85rem)] pt-[clamp(2rem,5vh,3rem)] ${
                    staticMode ? "h-svh min-h-svh" : "h-full"
                }`}
            >
                {children}
            </div>
        </motion.article>
    )
}
