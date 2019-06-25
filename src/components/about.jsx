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
                  <p className="edu-title"><strong>University of Colorado</strong></p>
                  <p className="edu-location">Boulder, Colorado</p>
                </div>
              </div>
              <div className="edu-item">
                <img src="/assets/wagon-red.png" alt="" className="about-icon"/>
                <div className="edu-item-content">
                  <p className="edu-title"><strong>Le Wagon</strong></p>
                  <p className="edu-location">Rio de Janeiro, Brazil</p>
                </div>
              </div>
              <div className="edu-item">
                <img src="/assets/cano.png" alt="" className="about-icon"/>
                <div className="edu-item-content">
                  <p className="edu-title"><strong>Cano Spanish School</strong></p>
                  <p className="edu-location">Antigua, Guatemala</p>
                </div>
              </div>
              <div className="edu-item">
                <img src="/assets/sucre.png" alt="" className="about-icon"/>
                <div className="edu-item-content">
                  <p className="edu-title"><strong>Bolivian Spanish School</strong></p>
                  <p className="edu-location">Sucre, Bolivia</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-center">
            <div className="about-content-title-music">Music</div>
            <div className="about-content-title-music-desc"><strong>Guitar and Piano by Adam Sinning</strong></div>
            <div className="audio-container">
              <audio controls="controls" style={{width: 200}}>
                <source src="/assets/songs/agp1.mp3" type="audio/mpeg" />
              </audio>
              <audio controls="controls" style={{width: 200}}>
                <source src="/assets/songs/agp2.mp3" type="audio/mpeg" />
              </audio>
              <audio controls="controls" style={{width: 200}}>
                <source src="/assets/songs/agp4.mp3" type="audio/mpeg" />
              </audio>
              <audio controls="controls" style={{width: 200}}>
                <source src="/assets/songs/agp5.mp3" type="audio/mpeg" />
              </audio>
              <audio controls="controls" style={{width: 200}}>
                <source src="/assets/songs/agp6.mp3" type="audio/mpeg" />
              </audio>
              <audio controls="controls" style={{width: 200}}>
                <source src="/assets/songs/agp7.mp3" type="audio/mpeg" />
              </audio>
            </div>
          </div>
          <div className="about-right">
            <div className="about-content-title">Photography</div>
            <div className="photos-container">
              <div className="photo-card">
                <img className="photo" src="/assets/wall.jpg" alt=""/>
              </div>
              <div className="photo-card">
                <img className="photo" src="/assets/antigua.jpg" alt=""/>
              </div>
              <div className="photo-card">
                <img className="photo" src="/assets/canyon.jpg" alt=""/>
              </div>
              <div className="photo-card">
                <img className="photo" src="/assets/domes.jpg" alt=""/>
              </div>
              <div className="photo-card">
                <img className="photo" src="/assets/karnak.jpg" alt=""/>
              </div>
              <div className="photo-card">
                <img className="photo" src="/assets/lake.jpg" alt=""/>
              </div>
              <div className="photo-card">
                <img className="photo" src="/assets/mosque.jpg" alt=""/>
              </div>
              <div className="photo-card">
                <img className="photo" src="/assets/shrine.jpg" alt=""/>
              </div>
              <div className="photo-card">
                <img className="photo" src="/assets/sign.jpg" alt=""/>
              </div>
              <div className="photo-card">
                <img className="photo" src="/assets/sunset.jpg" alt=""/>
              </div>
              <div className="photo-card">
                <img className="photo" src="/assets/temple.jpg" alt=""/>
              </div>
              <div className="photo-card">
                <img className="photo" src="/assets/venice.jpg" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About;
