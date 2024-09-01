import React from 'react';
import './Work.css';

const workProjects = [
  { title: 'Modern Office Space', image: 'modern-office-building-icon-simple-style-vector.jpg', description: 'Designed and constructed a modern office space.' },
  { title: 'Residential Complex', image: 'images.png', description: 'A state-of-the-art residential complex with modern amenities.' },
  { title: 'Shopping Mall', image: '7083379.png', description: 'Renovated a large shopping mall with modern infrastructure.' },
];

const Work = () => {
  return (
    <section id="work" className="work-section">
      <h2>Our Work</h2>
      <div className="work-container">
        {workProjects.map(project => (
          <div className="work-card" key={project.title}>
            <img src={`/images/${project.image}`} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
