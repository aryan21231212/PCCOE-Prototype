import Navbar from "../components/Navbar";
import UploadForm from "../components/UploadForm";
import ListingsTable from "../components/ListingsTable";

const mockListings = [
  { material: "Aluminum", quantity: 100, location: "Pune", price: 5000 },
  { material: "Plastic", quantity: 200, location: "Mumbai", price: 3000 },
];

export default function Seller() {
  return (
    <>

      <div className="p-8 space-y-6">
        <UploadForm />
        <ListingsTable listings={mockListings} />
      </div>
    </>
  );
}
