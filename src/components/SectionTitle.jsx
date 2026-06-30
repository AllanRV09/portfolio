import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const TITLE_CONTAINER_VARIANTS = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const TITLE_WORD_VARIANTS = {
  hidden: { y: '110%' },
  show: {
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function SectionTitle({ children, className = '' }) {
  const text = typeof children === 'string' ? children : '';
  const words = text ? text.split(' ') : [];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.h2
      ref={ref}
      variants={TITLE_CONTAINER_VARIANTS}
      initial="hidden"
      animate={isInView ? 'show' : 'hidden'}
      className={
        "mb-8 flex flex-wrap gap-x-[0.22em] text-[clamp(2.5rem,7vw,5rem)] font-extrabold tracking-tighter uppercase text-surface leading-[0.9] " +
        className
      }
    >
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden inline-block">
          <motion.span variants={TITLE_WORD_VARIANTS} className="inline-block">
            {word}
          </motion.span>
        </span>
      ))}
    </motion.h2>
  );
}