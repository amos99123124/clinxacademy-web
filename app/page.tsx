import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import ProblemSolution from "@/components/ProblemSolution";
import ProgramOverview from "@/components/ProgramOverview";
import Faculty from "@/components/Faculty";
import Testimonials from "@/components/Testimonials";
import PricingCTA from "@/components/PricingCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SocialProof />
        <ProblemSolution />
        <ProgramOverview />
        <Faculty />
        <Testimonials />
        <PricingCTA />
      </main>
      <Footer />
    </>
  );
}
