import { lazy, Suspense, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SOCIAL_LINKS, HERO_TIMING, EASE_OUT } from '../data/data';
import { AnimatedTitle } from "../components/Title";
import { HeroBackground } from "../components/HeroBackground";
import { useMediaQuery } from "../hooks/useMediaQuery";

const Globe = lazy(() => import("../components/Globe").then((m) => ({ default: m.Globe })));

const GLOBE_BREAKPOINT = "(min-width: 1024px)";

function GlobeFallback() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div style={{ width: '100%', maxWidth: 700, aspectRatio: 1, margin: '0 auto' }} />
        </div>
    );
}

export function Hero() {
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 600], [1, 0]);
    const scale = useTransform(scrollY, [0, 500], [1, 0.9]);
    const y = useTransform(scrollY, [0, 500], [0, 25]);

    const isDesktop = useMediaQuery(GLOBE_BREAKPOINT);
    const [readyForGlobe, setReadyForGlobe] = useState(false);

    useEffect(() => {
        if (!isDesktop) return;

        const id = setTimeout(() => setReadyForGlobe(true), 750);
        return () => clearTimeout(id);
    }, [isDesktop]);

    return (
        <section
            id="hero"
            data-theme="light"
            className="relative h-svh flex items-center px-6 pb-20 pt-36 lg:px-24 xl:px-36 sm:pt-40 overflow-hidden sticky top-0 z-0 bg-surface text-background"
        >
            <HeroBackground />

            <motion.div
                style={{ opacity, scale, y }}
                className="grid grid-cols-1 lg:grid-cols-2 w-full items-center gap-12 relative z-10"
            >
                <div className="relative z-20">

                    <motion.div
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: HERO_TIMING.badge, ease: EASE_OUT }}
                        className="mr-10 inline-block overflow-hidden border border-accent py-2 px-4"
                    >
                        <h2 className="font-medium uppercase tracking-[0.3em] text-xs sm:text-sm text-accent">
                            Full-Stack Developer
                        </h2>
                    </motion.div>

                    <div className="mt-6">
                        <AnimatedTitle text={`Allan\nRodriguez`} delay={HERO_TIMING.title} />
                    </div>

                    <div className="mt-10 sm:mt-12">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: HERO_TIMING.status, ease: EASE_OUT }}
                            className="inline-flex items-center gap-3 px-4 py-1 text-background bg-accent rounded-full backdrop-blur-lg"
                        >
                            <div className="relative inline-flex">
                                <div className="rounded-full bg-background h-[6px] w-[6px] inline-block" />
                                <div className="absolute animate-ping rounded-full bg-background h-[6px] w-[6px] opacity-75" />
                            </div>
                            <p className="text-sm font-medium">AVAILABLE FOR WORK</p>
                        </motion.div>
                    </div>

                    <div className="mt-8">
                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: HERO_TIMING.description, ease: EASE_OUT }}
                            className="max-w-xl text-xl leading-relaxed lg:text-2xl font-light tracking-wide text-background/70"
                        >
                            Hi! I'm Allan. A Full-Stack Developer who loves turning complex
                            problems into simple, well-crafted web experiences.
                        </motion.p>
                    </div>

                    <div className="mt-12">
                        <div className="space-x-7 flex items-center">
                            {SOCIAL_LINKS.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={link.name}
                                    className="hover:text-accent transition-colors"
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: HERO_TIMING.socials + i * 0.08,
                                        ease: EASE_OUT,
                                    }}
                                >
                                    <link.icon className="w-6 h-6" aria-hidden="true" />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                {isDesktop && readyForGlobe && (
                    <Suspense fallback={<GlobeFallback />}>
                        <Globe />
                    </Suspense>
                )}
            </motion.div>
        </section>
    );
}