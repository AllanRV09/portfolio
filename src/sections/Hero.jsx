import { IconLink } from '../components/IconLink'
import { SOCIAL_LINKS } from '../data'

export function Hero() {
    return (
        <section className='w-full px-4 max-w-2xl sm:px-6 lg:px-8 mb-16 pt-[35px] sm:pt-[180px] md:pt-[200px] lg:pt-[220px]'>
            <div className="max-w-md">
                <div className="inline-flex items-center gap-3 px-4 py-1 border border-accent/10 bg-surface/5 rounded-full backdrop-blur-lg">
                    <div className="relative inline-flex">
                        <div className="rounded-full bg-accent h-[6px] w-[6px] inline-block"></div>
                        <div className="absolute animate-ping rounded-full bg-accent h-[6px] w-[6px] opacity-75"></div>
                    </div>
                    <p className="text-sm font-light">AVAILABLE FOR WORK</p>
                </div>
                <h1 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-5xl">
                    Allan Rodríguez
                </h1>
                <h2 className="mt-3 font-medium tracking-tight sm:text-lg text-accent">Full-Stack Developer</h2>
                <p className="mt-4 max-w-sm text-sm font-light tracking-wide leading-6">Hi! I'm Allan. A Full-Stack Developer who loves turning complex problems into simple, well-crafted web experiences.</p>


                <div className='mt-7 space-x-7 flex items-center'>
                        {
                            SOCIAL_LINKS.map((link) => (
                                <IconLink key={link.name} {...link} />
                            ))
                        }
                    </div>
            </div>
        </section>
    )
}