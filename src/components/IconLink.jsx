export function IconLink({ href, icon: Icon, onClick, className = "w-5 h-5", name }) {
    return (
        <a
            href={href}
            onClick={onClick}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
            aria-label={name}
        >
            <Icon className={className} aria-hidden="true" />
        </a>
    )
}