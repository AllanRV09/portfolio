import { useRef } from "react";
import { motion } from "framer-motion";

import { useFitText } from "../hooks/useFitText";
import { RollingText } from "./RollingText";

const HERO_NAME = "Allan Rodriguez";
const MEASUREMENT_FONT_SIZE = 100;

const SMOOTH_EASE = [0.16, 1, 0.3, 1];

const titleRiseVariants = {
    hidden: {
        y: "132%",
    },
    visible: {
        y: "0%",
        transition: {
            delay: 0.3,
            duration: 1.3,
            ease: SMOOTH_EASE,
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
            <h1
                className="
                    flex flex-col gap-[0.08em]
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
                <span
                    className="
                        -my-[0.18em] block
                        overflow-y-clip py-[0.18em]
                    "
                >
                    <motion.span
                        variants={titleRiseVariants}
                        className="block"
                    >
                        Allan
                    </motion.span>
                </span>

                <span
                    className="
                        -my-[0.18em] block
                        overflow-y-clip py-[0.18em]
                    "
                >
                    <motion.span
                        variants={titleRiseVariants}
                        className="block"
                    >
                        Rodriguez
                    </motion.span>
                </span>
            </h1>

            <div
                ref={nameFrameRef}
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
                            -my-[0.18em] py-[0.18em]
                            inline-block flex-none
                            overflow-y-clip
                            text-[18vw]
                        "
                    >
                        <motion.span
                            variants={titleRiseVariants}
                            className="block"
                        >
                            <RollingText text={HERO_NAME} />
                        </motion.span>
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
                        <RollingText
                            text={HERO_NAME}
                            disabled
                        />
                    </span>
                </h1>
            </div>
        </>
    );
}
