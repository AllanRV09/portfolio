export function Footer() {
    return (
        <section className="flex flex-col items-center text-center px-4">
            <h3 className="uppercase text-4xl font-semibold md:text-5xl lg:text-6xl">Let's Make It Happen</h3>

            <div className="mt-8 border w-full px-4 py-8 rounded-xl bg-surface/10">
                <h4 className="mb-2 font-semibold text-lg tracking-tight sm:text-lg ">Have a project in mind?</h4>
                <form action="" className="mt-4 flex flex-col gap-7">
                    <input type="text" placeholder="Your name"
                        className="w-full border rounded-xl px-4 py-3 bg-surface/15"
                    />
                    <input type="text" placeholder="Your email address"
                        className="w-full border rounded-xl px-4 py-3 bg-surface/15"
                    />
                    <textarea type="text" placeholder="Tell me about your business or project"
                        className="w-full min-h-30 border rounded-xl px-4 py-3 bg-surface/15 resize-none"
                    />

                    <button type="submit" className="px-6 py-3.5 text-xs font-semibold leading-4 text-center rounded-xl bg-surface/17 md:whitespace-nowrap lg:text-sm">Get a quote</button>
                </form>
            </div>
            <span className="mt-8 text-xs font-light text-text/60">Design & build by Allan Rodríguez</span>
        </section>
    )
}