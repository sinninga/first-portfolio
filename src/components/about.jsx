import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="about">
      <a name="about-link"/>
        <div className="about-title">About</div>
        <br/>
        <div className="about-content">
          <div className="about-left">
            <div className="about-content-title">Education</div>
          </div>
          <div className="about-center">
            <div className="about-content-title">Music</div>
          </div>
          <div className="about-right">
            <div className="about-content-title">Photography</div>
          </div>
        </div>
      </div>
    )
  }
}

export default About;
