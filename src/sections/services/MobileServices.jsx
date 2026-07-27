import {
    MobileNumberChip,
    MobileSectionMarker,
} from "../services-stack/SectionUi"
import {
    SERVICES_ITEMS,
    SERVICES_SECTION,
    servicesTheme,
} from "./servicesConfig"

function MobileServicesSummary() {
    return (
        <div
            className="relative border-b py-5 pl-14"
            style={{ borderColor: servicesTheme.rule }}
        >
            <MobileNumberChip id="+" theme={servicesTheme} filled />

            <div>
                <p
                    className="font-mono text-[0.62rem] uppercase tracking-[0.18em]"
                    style={{ color: servicesTheme.accent }}
                >
                    {SERVICES_SECTION.summary.interface.title}
                </p>
                <p
                    className="mt-2 max-w-[29rem] text-[0.9rem] leading-[1.6]"
                    style={{ color: servicesTheme.bodyStrong }}
                >
                    {SERVICES_SECTION.summary.interface.description}
                </p>
            </div>

            <div className="mt-6">
                <p
                    className="font-mono text-[0.62rem] uppercase tracking-[0.18em]"
                    style={{ color: servicesTheme.accent }}
                >
                    {SERVICES_SECTION.summary.system.title}
                </p>
                <p
                    className="mt-2 max-w-[29rem] text-[0.9rem] leading-[1.6]"
                    style={{ color: servicesTheme.bodyStrong }}
                >
                    {SERVICES_SECTION.summary.system.description}
                </p>
            </div>
        </div>
    )
}

export function MobileServices() {
    return (
        <article
            id="services"
            aria-labelledby="mobile-services-title"
            className="scroll-mt-24"
            style={{
                backgroundColor: servicesTheme.surface,
                color: servicesTheme.text,
            }}
        >
            <div className="px-6 pb-14 pt-12 sm:px-8 sm:pt-14">
                <header>
                    <MobileSectionMarker
                        index={SERVICES_SECTION.index}
                        label={SERVICES_SECTION.displayLabel}
                        theme={servicesTheme}
                    />
                    <h2
                        id="mobile-services-title"
                        className="mt-7 max-w-[23rem] text-[1.75rem] font-extrabold leading-[1.1] tracking-[-0.045em]"
                    >
                        {SERVICES_SECTION.motionTitle.join(" ")}
                    </h2>
                    <p
                        className="mt-4 max-w-[20rem] text-[0.84rem] leading-[1.55]"
                        style={{ color: servicesTheme.bodyStrong }}
                    >
                        {SERVICES_SECTION.description}
                    </p>
                </header>

                <div
                    className="relative mt-8 border-t"
                    style={{ borderColor: servicesTheme.rule }}
                >
                    <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-y-0 left-7 w-px"
                        style={{ backgroundColor: servicesTheme.guide }}
                    />
                    <ol>
                        {SERVICES_ITEMS.map((item) => (
                            <li
                                key={item.id}
                                className="relative min-h-[6.75rem] border-b py-5 pl-14"
                                style={{ borderColor: servicesTheme.rule }}
                            >
                                <MobileNumberChip
                                    id={item.id}
                                    theme={servicesTheme}
                                />
                                <h3 className="text-xl font-bold leading-[1.2] tracking-[-0.035em]">
                                    {item.title}
                                </h3>
                                <p
                                    className="mt-3 max-w-[29rem] text-[0.9rem] leading-[1.6]"
                                    style={{ color: servicesTheme.bodyStrong }}
                                >
                                    {item.description}
                                </p>
                            </li>
                        ))}
                    </ol>
                    <MobileServicesSummary />
                </div>
            </div>
        </article>
    )
}
