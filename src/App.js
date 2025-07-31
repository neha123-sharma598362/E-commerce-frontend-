import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './loginform';
import Landing from './landing';
import Home from './home';
import About from './about';
import Contact from './contact';
import Review from './review';
import Men from './men';
import Women from './Women';
import WomenFootwear from './WomenFootwear';
import Suit from './Suit';
import Saree from './Saree';
import Bag from './Bag';
import Register from './Register';
import Cart from './Cart';


function App() {
  //  Cart state
  const [cartItems, setCartItems] = useState([]);

  //  Add to cart handler
  const handleAddToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  //  Remove from cart handler (optional for future)
  const handleRemoveFromCart = (indexToRemove) => {
    setCartItems((prevItems) =>
      prevItems.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing cartItems={cartItems} />} />
        <Route path="/loginform" element={<Login />} />
        <Route path="/home" element={<Home cartItems={cartItems} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/review" element={<Review />} />
        <Route path="/register" element={<Register />} />


        {/* component with Add to Cart support */}
        <Route
          path="/men"
          element={<Men onAddToCart={handleAddToCart} />}
        />
         <Route
          path="/women"
          element={<Women onAddToCart={handleAddToCart} />}
        />
         <Route
          path="/suit"
          element={<Suit onAddToCart={handleAddToCart} />}
        />

          <Route
          path="/footwear"
          element={<WomenFootwear onAddToCart={handleAddToCart} />}
        />
         <Route
          path="/bag"
          element={<Bag onAddToCart={handleAddToCart} />}
        />

          <Route
          path="/saree"
          element={<Saree onAddToCart={handleAddToCart} />}
        />

        {/*  Cart component with cartItems */}
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              onRemoveFromCart={handleRemoveFromCart}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
