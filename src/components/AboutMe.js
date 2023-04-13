import React from "react";
import myselfie from "../images/myselfie.jpg";
function AboutMe() {
  console.log("hi");
  return (
    <div className="bg-black  text-white py-10" id="aboutme">
      <div className="container overflow-hidden mx-auto">
        <h1 className="sm:text-4xl  text-3xl font-medium title-font my-4 text-white text-center">
          {" "}
          About Me
        </h1>
        <p className="float-left w-3/4 pr-8 text-xl text-gray-100 mb-8 leading-relaxed">
          Hello, my name is Jacob and I am a self-taught website developer. I
          have worked in sales for the past 4 years and now I am making the
          switch to web development. Over the past 2 years, I have been focusing
          on frontend development and building my skills in HTML, CSS, and
          JavaScript. Recently, I have expanded my knowledge to full-stack
          development and I am excited to learn more about back-end technologies
          such as Node.js and databases. If you are interested in working with
          me or simply want to connect, feel free to send me a message. I am
          always open to new opportunities and I look forward to connecting with
          you!
        </p>
        <img className="w-1/4 float-right rounded-full" src={myselfie} alt="" />
      </div>
    </div>
  );
}
export default AboutMe;
