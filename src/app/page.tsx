import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Hero from "@/components/layout/LandingPage/Hero";
import ProofStrip from "@/components/layout/LandingPage/ProofStrip";
import DealerView from "@/components/layout/LandingPage/DealerView";
import Features from "@/components/layout/LandingPage/Features";
import BrandView from "@/components/layout/LandingPage/BrandView";
import DashboardSteps from "@/components/layout/LandingPage/DashboardSteps";
import FAQs from "@/components/layout/LandingPage/FAQs";
import Contact from "@/components/layout/LandingPage/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <ProofStrip />
      <DealerView />
      <Features />
      <BrandView />
      <DashboardSteps />
      <FAQs />
      <Contact />
      <Footer />
    </main>
  );
}
