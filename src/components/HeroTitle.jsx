import { useRef } from "react";
import { motion } from "framer-motion";

import { useFitText } from "../hooks/useFitText";
import { RollingText } from "./RollingText";

const HERO_NAME = "Allan Rodriguez";
const MEASUREMENT_FONT_SIZE = 100;

const EASE_OUT = [0.22, 1, 0.36, 1];

const titleVariants = {
    hidden: {
        opacity: 0,
        y: 80,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: EASE_OUT,
        },
    },
};

export function HeroTitle() {
    const nameFrameRef = useRef(null);
    const nameRef = useRef(null);
    const nameMeasureRef = useRef(null);

    useFitText({
        frameRef: nameFrameRef,
        textRef: nameRef,
        measureRef: nameMeasureRef,
        text: HERO_NAME,
        measurementFontSize: MEASUREMENT_FONT_SIZE,
        fontWeight: 800,
        fontFamily: "MangoGrotesque",
    });

    return (
        <>
            <motion.h1
                variants={titleVariants}
                className="
                    font-hero
                    text-[clamp(5.75rem,24vw,7.5rem)]
                    font-extrabold uppercase
                    leading-[0.80]
                    tracking-[-0.015em]
                    [font-synthesis:none]

                    sm:text-[clamp(8rem,22vw,10.5rem)]
                    md:hidden
                "
            >
                <span className="block">
                    Allan
                </span>

                <span className="mt-[0.08em] block">
                    Rodriguez
                </span>
            </motion.h1>

            <motion.div
                ref={nameFrameRef}
                variants={titleVariants}
                className="
                    hidden
                    w-full min-w-0
                    overflow-x-clip
                    md:block
                "
            >
                <h1
                    aria-label={HERO_NAME}
                    className="
                        relative flex w-full justify-center
                        whitespace-nowrap
                        font-hero font-extrabold uppercase
                        leading-[0.78]
                        [font-synthesis:none]
                    "
                >
                    <span
                        ref={nameRef}
                        className="
                            inline-block flex-none
                            text-[18vw]
                        "
                    >
                        <RollingText text={HERO_NAME} />
                    </span>

                    <span
                        ref={nameMeasureRef}
                        aria-hidden="true"
                        className="
                            pointer-events-none
                            invisible absolute
                            inline-block flex-none
                            whitespace-nowrap
                            text-[100px]
                        "
                    >
                        {HERO_NAME}
                    </span>
                </h1>
            </motion.div>
        </>
    );
}