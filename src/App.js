import React from 'react'
import Navbar from './components/Navbar'
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import './index.css'

const App = () => {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
     
        <Navbar />
<About />
<Projects />
<Skills />
<Contact />
        </main>
  )
}

export default App