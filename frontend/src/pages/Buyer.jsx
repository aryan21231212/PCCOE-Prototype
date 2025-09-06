import Navbar from "../components/Navbar";
import SearchFilter from "../components/SearchFilter";
import ListingsTable from "../components/ListingsTable";

const mockListings = [
  { material: "Steel", quantity: 150, location: "Pune", price: 7000 },
  { material: "Glass", quantity: 50, location: "Delhi", price: 2000 },
];

export default function Buyer() {
  return (
    <>

      <div className="p-8 space-y-6">
        <SearchFilter />
        <ListingsTable listings={mockListings} />
      </div>
    </>
  );
}
