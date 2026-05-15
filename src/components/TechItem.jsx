export function TechItem({ icon: Icon, name }) {
    return (
        <div className="flex flex-wrap gap-2 items-center">
            <Icon className="w-8 h-8 hover:text-accent transition-colors" />
            <span className="text-lg font-light">{name}</span>
        </div>
    )
}