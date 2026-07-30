export function SectionMarker({ index, label }) {
  return (
    <p className="type-section-marker group flex cursor-default items-center gap-3 text-surface/90">
      <span className="text-surface transition-colors group-hover:text-surface/80">
        {index}
      </span>

      <span className="text-surface/45">/</span>

      <span className="text-surface/90 transition-colors group-hover:text-surface">
        {label}
      </span>
    </p>
  );
}

export function SectionLayout({ index, label, children }) {
  return (
    <div className="container-main">
      <SectionMarker index={index} label={label} />

      <div className="mt-9">
        {children}
      </div>
    </div>
  );
}
