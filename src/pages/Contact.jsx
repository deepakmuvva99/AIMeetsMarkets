import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Get in Touch with AlphaInsights</h2>
      <p className="contact-description">
        We're here to assist you with your stock market insights and analysis needs. Reach out to us anytime.
      </p>

      <div className="contact-info">
        <h3 className="contact-subtitle">Contact Information</h3>
        <p>Email: <a href="mailto:alphainsights@org.in" className="contact-link">alphainsights@org.in</a></p>
        <p>Phone: <a href="tel:+91 9848536663" className="contact-link">9848536663</a></p>
      </div>

      <h3 className="contact-subtitle">Follow Us</h3>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/yourprofile" className="social-link">LinkedIn</a>
        <a href="https://twitter.com/yourprofile" className="social-link">Twitter</a>
        <a href="https://www.instagram.com/yourprofile" className="social-link">Instagram</a>
      </div>
    </div>
  );
};

export default Contact;
