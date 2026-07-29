import {
    EditorialHeader,
    LayerShell,
} from "../services-stack/SectionUi"
import { StackContent } from "./StackContent"
import {
    STACK_ITEMS,
    STACK_SECTION,
    stackTheme,
} from "./stackConfig"

export function StackSection({ activeIndex, staticMode = false }) {
    return (
        <LayerShell
            labelledBy="stack-title"
            theme={stackTheme}
            style={staticMode ? { borderColor: stackTheme.rule } : undefined}
            staticMode={staticMode}
            layerClassName={staticMode ? "border-t" : "z-10"}
        >
            <EditorialHeader
                headingId="stack-title"
                index={STACK_SECTION.index}
                label={STACK_SECTION.label}
                title={STACK_SECTION.title}
                description={STACK_SECTION.description}
                activeIndex={activeIndex}
                total={STACK_ITEMS.length}
                theme={stackTheme}
                staticMode={staticMode}
                statusLabel="Active"
            />
            <StackContent
                activeIndex={activeIndex}
                staticMode={staticMode}
                theme={stackTheme}
            />
        </LayerShell>
    )
}
