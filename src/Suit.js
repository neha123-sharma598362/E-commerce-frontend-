import React from "react";
import "./suit.css";
import { useState } from "react";

const suits = [
  {
    id: 1,
    title: "Classic Black Suit",
    price: 1999,
    img: "/images/suit 9.jpg",
  },
  {
    id: 2,
    title: "Blue Slim Fit",
    price: 1299,
    img: "/images/suit 3.jpg",
  },
  {
    id: 3,
    title: "Green Suit",
    price: 2499,
    img: "/images/suit 8.jpg",
  },
  {
    id: 4,
    title: "Black Blazer Set",
    price: 4799,
    img: "/images/suit 5.jpg",
  },
  {
    id: 5,
    title: "White Suit",
    price: 1699,
    img: "/images/suit 2.jpg",
  },
  {
    id: 6,
    title: "Pink Suit",
    price: 1799,
    img: "/images/suit 6.jpg",
  },
  {
    id: 7,
    title: "Partywear Suit",
    price: 3499,
    img: "/images/suit 4.jpg",
  },
  {
    id: 8,
    title: "Fancy Suit",
    price: 2499,
    img: "/images/suit 7.jpg",
  }
];


const Suit = ({ onAddToCart }) => {
  const [successMsg, setSuccessMsg] = useState("");

  const handleAddToCart = async (item) => {
    try {
      onAddToCart(item);

      setSuccessMsg(`${item.title} added to cart!`);

      const response = await fetch("http://localhost:8000/add-to-cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });

      const data = await response.json();
      console.log("Saved to backend DB:", data);

      setTimeout(() => setSuccessMsg(""), 2000);
    } catch (error) {
      console.error("Add to cart failed:", error);
    }
  };

  return (
   <div className="suit-page">
      {/* Hero Banner */}
     <section className="suit-hero">
       <div className="overlay" />
       <div className="suit-hero-text">
          <h1>Women's Suits</h1>
         <p>Sharp. Elegant. Powerful.</p>
       </div>
      </section>
      {/* Success Message */}
      {successMsg && <div className="success-message">{successMsg}</div>}

      {/* Product Grid */}
     <section className="suit-grid">
        {suits.map((item) => (
         <div className="suit-card" key={item.id}>
          <img src={item.img} alt={item.title} />
            <h2>{item.title}</h2>
            <p className="price">₹{item.price}</p>
            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
          </div>
        ))}
     </section>
    </div>
  );
};



export default Suit;
