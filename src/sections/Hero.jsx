import { motion } from "framer-motion";
import { IconLink } from '../components/IconLink'
import { SOCIAL_LINKS, ENTRY_DELAY } from '../data'
import { AnimatedTitle } from "../components/Title";

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
    hidden: { y: "120%" },
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

// function getCurrentMonthYear() {
//     const now = new Date();
//     return now.toLocaleDateString('en-US', { month: 'short', year: '2-digit' })
//         .replace(' ', "'")
//         .toUpperCase();
// }

export function Hero() {
    // const dateLabel = getCurrentMonthYear();

    return (
        <section className="relative z-10 min-h-dvh flex flex-col justify-center pb-32 px-6 lg:px-24 xl:px-36 sm:pt-24">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >

                <div className="overflow-hidden">
                    <motion.div
                        variants={revealVariants}
                        className="mr-10 inline-block overflow-hidden border border-accent py-2 px-4"
                    >

                        <h2 className="font-medium uppercase tracking-[0.3em] text-xs sm:text-sm text-accent">
                            Full-Stack Developer
                        </h2>
                    </motion.div>
                </div>

                <div className="mt-6">
                    <AnimatedTitle text={`Allan\nRodriguez`} />
                </div>

                <div className="overflow-hidden mt-15 sm:mt-20">
                    <motion.div
                        variants={fadeInVariants}
                        className="inline-flex items-center gap-3 px-4 py-1 text-background bg-accent rounded-full backdrop-blur-lg"
                    >
                        <div className="relative inline-flex">
                            <div className="rounded-full bg-background h-[6px] w-[6px] inline-block"></div>
                            <div className="absolute animate-ping rounded-full bg-background h-[6px] w-[6px] opacity-75"></div>
                        </div>
                        <p className="text-sm medium">AVAILABLE FOR WORK</p>
                    </motion.div>
                </div>
                <div className="overflow-hidden mt-8">
                    <motion.p
                        variants={revealVariants}
                        className="max-w-xl text-xl leading-relaxed lg:text-2xl font-light tracking-wide"
                    >
                        Hi! I'm Allan. A Full-Stack Developer who loves turning complex problems into simple, well-crafted web experiences.
                    </motion.p>
                </div>

                <div className="overflow-hidden mt-12">
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