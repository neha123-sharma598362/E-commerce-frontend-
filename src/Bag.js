import React from 'react';
import './bag.css';
import { useState } from 'react';
const bags = [
  {
    id: 1,
    title: "Leather Bag",
    price: 799,
    img: "/images/bag 10.jpg"
  },
  {
    id: 2,
    title: "Stylish Handbag",
    price: 999,
    img: "/images/bag 8.jpg"
  },
  {
    id: 3,
    title: "Trendy Sling Bag",
    price: 1249,
    img: "/images/bag 11.jpg"
  },
  {
    id: 4,
    title: "Designer Clutch",
    price: 1299,
    img: "/images/bag 12.jpg"
  },
   {
    id: 5,
    title: "Urban Office Bag",
    price: 1399,
    img: "/images/bag 16.jpg"
  },
   {
    id: 6,
    title: "Mini Crossbody Pouch",
    price: 1459,
    img: "/images/bag 15.jpg"
  },
   {
    id: 7,
    title: "Floral Designer Tote",
    price: 1299,
    img: "/images/bag 14.jpg"
  },
   {
    id: 8,
    title: "Premium Travel Duffel",
    price: 2299,
    img: "/images/bag 13.jpg"
  }
];


const Bag = ({ onAddToCart }) => {
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
      {/* Hero */}
     <section className="bag-hero">
         <div className="bag-hero-content">
           <h1>Bag's Collection</h1>
          <p>Find the best styles to match your elegance and mood</p>
        </div>
     </section>

      {/* Success Message */}
      {successMsg && <div className="success-message">{successMsg}</div>}

      {/* Product Grid */}
        <section className="bag-grid">
        {bags.map((item) => (
          <div className="bag-card" key={item.id}>
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



export default Bag;
