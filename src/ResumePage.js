import React from "react";

export class ResumePage extends React.Component {
  render() {
    return (
      <div id="resumepage" className="subpages-container">
        <div className="subpages-container-border-gradient" />
        <h1 className="section-title">Do I have a PDF Resume?</h1>
        <h3>
          Yes!
          <br />
          My resume is available{" "}
          <a href="https://drive.google.com/file/d/1MS2WASHiX0ZkqGm_-21dhjG7xRGw_r1z/view?usp=sharing">
            on Google Drive.
          </a>
        </h3>
        <h3>Embed the pdf into the page when the user selects</h3>
      </div>
    );
  }
}
