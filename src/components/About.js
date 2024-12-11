import React from 'react';
import about_me from './images/about_me.jpg'; 

function About() {
  return (
    <section className="about-section">
      <div className="image-container">
        <img 
          src={about_me} 
          alt="About Me" 
          className="about-image" 
        />
      </div>
      <div className="content-container">
        <h2>About Me</h2>
        <p>Hi there!</p>
        <p>
          I’m a dynamic and results-driven <strong>Software Engineer</strong> with 1.8 years of 
          experience specializing in <strong>React.js</strong> for crafting seamless, user-friendly 
          interfaces and <strong>Python</strong> for developing robust backend solutions. Currently, 
          I work as a <strong>Technical Team Leader</strong> at <em>DevAngles Software Private Limited</em>, 
          Pune, thriving in a fast-paced startup environment while constantly enhancing my skills.
        </p>
        <p>
          My expertise lies in <strong>problem-solving, scaling systems</strong>, and aligning technical 
          strategies with project requirements to deliver impactful solutions. I excel at collaborating 
          with teams, defining clear roadmaps, and ensuring project milestones are met efficiently.
        </p>
        <p>
          In my current role, I leverage an array of <strong>Google Cloud services</strong> including 
          <strong>BigQuery</strong>, <strong>Cloud Storage Buckets</strong>, and <strong>Datastore</strong> 
          to optimize data management and ensure high-performance cloud applications. I’m particularly 
          skilled at using <strong>Datastore</strong> for creating scalable, responsive applications. 
          My experience also includes working with advanced tools like <strong>Gemini</strong> and 
          <strong>Pub/Sub</strong>, enhancing data workflows within the Google Cloud ecosystem.
        </p>
        <p>
          I am passionate about staying ahead of emerging technologies, continuously learning, and 
          applying innovative solutions to drive project success. My goal is to deliver excellence by 
          blending cutting-edge tools with a keen understanding of client needs and market trends.
        </p>
      </div>
    </section>
  );
}


export default About;
