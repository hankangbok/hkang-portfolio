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
  render() {
    return (
      <div className="project-desc">
        <h1> Project Description here</h1>
        <h2>Technologies used</h2>
        <a> view source</a>
        <a> view deployment</a>
      </div>
    );
  }
}
// // This is the container for the 'card' that will display each project in my list
class ProjectCard extends React.Component {
  render() {
    return (
      <div className="project-card">
        <img src="#" alt="Project screenshot will go here" />
        <ProjectDescription />
      </div>
    );
  }
}

class Base extends React.Component {
  render() {
    return (
      <div id="base">
        <h1 id="the-css-test">Checking that CSS works</h1>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    );
  }
}

class PageContainer extends React.Component {
  render() {
    return (
      <div>
        <Base />
        <AboutPage />
        <ResumePage />

      </div>
    );

  }
}
ReactDOM.render(<PageContainer />, document.getElementById('root'));
// ReactDOM.render(<Base />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
