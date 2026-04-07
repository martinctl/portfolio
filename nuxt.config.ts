import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: { enabled: true },
    modules: ["@nuxt/icon", "@nuxt/fonts", "@nuxt/image"],
    css: ["~/assets/css/main.css"],
    vite: {
        plugins: [tailwindcss()],
    },
    fonts: {
        families: [
            { name: "Space Grotesk", weights: [500, 700] },
            { name: "DM Sans", weights: [400, 500] },
            { name: "JetBrains Mono", weights: [400] },
        ],
    },
    app: {
        head: {
            title: "Martin Catheland — Portfolio",
            meta: [
                {
                    name: "description",
                    content:
                        "MSc CS @ EPFL — AI, Data & Web. Portfolio of Martin Catheland.",
                },
            ],
            htmlAttrs: { lang: "en" },
        },
    },
});
