import React from 'react';
import './Services.css';

const services = [
  { name: 'Fast Operations', icon: 'construction-renovation-fast-logo-icon-illustration-brand-identity_7109-796.avif', description: 'Efficient services to meet your deadlines.' },
  { name: 'Renovation', icon: '886114.png', description: 'High-quality renovations for modern living.' },
  { name: 'Consultation', icon: 'colorful-vector-logo-dummy-text-600nw-1648539733.webp', description: 'Professional consultations for your projects.' },
  { name: 'Architecture', icon: 'architect-house-construction-icon-outline-style-vector.jpg', description: 'State-of-the-art architectural designs.' },
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <h2>Our Services</h2>
      <div className="services-container">
        {services.map(service => (
          <div className="service-card" key={service.name}>
            <img src={`${process.env.PUBLIC_URL}/icons/${service.icon}`} alt={service.name} />
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
