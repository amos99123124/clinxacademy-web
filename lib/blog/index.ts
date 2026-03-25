import type { BlogPost, BlogPostMeta } from "./types";
import { postsMeta } from "./meta";

const postModules = {
  "value-based-care-models": () => import("./posts/value-based-care-models"),
  "non-clinical-jobs-for-physicians": () => import("./posts/non-clinical-jobs-for-physicians"),
  "what-is-medicare-advantage-plan": () => import("./posts/what-is-medicare-advantage-plan"),
  "accounting-and-financial-management": () => import("./posts/accounting-and-financial-management"),
  "what-is-risk-adjustment-coding": () => import("./posts/what-is-risk-adjustment-coding"),
  "what-is-hedis-in-healthcare": () => import("./posts/what-is-hedis-in-healthcare"),
  "medicare-vs-medicaid-differences": () => import("./posts/medicare-vs-medicaid-differences"),
  "capitation-vs-fee-for-service": () => import("./posts/capitation-vs-fee-for-service"),
  "revenue-cycle-management-best-practices": () => import("./posts/revenue-cycle-management-best-practices"),
  "what-is-utilization-management-in-healthcare": () => import("./posts/what-is-utilization-management-in-healthcare"),
  "physician-executive-mba-programs": () => import("./posts/physician-executive-mba-programs"),
  "non-clinical-jobs-for-doctors": () => import("./posts/non-clinical-jobs-for-doctors"),
  "corporate-practice-of-medicine-laws": () => import("./posts/corporate-practice-of-medicine-laws"),
  "chief-medical-officer-requirements": () => import("./posts/chief-medical-officer-requirements"),
  "healthcare-payer-contract-negotiations": () => import("./posts/healthcare-payer-contract-negotiations"),
  "non-clinical-healthcare-careers": () => import("./posts/non-clinical-healthcare-careers"),
  "what-is-provider-network-management": () => import("./posts/what-is-provider-network-management"),
  "physician-executive-certification": () => import("./posts/physician-executive-certification"),
  "what-is-stark-law-in-healthcare": () => import("./posts/what-is-stark-law-in-healthcare"),
  "acquisition-due-diligence-checklist": () => import("./posts/acquisition-due-diligence-checklist"),
  "best-certifications-for-healthcare-administrators": () => import("./posts/best-certifications-for-healthcare-administrators"),
  "physician-compensation-models": () => import("./posts/physician-compensation-models"),
  "top-10-things-physicians-must-know-before-starting-a-friendly-pc": () => import("./posts/top-10-things-physicians-must-know-before-starting-a-friendly-pc"),
  "how-to-become-a-medical-director": () => import("./posts/how-to-become-a-medical-director"),
  "healthcare-leadership-training": () => import("./posts/healthcare-leadership-training"),
  "medical-director-job-description": () => import("./posts/medical-director-job-description"),
  "medical-director-interview-questions": () => import("./posts/medical-director-interview-questions"),
  "top-10-physician-executive-training-programs-for-clinicians": () => import("./posts/top-10-physician-executive-training-programs-for-clinicians"),
  "clinx-vs-the-200k-healthcare-mba-a-decision-framework-for-busy-physicians": () => import("./posts/clinx-vs-the-200k-healthcare-mba-a-decision-framework-for-busy-physicians"),
  "healthcare-executive-salary-career-report-bedside-physician-vs-chief-medical-officer-cmo": () => import("./posts/healthcare-executive-salary-career-report-bedside-physician-vs-chief-medical-officer-cmo"),
} as const;

export type PostSlug = keyof typeof postModules;

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!(slug in postModules)) return null;
  const mod = await postModules[slug as PostSlug]();
  return mod.default;
}

export function getAllSlugs(): string[] {
  return Object.keys(postModules);
}

export function getAllPostsMeta(): BlogPostMeta[] {
  return postsMeta;
}

export function getPostsMetaByCategory(category: string): BlogPostMeta[] {
  if (category === "All") return postsMeta;
  return postsMeta.filter((p) => p.category === category);
}
