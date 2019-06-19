import React, { Component } from 'react';

class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <div className="banner-content">
          <p className="adam">Adam Sinning</p>
          <h4 className="tagline">Developer, Designer, Dreamer</h4>
          <button className="btn btn-primary banner-button">Contact</button>
        </div>
      </div>
    )
  }
}

export default Banner;
