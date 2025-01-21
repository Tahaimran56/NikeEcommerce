"use client";

import React, { useState, useEffect } from "react";

type Review = {
  username: string;
  rating: number;
  comment: string;
};

type ProductReviewsProps = {
  productId: string;
};

const Reviews: React.FC<ProductReviewsProps> = ({ productId }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [newReview, setNewReview] = useState({
    username: "",
    rating: 0,
    comment: "",
  });
  const [averageRating, setAverageRating] = useState<number>(0);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const mockReviews: Review[] = [
          { username: "John", rating: 5, comment: "Great product!" },
          { username: "Jane", rating: 4, comment: "Good quality." },
        ];

        setReviews(mockReviews);
        calculateAverageRating(mockReviews);
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
      }
    };

    fetchReviews();
  }, [productId]);

  const calculateAverageRating = (reviews: Review[]) => {
    if (reviews.length === 0) return;
    const total = reviews.reduce((acc, review) => acc + review.rating, 0);
    setAverageRating(total / reviews.length);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({
      ...prev,
      [name]: name === "rating" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);
    calculateAverageRating(updatedReviews);
    setNewReview({ username: "", rating: 0, comment: "" });
  };

  return (
    <div className="mt-6">
      <h2 className="text-lg font-bold">Reviews and Ratings</h2>
      <p className="text-sm text-gray-600 mb-4">Average Rating: {averageRating.toFixed(1)} / 5</p>
      <ul className="mb-4">
        {reviews.map((review, index) => (
          <li key={index} className="border-b pb-2 mb-2">
            <p className="text-sm font-semibold">{review.username}</p>
            <p className="text-sm text-gray-600">Rating: {review.rating}</p>
            <p className="text-sm">{review.comment}</p>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="border p-4 rounded">
        <h3 className="text-md font-semibold mb-2">Add Your Review</h3>
        <input
          type="text"
          name="username"
          placeholder="Your Name"
          value={newReview.username}
          onChange={handleInputChange}
          className="border p-2 mb-2 w-full"
          required
        />
        <input
          type="number"
          name="rating"
          placeholder="Rating (1-5)"
          value={newReview.rating}
          onChange={handleInputChange}
          className="border p-2 mb-2 w-full"
          min="1"
          max="5"
          required
        />
        <textarea
          name="comment"
          placeholder="Your Review"
          value={newReview.comment}
          onChange={handleInputChange}
          className="border p-2 mb-2 w-full"
          required
        ></textarea>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default Reviews;
