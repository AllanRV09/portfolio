import { motion } from "framer-motion";

export function ExperienceItem({ experience }) {
    const { role, type, company, year, description, tags } = experience;

    return (
        <motion.li
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.15 }}
            className="py-12 border-t border-surface/10"
        >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">

                {/* Year */}
                <div className="md:col-span-3 lg:col-span-2 self-start">
                    <span className="text-xs font-semibold uppercase tracking-[0.08em] text-surface/20 whitespace-nowrap pt-2 block">
                        {year}
                    </span>
                </div>

                {/* Content */}
                <div className="md:col-span-9 lg:col-span-10">
                    <div className="flex flex-col">
                        <h3 className="text-xl md:text-3xl lg:text-4xl font-bold tracking-tighter uppercase text-surface leading-[0.9]">
                            {role}
                        </h3>

                        {(type || company) && (
                            <p className="text-xs text-surface/30 mt-2 font-semibold uppercase tracking-[0.2em]">
                                {[type, company].filter(Boolean).join(" · ")}
                            </p>
                        )}
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                        viewport={{ once: true, amount: 0.15 }}
                        className="mt-6 font-light text-base md:text-lg tracking-wide leading-relaxed max-w-[65ch] text-text/70"
                    >
                        {description}
                    </motion.p>

                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
                        viewport={{ once: true, amount: 0.15 }}
                        className="flex flex-wrap gap-1.5 mt-8"
                    >
                        {tags.map((tag) => (
                            <li
                                key={tag}
                                className="text-xs font-semibold uppercase tracking-[0.2em] px-2.5 py-1 border border-surface/10 text-surface/30 rounded-none transition-all duration-500"
                            >
                                {tag}
                            </li>
                        ))}
                    </motion.ul>
                </div>
            </div>
        </motion.li>
    );
}