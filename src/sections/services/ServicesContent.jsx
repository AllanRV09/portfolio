import { useRef } from "react"
import { motion } from "framer-motion"
import { SERVICES_ITEMS, SERVICES_SECTION } from "./servicesConfig"
import { useIndicatorPosition } from "../services-stack/hooks"
import {
    ActiveAxisSegment,
    AxisChip,
    AxisGuide,
} from "../services-stack/SectionUi"

const CONTENT_MASK_TRANSITION = {
    duration: 0.2,
    ease: [0.22, 1, 0.36, 1],
}

function MaskedContent({ hidden, className = "", children }) {
    return (
        <motion.div
            className={className}
            initial={false}
            animate={{
                clipPath: hidden
                    ? "inset(110% 0 -10% 0)"
                    : "inset(0% 0 -10% 0)",
            }}
            transition={CONTENT_MASK_TRANSITION}
            style={{ willChange: "clip-path" }}
        >
            {children}
        </motion.div>
    )
}

function ServicesList({ activeIndex, staticMode, rowRefs, theme }) {
    return (
        <div className="relative min-h-0 flex-[3_1_0%]">
            <AxisGuide
                className="z-10"
                style={{ backgroundColor: theme.guide }}
            />

            <ol className="flex h-full flex-col">
                {SERVICES_ITEMS.map((item, index) => {
                    const isActive = !staticMode && index === activeIndex
                    const isPast = !staticMode && index < activeIndex
                    const isReached = staticMode || index <= activeIndex

                    return (
                        <li
                            key={item.id}
                            ref={(element) => {
                                rowRefs.current[index] = element
                            }}
                            aria-current={isActive ? "step" : undefined}
                            className="relative grid min-h-0 flex-1 grid-cols-[62%_38%] border-b"
                            style={{ borderColor: theme.rule }}
                        >
                            <AxisChip
                                id={item.id}
                                state={
                                    isActive
                                        ? "active"
                                        : index < activeIndex
                                          ? "complete"
                                          : "idle"
                                }
                                theme={theme}
                            />

                            <div className="flex min-w-0 items-center py-2 pr-12">
                                <MaskedContent
                                    hidden={isPast}
                                    className="ml-auto"
                                >
                                    <h3
                                        className="text-right text-[clamp(1.55rem,2vw,2.4rem)] font-semibold leading-none tracking-[-0.04em] transition-colors duration-[100ms]"
                                        style={{
                                            color: isReached
                                                ? theme.text
                                                : theme.labelMuted,
                                        }}
                                    >
                                        {item.title}
                                    </h3>
                                </MaskedContent>
                            </div>

                            <div className="flex min-w-0 items-center pl-12">
                                <MaskedContent
                                    hidden={isPast}
                                    className="max-w-[34rem]"
                                >
                                    <p
                                        className="text-sm leading-relaxed transition-colors duration-300"
                                        style={{
                                            color: isReached
                                                ? theme.bodyStrong
                                                : theme.bodyMuted,
                                        }}
                                    >
                                        {item.description}
                                    </p>
                                </MaskedContent>
                            </div>
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}

function SystemSummary({ focused, completed, rowRef, theme }) {
    return (
        <div
            ref={rowRef}
            className="relative grid min-h-0 flex-1 grid-cols-[62%_38%] border-b"
            style={{ borderColor: theme.rule }}
        >
            <AxisGuide
                className="z-[5]"
                style={{ backgroundColor: theme.guide }}
            />
            <AxisChip
                id="+"
                state={focused ? "active" : completed ? "complete" : "idle"}
                theme={theme}
            />

            <div className="flex items-center justify-end pr-12">
                <MaskedContent
                    hidden={completed}
                    className="max-w-[24rem] text-right"
                >
                    <p
                        className="font-mono text-[0.62rem] uppercase tracking-[0.18em] transition-colors duration-200"
                        style={{
                            color: focused
                                ? theme.accent
                                : theme.summaryText,
                        }}
                    >
                        {SERVICES_SECTION.summary.interface.title}
                    </p>
                    <p
                        className="mt-2 text-sm leading-relaxed"
                        style={{ color: theme.summaryText }}
                    >
                        {SERVICES_SECTION.summary.interface.description}
                    </p>
                </MaskedContent>
            </div>

            <div className="flex items-center pl-12">
                <MaskedContent
                    hidden={completed}
                    className="max-w-[25rem]"
                >
                    <p
                        className="font-mono text-[0.62rem] uppercase tracking-[0.18em] transition-colors duration-200"
                        style={{
                            color: focused
                                ? theme.accent
                                : theme.summaryText,
                        }}
                    >
                        {SERVICES_SECTION.summary.system.title}
                    </p>
                    <p
                        className="mt-2 text-sm leading-relaxed"
                        style={{ color: theme.summaryText }}
                    >
                        {SERVICES_SECTION.summary.system.description}
                    </p>
                </MaskedContent>
            </div>
        </div>
    )
}

export function ServicesContent({
    activeIndex,
    staticMode,
    summaryFocused,
    theme,
}) {
    const bodyRef = useRef(null)
    const rowRefs = useRef([])
    const summaryIndex = SERVICES_ITEMS.length
    const summaryCompleted = !staticMode && activeIndex > summaryIndex
    const measuredIndex = Math.min(activeIndex, summaryIndex)
    const indicatorPosition = useIndicatorPosition(
        measuredIndex,
        bodyRef,
        rowRefs,
    )

    return (
        <div ref={bodyRef} className="relative flex min-h-0 flex-1 flex-col">
            {!staticMode && (
                <ActiveAxisSegment
                    position={indicatorPosition}
                    theme={theme}
                    visible={!summaryCompleted}
                />
            )}
            <ServicesList
                activeIndex={activeIndex}
                staticMode={staticMode}
                rowRefs={rowRefs}
                theme={theme}
            />
            <SystemSummary
                focused={summaryFocused}
                completed={summaryCompleted}
                theme={theme}
                rowRef={(element) => {
                    rowRefs.current[summaryIndex] = element
                }}
            />
        </div>
    )
}
