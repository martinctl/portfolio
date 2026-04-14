<script setup lang="ts">
import { useIntersectionObserver } from "@vueuse/core";

const heroSection = ref<HTMLElement | null>(null);
const { target, rotateX, rotateY, resetRotation } = useMouseParallax(4);

const heroWasIntersecting = ref(false);
useIntersectionObserver(
    heroSection,
    ([entry]) => {
        const on = !!entry?.isIntersecting;
        if (on && !heroWasIntersecting.value) {
            resetRotation();
        }
        heroWasIntersecting.value = on;
    },
    { threshold: 0.15 },
);

const visible = ref(false);
const taglineVisible = ref(false);

onMounted(() => {
    setTimeout(() => (visible.value = true), 300);
    setTimeout(() => (taglineVisible.value = true), 1200);
});
</script>

<template>
    <section
        ref="heroSection"
        class="relative flex min-h-screen items-center justify-center overflow-hidden bg-black"
    >
        <!-- Background glow (uses @theme colors from main.css) -->
        <div
            class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_54%_at_50%_44%,color-mix(in_oklab,var(--color-coral)_12%,transparent)_0%,color-mix(in_oklab,var(--color-coral)_5%,transparent)_46%,transparent_72%)]"
        />

        <!-- Content -->
        <div class="relative z-10 px-6 text-center">
            <!-- 3D Keyboard from Figma -->
            <div
                ref="target"
                class="mb-12 inline-block transition-all duration-1000 ease-out"
                :class="
                    visible
                        ? 'translate-y-0 scale-100 opacity-100'
                        : 'translate-y-6 scale-95 opacity-0'
                "
                :style="{ perspective: '800px' }"
            >
                <div
                    class="transform-3d transition-transform duration-200 ease-out"
                    :style="{
                        transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                    }"
                >
                    <HeroKeyboard />
                </div>
            </div>

            <!-- Tagline -->
            <div
                class="transition-all duration-1000 ease-out"
                :class="
                    taglineVisible
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-4 opacity-0'
                "
            >
                <p
                    class="mx-auto max-w-lg font-heading text-lg text-cream/80 sm:text-xl"
                >
                    MSc Computer Science @
                    <span class="font-bold text-cream">EPFL</span>
                </p>
                <p class="mt-2 font-mono text-sm text-cream/40">
                    AI &middot; Data &middot; Web
                </p>
            </div>
        </div>

        <!-- Scroll indicator -->
        <div
            class="absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000"
            :class="
                taglineVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-4 opacity-0'
            "
        >
            <div class="flex flex-col items-center gap-2">
                <span class="font-mono text-xs text-cream/30">scroll</span>
                <div class="h-8 w-px animate-pulse bg-cream/20" />
            </div>
        </div>
    </section>
</template>
