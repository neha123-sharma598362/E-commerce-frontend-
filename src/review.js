import React from "react";
import "./review.css";

const Review = () => {
  const reviews = [
    {
      name: "Aarti Verma",
      rating: 5,
      message: "Loved the quality of the kurti. Comfortable and exactly as shown!",
      avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922510.png",
    },
    {
      name: "Rahul Jain",
      rating: 4,
      message: "Men’s T-shirt was soft and fit perfectly. Fast delivery too!",
      avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922511.png",
    },
    {
      name: "Sneha Kapoor",
      rating: 5,
      message: "Very satisfied with the saree collection. Will order again!",
      avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922656.png",
    },
    {
      name: "Simran Mehta",
      rating: 4,
      message: "Lehenga choli was beautiful. Got many compliments at the wedding!",
      avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922561.png",
    },
    {
      name: "Aryan Singh",
      rating: 5,
      message: "Great quality shoes! Comfy and stylish. Worth the price.",
      avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922688.png",
    },
    {
      name: "Ritika Sharma",
      rating: 5,
      message: "Loved the earrings and dupatta set! Felt like a diva ✨",
      avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922651.png",
    },
    {
    name: "Manav Patel",
    rating: 4,
    message: "Nice collection for men. Jeans and shirts both fit well.",
    avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922519.png",
  },
  {
    name: "Neha Sinha",
    rating: 5,
    message: "Best online shopping experience! Quick delivery & secure packaging.",
    avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922596.png",
  },
  ];

  return (
    <div className="review-section">
      <h1 className="review-heading">🛍 Customer Reviews</h1>
      <p className="review-subtitle">
        Real feedback from our happy customers 
      </p>

      <div className="review-cards-wrapper">
        {reviews.map((rev, index) => (
          <div key={index} className="review-card">
            <img src={rev.avatar} alt={rev.name} className="avatar" />
            <h3>{rev.name}</h3>
            <div className="stars">{"".repeat(rev.rating)}</div>
            <p className="review-message">"{rev.message}"</p>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default Review;
