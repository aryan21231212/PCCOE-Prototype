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
    <div className="max-w-6xl mx-auto px-6 py-10 space-y-6">
      <h2 className="text-2xl font-bold">Buyer Marketplace</h2>
      <SearchFilter onSearch={handleSearch} />
      <ListingsTable listings={demo} />
    </div>
  );
}
