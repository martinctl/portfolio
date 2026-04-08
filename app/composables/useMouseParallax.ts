export function useMouseParallax(intensity = 10) {
    const rotateX = ref(0);
    const rotateY = ref(0);
    const target = ref<HTMLElement | null>(null);

    const handleMouseMove = (e: MouseEvent) => {
        if (!target.value) return;
        const rect = target.value.getBoundingClientRect();
        const halfW = rect.width / 2;
        const halfH = rect.height / 2;
        if (halfW < 4 || halfH < 4) return;

        const centerX = rect.left + halfW;
        const centerY = rect.top + halfH;
        const x = Math.max(-1, Math.min(1, (e.clientX - centerX) / halfW));
        const y = Math.max(-1, Math.min(1, (e.clientY - centerY) / halfH));
        rotateY.value = x * intensity;
        rotateX.value = -y * intensity;
    };

    const resetRotation = () => {
        rotateX.value = 0;
        rotateY.value = 0;
    };

    onMounted(() => {
        window.addEventListener("mousemove", handleMouseMove);
    });

    onUnmounted(() => {
        window.removeEventListener("mousemove", handleMouseMove);
    });

    return { target, rotateX, rotateY, resetRotation };
}
