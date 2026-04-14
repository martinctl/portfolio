export interface Project {
    slug: string;
    title: string;
    description: string;
    year: number;
    category: "ai" | "data" | "web";
    categoryLabel: string;
    tags: string[];
    ongoing?: boolean;
    links: { label: string; url: string }[];
    gradient: string; // placeholder gradient
    /** Bundled or public URL after `projects.ts` resolves `coverImage` paths */
    coverImage?: string;
}

export interface Skill {
    name: string;
    category: "language" | "ai" | "web";
}
