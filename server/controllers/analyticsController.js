// backend/controllers/analyticsController.js
import Listing from "../models/Listing.js";
import Transaction from "../models/transaction.js";

export const getImpact = async (req, res) => {
  try {
    // Try to compute metrics from transactions if present
    const txCount = await Transaction.countDocuments();
    let totalWasteDivertedKg = 0;
    let totalTransportKmReduced = 0;
    let totalCO2SavedKg = 0;

    if (txCount > 0) {
      const ag = await Transaction.aggregate([
        {
          $group: {
            _id: null,
            totalQty: { $sum: "$quantity" },
            totalKm: { $sum: "$distanceKm" },
            totalCO2: { $sum: "$co2SavedKg" },
            count: { $sum: 1 }
          }
        }
      ]);
      const a = ag[0] || {};
      totalWasteDivertedKg = a.totalQty || 0;
      totalTransportKmReduced = a.totalKm || 0;
      totalCO2SavedKg = a.totalCO2 || 0;

      return res.json({
        totalTransactions: a.count || txCount,
        totalListings: await Listing.countDocuments(),
        totalWasteDivertedKg,
        totalTransportKmReduced,
        totalCO2SavedKg,
        timeWindow: "transactions-based"
      });
    }

    // Fallback: estimate from listings if no transactions exist
    const listings = await Listing.find();
    const totalListings = listings.length;
    const totalQuant = listings.reduce((s, l) => s + (l.quantity || 0), 0);

    // Conservative assumption: 40% of listed quantity is actually diverted (demo)
    totalWasteDivertedKg = Math.round(totalQuant * 0.4);

    // Simple estimate for transport km saved: 10 km saved per matched transaction per listing (demo)
    totalTransportKmReduced = Math.round(totalListings * 10);

    // Estimate CO2: use a simple multiplier — for metal-heavy waste (demo), assume 2 kg CO2 saved per kg
    totalCO2SavedKg = Math.round(totalWasteDivertedKg * 2);

    res.json({
      totalTransactions: 0,
      totalListings,
      totalWasteDivertedKg,
      totalTransportKmReduced,
      totalCO2SavedKg,
      timeWindow: "estimated-from-listings"
    });
  } catch (err) {
    console.error("Analytics error:", err);
    res.status(500).json({ error: err.message });
  }
};
