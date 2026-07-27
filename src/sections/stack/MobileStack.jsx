import {
    MobileNumberChip,
    MobileSectionMarker,
} from "../services-stack/SectionUi"
import {
    STACK_ITEMS,
    STACK_SECTION,
    stackTheme,
} from "./stackConfig"
import { TechPills } from "./TechPills"

export function MobileStack() {
    return (
        <article
            id="stack"
            aria-labelledby="mobile-stack-title"
            className="scroll-mt-24"
            style={{
                backgroundColor: stackTheme.surface,
                color: stackTheme.text,
            }}
        >
            <div className="px-6 pb-14 pt-12 sm:px-8 sm:pt-14">
                <header>
                    <MobileSectionMarker
                        index={STACK_SECTION.index}
                        label={STACK_SECTION.displayLabel}
                        theme={stackTheme}
                    />
                    <h2
                        id="mobile-stack-title"
                        className="mt-5 max-w-[23rem] text-[1.75rem] font-extrabold leading-[1.08] tracking-[-0.045em]"
                    >
                        {STACK_SECTION.motionTitle.join(" ")}
                    </h2>
                    <p
                        className="mt-4 max-w-[23rem] text-[0.84rem] leading-[1.55]"
                        style={{ color: stackTheme.bodyStrong }}
                    >
                        {STACK_SECTION.description}
                    </p>
                </header>

                <div
                    className="relative mt-8 border-t"
                    style={{ borderColor: stackTheme.rule }}
                >
                    <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-y-0 left-7 w-px"
                        style={{ backgroundColor: stackTheme.guide }}
                    />
                    <ol>
                        {STACK_ITEMS.map((item) => (
                            <li
                                key={item.id}
                                className="relative min-h-[9.95rem] border-b py-5 pl-14 pr-7"
                                style={{ borderColor: stackTheme.rule }}
                            >
                                <MobileNumberChip
                                    id={item.id}
                                    theme={stackTheme}
                                />

                                <h3 className="pr-6 text-xl font-bold leading-[1.2] tracking-[-0.035em]">
                                    {item.title}
                                </h3>
                                <p
                                    className="mt-2 font-mono text-[0.61rem] uppercase leading-relaxed tracking-wide"
                                    style={{ color: stackTheme.labelStrong }}
                                >
                                    {item.category}
                                </p>
                                <div className="mt-3">
                                    <TechPills
                                        technologies={item.technologies}
                                        theme={stackTheme}
                                        compact
                                    />
                                </div>
                                <div
                                    className="mt-3 flex flex-col font-mono text-[0.57rem] uppercase leading-[1.9]"
                                    style={{ color: stackTheme.metaText }}
                                >
                                    {item.meta.map((meta) => (
                                        <span key={meta}>[ {meta} ]</span>
                                    ))}
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </article>
    )
}
