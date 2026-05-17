export function Footer() {
    return (
        <section className="flex flex-col items-center text-center">
            <p className="mb-2 font-light sm:text-lg ">Have a project in mind?</p>

            <a
                href="mailto:allanrod0908@gmail.com?subject=Project%20Inquiry"
                className="mb-14 text-xl font-bold hover:text-accent transition-colors sm:text-3xl"
            >
                allanrod0908@gmail.com
            </a>

            <span className="text-xs font-light text-text/60">Design & build by Allan Rodríguez</span>
        </section>
    )
}