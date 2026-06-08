import { motion } from "framer-motion";

export function ExperienceItem({ experience, index }) {
    const { role, type, company, year, description, tags } = experience;

    return (
        <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ 
                opacity: 1, 
                transition: {
                    duration: 0.8,
                    ease: [0.215, 0.61, 0.355, 1],
                    delay: index * 0.15
                }
            }}
            viewport={{ once: true, amount: 0.2 }}
            className="py-12 border-t border-surface/10 transition-all duration-500"
        >
            <motion.div 
                initial={{ opacity: 0.5 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 perspective-1000"
            >
                {/* Year - Left Column (Sticky) */}
                <div className="md:col-span-3 lg:col-span-2 md:top-32 self-start">
                    <motion.span 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.15) + 0.3 }}
                        className="text-xs font-semibold uppercase tracking-[0.08em] text-surface/20 whitespace-nowrap pt-2 block"
                    >
                        {year}
                    </motion.span>
                </div>

                {/* Content - Right Column */}
                <div className="md:col-span-9 lg:col-span-10">
                    <div className="flex flex-col">
                        <h3 className="text-xl md:text-3xl lg:text-4xl font-bold tracking-tighter uppercase text-surface leading-[0.9]">
                            {role}
                        </h3>

                        {(type || company) && (
                            <motion.p 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: (index * 0.15) + 0.4 }}
                                className="text-xs text-surface/30 mt-2 font-semibold uppercase tracking-[0.2em]"
                            >
                                {[type, company].filter(Boolean).join(" · ")}
                            </motion.p>
                        )}
                    </div>

                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: (index * 0.15) + 0.5 }}
                        className="mt-6 font-light text-base md:text-lg tracking-wide leading-relaxed max-w-[65ch] text-text/70 hover:text-text transition-colors duration-300"
                    >
                        {description}
                    </motion.p>

                    <motion.ul 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: (index * 0.15) + 0.6 }}
                        className="flex flex-wrap gap-1.5 mt-8"
                    >
                        {tags.map((tag, i) => (
                            <motion.li
                                key={tag}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: (index * 0.15) + 0.6 + (i * 0.05) }}
                                className="text-xs font-semibold uppercase tracking-[0.2em] px-2.5 py-1 border border-surface/10 text-surface/30 rounded-none transition-all duration-500"
                            >
                                {tag}
                            </motion.li>
                        ))}
                    </motion.ul>
                </div>
            </motion.div>
        </motion.li>
    );
}