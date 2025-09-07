// backend/models/Transaction.js
import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  listing: { type: mongoose.Schema.Types.ObjectId, ref: "Listing" },
  seller: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  buyer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  quantity: { type: Number, default: 0 }, // kg
  distanceKm: { type: Number, default: 0 }, // estimated transport distance in km
  co2SavedKg: { type: Number, default: 0 }, // estimated co2 saved in kg
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Transaction", transactionSchema);
