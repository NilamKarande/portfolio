import React from 'react';
import './App.css';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Awards from './components/Awards';
import Contact from './components/Contact';
import { useEffect } from 'react';

function App() {


  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Get all the bubbles
      const bubbles = document.querySelectorAll('.bubble');
      
      // For each bubble, update its position and animation based on the mouse position
      bubbles.forEach((bubble, index) => {
        // Set random animation delay for each bubble to add variety
        const delay = (index + 1) * 0.1;

        // Calculate distance from the mouse pointer to the bubble
        const bubbleRect = bubble.getBoundingClientRect();
        const bubbleCenterX = bubbleRect.left + bubbleRect.width / 2;
        const bubbleCenterY = bubbleRect.top + bubbleRect.height / 2;
        
        const deltaX = mouseX - bubbleCenterX;
        const deltaY = mouseY - bubbleCenterY;
        
        // Calculate the distance and angle
        const angle = Math.atan2(deltaY, deltaX);
        const distance = Math.min(150, Math.sqrt(deltaX * deltaX + deltaY * deltaY)); // Limit the distance

        // Move the bubble toward the mouse pointer
        bubble.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`;

        // Add some animation delay for smooth transitions
        bubble.style.transition = `transform 0.3s ease-out ${delay}s`;
      });
    };

    // Add event listener for mouse move
    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup event listener when component unmounts
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);






  return (
    <div className="App">
      <header className="App-header">


         {/* Navbar Section */}
         <nav className="navbar">
          <div className="navbar-logo">NK</div>
          <ul className="navbar-links">
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact-us">Contact Us</a></li>
          </ul>
        </nav>


         {/* Bubble Animation */}
         <div className="bubbles">
          <div className="bubble" style={{ '--i': 1 }}></div>
          <div className="bubble" style={{ '--i': 2 }}></div>
          <div className="bubble" style={{ '--i': 3 }}></div>
          <div className="bubble" style={{ '--i': 4 }}></div>
          <div className="bubble" style={{ '--i': 5 }}></div>
          <div className="bubble" style={{ '--i': 6 }}></div>
        </div>


        {/* Hero Section */}
        <div className="hero-section">
          <h1>Hello, I'm Nilam Karande.</h1>
          <h2>Software Engineer</h2>
          <p>Passionate software engineer with 2 years of experience in frontend and backend.</p>
        </div>
      </header>
      <main>
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Awards />
        <Contact />
      </main>
    </div>
  );
}

export default App;
