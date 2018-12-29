import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./main.css";
// import App from './App';
import * as serviceWorker from "./serviceWorker";
import { AboutPage } from "./AboutPage";
import { ContactPage } from "./ContactPage";
import { ResumePage } from "./ResumePage";

// TODO: Find a React way to wipe the page and render components when the header
// Nav buttons are clicked
// This is a weird, non-react frankenstein solution?
function wipeSlate(objectTarget) {
  var rootDiv = document.getElementById("contents");
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  console.log("THIS DID WORK?");
  const newPage = React.createElement(objectTarget);
  ReactDOM.render(newPage, document.getElementById("contents"));
}

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
    let screenshot = this.state.screenshot;
    let name = this.state.name;
    let description = this.state.description;
    let techUsed = this.state.techUsed;
    let source = this.state.source || undefined;
    let deployment = this.state.deployment || undefined;
    let screenshotLink;
    let sourceButton;
    let deploymentButton;
    if (source) {
      sourceButton = <a href={source}>source</a>;
      deploymentButton = <a href={deployment}>view deployment</a>;
    } else {
      sourceButton = (
        <p>
          This was a proprietary software project. I'm sorry, I can't upload the
          code.
        </p>
      );
      deploymentButton = <p />;
    }
    if (screenshot) {
      screenshotLink = (
        <img src={screenshot} alt="Project screenshot will go here" />
      );
    } else {
      screenshotLink = <p />;
    }

    return (
      <div className="project-desc">
        {screenshotLink}
        <h1>{name}</h1>
        <p>{description}</p>
        <p>
          <b>Technologies used: </b>
          <br /> {techUsed}{" "}
        </p>
        <br />
        {sourceButton}
        {deploymentButton}
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
        {/* <img src="#" alt="Project screenshot will go here" /> */}
        <ProjectDescription name={this.props.name} />
      </div>
    );
  }
}

class Base extends React.Component {
  render() {
    return (
      <div id="base">
        <div className="subpages-container-border-gradient" />
        <h1 className="section-title">Projects</h1>
        <ProjectCard name="univiewdatabase" />
        <ProjectCard name="library" />
        <ProjectCard name="weatherapp" />
        <ProjectCard name="planckdisplay" />
        <ProjectCard name="myportfolio" />
        <ProjectCard name="formvalidation" />
        <ProjectCard name="restaurantpage" />
      </div>
    );
  }
}

class PageContainer extends React.Component {
  render() {
    return (
      <div id="contents">
        <AboutPage />
        <Base />
        <ResumePage />
        <ContactPage />
      </div>
    );
  }
}
// Eventually, make urls standardized so that you dont need to look up a repos URL
//Project/repo names should be standardized more
let myProjects = {
  univiewdatabase: {
    screenshot: "UVDBScreenshot.png",
    name: "Uniview DataBase",
    description:
      "Uniview Database is a searchable catalog of digital assets used by the Morrison Planetarium. It scans a users local installation of Uniview 2.0 software using Python, and produces an HTML webpage. Uniview Database expedites and improves planetarium show development. It can be easily implemented by other Uniview 2.0 (Planetarium software) users. ",
    techUsed:
      "ReactJS (JavaScript), DataTables (jQuery Plugin), mark.js (JavaScript)  |  Beautiful Soup (Python HTML Parser), unittest (Python) | FlexBox(CSS)",
    source: "https://github.com/kyouyatamax/UVDatabase",
    deployment: "https://kyouyatamax.github.io/UVDatabase/"
  },
  library: {
    screenshot: "libraryscreenshot.png",
    name: "Personal Library",
    description:
      "I tried building this library in React as well as in pure Javascript. In both cases, users can see a library of books with their titles, author names, # of pages, etc. Users can add new books using the Javascript form, check off books as they’re read, and remove books from their library. ",
    techUsed: "ReactJS (JavaScript), FlexBox(CSS), Javascript ES6",
    source: "https://github.com/kyouyatamax/bookLibraryReact",
    deployment: "https://kyouyatamax.github.io/bookLibraryReact/"
  },
  formvalidation: {
    name: "Form Validation Practice",
    description: "",
    techUsed: "HTML, CSS, Javascript",
    source: "https://github.com/kyouyatamax/formValidationPractice",
    deployment: "https://kyouyatamax.github.io/formValidationPractice/"
  },
  weatherapp: {
    name: "Weather in a Gif-y",
    description:
      "This webpage uses the Weather API to find out the weather in a users city of choice. In addition, whimsical animated GIFs matching the weather result are displayed using the GIPHY API. Whether you subscribe to the ‘Jiff’ or ‘Gif’ pronunciation, this page can help you check the weather in a GIF. ",
    techUsed:
      "Weather API (JavaScript), GIPHY API (JavaScript), ReactJS (JavaScript),  HTML, CSS, Javascript Highlight API, FlexBox(CSS), DataTables(JQuery Plugin)",
    source: "https://github.com/kyouyatamax/weather-app-hkang",
    deployment: "https://kyouyatamax.github.io/weather-app-hkang/"
  },
  myportfolio: {
    screenshot: "portfolioscreenshot.png",
    name: "My Portfolio Webpage",
    description:
      "You're looking at it! My personal website uses React, Flexbox, and the source code is at the link below.",
    techUsed: "ReactJS (JavaScript), FlexBox(CSS),  HTML, CSS",
    source: "https://github.com/kyouyatamax/hkang-portfolio",
    deployment: "https://kyouyatamax.github.io/hkang-portfolio/"
  },
  restaurantpage: {
    screenshot: "maejooscreenshot.png",
    name: "Restaurant Page",
    description: "",
    techUsed: "HTML, CSS, JavaScript",
    source: "https://github.com/kyouyatamax/restaurantpageJS",
    deployment: "https://kyouyatamax.github.io/restaurantpageJS/"
  },
  planckdisplay: {
    name: "Planck Touch-Screen Exhibit",
    description:
      "The Planck Display was a touch-screen exhibit at the Santa Barbara Museum of Natural History (SBMNH). I built in updates (HTML, CSS, JS) to reflect new research data, improve content clarity and accessibility, and add multimedia assets (video, images, slideshows).",
    techUsed: "KRPano (Panoramic Image Viewer for HTML), Python, HTML, CSS"
  }
};
ReactDOM.render(<PageContainer />, document.getElementById("root"));
// ReactDOM.render(<Base />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
