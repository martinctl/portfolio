import { useIntersectionObserver } from "@vueuse/core";

export function useScrollReveal(threshold = 0.15) {
    const isVisible = ref(false);
    const target = ref<HTMLElement | null>(null);

    useIntersectionObserver(
        target,
        ([entry]) => {
            if (entry?.isIntersecting) {
                isVisible.value = true;
            }
        },
        { threshold },
    );

    return { target, isVisible };
}
