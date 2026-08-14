import { useState, useEffect } from "react";

const MINUTE_IN_MILLISECONDS = 60_000;

const COSTA_RICA_TIME_FORMATTER = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "America/Costa_Rica",
});

const getMillisecondsUntilNextMinute = (date) =>
    MINUTE_IN_MILLISECONDS -
    (date.getSeconds() * 1000 + date.getMilliseconds());

export function useLocalTime() {
    const [time, setTime] = useState(() => new Date());

    useEffect(() => {
        let timeoutId;

        const scheduleNextMinuteUpdate = () => {
            const now = new Date();

            timeoutId = setTimeout(() => {
                setTime(new Date());
                scheduleNextMinuteUpdate();
            }, getMillisecondsUntilNextMinute(now));
        };

        scheduleNextMinuteUpdate();

        return () => clearTimeout(timeoutId);
    }, []);

    return COSTA_RICA_TIME_FORMATTER.format(time);
}
