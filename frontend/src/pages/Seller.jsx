import UploadForm from "../components/UploadForm";
import ListingsTable from "../components/ListingsTable";

const mock = [
  {
    material: "Aluminum",
    quantity: 120,
    location: "Pune",
    price: 5000,
    logistics: "Seller Delivery",
  },
];

export default function Seller() {
  return (
    <div className="bg-[#0b1220] min-h-screen text-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-10">
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-white">
          Seller Dashboard
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Form */}
          <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-6 rounded-2xl border border-white/10 shadow-lg">
            <UploadForm />
          </div>

          {/* Active Listings */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-6 rounded-2xl border border-white/10 shadow-lg">
              <h3 className="text-xl font-semibold text-green-400 mb-4">
                Active Listings
              </h3>
              <ListingsTable listings={mock} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
