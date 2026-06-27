import { motion, useScroll, useTransform } from "framer-motion";
import { SOCIAL_LINKS, ENTRY_DELAY } from '../data'
import { AnimatedTitle } from "../components/Title";
import { HeroBackground } from "../components/HeroBackground";
import { Globe } from "../components/Globe";

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
    hidden: { y: "125%" },
    visible: {
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
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
    const { scrollY } = useScroll();

    const opacity = useTransform(scrollY, [0, 600], [1, 0]);
    const scale = useTransform(scrollY, [0, 500], [1, 0.9]);
    const y = useTransform(scrollY, [0, 500], [0, 25]);

    return (
        <section id="hero" data-theme="light" className="relative h-svh flex items-center px-6 pb-20 pt-36 lg:px-24 xl:px-36 sm:pt-40 overflow-hidden sticky top-0 z-0 bg-surface text-background">
            <HeroBackground />

            <motion.div
                style={{ opacity, scale, y }}
                className="grid grid-cols-1 lg:grid-cols-2 w-full items-center gap-12 relative z-10"
            >
                {/* Information Column */}
                <motion.div
                    className="relative z-20"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="overflow-hidden">
                        <motion.div variants={revealVariants} className="mr-10 inline-block overflow-hidden border border-accent py-2 px-4">
                            <h2 className="font-medium uppercase tracking-[0.3em] text-xs sm:text-sm text-accent">
                                Full-Stack Developer
                            </h2>
                        </motion.div>
                    </div>

                    <div className="mt-6">
                        <AnimatedTitle text={`Allan\nRodriguez`} />
                    </div>

                    <div className="overflow-hidden mt-10 sm:mt-12">
                        <motion.div variants={fadeInVariants} className="inline-flex items-center gap-3 px-4 py-1 text-background bg-accent rounded-full backdrop-blur-lg">
                            <div className="relative inline-flex">
                                <div className="rounded-full bg-background h-[6px] w-[6px] inline-block"></div>
                                <div className="absolute animate-ping rounded-full bg-background h-[6px] w-[6px] opacity-75"></div>
                            </div>
                            <p className="text-sm medium">AVAILABLE FOR WORK</p>
                        </motion.div>
                    </div>

                    <div className="overflow-hidden mt-8">
                        <motion.p variants={revealVariants} className="max-w-xl text-xl leading-relaxed lg:text-2xl font-light tracking-wide text-background/70">
                            Hi! I'm Allan. A Full-Stack Developer who loves turning complex problems into simple, well-crafted web experiences.
                        </motion.p>
                    </div>

                    <div className="overflow-hidden mt-12">
                        <motion.div variants={revealVariants} className='space-x-7 flex items-center'
                        >
                            {SOCIAL_LINKS.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={link.name}
                                    className="hover:text-accent transition-colors"
                                >
                                    <link.icon className="w-6 h-6" aria-hidden="true" />
                                </a>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>

                <Globe />

            </motion.div>
        </section>
    );
}
