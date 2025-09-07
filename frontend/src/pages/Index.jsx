import HeroSection from "../components/HeroSection";
import FeatureCards from "../components/FeatureCards";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeatureCards />

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="rounded-xl bg-gradient-to-r from-[#071024] to-[#0b1220] p-8 border border-white/5">
          <h2 className="text-2xl font-bold mb-4">How it Works</h2>
          <ol className="list-decimal ml-6 text-gray-300 space-y-2">
            <li>Sellers upload image → AI predicts material & quantity.</li>
            <li>Listing created and indexed with geo-location & quantity.</li>
            <li>Buyers search and get ranked results (proximity + quantity match).</li>
            <li>Chat + arrange logistics → Transaction tracked on platform.</li>
          </ol>
        </div>
      </section>
    </div>
  );
}
