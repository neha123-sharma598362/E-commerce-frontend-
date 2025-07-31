import React from "react";
import "./cart.css";

const Cart = ({ cartItems, onRemoveFromCart }) => {
  const total = cartItems.reduce((sum, item) => {
    const price = parseInt(item.price.toString().replace("₹", ""));
    return sum + price;
  }, 0);

  return (
    <div className="cart-page">
      <h2>Your Cart </h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map((item, index) => (
              <li className="cart-item" key={index}>
                <img src={item.img} alt={item.title} />
                <div className="item-info">
                  <h3>{item.title}</h3>
                  <p>Price: {item.price}</p>
                  <button onClick={() => onRemoveFromCart(index)}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <h3 className="total">Total: ₹{total}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;



