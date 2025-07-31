import React from "react";
import "./card.css"; 

const Card = () => {
  return (
    <div className="fullscreen-container">
      <img
        src="/images/fashion.jpg"
        alt="Fashion"
        className="fullscreen-image"
      />
      <div className="overlay-text">
        <h1>Welcome to WearZone</h1>
        <p>Explore the latest fashion trends</p>
        <button>Shop Now</button>
      </div>
    </div>
  );
};

export default Card;
