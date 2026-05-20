import { motion } from 'framer-motion'

export function AnimatedTitle({ text }) {
    const letters = text.split('')

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
                duration: 0.5,
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
                text-[clamp(3rem,9vw,6rem)]
                font-extrabold
                tracking-tight
                uppercase
                leading-[0.9]
                flex
                flex-wrap
            "
        >
            {letters.map((letter, i) => {
                if (letter === '\n') {
                    return <div key={i} className="w-full" />
                }

                return (
                    <span key={i} className="overflow-hidden inline-block">
                        <motion.span
                            variants={letterVariants}
                            className="inline-block"
                        >
                            {letter === ' ' ? '\u00A0' : letter}
                        </motion.span>
                    </span>
                )
            })}
        </motion.h1>
    )
}