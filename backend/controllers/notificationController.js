const Notification = require("../models/notification");

exports.createNotification = async (req, res) => {
  const { userId, message, type } = req.body;
  try {
    const newNotification = new Notification({ userId, message, type });
    await newNotification.save();
    res.status(201).json(newNotification);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find();
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.getNotificationById = async (req, res) => {
  try {
    const notification = await Notification.findById(req.params.id);
    if (!notification)
      return res.status(404).json({ msg: "Notification not found" });
    res.json(notification);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.deleteNotification = async (req, res) => {
  try {
    const deletedNotification = await Notification.findByIdAndDelete(
      req.params.id
    );
    if (!deletedNotification)
      return res.status(404).json({ msg: "Notification not found" });
    res.json({ msg: "Notification deleted" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
