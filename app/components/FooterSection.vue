<script setup lang="ts">
const socials = [
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
];
</script>

<template>
    <footer id="contact" class="border-t border-white/5 bg-black py-20">
        <div class="mx-auto max-w-6xl px-6 text-center">
            <img
                src="~/assets/logo_full_light.svg"
                alt="Martin Catheland"
                class="mx-auto mb-8 h-16 w-16"
            />

            <p class="mb-2 font-heading text-2xl font-bold text-cream">
                Let's connect
            </p>
            <p class="mb-8 text-cream/50">
                Open to opportunities, collaborations, and interesting
                conversations.
            </p>

            <div class="mb-12 flex items-center justify-center gap-4">
                <a
                    v-for="social in socials"
                    :key="social.href"
                    :href="social.href"
                    target="_blank"
                    :aria-label="social.label"
                    class="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-medium text-cream/70 transition-all duration-300 hover:-translate-y-1 hover:bg-cream/15 hover:text-cream hover:shadow-lg hover:shadow-cream/5"
                >
                    <Icon :name="social.icon" size="24" />
                </a>
            </div>

            <div
                class="border-t border-white/5 pt-8 font-mono text-xs text-cream/30"
            >
                <p>
                    Built with Nuxt, Tailwind & too much coffee. &copy;
                    {{ new Date().getFullYear() }} Martin Catheland.
                </p>
            </div>
        </div>
    </footer>
</template>
