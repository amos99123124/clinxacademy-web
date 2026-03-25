export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  content: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
}

export const CATEGORIES = [
  "All",
  "Non-Clinical Careers",
  "Medical Director",
  "Medicare Advantage",
  "PC Ownership & MSO",
  "Healthcare Business",
] as const;
