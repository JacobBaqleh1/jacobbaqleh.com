import React from "react";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";
import "./index.css";

const App = () => {
  return (
    <main className="text-gray-400 bg-gradient-to-l from-gray-200 via-gray-400 to-gray-600">
      <Navbar />

      <About />
      <Projects />

      <Skills />
      <AboutMe />
      <Contact />
    </main>
  );
};

export default App;
