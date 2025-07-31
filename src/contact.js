import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://e-commerce-backend-mmu4.onrender.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccessMsg(" Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSuccessMsg(""), 3000);
      } else {
        setSuccessMsg("Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      setSuccessMsg("Failed to send message.");
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact <span>WearZone</span></h1>
      <p className="intro-text">We'd love to hear from you!</p>

      {successMsg && <p className="success-msg">{successMsg}</p>}

      <div className="contact-content">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Your Name"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Your Email"
            onChange={handleChange}
            required
          />
          <textarea
            rows="5"
            name="message"
            value={formData.message}
            placeholder="Your Message"
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>📧 Email: support@wearzone.com</p>
          <p>📍 Address: Chandigarh, India</p>
          <p>⏰ Mon–Sun: 24 x 7 available</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
