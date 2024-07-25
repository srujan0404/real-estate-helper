const Notification = require("../models/notification");

exports.createNotification = async (req, res) => {
  const { userId, message, type } = req.body;
  try {
    const newNotification = new Notification({ userId, message, type });
    await newNotification.save();
    return res.status(201).json(newNotification);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ msg: "Server error while creating notification" });
  }
};

exports.getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find();
    return res.status(200).json(notifications);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ msg: "Server error while retrieving notifications" });
  }
};

exports.getNotificationById = async (req, res) => {
  const { id } = req.params;
  try {
    const notification = await Notification.findById(id);
    if (!notification) {
      return res.status(404).json({ msg: "Notification not found" });
    }
    return res.status(200).json(notification);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ msg: "Server error while retrieving notification" });
  }
};

exports.deleteNotification = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedNotification = await Notification.findByIdAndDelete(id);
    if (!deletedNotification) {
      return res.status(404).json({ msg: "Notification not found" });
    }
    return res.status(200).json({ msg: "Notification deleted successfully" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ msg: "Server error while deleting notification" });
  }
};
