<script setup lang="ts">
import { projects } from "~/data/projects";
import { useIntersectionObserver, useWindowScroll } from "@vueuse/core";

const sectionRef = ref<HTMLElement | null>(null);
const sectionVisible = ref(false);
const lineRef = ref<HTMLElement | null>(null);
const cardRefs = ref<(HTMLElement | null)[]>([]);
const cardVisible = ref<boolean[]>(projects.map(() => false));

// Section visibility
useIntersectionObserver(
    sectionRef,
    ([entry]) => {
        if (entry?.isIntersecting) sectionVisible.value = true;
    },
    { threshold: 0.1 },
);

// Card visibility
onMounted(() => {
    cardRefs.value.forEach((el, i) => {
        if (!el) return;
        useIntersectionObserver(
            el,
            ([entry]) => {
                if (entry?.isIntersecting) cardVisible.value[i] = true;
            },
            { threshold: 0.2 },
        );
    });
});

// Line draw progress
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

// Group by year for timeline nodes
const years = computed(() => [...new Set(projects.map((p) => p.year))]);
</script>

<template>
    <section id="projects" ref="sectionRef" class="py-24 sm:py-32">
        <div class="mx-auto max-w-6xl px-6">
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
            <div class="relative">
                <!-- Central line -->
                <div
                    ref="lineRef"
                    class="absolute top-0 left-4 h-full w-px origin-top bg-cream/10 md:left-1/2 md:-translate-x-px"
                >
                    <div
                        class="h-full w-full bg-gradient-to-b from-coral/60 via-cream/30 to-cream/10 transition-transform duration-100 ease-out"
                        :style="{
                            transform: `scaleY(${lineProgress})`,
                            transformOrigin: 'top',
                        }"
                    />
                </div>

                <!-- Project entries -->
                <div class="space-y-12 md:space-y-16">
                    <div
                        v-for="(project, i) in projects"
                        :key="project.slug"
                        :ref="(el) => (cardRefs[i] = el as HTMLElement)"
                        class="relative grid md:grid-cols-2 md:gap-8"
                    >
                        <!-- Timeline node (center on md+, left on mobile) -->
                        <div
                            class="absolute top-6 left-4 -translate-x-1/2 md:left-1/2"
                        >
                            <TimelineNode
                                :year="project.year"
                                :is-visible="cardVisible[i]"
                            />
                        </div>

                        <!-- Card - alternates sides -->
                        <div
                            :class="[
                                i % 2 === 0
                                    ? 'md:col-start-1'
                                    : 'md:col-start-2',
                                'pl-12 md:pl-0',
                            ]"
                        >
                            <div
                                class="transition-all duration-700 ease-out"
                                :class="[
                                    cardVisible[i]
                                        ? 'translate-x-0 opacity-100'
                                        : i % 2 === 0
                                          ? '-translate-x-8 opacity-0'
                                          : 'translate-x-8 opacity-0',
                                ]"
                                :style="{
                                    transitionDelay: `${i * 100}ms`,
                                }"
                            >
                                <ProjectCard
                                    :project="project"
                                    :side="i % 2 === 0 ? 'left' : 'right'"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
