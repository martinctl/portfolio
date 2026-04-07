<script setup lang="ts">
import type { Skill } from "~/types";

defineProps<{
    skill: Skill;
}>();

const categoryStyle: Record<string, string> = {
    language: "from-white to-cream border-cream-dark/40",
    ai: "from-coral/20 to-coral/10 border-coral/30",
    web: "from-gray to-gray/80 border-gray/50",
};

const textStyle: Record<string, string> = {
    language: "text-black",
    ai: "text-coral",
    web: "text-black/80",
};
</script>

<template>
    <div class="group relative cursor-default select-none">
        <!-- Keycap shadow -->
        <div
            class="absolute -bottom-1 left-0.5 right-0.5 h-full rounded-xl bg-black/40 transition-all duration-150 group-hover:bottom-0"
        />
        <!-- Keycap body -->
        <div
            class="relative rounded-xl border bg-gradient-to-b px-4 py-2.5 shadow-sm transition-all duration-150 group-hover:translate-y-0.5 group-hover:shadow-none sm:px-5 sm:py-3"
            :class="categoryStyle[skill.category]"
        >
            <span
                class="font-mono text-xs font-medium sm:text-sm"
                :class="textStyle[skill.category]"
            >
                {{ skill.name }}
            </span>
        </div>
    </div>
</template>
