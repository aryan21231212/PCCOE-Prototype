import HeroSection from "../components/HeroSection";
import FeatureCards from "../components/FeatureCard"; 

export default function Home() {
  return (
    <div className="bg-[#0b1220]  text-gray-100">

      <HeroSection />


      <FeatureCards />


      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="rounded-2xl bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-10 border border-white/10 shadow-lg">
          <h2 className="text-3xl font-extrabold text-white mb-6">
            How it Works
          </h2>
          <ol className="list-decimal ml-6 space-y-4 text-gray-300 text-lg">
            <li>
              <span className="text-green-400 font-semibold">Sellers</span>{" "}
              upload an image → AI predicts material & quantity.
            </li>
            <li>
              Listing created and indexed with{" "}
              <span className="text-green-400 font-semibold">
                geo-location & quantity
              </span>
              .
            </li>
            <li>
              <span className="text-green-400 font-semibold">Buyers</span> search
              and get ranked results (proximity + quantity match).
            </li>
            <li>
              <span className="text-green-400 font-semibold">
                Chat & logistics
              </span>{" "}
              → Transaction tracked on platform.
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}
