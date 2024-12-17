import React from 'react';
import './projects.css';
import smart_parking from './images/smart_parking.jpg';
import sign_language from './images/sign_language.jpg';
import indoor_navigation from './images/indoor_navigation.jpg';

function Projects() {
  const projects = [
    {
      title: "Smart Parking System",
      description: "A reservation-based parking solution for citizens. Users can book parking spots in advance, ensuring availability and convenience. This system integrates real-time updates and a user-friendly interface.",
      image: smart_parking,
    },
    {
      title: "Sign Language Recognition",
      description: "A web application that translates sign language to text. It uses computer vision and machine learning to recognize gestures in real-time, promoting accessibility for the hearing impaired.",
      image: sign_language,
    },
    {
      title: "Indoor Navigation",
      description: "An augmented reality-based navigation system for buildings, helping users find their way within large indoor spaces such as malls, airports, or universities.",
      image: indoor_navigation,
    },
  ];

  return (
    <section className="projects">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
