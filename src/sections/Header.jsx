import { FiHome } from "react-icons/fi";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { useState, useEffect } from 'react';
import { NavButton } from '../components/NavButton';
import { IconLink } from "../components/IconLink";
import { NAV_LINKS } from "../data";

const DesktopNav = () => (
    <header className='hidden sm:flex fixed top-14 left-1/2 -translate-x-1/2 z-50'>
        <nav className='flex items-center gap-3 pl-4 p-2 rounded-2xl border border-surface/10 bg-background/70 backdrop-blur-lg'>
            <a href="#" className='mx-auto pl-2' aria-label="Go to top">
                <FiHome className='w-5 h-5 hover:text-accent transition-colors' />
            </a>
            <div className='w-px h-5 bg-surface/60 sm:mx-3 md:mx-6'></div>
            <div className='flex items-center sm:gap-4 md:gap-8'>
                {
                    NAV_LINKS.map((link) => (
                        <a href={`#${link.href}`} key={link.name} className="whitespace-nowrap hover:text-accent transition-colors text-sm font-medium tracking-wide">
                            {link.name}
                        </a>
                    ))
                }
            </div>
            <div className='w-px h-5 bg-surface/60 sm:mx-3 md:mx-6'></div>
            <NavButton />
        </nav>
    </header>
)

const MobileNav = ({ toggleMenu, isMenuOpen }) => (
    <header className="sticky top-0 z-50 sm:hidden w-full border-b border-surface/10 bg-background/70 backdrop-blur-lg">
        <div className="flex items-center justify-between px-6 py-6">
            <a href="#" aria-label="Go to top">
                <FiHome className="w-6 h-6 hover:text-accent transition-colors" />
            </a>

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
    </header>
)

const MobileMenu = ({ isMenuOpen, toggleMenu }) => (
    <>
        <div 
            onClick={toggleMenu} 
            className={`fixed inset-0 h-dvh z-30 bg-black/20 backdrop-blur-xs transition-opacity duration-300 sm:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            aria-hidden="true"
        />
        <div className={`fixed top-0 left-0 right-0 z-40 pb-5 shadow-lg bg-background/95 backdrop-blur-md transition-transform duration-400 ease-out sm:hidden ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
            <nav className="flex flex-col pt-26 space-y-8 px-6">
                {NAV_LINKS.map((link) => (
                    <div className='flex items-center gap-5' key={link.name}>
                        <IconLink {...link} onClick={toggleMenu} />
                        <a href={`#${link.href}`} onClick={toggleMenu} className="text-lg font-medium">{link.name}</a>
                    </div>
                ))}
                <NavButton />
            </nav>
        </div>
    </>
)

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    // Scroll Lock: Evita que el fondo se mueva cuando el menú está abierto.
    // Esto soluciona el bug de la capa blur "cortada" en móviles.
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        // Limpieza al desmontar el componente
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    return (
        <>
            <DesktopNav />
            <MobileNav toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
            <MobileMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        </>
    )
}