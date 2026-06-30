import { memo } from 'react';
import { useLocalTime } from '../hooks/useLocalTime';

export const LocalTimeDisplay = memo(function LocalTimeDisplay() {
    const localTime = useLocalTime();
    return (
        <span className="text-sm lg:text-lg text-background/60 font-mono tabular-nums">
            {localTime}
        </span>
    );
});