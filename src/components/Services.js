import React, { useState } from "react";
import "./Services.css";
import ServiceModal from "./ServiceModal"; // Make sure path is correct

const Services = () => {
  const [selectedService, setSelectedService] = useState(null); // 🔹 Step 1: React state

  // 🔹 Step 2: function to open the form
  const openModal = (serviceName) => {
    setSelectedService(serviceName);
  };

  // 🔹 Step 3: function to close the form
  const closeModal = () => {
    setSelectedService(null);
  };

  const serviceList = [
    { name: "Home Cleaning", image: "https://i.ibb.co/HLYbvvxb/homeeeeee.jpg" },
    { name: "Electrician", image: "https://i.ibb.co/0Wx3zs6/eeeee.jpg" },
    { name: "Plumbing", image: "https://i.ibb.co/3DVKS2M/pppp.jpg" },
    { name: "Painting", image: "https://i.ibb.co/ZRRzYMY4/paint.jpg" },
    { name: "Carpenter", image: "https://i.ibb.co/prBZTBdv/home-carpenter-services-500x500.webp" },
    { name: "AC Repair", image: "https://i.ibb.co/yms5971g/repairman-doing-air-conditioner-service-1303-26541.jpg" },
    { name: "Pest Control", image: "https://i.ibb.co/TDgt3YFh/premium-photo-1682126104327-ef7d5f260cf7.jpg" },
    { name: "Appliance Repair", image: "https://i.ibb.co/vCHJ6QR5/working-man-plumber-repairs-washing-600nw-1051194281.webp" },
    { name: "Gardening", image: "https://i.ibb.co/1JPBQBSr/garden.jpg" },
    { name: "CCTV Installation", image: "https://i.ibb.co/MkVC9fCP/hands-with-watch-install-security-camera-on-white-bracket-greenery-in-background-for-social-media-po.jpg" },
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-grid">
        {serviceList.map((service, index) => (
          <div
            className="service-box"
            key={index}
            onClick={() => openModal(service.name)} // 🔹 Step 4: click opens form
          >
            <img src={service.image} alt={service.name} />
            <p>{service.name}</p>
          </div>
        ))}
      </div>

      {/* 🔹 Step 5: Pass the selected service to Modal */}
      <ServiceModal selectedService={selectedService} closeModal={closeModal} />
    </section>
  );
};

export default Services;
