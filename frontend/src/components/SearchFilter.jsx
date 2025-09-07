export default function SearchFilter({ onSearch }) {
  const submit = (e) => {
    e.preventDefault();
    const form = Object.fromEntries(new FormData(e.target));
    if (onSearch) onSearch(form);
  };

  return (
    <form onSubmit={submit} className="bg-white/5 p-4 rounded-lg flex gap-3 items-center">
      <input name="material" placeholder="Material type" className="p-2 rounded bg-transparent border border-white/10 flex-1" />
      <input name="minQty" placeholder="Min Qty" type="number" className="p-2 rounded bg-transparent border border-white/10 w-28" />
      <input name="maxQty" placeholder="Max Qty" type="number" className="p-2 rounded bg-transparent border border-white/10 w-28" />
      <input name="location" placeholder="Location" className="p-2 rounded bg-transparent border border-white/10 w-44" />
      <button className="bg-green-500 px-4 py-2 rounded">Search</button>
    </form>
  );
}
