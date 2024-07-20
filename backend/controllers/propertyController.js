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
