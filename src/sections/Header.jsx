import { FiHome } from "react-icons/fi";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { useState, useEffect } from 'react';
import { NavButton } from '../components/NavButton';
import { IconLink } from "../components/IconLink";
import { NAV_LINKS, ENTRY_DELAY } from "../data";
import { useSectionTheme } from "../hooks/useSectionTheme";
import { motion, AnimatePresence } from "framer-motion"

const DesktopNav = ({ theme, scrollToTop }) => {
    const isLight = theme === "light";

    return (
        <motion.header
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: ENTRY_DELAY }}
            className='hidden sm:flex fixed top-4 left-1/2 -translate-x-1/2 z-50'
        >
            <nav
                className={`flex items-center gap-3 pl-4 p-2 rounded-2xl border backdrop-blur-lg transition-colors duration-300
                    ${isLight
                        ? 'border-background/10 bg-surface/40 text-background'
                        : 'border-surface/10 bg-background/10 text-surface'
                    }`}
            >
                <button onClick={scrollToTop} className='mx-auto pl-2' aria-label="Go to top">
                    <FiHome className='w-5 h-5 hover:text-accent transition-colors' />
                </button>
                <div className={`w-px h-5 sm:mx-3 md:mx-6 transition-colors duration-300 ${isLight ? 'bg-background/30' : 'bg-surface/60'}`}></div>
                <div className='flex items-center sm:gap-4 md:gap-8'>
                    {
                        NAV_LINKS.map((link) => (
                            <a href={`#${link.href}`} key={link.name} className="whitespace-nowrap hover:text-accent transition-colors text-sm font-medium tracking-wide">
                                {link.name}
                            </a>
                        ))
                    }
                </div>
                <div className={`w-px h-5 sm:mx-3 md:mx-6 transition-colors duration-300 ${isLight ? 'bg-background/30' : 'bg-surface/60'}`}></div>
                <NavButton isLight={isLight} />
            </nav>
        </motion.header>
    );
}

const MobileNav = ({ toggleMenu, isMenuOpen, theme, scrollToTop }) => {
    const isLight = theme === "light";

    return (
        <motion.header
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: ENTRY_DELAY }}
            className={`fixed top-0 left-0 right-0 z-50 sm:hidden w-full border-b backdrop-blur-lg transition-colors duration-300
                ${isLight
                    ? 'border-background/10 bg-surface/40 text-background'
                    : 'border-surface/10 bg-background/10 text-surface'
                }`}
        >
            <div className="flex items-center justify-between px-6 py-6">
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
}

const MobileMenu = ({ isMenuOpen, toggleMenu, theme }) => {
    const isLight = theme === "light";

    return (
        <AnimatePresence>
            {isMenuOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleMenu}
                        className={`fixed inset-0 h-svh z-30 backdrop-blur-sm sm:hidden ${isLight ? 'bg-background/20' : 'bg-black/40'
                            }`}
                        aria-hidden="true"
                    />

                    <motion.div
                        initial={{ y: "-100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className={`fixed top-0 left-0 right-0 z-40 pb-10 shadow-2xl backdrop-blur-xl sm:hidden border-b transition-colors duration-300
                            ${isLight
                                ? 'bg-surface/98 border-background/10 text-background'
                                : 'bg-background/98 border-surface/10 text-surface'
                            }`}
                    >
                        <nav className="flex flex-col pt-26 space-y-8 px-6">
                            {NAV_LINKS.map((link) => (
                                <div className='flex items-center gap-5' key={link.name}>
                                    <IconLink {...link} onClick={toggleMenu} isLight={isLight} />
                                    <a href={`#${link.href}`} onClick={toggleMenu} className="text-lg font-medium hover:text-accent transition-colors">{link.name}</a>
                                </div>
                            ))}
                            <div className="pt-4">
                                <NavButton isLight={isLight} />
                            </div>
                        </nav>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const theme = useSectionTheme();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    const scrollToTop = () => {
        if (window.lenis) {
            window.lenis.scrollTo(0, { duration: 1.5 });
            return;
        }

        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    return (
        <>
            <DesktopNav theme={theme} scrollToTop={scrollToTop} />
            <MobileNav toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} theme={theme} scrollToTop={scrollToTop} />
            <MobileMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} theme={theme} />
        </>
    )
}