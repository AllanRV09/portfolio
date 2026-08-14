import { FiHome } from "react-icons/fi";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { useCallback, useEffect, useRef, useState } from 'react';
import { NavButton } from '../components/NavButton';
import { NAV_LINKS, ENTRY_DELAY } from "../data/data";
import { motion, AnimatePresence } from "framer-motion"
import { useLenis } from "../hooks/useLenis";
import { useScrollToTop } from "../hooks/useScrollToTop";

const AUTO_HIDE_QUERY = "(min-width: 768px)";
const NAV_HIDE_SCROLL_THRESHOLD = 24;
const ABOUT_REVEAL_OFFSET = 96;
const NAV_SLIDE_EASE = [0.16, 1, 0.3, 1];
const MOBILE_MENU_ID = "mobile-navigation";
const MOBILE_MENU_DESKTOP_QUERY = "(min-width: 640px)";
const FOCUSABLE_SELECTOR = [
    'a[href]',
    'button:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
].join(', ');

const getFocusableElements = (container) =>
    Array.from(container.querySelectorAll(FOCUSABLE_SELECTOR)).filter(
        (element) =>
            element.tabIndex >= 0 &&
            element.getAttribute('aria-hidden') !== 'true',
    );

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

const MobileNav = ({
    toggleMenu,
    isMenuOpen,
    scrollToTop,
    headerRef,
    menuButtonRef,
}) => {
    return (
        <motion.header
            ref={headerRef}
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
                    ref={menuButtonRef}
                    onClick={toggleMenu}
                    className="hover:text-accent transition-colors relative w-6 h-6"
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMenuOpen}
                    aria-controls={MOBILE_MENU_ID}
                    aria-haspopup="dialog"
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

const MobileMenu = ({ isMenuOpen, closeMenu, menuRef, closeButtonRef }) => {
    return (
        <AnimatePresence>
            {isMenuOpen && (
                <motion.div
                    ref={menuRef}
                    id={MOBILE_MENU_ID}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Mobile navigation"
                    tabIndex={-1}
                    initial={{ clipPath: `circle(0% at calc(100% - 3.25rem) 2.75rem)` }}
                    animate={{ clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
                    exit={{ clipPath: `circle(0% at calc(100% - 3.25rem) 2.75rem)` }}
                    transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                    className="fixed inset-0 z-50 flex flex-col justify-center items-center bg-background text-surface"
                >
                    <button
                        ref={closeButtonRef}
                        onClick={closeMenu}
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
                                onClick={closeMenu}
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
    const mobileHeaderRef = useRef(null)
    const menuButtonRef = useRef(null)
    const menuRef = useRef(null)
    const closeButtonRef = useRef(null)
    const wasMenuOpenRef = useRef(false)
    const shouldRestoreFocusRef = useRef(true)
    const lenisRef = useLenis();
    const scrollToTop = useScrollToTop();

    const closeMenu = useCallback(() => {
        shouldRestoreFocusRef.current = true
        setIsMenuOpen(false)
    }, [])

    const toggleMenu = useCallback(() => {
        shouldRestoreFocusRef.current = true
        setIsMenuOpen(prev => !prev)
    }, [])

    useEffect(() => {
        if (!isMenuOpen) return undefined

        const menu = menuRef.current
        if (!menu) return undefined

        const body = document.body
        const lenis = lenisRef?.current;
        const previousBodyOverflow = body.style.overflow
        const elementsToMakeInert = [
            mobileHeaderRef.current,
            document.querySelector('main'),
        ].filter(Boolean)
        const inertStates = elementsToMakeInert.map((element) => ({
            element,
            wasInert: element.hasAttribute('inert'),
        }))

        inertStates.forEach(({ element }) => {
            element.setAttribute('inert', '')
        })

        body.style.overflow = 'hidden'
        lenis?.stop();

        const focusFrameId = window.requestAnimationFrame(() => {
            const initialFocus =
                closeButtonRef.current ??
                getFocusableElements(menu)[0] ??
                menu

            initialFocus?.focus({ preventScroll: true })
        })

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                event.preventDefault()
                closeMenu()
                return
            }

            if (event.key !== 'Tab' || !menu) return

            const focusableElements = getFocusableElements(menu)

            if (focusableElements.length === 0) {
                event.preventDefault()
                menu.focus({ preventScroll: true })
                return
            }

            const firstElement = focusableElements[0]
            const lastElement = focusableElements[focusableElements.length - 1]
            const activeElement = document.activeElement
            const focusIsOutsideMenu =
                activeElement === menu || !menu.contains(activeElement)

            if (event.shiftKey && (activeElement === firstElement || focusIsOutsideMenu)) {
                event.preventDefault()
                lastElement.focus()
            } else if (!event.shiftKey && (activeElement === lastElement || focusIsOutsideMenu)) {
                event.preventDefault()
                firstElement.focus()
            }
        }

        document.addEventListener('keydown', handleKeyDown)

        return () => {
            window.cancelAnimationFrame(focusFrameId)
            document.removeEventListener('keydown', handleKeyDown)

            inertStates.forEach(({ element, wasInert }) => {
                if (!wasInert) element.removeAttribute('inert')
            })

            body.style.overflow = previousBodyOverflow
            lenis?.start();
        };
    }, [closeMenu, isMenuOpen, lenisRef]);

    useEffect(() => {
        if (isMenuOpen) {
            wasMenuOpenRef.current = true
            return undefined
        }

        if (!wasMenuOpenRef.current) return undefined

        wasMenuOpenRef.current = false

        if (!shouldRestoreFocusRef.current) return undefined

        const focusFrameId = window.requestAnimationFrame(() => {
            menuButtonRef.current?.focus({ preventScroll: true })
        })

        return () => window.cancelAnimationFrame(focusFrameId)
    }, [isMenuOpen])

    useEffect(() => {
        const desktopQuery = window.matchMedia(MOBILE_MENU_DESKTOP_QUERY)

        const closeMenuAtDesktop = (event) => {
            if (!event.matches) return

            shouldRestoreFocusRef.current = false
            setIsMenuOpen(false)
        }

        desktopQuery.addEventListener('change', closeMenuAtDesktop)

        return () => {
            desktopQuery.removeEventListener('change', closeMenuAtDesktop)
        }
    }, [])

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
            <MobileNav
                toggleMenu={toggleMenu}
                isMenuOpen={isMenuOpen}
                scrollToTop={scrollToTop}
                headerRef={mobileHeaderRef}
                menuButtonRef={menuButtonRef}
            />
            <MobileMenu
                closeMenu={closeMenu}
                isMenuOpen={isMenuOpen}
                menuRef={menuRef}
                closeButtonRef={closeButtonRef}
            />
        </>
    )
}
