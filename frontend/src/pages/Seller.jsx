import UploadForm from "../components/UploadForm";
import ListingsTable from "../components/ListingsTable";

const mock = [
  { material: "Aluminum", quantity: 120, location: "Pune", price: 5000, logistics: "Seller Delivery" }
];

export default function Seller() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10 space-y-6">
      <h2 className="text-2xl font-bold">Seller Dashboard</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <UploadForm />
        <div className="space-y-4">
          <div className="bg-white/5 p-4 rounded">Active Listings</div>
          <ListingsTable listings={mock} />
        </div>
      </div>
    </div>
  );
}
