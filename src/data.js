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
    subtitle: "React and TailwindCSS ",
    description:
      "Website I made for small business in my town. Styled and coded for a simplistic and easy experience for people",
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
    title: "E-commerce Webiste",
    subtitle: "Remix and TailwindCSS",
    description:
      "This multi page web app built with Remix(a fullstack framework) has amazing app runtime performance. Styles using Tailwind.   ",
    githubLink: "",
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
