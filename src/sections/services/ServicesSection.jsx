import {
    EditorialHeader,
    LayerShell,
} from "../services-stack/SectionUi"
import { ServicesContent } from "./ServicesContent"
import {
    SERVICES_ITEMS,
    SERVICES_SECTION,
    SERVICES_SUMMARY_INDEX,
    SERVICES_SUMMARY_LABEL,
    servicesTheme,
} from "./servicesConfig"

export function ServicesSection({
    activeIndex,
    clipPath,
    visibility,
    staticMode = false,
}) {
    const summaryFocused =
        !staticMode && activeIndex === SERVICES_SUMMARY_INDEX
    const servicesResolved =
        !staticMode && activeIndex > SERVICES_SUMMARY_INDEX

    return (
        <LayerShell
            labelledBy="services-title"
            theme={servicesTheme}
            style={
                staticMode
                    ? undefined
                    : {
                          clipPath,
                          visibility,
                          willChange: "clip-path",
                      }
            }
            staticMode={staticMode}
            layerClassName={staticMode ? "" : "z-20"}
        >
            <EditorialHeader
                headingId="services-title"
                index={SERVICES_SECTION.index}
                label={SERVICES_SECTION.displayLabel}
                title={SERVICES_SECTION.motionTitle}
                description={SERVICES_SECTION.description}
                activeIndex={activeIndex}
                total={SERVICES_ITEMS.length}
                theme={servicesTheme}
                staticMode={staticMode}
                statusLabel={servicesResolved ? "Resolved" : "In focus"}
                statusValue={
                    summaryFocused || servicesResolved
                        ? SERVICES_SUMMARY_LABEL
                        : undefined
                }
            />
            <ServicesContent
                activeIndex={activeIndex}
                staticMode={staticMode}
                summaryFocused={summaryFocused}
                theme={servicesTheme}
            />
        </LayerShell>
    )
}
