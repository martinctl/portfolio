<script setup lang="ts">
import { techIcons } from "~/data/techIcons";
import { skills } from "~/data/skills";

const { target, isVisible } = useScrollReveal();

const rows = computed(() => {
    const languages = skills.filter((s) => s.category === "language");
    const ai = skills.filter((s) => s.category === "ai");
    const web = skills.filter((s) => s.category === "web");
    return [
        { label: "Languages", items: languages },
        { label: "AI / Data", items: ai },
        { label: "Web & Tools", items: web },
    ];
});
</script>

<template>
    <section id="skills" ref="target" class="py-24 sm:py-32">
        <div class="mx-auto max-w-4xl px-6">
            <!-- Section header -->
            <div
                class="mb-16 text-center transition-all duration-1000"
                :class="
                    isVisible
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-8 opacity-0'
                "
            >
                <h2
                    class="font-heading text-3xl font-bold text-cream sm:text-4xl"
                >
                    Tech
                    <span class="text-coral">stack</span>
                </h2>
                <p class="mt-3 text-cream/40">
                    Languages, ML tooling, and things I ship with.
                </p>
            </div>

            <div class="space-y-8">
                <div
                    v-for="(row, rowIndex) in rows"
                    :key="row.label"
                    class="transition-all duration-700 ease-out"
                    :class="
                        isVisible
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-8 opacity-0'
                    "
                    :style="{
                        transitionDelay: `${300 + rowIndex * 200}ms`,
                    }"
                >
                    <p
                        class="mb-3 font-mono text-xs tracking-wider text-cream/30 uppercase"
                    >
                        {{ row.label }}
                    </p>
                    <div class="flex flex-wrap justify-center gap-2 sm:gap-2.5">
                        <span
                            v-for="skill in row.items"
                            :key="skill.name"
                            class="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 font-mono text-xs tracking-wide transition-colors sm:gap-2 sm:px-3.5 sm:text-sm"
                            :class="
                                skill.category === 'ai'
                                    ? 'border-coral/35 bg-coral/8 text-coral'
                                    : skill.category === 'language'
                                      ? 'border-cream/15 bg-cream/6 text-cream/90'
                                      : 'border-cream/12 bg-white/4 text-cream/80'
                            "
                        >
                            <Icon
                                :name="
                                    techIcons[skill.name] || 'mdi:code-tags'
                                "
                                size="17"
                                class="shrink-0 opacity-90"
                            />
                            {{ skill.name }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
