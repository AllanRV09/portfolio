import { useSyncExternalStore } from "react"

function emptySubscribe() {
    return () => { }
}

export function useIsClient() {
    return useSyncExternalStore(emptySubscribe, () => true, () => false)
}