const mongoose = require("mongoose");

const PropertySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  images: [String],
  features: [String],
  price: { type: Number, required: true },
});

module.exports = mongoose.model("Property", PropertySchema);
