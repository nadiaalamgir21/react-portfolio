import React from "react";

export default function About() {
  return (
    <div>
      <p className="content is-medium">Para Legal and Budding Full Stack Developer</p>
      <hr />
      <img className="my-pic" src={process.env.PUBLIC_URL + '/img/nadia.jpeg'} alt="Nadia Alamgir"/>
      <p className="content is-italic mt-4">
        Hello! My name is Nadia Alamgir, and I am a full stack Developer.
      </p>
      <p className="content">
        I have always been interested in how technology has improved our daily duties, the interest and curiosity has finally taken over me hence I had to change my career focus to Web Development.
      </p>
    </div>
  );
}
