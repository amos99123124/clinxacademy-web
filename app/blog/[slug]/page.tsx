import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getPostBySlug, getAllSlugs, getAllPostsMeta } from "@/lib/blog";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};

  const url = `https://clinxacademy.com/blog/${post.slug}`;
  return {
    title: `${post.title} — ClinX Academy`,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: "article",
      publishedTime: post.date,
      authors: ["Alex Mohseni, MD"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T12:00:00Z");
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

// Category → related page mapping for internal links
const categoryLinks: Record<string, { href: string; label: string }[]> = {
  "Medicare Advantage": [
    { href: "/medicare-advantage-training", label: "Medicare Advantage Training" },
    { href: "/physician-executive-training", label: "Physician Executive Training" },
  ],
  "Medical Director": [
    { href: "/medical-director-course", label: "Medical Director Course" },
    { href: "/physician-executive-training", label: "Physician Executive Training" },
  ],
  "PC Ownership & MSO": [
    { href: "/friendly-pc-owner", label: "Friendly PC Ownership Guide" },
    { href: "/physician-executive-training", label: "Physician Executive Training" },
  ],
  "Non-Clinical Careers": [
    { href: "/physician-executive-training", label: "Physician Executive Training" },
    { href: "/medical-director-course", label: "Medical Director Course" },
  ],
  "Healthcare Business": [
    { href: "/physician-executive-training", label: "Physician Executive Training" },
    { href: "/medicare-advantage-training", label: "Medicare Advantage Training" },
  ],
};

export default async function BlogPostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  const allPosts = getAllPostsMeta();
  const related = allPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  const relatedLinks = categoryLinks[post.category] ?? categoryLinks["Healthcare Business"];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: "Alex Mohseni, MD",
      url: "https://clinxacademy.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: "ClinX Academy",
      url: "https://clinxacademy.com",
      logo: {
        "@type": "ImageObject",
        url: "https://clinxacademy.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://clinxacademy.com/blog/${post.slug}`,
    },
  };

  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        {/* Article Header */}
        <section className="bg-[#F5F3EF] py-16 border-b border-[#D8D4CC]">
          <div className="container-width">
            <div className="max-w-3xl">
              <nav className="mb-6" aria-label="Breadcrumb">
                <ol className="flex items-center gap-2 text-sm text-[#888]">
                  <li>
                    <Link href="/" className="hover:text-[#C45C3E] transition-colors">
                      Home
                    </Link>
                  </li>
                  <li aria-hidden="true">›</li>
                  <li>
                    <Link href="/blog" className="hover:text-[#C45C3E] transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li aria-hidden="true">›</li>
                  <li className="text-[#4A4A4A] truncate max-w-xs" aria-current="page">
                    {post.title}
                  </li>
                </ol>
              </nav>
              <span className="text-xs font-bold tracking-widest uppercase text-[#C45C3E] mb-3 block">
                {post.category}
              </span>
              <h1 className="font-serif text-4xl md:text-5xl text-[#222222] leading-tight mb-4">
                {post.title}
              </h1>
              <p className="text-[#4A4A4A] text-lg leading-relaxed mb-6">{post.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-[#888]">
                <span>By <strong className="text-[#4A4A4A]">Alex Mohseni, MD</strong></span>
                <span>·</span>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </div>
            </div>
          </div>
        </section>

        {/* Article Body */}
        <section className="bg-white py-16">
          <div className="container-width">
            <div className="grid lg:grid-cols-[1fr_280px] gap-16">
              {/* Content */}
              <article
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Sidebar */}
              <aside className="space-y-8">
                {/* Enroll CTA */}
                <div className="bg-[#1C2331] rounded-xl p-6 text-center">
                  <p className="text-xs font-bold tracking-widest uppercase text-[#C45C3E] mb-3">
                    ClinX Academy
                  </p>
                  <p className="font-serif text-xl text-[#F5F3EF] leading-snug mb-4">
                    Ready to go beyond the article?
                  </p>
                  <p className="text-sm text-[#EBE8E2] opacity-70 mb-5 leading-relaxed">
                    35+ hours of structured curriculum on the business of healthcare — taught by physicians who have done it.
                  </p>
                  <a
                    href="https://members.clinxacademy.com/store"
                    className="btn-primary w-full block text-center text-sm"
                  >
                    Enroll Now
                  </a>
                </div>

                {/* Related Pages */}
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase text-[#888] mb-4">
                    Related Topics
                  </p>
                  <div className="space-y-2">
                    {relatedLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block text-sm text-[#C45C3E] hover:underline"
                      >
                        → {link.label}
                      </Link>
                    ))}
                    <Link
                      href="/blog"
                      className="block text-sm text-[#888] hover:text-[#C45C3E] transition-colors mt-3"
                    >
                      ← All Articles
                    </Link>
                  </div>
                </div>

                {/* Free Resources */}
                <div className="bg-[#F5F3EF] rounded-xl p-6">
                  <p className="text-xs font-bold tracking-widest uppercase text-[#888] mb-4">
                    Free Resources
                  </p>
                  <div className="space-y-2">
                    <a
                      href="https://members.clinxacademy.com/medicare-cheat-sheet"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-[#4A4A4A] hover:text-[#C45C3E] transition-colors"
                    >
                      Medicare Cheat Sheet →
                    </a>
                    <a
                      href="https://members.clinxacademy.com/get-non-clinical-jobs-guide-pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-[#4A4A4A] hover:text-[#C45C3E] transition-colors"
                    >
                      Non-Clinical Job Guide →
                    </a>
                    <a
                      href="https://members.clinxacademy.com/take-our-quiz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-[#4A4A4A] hover:text-[#C45C3E] transition-colors"
                    >
                      Take the Quiz →
                    </a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {related.length > 0 && (
          <section className="bg-[#F5F3EF] py-16 border-t border-[#D8D4CC]">
            <div className="container-width">
              <h2 className="font-serif text-3xl text-[#222222] mb-8">More on {post.category}</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group bg-white rounded-xl p-6 hover:shadow-md transition-shadow"
                  >
                    <span className="text-xs font-bold tracking-widest uppercase text-[#C45C3E] mb-2 block">
                      {p.category}
                    </span>
                    <h3 className="font-serif text-lg text-[#222222] leading-snug group-hover:text-[#C45C3E] transition-colors">
                      {p.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
