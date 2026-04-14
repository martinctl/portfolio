import type { Project } from "~/types";

/** Vite-resolved URLs for files in `app/assets/covers/` (keeps other assets out of the bundle) */
const assetUrls = import.meta.glob<string>("~/assets/covers/**/*.{png,jpg,jpeg,webp}", {
    eager: true,
    import: "default",
});

/**
 * Resolve a cover image:
 * - `"/foo.png"` → served from `public/` as-is
 * - `"~/assets/covers/…"`, `"assets/covers/…"`, or `"dataringz.png"` (file in `app/assets/covers/`) → bundled URL
 */
function resolveCoverImage(spec: string): string {
    const trimmed = spec.trim();
    if (trimmed.startsWith("/")) return trimmed;

    let rel = trimmed.replace(/^~\//, "").replace(/^\/+/, "");
    if (!rel.startsWith("assets/covers/")) {
        rel = rel.startsWith("assets/")
            ? `assets/covers/${rel.slice("assets/".length)}`
            : `assets/covers/${rel}`;
    }

    const suffix = `/${rel.replace(/\\/g, "/")}`;
    const hit = Object.entries(assetUrls).find(([key]) =>
        key.replace(/\\/g, "/").endsWith(suffix),
    );
    if (!hit) {
        throw new Error(
            `[projects] coverImage "${spec}" — no file under app/assets/covers matching *${suffix}`,
        );
    }
    return hit[1];
}

type ProjectInput = Omit<Project, "coverImage"> & {
    /** Path resolved at build time; see `resolveCoverImage` */
    coverImage?: string;
};

const projectInputs: ProjectInput[] = [
    {
        slug: "semantic-ops",
        title: "Semantic Operator Optimization",
        description:
            "Optimizing semantic operators in LLM-augmented database queries — 46% end-to-end and 71% LLM call reductions over prior state-of-the-art.",
        year: 2026,
        category: "ai",
        categoryLabel: "AI / ML",
        tags: ["Python", "LLM", "Databases"],
        ongoing: true,
        links: [],
        gradient: "from-coral to-coral-dark",
        coverImage: "semantic-ops.png",
    },
    {
        slug: "laqwenta",
        title: "LaQwenTa",
        description:
            "STEM academic assistant built by fine-tuning Qwen3-0.6B with SFT & DPO, lightweight RAG pipeline, and 4-bit quantized inference.",
        year: 2025,
        category: "ai",
        categoryLabel: "AI / ML",
        tags: ["Python", "PyTorch", "Hugging Face"],
        links: [
            {
                label: "Report",
                url: "https://drive.google.com/file/d/1qQL1nvvP01KtLUZXHcB9viMVbIFkRQD9/view?usp=sharing",
            },
        ],
        gradient: "from-coral to-amber-700",
        coverImage: "laqwenta.png",
    },
    {
        slug: "dataringz",
        title: "DataRingz",
        description:
            "Full-stack web app generating 10,000+ pages for interactive Olympic athlete, venue, sport, and country exploration.",
        year: 2025,
        category: "data",
        categoryLabel: "Data",
        tags: ["Nuxt", "D3.js", "Python"],
        links: [
            { label: "Demo", url: "https://dataringz.martinctl.dev" },
            { label: "GitHub", url: "https://github.com/jeanprbt/dataringz" },
        ],
        gradient: "from-blue-600 to-indigo-800",
        coverImage: "dataringz.png",
    },
    {
        slug: "gaming-youtube",
        title: "Gaming on YouTube",
        description:
            "Processed 300GB+ dataset with out-of-core lazy dataframes. Built relational network graphs and interactive visualizations.",
        year: 2024,
        category: "data",
        categoryLabel: "Data",
        tags: ["Polars", "D3.js", "React"],
        links: [
            { label: "Demo", url: "https://adaguleeer.vercel.app/" },
            {
                label: "GitHub",
                url: "https://github.com/martinctl/adaguleeer",
            },
        ],
        gradient: "from-purple-600 to-blue-700",
        coverImage: "gaming-on-youtube.png"
    },
    {
        slug: "whokipedia",
        title: "Whokipedia",
        description:
            "A daily celebrity guessing game with leaderboard — guess who's behind the blurred photo.",
        year: 2024,
        category: "web",
        categoryLabel: "Web",
        tags: ["Nuxt", "Firebase", "TypeScript"],
        links: [{ label: "Play", url: "https://whokipedia.com" }],
        gradient: "from-emerald-600 to-teal-700",
        coverImage: "whokipedia.png",
    },
    {
        slug: "trackimo",
        title: "Trackimo",
        description:
            "Live gaming stats tracker with real-time database updates and performance analytics.",
        year: 2024,
        category: "web",
        categoryLabel: "Web",
        tags: ["Nuxt", "PostgreSQL", "TypeScript"],
        links: [{ label: "Try it", url: "https://trackimo.lol" }],
        gradient: "from-sky-600 to-cyan-700",
        coverImage: "trackimo.png",
    },
    {
        slug: "facedoodle",
        title: "FaceDoodle",
        description:
            "Face tracking app enabling drawing with head movements, connected to a 2D plotter for physical output.",
        year: 2023,
        category: "web",
        categoryLabel: "Web",
        tags: ["Flutter", "Fusion 360", "Arduino"],
        links: [
            {
                label: "Docs",
                url: "https://facedoodle-docs.netlify.app/",
            },
            {
                label: "GitLab",
                url: "https://gitlab.epfl.ch/facedoodle",
            },
        ],
        gradient: "from-rose-600 to-pink-700",
        coverImage: "facedoodle.png",
    },
];

export const projects: Project[] = projectInputs.map(
    ({ coverImage, ...rest }) => ({
        ...rest,
        ...(coverImage
            ? { coverImage: resolveCoverImage(coverImage) }
            : {}),
    }),
);
