import React from 'react';
import './App.css';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Awards from './components/Awards';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Nilam Karande - Software Engineer</h1>
        <p>Passionate software engineer skilled in frontend, backend, and ML integration.</p>
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
