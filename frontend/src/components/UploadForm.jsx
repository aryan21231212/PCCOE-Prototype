import { useState } from "react";

export default function UploadForm({ onAutoFill }) {
  const [file, setFile] = useState(null);
  const [qty, setQty] = useState("");
  const [material, setMaterial] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Listing created (mock). Hook to backend / AI service to store real listing.");
  };

  // simulate call to AI service to autofill material+quantity
  const simulateAI = () => {
    if (!file) return alert("Choose an image first");
    // Demo: random fill
    const mats = ["Aluminum", "Plastic", "Copper", "Glass"];
    const picked = mats[Math.floor(Math.random() * mats.length)];
    const est = Math.floor(Math.random() * 500) + 10;
    setMaterial(picked);
    setQty(est);
    if (onAutoFill) onAutoFill({ material: picked, quantity: est });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white/5 p-6 rounded-lg space-y-4">
      <h3 className="text-lg font-semibold">Upload Waste Material</h3>

      <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} className="text-sm" />
      <div className="flex gap-3">
        <input value={material} onChange={(e)=>setMaterial(e.target.value)} placeholder="Detected material" className="flex-1 p-2 rounded border border-white/10 bg-transparent" />
        <input value={qty} onChange={(e)=>setQty(e.target.value)} placeholder="Quantity (kg)" className="w-40 p-2 rounded border border-white/10 bg-transparent" />
      </div>

      <div className="flex gap-3">
        <button type="button" onClick={simulateAI} className="bg-green-500 px-4 py-2 rounded">Analyze (AI)</button>
        <button type="submit" className="bg-white/10 px-4 py-2 rounded">Create Listing</button>
      </div>
    </form>
  );
}
