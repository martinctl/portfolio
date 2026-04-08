<script setup lang="ts">
const { target, isVisible } = useScrollReveal();

const facts = [
    { icon: "mdi:map-marker-outline", text: "Lausanne, Switzerland" },
    { icon: "mdi:school-outline", text: "EPFL" },
    { icon: "mdi:translate", text: "FR · EN · DE" },
];
</script>

<template>
    <section id="about" ref="target" class="relative overflow-hidden py-24 sm:py-32">
        <!-- Decorative keycap shapes -->
        <div
            class="absolute -top-10 -right-10 h-24 w-24 rotate-12 rounded-2xl border border-cream/5 opacity-30"
        />
        <div
            class="absolute bottom-20 -left-6 h-16 w-16 -rotate-6 rounded-xl border border-cream/5 opacity-20"
        />

        <div class="mx-auto max-w-6xl px-6">
            <div
                class="grid items-center gap-12 md:grid-cols-5 md:gap-16"
                :class="
                    isVisible
                        ? 'motion-preset-fade motion-duration-1000'
                        : 'opacity-0'
                "
            >
                <!-- Photo column -->
                <div class="flex justify-center md:col-span-2">
                    <div class="relative">
                        <!-- Decorative frame -->
                        <div
                            class="absolute -inset-3 rounded-3xl border border-cream/10 bg-gradient-to-br from-cream/5 to-transparent"
                        />
                        <!-- Photo placeholder -->
                        <div
                            class="relative h-72 w-56 overflow-hidden rounded-2xl bg-gradient-to-br from-gray-medium to-gray-dark sm:h-80 sm:w-64"
                        >
                            <div
                                class="flex h-full flex-col items-center justify-center gap-3 text-cream/20"
                            >
                                <Icon name="mdi:account-outline" size="48" />
                                <span class="font-mono text-xs"
                                    >photo coming soon</span
                                >
                            </div>
                        </div>
                        <!-- Name badge -->
                        <div
                            class="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-cream/10 bg-gray-dark px-5 py-2 shadow-lg"
                        >
                            <span
                                class="font-mono text-sm whitespace-nowrap text-cream/70"
                                >Martin Catheland</span
                            >
                        </div>
                    </div>
                </div>

                <!-- Text column -->
                <div class="md:col-span-3">
                    <h2
                        class="mb-6 font-heading text-3xl font-bold text-cream sm:text-4xl"
                    >
                        About
                        <span class="text-coral">me</span>
                    </h2>

                    <div class="mb-8 space-y-4 text-lg leading-relaxed text-cream/70">
                        <p>
                            I'm a CS grad student at EPFL who loves building
                            things — from fine-tuning LLMs to shipping
                            production web apps. Currently researching semantic
                            operators for LLM-augmented databases.
                        </p>
                        <p>
                            When I'm not coding, I teach intro CS to 600
                            students, freelance as a web developer, and
                            occasionally drive 6,000km across Morocco to deliver
                            school supplies.
                        </p>
                    </div>

                    <!-- Fact badges -->
                    <div class="flex flex-wrap gap-3">
                        <div
                            v-for="fact in facts"
                            :key="fact.text"
                            class="flex items-center gap-2 rounded-xl border border-cream/10 bg-gray-dark px-4 py-2"
                        >
                            <Icon
                                :name="fact.icon"
                                size="18"
                                class="text-coral"
                            />
                            <span class="font-mono text-sm text-cream/60">{{
                                fact.text
                            }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
