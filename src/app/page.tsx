import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Hero from "@/components/layout/Landing page/Hero";
import ProofStrip from "@/components/layout/Landing page/Proof Strip";
import DealerView from "@/components/layout/Landing page/DealerView";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <ProofStrip />
      <DealerView />

      {/* Features Preview Section - Placeholder can be updated later if needed */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-[#001D3D] mb-4">Precision Engineered Solutions</h2>
          <p className="text-slate-500 max-w-2xl mx-auto mb-16 font-medium">
            Our platform provides end-to-end management for lubricant dealerships, from inventory tracking to compliance reporting.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Inventory Management",
                desc: "Real-time tracking of stock levels with automated reordering."
              },
              {
                title: "Compliance Tools",
                desc: "Stay ahead of regulations with built-in reporting and documentation."
              },
              {
                title: "Dealer Portal",
                desc: "A unified dashboard for managing orders, analytics, and customers."
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-none border border-slate-100 text-left hover:shadow-2xl transition-all hover:-translate-y-2">
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
