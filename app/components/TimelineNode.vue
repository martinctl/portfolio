<script setup lang="ts">
defineProps<{
    year: number;
    isVisible: boolean;
}>();
</script>

<template>
    <div
        class="flex flex-col items-center gap-1 transition-all duration-700"
        :class="isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'"
    >
        <!-- Keycap node -->
        <div
            class="relative flex h-10 w-10 items-center justify-center rounded-xl border border-cream-dark/40 bg-gradient-to-b from-white to-cream shadow-md"
        >
            <span class="font-mono text-xs font-bold text-black">⌨</span>
            <!-- Shadow underneath -->
            <div
                class="absolute -bottom-0.5 left-1 right-1 -z-10 h-full rounded-xl bg-cream-dark/30"
            />
        </div>
        <!-- Year label -->
        <span class="font-mono text-xs text-cream/40">{{ year }}</span>
    </div>
</template>
