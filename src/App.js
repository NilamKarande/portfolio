// import React from 'react';
// import './App.css';
// import About from './components/About';
// import Skills from './components/Skills';
// // import Education from './components/Education';
// // import Experience from './components/Experience';
// import Projects from './components/Projects';
// import Awards from './components/Awards';
// import Contact from './components/Contact';
// import Footer from './components/footer';

// function App() {

//   return (
//     <div className="App">
//       <header className="App-header">


//          {/* Navbar Section */}
//          <nav className="navbar">
//           <div className="navbar-logo">NK</div>
//           <ul className="navbar-links">
//             <li><a href="#projects">SKILLS</a></li>
//             <li><a href="#contact-us">AWARDS</a></li>
//             <li><a href="#projects">PROJECTS</a></li>
//             <li><a href="#contact-us">CONTACT</a></li>
//           </ul>
//         </nav>


//          {/* Bubble Animation */}
//          <div className="bubbles">
//           <div className="bubble" style={{ '--i': 1 }}></div>
//           <div className="bubble" style={{ '--i': 2 }}></div>
//           <div className="bubble" style={{ '--i': 3 }}></div>
//           <div className="bubble" style={{ '--i': 4 }}></div>
//           <div className="bubble" style={{ '--i': 5 }}></div>
//           <div className="bubble" style={{ '--i': 6 }}></div>
//         </div>


//         {/* Hero Section */}
//         <div className="hero-section">
//           <h1>Hello, I'm Nilam Karande.</h1>
//           <h2>Software Engineer</h2>
//           <p>Passionate software engineer with 2 years of experience in frontend and backend.</p>
//         </div>
//       </header>
//       <main>
//       <div className='about-section'>
//         <About />
//         </div>
//         <Skills />
//         <Awards />
//         {/* <Education />
//         <Experience /> */}
//         <Projects />
     
//         <Contact />
//         <Footer />
//       </main>
//     </div>
//   );
// }

// export default App;





import React from 'react';
import './App.css';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Navbar Section */}
        <nav className="navbar">
          <div className="navbar-logo">NK</div>
          <ul className="navbar-links">
            <li><a href="#skills">SKILLS</a></li>
            <li><a href="#awards">AWARDS</a></li>
            <li><a href="#projects">PROJECTS</a></li>
            <li><a href="#contact-us">CONTACT</a></li>
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
        <div id="about" className="about-section">
          <About />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="awards">
          <Awards />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact-us">
          <Contact />
        </div>
        <Footer id="footer"/>
      </main>
    </div>
  );
}

export default App;

