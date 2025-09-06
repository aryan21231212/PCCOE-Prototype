export default function ListingsTable({ listings }) {
  return (
    <table className="min-w-full bg-white border rounded-lg shadow">
      <thead>
        <tr className="bg-green-600 text-white">
          <th className="py-2 px-4">Material</th>
          <th className="py-2 px-4">Quantity</th>
          <th className="py-2 px-4">Location</th>
          <th className="py-2 px-4">Price</th>
        </tr>
      </thead>
      <tbody>
        {listings.map((item, idx) => (
          <tr key={idx} className="border-t hover:bg-gray-50">
            <td className="py-2 px-4">{item.material}</td>
            <td className="py-2 px-4">{item.quantity} kg</td>
            <td className="py-2 px-4">{item.location}</td>
            <td className="py-2 px-4">₹{item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
