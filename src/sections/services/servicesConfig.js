import { SERVICES, SERVICES_DATA } from "../../data/data"
import {
    BLACK,
    PAPER,
    createSectionTheme,
} from "../services-stack/theme"

export const servicesTheme = createSectionTheme({
    surface: BLACK,
    text: PAPER,
    accent: PAPER,
    markerOpacity: 0.9,
    separatorOpacity: 0.45,
    secondaryOpacity: 0.85,
    guideOpacity: 0.2,
    chipIdleOpacity: 0.7,
})

export const SERVICES_ITEMS = SERVICES.map(
    ({ title, description }, index) => ({
        id: String(index + 1).padStart(2, "0"),
        title,
        description,
    }),
)

export const SERVICES_SECTION = SERVICES_DATA

export const SERVICES_SUMMARY_INDEX = SERVICES_ITEMS.length
export const SERVICES_SCROLL_STEP_COUNT = SERVICES_SUMMARY_INDEX + 2
export const SERVICES_SUMMARY_LABEL =
    `${SERVICES_SECTION.summary.interface.title} / ${SERVICES_SECTION.summary.system.title}`
