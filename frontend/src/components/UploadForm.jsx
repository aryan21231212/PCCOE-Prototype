import { useState } from "react";

export default function UploadForm() {
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Upload logic will connect to backend here 🚀");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow p-6 rounded-lg space-y-4">
      <h2 className="text-lg font-semibold">Upload Waste Material</h2>
      <input 
        type="file" 
        onChange={(e) => setFile(e.target.files[0])} 
        className="w-full border p-2 rounded"
      />
      <input 
        type="text" 
        placeholder="Quantity (kg)" 
        className="w-full border p-2 rounded"
      />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Upload
      </button>
    </form>
  );
}
