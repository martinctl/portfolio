<script setup lang="ts">
const { target, rotateX, rotateY } = useMouseParallax(8);

const keysVisible = ref(false);
const taglineVisible = ref(false);

onMounted(() => {
    setTimeout(() => (keysVisible.value = true), 300);
    setTimeout(() => (taglineVisible.value = true), 1400);
});

const keys = [
    { label: "martin", delay: "0ms" },
    { label: "ctl", delay: "200ms" },
    { label: ".", delay: "400ms" },
    { label: "dev", delay: "600ms" },
];
</script>

<template>
    <section
        class="relative flex min-h-screen items-center justify-center overflow-hidden bg-black"
    >
        <!-- Background glow -->
        <div
            class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(232,116,97,0.08)_0%,_transparent_70%)]"
        />

        <!-- Content -->
        <div class="relative z-10 px-6 text-center">
            <!-- 3D Keyboard -->
            <div
                ref="target"
                class="mb-12 inline-block"
                :style="{
                    perspective: '800px',
                }"
            >
                <div
                    class="transition-transform duration-200 ease-out"
                    :style="{
                        transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                    }"
                >
                    <div class="flex items-center gap-3 sm:gap-4">
                        <div
                            v-for="(key, i) in keys"
                            :key="key.label"
                            class="transition-all duration-700 ease-out"
                            :class="
                                keysVisible
                                    ? 'translate-y-0 opacity-100'
                                    : 'translate-y-8 opacity-0'
                            "
                            :style="{ transitionDelay: key.delay }"
                        >
                            <button
                                class="group relative cursor-default select-none"
                                @mousedown="
                                    ($event.currentTarget as HTMLElement)?.classList.add(
                                        'scale-[0.97]',
                                        'translate-y-0.5',
                                    )
                                "
                                @mouseup="
                                    ($event.currentTarget as HTMLElement)?.classList.remove(
                                        'scale-[0.97]',
                                        'translate-y-0.5',
                                    )
                                "
                                @mouseleave="
                                    ($event.currentTarget as HTMLElement)?.classList.remove(
                                        'scale-[0.97]',
                                        'translate-y-0.5',
                                    )
                                "
                            >
                                <!-- Keycap shadow -->
                                <div
                                    class="absolute -bottom-1 left-1 right-1 h-full rounded-xl bg-cream-dark/30 transition-all duration-150 group-active:bottom-0"
                                />
                                <!-- Keycap body -->
                                <div
                                    class="relative rounded-xl border border-cream-dark/40 bg-gradient-to-b from-white to-cream px-5 py-3 shadow-lg transition-all duration-150 sm:px-7 sm:py-4"
                                    :class="
                                        i === 1
                                            ? 'ring-2 ring-coral/30'
                                            : ''
                                    "
                                >
                                    <span
                                        class="font-mono text-lg font-bold text-black sm:text-2xl"
                                        :class="
                                            i === 1 ? 'text-coral-dark' : ''
                                        "
                                    >
                                        {{ key.label }}
                                    </span>
                                </div>
                            </button>
                        </div>
                    </div>
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
