import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './main.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));



// Each projects description should include:
// Description, technologies used, a deployment link button, a source link button
class ProjectDescription extends React.Component {
  render() {
    return (
      <div class="project-desc">
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
      <div class="project-card">
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
        <h1>This is a test</h1>
        <h1 id="the-css-test">Checking that CSS works</h1>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    );
  }
}

ReactDOM.render(<Base />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
