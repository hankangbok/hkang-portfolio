import React from 'react';
// TODO GOAL: Add logic that wipes everything from the #root div
// And populates with the contents of the ResumePage Component
export class ResumePage extends React.Component {
  render() {
    return(
      <div className="container">
        <h1 className='section-title'>Resume</h1>
        <h2>My resume is available <a href="https://drive.google.com/file/d/1MS2WASHiX0ZkqGm_-21dhjG7xRGw_r1z/view?usp=sharing">on Google Drive</a></h2>
        <h2>Embed the pdf into the page when the user selects</h2> 
      </div>
    );
  }
}