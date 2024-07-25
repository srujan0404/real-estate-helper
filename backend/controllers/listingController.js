const Listing = require("../models/listing");

exports.getAllListings = async (req, res) => {
  try {
    const listings = await Listing.find().populate("propertyId agentId");
    res.json(listings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createListing = async (req, res) => {
  const listing = new Listing(req.body);
  try {
    const newListing = await listing.save();
    res.status(201).json(newListing);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getListingById = async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id).populate(
      "propertyId agentId"
    );
    if (!listing) return res.status(404).json({ message: "Listing not found" });
    res.json(listing);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateListing = async (req, res) => {
  try {
    const listing = await Listing.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }).populate("propertyId agentId");
    if (!listing) return res.status(404).json({ message: "Listing not found" });
    res.json(listing);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteListing = async (req, res) => {
  try {
    const listing = await Listing.findByIdAndDelete(req.params.id);
    if (!listing) return res.status(404).json({ message: "Listing not found" });
    res.json({ message: "Listing deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
