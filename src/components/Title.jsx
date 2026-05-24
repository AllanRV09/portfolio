import { motion } from 'framer-motion'

export function AnimatedTitle({ text }) {
    // Split by lines first, then by words to ensure they don't break
    const lines = text.split('\n');

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.03,
                delayChildren: 1,
            }
        }
    }

    const letterVariants = {
        hidden: {
            y: '110%',
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    }

    return (
        <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="
                text-left
                text-[clamp(2.5rem,6vw,5.5rem)]
                font-extrabold
                tracking-tight
                uppercase
                leading-[0.85]
                flex
                flex-col
            "
        >
            {lines.map((line, lineIndex) => (
                <div key={lineIndex} className="flex flex-wrap">
                    {line.split(' ').map((word, wordIndex) => (
                        <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.2em]">
                            {word.split('').map((letter, charIndex) => (
                                <span key={charIndex} className="overflow-hidden inline-block">
                                    <motion.span
                                        variants={letterVariants}
                                        className="inline-block"
                                    >
                                        {letter}
                                    </motion.span>
                                </span>
                            ))}
                        </span>
                    ))}
                </div>
            ))}
        </motion.h1>
    )
}