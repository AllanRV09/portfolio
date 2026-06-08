import { motion } from 'framer-motion';

export function SectionLayout({ index, label, children }) {
  return (
    <div className="container-main grid grid-cols-12 md:gap-x-12 last:mb-0">
      
      <div className="col-span-12 md:col-span-3 lg:col-span-2 flex items-start">
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.4 }}
          className="group cursor-default"
        >
          <p className="text-xs tracking-[0.2em] font-semibold uppercase text-surface/40 flex items-center gap-2">
            
            <span className="text-surface/20 transition-colors group-hover:text-surface/40">
              {index}
            </span>

            <span className="text-surface/10">/</span>

            <span className="text-surface/60 group-hover:text-surface/80 transition-colors">
              {label}
            </span>
          </p>
        </motion.div>
      </div>

      <motion.div
        className="col-span-12 md:col-span-9 lg:col-span-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {children}
      </motion.div>
    </div>
  );
}