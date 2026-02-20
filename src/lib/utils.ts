import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const smoothScrollTo = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const href = e.currentTarget.getAttribute("href");
    if (!href || !href.startsWith("#")) return;

    e.preventDefault();
    const targetId = href.substring(1);
    const elem = document.getElementById(targetId);
    if (!elem) return;

    // 100px offset to accommodate the fixed header
    const targetPosition = elem.getBoundingClientRect().top + window.scrollY - 100;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 800; // Smooth 800ms duration
    let start: number | null = null;

    // Easing function
    const easeInOutCubic = (t: number, b: number, c: number, d: number) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t * t + b;
        t -= 2;
        return (c / 2) * (t * t * t + 2) + b;
    };

    const animation = (currentTime: number) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        } else {
            // Guarantee final destination jump and history update
            window.scrollTo(0, targetPosition);
            window.history.pushState(null, "", href);
        }
    };

    requestAnimationFrame(animation);
};
