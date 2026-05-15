import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export function Header() {
    return (
        <header>
            <div className="max-w-4xl">
                <h1 className="text-3xl font-extrabold tracking-tight">
                    <a href="">
                        Allan Rodríguez
                    </a>
                </h1>
                <h2 className="mt-3 font-medium tracking-tight">Full-Stack Developer</h2>
                <p className="mt-4 text-sm font-light tracking-wide leading-6">Hi! I'm Allan. A Full-Stack Developer who loves turning  complex problems into simple, well-crafted web experiences.</p>

                <div className="flex gap-5 mt-8">
                    <a href="https://linkedin.com/in/allan-rodríguez" target="_blank" rel="noreferrer">
                        <FaLinkedin className="w-6 h-6 hover:text-accent transition-colors" />
                    </a>
                    <a href="https://github.com/TU_USUARIO" target="_blank" rel="noreferrer">
                        <FaGithub className="w-6 h-6 hover:text-accent transition-colors" />
                    </a>
                    <a href="https://instagram.com/TU_USUARIO" target="_blank" rel="noreferrer">
                        <FaInstagram className="w-6 h-6 hover:text-accent transition-colors" />
                    </a>
                    <a href="mailto:allanrod0908@gmail.com">
                        <MdEmail className="w-6 h-6 hover:text-accent transition-colors" />
                    </a>
                </div>

            </div>
        </header>
    )
}