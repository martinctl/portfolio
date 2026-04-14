<script setup lang="ts">
import { projects } from "~/data/projects";
import { useIntersectionObserver, useWindowScroll } from "@vueuse/core";

const sectionRef = ref<HTMLElement | null>(null);
const sectionVisible = ref(false);
const cardRefs = ref<(HTMLElement | null)[]>([]);
const cardVisible = ref<boolean[]>(projects.map(() => false));

useIntersectionObserver(
    sectionRef,
    ([entry]) => {
        if (entry?.isIntersecting) sectionVisible.value = true;
    },
    { threshold: 0.1 },
);

onMounted(() => {
    cardRefs.value.forEach((el, i) => {
        if (!el) return;
        useIntersectionObserver(
            el,
            ([entry]) => {
                if (entry?.isIntersecting) cardVisible.value[i] = true;
            },
            { threshold: 0.15 },
        );
    });
});

const { y: scrollY } = useWindowScroll();
const lineProgress = computed(() => {
    if (!sectionRef.value) return 0;
    const rect = sectionRef.value.getBoundingClientRect();
    const sectionTop = rect.top;
    const sectionHeight = rect.height;
    const viewportH = window.innerHeight;
    const progress = (viewportH - sectionTop) / (sectionHeight + viewportH);
    return Math.min(Math.max(progress, 0), 1);
});
</script>

<template>
    <section id="projects" ref="sectionRef" class="py-24 sm:py-32">
        <div class="mx-auto max-w-5xl px-6">
            <!-- Section header -->
            <div
                class="mb-16 text-center transition-all duration-1000"
                :class="
                    sectionVisible
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-8 opacity-0'
                "
            >
                <h2
                    class="font-heading text-3xl font-bold text-cream sm:text-4xl"
                >
                    Things I've
                    <span class="text-coral">built</span>
                </h2>
                <p class="mt-3 text-cream/40">
                    From LLM research to production web apps
                </p>
            </div>

            <!-- Timeline -->
            <div class="relative mx-auto max-w-xs md:max-w-none">
                <!-- Central line -->
                <div
                    class="absolute top-0 left-4 h-full w-px origin-top -translate-x-1/2 bg-cream/10 md:left-1/2"
                >
                    <div
                        class="h-full w-full bg-linear-to-b from-coral/60 via-cream/30 to-cream/10 transition-transform duration-100 ease-out"
                        :style="{
                            transform: `scaleY(${lineProgress})`,
                            transformOrigin: 'top',
                        }"
                    />
                </div>

                <!-- Project entries — compact, overlapping layout -->
                <div class="relative">
                    <div
                        v-for="(project, i) in projects"
                        :key="project.slug"
                        :ref="(el) => (cardRefs[i] = el as HTMLElement)"
                        class="relative md:grid md:grid-cols-2 md:gap-12"
                        :class="i > 0 ? 'mt-12 md:-mt-16' : ''"
                    >
                        <!-- Timeline node -->
                        <div
                            class="absolute top-6 left-4 z-10 -translate-x-1/2 md:left-1/2"
                        >
                            <TimelineNode
                                :year="project.year"
                                :is-visible="cardVisible[i] ?? false"
                            />
                        </div>

                        <!-- Card — centered in each column + equal px so distance to the line matches -->
                        <div
                            :class="[
                                i % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2',
                                'relative min-w-0 pl-12 md:px-8',
                            ]"
                            :style="{ zIndex: projects.length - i }"
                        >
                            <div
                                class="min-w-0 w-full max-w-md transition-all duration-700 ease-out md:mx-auto"
                                :class="[
                                    cardVisible[i]
                                        ? 'translate-x-0 opacity-100'
                                        : i % 2 === 0
                                          ? '-translate-x-8 opacity-0'
                                          : 'translate-x-8 opacity-0',
                                ]"
                                :style="{
                                    transitionDelay: `${i * 80}ms`,
                                }"
                            >
                                <ProjectCard :project="project" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
