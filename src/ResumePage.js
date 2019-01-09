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
          <a href="https://drive.google.com/file/d/1La7wczOMwkEPR4ltYewfJi3zpHDvaZf0/view?usp=sharing">
            on Google Drive.
          </a>
        </h3>
        <embed src="HannahKang_2019Resume.pdf" type="application/pdf" width='100%' height='600px'/>
      </div>
    );
  }
}
