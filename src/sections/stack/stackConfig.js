import { STACK, STACK_DATA } from "../../data/stack-data"
import {
    INK,
    PAPER,
    createSectionTheme,
} from "../services-stack/theme"

const STACK_ACCENT = "#006D77"

export const stackTheme = createSectionTheme({
    surface: PAPER,
    text: INK,
    accent: STACK_ACCENT,
    markerOpacity: 0.8,
    separatorOpacity: 0.25,
    secondaryOpacity: 0.65,
    guideOpacity: 0.15,
    chipIdleOpacity: 0.9,
})

export const STACK_ITEMS = STACK.map(
    ({ id, displayTitle, category, meta, techs }) => ({
        id,
        title: displayTitle,
        category,
        meta,
        technologies: techs,
    }),
)

export const STACK_SECTION = STACK_DATA
