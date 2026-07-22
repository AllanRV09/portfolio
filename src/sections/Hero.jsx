import { motion } from "framer-motion";

import {
    LuArrowDownRight,
    LuBriefcaseBusiness,
    LuChevronsDown,
    LuGlobe,
} from "react-icons/lu";

import { HeroBackground } from "../components/HeroBackground";
import { HeroTitle } from "../components/HeroTitle";

const EASE_OUT = [0.22, 1, 0.36, 1];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            delayChildren: 0.15,
            staggerChildren: 0.12,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 48,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: EASE_OUT,
        },
    },
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

function ScrollHint({ className = "" }) {
    return (
        <motion.a
            variants={itemVariants}
            href="#about"
            aria-label="Scroll down to the about section"
            className={`flex flex-col items-center gap-1 text-text transition-opacity hover:opacity-60 ${className}`}
        >
            <LuChevronsDown
                aria-hidden="true"
                className="size-6 stroke-[1.25]"
            />

            <span className="text-[0.65rem] uppercase tracking-wide">
                Scroll down
            </span>
        </motion.a>
    );
}

export function Hero() {
    return (
        <section
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
                variants={containerVariants}
                className="relative z-10 w-full min-w-0"
            >
                <motion.p
                    variants={itemVariants}
                    className="
                        mb-3
                        font-sans
                        text-[0.625rem]
                        font-semibold uppercase
                        leading-none
                        tracking-[0.18em]

                        md:mb-[clamp(1rem,2vw,2rem)]
                        md:text-[clamp(0.625rem,0.85vw,0.8rem)]
                    "
                >
                    Full-Stack Developer
                </motion.p>

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
                    <motion.div
                        variants={itemVariants}
                        className="
                            max-w-[22rem]
                            sm:max-md:col-span-2
                        "
                    >
                        <LuArrowDownRight
                            aria-hidden="true"
                            className="
                                hidden opacity-40
                                md:mb-8 md:block md:size-10
                                lg:size-12
                            "
                        />

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
                    </motion.div>

                    <ScrollHint className="hidden justify-self-center md:flex" />

                    <motion.div
                        variants={itemVariants}
                        className="flex w-full flex-col gap-3 sm:w-[26rem] sm:max-w-full sm:max-md:col-start-1 sm:max-md:row-start-2 md:w-[20rem] md:justify-self-end md:translate-x-[calc(var(--hero-x)+2rem)] lg:w-[22rem]"
                    >
                        {STATUS_ITEMS.map((item) => (
                            <StatusPill
                                key={item.lines.join("-")}
                                {...item}
                            />
                        ))}
                    </motion.div>

                    <ScrollHint className="mt-2 sm:max-md:col-start-2 sm:max-md:row-start-2 sm:max-md:mt-0 sm:max-md:self-end sm:max-md:justify-self-end sm:max-md:pb-1 md:hidden" />
                </div>
            </motion.div>
        </section>
    );
}
