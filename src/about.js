import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>About <span>WearZone</span></h1>
        <p>Your fashion, our passion. Explore the story behind our brand.</p>
      </section>

      <section className="about-content">
        <div className="about-card">
          <h2>👗 Our Mission</h2>
          <p>
            At WearZone, we believe fashion should be affordable, stylish, and accessible to everyone. We aim to deliver trending outfits with quality and care.
          </p>
        </div>

        <div className="about-card">
          <h2>📦 What We Offer</h2>
          <p>
            From ethnic wear to modern fashion, from footwear to accessories – we bring it all in one place. New arrivals every week!
          </p>
        </div>

        <div className="about-card">
          <h2>💡 Our Story</h2>
          <p>
            Started by passionate fashion lovers, WearZone began as a small online store and grew into a recognized platform trusted by thousands across India.
          </p>
        </div>

        <div className="about-card">
          <h2>🤝 Trusted by 10,000+ Shoppers</h2>
          <p>
            We’re proud to serve happy customers in all major cities. With fast delivery & secure payments, your trust is our biggest reward.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
