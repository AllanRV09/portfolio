import { useMemo } from "react";
import { motion } from "framer-motion";

export function AnimatedTitle({ text, delay = 0 }) {
    const lines = text.split("\n");

    const containerVariants = useMemo(() => ({
        hidden: {},
        visible: {
            transition: {
                delayChildren: delay,
                staggerChildren: 0.1,
            }
        }
    }), [delay]);

    const wordVariants = {
        hidden: { y: "100%" },
        visible: {
            y: 0,
            transition: {
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-left text-[clamp(2.5rem,6vw,5.5rem)] font-extrabold tracking-tighter uppercase leading-[0.9] flex flex-col"
        >
            {lines.map((line, lineIndex) => (
                <div key={lineIndex} className="flex flex-wrap">
                    {line.split(" ").map((word, wordIndex) => (
                        <span
                            key={wordIndex}
                            className="overflow-hidden inline-block mr-[0.2em]"
                        >
                            <motion.span
                                variants={wordVariants}
                                className="inline-block"
                            >
                                {word}
                            </motion.span>
                        </span>
                    ))}
                </div>
            ))}
        </motion.h1>
    );
}