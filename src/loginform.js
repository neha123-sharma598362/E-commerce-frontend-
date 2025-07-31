import { NavLink } from "react-router-dom";
import "./loginform.css";
import { useState } from "react";

const Login = () => {
  const [form, setForm] = useState({});
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(null); 

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://e-commerce-backend-mmu4.onrender.com/login", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        setMessage(" Login Successfully!");
        setIsSuccess(true);
      } else {
        setMessage(" Login failed. Please try again.");
        setIsSuccess(false);
      }
    } catch (err) {
      console.error("Error:", err);
      setMessage(" Server error. Please try later.");
      setIsSuccess(false);
    }
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleSubmit}>
        <h2>Login to WearZone</h2>

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          onChange={handleForm}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          required
          onChange={handleForm}
        />

        <div className="remember-me">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>

        <button type="submit" className="login-btn">
          Login
        </button>

        {/*  Show Success or Error Message */}
        {message && (
          <p className={isSuccess ? "success-msg" : "error-msg"}>{message}</p>
        )}

       
        <p className="links">
          Don't have an account? <NavLink to="/register">Register now</NavLink>
        </p>
      </form>
    </div>
  );
};

export default Login;
