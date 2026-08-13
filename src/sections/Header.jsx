import { FiHome } from "react-icons/fi";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { useState, useEffect } from 'react';
import { NavButton } from '../components/NavButton';
import { NAV_LINKS, ENTRY_DELAY } from "../data/data";
import { motion, AnimatePresence } from "framer-motion"
import { useLenis } from "../hooks/useLenis";
import { useScrollToTop } from "../hooks/useScrollToTop";

const AUTO_HIDE_QUERY = "(min-width: 768px)";
const NAV_HIDE_SCROLL_THRESHOLD = 24;
const ABOUT_REVEAL_OFFSET = 96;
const NAV_SLIDE_EASE = [0.16, 1, 0.3, 1];

const DesktopNav = ({ scrollToTop, isHidden }) => {
    return (
        <motion.header
            initial={{ opacity: 0 }}
            animate={{
                opacity: isHidden ? 0 : 1,
                y: isHidden ? "-150%" : "0%",
            }}
            transition={{
                opacity: {
                    duration: isHidden ? 0.3 : 0.55,
                    delay: isHidden ? 0 : ENTRY_DELAY,
                    ease: "easeOut",
                },
                y: {
                    duration: isHidden ? 0.45 : 0.65,
                    ease: NAV_SLIDE_EASE,
                },
            }}
            aria-hidden={isHidden}
            inert={isHidden}
            className='hidden sm:flex fixed top-4 left-1/2 -translate-x-1/2 z-50'
        >
            <nav
                className="flex items-center gap-3 pl-4 p-2 rounded-2xl border border-surface/15 bg-background text-surface shadow-lg"
            >
                <button onClick={scrollToTop} className='mx-auto pl-2' aria-label="Go to top">
                    <FiHome className='w-5 h-5 hover:text-accent transition-colors' />
                </button>
                <div className="w-px h-5 sm:mx-3 md:mx-6 bg-white/30"></div>
                <div className='flex items-center sm:gap-4 md:gap-8'>
                    {
                        NAV_LINKS.map((link) => (
                            <a href={`#${link.href}`} key={link.name} className="whitespace-nowrap text-sm hover:text-accent transition-colors tracking-wide text-surface">
                                {link.name}
                            </a>
                        ))
                    }
                </div>
                <div className="w-px h-5 sm:mx-3 md:mx-6 bg-white/30"></div>
                <NavButton />
            </nav>
        </motion.header>
    );
}

const MobileNav = ({ toggleMenu, isMenuOpen, scrollToTop }) => {
    return (
        <motion.header
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: ENTRY_DELAY }}
            className="fixed top-4 left-5 right-5 z-50 sm:hidden "
        >
            <div className="flex items-center justify-between px-5 py-5 rounded-2xl border border-surface/15 bg-background text-surface shadow-lg">
                <button onClick={scrollToTop} aria-label="Go to top">
                    <FiHome className="w-6 h-6 hover:text-accent transition-colors" />
                </button>

                <button
                    onClick={toggleMenu}
                    className="hover:text-accent transition-colors relative w-6 h-6"
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMenuOpen}
                >
                    <RxHamburgerMenu className={`w-6 h-6 absolute inset-0 transition-transform duration-300 ${isMenuOpen ? 'opacity-0 scale-50 rotate-90' : 'opacity-100 scale-100 rotate-0'
                        }`} />
                    <RxCross2 className={`w-6 h-6 absolute inset-0 transition-transform duration-300 ${isMenuOpen ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 -rotate-90'
                        }`} />
                </button>
            </div>
        </motion.header>
    );
};

const MobileMenu = ({ isMenuOpen, toggleMenu }) => {
    return (
        <AnimatePresence>
            {isMenuOpen && (
                <motion.div
                    initial={{ clipPath: `circle(0% at calc(100% - 3.25rem) 2.75rem)` }}
                    animate={{ clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
                    exit={{ clipPath: `circle(0% at calc(100% - 3.25rem) 2.75rem)` }}
                    transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                    className="fixed inset-0 z-50 flex flex-col justify-center items-center bg-background text-surface"
                >
                    <button
                        onClick={toggleMenu}
                        className="absolute top-7 right-8 w-10 h-10 flex items-center justify-center text-surface hover:text-accent transition-colors"
                        aria-label="Close menu"
                    >
                        <RxCross2 className="w-7 h-7" />
                    </button>

                    <nav className="flex flex-col items-center gap-8">
                        {NAV_LINKS.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={`#${link.href}`}
                                onClick={toggleMenu}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 30 }}
                                transition={{
                                    duration: 0.4,
                                    delay: 0.1 + index * 0.1,
                                    ease: [0.33, 1, 0.68, 1],
                                }}
                                className="text-3xl font-medium hover:text-accent transition-colors"
                            >
                                {link.name}
                            </motion.a>
                        ))}

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 30 }}
                            transition={{
                                duration: 0.4,
                                delay: 0.1 + NAV_LINKS.length * 0.1,
                                ease: [0.33, 1, 0.68, 1],
                            }}
                            className="mt-10"
                        >
                            <NavButton />
                        </motion.div>
                    </nav>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isDesktopNavHidden, setIsDesktopNavHidden] = useState(false)
    const lenisRef = useLenis();
    const scrollToTop = useScrollToTop();

    const toggleMenu = () => setIsMenuOpen(prev => !prev)

    useEffect(() => {
        const lenis = lenisRef?.current;

        if (isMenuOpen) {
            lenis?.stop();
        } else {
            lenis?.start();
        }

        return () => {
            lenis?.start();
        };
    }, [isMenuOpen, lenisRef]);

    useEffect(() => {
        const autoHideQuery = window.matchMedia(AUTO_HIDE_QUERY);
        let frameId = null;

        const updateDesktopNavVisibility = () => {
            frameId = null;

            if (!autoHideQuery.matches) {
                setIsDesktopNavHidden(false);
                return;
            }

            const aboutSection = document.getElementById("about");
            const hasStartedScrolling =
                window.scrollY > NAV_HIDE_SCROLL_THRESHOLD;
            const hasReachedAbout =
                aboutSection?.getBoundingClientRect().top <= ABOUT_REVEAL_OFFSET;

            setIsDesktopNavHidden(
                hasStartedScrolling && !hasReachedAbout,
            );
        };

        const requestVisibilityUpdate = () => {
            if (frameId === null) {
                frameId = window.requestAnimationFrame(
                    updateDesktopNavVisibility,
                );
            }
        };

        updateDesktopNavVisibility();
        window.addEventListener("scroll", requestVisibilityUpdate, {
            passive: true,
        });
        window.addEventListener("resize", requestVisibilityUpdate);
        autoHideQuery.addEventListener("change", requestVisibilityUpdate);

        return () => {
            window.removeEventListener("scroll", requestVisibilityUpdate);
            window.removeEventListener("resize", requestVisibilityUpdate);
            autoHideQuery.removeEventListener("change", requestVisibilityUpdate);

            if (frameId !== null) {
                window.cancelAnimationFrame(frameId);
            }
        };
    }, []);

    return (
        <>
            <DesktopNav
                scrollToTop={scrollToTop}
                isHidden={isDesktopNavHidden}
            />
            <MobileNav toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} scrollToTop={scrollToTop} />
            <MobileMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        </>
    )
}
