import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './main.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import { AboutPage } from './AboutPage';
import { ResumePage } from './ResumePage';

// Each projects description should include:
// Description, technologies used, a deployment link button, a source link button
class ProjectDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = myProjects[this.props.name];
  }
  getName() {
    return this.state.name;
  }
  render() {
    return (
      <div className="project-desc">
        <h1>{this.getName()}</h1>
        <h1> Project Description here</h1>
        <h2>Technologies used:{this.state.techUsed} </h2>
        <a> view source</a>
        <a> view deployment</a>
      </div>
    );
  }
}
// // This is the container for the 'card' that will display each project in my list
class ProjectCard extends React.Component {
  render() {
    // let name = this.props.name;
    // let reference=myProjects;
    // console.log(reference.name+"CHECK");
    return (
      <div className="project-card">
        <img src="#" alt="Project screenshot will go here" />
        <ProjectDescription name={this.props.name} />
      </div>
    );
  }
}

class Base extends React.Component {
  
  render() {
    return (
      <div id="base">
        <h1 id='section-title'>Projects</h1>
        <h2>Here are some projects I have worked on.</h2>
        <ProjectCard name="univiewdatabase"/>
        <ProjectCard name="library"/>
        <ProjectCard name="weatherapp"/>
        <ProjectCard name="formvalidation" />
      </div>
    );
  }
}

class PageContainer extends React.Component {
  render() {
    return (
      <div>
        <Base/>
        <AboutPage />
        <ResumePage />

      </div>
    );

  }
}

let myProjects = {
  "univiewdatabase":{name:"Uniview DataBase", 
    techUsed:"HTML, CSS, Javascript Highlight API, FlexBox(CSS), DataTables(JQuery Plugin)", 
    source:"", 
    deployment:""},
  "library":{name:"Personal Library", 
    techUsed:"HTML, CSS, Javascript Highlight API, FlexBox(CSS), DataTables(JQuery Plugin)", 
    source:"", 
    deployment:""},  
  "formvalidation":{name:"Form Validation Practice", 
    techUsed:"HTML, CSS, Javascript Highlight API, FlexBox(CSS), DataTables(JQuery Plugin)", 
    source:"", 
    deployment:""},
  "weatherapp":{name:"Weather App (API)", 
    techUsed:"HTML, CSS, Javascript Highlight API, FlexBox(CSS), DataTables(JQuery Plugin)", 
    source:"", 
    deployment:""}
};
ReactDOM.render(<PageContainer />, document.getElementById('root'));
// ReactDOM.render(<Base />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

