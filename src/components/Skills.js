import React from 'react';
import './skills.css';

// Importing logos
import pythonLogo from './images/python.png';
import reactLogo from './images/react.png';
import htmlLogo from './images/html.png';
import cssLogo from './images/css.png';
import jsLogo from './images/javascript.png';
import bootstrapLogo from './images/bootstrap.png';
import firebaseLogo from './images/firebase.png';
import postmanLogo from './images/postman.png';
import githubLogo from './images/github.png';


function Skills() {
  const skills = [
    { name: 'HTML', logo: htmlLogo },
    { name: 'CSS', logo: cssLogo },
    { name: 'JavaScript', logo: jsLogo },
    { name: 'Bootstrap', logo: bootstrapLogo },
    { name: 'React.js', logo: reactLogo },
    { name: 'Firebase', logo: firebaseLogo },
    { name: 'Python (Flask)', logo: pythonLogo },
    { name: 'Postman API', logo: postmanLogo },
    { name: 'GitHub', logo: githubLogo },

  ];

  return (
    <section className="skills-section">
      <h2 className="skills-heading">Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" />
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
