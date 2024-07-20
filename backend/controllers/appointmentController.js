const Appointment = require("../models/appointment");

exports.bookAppointment = async (req, res) => {
  const { userId, propertyId, date, time } = req.body;
  try {
    const newAppointment = new Appointment({ userId, propertyId, date, time });
    await newAppointment.save();
    res.status(201).json(newAppointment);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.getAppointmentById = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    if (!appointment)
      return res.status(404).json({ msg: "Appointment not found" });
    res.json(appointment);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.cancelAppointment = async (req, res) => {
  try {
    const deletedAppointment = await Appointment.findByIdAndDelete(
      req.params.id
    );
    if (!deletedAppointment)
      return res.status(404).json({ msg: "Appointment not found" });
    res.json({ msg: "Appointment cancelled" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
