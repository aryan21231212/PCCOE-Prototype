import ImpactChart from "../components/ImpactChart";

export default function Analytics() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-bold mb-6">Impact Analytics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ImpactChart />
        <div className="bg-white/5 p-6 rounded">
          <h3 className="font-semibold mb-2">Stats</h3>
          <ul className="text-gray-300 space-y-2">
            <li>♻️ Tonnes of waste diverted: <strong>124</strong></li>
            <li>🚚 Reduced transport miles: <strong>2,340 km</strong></li>
            <li>💨 CO₂ emissions avoided: <strong>12.4 tCO₂</strong></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
