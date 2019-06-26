import React, { Component } from 'react';

class About extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    console.log('Click happened');
    const card = event.currentTarget;
    console.log(card);
    card.classList.toggle("sky-blue");
  }

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
                <div className="edu-icon-card">
                  <img src="/assets/photos/cuboulder.png" alt="" className="about-icon"/>
                </div>
                <div className="edu-item-content">
                  <p className="edu-title"><strong>University of Colorado</strong></p>
                  <p className="edu-location">Boulder, Colorado</p>
                </div>
              </div>
              <div className="edu-item">
                <div className="edu-icon-card">
                  <img src="/assets/photos/wagon-red.png" alt="" className="about-icon"/>
                </div>
                <div className="edu-item-content">
                  <p className="edu-title"><strong>Le Wagon</strong></p>
                  <p className="edu-location">Rio de Janeiro, Brazil</p>
                </div>
              </div>
              <div className="edu-item">
                <div className="edu-icon-card">
                  <img src="/assets/photos/cano.png" alt="" className="about-icon"/>
                </div>
                <div className="edu-item-content">
                  <p className="edu-title"><strong>Cano Spanish School</strong></p>
                  <p className="edu-location">Antigua, Guatemala</p>
                </div>
              </div>
              <div className="edu-item">
                <div className="edu-icon-card">
                  <img src="/assets/photos/sucre.png" alt="" className="about-icon"/>
                </div>
                <div className="edu-item-content">
                  <p className="edu-title"><strong>Sucre Spanish School</strong></p>
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
              <div className="photo-card" onClick={this.handleClick}>
                <img className="photo" src="/assets/photos/photography/antigua.jpg" alt=""/>
              </div>
              <div className="photo-card" onClick={this.handleClick}>
                <img className="photo" src="/assets/photos/photography/canyon.jpg" alt=""/>
              </div>
              <div className="photo-card" onClick={this.handleClick}>
                <img className="photo" src="/assets/photos/photography/domes.jpg" alt=""/>
              </div>
              <div className="photo-card" onClick={this.handleClick}>
                <img className="photo" src="/assets/photos/photography/karnak.jpg" alt=""/>
              </div>
              <div className="photo-card" onClick={this.handleClick}>
                <img className="photo" src="/assets/photos/photography/lake.jpg" alt=""/>
              </div>
              <div className="photo-card" onClick={this.handleClick}>
                <img className="photo" src="/assets/photos/photography/lizard.jpg" alt=""/>
              </div>
              <div className="photo-card" onClick={this.handleClick}>
                <img className="photo" src="/assets/photos/photography/mosque.jpg" alt=""/>
              </div>
              <div className="photo-card" onClick={this.handleClick}>
                <img className="photo" src="/assets/photos/photography/shrine.jpg" alt=""/>
              </div>
              <div className="photo-card" onClick={this.handleClick}>
                <img className="photo" src="/assets/photos/photography/sign.jpg" alt=""/>
              </div>
              <div className="photo-card" onClick={this.handleClick}>
                <img className="photo" src="/assets/photos/photography/sunset.jpg" alt=""/>
              </div>
              <div className="photo-card" onClick={this.handleClick}>
                <img className="photo" src="/assets/photos/photography/temple.jpg" alt=""/>
              </div>
              <div className="photo-card" onClick={this.handleClick}>
                <img className="photo" src="/assets/photos/photography/wall.jpg" alt=""/>
              </div>
              <div className="photo-card" onClick={this.handleClick}>
                <img className="photo" src="/assets/photos/photography/fruit.jpg" alt=""/>
              </div>
              <div className="photo-card" onClick={this.handleClick}>
                <img className="photo" src="/assets/photos/photography/gold.jpg" alt=""/>
              </div>
              <div className="photo-card" onClick={this.handleClick}>
                <img className="photo" src="/assets/photos/photography/hktemp.jpg" alt=""/>
              </div>
              <div className="photo-card" onClick={this.handleClick}>
                <img className="photo" src="/assets/photos/photography/lamps.jpg" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About;
