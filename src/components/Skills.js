import React from 'react';
import './Skills.css';

const skills = [
  { name: 'Project Management', level: 'Expert' },
  { name: 'Design & Architecture', level: 'Advanced' },
  { name: 'Renovation', level: 'Advanced' },
  { name: 'Consultation', level: 'Expert' },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map(skill => (
          <div className="skill-card" key={skill.name}>
            <h3>{skill.name}</h3>
            <p>{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
