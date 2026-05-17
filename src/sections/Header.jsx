import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FiHome } from "react-icons/fi";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { useState } from 'react';
import { NavButton } from '../components/NavButton';

const SOCIAL_LINKS = [
    { href: "https://linkedin.com/in/allan-rodríguez", icon: FaLinkedin, name: "LinkedIn" },
    { href: "https://github.com/TU_USUARIO", icon: FaGithub, name: "GitHub" },
    { href: "https://instagram.com/TU_USUARIO", icon: FaInstagram, name: "Instagram" },
    { href: "mailto:allanrod0908@gmail.com", icon: MdEmail, name: "Gmail" },
]

const SocialLink = ({ href, icon: Icon, onClick, className = "w-5 h-5" }) => (
    <a
        href={href}
        onClick={onClick}
        target="_blank" // Buena práctica: abrir redes en pestaña nueva
        rel="noopener noreferrer" // Seguridad para target="_blank"
        className="hover:text-accent transition-colors"
    >
        <Icon className={className} />
    </a>
)

const DesktopNav = () => (
    <header className='hidden sm:flex fixed top-8 left-1/2 -translate-x-1/2 z-50'>
        <nav className='flex items-center gap-6 px-6 py-3 rounded-2xl border border-surface/10 bg-background/70 backdrop-blur-lg'>
            <a href="#">
                <FiHome className='w-5 h-5 hover:text-accent transition-colors' />
            </a>
            <div className='w-px h-5 bg-surface/60 mx-6'></div>
            <div className='space-x-8 flex items-center'>
                {
                    SOCIAL_LINKS.map((link) => (
                        <SocialLink key={link.name} {...link} />
                    ))
                }
            </div>
            <div className='w-px h-5 bg-surface/60 mx-6'></div>
            <NavButton />
        </nav>
    </header>
)

const MobileNav = ({ toggleMenu, isMenuOpen }) => (
    <header className="sticky top-0 z-50 sm:hidden w-full border-b border-surface/10 bg-background/70 backdrop-blur-lg">
        <div className="flex items-center justify-between px-6 py-6">
            <a href="#">
                <FiHome className="w-6 h-6 hover:text-accent transition-colors" />
            </a>

            <button onClick={toggleMenu} className="hover:text-accent transition-colors relative w-6 h-6">
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
        <div onClick={toggleMenu} className={`fixed inset-0 z-30 bg-black/20 backdrop-blur-xs transition-opacity duration-300 sm:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}/>
        <div className={`fixed top-0 left-0 right-0 z-40 pb-5 shadow-lg bg-background/95 backdrop-blur-md transition-transform duration-400 ease-out sm:hidden ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
            <nav className="flex flex-col pt-26 space-y-8 px-6">
                {SOCIAL_LINKS.map((link) => (
                    <div className='flex items-center gap-5' key={link.icon}>
                        <SocialLink key={link.name} {...link} onClick={toggleMenu} />

                        <a href={link.href}>{link.name}</a>
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

    return (
        <>
            <DesktopNav />
            <MobileNav toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
            <MobileMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        </>
    )
}