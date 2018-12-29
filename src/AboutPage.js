import React from "react";

export class AboutPage extends React.Component {
  render() {
    return (
      
      <div className="subpages-container">
        <div className="subpages-container-border-gradient"></div>
        <h1 className="section-title">Who Am I?</h1>   
        <h2>What do I do?</h2>
        <div className="personal-summary">  
          <ul>
            <li>
              I am currentlly a Planetarium Presenter II at the California Academy
              of Sciences in San Francisco
            </li>
            <li>
              Talk to people about stars, earthquakes, exoplanets, black holes and
              more
            </li>
            <li>
              Build HTML projects to build science demonstrations and helpful
              tools for the Morrison Planetarium
            </li>
            <li>
              Write documentation for equipment (telescopes, graphene evaporators,
              microscopes) I use and code I write
            </li>
            <li>Dance and keep learning in my spare time</li>
          </ul>
        </div>
        <h2>What Do I Know?</h2>
          <div className = "skills-list">
          <ul>
            <li>Languages: Javascript, Python, HTML, CSS</li>
            <li>How to implement APIs such as the Weather API, GIPHY API</li>
            <li>How to use jQuery plugins such as DataTables, MarkJS</li>
            <li>
              How to use version control in Git and test-deploy to Github-Pages
            </li>
            <li>
              How to use Python to harvest data from local directories and produce
              a useful HTML database
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
