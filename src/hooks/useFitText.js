import { useLayoutEffect } from "react";

export function useFitText({
    frameRef,
    textRef,
    measureRef,
    text,
    measurementFontSize = 100,
    fontWeight = 800,
    fontFamily = "MangoGrotesque",
}) {
    useLayoutEffect(() => {
        const frame = frameRef.current;
        const visibleText = textRef.current;
        const measurementText = measureRef.current;

        if (!frame || !visibleText || !measurementText) {
            return undefined;
        }

        let animationFrameId;
        let isDisposed = false;
        let resolutionMediaQuery;

        const fitText = () => {
            if (isDisposed) return;

            const availableWidth = frame.clientWidth;

            const measuredWidth =
                measurementText.getBoundingClientRect().width;

            if (
                availableWidth <= 0 ||
                measuredWidth <= 0
            ) {
                return;
            }

            const fittedFontSize =
                measurementFontSize *
                (availableWidth / measuredWidth);

            visibleText.style.fontSize =
                `${fittedFontSize}px`;
        };

        const scheduleFit = () => {
            if (isDisposed) return;

            cancelAnimationFrame(animationFrameId);

            animationFrameId =
                requestAnimationFrame(fitText);
        };

        const watchCurrentResolution = () => {
            resolutionMediaQuery?.removeEventListener(
                "change",
                handleResolutionChange,
            );

            resolutionMediaQuery = window.matchMedia(
                `(resolution: ${window.devicePixelRatio}dppx)`,
            );

            resolutionMediaQuery.addEventListener(
                "change",
                handleResolutionChange,
            );
        };

        function handleResolutionChange() {
            watchCurrentResolution();
            scheduleFit();
        }

        fitText();

        const resizeObserver =
            new ResizeObserver(scheduleFit);

        resizeObserver.observe(frame);
        resizeObserver.observe(measurementText);

        window.addEventListener(
            "resize",
            scheduleFit,
        );

        window.visualViewport?.addEventListener(
            "resize",
            scheduleFit,
        );

        watchCurrentResolution();

        const fontPromise = document.fonts?.load(
            `${fontWeight} ${measurementFontSize}px "${fontFamily}"`,
            text,
        );

        fontPromise?.then(
            scheduleFit,
            scheduleFit,
        );

        return () => {
            isDisposed = true;

            resizeObserver.disconnect();

            window.removeEventListener(
                "resize",
                scheduleFit,
            );

            window.visualViewport?.removeEventListener(
                "resize",
                scheduleFit,
            );

            resolutionMediaQuery?.removeEventListener(
                "change",
                handleResolutionChange,
            );

            cancelAnimationFrame(animationFrameId);
        };
    }, [
        frameRef,
        textRef,
        measureRef,
        text,
        measurementFontSize,
        fontWeight,
        fontFamily,
    ]);
}
