import { PieChart, Pie, Tooltip } from "recharts";

export default function ImpactChart({ data }) {
  const sample = data || [
    { name: "Waste Diverted", value: 45 },
    { name: "CO2 Saved", value: 30 },
    { name: "Transport Miles Reduced", value: 25 }
  ];

  return (
    <div className="bg-white/5 p-6 rounded-lg">
      <h3 className="font-semibold mb-4">Your Impact</h3>
      <PieChart width={300} height={220}>
        <Pie data={sample} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label />
        <Tooltip />
      </PieChart>
    </div>
  );
}
