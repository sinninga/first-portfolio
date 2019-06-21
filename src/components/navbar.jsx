import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#skill-link">Skills</a>
        <a className="navbar-brand" href="#projects-link">Projects</a>
        <a className="navbar-brand" href="#about-link">About</a>
      </nav>
    );
  }
}

export default Navbar;
