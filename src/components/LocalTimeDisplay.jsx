import { useLocalTime } from "../hooks/useLocalTime";

export function LocalTimeDisplay() {
    const localTime = useLocalTime();

    return (
        <div className="flex items-center gap-2">
            <span className="relative inline-flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="text-sm lg:text-lg text-background/60 font-mono tabular-nums">
                {localTime}
            </span>
        </div>
    );
}