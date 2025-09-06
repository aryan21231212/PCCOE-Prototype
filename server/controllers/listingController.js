import Listing from "../models/Listing.js";

export const createListing = async (req, res) => {
  try {
    const listing = await Listing.create(req.body);
    res.status(201).json(listing);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getListings = async (req, res) => {
  try {
    const listings = await Listing.find().populate("seller", "name email");
    res.json(listings);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
