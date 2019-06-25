import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <a className="navbar-brand" href="#skill-link">Skills</a>
        <a className="navbar-brand" href="#projects-link">Projects</a>
        <a className="navbar-brand" href="#about-link">About</a>
        <div className="nav-home">
          <a className="navbar-brand" href="#">
            <img className="nav-img" src="/assets/photos/home2.jpg" alt=""/>
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
