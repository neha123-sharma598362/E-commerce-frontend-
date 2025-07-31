
import React, { useEffect, useState } from "react";
import "./addcart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/cart-items")
      .then(res => res.json())
      .then(data => setCartItems(data));
  }, []);

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-page">
      <h2>Your Cart 🛒</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Cart is empty.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.img} alt={item.title} className="cart-img" />
                <div className="item-info">
                  <h3>{item.title}</h3>
                  <p>₹{item.price}</p>
                </div>
              </li>
            ))}
          </ul>
          <h3 className="cart-total">Total: ₹{total}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
