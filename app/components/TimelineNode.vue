<script setup lang="ts">
defineProps<{
    year: number;
    isVisible: boolean;
}>();
</script>

<template>
    <div
        class="flex flex-col items-center gap-2 transition-all duration-700"
        :class="isVisible ? 'translate-y-0 opacity-100' : '-translate-y-1 opacity-0'"
    >
        <!-- Minimal marker on the line -->
        <div
            class="ring-4 ring-black"
            aria-hidden="true"
        >
            <div
                class="size-2.5 rounded-full bg-coral shadow-[0_0_12px_rgba(232,116,97,0.45)]"
            />
        </div>
        <span
            class="font-mono text-[11px] font-medium tabular-nums tracking-wide text-cream/45"
        >
            {{ year }}
        </span>
    </div>
</template>
