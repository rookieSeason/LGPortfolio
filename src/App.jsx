import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';


import React from "react";

function App() {

  return (
    <div className='font-google'>
      <Nav />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />      
    </div>
  );
};

export default App
