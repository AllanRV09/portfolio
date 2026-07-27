import { memo, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ACTIVE_TRACK_TRANSITION } from "../services-stack/theme"
import { useIndicatorPosition } from "../services-stack/hooks"
import {
    ActiveAxisSegment,
    AxisChip,
    AxisGuide,
} from "../services-stack/SectionUi"
import { STACK_ITEMS } from "./stackConfig"
import { TechPills } from "./TechPills"

function ActiveStackMeta({ item, position }) {
    return (
        <motion.div
            className="pointer-events-none absolute left-0 top-0 z-[25] block w-[20rem]"
            initial={false}
            animate={{ y: position.center }}
            transition={ACTIVE_TRACK_TRANSITION}
        >
            <div className="-translate-y-1/2 overflow-hidden py-5">
                {position.ready && (
                    <div className="font-mono text-[0.58rem] uppercase leading-relaxed opacity-90">
                        {item.meta.map((meta) => (
                            <p key={meta}>[ {meta} ]</p>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    )
}

const HoverBoundaryLines = memo(function HoverBoundaryLines({
    visible,
    theme,
}) {
    return [0, 1].map((edge) => (
        <motion.span
            key={edge}
            aria-hidden="true"
            className={`pointer-events-none absolute inset-x-0 z-[18] h-px ${
                edge === 0 ? "-top-px" : "-bottom-px"
            }`}
            style={{
                backgroundColor: theme.accent,
                transformOrigin: "62% 50%",
            }}
            initial={false}
            animate={{ scaleX: visible ? 1 : 0 }}
            transition={{
                duration: 0.38,
                ease: [0.22, 1, 0.36, 1],
            }}
        />
    ))
})

export function StackContent({ activeIndex, staticMode, theme }) {
    const listRef = useRef(null)
    const rowRefs = useRef([])
    const [previewIndex, setPreviewIndex] = useState(null)
    const measuredIndex = Math.min(activeIndex, STACK_ITEMS.length - 1)
    const visualIndex = previewIndex ?? measuredIndex
    const indicatorPosition = useIndicatorPosition(visualIndex, listRef, rowRefs)
    const hasPreview = previewIndex !== null

    return (
        <div ref={listRef} className="relative min-h-0 flex-1">
            <AxisGuide
                className="z-10"
                style={{ backgroundColor: theme.guide }}
            />

            {!staticMode && (
                <>
                    <ActiveAxisSegment
                        position={indicatorPosition}
                        theme={theme}
                    />
                    <ActiveStackMeta
                        item={STACK_ITEMS[visualIndex]}
                        position={indicatorPosition}
                    />
                </>
            )}

            <ol className="flex h-full flex-col">
                {STACK_ITEMS.map((item, index) => {
                    const isActive = !staticMode && index === activeIndex
                    const isCompleted = !staticMode && index < activeIndex
                    const isPreviewed =
                        !staticMode && previewIndex === index
                    const isVisuallyFocused =
                        staticMode || (hasPreview ? isPreviewed : isActive)
                    const showDetails = isVisuallyFocused

                    return (
                        <li
                            key={item.id}
                            ref={(element) => {
                                rowRefs.current[index] = element
                            }}
                            aria-current={isActive ? "step" : undefined}
                            tabIndex={staticMode ? undefined : 0}
                            onMouseEnter={
                                staticMode
                                    ? undefined
                                    : () => setPreviewIndex(index)
                            }
                            onMouseLeave={
                                staticMode
                                    ? undefined
                                    : () => setPreviewIndex(null)
                            }
                            onFocus={
                                staticMode
                                    ? undefined
                                    : () => setPreviewIndex(index)
                            }
                            onBlur={
                                staticMode
                                    ? undefined
                                    : () => setPreviewIndex(null)
                            }
                            className="relative grid min-h-0 flex-1 grid-cols-[62%_38%] border-b bg-transparent outline-none"
                            style={{ borderColor: theme.rule }}
                        >
                            <HoverBoundaryLines
                                visible={isPreviewed}
                                theme={theme}
                            />

                            <AxisChip
                                id={item.id}
                                state={
                                    isVisuallyFocused
                                        ? "active"
                                        : index <= activeIndex
                                          ? "complete"
                                          : "idle"
                                }
                                theme={theme}
                            />

                            <div className="flex min-w-0 items-center py-2 pr-12">
                                <div className="flex w-full items-center justify-between gap-8">
                                    {staticMode && (
                                        <div className="max-w-[20rem] font-mono text-[0.58rem] uppercase leading-relaxed opacity-90">
                                            {item.meta.map((meta) => (
                                                <p key={meta}>[ {meta} ]</p>
                                            ))}
                                        </div>
                                    )}

                                    <h3
                                        className="ml-auto text-right text-[clamp(1.55rem,2.15vw,2.6rem)] font-semibold leading-none tracking-[-0.045em] transition-colors duration-[100ms]"
                                        style={{
                                            color: isVisuallyFocused
                                                ? theme.text
                                                : isCompleted
                                                  ? theme.rowCompleted
                                                  : theme.rowMuted,
                                        }}
                                    >
                                        {item.title}
                                    </h3>
                                </div>
                            </div>

                            <div className="flex min-w-0 items-center gap-8 pl-12">
                                <div className="min-w-0">
                                    <p
                                        className="font-mono text-[0.65rem] uppercase tracking-wide transition-colors"
                                        style={{
                                            color: isVisuallyFocused
                                                ? theme.labelStrong
                                                : isCompleted
                                                  ? theme.labelCompleted
                                                  : theme.labelMuted,
                                        }}
                                    >
                                        {item.category}
                                    </p>
                                    <div
                                        aria-hidden={!showDetails}
                                        className={`grid transition-[grid-template-rows,opacity,margin] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                                            showDetails
                                                ? "mt-2 grid-rows-[1fr] opacity-100"
                                                : "mt-0 grid-rows-[0fr] opacity-0"
                                        }`}
                                    >
                                        <div className="max-w-[34rem] overflow-hidden">
                                            <TechPills
                                                technologies={item.technologies}
                                                theme={theme}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}
