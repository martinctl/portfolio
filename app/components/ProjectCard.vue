<script setup lang="ts">
import { techIcons } from "~/data/techIcons";
import type { Project } from "~/types";

defineProps<{
    project: Project;
}>();

const categoryColor: Record<string, string> = {
    ai: "bg-coral/20 text-coral border-coral/30",
    data: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    web: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
};
</script>

<template>
    <div
        class="group w-full max-w-md transition-all duration-500 hover:-translate-y-1"
    >
        <div
            class="overflow-hidden rounded-2xl border border-white/5 bg-gray-dark transition-all duration-500 hover:border-cream/10 hover:shadow-xl hover:shadow-cream/5"
        >
            <!-- Hero / placeholder -->
            <div
                class="relative h-36 overflow-hidden bg-linear-to-br sm:h-44"
                :class="project.coverImage ? '' : project.gradient"
            >
                <img
                    v-if="project.coverImage"
                    :src="project.coverImage"
                    :alt="`${project.title} preview`"
                    class="absolute inset-0 h-full w-full object-cover"
                />
                <div
                    v-else
                    class="absolute inset-0 flex items-center justify-center bg-black/20"
                >
                    <span class="font-mono text-sm text-white/40"
                        >preview</span
                    >
                </div>
                <!-- Ongoing badge -->
                <div
                    v-if="project.ongoing"
                    class="absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-cream backdrop-blur-sm"
                >
                    <span
                        class="h-1.5 w-1.5 animate-pulse rounded-full bg-coral"
                    />
                    Ongoing
                </div>
            </div>

            <div class="p-4 sm:p-5">
                <!-- Category tag -->
                <span
                    class="inline-block rounded-lg border px-2.5 py-0.5 font-mono text-xs"
                    :class="categoryColor[project.category]"
                >
                    {{ project.categoryLabel }}
                </span>

                <h3
                    class="mt-2.5 font-heading text-lg font-bold text-cream transition-colors group-hover:text-white sm:text-xl"
                >
                    {{ project.title }}
                </h3>

                <p class="mt-1.5 text-sm leading-relaxed text-cream/50">
                    {{ project.description }}
                </p>

                <!-- Tech icons -->
                <div class="mt-3 flex flex-wrap items-center gap-2">
                    <div
                        v-for="tag in project.tags"
                        :key="tag"
                        class="flex items-center gap-1.5 rounded-md bg-white/5 px-2 py-1"
                        :title="tag"
                    >
                        <Icon
                            :name="techIcons[tag] || 'mdi:code-tags'"
                            size="16"
                            class="shrink-0 text-cream/50"
                        />
                        <span class="font-mono text-xs text-cream/40">
                            {{ tag }}
                        </span>
                    </div>
                </div>

                <!-- Links -->
                <div
                    v-if="project.links.length"
                    class="mt-3 flex flex-wrap gap-2"
                >
                    <a
                        v-for="link in project.links"
                        :key="link.url"
                        :href="link.url"
                        target="_blank"
                        class="group/link inline-flex items-center gap-1.5 rounded-lg border border-cream/10 bg-cream/5 px-3 py-1.5 font-mono text-xs text-cream/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-cream/20 hover:text-cream hover:shadow-[0_3px_0_0_rgba(242,219,193,0.15)]"
                    >
                        {{ link.label }}
                        <Icon
                            name="mdi:arrow-top-right"
                            size="14"
                            class="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                        />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
