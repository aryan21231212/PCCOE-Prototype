export default function ListingsTable({ listings = [] }) {
  return (
    <div className="overflow-x-auto bg-white/5 rounded-lg p-4">
      <table className="min-w-full">
        <thead>
          <tr className="text-left text-gray-300">
            <th className="py-2 px-3">Material</th>
            <th className="py-2 px-3">Quantity (kg)</th>
            <th className="py-2 px-3">Location</th>
            <th className="py-2 px-3">Price</th>
            <th className="py-2 px-3">Logistics</th>
          </tr>
        </thead>
        <tbody>
          {listings.map((l, i) => (
            <tr key={i} className="border-t border-white/5 hover:bg-white/2">
              <td className="py-3 px-3">{l.material}</td>
              <td className="py-3 px-3">{l.quantity}</td>
              <td className="py-3 px-3">{l.location}</td>
              <td className="py-3 px-3">₹{l.price}</td>
              <td className="py-3 px-3">{l.logistics || "Self Pickup"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
