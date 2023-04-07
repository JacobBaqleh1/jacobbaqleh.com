import React, { useState } from "react";
import { projects } from "../data.js";

export default function Projects() {
  return (
    <div>
      <section id="projects" className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
          <div className="flex flex-col w-full mb-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mx-auto inline-block  mb-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
              />
            </svg>

            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
              Apps I've Built
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            {projects.map((project) => (
              <div className="md:w-1/3 p-4">
                <a
                  href={project.link}
                  key={project.image}
                  target="_blank"
                  className="block overflow-hidden rounded-lg shadow-lg"
                >
                  <div className="relative">
                    <img
                      alt="gallery"
                      className="object-cover w-full h-48"
                      src={project.image}
                    />
                    <div className="px-6 py-4  ">
                      <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                        {project.subtitle}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-white mb-3">
                        {project.title}
                      </h1>
                      <p className="leading-relaxed">{project.description}</p>
                      <div className="flex items-center justify-between mt-4">
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white bg-gray-900 py-2 px-4 rounded hover:bg-gray-800"
                        >
                          GitHub
                        </a>
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white bg-blue-500 py-2 px-4 rounded hover:bg-blue-600"
                        >
                          Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
