export function Tag({ children }) {
    return (
        <li className="mr-1.5 mt-2">
            <div className="px-3 py-1 bg-surface/17 text-accent rounded-full">
                {children}
            </div>
        </li>
    )
}