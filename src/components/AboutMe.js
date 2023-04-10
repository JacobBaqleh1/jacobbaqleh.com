import React from "react";

function AboutMe() {
  console.log("hi");
  return (
    <div className="bg-black  text-white py-10" id="aboutme">
      <div className="container overflow-hidden mx-auto">
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white text-center">
          {" "}
          About Me
        </h1>
        <p className="float-left w-3/4 pr-8 text-xl">
          Hello, my name is Jacob Baqleh and I'm passionate about creating
          projects on the web. I'm a website developer, with 3 years of
          experience in mostly frontend technologies. My journey as a web
          creator started in high school, where i learned that there is are
          careers creating cool things on the internet. Since then, I've been
          developing and designing various projects, from simple web pages to
          complex web applications. My goal is to create user-friendly and
          visually appealing websites that provide a great user experience. If
          you're interested in working with me, feel free to contact me through
          my form. I'm always open to new opportunities and collaborations.
          Thank you for visiting my portfolio and I hope you enjoy exploring my
          projects!
        </p>
        <img
          className="w-1/4 float-right"
          src="https://plus.unsplash.com/premium_photo-1676550886096-bfc64aae1e2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </div>
    </div>
  );
}
export default AboutMe;
