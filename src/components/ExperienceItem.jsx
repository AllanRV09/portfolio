import { motion } from "framer-motion";

export function ExperienceItem({ experience, index }) {
    const [role, company] = experience.title.split("•").map(s => s.trim());
    const roleLines = role.split(" ");
    const mid = Math.ceil(roleLines.length / 2);
    const roleLine1 = roleLines.slice(0, mid).join(" ");
    const roleLine2 = roleLines.slice(mid).join(" ");

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
            className="py-12 border-t border-surface/10 last:border-b last:border-surface/10 transition-all duration-500"
        >
            <motion.div 
                initial={{ opacity: 0.5 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 perspective-1000"
            >
                {/* Year - Left Column (Sticky) */}
                <div className="md:col-span-3 lg:col-span-2 md:sticky md:top-32 self-start">
                    <motion.span 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.15) + 0.3 }}
                        className="text-[11px] font-medium tracking-widest uppercase text-surface/20 whitespace-nowrap pt-2 block"
                    >
                        {experience.year}
                    </motion.span>
                </div>

                {/* Content - Right Column */}
                <div className="md:col-span-9 lg:col-span-10">
                    <div className="flex flex-col">
                        <h3 className="text-[2rem] font-medium leading-[1.1] tracking-tight text-surface">
                            {roleLine1}<br />{roleLine2}
                        </h3>

                        {company && (
                            <motion.p 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: (index * 0.15) + 0.4 }}
                                className="text-xs text-surface/30 mt-2 tracking-wide font-medium uppercase tracking-widest"
                            >
                                {company}
                            </motion.p>
                        )}
                    </div>

                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: (index * 0.15) + 0.5 }}
                        className="mt-6 text-sm font-light leading-relaxed text-text/60 max-w-[60ch]"
                    >
                        {experience.description}
                    </motion.p>

                    <motion.ul 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: (index * 0.15) + 0.6 }}
                        className="flex flex-wrap gap-1.5 mt-8"
                    >
                        {experience.tags.map((tag, i) => (
                            <motion.li
                                key={tag}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: (index * 0.15) + 0.6 + (i * 0.05) }}
                                className="text-[10.5px] font-medium uppercase tracking-widest px-2.5 py-1 border border-surface/10 text-surface/20 rounded-none transition-all duration-500"
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