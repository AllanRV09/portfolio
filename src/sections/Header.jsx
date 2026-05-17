import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const SOCIAL_LINKS = [
    { href: "https://linkedin.com/in/allan-rodríguez", icon: FaLinkedin },
    { href: "https://github.com/TU_USUARIO", icon: FaGithub },
    { href: "https://instagram.com/TU_USUARIO", icon: FaInstagram },
    { href: "mailto:allanrod0908@gmail.com", icon: MdEmail },
]

export function Header() {
    return (
        <header>
            <div className="max-w-4xl">
                <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
                    <a href="">
                        Allan Rodríguez
                    </a>
                </h1>
                <h2 className="mt-3 font-medium tracking-tight sm:text-lg">Full-Stack Developer</h2>
                <p className="mt-4 max-w-xs text-sm font-light tracking-wide leading-6">Hi! I'm Allan. A Full-Stack Developer who loves turning  complex problems into simple, well-crafted web experiences.</p>

                <div className="flex gap-5 mt-8">
                    {
                        SOCIAL_LINKS.map((social) => (
                            <a href={social.href} key={social.icon}>
                                <social.icon className="w-6 h-6 hover:text-accent transition-colors" />
                            </a>
                        ))
                    }
                </div>

            </div>
        </header>
    )
}