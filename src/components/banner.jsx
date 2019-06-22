import React, { Component } from 'react';

class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <div className="banner-content">
          <p className="adam">Adam Sinning</p>
          <h4 className="tagline">Full-Stack Developer</h4>
          <a href="#projects-link">
            <button className="btn btn-primary banner-button">See My Work</button>
          </a>
        </div>
      </div>
    )
  }
}

export default Banner;
