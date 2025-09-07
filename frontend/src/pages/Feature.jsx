import { Lightbulb, Cpu, Search, BarChart3, MessageSquare, Truck } from "lucide-react";

const features = [
  {
    title: "AI-Powered Visual Analysis",
    description:
      "Upload a photo and let our custom-trained AI instantly detect the material type and estimate quantity.",
    icon: Cpu,
  },
  {
    title: "Intelligent Matching Engine",
    description:
      "Find the best matches with our algorithm that prioritizes location and quantity accuracy.",
    icon: Search,
  },
  {
    title: "Effortless Seller Dashboard",
    description:
      "Manage listings, track deals, and connect with buyers using a clean, intuitive interface.",
    icon: Lightbulb,
  },
  {
    title: "Precision Buyer Search",
    description:
      "Filter by material type, location, and price to find exactly what you need quickly.",
    icon: Truck,
  },
  {
    title: "Secure Messaging Hub",
    description:
      "Chat directly with buyers or sellers to negotiate terms and arrange logistics.",
    icon: MessageSquare,
  },
  {
    title: "Impact Analytics Dashboard",
    description:
      "See your contribution to the circular economy with metrics like waste diverted and CO₂ saved.",
    icon: BarChart3,
  },
];

export default function Features() {
  return (
    <div className="bg-[#0b1220] min-h-screen text-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Page Heading */}
        <h1 className="text-4xl font-extrabold text-center text-white mb-12">
          Platform Features
        </h1>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-6 rounded-2xl border border-white/10 shadow-lg hover:scale-[1.02] transition"
            >
              <f.icon className="w-10 h-10 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                {f.title}
              </h3>
              <p className="text-gray-400 text-sm">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
