import barPhoto from "./images/bar-site.png";
import htmlSvg from "./images/html-5.png";
import cssSvg from "./images/css-3.png";
import jsSvg from "./images/js.png";
import reactSvg from "./images/physics.png";
import githubSvg from "./images/github.png";
import tailwindSvg from "./images/tailwindcss-icon.svg";
import project2 from "./images/project2.png";
import comingSoon from "./images/work-in-progress.png";

export const projects = [
  {
    title: "Sports Bar Mobile Website",
    subtitle: "HTML and Bootstrap ",
    description:
      "Freelanced a mobile landing page for a small business using HTML and Bootstrap.",
    image: barPhoto,
    link: "https://thevalleyinnbar.com",
    demoLink: "https://thevalleyinnbar.com",
    githubLink: "https://github.com/JacobBaqleh1/ValleyInnBar",
  },
  {
    demoLink: "https://react-1u9fdw.stackblitz.io",
    link: "https://react-1u9fdw.stackblitz.io",
    image: project2,
    title: "Inspirational Quotes Generator",
    subtitle: "Javascript and Css",
    description:
      "Fetched quotes from a database. Designed with CSS and programmed with Javascript ",
    githubLink: "https://github.com/JacobBaqleh1/React-Quotes-Project",
  },
  {
    demoLink: "",
    link: "",
    image: comingSoon,
    title: "M",
    subtitle: "Javascript and Css",
    description:
      "BUilt rem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius ",
    githubLink: "https://github.com/JacobBaqleh1/React-Quotes-Project",
  },
];

export const skills = [
  { name: "HTML ", svg: htmlSvg },
  { name: "CSS", svg: cssSvg },
  { name: "Tailwind", svg: tailwindSvg },
  { name: "Javascript", svg: jsSvg },
  { name: "React", svg: reactSvg },
  { name: "Git/ Github", svg: githubSvg },
];
