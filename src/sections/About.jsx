import { SectionTitle } from "../components/SectionTitle";

export function About() {
    return (
        <section id="about" className="mb-16 px-4 max-w-2xl sm:px-6 lg:px-8 scroll-mt-24">
            <SectionTitle>ABOUT</SectionTitle>

            <p className="mt-4 text-sm font-light tracking-wide leading-6">Based in Costa Rica, I'm a Full-Stack Developer with real-world experience building web platforms end to end — from database design to frontend implementation.</p>
            <p className="mt-4 text-sm font-light tracking-wide leading-6">I'm comfortable jumping between backend logic and UI details, and I take pride in delivering work that's clean, maintainable, and thoughtfully built.</p>
            <p className="mt-4 text-sm font-light tracking-wide leading-6">Open to new opportunities and always up for an interesting challenge.</p>
        </section>
    )
}