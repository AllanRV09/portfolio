import { SectionTitle } from "../components/SectionTitle";

export function About() {
    return (
        <section id="about" className="relative z-20 bg-background px-6 lg:px-24 xl:px-36 py-24 scroll-mt-24">
            <SectionTitle>ABOUT</SectionTitle>

            <p className="mt-8 text-lg font-light tracking-wide leading-relaxed max-w-3xl">Based in Costa Rica, I'm a Full-Stack Developer with real-world experience building web platforms end to end — from database design to frontend implementation.</p>
            <p className="mt-6 text-lg font-light tracking-wide leading-relaxed max-w-3xl">I'm comfortable jumping between backend logic and UI details, and I take pride in delivering work that's clean, maintainable, and thoughtfully built.</p>
            <p className="mt-6 text-lg font-light tracking-wide leading-relaxed max-w-3xl">Open to new opportunities and always up for an interesting challenge.</p>
        </section>
    )
}