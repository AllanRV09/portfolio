import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import {
    LuArrowDownRight,
    LuBriefcaseBusiness,
    LuChevronsDown,
    LuGlobe,
} from "react-icons/lu";

import { HeroBackground } from "../components/HeroBackground";
import { HeroTitle } from "../components/HeroTitle";

const SMOOTH_EASE = [0.16, 1, 0.3, 1];
const REST_REVEAL_DELAY = 0.6;
const REVEAL_STEP_DELAY = 0.12;
const EXIT_END = 0.65;

const REVEAL_DELAYS = {
    eyebrow: REST_REVEAL_DELAY,
    description: REST_REVEAL_DELAY + REVEAL_STEP_DELAY,
    scrollHint: REST_REVEAL_DELAY + REVEAL_STEP_DELAY * 2,
    status: REST_REVEAL_DELAY + REVEAL_STEP_DELAY * 3,
};

const getSmoothTransition = (delay, duration) => ({
    delay,
    duration,
    ease: SMOOTH_EASE,
});

const revealRiseVariants = {
    hidden: {
        y: "115%",
    },
    visible: (delay = REST_REVEAL_DELAY) => ({
        y: "0%",
        transition: getSmoothTransition(delay, 1.1),
    }),
};

const fadeVariants = {
    hidden: {
        opacity: 0,
    },
    visible: (delay = REST_REVEAL_DELAY) => ({
        opacity: 1,
        transition: getSmoothTransition(delay, 0.8),
    }),
};

const curtainRevealVariants = {
    hidden: {
        clipPath: "inset(0 100% 0 0 round 9999px)",
    },
    visible: (delay = REST_REVEAL_DELAY) => ({
        clipPath: "inset(0 0% 0 0 round 9999px)",
        transition: getSmoothTransition(delay, 0.95),
    }),
};

const mobilePillVariants = {
    hidden: {
        opacity: 0,
        y: 10,
    },
    visible: (delay = REST_REVEAL_DELAY) => ({
        opacity: 1,
        y: 0,
        transition: getSmoothTransition(delay, 0.8),
    }),
};

const STATUS_ITEMS = [
    {
        icon: LuBriefcaseBusiness,
        lines: ["Available", "for work"],
    },
    {
        icon: LuGlobe,
        lines: ["Based in", "Costa Rica"],
    },
];

function StatusPill({ icon: Icon, lines }) {
    return (
        <div className="flex min-h-[4.25rem] w-full items-center rounded-full bg-background py-2 pl-2.5 pr-5 text-surface md:min-h-[5rem] md:rounded-l-full md:rounded-r-none md:pl-3 md:pr-12">
            <span className="grid size-12 shrink-0 place-items-center rounded-full bg-surface text-background md:size-14 lg:size-16">
                <Icon
                    aria-hidden="true"
                    className="size-6 stroke-[1.5] md:size-7"
                />
            </span>

            <span className="ml-4 text-[0.75rem] font-medium uppercase leading-[1.05] md:ml-5 md:text-[clamp(0.8rem,1vw,1rem)]">
                {lines[0]}
                <br />
                {lines[1]}
            </span>
        </div>
    );
}

function Reveal({
    children,
    delay = REST_REVEAL_DELAY,
    className = "",
}) {
    return (
        <div className={`overflow-y-clip ${className}`}>
            <motion.div
                variants={revealRiseVariants}
                custom={delay}
            >
                {children}
            </motion.div>
        </div>
    );
}

function StatusPillGroup({ variants, className }) {
    return (
        <div className={className}>
            {STATUS_ITEMS.map((item) => (
                <motion.div
                    key={item.lines.join("-")}
                    variants={variants}
                    custom={REVEAL_DELAYS.status}
                >
                    <StatusPill {...item} />
                </motion.div>
            ))}
        </div>
    );
}

function ScrollHint({ delay = REST_REVEAL_DELAY, className = "" }) {
    return (
        <motion.div
            variants={fadeVariants}
            custom={delay}
            aria-hidden="true"
            className={`pointer-events-none flex select-none flex-col items-center gap-1 text-text ${className}`}
        >
            <LuChevronsDown
                aria-hidden="true"
                className="size-6 stroke-[1.25]"
            />

            <span className="text-[0.65rem] uppercase tracking-wide">
                Scroll down
            </span>
        </motion.div>
    );
}

export function Hero() {
    const sectionRef = useRef(null);

    const { scrollY } = useScroll();
    const exitProgress = useTransform(scrollY, (currentScroll) => {
        const sectionHeight =
            sectionRef.current?.offsetHeight ?? window.innerHeight;

        return Math.min(Math.max(currentScroll / sectionHeight, 0), 1);
    });

    const exitY = useTransform(
        exitProgress,
        [0, EXIT_END],
        [0, 56],
    );
    const exitOpacity = useTransform(
        exitProgress,
        [0, EXIT_END],
        [1, 0],
    );
    const exitScale = useTransform(
        exitProgress,
        [0, EXIT_END],
        [1, 0.96],
    );

    const exitStyles = {
        y: exitY,
        opacity: exitOpacity,
        scale: exitScale,
    };

    return (
        <section
            ref={sectionRef}
            id="hero"
            className="
                relative sticky top-0 z-0
                flex min-h-svh items-end
                overflow-hidden
                bg-surface text-background

                [--hero-x:clamp(1.5rem,3.25vw,4rem)]

                px-6
                pb-8
                pt-32

                md:px-[var(--hero-x)]
                md:pb-[5.5rem]
            "
        >
            <HeroBackground />

            <motion.div
                initial="hidden"
                animate="visible"
                style={exitStyles}
                className="relative z-10 w-full min-w-0"
            >
                <Reveal
                    delay={REVEAL_DELAYS.eyebrow}
                    className="
                        mb-3
                        md:mb-[clamp(1rem,2vw,2rem)]
                    "
                >
                    <p
                        className="
                            font-sans
                            text-[0.625rem]
                            font-semibold uppercase
                            leading-none
                            tracking-[0.18em]

                            md:text-[clamp(0.625rem,0.85vw,0.8rem)]
                        "
                    >
                        Full-Stack Developer
                    </p>
                </Reveal>

                <HeroTitle />

                <div
                    className="
                        mt-8
                        grid gap-6

                        sm:max-md:grid-cols-[26rem_minmax(0,1fr)]
                        sm:max-md:items-end
                        sm:max-md:gap-x-8

                        md:mt-[clamp(2.5rem,6vh,5rem)]
                        md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]
                        md:items-end
                        md:gap-10
                    "
                >
                    <div
                        className="
                            max-w-[22rem]
                            sm:max-md:col-span-2
                        "
                    >
                        <motion.div
                            variants={fadeVariants}
                            custom={REVEAL_DELAYS.description}
                            className="
                                hidden
                                md:mb-8 md:block
                            "
                        >
                            <LuArrowDownRight
                                aria-hidden="true"
                                className="
                                    opacity-40
                                    md:size-10
                                    lg:size-12
                                "
                            />
                        </motion.div>

                        <Reveal
                            delay={REVEAL_DELAYS.description}
                        >
                            <p
                                className="
                                    font-sans
                                    text-base
                                    leading-[1.35]
                                    tracking-[-0.025em]

                                    md:text-[clamp(1rem,1.35vw,1.35rem)]
                                "
                            >
                                Hi! I'm Allan. A Full-Stack Developer who
                                loves turning complex problems into simple,
                                well-crafted web experiences.
                            </p>
                        </Reveal>
                    </div>

                    <ScrollHint
                        delay={REVEAL_DELAYS.scrollHint}
                        className="hidden justify-self-center md:flex"
                    />

                    <div className="w-full sm:w-[26rem] sm:max-w-full sm:max-md:col-start-1 sm:max-md:row-start-2 md:w-[20rem] md:justify-self-end md:translate-x-[calc(var(--hero-x)+2rem)] lg:w-[22rem]">
                        <StatusPillGroup
                            variants={mobilePillVariants}
                            className="flex flex-col gap-3 md:hidden"
                        />

                        <StatusPillGroup
                            variants={curtainRevealVariants}
                            className="hidden flex-col gap-3 md:flex"
                        />
                    </div>

                    <ScrollHint
                        delay={REVEAL_DELAYS.scrollHint}
                        className="mt-2 sm:max-md:col-start-2 sm:max-md:row-start-2 sm:max-md:mt-0 sm:max-md:self-end sm:max-md:justify-self-end sm:max-md:pb-1 md:hidden"
                    />
                </div>
            </motion.div>
        </section>
    );
}
