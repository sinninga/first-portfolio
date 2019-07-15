import React, { Component } from 'react';

class About extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const card = event.currentTarget;
    const image = card.childNodes[0].src;
    const modImage = document.getElementsByClassName("modal-image");
    modImage[0].src = image;
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
            <br/>
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
              <div className="edu-item">
                <div className="edu-icon-card">
                  <img src="/assets/photos/ih.jpeg" alt="" className="about-icon"/>
                </div>
                <div className="edu-item-content">
                  <p className="edu-title"><strong>International House</strong></p>
                  <p className="edu-location">Buenos Aires, Argentina</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-center">
            <div className="about-content-title-music">Music</div>
            <div className="about-content-title-music-desc"><strong>Composed, Performed and Recorded by Adam Sinning</strong></div>
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
              <audio controls="controls" style={{width: 200}}>
                <source src="/assets/songs/agp8.mp3" type="audio/mpeg" />
              </audio>
              <audio controls="controls" style={{width: 200}}>
                <source src="/assets/songs/14themoney.mp3" type="audio/mpeg" />
              </audio>
              <audio controls="controls" style={{width: 200}}>
                <source src="/assets/songs/6.mp3" type="audio/mpeg" />
              </audio>
              <audio controls="controls" style={{width: 200}}>
                <source src="/assets/songs/2done.mp3" type="audio/mpeg" />
              </audio>
              <audio controls="controls" style={{width: 200}}>
                <source src="/assets/songs/1(4).mp3" type="audio/mpeg" />
              </audio>
              <audio controls="controls" style={{width: 200}}>
                <source src="/assets/songs/32getready.mp3" type="audio/mpeg" />
              </audio>
            </div>
          </div>
          <div className="about-right">
            <div className="about-content-title">Photography</div>
            <div className="photos-container">
              <a href="#open-modal">
                <div className="photo-card" onClick={this.handleClick}>
                  <img className="photo" src="/assets/photos/photography/valpohouses.jpg" alt=""/>
                </div>
              </a>
              <a href="#open-modal">
                <div className="photo-card" onClick={this.handleClick}>
                  <img className="photo" src="/assets/photos/photography/canyon.jpg" alt=""/>
                </div>
              </a>
              <a href="#open-modal">
                <div className="photo-card" onClick={this.handleClick}>
                  <img className="photo" src="/assets/photos/photography/domes.jpg" alt=""/>
                </div>
              </a>
              <a href="#open-modal">
                <div className="photo-card" onClick={this.handleClick}>
                  <img className="photo" src="/assets/photos/photography/choquequirao.jpg" alt=""/>
                </div>
              </a>
              <a href="#open-modal">
                <div className="photo-card" onClick={this.handleClick}>
                  <img className="photo" src="/assets/photos/photography/karnak.jpg" alt=""/>
                </div>
              </a>
              <a href="#open-modal">
                <div className="photo-card" onClick={this.handleClick}>
                  <img className="photo" src="/assets/photos/photography/lake.jpg" alt=""/>
                </div>
              </a>
              <a href="#open-modal">
                <div className="photo-card" onClick={this.handleClick}>
                  <img className="photo" src="/assets/photos/photography/lizard.jpg" alt=""/>
                </div>
              </a>
              <a href="#open-modal">
                <div className="photo-card" onClick={this.handleClick}>
                  <img className="photo" src="/assets/photos/photography/barichara.jpg" alt=""/>
                </div>
              </a>
              <a href="#open-modal">
                <div className="photo-card" onClick={this.handleClick}>
                  <img className="photo" src="/assets/photos/photography/chachani.jpg" alt=""/>
                </div>
              </a>
              <a href="#open-modal">
                <div className="photo-card" onClick={this.handleClick}>
                  <img className="photo" src="/assets/photos/photography/colorbridge.jpg" alt=""/>
                </div>
              </a>
              <a href="#open-modal">
                <div className="photo-card" onClick={this.handleClick}>
                  <img className="photo" src="/assets/photos/photography/dali.jpg" alt=""/>
                </div>
              </a>
              <a href="#open-modal">
                <div className="photo-card" onClick={this.handleClick}>
                  <img className="photo" src="/assets/photos/photography/antigua.jpg" alt=""/>
                </div>
              </a>
              <a href="#open-modal">
                <div className="photo-card" onClick={this.handleClick}>
                  <img className="photo" src="/assets/photos/photography/gallinas.jpg" alt=""/>
                </div>
              </a>
              <a href="#open-modal">
                <div className="photo-card" onClick={this.handleClick}>
                  <img className="photo" src="/assets/photos/photography/huaraz.jpg" alt=""/>
                </div>
              </a>
              <a href="#open-modal">
                <div className="photo-card" onClick={this.handleClick}>
                  <img className="photo" src="/assets/photos/photography/jerash.jpg" alt=""/>
                </div>
              </a>
              <a href="#open-modal">
                <div className="photo-card" onClick={this.handleClick}>
                  <img className="photo" src="/assets/photos/photography/lavaflow.jpg" alt=""/>
                </div>
              </a>
              <a href="#open-modal">
                <div className="photo-card" onClick={this.handleClick}>
                  <img className="photo" src="/assets/photos/photography/market.jpg" alt=""/>
                </div>
              </a>
              <a href="#open-modal">
                <div className="photo-card" onClick={this.handleClick}>
                  <img className="photo" src="/assets/photos/photography/marsh.jpg" alt=""/>
                </div>
              </a>
              <a href="#open-modal">
                <div className="photo-card" onClick={this.handleClick}>
                  <img className="photo" src="/assets/photos/photography/statue.jpg" alt=""/>
                </div>
              </a>
              <a href="#open-modal">
                <div className="photo-card" onClick={this.handleClick}>
                  <img className="photo" src="/assets/photos/photography/sunsetfishing.jpg" alt=""/>
                </div>
              </a>
              <a href="#open-modal">
                <div className="photo-card" onClick={this.handleClick}>
                  <img className="photo" src="/assets/photos/photography/uyuni.jpg" alt=""/>
                </div>
              </a>
              <a href="#open-modal">
                <div className="photo-card" onClick={this.handleClick}>
                  <img className="photo" src="/assets/photos/photography/wadi.jpg" alt=""/>
                </div>
              </a>
              <a href="#open-modal">
                <div className="photo-card" onClick={this.handleClick}>
                  <img className="photo" src="/assets/photos/photography/waterfall.jpg" alt=""/>
                </div>
              </a>
              <a href="#open-modal">
                <div className="photo-card" onClick={this.handleClick}>
                  <img className="photo" src="/assets/photos/photography/valpo.jpg" alt=""/>
                </div>
              </a>
              <a href="#open-modal">
                <div className="photo-card" onClick={this.handleClick}>
                  <img className="photo" src="/assets/photos/photography/mosque.jpg" alt=""/>
                </div>
              </a>
              <a href="#open-modal">
                <div className="photo-card" onClick={this.handleClick}>
                  <img className="photo" src="/assets/photos/photography/shrine.jpg" alt=""/>
                </div>
              </a>
              <a href="#open-modal">
                <div className="photo-card" onClick={this.handleClick}>
                  <img className="photo" src="/assets/photos/photography/sign.jpg" alt=""/>
                </div>
              </a>
              <a href="#open-modal">
                <div className="photo-card" onClick={this.handleClick}>
                  <img className="photo" src="/assets/photos/photography/sunset.jpg" alt=""/>
                </div>
              </a>
              <a href="#open-modal">
                <div className="photo-card" onClick={this.handleClick}>
                  <img className="photo" src="/assets/photos/photography/temple.jpg" alt=""/>
                </div>
              </a>
              <a href="#open-modal">
                <div className="photo-card" onClick={this.handleClick}>
                  <img className="photo" src="/assets/photos/photography/wall.jpg" alt=""/>
                </div>
              </a>
              <a href="#open-modal">
                <div className="photo-card" onClick={this.handleClick}>
                  <img className="photo" src="/assets/photos/photography/redocean.jpg" alt=""/>
                </div>
              </a>
              <a href="#open-modal">
                <div className="photo-card" onClick={this.handleClick}>
                  <img className="photo" src="/assets/photos/photography/hkbuddha.jpg" alt=""/>
                </div>
              </a>
              <a href="#open-modal">
                <div className="photo-card" onClick={this.handleClick}>
                  <img className="photo" src="/assets/photos/photography/vietgate.jpg" alt=""/>
                </div>
              </a>
              <a href="#open-modal">
                <div className="photo-card" onClick={this.handleClick}>
                  <img className="photo" src="/assets/photos/photography/macau.jpg" alt=""/>
                </div>
              </a>
              <a href="#open-modal">
                <div className="photo-card" onClick={this.handleClick}>
                  <img className="photo" src="/assets/photos/photography/uji.jpg" alt=""/>
                </div>
              </a>
              <a href="#open-modal">
              <div className="photo-card" onClick={this.handleClick}>
                <img className="photo" src="/assets/photos/photography/lamps.jpg" alt=""/>
              </div>
              </a>
                <div id="open-modal" className="modal-window">
                <div>
                  <a href="#modal-close" title="Close" className="modal-close">close &times;</a>
                  <div className="modal-content">
                  <div className="icon1"></div>
                  <img className="modal-image" alt=""/>
                  <div className="icon2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About;
