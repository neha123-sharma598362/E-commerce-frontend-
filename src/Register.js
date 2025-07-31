import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./register.css"; 

const Register = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://e-commerce-backend-mmu4.onrender.com/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.status === 201) {
        setMessage(" Registered successfully!");
      } else {
        setMessage(` ${data.message}`);
      }
    } catch (error) {
      setMessage(" Registration failed. Server error.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="register-container">
      <form className="register-box" onSubmit={handleSubmit}>
        <h2>Register on WearZone</h2>

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          value={form.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          required
          value={form.password}
          onChange={handleChange}
        />

        <button type="submit" className="register-btn">Register</button>

        {message && <p className="response-message">{message}</p>}

        <p className="links">
          Already have an account? <NavLink to="/loginform">Login here</NavLink>
        </p>
      </form>
    </div>
  );
};

export default Register;
