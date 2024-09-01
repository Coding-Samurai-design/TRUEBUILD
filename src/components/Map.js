import React from 'react';
import './Map.css';

const Map = () => {
  return (
    <section id="map" className="map-section">
      <h2>Our Location</h2>
      <div className="map-container">
        <iframe
          title="TrueBuild Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3528.8602649967843!2d86.94128507504486!3d21.485995580280218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1cf4fd06a253b9%3A0x94bb66ad3ab9acf5!2sAkatpur%20Rd%2C%20Mallikashpur%2C%20Gopalgoan%2C%20Odisha%20756002!5e1!3m2!1sen!2sin!4v1725204097825!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Map;
