export function SectionTitle({ children, className = '' }) {
  return (
    <h2
      className={`mb-10 text-[clamp(2.35rem,2.9vw,3.7rem)] font-extrabold leading-[0.98] tracking-[-0.055em] text-surface ${className}`}
    >
      {children}
    </h2>
  );
}
