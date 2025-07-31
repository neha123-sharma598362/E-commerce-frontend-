import React from "react";
import { useState } from "react";
import "./women.css";

const products = [
  {
    id: 1,
    title: "Floral Summer Dress",
    price: 1499,
    img: "/images/women 5.jpg",
  },
  {
    id: 2,
    title: "Casual Pink Dress",
    price: 799,
    img: "/images/women 7.jpg",
  },
  {
    id: 3,
    title: "Party Dress",
    price: 1999,
    img: "/images/women 8.jpg",
  },
  {
    id: 4,
    title: "Summer Special Dress",
    price: 1199,
    img: "/images/women 1.jpg",
  },
   {
    id: 5,
    title: "Bodycon Dress",
    price: 1499,
    img: "/images/women 6.jpg",
  },
   {
    id: 6,
    title: "Frok",
    price: 1399,
    img: "/images/women 9.jpg",
  },
   {
    id: 7,
    title: "PartyWear",
    price: 1199,
    img: "/images/women 2.jpg",
  },
   {
    id: 8,
    title: "Summer Dress",
    price: 1199,
    img: "/images/women 4.jpg",
  },
  
];


const Women = ({ onAddToCart }) => {
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
   <div className="women-page">
     {/* Hero Section */}
      <section className="women-hero">
       <div className="overlay" />
        <div className="hero-content">
          <h1>Women's Collection</h1>
          <p>Grace. Color. Confidence.</p>
     </div>
     </section>

      {/* Success Message */}
      {successMsg && <div className="success-message">{successMsg}</div>}

      {/* Product Grid */}
      <section className="women-products">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
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

export default Women;


