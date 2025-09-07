import SearchFilter from "../components/SearchFilter";
import ListingsTable from "../components/ListingsTable";

const demo = [
  { material: "Aluminum", quantity: 120, location: "Pune", price: 5000 },
  { material: "Plastic", quantity: 200, location: "Mumbai", price: 3000 },
];

export default function Buyer() {
  const handleSearch = (q) => {
    console.log("Search query", q);
    alert("Search performed (mock). Matching algorithm will be on backend.");
  };

  return (
    <div className="bg-[#0b1220] min-h-screen text-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-10">
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-white">
          Buyer Marketplace
        </h2>

        {/* Search */}
        <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-6 rounded-2xl border border-white/10 shadow-lg">
          <SearchFilter onSearch={handleSearch} />
        </div>

        {/* Listings */}
        <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-6 rounded-2xl border border-white/10 shadow-lg">
          <h3 className="text-xl font-semibold text-green-400 mb-4">
            Available Listings
          </h3>
          <ListingsTable listings={demo} />
        </div>
      </div>
    </div>
  );
}
