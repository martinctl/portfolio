<script setup lang="ts">
const links = [
    {
        icon: "mdi:github",
        href: "https://github.com/martinctl",
        label: "GitHub",
    },
    {
        icon: "mdi:linkedin",
        href: "https://linkedin.com/in/martinctl",
        label: "LinkedIn",
    },
    {
        icon: "mdi:email-outline",
        href: "mailto:martin.catheland@epfl.ch",
        label: "Email",
    },
    {
        icon: "mdi:file-download-outline",
        href: "/Martin-Catheland-CV.pdf",
        label: "CV",
        highlight: true,
    },
];

/** Open in new tab for http(s) and same-site files; default for mailto */
function getLinkAttrs(href: string) {
    if (href.startsWith("mailto:")) return {};
    return { target: "_blank" as const, rel: "noopener noreferrer" as const };
}
</script>

<template>
    <footer id="contact" class="border-t border-white/5 bg-black py-20">
        <div class="mx-auto max-w-6xl px-6 text-center">
            <img src="~/assets/logo_full_light.svg" alt="Martin Catheland" class="mx-auto mb-8 h-16 w-16" />

            <p class="mb-2 font-heading text-2xl font-bold text-cream">
                Let's connect
            </p>
            <p class="mb-10 text-cream/50">
                Open to opportunities, collaborations, and interesting
                conversations.
            </p>

            <div
                class="relative mx-auto mb-12 flex max-w-md divide-x divide-white/10 overflow-hidden rounded-2xl bg-linear-to-b from-white/6 to-white/2">
                <a v-for="link in links" :key="link.href" v-bind="getLinkAttrs(link.href)" :href="link.href"
                    :aria-label="link.label"
                    class="group relative flex min-h-13 flex-1 flex-col items-center justify-center gap-0.5 px-2 py-2.5 transition-colors duration-200 sm:flex-row sm:gap-2 sm:px-4"
                    :class="'highlight' in link && link.highlight
                            ? 'bg-coral/12 text-coral hover:bg-coral/20 hover:text-coral'
                            : 'text-cream/60 hover:bg-white/6 hover:text-cream'
                        ">
                    <Icon :name="link.icon" size="22" class="shrink-0" />
                    <span
                        class="max-w-18 truncate font-mono text-[10px] leading-none tracking-wide uppercase sm:max-w-none sm:text-xs sm:normal-case">
                        {{ link.label }}
                    </span>
                </a>

                <div
                    class="pointer-events-none absolute inset-0 rounded-2xl border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
                </div>
            </div>

            <div class="border-t border-white/5 pt-8 font-mono text-xs text-cream/30">
                <p>
                    Built with Nuxt, Tailwind & too much coffee. &copy;
                    {{ new Date().getFullYear() }} Martin Catheland.
                </p>
            </div>
        </div>
    </footer>
</template>
