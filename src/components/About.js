import React from "react";

export default function About() {
  return (
    <div>
      <p className="content is-medium">Para Legal and Budding Full Stack Developer</p>
      <hr />
      <img className="my-pic" src={process.env.PUBLIC_URL + '/img/nadia.jpeg'} alt="Nadia Alamgir"/>
      <p className="content is-italic mt-4">
        I am Nadia Alamagir, a paral legal the full stack.
      </p>
      <p className="content">
        Write about yourself
      </p>
    </div>
  );
}
