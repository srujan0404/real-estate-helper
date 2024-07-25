const Review = require("../models/review");

// Add a new review
exports.addReview = async (req, res) => {
  const { userId, propertyId, rating, comment } = req.body;
  try {
    // Check if a review already exists for the same user and property
    const existingReview = await Review.findOne({ userId, propertyId });
    if (existingReview) {
      return res
        .status(400)
        .json({ msg: "User has already reviewed this property" });
    }

    const newReview = new Review({ userId, propertyId, rating, comment });
    await newReview.save();
    return res.status(201).json(newReview);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Server error while adding review" });
  }
};

// Get all reviews
exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    return res.status(200).json(reviews);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ msg: "Server error while retrieving reviews" });
  }
};

// Get a review by ID
exports.getReviewById = async (req, res) => {
  const { id } = req.params;
  try {
    const review = await Review.findById(id);
    if (!review) {
      return res.status(404).json({ msg: "Review not found" });
    }
    return res.status(200).json(review);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ msg: "Server error while retrieving review" });
  }
};

// Delete a review
exports.deleteReview = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedReview = await Review.findByIdAndDelete(id);
    if (!deletedReview) {
      return res.status(404).json({ msg: "Review not found" });
    }
    return res.status(200).json({ msg: "Review deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Server error while deleting review" });
  }
};
  