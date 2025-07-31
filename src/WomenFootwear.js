import React from "react";
import "./womenfootwear.css";
import { useState } from "react";
const footwear = [
  {
    id: 1,
    title: "Stylish Heels",
    price: 1299,
    img: "/images/fwomen 9.jpg",
  },
  {
    id: 2,
    title: "Casual Sneakers",
    price: 999,
    img: "/images/fwomen 4.jpg",
  },
  {
    id: 3,
    title: "Pink Fancy Slippers",
    price: 899,
    img: "/images/fwomen 1.jpg",
  },
  {
    id: 4,
    title: "Heels",
    price: 1499,
    img: "/images/fwomen 7.jpg",
  },
    {
    id: 5,
    title: "Sandals",
    price: 1199,
    img: "/images/fwomen 3.jpg",
  },
  {
    id: 6,
    title: "Sandals",
    price: 1399,
    img: "/images/fwomen 2.jpg",
  },
  {
    id: 7,
    title: "Black Sandals",
    price: 1499,
    img: "/images/fwomen 8.jpg",
  },
  {
    id: 8,
    title: " Flat Sandals",
    price: 1499,
    img: "/images/fwomen 5.jpg",
  },
];



const WomenFootwear = ({ onAddToCart }) => {
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
     <div className="footwear-page">
     {/* Hero Section */}
     <section className="footwear-hero">
        <div className="overlay" />
         <div className="hero-content">
          <h1>Women's Footwear</h1>
         <p>Comfort Meets Style</p>
       </div>
     </section>

      {/* Success Message */}
      {successMsg && <div className="success-message">{successMsg}</div>}

      {/* Product Grid */}
      <section className="footwear-grid">
        {footwear.map((item) => (
         <div className="footwear-card" key={item.id}>
           <img src={item.img} alt={item.title} />
           <h2>{item.title}</h2>
           <p className="price">{item.price}</p>
            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </section>
    </div>
  );
};




export default WomenFootwear;
