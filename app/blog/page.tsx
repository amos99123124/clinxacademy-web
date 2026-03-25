import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getAllPostsMeta } from "@/lib/blog";
import { CATEGORIES } from "@/lib/blog/types";

export const metadata: Metadata = {
  title: "Blog — ClinX Academy | Healthcare Business & Physician Executive Insights",
  description:
    "Expert articles on Medicare Advantage, MSO/PC structures, non-clinical career paths, medical director roles, and the business of healthcare — written for physicians ready to lead.",
  alternates: {
    canonical: "https://clinxacademy.com/blog",
  },
  openGraph: {
    title: "Blog — ClinX Academy",
    description:
      "Expert articles on Medicare Advantage, MSO/PC structures, non-clinical career paths, medical director roles, and the business of healthcare.",
    url: "https://clinxacademy.com/blog",
    type: "website",
  },
};

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T12:00:00Z");
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function BlogIndexPage() {
  const posts = getAllPostsMeta();

  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="bg-[#F5F3EF] py-20 border-b border-[#D8D4CC]">
          <div className="container-width">
            <p className="eyebrow mb-4">ClinX Academy Blog</p>
            <h1 className="font-serif text-5xl md:text-6xl text-[#222222] leading-tight mb-4">
              The Business of Healthcare, Explained
            </h1>
            <p className="text-[#4A4A4A] text-xl leading-relaxed max-w-2xl">
              In-depth articles on Medicare Advantage, revenue cycle, MSO/PC structures, non-clinical careers, and the skills physicians need to lead.
            </p>
          </div>
        </section>

        {/* Post Grid */}
        <section className="bg-white py-20">
          <div className="container-width">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col bg-[#F5F3EF] rounded-xl overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-xs font-bold tracking-widest uppercase text-[#C45C3E] mb-3">
                      {post.category}
                    </span>
                    <h2 className="font-serif text-xl text-[#222222] leading-snug mb-3 group-hover:text-[#C45C3E] transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-[#4A4A4A] leading-relaxed flex-1 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <p className="text-xs text-[#888] mt-4">{formatDate(post.date)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#1C2331] py-20">
          <div className="container-width text-center">
            <p className="eyebrow mb-4" style={{ color: "#C45C3E" }}>
              Ready to Go Deeper?
            </p>
            <h2 className="font-serif text-4xl text-[#F5F3EF] leading-tight mb-6">
              Turn This Knowledge Into a Career Advantage
            </h2>
            <p className="text-[#EBE8E2] opacity-70 text-xl mb-10 max-w-2xl mx-auto">
              ClinX Academy gives you 35+ hours of structured curriculum — Medicare Advantage, MSO/PC structures, revenue cycle, payor contracting, and more — taught by physicians who have done it.
            </p>
            <a href="https://members.clinxacademy.com/store" className="btn-primary">
              Enroll in ClinX Academy
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
