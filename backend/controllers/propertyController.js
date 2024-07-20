const Property = require("../models/property");

exports.getProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.getPropertyById = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) return res.status(404).json({ msg: "Property not found" });
    res.json(property);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.createProperty = async (req, res) => {
  const { title, description, images, features, price } = req.body;
  try {
    const newProperty = new Property({
      title,
      description,
      images,
      features,
      price,
    });
    await newProperty.save();
    res.status(201).json(newProperty);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.updateProperty = async (req, res) => {
  const { title, description, images, features, price } = req.body;
  try {
    const updatedProperty = await Property.findByIdAndUpdate(
      req.params.id,
      { title, description, images, features, price },
      { new: true }
    );
    if (!updatedProperty)
      return res.status(404).json({ msg: "Property not found" });
    res.json(updatedProperty);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.deleteProperty = async (req, res) => {
  try {
    const deletedProperty = await Property.findByIdAndDelete(req.params.id);
    if (!deletedProperty)
      return res.status(404).json({ msg: "Property not found" });
    res.json({ msg: "Property deleted" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
