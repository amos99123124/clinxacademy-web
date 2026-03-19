import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import KShapedSection from "@/components/KShapedSection";
import RolesGrid from "@/components/RolesGrid";
import ProblemSolution from "@/components/ProblemSolution";
import ComparisonTable from "@/components/ComparisonTable";
import PricingCTA from "@/components/PricingCTA";
import ProgramOverview from "@/components/ProgramOverview";
import Faculty from "@/components/Faculty";
import Testimonials from "@/components/Testimonials";
import FitSection from "@/components/FitSection";
import FAQ from "@/components/FAQ";
import LeadMagnetCTA from "@/components/LeadMagnetCTA";
import TrustLogos from "@/components/TrustLogos";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SocialProof />
        <KShapedSection />
        <RolesGrid />
        <ProblemSolution />
        <ComparisonTable />
        <PricingCTA />
        <ProgramOverview />
        <Faculty />
        <Testimonials />
        <FitSection />
        <FAQ />
        <LeadMagnetCTA />
        <TrustLogos />
      </main>
      <Footer />
    </>
  );
}
