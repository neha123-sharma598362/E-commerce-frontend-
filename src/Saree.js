import React from "react";
import "./saree.css";
import { useState } from "react";

const sarees = [
  {
    id: 1,
    title: "Silk Banarasi Saree",
    price: 2999,
    img: "/images/saree 8.jpg",
  },
  {
    id: 2,
    title: "Floral Printed Saree",
    price: 1499,
    img: "/images/saree 4.jpg",
  },
  {
    id: 3,
    title: "Elegant Cotton Saree",
    price: 1299,
    img: "/images/saree 1.jpg",
  },
  {
    id: 4,
    title: "Designer Party Saree",
    price: 3499,
    img: "/images/saree 6.jpg",
  },
   {
    id: 5,
    title: "Blue Simple Saree",
    price: 699,
    img: "/images/saree 2.jpg",
  },
   {
    id: 6,
    title: "Saree With Printed Blouse",
    price: 1599,
    img: "/images/saree 5.jpg",
  },
   {
    id: 7,
    title: " Stylish Saree",
    price: 1299,
    img: "/images/saree 3.jpg",
  },
   {
    id: 8,
    title: "Banarasi Saree",
    price: 1799,
    img: "/images/saree 7.jpg",
  },
];



const Saree = ({ onAddToCart }) => {
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
    <div className="saree-page">
     {/* Hero Section */}
       <section className="saree-hero">
         <div className="overlay" />
        <div className="hero-text">
           <h1>Saree Collection</h1>
           <p>Traditional Beauty in Every Drape</p>
         </div>
       </section>

      {/* Success Message */}
      {successMsg && <div className="success-message">{successMsg}</div>}

      {/* Product Grid */}
      <section className="saree-grid">
        {sarees.map((item) => (
          <div className="saree-card" key={item.id}>
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

export default Saree;
