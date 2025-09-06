export default function SearchFilter() {
  return (
    <div className="bg-white shadow p-4 rounded-lg flex gap-4">
      <input type="text" placeholder="Material type" className="border p-2 rounded w-1/3"/>
      <input type="number" placeholder="Min Qty (kg)" className="border p-2 rounded w-1/3"/>
      <input type="number" placeholder="Max Qty (kg)" className="border p-2 rounded w-1/3"/>
      <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Search</button>
    </div>
  );
}
