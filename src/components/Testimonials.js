import React from 'react';
import './Testimonials.css';

const testimonials = [
  { name: 'XYZ', quote: 'TrueBuild made my dream home come true!', image: 'WhatsApp Image 2024-08-22 at 18.18.56_070f77d8.jpg' },
  { name: 'XYZ', quote: 'The team was highly professional and the result was beyond expectations.', image: 'WhatsApp Image 2024-08-22 at 18.18.56_070f77d8.jpg' },
  { name: 'XYZ', quote: 'Top-notch service from start to finish!', image: 'WhatsApp Image 2024-08-22 at 18.18.56_070f77d8.jpg' },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <h2>Testimonials</h2>
      <div className="testimonials-container">
        {testimonials.map(testimonial => (
          <div className="testimonial-card" key={testimonial.name}>
            <img src={`/images/${testimonial.image}`} alt={testimonial.name} />
            <blockquote>"{testimonial.quote}"</blockquote>
            <p>- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
