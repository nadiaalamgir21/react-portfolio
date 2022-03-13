import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 0,
    title: "Budget Tracker",
    languages: "html, css, nodejs, express, mongodb",
    packages: "",
    image: "https://raw.githubusercontent.com/nadiaalamgir21/pwa-budget-tracker/master/assets/s1.PNG",
    description: "Is a progressive Web Application (PWA) that enables the user to add expenses and deposits to their budget even without an online connection. When entering transactions offline, data syncs the total when connected back online.",
    repo: "https://github.com/nadiaalamgir21/pwa-budget-tracker",
    live: "https://nadia-budget-tracker.herokuapp.com",
  },
  {
    id: 1,
    title: "MVC Tech Blog",
    languages: "html, css, nodejs, express, mysql",
    packages: "",
    image: "https://raw.githubusercontent.com/nadiaalamgir21/mvc-tech-blog/main/images/s1.PNG",
    description: "MVC Tech Blog is a full fledged live blog website which lets you post the articles in tech sector, it is equipped with capabilties of signin, signup, session management, commenting on the posts, and etc.",
    repo: "https://github.com/nadiaalamgir21/mvc-tech-blog",
    live: "https://nadia-tech-blog.herokuapp.com/",
  },
  {
    id: 2,
    title: "Note-taker",
    languages: "html, css, nodejs, express, localstorage",
    packages: "",
    image: "https://raw.githubusercontent.com/nadiaalamgir21/note-taker/main/public/assets/images/s1.PNG",
    description: "Is a note taking app which is meticulously designed for the benefit of users who would want to log their important data in the app to store for further use.",
    repo: "https://github.com/nadiaalamgir21/note-taker",
    live: "https://nadia-note-taker.herokuapp.com/",
  },
  {
    id: 3,
    title: "Work Day Scheduler",
    languages: "html, css, js, bootstrap, localstorage",
    packages: "",
    image: "https://raw.githubusercontent.com/nadiaalamgir21/work-day-scheduler/main/assests/images/Deskstop%20screenshot%201.PNG",
    description: "This word day scheduler is designed to note any appoinments or work to do and save it for future reference. I used bootstrap and Jquery in addition to help optimize my code and learned a lot in the process as well. I have also made this project responsive.",
    repo: "https://github.com/nadiaalamgir21/work-day-scheduler",
    live: "https://nadiaalamgir21.github.io/work-day-scheduler/",
  }
];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">Portfolio</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;
