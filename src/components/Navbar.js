import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <header className="fixed top-0 bg-gray-800 z-10 w-full">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          href="/"
          className="ml-3 text-xl title-font font-medium text-white mb-4 md:mb-0"
        >
          Jacob Baqleh
        </a>

        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#aboutme" className="mr-5 hover:text-white">
            About Me
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          Contact Me
        </a>
      </div>
    </header>
  );
}
