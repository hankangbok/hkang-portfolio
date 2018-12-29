import React from 'react';

export class ContactPage extends React.Component {
  render() {
    return (
    <div className="container">
      <h1 className='section-title'>Contact</h1>
      <div>
        <p>Thank you for checking out my page!</p>
        <p>If you'd like to get in touch, please contact me via:</p>
      </div>
      <section id="contactinfo">
        <h1>Let's talk!</h1>
        <h2>Email</h2>
        <h2>Github</h2>
        <h2>LinkedIn</h2>
      </section>
    </div>
    );
  }
}