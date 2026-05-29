import { FeatureList } from "./FeatureList";

export function ServiceCard({ title, description, features, idx }) {
    return (
        <div className="h-screen sticky top-0 flex flex-col items-start" role="region" aria-label={`Service ${title}`}>
            <div
                style={{
                    top: `calc(6rem + ${idx * 85}px)`,
                }}
                className="w-full bg-background origin-top relative"
            >
                <div className="absolute top-0 w-full border-t border-surface/10" />

                <div className="grid grid-cols-12 lg:gap-x-20 pt-5">

                    <div className="col-span-12 md:col-span-3 lg:col-span-2">
                        <span className="text-base md:text-3xl font-light text-surface/20 italic block md:pt-2" aria-hidden="true">
                            ({String(idx + 1).padStart(2, "0")})
                        </span>
                    </div>

                    <div className="col-span-12 md:col-span-9 lg:col-span-10">
                        <h3 className="text-xl md:text-4xl lg:text-5xl font-semibold tracking-tighter uppercase text-surface mb-12">
                            {title}
                        </h3>

                        <p className="text-sm md:text-lg text-surface/60 font-light leading-relaxed mb-8 max-w-2xl">{description}</p>

                        <FeatureList features={features} />
                    </div>
                </div>
            </div>
        </div>
    );
}