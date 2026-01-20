import React from "react";
import "./ContactForm.css";
import './Navbar.css';


const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting Homieebaba! We'll reach out soon.");
    e.target.reset();
  };

  return (
    <section id="contact" className="contact-section">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Contact Us</h2>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default ContactForm;
