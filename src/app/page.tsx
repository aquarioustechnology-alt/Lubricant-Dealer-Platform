import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Hero from "@/components/layout/Landing page/Hero";
import ProofStrip from "@/components/layout/Landing page/Proof Strip";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <ProofStrip />

      {/* Features Preview Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Precision Engineered Solutions</h2>
          <p className="text-muted max-w-2xl mx-auto mb-16">
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
              <div key={i} className="bg-white p-8 rounded-none border border-slate-100 text-left hover:shadow-xl transition-shadow transition-transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-50 rounded-none mb-6 flex items-center justify-center text-primary font-bold">
                  0{i + 1}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
