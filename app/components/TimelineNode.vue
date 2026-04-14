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
        <!-- Marker on the line: ring acts as a black mask that breaks the line -->
        <div
            class="size-2.5 rounded-full bg-coral ring-4 ring-coral/20 shadow-[0_0_12px_rgba(201,106,47,0.5)]"
            aria-hidden="true"
        />
        <!-- bg-black masks the line where the year label sits -->
        <span
            class="rounded bg-black px-1.5 font-mono text-[11px] font-medium tabular-nums tracking-wide text-cream/45"
        >
            {{ year }}
        </span>
    </div>
</template>
