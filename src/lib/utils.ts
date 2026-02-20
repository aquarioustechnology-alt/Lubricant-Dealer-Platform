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

    window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
    });

    // Update URL history without jumping
    window.history.pushState(null, "", href);
};
