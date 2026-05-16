export function TechItem({ icon: Icon, name }) {
    return (
        <div className="flex flex-wrap gap-2 items-center group cursor-pointer">
            <Icon className="w-8 h-8 transition-colors duration-200 group-hover:text-accent" />
            <span className="text-lg font-light transition-colors duration-200 group-hover:text-accent">
                {name}
            </span>
        </div>
    )
}