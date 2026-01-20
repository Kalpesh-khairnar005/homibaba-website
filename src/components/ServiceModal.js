// src/components/ServiceModal.js
import React from "react";
import "./ServiceModal.css";

const ServiceModal = ({ selectedService, closeModal }) => {
  if (!selectedService) return null; // Don't render if nothing is selected

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>{selectedService} - Service Registration</h2>
        <form
          className="modal-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Service request submitted!");
            closeModal(); // Close after submission
          }}
        >
          <input type="text" placeholder="Full Name" required />
          <input type="text" placeholder="Full Address" required />
          <input type="tel" placeholder="Mobile Number" required />
          <input type="email" placeholder="Email Address" required />
          <button type="submit">Submit</button>
          <button type="button" onClick={closeModal}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default ServiceModal;
