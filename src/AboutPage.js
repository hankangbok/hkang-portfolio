import React from "react";

export class AboutPage extends React.Component {
  render() {
    return (
      <div id="aboutpage" className="subpages-container">
        <div className="subpages-container-border-gradient" />
        <h1 className="section-title">About Me</h1>
        <h1>What do I do?</h1>
        <div className="personal-summary">
          <ul>
            <li>
              Currently work as a Planetarium Presenter (Level II)
            </li>
            <li>
              Build HTML science demonstrations and digital
              tools for Morrison Planetarium
            </li>
            <li>
              Talk to people about stars, earthquakes, exoplanets, black holes, cool stuff
            </li>
            
            <li>
              Write technical documentation for telescopes, lab equipment, and my code
            </li>
            <li>Dance and keep learning in my spare time</li>
          </ul>
        </div>
        <br />
        <h1>What Do I Know?</h1>
        <div className="skills-list">
          <ul>
            <li>Languages: Javascript, Python, HTML, CSS</li>
            <li>How to implement APIs such as the Weather API, GIPHY API</li>
            <li>How to use jQuery plugins such as DataTables, MarkJS</li>
            <li>
              How to use version control in Git and test-deploy to Github-Pages
            </li>
            <li>
              How to use Python to harvest data from local directories and
              produce a useful HTML database
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
