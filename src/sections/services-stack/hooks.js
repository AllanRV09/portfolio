import { useCallback, useEffect, useRef, useState } from "react"
import { useMotionValueEvent } from "framer-motion"

const clamp = (value, min, max) => Math.min(Math.max(value, min), max)

const getScrollIndex = (normalized, count, finalStepRatio) => {
    const hasWeightedFinalStep =
        count > 1 &&
        finalStepRatio > 0 &&
        finalStepRatio < 1

    if (!hasWeightedFinalStep) {
        return Math.floor(normalized * count)
    }

    const finalIndex = count - 1
    const finalStepStart = 1 - finalStepRatio

    if (normalized >= finalStepStart) return finalIndex

    return Math.floor((normalized / finalStepStart) * finalIndex)
}

export function useScrollIndex(
    scrollYProgress,
    start,
    end,
    count,
    enabled,
    { finalStepRatio } = {},
) {
    const [activeIndex, setActiveIndex] = useState(0)
    const activeIndexRef = useRef(0)

    const updateIndex = useCallback(
        (latest) => {
            if (!enabled) return

            const normalized = clamp(
                (latest - start) / (end - start),
                0,
                0.999,
            )
            const nextIndex = getScrollIndex(
                normalized,
                count,
                finalStepRatio,
            )

            if (nextIndex !== activeIndexRef.current) {
                activeIndexRef.current = nextIndex
                setActiveIndex(nextIndex)
            }
        },
        [count, enabled, end, finalStepRatio, start],
    )

    useMotionValueEvent(scrollYProgress, "change", updateIndex)

    useEffect(() => {
        updateIndex(scrollYProgress.get())
    }, [scrollYProgress, updateIndex])

    return activeIndex
}

export function useIndicatorPosition(activeIndex, listRef, rowRefs) {
    const [position, setPosition] = useState({
        top: 0,
        height: 0,
        center: 0,
        ready: false,
    })

    useEffect(() => {
        let frameId

        const measure = () => {
            cancelAnimationFrame(frameId)
            frameId = requestAnimationFrame(() => {
                const list = listRef.current
                const row = rowRefs.current[activeIndex]

                if (!list || !row) return

                const listRect = list.getBoundingClientRect()
                const rowRect = row.getBoundingClientRect()
                const nextTop = rowRect.top - listRect.top
                const nextHeight = rowRect.height
                const nextCenter = nextTop + nextHeight / 2

                setPosition((current) => {
                    const isUnchanged =
                        current.ready &&
                        Math.abs(current.top - nextTop) <= 0.5 &&
                        Math.abs(current.height - nextHeight) <= 0.5

                    if (isUnchanged) return current

                    return {
                        top: nextTop,
                        height: nextHeight,
                        center: nextCenter,
                        ready: true,
                    }
                })
            })
        }

        measure()

        const observer =
            typeof ResizeObserver === "undefined"
                ? null
                : new ResizeObserver(measure)

        if (listRef.current) observer?.observe(listRef.current)
        rowRefs.current.forEach((row) => {
            if (row) observer?.observe(row)
        })
        window.addEventListener("resize", measure)

        return () => {
            cancelAnimationFrame(frameId)
            observer?.disconnect()
            window.removeEventListener("resize", measure)
        }
    }, [activeIndex, listRef, rowRefs])

    return position
}
