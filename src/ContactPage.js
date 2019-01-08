import React from "react";

export class ContactPage extends React.Component {
  render() {
    return (
      <div id="contactpage" className="subpages-container">
        <div className="subpages-container-border-gradient" />
        <h1 className="section-title">Want to Get in Contact?</h1>
        <div />
        <section id="contactinfo">
          <h3>
            Email:{" "}
            <a href="mailto: hankang.bok@gmail.com">hankang.bok@gmail.com</a>
          </h3>
          <h3>
            Github:{" "}
            <a href="https://github.com/hankangbok">
              github.com/hankangbok
            </a>{" "}
          </h3>
          <h3>
            LinkedIn:{" "}
            <a href="www.linkedin.com/in/hankangbokbok/">
              linkedin.com/in/hankangbokbok/
            </a>
          </h3>
        </section>
        <p>Thank you for checking out my page!</p>
      </div>
    );
  }
}
