const Contact = require("../models/contact");

exports.createContact = async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json(newContact);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

