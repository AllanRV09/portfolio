export function TechItem({ icon: Icon, name }) {
    return (
        <div className="flex items-center gap-4 group cursor-pointer py-4 border-b border-surface/5 hover:border-accent/30 transition-all duration-300">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface/5 group-hover:bg-accent/10 transition-colors">
                <Icon className="w-5 h-5 text-surface/60 group-hover:text-accent transition-colors" />
            </div>

            <span className="text-sm md:text-base font-medium text-surface/80 group-hover:text-surface transition-colors">
                {name}
            </span>
        </div>
    )
}