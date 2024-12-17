import React from 'react';
import './projects.css'; // Make sure to import the CSS file
import smart_parking from './images/smart_parking.jpg'; 
import sign_language from './images/sign_language.jpg';
import indoor_navigation from './images/indoor_navigation.jpg'

function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-container">
        <div className="project">
          <img src={smart_parking} alt="Smart Parking System" />
          <h3>Smart Parking System</h3>
          <p>A reservation-based parking solution for citizens.</p>
        </div>
        <div className="project">
          <img src={sign_language} alt="Sign Language Recognition" />
          <h3>Sign Language Recognition</h3>
          <p>Web application that translates sign language to text.</p>
        </div>
        <div className="project">
          <img src={indoor_navigation} alt="Indoor Navigation" />
          <h3>Indoor Navigation</h3>
          <p>AR-based navigation system for buildings.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;