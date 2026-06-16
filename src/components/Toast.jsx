import { createPortal } from "react-dom"
import { useIsClient } from "../hooks/useIsClient"

export function Toast({ toast, leaving, onClose }) {
    const isClient = useIsClient()

    if (!toast || !isClient) return null

    const isSuccess = toast.type === 'success'

    return createPortal(
        <div
            role="status"
            aria-live="polite"
            className={`fixed inset-x-4 bottom-6 z-[9999] mx-auto flex items-start gap-3 rounded-xl border px-5 py-4 shadow-2xl sm:inset-x-auto sm:left-auto sm:right-6 sm:w-auto sm:max-w-sm ${leaving ? 'animate-[toast-out_300ms_ease-out_forwards]' : 'animate-[toast-in_300ms_ease-out_forwards]'
                } ${isSuccess ? 'border-accent/25 bg-[#15140F]/95' : 'border-red-400/25 bg-[#1A1212]/95'}`}
        >
            <span
                className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${isSuccess ? 'bg-accent/15 text-accent' : 'bg-red-400/15 text-red-400'
                    }`}
            >
                {isSuccess ? '✓' : '!'}
            </span>
            <p className="flex-1 text-sm leading-relaxed text-surface">{toast.message}</p>
            <button
                onClick={onClose}
                aria-label="Cerrar notificación"
                className="shrink-0 text-surface/40 transition-colors hover:text-surface"
            >
                ✕
            </button>
        </div>,
        document.body
    )
}