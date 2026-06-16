import { useState, useRef, useCallback, useEffect } from "react"

const AUTO_HIDE_DELAY = 4500
const EXIT_ANIMATION_DURATION = 300

export function useToast() {
    const [toast, setToast] = useState(null)
    const [leaving, setLeaving] = useState(false)
    const hideTimer = useRef(null)
    const removeTimer = useRef(null)

    const dismiss = useCallback(() => {
        setToast(null)
        setLeaving(false)
    }, [])

    const closeToast = useCallback(() => {
        clearTimeout(hideTimer.current)
        clearTimeout(removeTimer.current)
        setLeaving(true)
        removeTimer.current = setTimeout(dismiss, EXIT_ANIMATION_DURATION)
    }, [dismiss])

    const showToast = useCallback((type, message) => {
        setLeaving(false)
        setToast({ id: Date.now(), type, message })
    }, [])

    useEffect(() => {
        if (!toast) return

        hideTimer.current = setTimeout(() => setLeaving(true), AUTO_HIDE_DELAY)
        removeTimer.current = setTimeout(dismiss, AUTO_HIDE_DELAY + EXIT_ANIMATION_DURATION + 50)

        return () => {
            clearTimeout(hideTimer.current)
            clearTimeout(removeTimer.current)
        }
    }, [toast, dismiss])

    return { toast, leaving, showToast, closeToast }
}