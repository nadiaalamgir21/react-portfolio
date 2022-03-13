import React from "react";

function Resume() {
  return (
    <>
      <div className="column" style={{margin: '0 auto'}}>
        <p className="content is-medium">Resume</p>
        <hr />

        <a
          className="button is-info"
          href={process.env.PUBLIC_URL + "/nadia-alamgir-resume.pdf"}
          target="_blank" rel="noreferrer"
        >
          <span className="icon">
            <i className="fas fa-download"></i>
          </span>
          <span>Download My Resume</span>
        </a>
      </div>
      <div className="column">

      </div>
    </>
  );
}

export default Resume;
