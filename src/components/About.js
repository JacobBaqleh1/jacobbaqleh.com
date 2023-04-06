import React, { useContext } from "react";
import linkedIn from "../images/linkedin.png";
import github from "../images/github.png";
import twitter from "../images/twitter.png";

export default function About() {
  return (
    <div>
      <section id="about">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Hi, I'm
              <br className="hidden lg:inline-block " />
              <span className="text-5xl"> Jacob Baqleh.</span>
              <br className="hidden lg:inline-block " />
              <span className="text-xl">I love to build amazing apps.</span>
            </h1>
            <p className="mb-8 leading-relaxed">
              As a frontend developer, I strive to create intuitive and visually
              appealing web applications that solve real-world problems
            </p>
            <div className="flex justify-center">
              <a
                href="#contact"
                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
              >
                See My Past Work
              </a>
            </div>
            {/*Soical Links */}
            <div>
              <ul className=" justify between mt-5 ml-[70px] flex flex-row ">
                <li className="w-8 mr-4 ">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/jacob-baqleh-8570a6211/"
                  >
                    <img src={linkedIn}></img>
                  </a>
                </li>
                <li className="w-8 mr-4 ">
                  <a target="_blank" href="https://www.github.com/JacobBaqleh1">
                    <img src={github}></img>
                  </a>
                </li>
                <li className="w-8 mr-4 ">
                  <a target="_blank" href="https://www.twitter.com/JacobBaqleh">
                    <img src={twitter}></img>
                  </a>
                </li>
                <li></li>
              </ul>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://images.unsplash.com/photo-1496016943515-7d33598c11e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhhY2tlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
