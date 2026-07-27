import { useRef } from "react"
import {
    useReducedMotion,
    useScroll,
    useTransform,
} from "framer-motion"
import { useMediaQuery } from "../../hooks/useMediaQuery"
import { MobileServices } from "../services/MobileServices"
import { ServicesSection } from "../services/ServicesSection"
import {
    SERVICES_SCROLL_STEP_COUNT,
} from "../services/servicesConfig"
import { MobileStack } from "../stack/MobileStack"
import { StackSection } from "../stack/StackSection"
import { STACK_ITEMS, stackTheme } from "../stack/stackConfig"
import { useScrollIndex } from "./hooks"
import {
    DESKTOP_SECTION_HEIGHT_VH,
    TIMELINE,
} from "./timeline"

const STACK_ANCHOR_OFFSET_VH =
    (DESKTOP_SECTION_HEIGHT_VH - 100) * TIMELINE.curtainEnd

function MobileServicesStack() {
    return (
        <section id="services-stack" data-theme="dark" className="relative z-20">
            <MobileServices />
            <MobileStack />
        </section>
    )
}

function DesktopServicesStack() {
    const containerRef = useRef(null)
    const prefersReducedMotion = useReducedMotion()
    const useStaticLayout = prefersReducedMotion

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    })

    const servicesClipPath = useTransform(scrollYProgress, (latest) => {
        const curtainProgress = Math.min(
            Math.max(
                (latest - TIMELINE.servicesEnd) /
                    (TIMELINE.curtainEnd - TIMELINE.servicesEnd),
                0,
            ),
            1,
        )

        return `inset(${curtainProgress * 100}% 0% 0% 0%)`
    })
    const servicesVisibility = useTransform(
        scrollYProgress,
        (latest) =>
            latest >= TIMELINE.curtainEnd ? "hidden" : "visible",
    )
    const servicesIndex = useScrollIndex(
        scrollYProgress,
        0,
        TIMELINE.servicesEnd,
        SERVICES_SCROLL_STEP_COUNT,
        !useStaticLayout,
        { finalStepRatio: TIMELINE.servicesResolvedShare },
    )
    const stackIndex = useScrollIndex(
        scrollYProgress,
        TIMELINE.curtainEnd,
        TIMELINE.stackEnd,
        STACK_ITEMS.length,
        !useStaticLayout,
    )

    if (useStaticLayout) {
        return (
            <section
                ref={containerRef}
                id="services-stack"
                data-theme="dark"
                style={{ backgroundColor: stackTheme.surface }}
                className="relative z-20"
            >
                <ServicesSection activeIndex={0} staticMode />
                <StackSection activeIndex={0} staticMode />
            </section>
        )
    }

    return (
        <section
            ref={containerRef}
            id="services-stack"
            data-theme="dark"
            style={{
                backgroundColor: stackTheme.surface,
                height: `${DESKTOP_SECTION_HEIGHT_VH}vh`,
            }}
            className="relative z-20"
        >
            <span
                id="services"
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-0"
            />
            <span
                id="stack"
                aria-hidden="true"
                className="pointer-events-none absolute left-0"
                style={{ top: `${STACK_ANCHOR_OFFSET_VH}vh` }}
            />
            <div
                style={{ backgroundColor: stackTheme.surface }}
                className="sticky top-0 isolate h-svh overflow-hidden"
            >
                <ServicesSection
                    activeIndex={servicesIndex}
                    clipPath={servicesClipPath}
                    visibility={servicesVisibility}
                />
                <StackSection activeIndex={stackIndex} />
            </div>
        </section>
    )
}

export function ServicesStack() {
    const isMobile = useMediaQuery("(max-width: 767px)")

    return isMobile ? <MobileServicesStack /> : <DesktopServicesStack />
}
