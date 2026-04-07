export function useMouseParallax(intensity = 10) {
    const rotateX = ref(0);
    const rotateY = ref(0);
    const target = ref<HTMLElement | null>(null);

    const handleMouseMove = (e: MouseEvent) => {
        if (!target.value) return;
        const rect = target.value.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const x = (e.clientX - centerX) / (rect.width / 2);
        const y = (e.clientY - centerY) / (rect.height / 2);
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
