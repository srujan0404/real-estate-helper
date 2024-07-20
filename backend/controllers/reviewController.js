const Review = require("../models/review");

exports.addReview = async (req, res) => {
  const { userId, propertyId, rating, comment } = req.body;
  try {
    const newReview = new Review({ userId, propertyId, rating, comment });
    await newReview.save();
    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.getReviewById = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) return res.status(404).json({ msg: "Review not found" });
    res.json(review);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.deleteReview = async (req, res) => {
  try {
    const deletedReview = await Review.findByIdAndDelete(req.params.id);
    if (!deletedReview)
      return res.status(404).json({ msg: "Review not found" });
    res.json({ msg: "Review deleted" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
