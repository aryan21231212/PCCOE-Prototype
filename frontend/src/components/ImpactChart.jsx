import { PieChart, Pie, Tooltip } from "recharts";

export default function ImpactChart() {
  const data = [
    { name: "Waste Diverted", value: 45 },
    { name: "CO₂ Saved", value: 30 },
    { name: "Transport Miles Reduced", value: 25 }
  ];

  return (
    <div className="bg-white shadow p-6 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Your Impact</h2>
      <PieChart width={300} height={200}>
        <Pie data={data} dataKey="value" nameKey="name" fill="#16a34a" label />
        <Tooltip />
      </PieChart>
    </div>
  );
}
