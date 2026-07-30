export function SectionTitle({ children, className = '' }) {
  return (
    <h2
      className={`type-section-title mb-10 text-surface ${className}`}
    >
      {children}
    </h2>
  );
}
