import mongoose from "mongoose";

const listingSchema = new mongoose.Schema({
  material: { type: String, required: true },
  quantity: { type: Number, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true },
  seller: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

export default mongoose.model("Listing", listingSchema);
