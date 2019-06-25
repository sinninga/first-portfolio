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
            <div className="about-left-content">
              <div className="edu-item">
                <img src="/assets/cuboulder.png" alt="" className="about-icon"/>
                <div className="edu-item-content">
                  <p className="edu-title">University of Colorado</p>
                  <p className="edu-location">Boulder, Colorado</p>
                </div>
              </div>
              <div className="edu-item">
                <img src="/assets/wagon-red.png" alt="" className="about-icon"/>
                <div className="edu-item-content">
                  <p className="edu-title">Le Wagon</p>
                  <p className="edu-location">Rio de Janeiro, Brazil</p>
                </div>
              </div>
              <div className="edu-item">
                <img src="/assets/cano.png" alt="" className="about-icon"/>
                <div className="edu-item-content">
                  <p className="edu-title">Cano Spanish School</p>
                  <p className="edu-location">Antigua, Guatemala</p>
                </div>
              </div>
              <div className="edu-item">
                <img src="/assets/sucre.png" alt="" className="about-icon"/>
                <div className="edu-item-content">
                  <p className="edu-title">Bolivian Spanish School</p>
                  <p className="edu-location">Sucre, Bolivia</p>
                </div>
              </div>
            </div>
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
