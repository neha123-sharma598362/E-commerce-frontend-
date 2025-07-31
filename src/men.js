import React, { useState } from "react";
import "./men.css";

const products = [
  {
    id: 1,
    title: "Casual Shirt",
    price: 1299,
    img: "/images/men 1.jpg",
  },
  {
    id: 2,
    title: "T-shirt",
    price: 799,
    img: "/images/men 2.jpg",
  },
  {
    id: 3,
    title: "Stylish Kurta",
    price: 2199,
    img: "/images/men 5.jpg",
  },
  {
    id: 4,
    title: "Pant Coat",
    price: 1499,
    img: "/images/men 4.jpg",
  },
  {
    id: 5,
    title: "Jeans",
    price: 1199,
    img: "/images/men 11.jpg",
  },
  {
    id: 6,
    title: "Shoes",
    price: 1299,
    img: "/images/footwearmen 4.jpg",
  },
  {
    id: 7,
    title: "Slipper",
    price: 500,
    img: "/images/footwearmen 6.jpg",
  },
  {
    id: 8,
    title: "Casual Slipper",
    price: 900,
    img: "/images/footwaermen 1.jpg",
  },
];

const Men = ({ onAddToCart }) => {
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
    <div className="men-page">
      {/* Hero Section */}
      <section className="men-hero">
        <div className="men-hero-content">
          <h1>Men's Collection</h1>
          <p>Bold. Smart. Effortless.</p>
        </div>
      </section>

      {/* Success Message */}
      {successMsg && <div className="success-message">{successMsg}</div>}

      {/* Product Grid */}
      <section className="men-products">
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

export default Men;
