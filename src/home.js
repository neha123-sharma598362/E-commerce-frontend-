import React from "react";
import { NavLink } from "react-router-dom";
import './home.css';

const Home = ({ cartItems }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand logo-text" to="/">WearZone</NavLink>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 custom-navbar-links">
              <li className="nav-item">
                <NavLink className="nav-link active" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/about">About us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/review">Reviews</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/contact">Contact us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/loginform">Login</NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown">
                  Categories
                </NavLink>
                <ul className="dropdown-menu">
                  <li><NavLink className="dropdown-item" to="/men">Men's</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/women">Women clothes</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/bag">Bags</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/footwear">Women footwear</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/suit">Women Suits</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/saree">Women Saree</NavLink></li>
                </ul>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link active" to="/cart">
                  🛒 Cart <span className="badge bg-warning text-dark">{cartItems.length}</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Home;
