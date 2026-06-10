import { SectionTitle } from "../components/SectionTitle";
import { SectionLayout } from "../components/SectionLayout";
import { STACK, STACK_DATA } from "../data";
import { motion } from "framer-motion";

export function Stack() {
    const { index, label, title, description } = STACK_DATA;

    const frontend = STACK.find(s => s.title === "FRONTEND");
    const backend = STACK.find(s => s.title === "BACKEND");
    const database = STACK.find(s => s.title === "DATABASE");
    const tools = STACK.find(s => s.title === "TOOLS");

    return (
        <section id="stack" className="relative z-20 bg-background border-b border-surface/10 py-24 md:py-32 scroll-mt-24">
            <SectionLayout index={index} label={label}>
                <SectionTitle>{title}</SectionTitle>

                <div className="mb-12">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}  // era sin delay y duration 0.7
                        viewport={{ once: true, amount: 0.2 }}
                        className="font-light text-lg md:text-xl tracking-wide leading-relaxed max-w-[65ch] text-text/70"
                    >
                        {description}
                    </motion.p>
                </div>
            </SectionLayout>

            <div className="container-main mt-12 grid grid-cols-12 md:gap-x-12">
                {/* Spacer to align with SectionLayout content column */}
                <div className="hidden md:block md:col-span-3 lg:col-span-2" />

                <div className="col-span-12 md:col-span-9 lg:col-span-10 grid grid-cols-12 gap-4 md:gap-6">
                    {/* FRONTEND — col-span-7 */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="col-span-12 lg:col-span-7 group relative overflow-hidden rounded-3xl border border-surface/10 bg-surface/5 p-7 hover:border-accent/30 transition-colors duration-500"
                    >
                        <BlockLabel>Frontend</BlockLabel>
                        <div className="grid grid-cols-3 gap-6">
                            {frontend?.techs.map((tech) => (
                                <TechIcon key={tech.name} tech={tech} />
                            ))}
                        </div>
                    </motion.div>

                    {/* BACKEND — col-span-5 */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="col-span-12 lg:col-span-5 group relative overflow-hidden rounded-3xl border border-surface/10 bg-surface/5 p-7 hover:border-accent/30 transition-colors duration-500 flex flex-col"
                    >
                        <BlockLabel>Backend</BlockLabel>
                        <div className="flex flex-col gap-3 flex-1">
                            {backend?.techs.map((tech) => (
                                <TechRow key={tech.name} tech={tech} subtitle="Servidor & APIs" />
                            ))}
                        </div>
                    </motion.div>

                    {/* DATABASE — col-span-6 */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="col-span-12 lg:col-span-6 group relative overflow-hidden rounded-3xl border border-surface/10 bg-surface/5 p-7 hover:border-accent/30 transition-colors duration-500"
                    >
                        <BlockLabel>Databases</BlockLabel>
                        <div className="grid grid-cols-2 gap-3">
                            {database?.techs.map((tech) => (
                                <TechChip key={tech.name} tech={tech} />
                            ))}
                        </div>
                    </motion.div>

                    {/* TOOLS — col-span-6 */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="col-span-12 lg:col-span-6 group relative overflow-hidden rounded-3xl border border-surface/10 bg-surface/5 p-7 hover:border-accent/30 transition-colors duration-500 flex flex-col justify-between"
                    >
                        <BlockLabel>Tools</BlockLabel>
                        <div className="flex flex-col gap-3">
                            {tools?.techs.map((tech) => (
                                <TechRow key={tech.name} tech={tech} subtitle="Control de versiones" />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

/* ── Subcomponentes ── */

function BlockLabel({ children }) {
    return (
        <span className="block text-xs font-bold tracking-[0.2em] uppercase text-accent mb-6">
            {children}
        </span>
    );
}

/** Ícono grande con nombre debajo — usado en Frontend */
function TechIcon({ tech }) {
    const Icon = tech.icon;
    return (
        <div className="flex flex-col items-center gap-3 group/item">
            <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-background border border-surface/5 group-hover/item:border-accent/50 group-hover/item:shadow-[0_0_20px_rgba(var(--accent-rgb),0.08)] transition-[border-color,box-shadow] duration-300">
                <Icon className="h-7 w-7 text-text/35 group-hover/item:text-accent transition duration-300 group-hover/item:scale-110" />
            </div>
            <span className="text-xs font-medium tracking-wide text-text/35 group-hover/item:text-text/70 transition-colors duration-300 text-center leading-tight">
                {tech.name}
            </span>
        </div>
    );
}

/** Fila horizontal con ícono + nombre + subtítulo — usado en Backend y Tools */
function TechRow({ tech, subtitle }) {
    const Icon = tech.icon;
    return (
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-surface/10 bg-background/40 hover:border-accent/30 hover:bg-surface/10 transition-colors duration-300 group/item">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface/10 border border-surface/10 group-hover/item:border-accent/30 transition-colors duration-300 shrink-0">
                <Icon className="h-4 w-4 text-text/40 group-hover/item:text-accent transition-colors duration-300" />
            </div>
            <div>
                <p className="text-sm font-medium text-text/70 group-hover/item:text-text transition-colors duration-300 leading-none mb-0.5">
                    {tech.name}
                </p>
                {subtitle && (
                    <p className="text-xs text-text/30 leading-none">{subtitle}</p>
                )}
            </div>
        </div>
    );
}

/** Chip compacto — usado en Database */
function TechChip({ tech }) {
    const Icon = tech.icon;
    return (
        <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:items-center sm:justify-start sm:gap-3 px-4 py-3 rounded-xl border border-surface/10 bg-background/40 hover:border-accent/30 hover:bg-surface/10 transition-colors duration-300 group/item">
            <Icon className="h-5 w-5 text-text/40 group-hover/item:text-accent transition-colors duration-300 shrink-0" />
            <span className="text-sm font-medium text-text/60 group-hover/item:text-text transition-colors duration-300 text-center sm:text-left">
                {tech.name}
            </span>
        </div>
    );
}