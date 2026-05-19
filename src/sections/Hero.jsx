import { motion } from "framer-motion";
import { IconLink } from '../components/IconLink'
import { SOCIAL_LINKS, ENTRY_DELAY } from '../data'
import { Title } from "../components/Title";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: ENTRY_DELAY,
            staggerChildren: 0.15
        }
    }
}

const revealVariants = {
    hidden: { y: "100%" },
    visible: {
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
}

const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.6 }
    }
};

export function Hero() {
    return (
        <section className="w-full min-h-screen flex items-center px-4 max-w-2xl sm:px-6 lg:px-8">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-lg"
            >

                <div className="overflow-hidden">
                    <motion.div
                        variants={fadeInVariants}
                        className="inline-flex items-center gap-3 px-4 py-1 border border-accent/10 bg-surface/5 rounded-full backdrop-blur-lg"
                    >
                        <div className="relative inline-flex">
                            <div className="rounded-full bg-accent h-[6px] w-[6px] inline-block"></div>
                            <div className="absolute animate-ping rounded-full bg-accent h-[6px] w-[6px] opacity-75"></div>
                        </div>
                        <p className="text-sm font-light">AVAILABLE FOR WORK</p>
                    </motion.div>
                </div>

                <Title />

                <div className="overflow-hidden mt-3">
                    <motion.h2
                        variants={revealVariants}
                        className="font-medium tracking-tight sm:text-lg text-accent"
                    >
                        Full-Stack Developer
                    </motion.h2>
                </div>

                <div className="overflow-hidden mt-4">
                    <motion.p
                        variants={revealVariants}
                        className="max-w-sm text-sm font-light tracking-wide leading-6"
                    >
                        Hi! I'm Allan. A Full-Stack Developer who loves turning complex problems into simple, well-crafted web experiences.
                    </motion.p>
                </div>

                <div className="overflow-hidden mt-7">
                    <motion.div
                        variants={revealVariants}
                        className='space-x-7 flex items-center'
                    >
                        {SOCIAL_LINKS.map((link) => (
                            <IconLink key={link.name} {...link} />
                        ))}
                    </motion.div>
                </div>

            </motion.div>
        </section>
    )
}