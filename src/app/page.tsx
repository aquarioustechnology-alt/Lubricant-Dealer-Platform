import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Hero from "@/components/layout/LandingPage/Hero";
import ProofStrip from "@/components/layout/LandingPage/ProofStrip";
import DealerView from "@/components/layout/LandingPage/DealerView";
import Features from "@/components/layout/LandingPage/Features";
import BrandView from "@/components/layout/LandingPage/BrandView";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <ProofStrip />
      <DealerView />
      <Features />
      <BrandView />

      {/* Legacy Placeholder Section - Removing redundant summary or updating later */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 text-center border-t border-slate-100 pt-16">
          <h2 className="text-4xl font-extrabold text-[#001D3D] mb-4 tracking-tight">Built for Performance</h2>
          <p className="text-slate-500 max-w-2xl mx-auto mb-16 font-medium">
            Join the ecosystem designed specifically for the Indian lubricant market.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Scaleable Architecture",
                desc: "Handle thousands of dealer transactions without lag."
              },
              {
                title: "Local Support",
                desc: "Dedicated account management for regional distribution networks."
              },
              {
                title: "Rapid Deployment",
                desc: "Get your entire dealer base mapped and live within 7 days."
              }
            ].map((feature, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-none border border-slate-100 text-left hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-none mb-6 flex items-center justify-center text-primary font-bold">
                  0{i + 1}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
