export const BLACK = "#0E0E0E"
export const PAPER = "#E8E3D9"
export const INK = "#10100f"

const withAlpha = (hex, alpha) => {
    const value = hex.replace("#", "")
    const channels =
        value.length === 3
            ? [...value].map((channel) =>
                  Number.parseInt(channel.repeat(2), 16),
              )
            : [0, 2, 4].map((index) =>
                  Number.parseInt(value.slice(index, index + 2), 16),
              )

    return `rgba(${channels.join(", ")}, ${alpha})`
}

export function createSectionTheme({
    surface,
    text,
    accent,
    markerOpacity,
    separatorOpacity,
    secondaryOpacity,
    guideOpacity,
    chipIdleOpacity,
}) {
    return {
        surface,
        text,
        accent,
        marker: withAlpha(text, markerOpacity),
        separator: withAlpha(text, separatorOpacity),
        secondary: withAlpha(text, secondaryOpacity),
        rule: withAlpha(text, 0.15),
        guide: withAlpha(text, guideOpacity),
        rowCompleted: withAlpha(text, 0.68),
        rowMuted: withAlpha(text, 0.42),
        labelStrong: withAlpha(text, 0.9),
        labelCompleted: withAlpha(text, 0.65),
        labelMuted: withAlpha(text, 0.45),
        bodyStrong: withAlpha(text, 0.7),
        bodyMuted: withAlpha(text, 0.4),
        summaryText: withAlpha(text, 0.55),
        metaText: withAlpha(text, 0.85),
        pillText: withAlpha(text, 0.95),
        pillBorder: withAlpha(accent, 0.45),
        chip: {
            background: surface,
            fill: accent,
            filledText: surface,
            idleText: withAlpha(accent, chipIdleOpacity),
            filledBorder: accent,
            idleBorder: withAlpha(accent, 0.35),
        },
    }
}

export const ACTIVE_TRACK_TRANSITION = {
    duration: 0.24,
    ease: [0.22, 1, 0.36, 1],
}

export const CHIP_FILL_TRANSITION = {
    duration: 0.26,
    ease: [0.65, 0, 0.35, 1],
}

export const CHIP_TEXT_TRANSITION = {
    duration: 0.16,
    ease: "easeOut",
}

export const formatCount = (value) => String(value).padStart(2, "0")
