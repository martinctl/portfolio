<script setup lang="ts">
import { useWindowScroll } from "@vueuse/core";

const { y } = useWindowScroll();
const scrolled = computed(() => y.value > 100);

const links = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
];
</script>

<template>
    <nav class="fixed top-0 left-0 right-0 z-50 border-b border-transparent transition-colors duration-500" :class="scrolled
            ? 'border-white/5 bg-black/80 backdrop-blur-md'
            : 'bg-transparent'
        ">
        <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <a href="#" class="group flex items-center gap-2">
                <img src="~/assets/logo_full_light.svg" alt="ctl"
                    class="h-8 w-8 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </a>

            <div class="flex items-center gap-2 sm:gap-3">
                <div class="hidden items-center gap-1 sm:flex">
                    <a v-for="link in links" :key="link.href" :href="link.href"
                        class="rounded-lg px-4 py-2 font-mono text-sm text-cream/70 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cream/10 hover:text-cream hover:shadow-[0_4px_0_0_theme(--color-cream-dark)] active:translate-y-0 active:shadow-none">
                        {{ link.label }}
                    </a>
                </div>

                <a href="/Martin-Catheland-CV.pdf" target="_blank" rel="noopener" aria-label="Download CV"
                    class="flex items-center gap-1.5 rounded-lg border border-coral/40 bg-coral/10 px-3 py-2 font-mono text-sm text-coral transition-all duration-300 hover:-translate-y-0.5 hover:bg-coral/20 hover:shadow-[0_4px_0_0_theme(--color-coral-dark)] active:translate-y-0 active:shadow-none">
                    <Icon name="mdi:file-download-outline" size="16" />
                    <span>CV</span>
                </a>
            </div>
        </div>
    </nav>
</template>
