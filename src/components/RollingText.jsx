import { useEffect, useRef, useState } from "react";
import {
    animate,
    motion,
    useMotionValue,
} from "framer-motion";

const EASE_OUT = [0.22, 1, 0.36, 1];

const ROLLING_GAP = 0.14;
const ROLLING_DURATION = 0.9;
const RESET_DELAY = 100;

function RollingLetter({ character, disabled = false }) {
    const letterRef = useRef(null);
    const animationRunRef = useRef(0);
    const animationControlsRef = useRef(null);

    const x = useMotionValue(0);

    useEffect(() => {
        return () => {
            animationRunRef.current += 1;

            animationControlsRef.current?.stop();
            animationControlsRef.current = null;

            x.jump(0);
        };
    }, [x]);

    const startAnimation = () => {
        const letter = letterRef.current;

        if (disabled || !letter) return;

        animationRunRef.current += 1;
        const currentRun = animationRunRef.current;

        animationControlsRef.current?.stop();
        animationControlsRef.current = null;

        x.jump(0);

        const letterWidth =
            letter.getBoundingClientRect().width;

        const fontSize = Number.parseFloat(
            window.getComputedStyle(letter).fontSize,
        );

        if (
            letterWidth <= 0 ||
            !Number.isFinite(fontSize) ||
            fontSize <= 0
        ) {
            return;
        }

        const rollingDistance =
            letterWidth + fontSize * ROLLING_GAP;

        animationControlsRef.current = animate(
            x,
            -rollingDistance,
            {
                duration: ROLLING_DURATION,
                ease: EASE_OUT,
                onComplete: () => {
                    if (
                        currentRun !==
                        animationRunRef.current
                    ) {
                        return;
                    }

                    animationControlsRef.current = null;

                    x.jump(0);
                },
            },
        );
    };

    return (
        <span
            ref={letterRef}
            className="relative inline-block align-top"
        >
            {!disabled && (
                <motion.span
                    aria-hidden="true"
                    onHoverStart={startAnimation}
                    className="
                        absolute inset-x-0
                        top-[-0.06em] bottom-[0.1em]
                        z-20 block
                    "
                />
            )}

            <span
                className="
                    pointer-events-none
                    block
                    [clip-path:inset(-0.15em_0_-0.15em_0)]
                "
            >
                <motion.span
                    style={{ x }}
                    className="relative block"
                >
                    <span className="block">
                        {character}
                    </span>

                    <span
                        aria-hidden="true"
                        style={{
                            left: `calc(100% + ${ROLLING_GAP}em)`,
                        }}
                        className="
                            pointer-events-none
                            absolute top-0
                            block
                        "
                    >
                        {character}
                    </span>
                </motion.span>
            </span>
        </span>
    );
}

export function RollingText({
    text,
    disabled = false,
}) {
    const [resetVersion, setResetVersion] = useState(0);

    useEffect(() => {
        if (disabled) {
            return undefined;
        }

        let resetTimeoutId;
        let resolutionMediaQuery;

        const rebuildLetters = () => {
            window.clearTimeout(resetTimeoutId);

            resetTimeoutId = window.setTimeout(() => {
                setResetVersion(
                    (currentVersion) =>
                        currentVersion + 1,
                );
            }, RESET_DELAY);
        };

        const watchCurrentResolution = () => {
            resolutionMediaQuery?.removeEventListener(
                "change",
                handleResolutionChange,
            );

            resolutionMediaQuery = window.matchMedia(
                `(resolution: ${window.devicePixelRatio}dppx)`,
            );

            resolutionMediaQuery.addEventListener(
                "change",
                handleResolutionChange,
            );
        };

        function handleResolutionChange() {
            watchCurrentResolution();
            rebuildLetters();
        }

        watchCurrentResolution();

        window.addEventListener(
            "resize",
            rebuildLetters,
        );

        window.visualViewport?.addEventListener(
            "resize",
            rebuildLetters,
        );

        return () => {
            window.clearTimeout(resetTimeoutId);

            window.removeEventListener(
                "resize",
                rebuildLetters,
            );

            window.visualViewport?.removeEventListener(
                "resize",
                rebuildLetters,
            );

            resolutionMediaQuery?.removeEventListener(
                "change",
                handleResolutionChange,
            );
        };
    }, [disabled]);

    return (
        <span
            key={resetVersion}
            aria-hidden="true"
        >
            {Array.from(text).map(
                (character, index) => {
                    if (character === " ") {
                        return (
                            <span
                                key={`space-${index}`}
                                aria-hidden="true"
                                className="
                                    inline-block whitespace-pre
                                "
                            >
                                {"\u00A0"}
                            </span>
                        );
                    }

                    return (
                        <RollingLetter
                            key={`${character}-${index}`}
                            character={character}
                            disabled={disabled}
                        />
                    );
                },
            )}
        </span>
    );
}
