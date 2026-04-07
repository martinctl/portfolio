import type { Skill } from "~/types";

export const skills: Skill[] = [
    // Row 1 — Languages
    { name: "Python", category: "language" },
    { name: "TypeScript", category: "language" },
    { name: "Java", category: "language" },
    { name: "Scala", category: "language" },
    { name: "C", category: "language" },
    { name: "SQL", category: "language" },

    // Row 2 — AI / Data
    { name: "PyTorch", category: "ai" },
    { name: "Hugging Face", category: "ai" },
    { name: "vLLM", category: "ai" },
    { name: "NumPy", category: "ai" },
    { name: "Pandas", category: "ai" },
    { name: "Polars", category: "ai" },

    // Row 3 — Web & Tools
    { name: "Vue.js", category: "web" },
    { name: "React", category: "web" },
    { name: "D3.js", category: "web" },
    { name: "Docker", category: "web" },
    { name: "Git", category: "web" },
];
