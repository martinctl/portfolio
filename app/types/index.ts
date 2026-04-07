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
}

export interface Skill {
    name: string;
    category: "language" | "ai" | "web";
}
