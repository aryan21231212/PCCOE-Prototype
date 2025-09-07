import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative hero-overlay bg-[url('/hero-bg.jpg')] bg-cover bg-center">
      <div className="max-w-7xl mx-auto px-6 py-28">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block bg-gray-800/40 px-4 py-1 rounded-full text-sm text-green-300 mb-6">⚡ AI-Powered Circular Economy Platform</div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
            AI-Powered B2B Marketplace for <span className="text-green-400">Industrial Waste</span>
          </h1>

          <p className="mt-6 text-lg text-gray-200">
            Intelligently connects waste generators with companies that can use it as raw material, creating a <span className="bg-green-900/30 px-2 rounded text-green-200">hyper-local and efficient circular economy</span>.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/seller" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-md font-semibold">
              Join as Seller →
            </Link>
            <Link to="/buyer" className="inline-flex items-center gap-2 border border-gray-300 text-white/90 px-5 py-3 rounded-md">
              Join as Buyer →
            </Link>
          </div>
        </div>

        {/* feature cards row on desktop */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* cards will be placed by FeatureCards component but keep sample boxes for hero */}
        </div>
      </div>
    </section>
  );
}
