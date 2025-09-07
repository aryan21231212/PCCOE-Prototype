// src/components/ImpactChart.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

const API_BASE ="http://localhost:3000";

export default function ImpactChart() {
  const [metrics, setMetrics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await axios.get(`${API_BASE}/api/analytics`);
        setMetrics(res.data);
      } catch (err) {
        console.error("Load analytics failed", err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) {
    return <div className="p-6 bg-white/5 rounded">Loading metrics…</div>;
  }

  const data = [
    { name: "Waste Diverted (kg)", value: metrics?.totalWasteDivertedKg || 0 },
    { name: "CO2 Saved (kg)", value: metrics?.totalCO2SavedKg || 0 },
    { name: "Transport km saved", value: metrics?.totalTransportKmReduced || 0 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-6 rounded-2xl border border-white/10">
        <h3 className="text-lg font-semibold text-white mb-4">Your Impact</h3>
        <div className="flex gap-4 items-center">
          <div style={{ width: 220, height: 220 }}>
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie data={data} dataKey="value" nameKey="name" outerRadius={80} label />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="text-sm text-gray-300">
            <div className="mb-2">♻️ <strong>{(metrics?.totalWasteDivertedKg ?? 0).toLocaleString()}</strong> kg diverted</div>
            <div className="mb-2">💨 <strong>{(metrics?.totalCO2SavedKg ?? 0).toLocaleString()}</strong> kg CO₂ saved</div>
            <div className="mb-2">🚚 <strong>{(metrics?.totalTransportKmReduced ?? 0).toLocaleString()}</strong> km transport saved</div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-6 rounded-2xl border border-white/10">
        <h3 className="text-lg font-semibold text-white mb-4">Recent Summary</h3>
        <ul className="text-gray-300 space-y-2">
          <li>Total transactions: <strong>{metrics?.totalTransactions ?? 0}</strong></li>
          <li>Total listings processed: <strong>{metrics?.totalListings ?? 0}</strong></li>
          <li>Time window: <strong>{metrics?.timeWindow || "all-time"}</strong></li>
        </ul>
      </div>
    </div>
  );
}
