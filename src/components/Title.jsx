import { motion } from "framer-motion"

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.7
        }
    }
}

const letter = {
    hidden: {
        opacity: 0,
        y: 0
    },
    show: {
        opacity: 1,
        y: -5
    }
}

export function Title() {
    const firstName = "ALLAN"
    const lastName = "RODRIGUEZ"

    return (
        <motion.h1
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            aria-label="ALLAN RODRIGUEZ"
            className="mt-6 text-left text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl text-center"
        >
            {firstName.split("").map((char, i) => (
                <motion.span key={i} variants={letter} aria-hidden="true" className="inline-block">
                    {char}
                </motion.span>
            ))}
            <br />
            {lastName.split("").map((char, i) => (
                <motion.span key={i + firstName.length} variants={letter} aria-hidden="true" className="inline-block">
                    {char}
                </motion.span>
            ))}
        </motion.h1>
    )
}